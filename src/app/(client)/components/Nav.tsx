"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// const Navbar = () => {
//     const [openNav, setOpenNav] = useState(false);

//     useEffect(() => {
//       window.addEventListener(
//         "resize",
//         () => window.innerWidth >= 960 && setOpenNav(false),
//       );
//     }, []);

//   return (
//     <>
<div className="h-[30rem] -z-50 w-screen absolute overflow-y-hidden">
  <Image
    src={"/images/boots-gallery1.jpeg"}
    width={1000}
    height={1000}
    alt="Unisa boots"
    className="w-screen object-bottom object-cover md:h-[1000px]"
  />
</div>;
//     </>
//   );
// };

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const NavbarDefault = () => {
  return (
    <>
      <div className="h-[30rem] -z-50 w-screen absolute overflow-y-hidden">
        <Image
          src={"/images/boots-gallery1.jpeg"}
          width={1000}
          height={1000}
          alt="Unisa boots"
          className="w-screen object-bottom object-cover md:h-[1000px]"
        />
      </div>
      <Disclosure as="nav" className=" w-screen ">
        {({ open }) => (
          <>
            <div
              className={`bg-gradient-to-b from-black from-50% ${
                open ? "bg-black sm:bg-transparent" : ""
              }`}
            >
              <div className="flex h-32 px-4 sm:px-6 lg:px-8 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      width={0}
                      height={0}
                      className="h-16 w-auto"
                      src="/logo.svg"
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8 text-white">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link
                      href="/"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                    >
                      Om oss
                    </Link>
                    <Link
                      href="/brands"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                    >
                      Merker
                    </Link>
                    <Link
                      href="/gallery"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                    >
                      Galleri
                    </Link>
                  </div>
                </div>

                <div className="mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel
              className={`absolute w-screen sm:hidden bg-gradient-to-b from-black from-80% pb-10`}
            >
              <div className="space-y-1 pb-3 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-cyan-200 hover:bg-gray-50 hover:text-cyan-700"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/about"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-cyan-200 hover:bg-gray-50 hover:text-cyan-700"
                >
                  Om oss
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/brands"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-cyan-200 hover:bg-gray-50 hover:text-cyan-700"
                >
                  Merker
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/gallery"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-cyan-200 hover:bg-gray-50 hover:text-cyan-700"
                >
                  Galleri
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default NavbarDefault;

//   <nav
//     className={`absolute md:relative w-screen bg-gradient-to-b from-black from-50% h-32 text-white flex items-center justify-between px-20`}
//   >
//     <div>LOGO</div>
//     <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//       <div className="w-6 h-1 bg-white mb-1"></div>
//     </button>
//     <ul
//       className={`w-full md:w-auto flex flex-col md:flex-row md:items-center md:gap-6 md:flex`}
//     >
//       <li className="my-2 md:my-0">
//         <Link href="/">Home</Link>
//       </li>
//       <li className="my-2 md:my-0">
//         <Link href="/about">Om oss</Link>
//       </li>
//       <li className="my-2 md:my-0">
//         <Link href="/brands">Merker</Link>
//       </li>
//       <li className="my-2 md:my-0">
//         <Link href="/gallery">Bilder</Link>
//       </li>
//     </ul>
//   </nav>
