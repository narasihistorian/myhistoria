export default function SectionHomeClosing({ children }) {
  return (
    <section className="w-full gap-5 flex flex-col justify-center items-center desktopMinWidth:px-[5%] desktopMinWidth:flex-row-reverse desktopMinWidth:shadow-xl">
      {children}
    </section>
  );
}
