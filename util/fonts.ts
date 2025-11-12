import { Playfair_Display, M_PLUS_1_Code, Zalando_Sans_Expanded } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair"
})

const mPlus = M_PLUS_1_Code({
  variable: "--font-m-plus",
  subsets: ["latin"],
});

const zalando = Zalando_Sans_Expanded({
  variable: "--font-zalando",
  subsets: ["latin"],
  weight: ["200"]
});

export const fonts = `${playfairDisplay.variable} ${mPlus.variable} ${zalando.variable}`;