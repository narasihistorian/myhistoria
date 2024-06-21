import { montserratFont, poppinsFont } from '@/app/lib/FontGoogle';

export default function ClosingMainParagraph() {
  return (
    <>
      <h6
        className={`${montserratFont.className} text-3xl tabletMinWidth:text-5xl laptopMinWidth:text-6xl`}
      >
        Tentang Narasi
        <span className="text-[#fedf16e0]">Historian</span>
      </h6>
      <p
        className={`${poppinsFont.className} text-sm pt-5 tabletMinWidth:text-2xl tabletMinWidth:pt-10 laptopMinWidth:text-xl fullHdMinWidth:text-2xl`}
      >
        Narasihistorian merupakan media konten yang berfokus pada sejarah
        peradaban global dengan visualisasi yang simple dan interaktif, berupa
        konten artikel ataupun video infografik.{' '}
      </p>
    </>
  );
}
