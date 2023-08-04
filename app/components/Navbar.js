import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { Montserrat } from "next/font/google";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const montserratFont = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// main logic --------------------------------------------------

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav
        className={`${montserratFont.className} fixed flex justify-between items-center w-screen min-h-[10vh] z-10 px-10 py-5`}
      >
        <div className="relative z-10 text-white text-2xl uppercase tabletMinWidth:text-3xl">
          <Link rel="preload" href="/">
            <h1>
              Narasi<span className="text-[#fedf16e0]">Historian</span>
            </h1>
          </Link>
        </div>

        <div>
          <ul className=" text-white items-center text-lg py-5 hidden tabletMinWidth:flex tabletMinWidth:text-3xl">
            <li className="pr-5 z-10">
              <Link rel="preload" href="/infografis">
                Infografis
              </Link>
            </li>
            <li className="pr-5 z-10">
              <Link rel="preload" href="/kategori">
                Kategori
              </Link>
            </li>
            <li className="z-10">
              <Link
                rel="preload"
                target="_blank"
                href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
              >
                Video
              </Link>
            </li>
          </ul>

          <div className="tabletMinWidth:absolute tabletMinWidth:left-0 tabletMinWidth:top-0 tabletMinWidth:backdrop-opacity-10 tabletMinWidth:backdrop-invert tabletMinWidth:bg-black/30 tabletMinWidth:w-full tabletMinWidth:h-full"></div>
        </div>

        {/* burger menu ------------------------------------------------- */}

        <div
          onClick={handleNav}
          className="text-white z-10 block tabletMinWidth:hidden"
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

          <ul className="text-lg text-white p-4 uppercase">
            <li className="p-5 border-b border-gray-600">
              <Link rel="preload" href="/infografis">
                Infografis
              </Link>
            </li>
            <li className="p-5 border-b border-gray-600">
              <Link rel="preload" href="/kategori">
                Kategori
              </Link>
            </li>
            <li className="p-5">
              <Link
                rel="preload"
                target="_blank"
                href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
              >
                Video
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-screen h-screen backdrop-blur-sm bg-white/30 ease-in-out duration-500 "
              : "fixed"
          }
        ></div>
      </nav>
    </>
  );
};

export default Navbar;
