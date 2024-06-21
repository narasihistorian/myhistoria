import { montserratFont } from '../lib/FontGoogle';
import DesktopNavbar from './DesktopNavbar';
import LogoNavbar from './LogoNavbar';

const Navbar = () => {
  return (
    <>
      <nav
        className={`${montserratFont.className} fixed left-0 flex justify-between items-center w-full min-h-[10vh] z-10 px-[5%] py-5`}
      >
        <LogoNavbar />
        <DesktopNavbar />
      </nav>
    </>
  );
};

export default Navbar;
