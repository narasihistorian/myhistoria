import MainTitle from "./mainTitle";
import MainImage from "./mainImage";

const Home = () => {
  return (
    <section className="relative w-full h-full">
      <MainImage />
      <div className="w-full h-screen flex items-center">
        <MainTitle />
      </div>
    </section>
  );
};

export default Home;
