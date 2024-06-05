import { Montserrat, Poppins } from "next/font/google";

export const montserratFont = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

export const montserratItalicFont = Montserrat({
  style: ["italic"],
  subsets: ["latin"],
  weight: ["200"],
});

export const poppinsFont = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});
