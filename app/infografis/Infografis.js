import React from "react";
import Link from "next/link";

import InfografisCard from "./card-infografis/Card";

// link infografis -------------------------------------------

const NelsonLink = (
  <Link rel="preload" href="../infografis/Battle_of_Trafalgar">
    <p>Klik untuk lebih detail</p>
  </Link>
);

const MariusLink = (
  <Link rel="preload" href="../infografis/Reformasi_Marian">
    <p>Klik untuk lebih detail</p>
  </Link>
);

const ReconuqistaLink = (
  <Link rel="preload" href="../infografis/Reconquista_1492">
    <p>Klik untuk lebih detail</p>
  </Link>
);

const VikingLink = (
  <Link rel="preload" href="../infografis/Viking_di_Britania">
    <p>Klik untuk lebih detail</p>
  </Link>
);

// imaga import -----------------------------------------------

import horationNelsonInfografis from "../../public/img/battle-of-trafalgar.jpg";
import mariusInfografis from "../../public/img/gaius-marius.jpg";
import reconquistaInfografis from "../../public/img/reconquista-1492.jpg";
import vikingInfografis from "../../public/img/vikings.jpg";

// main component ---------------------------------------

const Infografis = () => {
  return (
    <section className="relative w-screen min-h-screen bg-zinc-800">
      <div className="relative w-full h-full">
        <div className="flex flex-col justify-center items-center py-40 px-10 text-white tabletMinWidth:py-72">
          <h1 className="text-5xl py-10 mb-10 font-MonaSansUltraLight text-center border-b tabletMinWidth:text-6xl laptopMinWidth:text-8xl">
            Infografis <span className="text-[#fedf16e0]">Historian</span>
          </h1>
          <div className="grid grid-cols-6 grid-flow-row gap 1 py-5">
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <InfografisCard
                image={horationNelsonInfografis}
                description={NelsonLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <InfografisCard
                image={mariusInfografis}
                description={MariusLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <InfografisCard
                image={reconquistaInfografis}
                description={ReconuqistaLink}
              />
            </div>
            <div className="shadow-xl p-4 my-5 rounded-xl flex-1 col-span-6 tabletMinWidth:col-span-3 fullHdMinWidth:col-span-2">
              <InfografisCard
                image={vikingInfografis}
                description={VikingLink}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infografis;
