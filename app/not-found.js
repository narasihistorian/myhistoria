import { montserratFont } from "./lib/FontGoogle";

export default function NotFoundPage() {
  return (
    <main>
      <section className="relative h-[80vh]">
        <div className="relative w-full h-full flex flex-col justify-center items-center py-20 px-10">
          <div className=" text-white">
            <h1 className="font-MonaSansUltraLightWide text-4xl text-center tabletMinWidth:text-6xl laptopMinWidth:text-7xl">
              Halaman tidak ditemukan
            </h1>
            <p
              className={`${montserratFont.className} text-sm py-5 text-center tabletMinWidth:text-xl tabletMinWidth:py-10 laptopMinWidth:text-2xl`}
            >
              coba kata keyword yang lainnya
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
