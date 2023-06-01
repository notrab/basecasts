import { graphql } from "@/gql";
import type {
  EpisodeIndexPageQueryQuery,
  EpisodeIndexPageQueryQueryVariables,
} from "@/gql/graphql";
import { grafbase } from "@/lib/grafbase";

import { EpisodeList } from "@/components/episode-list";

const EpisodeIndexPageQuery = graphql(/* GraphQL */ `
  query EpisodeIndexPageQuery($first: Int) {
    episodeCollection(first: $first, orderBy: { createdAt: DESC }) {
      ...EpisodeList_EpisodeConnectionFragment
    }
  }
`);

export default async function EpisodesPage() {
  const { episodeCollection } = await grafbase.request<
    EpisodeIndexPageQueryQuery,
    EpisodeIndexPageQueryQueryVariables
  >(EpisodeIndexPageQuery.toString(), {
    first: 100,
  });

  return (
    <div>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              All Episodes
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/50">
              Screencasts teaching you how to build the best GraphQL backends
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* lessonCollection is not of the type EpisodeList_EpisodeConnectionFragment dur */}
          <EpisodeList query={episodeCollection} />
        </div>
      </div>
    </div>
  );
}
