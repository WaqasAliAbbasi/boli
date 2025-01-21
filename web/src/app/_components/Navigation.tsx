"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Translate", href: "/translations" },
];
import { classNames } from "@/utils";
import React from "react";

export const Navigation: React.FC = () => {
  const currentPath = usePathname();
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Image
                alt="Boli"
                src="/logo.svg"
                width={10}
                height={10}
                className="block h-8 w-auto lg:hidden"
              />
              <Image
                alt="Boli"
                src="/logo.svg"
                width={10}
                height={10}
                className="hidden h-8 w-auto lg:block"
              />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const isCurrent = item.href === currentPath;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={classNames(
                      isCurrent
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
