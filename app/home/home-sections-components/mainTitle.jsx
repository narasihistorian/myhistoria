import SearchForm from "./search-form";

export default function MainTitle() {
  return (
    <div className="z-[2] px-[5%] w-full text-white flex flex-col justify-center text-center items-center text-6xl tabletMinWidth:text-8xl fullHdMinWidth:text-9xl">
      <h1 className="font-DrukMediumTrial">
        Everything About <span className="text-[#fedf16e0]">History </span>
      </h1>
      <SearchForm />
    </div>
  );
}
