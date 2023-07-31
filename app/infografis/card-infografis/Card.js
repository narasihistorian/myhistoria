import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { HiArrowNarrowRight } from "react-icons/hi";

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
  weight: ["200"],
});

// main component ----------------------------------------------------------------------

const Card = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <Image className="pb-2" alt="pic" src={props.image} />
      </div>
      <div className="flex-1">
        <div className="flex items-center py-10">
          <HiArrowNarrowRight />
          <p
            className={`${PoppinsParagraph.className} text-[#fedf16e0] pl-5 text-2xl laptopMinWidth:text-3xl`}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
