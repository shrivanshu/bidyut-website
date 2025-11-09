import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import purgecssModule from "@fullhuman/postcss-purgecss";

const purgecss = purgecssModule.default ?? purgecssModule;

const productionPlugins = [];
// Disabled PurgeCSS - causing UI issues
// const productionPlugins = process.env.NODE_ENV === "production"
//   ? [
//       purgecss({
//         content: [
//           "./index.html",
//           "./src/**/*.{js,ts,jsx,tsx}",
//         ],
//         defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//         safelist: {
//           standard: ["html", "body"],
//           deep: [/^hover:/, /^focus:/, /^active:/, /^group-hover:/, /^dark:/, /^sm:/, /^md:/, /^lg:/, /^xl:/, /^2xl:/],
//           greedy: [/^translate/, /^scale/, /^rotate/, /^opacity/, /^bg-/, /^text-/, /^border-/, /^flex/, /^grid/],
//         },
//       }),
//     ]
//   : [];

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...productionPlugins,
  ],
};
