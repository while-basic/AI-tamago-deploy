"use server";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
const navigation = [
  {
    name: "About",
    href: "https://github.com/ykhli/ai-tamago",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function Navbar() {
  const { userId } = auth();
  return (
    <div className="bg-gray-900 w-full fixed top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="ml-6">
              <div className="flex space-x-2 sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-3 py-2 text-gray-300">
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=ykhli&repo=ai-tamago&type=star&count=true"
                    frameBorder="0"
                    scrolling="0"
                    width="150"
                    height="20"
                    title="GitHub"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link
                href="/sign-in"
                className="rounded-md bg-gray-800 py-2 px-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
