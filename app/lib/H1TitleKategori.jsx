import React from "react";
import { poppinsFont } from "./FontGoogle";

export default function H1TitleKategori({ children }) {
  return (
    <h1
      className={`${poppinsFont.className} text-4xl font-bold p-10 text-center tabletMinWidth:text-5xl fullHdMinWidth:text-6xl`}
    >
      {children}
    </h1>
  );
}
