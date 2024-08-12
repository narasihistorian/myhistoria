import Image from "next/image";

import { montserratFont, robotoFont } from "@/app/lib/FontGoogle";

// main component ----------------------------------------------------------------------

const Card = ({ image, name, description, buttondescription }) => {
  return (
    <div className="shadow-xl p-4 my-5 rounded-xl col-span-6 tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
      <div className="flex-1">
        <Image className="pb-10" alt="pic" src={image} />
      </div>
      <div className="flex-1 pb-10 laptopMinWidth:text-start">
        <h6 className={`${montserratFont.className} text-[#fedf16e0] text-5xl`}>
          {name}
        </h6>
        <p
          className={`${robotoFont.className} py-5 text-lg tabletMinWidth:h-[12rem] tabletMinWidth:text-xl`}
        >
          {description}
        </p>
        <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-base capitalize fullHdMinWidth:text-xl">
          {buttondescription}
        </button>
      </div>
    </div>
  );
};

export default Card;
