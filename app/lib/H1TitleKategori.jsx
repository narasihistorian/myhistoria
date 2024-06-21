import React from 'react';
import { poppinsFont } from './FontGoogle';

export default function H1TitleKategori({ children }) {
  return (
    <h1
      className={`${poppinsFont.className} text-4xl pt-10 pb-5 px-5 text-center border-b tabletMinWidth:text-5xl fullHdMinWidth:text-6xl`}
    >
      {children}
    </h1>
  );
}
