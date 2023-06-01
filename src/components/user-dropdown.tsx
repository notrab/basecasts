"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";

export function UserDropdown() {
  const { data: session, status } = useSession();
  const isAdmin = session && session?.user?.groups?.includes("admin");

  if (status === "loading") return null;

  if (!session) {
    return (
      <button
        onClick={() => signIn("github")}
        className="appearance-none text-sm font-semibold leading-6 text-black outline-none"
      >
        Sign in with GitHub <span aria-hidden="true">&rarr;</span>
      </button>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      {isAdmin && (
        <div className="flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            New Episode
          </button>
        </div>
      )}

      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 overflow-hidden h-8 w-8">
            <span className="sr-only">Open user menu</span>
            {session?.user?.image ? (
              <Image
                width={32}
                height={32}
                src={session?.user?.image || "/user.png"}
                alt={session?.user?.name || "User"}
                className="rounded-full"
              />
            ) : (
              <svg
                className="h-full w-full text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-4 py-3">
              <p className="text-sm">Signed in as</p>
              <p className="truncate text-sm font-medium text-gray-900">
                {session?.user?.email}
              </p>
            </div>

            <div className="py-1">
              <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Subscribe
                </a>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-100"
                >
                  Sign out
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
