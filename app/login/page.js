import Image from "next/image";
import mainImageBackground from "../../public/img/bg-1920.jpg";
import mainLogoForm from "../../public/img/logo-narasihistorian-1-02-1.png";

export default function Kategori() {
  return (
    <section className="relative h-[80vh] z-20 shadow-2xl flex flex-col justify-center items-center px-[5%]">
      <form className="p-10 tabletMinWidth:p-20">
        <div className="relative w-[20rem] h-[7rem] tabletMinWidth:w-[30rem]">
          <Image
            alt="main-logo-form"
            src={mainLogoForm}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative text-white flex flex-col">
          <input
            type="text"
            placeholder="Masukan Email"
            className="text-xl py-5 pr-5 mb-10 bg-transparent placeholder-white border-b-2 border-gray-100 outline-none ring-[#FEDF16]/50 transition focus:ring-2 focus:bg-white/10 tabletMinWidth:text-2xl tabletMinWidth:mb-20 fullHdMinWidth:text-3xl"
          />
          <input
            type="password"
            placeholder="Masukan Password"
            className="text-xl py-5 pr-5 mb-10 bg-transparent placeholder-white border-b-2 border-gray-100 outline-none ring-[#FEDF16]/50 transition focus:ring-2 focus:bg-white/10 tabletMinWidth:text-2xl tabletMinWidth:mb-20 fullHdMinWidth:text-3xl"
          />
          <button
            type="submit"
            className=" text-black text-2xl mb-10 p-5 bg-[#FEDF16] tabletMinWidth:text-4xl tabletMinWidth:mb-14"
          >
            Login
          </button>
          <p className="text-base tabletMinWidth:text-xl fullHdMinWidth:text-2xl">
            lupa kata sandi ?
          </p>
        </div>
      </form>
    </section>
  );
}
