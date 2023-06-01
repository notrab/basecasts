/* eslint-disable */
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, is compliant with the date-time format outlined in section 5.6 of the RFC 3339
   * profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of an exact instant on the timeline such as the instant that a user account was created.
   *
   * # Input Coercion
   *
   * When expected as an input type, only RFC 3339 compliant date-time strings are accepted. All other input values raise a query error indicating an incorrect type.
   *
   * # Result Coercion
   *
   * Where an RFC 3339 compliant date-time string has a time-zone other than UTC, it is shifted to UTC.
   * For example, the date-time string 2016-01-01T14:10:20+01:00 is shifted to 2016-01-01T13:10:20Z.
   */
  DateTime: { input: any; output: any };
  /** A scalar to validate the email as it is defined in the HTML specification. */
  Email: { input: any; output: any };
  /** An URL as defined by RFC1738. For example, `https://grafbase.com/foo/` or `mailto:example@grafbase.com`. */
  URL: { input: any; output: any };
};

export type Episode = {
  __typename?: "Episode";
  content?: Maybe<Scalars["String"]["output"]>;
  /** when the model was created */
  createdAt: Scalars["DateTime"]["output"];
  excerpt?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier */
  id: Scalars["ID"]["output"];
  slug: Scalars["String"]["output"];
  thumbnail?: Maybe<Scalars["URL"]["output"]>;
  title: Scalars["String"]["output"];
  /** when the model was updated */
  updatedAt: Scalars["DateTime"]["output"];
  videoUrl?: Maybe<Scalars["URL"]["output"]>;
};

export type EpisodeByInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type EpisodeConnection = {
  __typename?: "EpisodeConnection";
  edges?: Maybe<Array<Maybe<EpisodeEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Episode */
export type EpisodeCreateInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  slug: Scalars["String"]["input"];
  thumbnail?: InputMaybe<Scalars["URL"]["input"]>;
  title: Scalars["String"]["input"];
  videoUrl?: InputMaybe<Scalars["URL"]["input"]>;
};

export type EpisodeCreatePayload = {
  __typename?: "EpisodeCreatePayload";
  episode?: Maybe<Episode>;
};

export type EpisodeDeletePayload = {
  __typename?: "EpisodeDeletePayload";
  deletedId: Scalars["ID"]["output"];
};

export type EpisodeEdge = {
  __typename?: "EpisodeEdge";
  cursor: Scalars["String"]["output"];
  node: Episode;
};

export type EpisodeOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to update a Episode */
export type EpisodeUpdateInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<Scalars["URL"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  videoUrl?: InputMaybe<Scalars["URL"]["input"]>;
};

export type EpisodeUpdatePayload = {
  __typename?: "EpisodeUpdatePayload";
  episode?: Maybe<Episode>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Create a Episode */
  episodeCreate?: Maybe<EpisodeCreatePayload>;
  /** Delete a Episode by ID or unique field */
  episodeDelete?: Maybe<EpisodeDeletePayload>;
  /** Update a Episode */
  episodeUpdate?: Maybe<EpisodeUpdatePayload>;
  /** Create a User */
  userCreate?: Maybe<UserCreatePayload>;
  /** Delete a User by ID or unique field */
  userDelete?: Maybe<UserDeletePayload>;
  /** Update a User */
  userUpdate?: Maybe<UserUpdatePayload>;
};

export type MutationEpisodeCreateArgs = {
  input: EpisodeCreateInput;
};

export type MutationEpisodeDeleteArgs = {
  by: EpisodeByInput;
};

export type MutationEpisodeUpdateArgs = {
  by: EpisodeByInput;
  input: EpisodeUpdateInput;
};

export type MutationUserCreateArgs = {
  input: UserCreateInput;
};

export type MutationUserDeleteArgs = {
  by: UserByInput;
};

export type MutationUserUpdateArgs = {
  by: UserByInput;
  input: UserUpdateInput;
};

export enum OrderByDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  /** Query a single Episode by an ID or a unique field */
  episode?: Maybe<Episode>;
  /** Paginated query to fetch the whole list of `Episode`. */
  episodeCollection?: Maybe<EpisodeConnection>;
  /** Query a single User by an ID or a unique field */
  user?: Maybe<User>;
  /** Paginated query to fetch the whole list of `User`. */
  userCollection?: Maybe<UserConnection>;
};

export type QueryEpisodeArgs = {
  by: EpisodeByInput;
};

export type QueryEpisodeCollectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EpisodeOrderByInput>;
};

export type QueryUserArgs = {
  by: UserByInput;
};

export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserOrderByInput>;
};

export type User = {
  __typename?: "User";
  avatar?: Maybe<Scalars["URL"]["output"]>;
  /** when the model was created */
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["Email"]["output"];
  /** Unique identifier */
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** when the model was updated */
  updatedAt: Scalars["DateTime"]["output"];
};

export type UserByInput = {
  email?: InputMaybe<Scalars["Email"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a User */
export type UserCreateInput = {
  avatar?: InputMaybe<Scalars["URL"]["input"]>;
  email: Scalars["Email"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserCreatePayload = {
  __typename?: "UserCreatePayload";
  user?: Maybe<User>;
};

export type UserDeletePayload = {
  __typename?: "UserDeletePayload";
  deletedId: Scalars["ID"]["output"];
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to update a User */
export type UserUpdateInput = {
  avatar?: InputMaybe<Scalars["URL"]["input"]>;
  email?: InputMaybe<Scalars["Email"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdatePayload = {
  __typename?: "UserUpdatePayload";
  user?: Maybe<User>;
};

export type GetEpisodeBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type GetEpisodeBySlugQuery = {
  __typename?: "Query";
  episode?: {
    __typename?: "Episode";
    id: string;
    title: string;
    slug: string;
    thumbnail?: any | null;
    createdAt: any;
    videoUrl?: any | null;
  } | null;
};

export type EpisodeIndexPageQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type EpisodeIndexPageQueryQuery = {
  __typename?: "Query";
  episodeCollection?:
    | ({ __typename?: "EpisodeConnection" } & {
        " $fragmentRefs"?: {
          EpisodeList_EpisodeConnectionFragmentFragment: EpisodeList_EpisodeConnectionFragmentFragment;
        };
      })
    | null;
};

export type IndexPageQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type IndexPageQueryQuery = {
  __typename?: "Query";
  episodeCollection?:
    | ({ __typename?: "EpisodeConnection" } & {
        " $fragmentRefs"?: {
          EpisodeList_EpisodeConnectionFragmentFragment: EpisodeList_EpisodeConnectionFragmentFragment;
        };
      })
    | null;
};

export type EpisodeList_EpisodeFragmentFragment = {
  __typename?: "Episode";
  title: string;
  slug: string;
  excerpt?: string | null;
  thumbnail?: any | null;
  createdAt: any;
} & { " $fragmentName"?: "EpisodeList_EpisodeFragmentFragment" };

export type EpisodeList_EpisodeConnectionFragmentFragment = {
  __typename?: "EpisodeConnection";
  edges?: Array<{
    __typename?: "EpisodeEdge";
    cursor: string;
    node: { __typename?: "Episode" } & {
      " $fragmentRefs"?: {
        EpisodeList_EpisodeFragmentFragment: EpisodeList_EpisodeFragmentFragment;
      };
    };
  } | null> | null;
} & { " $fragmentName"?: "EpisodeList_EpisodeConnectionFragmentFragment" };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars["Email"]["input"];
}>;

export type GetUserByEmailQuery = {
  __typename?: "Query";
  user?: { __typename?: "User"; id: string } | null;
};

export type CreateUserByEmailMutationVariables = Exact<{
  name?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["Email"]["input"];
  avatar?: InputMaybe<Scalars["URL"]["input"]>;
}>;

export type CreateUserByEmailMutation = {
  __typename?: "Mutation";
  userCreate?: {
    __typename?: "UserCreatePayload";
    user?: {
      __typename?: "User";
      id: string;
      name?: string | null;
      email: any;
      avatar?: any | null;
    } | null;
  } | null;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const EpisodeList_EpisodeFragmentFragmentDoc = new TypedDocumentString(
  `
    fragment EpisodeList_EpisodeFragment on Episode {
  title
  slug
  excerpt
  thumbnail
  createdAt
}
    `,
  { fragmentName: "EpisodeList_EpisodeFragment" }
) as unknown as TypedDocumentString<
  EpisodeList_EpisodeFragmentFragment,
  unknown
>;
export const EpisodeList_EpisodeConnectionFragmentFragmentDoc =
  new TypedDocumentString(
    `
    fragment EpisodeList_EpisodeConnectionFragment on EpisodeConnection {
  edges {
    cursor
    node {
      ...EpisodeList_EpisodeFragment
    }
  }
}
    fragment EpisodeList_EpisodeFragment on Episode {
  title
  slug
  excerpt
  thumbnail
  createdAt
}`,
    { fragmentName: "EpisodeList_EpisodeConnectionFragment" }
  ) as unknown as TypedDocumentString<
    EpisodeList_EpisodeConnectionFragmentFragment,
    unknown
  >;
export const GetEpisodeBySlugDocument = new TypedDocumentString(`
    query GetEpisodeBySlug($slug: String!) {
  episode(by: {slug: $slug}) {
    id
    title
    slug
    thumbnail
    createdAt
    videoUrl
  }
}
    `) as unknown as TypedDocumentString<
  GetEpisodeBySlugQuery,
  GetEpisodeBySlugQueryVariables
>;
export const EpisodeIndexPageQueryDocument = new TypedDocumentString(`
    query EpisodeIndexPageQuery($first: Int) {
  episodeCollection(first: $first, orderBy: {createdAt: DESC}) {
    ...EpisodeList_EpisodeConnectionFragment
  }
}
    fragment EpisodeList_EpisodeFragment on Episode {
  title
  slug
  excerpt
  thumbnail
  createdAt
}
fragment EpisodeList_EpisodeConnectionFragment on EpisodeConnection {
  edges {
    cursor
    node {
      ...EpisodeList_EpisodeFragment
    }
  }
}`) as unknown as TypedDocumentString<
  EpisodeIndexPageQueryQuery,
  EpisodeIndexPageQueryQueryVariables
>;
export const IndexPageQueryDocument = new TypedDocumentString(`
    query IndexPageQuery($first: Int) {
  episodeCollection(first: $first, orderBy: {createdAt: DESC}) {
    ...EpisodeList_EpisodeConnectionFragment
  }
}
    fragment EpisodeList_EpisodeFragment on Episode {
  title
  slug
  excerpt
  thumbnail
  createdAt
}
fragment EpisodeList_EpisodeConnectionFragment on EpisodeConnection {
  edges {
    cursor
    node {
      ...EpisodeList_EpisodeFragment
    }
  }
}`) as unknown as TypedDocumentString<
  IndexPageQueryQuery,
  IndexPageQueryQueryVariables
>;
export const GetUserByEmailDocument = new TypedDocumentString(`
    query GetUserByEmail($email: Email!) {
  user(by: {email: $email}) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  GetUserByEmailQuery,
  GetUserByEmailQueryVariables
>;
export const CreateUserByEmailDocument = new TypedDocumentString(`
    mutation CreateUserByEmail($name: String, $email: Email!, $avatar: URL) {
  userCreate(input: {name: $name, email: $email, avatar: $avatar}) {
    user {
      id
      name
      email
      avatar
    }
  }
}
    `) as unknown as TypedDocumentString<
  CreateUserByEmailMutation,
  CreateUserByEmailMutationVariables
>;
