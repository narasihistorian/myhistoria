import Image from 'next/image';

import kategoriImage1 from '../../public/img/kategori-cover.jpg';
import kategoriImage2 from '../../public/img/infografis.jpg';
import kategoriImage3 from '../../public/img/video-cover-1.jpg';
import Title from './Title';
import Description from './Description';
import Link from 'next/link';

export default function KategoriComponentMainHome({
  image,
  title,
  description,
  buttondescription,
  link,
}) {
  return (
    <section className="grid grid-cols-6 grid-flow-row gap-10">
      <div className="shadow-xl col-span-6">
        <div className="flex flex-col desktopMinWidth:flex-row">
          <div className="relative w-full flex-1">{image}</div>
          <div className="flex-1 p-10 gap-5 shadow-xl flex flex-col justify-center items-center tabletMinWidth:px-[15rem] tabletMinWidth:gap-10 desktopMinWidth:items-start ">
            <Title>{title}</Title>
            <Description>{description}</Description>
            <div className="flex justify-center items-center">
              <p className="rounded-full border py-2 px-10 text-base capitalize tabletMinWidth:text-2xl desktopMinWidth:text-xl">
                <Link href={link}>{buttondescription}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ImageKategori = () => {
  return (
    <Image
      className="relative inset-0 w-full h-full object-cover"
      src={kategoriImage1}
      alt=""
    />
  );
};

const ImageInfografis = () => {
  return (
    <Image
      className="relative inset-0 w-full h-full object-cover"
      src={kategoriImage2}
      alt=""
    />
  );
};

const ImageCinematic = () => {
  return (
    <Image
      className="relative inset-0 w-full h-full object-cover"
      src={kategoriImage3}
      alt=""
    />
  );
};

const KategoriMainHome = [
  {
    id: 1,
    image: <ImageKategori />,
    title: 'Kategori',
    description:
      'Kategori-kategori sejarah peradaban di seluruh belahan dunia yang berbeda di setiap kontinen dari waktu ke waktu',
    buttondescription: 'Explore',
    link: '/kategori/all',
  },
  {
    id: 2,
    image: <ImageInfografis />,
    title: 'Infografis',
    description:
      'Infografis historian berisi kumpulan respresentasi visual informasi, dan data secara grafik yang dikemas singkat ',
    buttondescription: 'Explore',
    link: '/undercontruction',
  },
  {
    id: 3,
    image: <ImageCinematic />,
    title: 'Cinematic Video',
    description:
      'Konten cinematic video youtube yang memfokuskan terhadap sejarah peradaban internasional',
    buttondescription: 'Explore',
    link: '/undercontruction',
  },
];

export { KategoriMainHome };
