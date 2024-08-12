import { ImageBackground } from "../lib/ImageKategori";

export default function MainImage() {
  return (
    <>
      <ImageBackground />
      <div className="absolute left-0 top-0 backdrop-opacity-0 backdrop-invert bg-black/30 w-full h-full"></div>
    </>
  );
}
