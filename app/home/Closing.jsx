import ClosingMainParagraph from './closing-sections-components/closingMainParagraph';
import IconClosing from './closing-sections-components/iconClosing';

// main component ---------------------------------------

const Closing = () => {
  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden flex flex-col items-center justify-center text-center py-10 px-20 laptopMinWidth:px-[10rem] desktopMinWidth:px-[20rem] fullHdMinWidth:px-[40rem]">
        <ClosingMainParagraph />
        <IconClosing />
      </div>
    </section>
  );
};

export default Closing;
