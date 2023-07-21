import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { Montserrat } from "next/font/google";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logoHome from "../../public/img/logo png narasihistorian.png";

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
        className={`${montserratFont.className} fixed flex justify-between items-center w-screen min-h-[5vh] z-10 px-5 py-5 tabletMinWidth:px-10 `}
      >
        <div className="block relative w-[30rem] h-[10rem]">
          <Link rel="preload" href="/">
            <Image
              src={logoHome}
              alt="background"
              placeholder="blur"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>

        <ul className="text-white items-center text-lg py-5 hidden tabletMinWidth:flex tabletMinWidth:border-b tabletMinWidth:border-gray-100 tabletMinWidth:text-3xl">
          <li className="pr-5">
            <Link rel="preload" href="/infografis">
              Infografis
            </Link>
          </li>
          <li className="pr-5">
            <Link rel="preload" href="/kategori">
              Kategori
            </Link>
          </li>
          <li>
            <Link rel="preload" href="/videografis">
              Video
            </Link>
          </li>
        </ul>

        {/* burger menu ------------------------------------------------- */}

        <div
          onClick={handleNav}
          className="text-white block tabletMinWidth:hidden"
        >
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-logoNavbar p-5 uppercase">Narasihistorian</h1>

          <ul className="text-lg p-4 uppercase">
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
              <Link rel="preload" href="/videografis">
                Video
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
