import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import purgecssModule from "@fullhuman/postcss-purgecss";

const purgecss = purgecssModule.default ?? purgecssModule;

const productionPlugins = process.env.NODE_ENV === "production"
  ? [
      purgecss({
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ["html", "body"],
          deep: [/^hover:/, /^focus:/, /^active:/, /^group-hover:/],
        },
      }),
    ]
  : [];

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...productionPlugins,
  ],
};
