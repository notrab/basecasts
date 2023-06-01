/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query GetEpisodeBySlug($slug: String!) {\n    episode(by: { slug: $slug }) {\n      id\n      title\n      slug\n      thumbnail\n      createdAt\n      videoUrl\n    }\n  }\n":
    types.GetEpisodeBySlugDocument,
  "\n  query EpisodeIndexPageQuery($first: Int) {\n    episodeCollection(first: $first, orderBy: { createdAt: DESC }) {\n      ...EpisodeList_EpisodeConnectionFragment\n    }\n  }\n":
    types.EpisodeIndexPageQueryDocument,
  "\n  query IndexPageQuery($first: Int) {\n    episodeCollection(first: $first, orderBy: { createdAt: DESC }) {\n      ...EpisodeList_EpisodeConnectionFragment\n    }\n  }\n":
    types.IndexPageQueryDocument,
  "\n  fragment EpisodeList_EpisodeFragment on Episode {\n    title\n    slug\n    excerpt\n    thumbnail\n    createdAt\n  }\n":
    types.EpisodeList_EpisodeFragmentFragmentDoc,
  "\n  fragment EpisodeList_EpisodeConnectionFragment on EpisodeConnection {\n    edges {\n      cursor\n      node {\n        ...EpisodeList_EpisodeFragment\n      }\n    }\n  }\n":
    types.EpisodeList_EpisodeConnectionFragmentFragmentDoc,
  "\n  query GetUserByEmail($email: Email!) {\n    user(by: { email: $email }) {\n      id\n    }\n  }\n":
    types.GetUserByEmailDocument,
  "\n  mutation CreateUserByEmail($name: String, $email: Email!, $avatar: URL) {\n    userCreate(input: { name: $name, email: $email, avatar: $avatar }) {\n      user {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n":
    types.CreateUserByEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetEpisodeBySlug($slug: String!) {\n    episode(by: { slug: $slug }) {\n      id\n      title\n      slug\n      thumbnail\n      createdAt\n      videoUrl\n    }\n  }\n"
): typeof import("./graphql").GetEpisodeBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EpisodeIndexPageQuery($first: Int) {\n    episodeCollection(first: $first, orderBy: { createdAt: DESC }) {\n      ...EpisodeList_EpisodeConnectionFragment\n    }\n  }\n"
): typeof import("./graphql").EpisodeIndexPageQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query IndexPageQuery($first: Int) {\n    episodeCollection(first: $first, orderBy: { createdAt: DESC }) {\n      ...EpisodeList_EpisodeConnectionFragment\n    }\n  }\n"
): typeof import("./graphql").IndexPageQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment EpisodeList_EpisodeFragment on Episode {\n    title\n    slug\n    excerpt\n    thumbnail\n    createdAt\n  }\n"
): typeof import("./graphql").EpisodeList_EpisodeFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment EpisodeList_EpisodeConnectionFragment on EpisodeConnection {\n    edges {\n      cursor\n      node {\n        ...EpisodeList_EpisodeFragment\n      }\n    }\n  }\n"
): typeof import("./graphql").EpisodeList_EpisodeConnectionFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetUserByEmail($email: Email!) {\n    user(by: { email: $email }) {\n      id\n    }\n  }\n"
): typeof import("./graphql").GetUserByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateUserByEmail($name: String, $email: Email!, $avatar: URL) {\n    userCreate(input: { name: $name, email: $email, avatar: $avatar }) {\n      user {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n"
): typeof import("./graphql").CreateUserByEmailDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
