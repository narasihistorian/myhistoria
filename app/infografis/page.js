"use client";

import NavbarSections from "../components/Navbar";
import InfografisSections from "./Infografis";
import FooterSections from "../components/Footer";

export default function Infografis() {
  return (
    <>
      <NavbarSections />
      <main>
        <InfografisSections />
      </main>
      <FooterSections />
    </>
  );
}
