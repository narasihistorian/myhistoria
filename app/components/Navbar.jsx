import { montserratFont } from "../lib/FontGoogle";
import DesktopNavbar from "./DesktopNavbar";
import LogoNavbar from "./LogoNavbar";

const Navbar = () => {
  return (
    <nav
      className={`${montserratFont.className} z-10 px-[5%] fixed flex justify-between items-center w-full min-h-[10vh]`}
    >
      <LogoNavbar />
      <DesktopNavbar />
    </nav>
  );
};

export default Navbar;
