import React from "react";
import Image from "next/image";

import { Montserrat, Poppins } from "next/font/google";

import homeBackground from "../../public/img/bg-1920.jpg";

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
          className={`h-1/2 font-NelaSlabLight p-5 text-xs tabletMinWidth:text-lg laptopMinWidth:text-2xl fullHdMinWidth:text-4xl fullHdMinWidth:p-20`}
        >
          <p>{props.subName}</p>
        </div>
        <div className="">
          <h3
            className={`${poppinsFont.className} p-5 text-lg font-bold tabletMinWidth:text-2xl laptopMinWidth:text-4xl fullHdMinWidth:pl-20 fullHdMinWidth:text-5xl`}
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
        <div className="flex justify-between">
          <div className=" flex-col justify-center flex-1 items-center text-white px-10 pt-10 pb-20 tabletMinWidth:pb-32">
            <div class="text-7xl font-NewEleganceConsended leading-relaxed tabletMinWidth:text-9xl tabletMinWidth:leading-relaxed">
              <h1>
                <span class="">Everything</span>
              </h1>
              <h1>
                <span class="">
                  About <span className="text-[#fedf16e0]">History</span>
                </span>
              </h1>
            </div>
            <button
              class={`${montserratFont.className} text-2xl py-3 px-10 mt-10 border-solid border-2 border-indigo-100 rounded-[5rem] tabletMinWidth:text-4xl`}
            >
              <a href=""> Explore Content</a>
            </button>
          </div>
          <div className="hidden relative w-screen h-[50rem] flex-1 laptopMinWidth:block">
            <Image
              src={homeBackground}
              alt="background"
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
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

        <div className="relative w-screen h-[30rem] flex-1 laptopMinWidth:hidden">
          <Image
            src={homeBackground}
            alt="background"
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
