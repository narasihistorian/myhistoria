import React from "react";

import ArtikelCard from "../lib/ArtikelCard";

// assets pictures & video import

import infografisBackground from "../../public/img/infografis.jpg";
import kategoriBackground from "../../public/img/kategori-cover.jpg";
import videoBackground from "../../public/img/video-cover-1.jpg";

import { InfografisLink, KategoriLink, VideoLink } from "../lib/HyperlinkPage";

// main component ---------------------------------------

const Artikel = () => {
  return (
    <section id="artikel" className="relative w-screen">
      <div className="relative bg-zinc-800 w-full h-full px-10 py-20 laptopMinWidth:py-32">
        <div className="relative grid grid-cols-1 grid-flow-row gap-8 flex-1 py-5">
          <div className="shadow-2xl">
            <ArtikelCard
              mainImage={infografisBackground}
              mainTitle={"Infografis"}
              paragraphTitle={
                "Infografis historian berisi kumpulan respresentasi visual informasi, dan data secara grafik yang dikemas secara singkat"
              }
              linkTitle={InfografisLink}
            />
          </div>
          <div className="shadow-2xl">
            <ArtikelCard
              mainImage={kategoriBackground}
              mainTitle={"kategori"}
              paragraphTitle={
                "Kategori-kategori sejarah pilihan yang menarik mengenai peradaban dunia, dimulai dari periode roma kuno hingga perang dingin yang dikemas dalam bentuk artikel"
              }
              linkTitle={KategoriLink}
            />
          </div>
          <div className="shadow-2xl">
            <ArtikelCard
              mainImage={videoBackground}
              mainTitle={"Cinematic Video"}
              paragraphTitle={
                "Konten sejarah yang dikemas dalam bentuk visual grafis, meliputi map explanation, cinematic ataupun motion graphic. Namun saat ini konten untuk video belum tersedia dan akan diupdate secepatnya. Ikuti terus perkembangannya"
              }
              linkTitle={VideoLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artikel;
