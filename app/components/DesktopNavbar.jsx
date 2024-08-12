"use client";

import { routes } from "../lib/routesNavbar";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { motion } from "framer-motion";

import Link from "next/link";

export default function DesktopNavbar() {
  const activePathname = usePathname();

  return (
    <>
      <ul className="flex text-white items-center gap-x-5 text-base tabletMinWidth:gap-x-10 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl">
        {routes.map((route) => (
          <li
            className={clsx(
              "relative z-10 hover:text-[#fedf16e0] transition pb-3",
              {
                "text-[#fedf16e0]": activePathname === route.path,
                "text-white": activePathname !== route.path,
              }
            )}
            key={route.path}
          >
            <Link href={route.path} target={route.target}>
              {route.name}
            </Link>

            {activePathname === route.path && (
              <motion.div
                layoutId="header-active-link"
                className="bg-[#fedf16e0] h-1 w-full absolute bottom-0"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
      <div className="absolute left-0 top-0 backdrop-opacity-10 backdrop-invert bg-black/10 w-full h-full"></div>
    </>
  );
}
