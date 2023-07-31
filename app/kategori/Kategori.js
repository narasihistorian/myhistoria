import React from "react";
import Image from "next/image";
import Link from "next/link";

import KategoriCard from "./card-kategori/Card";

// hyperlink kategori ---------------------------------------

const AncientRomeLink = (
  <Link rel="preload" href="../kategori/Ancient_Rome">
    <p>Ekplorasi</p>
  </Link>
);

const MiddleAgesLink = (
  <Link rel="preload" href="../kategori/Middle_Ages">
    <p>Ekplorasi</p>
  </Link>
);

const AgeOfDiscoveryLink = (
  <Link rel="preload" href="../kategori/Age_of_Discovery">
    <p>Ekplorasi</p>
  </Link>
);

const NewImperialismLink = (
  <Link rel="preload" href="../kategori/New_Imperialism">
    <p>Ekplorasi</p>
  </Link>
);

const WorldWarLink = (
  <Link rel="preload" href="../kategori/World_War_1&2">
    <p>Ekplorasi</p>
  </Link>
);

const ColdWarLink = (
  <Link rel="preload" href="../kategori/Cold_War">
    <p>Ekplorasi</p>
  </Link>
);

// image component ----------------------------------------------------------------------

import ancientRomeImage from "../../public/img/ancient-rome.jpg";
import medievalImage from "../../public/img/medieval-age.jpg";
import ageOfDiscoveryImage from "../../public/img/age-of-discovery.jpg";
import napoleonicWarImage from "../../public/img/napoleonic-war.jpg";
import ww2Image from "../../public/img/world-war-2.jpg";
import coldWarImage from "../../public/img/cold-war.jpg";

// main component ---------------------------------------

const Kateogori = () => {
  return (
    <section className="relative w-screen min-h-screen bg-zinc-800">
      <div className="relative w-full h-full">
        <div className="flex flex-col justify-center items-center py-40 px-10 text-white tabletMinWidth:py-72">
          <h1 className="text-5xl p-10 mb-10 font-MonaSansUltraLight text-center border-b tabletMinWidth:text-6xl laptopMinWidth:text-8xl">
            Kategori <span className="text-[#fedf16e0]">Historian</span>
          </h1>
          <div className="grid grid-cols-6 grid-flow-row gap 1 py-5">
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <KategoriCard
                image={ancientRomeImage}
                name={"Ancient Rome"}
                description={
                  "Periode Roma yang paling dikenal dan sering dikutip oleh ahli sejarah yaitu Roma era Republik, karena menjadi dasar bagi pilar peradaban dunia barat"
                }
                buttondescription={AncientRomeLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <KategoriCard
                image={medievalImage}
                name={"Middle Ages"}
                description={
                  "Periode Eropa setelah keruntuhan Romawi barat, yang dimana peran Gereja Katolik Roma menjadi sangat dominan secara ekonomi maupun politik"
                }
                buttondescription={MiddleAgesLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <KategoriCard
                image={ageOfDiscoveryImage}
                name={"Age of Discovery"}
                description={
                  "Era dimulainya penjelajahan samudera yang diinisiasi oleh Spanyol untuk mencari dunia baru dengan semangat Gospel, Glory, dan Gold"
                }
                buttondescription={AgeOfDiscoveryLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <KategoriCard
                image={napoleonicWarImage}
                name={"New Imperialism"}
                description={
                  "Peperangan besar yang melanda benua Eropa setelah revolusi Perancis dengan naiknya Napoleon Bonaparte menjadi kaisar Perancis yang berambisi menguasai seluruh daratan Eropa "
                }
                buttondescription={NewImperialismLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <KategoriCard
                image={ww2Image}
                name={"World War 1/2"}
                description={
                  "Awal abad ke 20 ditandai dengan situasi peperangan besar yang dampaknya melanda seluruh dunia terutama di Eropa, akibat munculnya persaingan militer antar blok negara-negara besar Eropa"
                }
                buttondescription={WorldWarLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <KategoriCard
                image={coldWarImage}
                name={"Cold War"}
                description={
                  "Berakhirnya perang dunia ke 2 tidak membuat persaingan antar blok belum berakhir, karena melahirkan 2 kubu pemenang perang, yaitu blok barat pimpinan Amerika Serikat dan blok timur pimpinan Uni Soviet "
                }
                buttondescription={ColdWarLink}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kateogori;
