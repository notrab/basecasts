"use client";

import { useSession } from "next-auth/react";

import { graphql, useFragment, type FragmentType } from "@/gql";
import { EpisodeListItem } from "@/components/episode-list-item";

const EpisodeList_EpisodeConnectionFragment = graphql(/* GraphQL */ `
  fragment EpisodeList_EpisodeConnectionFragment on EpisodeConnection {
    edges {
      cursor
      node {
        ...EpisodeList_EpisodeFragment
      }
    }
  }
`);

type EpisodeListProps = {
  query: FragmentType<typeof EpisodeList_EpisodeConnectionFragment>;
};

export function EpisodeList(props: EpisodeListProps) {
  const { status } = useSession();
  const { edges } = useFragment(
    EpisodeList_EpisodeConnectionFragment,
    props.query
  );
  const [latest, ...episodes] = edges || [];

  const loggedOut = status === "unauthenticated";

  return (
    <ol className="grid grid-cols-1 gap-6 md:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {latest?.node && (
        <EpisodeListItem episode={latest?.node} private={loggedOut} />
      )}
      {episodes.map((edge) => (
        // The episode type won't be correct because of the parent queries...
        <EpisodeListItem key={edge?.cursor} episode={edge?.node} />
      ))}
    </ol>
  );
}
