import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export default async function AboutPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              About
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl">
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <div className="prose max-w-none">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  );
}
