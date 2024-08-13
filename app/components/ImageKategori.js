import ancientRome from "../../public/img/ancient-rome.jpg";
import middleAges from "../../public/img/medieval-age.jpg";
import ageOfDiscovery from "../../public/img/age-of-discovery.jpg";
import napoleonicWar from "../../public/img/napoleonic-war.jpg";
import worldWar from "../../public/img/world-war-2.jpg";
import coldWar from "../../public/img/cold-war.jpg";
import imageBackground from "../../public/img/50.jpg";

import Image from "next/image";

const AncientRome = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={require("../../public/img/ancient-rome.jpg")}
        className="pb-10"
        alt="background"
        placeholder="blur"
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
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
