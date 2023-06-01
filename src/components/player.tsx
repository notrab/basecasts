"use client";

import ReactPlayer from "react-player";

type Props = {
  url?: string;
  canView?: boolean;
};

export function Player(props: Props) {
  const { canView = false, url } = props;

  if (canView) {
    return <ReactPlayer url={url} height="100%" width="100%" controls />;
  }

  return <div>Register to watch</div>;
}
