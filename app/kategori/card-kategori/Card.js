import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// font import ----------------------------------------------------------------------

import { Montserrat, Poppins } from "next/font/google";

const montserratParagraph = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const PoppinsParagraph = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

// main component ----------------------------------------------------------------------

const Card = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <Image className="pb-10" alt="pic" src={props.image} />
      </div>
      <div className="flex-1 laptopMinWidth:text-start">
        <h6
          className={`${montserratParagraph.className} text-[#fedf16e0] font-NelaSlabLight text-5xl tabletMinWidth:text-5xl laptopMinWidth:text-7xl`}
        >
          {props.name}
        </h6>
        <p
          className={`${PoppinsParagraph.className} pr-5 py-10 text-lg tabletMinWidth:h-[13rem] laptopMinWidth:text-2xl`}
        >
          {props.description}
        </p>
        <div className="pb-10">
          <button className="rounded-full shadow shadow-black/60 bg-transparent py-2 px-10 text-lg capitalize laptopMinWidth:text-2xl">
            {props.buttondescription}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
