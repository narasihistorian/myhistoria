"use client";

import NavbarSections from "../components/Navbar";
import KategoriSections from "./Kategori";
import FooterSections from "../components/Footer";

export default function Kategori() {
  return (
    <>
      <NavbarSections />
      <main>
        <KategoriSections />
      </main>
      <FooterSections />
    </>
  );
}
