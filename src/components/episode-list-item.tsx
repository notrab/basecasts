"use client";

import Link from "next/link";
import Image from "next/image";

import { type FragmentType, useFragment } from "@/gql/fragment-masking";
import { graphql } from "@/gql";

import BasecastsSVG from "../../public/basecasts.svg";

export const EpisodeList_EpisodeFragment = graphql(/* GraphQL */ `
  fragment EpisodeList_EpisodeFragment on Episode {
    title
    slug
    excerpt
    thumbnail
    createdAt
  }
`);

type EpisodeListItemProps = {
  episode: FragmentType<typeof EpisodeList_EpisodeFragment>;
  private?: boolean;
};

export function EpisodeListItem(props: EpisodeListItemProps) {
  const episode = useFragment(EpisodeList_EpisodeFragment, props.episode);

  return (
    <li>
      <Link href={`/episodes/${episode.slug}`} className="group">
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-black relative">
          {props.private && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="inline-block rounded-md bg-green-500 px-2 py-1 text-sm font-semibold text-green-900">
                Sign up to watch early
              </p>
            </div>
          )}
          <Image
            src={BasecastsSVG}
            alt="Basecasts"
            className="h-12 w-auto text-white"
          />
        </div>
        <div className="col-span-2 space-y-3 px-3 pt-3">
          <p className="text-lg font-semibold text-black transition group-hover:text-green-500 group-hover:underline">
            {episode.title}
          </p>

          {/* {episode.pro && (
            <span className="bg-red-500 text-white font-semibold text-sm px-2 py-1 rounded-md">
              Pro
            </span>
          )} */}

          <p className="text-sm text-black">{episode.excerpt}</p>

          <p className="text-sm font-medium text-black/50">
            {new Intl.DateTimeFormat("en-GB", {
              dateStyle: "medium",
            }).format(Date.parse(episode.createdAt))}
          </p>
        </div>
      </Link>
    </li>
  );
}
