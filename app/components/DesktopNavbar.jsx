import { montserratFont } from "../lib/FontGoogle";

import Image from "next/image";

import logo from "../../public/img/logo-narasihistorian-1-02-1.png";
import NavbarMenu from "./NavbarMenu";
import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <nav
      className={`${montserratFont.className} relative border-b z-10 min-h-[10vh] flex justify-between items-center `}
    >
      <div className="relative z-10 w-[15rem] h-[5rem] tabletMinWidth:w-[25rem] fullHdMinWidth:w-[30rem]">
        <Link href="/" alt="true">
          <Image
            alt="logo navbar"
            src={logo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>

      <ul className="flex text-white items-center gap-x-5 text-base tabletMinWidth:gap-x-10 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl">
        <NavbarMenu />
      </ul>
    </nav>
  );
}
