import { montserratFont } from "../lib/FontGoogle";

import Image from "next/image";

import logo from "../../public/img/logo-narasihistorian-1-02-1.png";
import NavbarMenu from "./NavbarMenu";

export default function DesktopNavbar() {
  return (
    <nav
      className={`${montserratFont.className} z-10 px-[5%] fixed flex justify-between items-center w-full min-h-[10vh]`}
    >
      <div className="relative z-10 w-[15rem] h-[5rem] tabletMinWidth:w-[25rem] fullHdMinWidth:w-[30rem]">
        <Image
          alt="logo navbar"
          src={logo}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <ul className="flex text-white items-center gap-x-5 text-base tabletMinWidth:gap-x-10 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl">
        <NavbarMenu />
      </ul>
      <div className="absolute left-0 top-0 backdrop-opacity-10 backdrop-invert bg-black/10 w-full h-full"></div>
    </nav>
  );
}
