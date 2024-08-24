import Image from "next/image";
import ancientRome from "../../public/img/ancient-rome.jpg";
import middleAges from "../../public/img/medieval-age.jpg";
import ageOfDiscovery from "../../public/img/age-of-discovery.jpg";
import napoleonicWar from "../../public/img/napoleonic-war.jpg";
import worldWar from "../../public/img/world-war-2.jpg";
import coldWar from "../../public/img/cold-war.jpg";
import mobileBg from "../../public/img/bg mobile narasihistorian.jpg";

const MobileBg = () => {
  return (
    <div className="relative w-full h-full desktopMinWidth:hidden">
      <Image
        alt="pic"
        src={ancientRome}
        placeholder="blur"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

const AncientRome = () => {
  return (
    <div className="relative w-full h-full">
      <Image alt="pic" src={ancientRome} placeholder="blur" />
    </div>
  );
};

const MiddleAges = () => {
  return (
    <div className="relative w-full h-full">
      <Image alt="pic" src={middleAges} placeholder="blur" />
    </div>
  );
};

const AgeOfDiscovery = () => {
  return (
    <div className="relative w-full h-full">
      <Image alt="pic" src={ageOfDiscovery} placeholder="blur" />
    </div>
  );
};

const NapoleonicWar = () => {
  return (
    <div className="relative w-full h-full">
      <Image alt="pic" src={napoleonicWar} placeholder="blur" />
    </div>
  );
};

const WorldWar = () => {
  return (
    <div className="relative w-full h-full">
      <Image alt="pic" src={worldWar} placeholder="blur" />
    </div>
  );
};

const ColdWar = () => {
  return (
    <div className="relative w-full h-full">
      <Image alt="pic" src={coldWar} placeholder="blur" />
    </div>
  );
};

export {
  AncientRome,
  MiddleAges,
  AgeOfDiscovery,
  NapoleonicWar,
  WorldWar,
  ColdWar,
  MobileBg,
};
