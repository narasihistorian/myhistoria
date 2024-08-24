"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) return;
    router.push(`/kategori/${searchText}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white flex flex-row justify-center items-center w-full gap-x-3 py-5"
    >
      <IoSearchCircleSharp className="fill-[#fedf16e0]" size={35} />
      <input
        className="bg-[#2F2F31]/50 w-full border text-base px-5 py-2 outline-none ring-[#FEDF16]/50 transition focus:ring-2 tabletMinWidth:text-2xl"
        type="text"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        placeholder="Cari Konten / Klik Menu Kategori"
        spellCheck={false}
      />
    </form>
  );
}
