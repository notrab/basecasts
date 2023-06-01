import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { grafbase } from "./grafbase";
import { graphql } from "../gql";
import {
  GetUserByEmailQuery,
  GetUserByEmailQueryVariables,
  CreateUserByEmailMutation,
  CreateUserByEmailMutationVariables,
} from "../gql/graphql";

const GetUserByEmailDocument = graphql(/* GraphQL */ `
  query GetUserByEmail($email: Email!) {
    user(by: { email: $email }) {
      id
    }
  }
`);

const CreateUserByEmailDocument = graphql(/* GraphQL */ `
  mutation CreateUserByEmail($name: String, $email: Email!, $avatar: URL) {
    userCreate(input: { name: $name, email: $email, avatar: $avatar }) {
      user {
        id
        name
        email
        avatar
      }
    }
  }
`);

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user }) {
      const { user: existingUser } = await grafbase.request<
        GetUserByEmailQuery,
        GetUserByEmailQueryVariables
      >(GetUserByEmailDocument.toString(), {
        email: user?.email,
      });

      if (!existingUser) {
        const response = await grafbase.request<
          CreateUserByEmailMutation,
          CreateUserByEmailMutationVariables
        >(CreateUserByEmailDocument.toString(), {
          name: user?.name,
          email: user?.email,
          avatar: user?.image,
        });
      }

      // TODO: Update with new profile

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.groups = ["admin"];
      }

      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.groups = token.groups || [];
      }

      return session;
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
};
