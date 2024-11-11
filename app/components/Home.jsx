import Image from 'next/image';
import MainTitle from './mainTitle';
import backgroundHome from '../../public/img/bg-closing.jpg';
import backgroundClosing from '../../public/img/bg-1920.jpg';
import KategoriComponentMainHome, {
  KategoriMainHome,
} from './KategoriComponentMainHome';

import SectionHomeClosing from './SectionHomeClosing';
import Title from './Title';
import Description from './Description';

const Home = () => {
  return (
    <main className="relative w-full min-h-[80vh] flex flex-col">
      <SectionHomeClosing>
        <div className="relative w-full">
          <Image
            alt="bg home"
            priority={true}
            src={backgroundHome}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <MainTitle />
      </SectionHomeClosing>

      <section className="w-full gap-5 flex flex-col justify-center items-center p-[5%]">
        {KategoriMainHome.map((kategori) => (
          <KategoriComponentMainHome
            key={kategori.id}
            image={kategori.image}
            title={kategori.title}
            description={kategori.description}
            buttondescription={kategori.buttondescription}
            link={kategori.link}
          />
        ))}
      </section>

      <SectionHomeClosing>
        <div className="relative w-full">
          <Image
            alt="bg home"
            priority={true}
            src={backgroundClosing}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-10 gap-5 flex flex-col justify-center items-center tabletMinWidth:gap-10 tabletMinWidth:px-[10rem] desktopMinWidth:px-[0rem] desktopMinWidth:pr-[10rem] desktopMinWidth:items-start">
          <Title>
            <span className="text-[#ffffffe0]">Tentang Narasi</span>
            <span className="text-[#fedf16e0]">Historian</span>
          </Title>
          <Description>
            Narasihistorian merupakan media konten yang berfokus pada sejarah
            peradaban global dengan visualisasi yangyang simple dan interaktif
            baik itu berupa konten artikel ataupun video infografik.
          </Description>
        </div>
      </SectionHomeClosing>
    </main>
  );
};

export default Home;
