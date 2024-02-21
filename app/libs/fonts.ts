import { Roboto, Source_Serif_4 } from "next/font/google";

export const fontBase = Roboto({
    subsets: ["latin", "vietnamese"],
    weight: "400"
});

export const fontSecondary = Source_Serif_4({ subsets: ["latin", "vietnamese"] });
