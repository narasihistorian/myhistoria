import SearchForm from "./search-form";

export default function MainTitle() {
  return (
    <div className=" text-white text-6xl tabletMinWidth:text-8xl fullHdMinWidth:text-9xl">
      <h1 className="font-DrukMediumTrial">
        Everything About <span className="text-[#fedf16e0]">History </span>
      </h1>
      <SearchForm />
    </div>
  );
}
