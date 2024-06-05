import React from "react";

import { montserratFont, poppinsFont } from "./FontGoogle";

export default function CardQuotes({ subName, name }) {
  return (
    <>
      <div className="bg-[#2F2F31] shadow-2xl tabletMinWidth:p-5 laptopMinWidth:p-10">
        <div
          className={`h-1/2 ${montserratFont.className} p-5 text-xs tabletMinWidth:text-base laptopMinWidth:text-2xl fullHdMinWidth:text-3xl fullHdMinWidth:py-20`}
        >
          <p>{subName}</p>
        </div>
        <div className="">
          <h3
            className={`font-DrukBoldTrial p-5 text-lg tabletMinWidth:text-3xl laptopMinWidth:text-4xl fullHdMinWidth:text-6xl`}
          >
            {name}
          </h3>
        </div>
      </div>
    </>
  );
}
