import Image from "next/image";
import React from "react";

import { Montserrat, Poppins } from "next/font/google";

import closingBackground from "../../public/img/bg-closing.jpg";

// font ---------------------------------------

const poppinsFont = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const montserratFont = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// main component ---------------------------------------

const Closing = () => {
  return (
    <section className="relative w-screen">
      <div className="relative w-full h-full pt-10">
        <div className="flex flex-1 flex-col justify-center items-center p-10">
          <h1 className="text-6xl font-MonaSansUltraLight tabletMinWidth:text-8xl fullHdMinWidth:text-9xl">
            Follow Us
          </h1>
          <p
            className={`${montserratFont.className} text-base text-center py-3 px-20 border-b border-gray-900 tabletMinWidth:py-5 tabletMinWidth:text-2xl laptopMinWidth:text-3xl laptopMinWidth:py-10 fullHdMinWidth:text-4xl`}
          >
            Ikuti Terus Perkembangan NarasiHistorian <i>(coming soon)</i>
          </p>
        </div>

        <div className="relative flex flex-col-reverse flex-1 w-full h-[30rem] tabletMinWidth:h-[40rem] laptopMinWidth:h-[50rem] fullHdMinWidth:h-[60rem]">
          <Image
            src={closingBackground}
            alt="closing background"
            quality={100}
            placeholder="blur"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-screen min-h-[5vh] backdrop-grayscale-0 bg-white/10 z-10">
            <div className="absolute w-full h-full flex justify-center items-center text-white text-lg laptopMinWidth:text-2xl fullHdMinWidth:text-3xl">
              <p className="">2023 NarasiHistorian || All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
