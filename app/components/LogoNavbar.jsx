import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/img/logo-narasihistorian-1-02-1.png';

export default function LogoNavbar() {
  return (
    <div className="relative z-10 text-white text-2xl uppercase tabletMinWidth:text-3xl">
      <Link rel="preload" href="/">
        <div className="relative w-[17rem] h-[7rem] tabletMinWidth:w-[25rem] fullHdMinWidth:w-[30rem]">
          <Image
            alt="logo navbar"
            src={logo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Link>
    </div>
  );
}
