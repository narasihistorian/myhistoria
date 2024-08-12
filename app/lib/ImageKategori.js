import Image from "next/image";
import ancientRome from "../../public/img/ancient-rome.jpg";
import middleAges from "../../public/img/medieval-age.jpg";
import ageOfDiscovery from "../../public/img/age-of-discovery.jpg";
import napoleonicWar from "../../public/img/napoleonic-war.jpg";
import worldWar from "../../public/img/world-war-2.jpg";
import coldWar from "../../public/img/cold-war.jpg";
import imageBackground from "../../public/img/50.jpg";

const AncientRome = () => {
  return (
    <div className="relative w-full h-full">
      <Image className="pb-10" alt="pic" src={ancientRome} />;
    </div>
  );
};

const MiddleAges = () => {
  return (
    <div className="relative w-full h-full">
      <Image className="pb-10" alt="pic" src={middleAges} />;
    </div>
  );
};

const AgeOfDiscovery = () => {
  return (
    <div className="relative w-full h-full">
      <Image className="pb-10" alt="pic" src={ageOfDiscovery} />;
    </div>
  );
};

const NapoleonicWar = () => {
  return (
    <div className="relative w-full h-full">
      <Image className="pb-10" alt="pic" src={napoleonicWar} />;
    </div>
  );
};

const WorldWar = () => {
  return (
    <div className="relative w-full h-full">
      <Image className="pb-10" alt="pic" src={worldWar} />;
    </div>
  );
};

const ColdWar = () => {
  return (
    <div className="relative w-full h-full">
      <Image className="pb-10" alt="pic" src={coldWar} />;
    </div>
  );
};

const ImageBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-[100vh]">
      <Image
        src={imageBackground}
        alt="background"
        placeholder="blur"
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
      ;
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
  ImageBackground,
};
