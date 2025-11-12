import { Playfair_Display, M_PLUS_1_Code, Zalando_Sans_Expanded, Reddit_Sans, Source_Serif_4, Cormorant_Upright, Special_Gothic_Condensed_One, Oswald } from "next/font/google";

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

const reddit = Reddit_Sans({
 weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-reddit"
})

const sourceSerif = Source_Serif_4({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-source"
})

const cormorant = Cormorant_Upright({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-cormorant"
})

const gothic = Special_Gothic_Condensed_One ({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-gothic"
})

const oswald = Oswald({
 weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-oswald"
})

export const fonts = `${playfairDisplay.variable} ${mPlus.variable} ${zalando.variable} ${reddit.variable} ${sourceSerif.variable} ${cormorant.variable} ${gothic.variable} ${oswald.variable}`;