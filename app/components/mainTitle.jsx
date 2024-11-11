import SearchForm from './search-form';

export default function MainTitle() {
  return (
    <div className="flex w-full flex-col justify-center items-center gap-5 py-10 desktopMinWidth:items-start desktopMinWidth:pr-[10rem]">
      <h1 className="text-white font-DrukMediumTrial text-7xl tabletMinWidth:text-8xl desktopMinWidth:text-8xl">
        Everything About <span className="text-[#fedf16e0]">History </span>
      </h1>
      <div className="flex w-[30rem]">
        <SearchForm />
      </div>
    </div>
  );
}
