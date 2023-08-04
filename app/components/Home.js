import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Montserrat, Poppins } from "next/font/google";

import homeBackground from "../../public/img/bg-closing.jpg";

// font --------------------------------------------------

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

// props --------------------------------------------------

const CardQuotes = (props) => {
  return (
    <>
      <div className="border-r border-gray-600">
        <div
          className={`h-1/2 ${montserratFont.className} p-5 text-xs tabletMinWidth:text-lg laptopMinWidth:text-2xl laptopMinWidth:p-20 fullHdMinWidth:text-4xl`}
        >
          <p>{props.subName}</p>
        </div>
        <div className="">
          <h3
            className={`${poppinsFont.className} p-5 text-lg font-bold tabletMinWidth:text-2xl laptopMinWidth:text-4xl laptopMinWidth:pl-20 fullHdMinWidth:text-5xl`}
          >
            {props.name}
          </h3>
        </div>
      </div>
    </>
  );
};

// main component --------------------------------------------------

const Home = () => {
  return (
    <section className="relative w-screen bg-zinc-800">
      <div className="relative w-full h-full pt-40 tabletMinWidth:pt-52">
        <div className="flex justify-between ">
          <div className=" flex-col justify-center flex-1 items-center text-white px-10 pt-10 pb-20 tabletMinWidth:pb-32">
            <div className="text-[4.5rem] font-MonaSansUltraLightWide leading-relaxed tabletMinWidth:text-[7rem] tabletMinWidth:leading-relaxed fullHdMinWidth:text-[9rem]">
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
              className={`${montserratFont.className} text-lg py-5 px-10 mt-10 border-solid border border-indigo-100 rounded-[5rem] tabletMinWidth:text-3xl`}
            >
              <Link href="/#artikel">Explore Konten</Link>
            </button>
          </div>
          <div className="hidden laptopMinWidth:relative laptopMinWidth:w-screen laptopMinWidth:h-[40rem] laptopMinWidth:flex-1 laptopMinWidth:block fullHdMinWidth:h-[50rem]">
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
        <div className="relative flex bg-white py-5 laptopMinWidth:border-b laptopMinWidth:border-gray-900 laptopMinWidth:justify-center laptopMinWidth:items-center">
          <CardQuotes
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

        {/* backround home for tab and mobile responsive */}

        <div className="relative w-full h-[30rem] flex-1 tabletMinWidth:h-[40rem] laptopMinWidth:hidden">
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
    </section>
  );
};

export default Home;
