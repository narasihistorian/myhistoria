import { robotoFont } from '../lib/FontGoogle';

export default function Title({ children }) {
  return (
    <h1
      className={`${robotoFont.className} text-[#fedf16e0] text-4xl tabletMinWidth:text-6xl desktopMinWidth:text-5xl`}
    >
      {children}
    </h1>
  );
}
