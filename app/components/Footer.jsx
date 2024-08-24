import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { robotoFont } from "../lib/FontGoogle";

export default function Footer() {
  return (
    <footer className="relative mt-auto min-h-[10vh] border-t z-10 gap-2 flex flex-row justify-between items-center">
      <small
        className={`${robotoFont.className} text-lg text-[#ffffffe0] font-bold tabletMinWidth:text-2xl`}
      >
        2024 NarasiHistorian
      </small>
      <div className="flex items-center gap-3">
        <div className="">
          <Link href="mailto:agungrosyandi@gmail.com">
            <AiOutlineMail size={20} />
          </Link>
        </div>
        <div className="">
          <Link
            href="https://www.instagram.com/narasihistorian/"
            target="_blank"
          >
            <AiOutlineInstagram size={20} />
          </Link>
        </div>
        <div className="">
          <Link
            href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
            target="_blank"
          >
            <AiOutlineYoutube size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
