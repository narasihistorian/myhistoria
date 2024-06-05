import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardQuotes from "../lib/CardQuotes";

import { montserratFont } from "../lib/FontGoogle";
import homeBackground from "../../public/img/bg-closing.jpg";

// main component --------------------------------------------------

const Home = () => {
  return (
    <section className="relative w-screen bg-zinc-800">
      <div className="relative w-full h-full">
        <div className="relative flex justify-between pt-40 tabletMinWidth:pt-52 desktopMinWidth:pt-0 ">
          <div className="z-[2] flex-col justify-center flex-1 items-center text-white px-10 pt-10 pb-20 tabletMinWidth:pb-32 desktopMinWidth:pt-60">
            <div className="font-DrukBoldTrial uppercase text-[5rem] leading-[6rem] tabletMinWidth:text-[9rem] tabletMinWidth:leading-[9rem] fullHdMinWidth:text-[12rem] fullHdMinWidth:leading-[12rem]">
              <h1>
                <span className="">Everything</span>
              </h1>
              <h1>
                <span className="">
                  About <span className="text-[#fedf16e0]">History</span>
                </span>
              </h1>
            </div>
            <button
              className={`${montserratFont.className} text-sm py-2 px-5 mt-10 border-solid border border-indigo-100 rounded-[5rem] tabletMinWidth:text-xl tabletMinWidth:py-5 tabletMinWidth:px-10 fullHdMinWidth:text-3xl`}
            >
              <Link href="/kategori">Explore Konten</Link>
            </button>
          </div>
          <div className="absolute inset-0 w-screen h-[40rem] tabletMinWidth:h-[55rem] desktopMinWidth:relative desktopMinWidth:flex-1 desktopMinWidth:h-[50rem] fullHdMinWidth:h-[55rem]">
            <Image
              src={homeBackground}
              alt="background"
              placeholder="blur"
              quality={100}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="absolute left-0 top-0 backdrop-opacity-0 backdrop-invert bg-black/20 w-full h-full"></div>
        <div className="relative text-white grid grid-cols-3 grid-flow-row gap-3 top-5 p-5 laptopMinWidth:justify-center laptopMinWidth:items-center laptopMinWidth:pr-14">
          <CardQuotes
            className="shadow-2xl"
            subName={"We are not maker of history. We are made by History"}
            name={"Martin Luther King. jr"}
          />

          <CardQuotes
            subName={"Anybody can make history. Only a great man can write it"}
            name={"Marcus Garvey"}
          />

          <CardQuotes
            subName={
              "Those that fall to learn from history,are doomed to repeat it"
            }
            name={"Winston Churchill"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
