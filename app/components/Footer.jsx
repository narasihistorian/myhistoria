import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="relative text-white z-10 w-full min-h-[5vh] bg-[#2F2F31] px-[5%] py-5 flex flex-row justify-between items-center text-lg tabletMinWidth:text-xl laptopMinWidth:text-2xl">
      <small>2024 Create By NarasiHistorian</small>

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
