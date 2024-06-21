import MainTitle from './home-sections-components/mainTitle';
import MainImage from './home-sections-components/mainImage';

// main component --------------------------------------------------

const Home = () => {
  return (
    <section className="relative w-full h-full">
      <MainImage />
      <div className="relative w-full h-screen flex items-center">
        <MainTitle />
      </div>
    </section>
  );
};

export default Home;
