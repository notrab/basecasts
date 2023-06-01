"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";

export function UserDropdown() {
  const { data: session, status } = useSession();
  const isAdmin: boolean = session && session?.user?.groups?.includes("admin");

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
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <Image
              width={32}
              height={32}
              src={session?.user?.image}
              alt={session?.user?.name}
              className="rounded-full"
            />
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
