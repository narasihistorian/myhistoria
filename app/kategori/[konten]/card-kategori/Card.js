import Title from '@/app/components/Title';
import { robotoFont } from '@/app/lib/FontGoogle';
import Link from 'next/link';

// main component ----------------------------------------------------------------------

const Card = ({ image, name, description, buttondescription, link }) => {
  return (
    <div className="shadow-xl col-span-6 tabletMinWidth:col-span-3 desktopMinWidth:col-span-2">
      <div className="relative w-full">{image}</div>
      <div className="p-10 laptopMinWidth:text-start">
        <Title>{name}</Title>
        <p
          className={`${robotoFont.className} py-5 text-base tabletMinWidth:h-[15rem] tabletMinWidth:text-2xl desktopMinWidth:text-xl`}
        >
          {description}
        </p>
        <button className="rounded-full border shadow shadow-black/60 bg-transparent py-2 px-10 text-base capitalize tabletMinWidth:text-2xl desktopMinWidth:text-xl fullHdMinWidth:text-xl">
          <Link href={link}>{buttondescription}</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
