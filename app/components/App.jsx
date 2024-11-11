"use client";

import Home from "./Home";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  useEffect(() => {
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return <Home />;
}
