import ArtikelCard from './artikel-sections-components/artikelCard';
import kategoriBackground from '../../public/img/kategori-cover.jpg';
import videoBackground from '../../public/img/video-cover-1.jpg';
import {
  KategoriLink,
  VideoLink,
} from './artikel-sections-components/hyperlinkPage';

// main component ---------------------------------------

const Artikel = () => {
  return (
    <section
      id="artikel"
      className="relative w-full h-full px-10 py-20 laptopMinWidth:py-32"
    >
      <div className="relative grid grid-cols-1 grid-flow-row gap-8 flex-1 py-5">
        <div className="shadow-2xl">
          <ArtikelCard
            mainImage={kategoriBackground}
            mainTitle={'kategori'}
            paragraphTitle={
              'Kategori-kategori sejarah pilihan yang menarik mengenai peradaban dunia, dimulai dari periode roma kuno hingga perang dingin yang dikemas dalam bentuk artikel'
            }
            linkTitle={KategoriLink}
          />
        </div>
        <div className="shadow-2xl">
          <ArtikelCard
            mainImage={videoBackground}
            mainTitle={'Cinematic Video'}
            paragraphTitle={
              'Konten sejarah yang dikemas dalam bentuk visual grafis, meliputi map explanation, cinematic ataupun motion graphic. Namun saat ini konten untuk video belum tersedia dan akan diupdate secepatnya. Ikuti terus perkembangannya'
            }
            linkTitle={VideoLink}
          />
        </div>
      </div>
    </section>
  );
};

export default Artikel;
