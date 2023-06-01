import Image from "next/image";
import Link from "next/link";

import SquaresSVG from "../../public/squares.svg";

export function Hero() {
  return (
    <div className="relative">
      <div className="relative z-10 mx-auto max-w-3xl py-32 sm:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-6xl">
            Learn something new with Grafbase,{" "}
            <span className="text-green-600">every week</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-black/60">
            Screencasts teaching you how to build the best GraphQL backends
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/lessons"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Watch free episodes
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 w-full select-none">
        <Image src={SquaresSVG} role="presentation" alt="" />
      </div>
    </div>
  );
}
