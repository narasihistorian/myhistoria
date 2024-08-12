"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { routes } from "../lib/routesNavbar";
import Link from "next/link";

export default function BurgerNavbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        onClick={handleNav}
        className="text-white z-10 block desktopMinWidth:hidden"
      >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-zinc-800 ease-in-out duration-500 z-20 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-2xl text-white p-5 uppercase">
          Narasi<span className="text-[#fedf16e0]">historian</span>
        </h1>

        <ul className="text-lg text-white p-4 uppercase flex flex-col gap-y-5">
          {routes.map((route) => (
            <li className="border-b border-gray-600 p-5" key={route.path}>
              <Link href={route.path} target={route.target}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-screen h-screen backdrop-blur-sm bg-white/30 ease-in-out duration-500 "
            : "fixed"
        }
      ></div>
    </>
  );
}
