import { robotoFont } from '../lib/FontGoogle';

export default function Description({ children }) {
  return (
    <p
      className={`${robotoFont.className} text-base text-center tabletMinWidth:text-2xl desktopMinWidth:text-start desktopMinWidth:text-xl`}
    >
      {children}
    </p>
  );
}
