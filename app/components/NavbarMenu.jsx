"use client";

import { routes } from "../lib/routesNavbar";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const activePathname = usePathname();

  return (
    <>
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
    </>
  );
}
