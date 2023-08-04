"use client";

import NavbarSection from "./components/Navbar";
import HomeSection from "./components/Home";
import ArtikelSection from "./components/Artikel";
import ClosingSection from "./components/Closing";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <main>
        <HomeSection />
        <ArtikelSection />
        <ClosingSection />
      </main>
      <FooterSection />
    </>
  );
}
