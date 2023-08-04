import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Montserrat, Poppins } from "next/font/google";

import infografisBackground from "../../public/img/infografis.jpg";
import kategoriBackground from "../../public/img/kategori-cover.jpg";
import videoBackground from "../../public/img/video-cover-1.jpg";

// font ---------------------------------------

const montserratFont = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const montserratItalicFont = Montserrat({
  style: ["italic"],
  subsets: ["latin"],
  weight: ["200"],
});

const poppinsFont = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// main component ---------------------------------------

const Artikel = () => {
  return (
    <section id="artikel" className="relative w-screen">
      <div className="relative w-full h-full px-10 py-20 laptopMinWidth:py-32">
        <div className="flex flex-col flex-1 justify-center items-center">
          <h1 className="text-6xl font-MonaSansUltraLight tabletMinWidth:text-7xl fullHdMinWidth:text-8xl">
            Lets Find Out
          </h1>
          <p
            className={`${montserratFont.className} text-base border-b border-gray-900 py-3 tabletMinWidth:py-5 tabletMinWidth:text-2xl laptopMinWidth:py-10 fullHdMinWidth:text-3xl`}
          >
            Temukan Artikel Favoritmu
          </p>
        </div>
        <div className="relative overflow-hidden grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 flex-1 py-10 fullHdMinWidth:grid-rows-1">
          {/* infografi --------------------------------------------------------- */}

          <div className="group relative w-full h-[30rem] col-span-3 laptopMinWidth:col-span-1 fullHdMinWidth:h-[60rem]">
            <Image
              alt="infografis"
              className="transition-transform"
              src={infografisBackground}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
              <h1
                className={`${poppinsFont.className} text-3xl font-bold tabletMinWidth:text-4xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
              >
                Infografis
              </h1>
              <p
                className={`${montserratItalicFont.className} text-lg italic py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl`}
              >
                Infografis historian berisi kumpulan respresentasi visual
                informasi, dan data secara grafik yang dikemas secara singkat
              </p>
              <Link rel="preload" href="/infografis">
                <button className=" text-[#fedf16e0] rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-lg capitalize laptopMinWidth:text-2xl">
                  Explore
                </button>
              </Link>
            </div>
          </div>

          {/* kateogri --------------------------------------------------------- */}

          <div className="group relative w-full h-[30rem] col-span-3 laptopMinWidth:col-span-2 fullHdMinWidth:col-span-1 fullHdMinWidth:h-[60rem]">
            <Image
              alt="kategori"
              className="transition-transform"
              src={kategoriBackground}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
              <h1
                className={`${poppinsFont.className} text-3xl font-bold tabletMinWidth:text-4xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
              >
                Kategori
              </h1>
              <p
                className={`${montserratItalicFont.className} text-lg py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl`}
              >
                Kategori-kategori sejarah pilihan yang menarik mengenai
                peradaban dunia, dimulai dari periode roma kuno hingga perang
                dingin yang dikemas dalam bentuk artikel
              </p>
              <Link rel="preload" href="/kategori">
                <button className=" text-[#fedf16e0] rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-lg capitalize laptopMinWidth:text-2xl">
                  Explore
                </button>
              </Link>
            </div>
          </div>

          {/* video --------------------------------------------------------- */}

          <div className="group relative w-full h-[30rem] col-span-3 laptopMinWidth:col-span-3 fullHdMinWidth:col-span-1 fullHdMinWidth:h-[60rem]">
            <Image
              alt="video"
              className="transition-transform"
              src={videoBackground}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute text-white inset-0 flex flex-col items-center justify-center px-20 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
              <h1
                className={`${poppinsFont.className} text-3xl font-bold tabletMinWidth:text-4xl laptopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
              >
                Cinematic Video
              </h1>
              <p
                className={`${montserratItalicFont.className} text-lg py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tabletMinWidth:text-2xl fullHdMinWidth:text-3xl`}
              >
                Konten sejarah yang dikemas dalam bentuk visual grafis, meliputi
                map explanation, cinematic ataupun motion graphic. Namun saat
                ini konten untuk video belum tersedia dan akan diupdate
                secepatnya. Ikuti terus perkembangannya
              </p>
              <Link
                rel="preload"
                href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
                target="_blank"
              >
                <button className="text-[#fedf16e0] rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-lg capitalize laptopMinWidth:text-2xl">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artikel;
