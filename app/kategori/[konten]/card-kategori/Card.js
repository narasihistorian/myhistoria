import { montserratFont, robotoFont } from "@/app/lib/FontGoogle";

// main component ----------------------------------------------------------------------

const Card = ({ image, name, description, buttondescription }) => {
  return (
    <div className="shadow-xl col-span-6 tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
      <div className="relative w-full">{image}</div>
      <div className="bg-[#070707e0]/30 p-10 laptopMinWidth:text-start">
        <h6 className={`${montserratFont.className} text-[#fedf16e0] text-4xl`}>
          {name}
        </h6>
        <p
          className={`${robotoFont.className} py-5 text-lg tabletMinWidth:h-[15rem] tabletMinWidth:text-xl`}
        >
          {description}
        </p>
        <button className="rounded-full border shadow shadow-black/60 bg-transparent py-2 px-10 text-base capitalize fullHdMinWidth:text-xl">
          {buttondescription}
        </button>
      </div>
    </div>
  );
};

export default Card;
