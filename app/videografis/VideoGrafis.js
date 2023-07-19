import React from "react";

import { Montserrat, Poppins } from "next/font/google";

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

const VideoGrafis = () => {
  return (
    <section className="relative w-screen h-screen bg-zinc-800">
      <div className="relative w-full h-full flex flex-col justify-center items-center py-20 px-10">
        <div className=" text-white">
          <h1 className="text-6xl p-5 font-NewEleganceCondita text-center leading-loose tabletMinWidth:text-8xl laptopMinWidth:text-9xl">
            Coming soon
          </h1>
          <p
            className={`${poppinsFont.className} text-lg p-5 text-center tabletMinWidth:text-2xl tabletMinWidth:p-20 laptopMinWidth:text-3xl`}
          >
            Tunggu update an dari kami :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoGrafis;
