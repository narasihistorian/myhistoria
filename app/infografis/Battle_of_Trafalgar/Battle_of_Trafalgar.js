import React from "react";

import { Montserrat, Poppins } from "next/font/google";

// font ---------------------------------------

const montserratFont = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["200"],
});

// main component ---------------------------------------

const Content = () => {
  return (
    <section className="relative w-screen h-screen bg-zinc-800">
      <div className="relative w-full h-full flex flex-col justify-center items-center py-20 px-10">
        <div className=" text-white">
          <h1 className="font-MonaSansUltraLightWide text-6xl text-center tabletMinWidth:text-8xl laptopMinWidth:text-9xl">
            Coming soon
          </h1>
          <p
            className={`${montserratFont.className} text-lg py-5 text-center tabletMinWidth:text-2xl tabletMinWidth:py-10 laptopMinWidth:text-3xl`}
          >
            Tunggu update an dari kami :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
