import Image from "next/image";
import React from "react";
import Link from "next/link";

import closingBackground from "../../public/img/closing cover nwe.jpg";

import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

// font ---------------------------------------

import { Montserrat, Poppins } from "next/font/google";

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
    <section className="relative w-screen bg-zinc-800">
      <div className="relative w-full h-full">
        <div className="relative overflow-hidden flex flex-col laptopMinWidth:flex-row">
          <div className="relative w-full h-[20rem] tabletMinWidth:h-[30rem] laptopMinWidth:w-[60rem] laptopMinWidth:h-[40rem] fullHdMinWidth:w-[90rem] fullHdMinWidth:h-[50rem]">
            <Image
              src={closingBackground}
              alt="closing background"
              quality={100}
              placeholder="blur"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative flex-1 flex flex-col justify-center items-start px-10 py-10 text-white bg-zinc-800 tabletMinWidth:pt-20 laptopMinWidth:px-32 ">
            <h6
              className={`${montserratFont.className} text-2xl tabletMinWidth:text-5xl laptopMinWidth:text-6xl`}
            >
              Tentang Narasi
              <span className="text-[#fedf16e0]">Historian</span>
            </h6>
            <p
              className={`${poppinsFont.className} text-sm pt-5 tabletMinWidth:text-2xl tabletMinWidth:pt-10 fullHdMinWidth:text-2xl`}
            >
              Narasihistorian merupakan media konten yang berfokus pada sejarah
              peradaban global dengan visualisasi yang simple dan interaktif,
              berupa konten artikel ataupun video infografik.{" "}
            </p>
            <div className="flex tabletMinWidth:hidden">
              <div className="py-5 pr-5">
                <Link href="mailto:agungrosyandi@gmail.com">
                  <AiOutlineMail size={20} />
                </Link>
              </div>
              <div className="py-5 pr-5">
                <Link
                  href="https://www.instagram.com/narasihistorian/"
                  target="_blank"
                >
                  <AiOutlineInstagram size={20} />
                </Link>
              </div>
              <div className="py-5 ">
                <Link
                  href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
                  target="_blank"
                >
                  <AiOutlineYoutube size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden tabletMinWidth:flex tabletMinWidth:py-5 ">
              <div className="py-5 pr-5">
                <Link href="mailto:narasihistorian@gmail.com">
                  <AiOutlineMail size={35} />
                </Link>
              </div>
              <div className="py-5 pr-5">
                <Link
                  href="https://www.instagram.com/narasihistorian/"
                  target="_blank"
                >
                  <AiOutlineInstagram size={35} />
                </Link>
              </div>
              <div className="py-5 ">
                <Link
                  href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
                  target="_blank"
                >
                  <AiOutlineYoutube size={35} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
