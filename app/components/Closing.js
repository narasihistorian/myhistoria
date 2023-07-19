import Image from "next/image";
import React from "react";

import { Montserrat, Poppins } from "next/font/google";

import closingBackground from "../../public/img/closingbackground.jpg";

// font ---------------------------------------

const montserratFont = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const poppinsFont = Poppins({
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
          <h1 className="text-7xl font-NewEleganceCondita leading-relaxed tabletMinWidth:text-9xl">
            Follow Us
          </h1>
          <p
            className={`${poppinsFont.className} text-lg text-center py-5 px-10 tabletMinWidth:py-20 tabletMinWidth:text-2xl laptopMinWidth:text-3xl`}
          >
            Ikuti Terus Perkembangan NarasiHistorian <i>(coming soon)</i>
          </p>
        </div>

        <div className="relative flex flex-col-reverse flex-1 w-full h-[30rem] laptopMinWidth:h-[50rem] fullHdMinWidth:h-[60rem]">
          <Image
            src={closingBackground}
            alt="closing background"
            quality={100}
            placeholder="blur"
            fill
            sizes="100vw"
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
