"use client";

import { MobileBg } from "../lib/ImageKategori";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-5">
      <video
        className="relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] hidden desktopMinWidth:block"
        width={1000}
        height={1000}
        src="https://videos.pexels.com/video-files/6745492/6745492-uhd_2560_1440_30fps.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
      <div className="absolute z-30 inset-0 backdrop-opacity-10 backdrop-invert bg-black/20 w-full h-full"></div>
      <MobileBg />
    </div>
  );
}
