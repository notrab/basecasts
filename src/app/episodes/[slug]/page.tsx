import { CalendarIcon } from "@heroicons/react/24/outline";

import { graphql } from "@/gql";
import type {
  GetEpisodeBySlugQuery,
  GetEpisodeBySlugQueryVariables,
} from "@/gql/graphql";
import { grafbase } from "@/lib/grafbase";
import { Player } from "@/components/player";

const GetEpisodeBySlugDocument = graphql(/* GraphQL */ `
  query GetEpisodeBySlug($slug: String!) {
    episode(by: { slug: $slug }) {
      id
      title
      slug
      thumbnail
      createdAt
      videoUrl
    }
  }
`);

export async function generateStaticParams() {
  return [];
}

export default async function EpisodePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { episode } = await grafbase.request<
    GetEpisodeBySlugQuery,
    GetEpisodeBySlugQueryVariables
  >(GetEpisodeBySlugDocument.toString(), {
    slug,
  });

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="space-y-6 py-6 md:py-12">
          <div className="relative z-20 flex aspect-video items-center justify-center overflow-hidden bg-black md:rounded-md">
            <Player url={episode?.videoUrl} canView />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6 md:space-y-12">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            {episode?.title}
          </h1>
          <p className="flex items-center justify-center space-x-3 text-sm font-medium text-green-500">
            <CalendarIcon className="h-5 w-5 text-green-500" />
            <span>
              {new Intl.DateTimeFormat("en-GB", {
                dateStyle: "medium",
              }).format(Date.parse(episode?.createdAt))}
            </span>
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="prose max-w-none">
            <p>Hello world</p>
          </div>
        </div>
      </div>
    </>
  );
}
