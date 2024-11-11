import { robotoFont } from '../lib/FontGoogle';

import Image from 'next/image';

import logo from '../../public/img/logo-narasihistorian-1-02-1.png';
import NavbarMenu from './NavbarMenu';
import Link from 'next/link';

export default function DesktopNavbar() {
  return (
    <nav className="relative z-10 px-[5%] min-h-[10vh] flex justify-between items-center">
      <div className="relative z-10 w-[15rem] h-[5rem] tabletMinWidth:w-[25rem] tabletMinWidth:h-[10rem]">
        <Link href="/" alt="true">
          <Image
            alt="logo navbar"
            src={logo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
      <ul
        className={`${robotoFont.className} flex text-white items-center gap-10 text-base tabletMinWidth:text-2xl desktopMinWidth:text-xl`}
      >
        <NavbarMenu />
      </ul>
    </nav>
  );
}
