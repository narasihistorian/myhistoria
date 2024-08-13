import Image from "next/image";
import homeBackground from "../../../public/img/home-cover-3 new.jpg";

export default function MainImage() {
  return (
    <div className="absolute inset-0 w-full h-[100vh]">
      <Image
        src={homeBackground}
        alt="background"
        placeholder="blur"
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute left-0 top-0 backdrop-opacity-0 backdrop-invert bg-black/30 w-full h-full"></div>
    </div>
  );
}
