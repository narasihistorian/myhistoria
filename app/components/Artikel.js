import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Montserrat, Poppins } from "next/font/google";

import napoleonwarBackground from "../../public/img/napoleonic-war.jpg";
import ageOfDiscoverBackground from "../../public/img/age-of-discovery.jpg";
import ancientRomeBackground from "../../public/img/ancient-rome.jpg";

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

const Artikel = () => {
  return (
    <section className="relative w-screen">
      <div className="relative w-full h-full px-10 py-20 laptopMinWidth:py-32">
        <div className="flex flex-col flex-1 justify-center items-center">
          <h1 className="text-5xl font-NewEleganceCondita tabletMinWidth:text-7xl fullHdMinWidth:text-8xl">
            Lets Find Out
          </h1>
          <p
            className={`${montserratFont.className} text-lg py-10 tabletMinWidth:text-2xl laptopMinWidth:text-3xl fullHdMinWidth:text-4xl fullHdMinWidth:py-20`}
          >
            Temukan Artikel Favoritmu
          </p>
        </div>
        <div className="relative overflow-hidden grid grid-cols-2 grid-rows-2 grid-flow-row gap-4 flex-1 py-10 fullHdMinWidth:grid-cols-3">
          {/* napoleonic war --------------------------------------------------------- */}

          <div className="group relative w-full h-[30rem] col-span-2 laptopMinWidth:col-span-1 fullHdMinWidth:h-[60rem] fullHdMinWidth:row-span-2">
            <Image
              alt="napoleon"
              className="transition-transform"
              src={napoleonwarBackground}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
              <h1
                className={`${poppinsFont.className} text-3xl font-bold laptopMinWidth:text-4xl desktopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
              >
                Napoleonic War
              </h1>
              <p className="text-xs italic py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tabletMinWidth:text-lg fullHdMinWidth:text-3xl">
                Peperangan yang melanda benua Eropa setelah revolusi Perancis
                dan munculnya figur Napoleon Bonaparte seorang kaisar Perancis
                yang melancarkan peperangan keseluruh Eropa
              </p>
              <Link href="/kategori" target="_blank">
                <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-2xl">
                  Explore
                </button>
              </Link>
            </div>
          </div>

          {/* age of discovery --------------------------------------------------------- */}

          <div className="group relative w-full h-[30rem] col-span-2 laptopMinWidth:col-span-1 fullHdMinWidth:h-[60rem] fullHdMinWidth:row-span-2 ">
            <Image
              alt="abad penjelajahan"
              className="transition-transform"
              src={ageOfDiscoverBackground}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
              <h1
                className={`${poppinsFont.className} text-3xl font-bold laptopMinWidth:text-4xl desktopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
              >
                Age of Discovery
              </h1>
              <p className="text-xs italic py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tabletMinWidth:text-lg fullHdMinWidth:text-3xl">
                Era dimulainya penjelajahan samudera yang diinisiasi oleh
                Imperium Spanyol untuk mencari dunia baru dengan semangat
                Gospel, Glory, dan Gold
              </p>
              <Link href="/kategori" target="_blank">
                <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-2xl">
                  Explore
                </button>
              </Link>
            </div>
          </div>

          {/* ancient rome --------------------------------------------------------- */}

          <div className="group relative w-full h-[30rem] col-span-2 fullHdMinWidth:col-span-1 fullHdMinWidth:h-[60rem] fullHdMinWidth:row-span-2">
            <Image
              alt="roma"
              className="transition-transform"
              src={ancientRomeBackground}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
            <div className="absolute text-white  inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[90%] group-hover:translate-y-0 transition-all duration-500">
              <h1
                className={`${poppinsFont.className} text-3xl font-bold laptopMinWidth:text-4xl desktopMinWidth:text-5xl fullHdMinWidth:text-7xl`}
              >
                Ancient Rome
              </h1>
              <p className="text-xs italic py-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tabletMinWidth:text-lg fullHdMinWidth:text-3xl">
                Periode Roma yang paling dikenal dan sering dikutip oleh
                sejarahwan, yaitu Roma era Republik karena menjadi dasar bagi
                pilar peradaban atau dunia barat yang kita kenal sekarang ini
              </p>
              <Link href="/kategori" target="_blank">
                <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-sm capitalize laptopMinWidth:text-base desktopMinWidth:text-2xl">
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
