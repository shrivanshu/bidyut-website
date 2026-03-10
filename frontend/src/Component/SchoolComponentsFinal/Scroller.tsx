
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

const images = [
  { src: "/School/1.webp", textKey: "schoolScrollerItem1" },
  { src: "/School/2.webp", textKey: "schoolScrollerItem2" },
  { src: "/School/33.webp", textKey: "schoolScrollerItem3" },
  { src: "/School/4.webp", textKey: "schoolScrollerItem4" },
  { src: "/School/5.webp", textKey: "schoolScrollerItem5" },
  { src: "/School/6.webp", textKey: "schoolScrollerItem6" },
  { src: "/School/7.webp", textKey: "schoolScrollerItem7" },
  { src: "/School/8.webp", textKey: "schoolScrollerItem8" },
  { src: "/School/9.webp", textKey: "schoolScrollerItem9" },
  { src: "/School/10.webp", textKey: "schoolScrollerItem10" },
  { src: "/School/111.webp", textKey: "schoolScrollerItem11" },
  { src: "/School/12.webp", textKey: "schoolScrollerItem12" },
];


export default function Scroller() {
  const { t } = useLanguage();
  return (
    <div className="overflow-hidden w-full dark:bg-black  py-14 md:py-24">
      {/* The moving track */}
      <div className="flex animate-scroll space-x-6">
        {/* Duplicate list for infinite loop */}
        {[...images, ...images].map((item, i) => (
          <div
            key={i}
            className="relative min-w-[250px] flex-shrink-0 rounded-lg overflow-hidden "
          >
            <img
              src={item.src}
              alt={t(item.textKey)}
              className=" w-[300px] h-[60px] md:w-[400px]  md:h-28 object-fill"
            />
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center ">
              <p className="text-white font-semibold text-lg text-center px-2">
                {t(item.textKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
