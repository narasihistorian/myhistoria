import SearchForm from './search-form';

export default function MainTitle() {
  return (
    <div className="z-[2] w-full flex flex-col justify-center text-white px-[5%] tabletMinWidth:text-center desktopMinWidth:text-start ">
      <div className="font-DrukBoldTrial uppercase text-[7rem] leading-[7rem] tabletMinWidth:text-[9rem] tabletMinWidth:leading-[9rem] fullHdMinWidth:text-[11rem] fullHdMinWidth:leading-[11rem]">
        <h1>
          <span className="">Everything</span>
        </h1>
        <h1>
          About <span className="text-[#fedf16e0]">History</span>
        </h1>
      </div>
      <SearchForm />
    </div>
  );
}
