import React from 'react';
import Image from 'next/image';

// font import

import { montserratFont, poppinsFont } from '../../lib/FontGoogle';

export default function ArtikelCard({
  mainTitle,
  paragraphTitle,
  linkTitle,
  mainImage,
}) {
  return (
    <div className="bg-[#2F2F31] relative flex flex-col laptopMinWidth:flex-row">
      <div className="relative flex-1">
        <Image
          alt="infografis"
          className="transition-transform"
          src={mainImage}
        />
      </div>
      <div className="absolute left-0 top-0 backdrop-opacity-0 backdrop-invert bg-black/20 w-full h-full"></div>
      <div className="relative text-white flex flex-1 flex-col justify-center px-5 py-10 laptopMinWidth:px-10 desktopMinWidth:px-20">
        <h1
          className={`${montserratFont.className} text-4xl font-bold tabletMinWidth:text-5xl desktopMinWidth:text-6xl fullHdMinWidth:text-7xl`}
        >
          {mainTitle}
        </h1>
        <p
          className={`${poppinsFont.className} text-base py-10 tabletMinWidth:text-xl fullHdMinWidth:text-2xl`}
        >
          {paragraphTitle}
        </p>
        <div>
          <button className="rounded-full shadow shadow-black/60 bg-transparent py-5 px-10 text-lg capitalize tabletMinWidth:text-2xl">
            {linkTitle}
          </button>
        </div>
      </div>
    </div>
  );
}
