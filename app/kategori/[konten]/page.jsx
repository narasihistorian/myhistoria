import H1TitleKategori from '@/app/lib/H1TitleKategori';
import { KategoriMainCard } from './card-kategori/KategoriMainCard';
import KategoriCard from './card-kategori/Card';

export default function Kategori({ params }) {
  let text = params.konten;
  text = decodeURIComponent(text);

  return (
    <main>
      <section className="relative w-full px-[5%]">
        <div className="flex flex-col justify-center items-center py-[25%] text-white desktopMinWidth:py-[10%]">
          <H1TitleKategori>
            {text === 'all' && 'Kategori Historian'}
            {text !== 'all' &&
              `Berkaitan dengan ${text.charAt(0).toUpperCase() + text.slice(1)}
              `}
          </H1TitleKategori>
          <div className="grid grid-cols-6 grid-flow-row gap 1">
            {KategoriMainCard.map((kategori) => (
              <KategoriCard
                key={kategori.id}
                image={kategori.image}
                name={kategori.name}
                description={kategori.description}
                buttondescription={kategori.buttondescription}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
