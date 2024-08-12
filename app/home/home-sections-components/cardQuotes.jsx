import React from 'react';

import { montserratFont } from '../../lib/FontGoogle';

export default function CardQuotes() {
  return (
    <>
      {cards.map((card) => (
        <CardProps
          key={card.id}
          className="shadow-2xl"
          subName={card.subName}
          name={card.name}
        />
      ))}
    </>
  );
}

// card props

const cards = [
  {
    id: 1,
    subName: 'We are not maker of history. We are made by History',
    name: 'Martin Luther King. jr',
  },
  {
    id: 2,
    subName: 'Anybody can make history. Only a great man can write it',
    name: 'Marcus Garvey',
  },
  {
    id: 3,
    subName: 'Those that fall to learn from history,are doomed to repeat it',
    name: 'Winston Churchill',
  },
];

const CardProps = ({ subName, name }) => {
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
};
