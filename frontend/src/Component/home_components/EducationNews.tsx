import React, { useEffect, useRef, useState } from "react";
import EN1 from "./EN1";
import HomeHeroText from "../../Text_Animation/HomeHeroText";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

interface Article {
  source: { name: string };
  title: string;
  description?: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  author?: string | null;
}

const ensureSix = (arr: Article[]) => {
  if (arr.length >= 6) return arr.slice(0, 6);
  if (arr.length === 0) return [];
  const out = [...arr];
  while (out.length < 6) {
    out.push(...arr);
  }
  return out.slice(0, 6);
};

const EducationNews: React.FC = () => {
  const { t } = useLanguage();
  const [articles, setArticles] = useState<Article[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollRef2 = useRef<HTMLDivElement | null>(null);
  const hover1 = useRef(false);
  const hover2 = useRef(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
       `https://newsapi.org/v2/everything?q=(education OR technology OR robotics) -stock -stocks -finance -market -crypto&language=en&sortBy=publishedAt&pageSize=12&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );

        const data = await res.json();
        if (data && Array.isArray(data.articles)) {
          setArticles(data.articles);
        }
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, []);

  // Prepare two rows (6 items each). Duplicate each row in JSX to make a seamless loop
  const row1 = ensureSix(articles.slice(0, 6));
  const row2 = ensureSix(articles.slice(6, 12));

  const loop1 = [...row1, ...row1];
  const loop2 = [...row2, ...row2];

  // animation using requestAnimationFrame, pause on hover
  useEffect(() => {
    const c1 = scrollRef.current;
    const c2 = scrollRef2.current;
    if (!c1 || !c2) return;

    let raf = 0;
    const speed = 0.6; // px per frame (adjust)
    const speed2 = -0.6;

    const step = () => {
      if (c1 && !hover1.current) {
        c1.scrollLeft += speed;
        if (c1.scrollLeft >= c1.scrollWidth / 2) {
          c1.scrollLeft = 0;
        }
      }

      if (c2 && !hover2.current) {
        c2.scrollLeft += speed2;
        // since speed2 is negative, when <= 0 wrap
        if (c2.scrollLeft <= 0) {
          c2.scrollLeft = c2.scrollWidth / 2;
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [articles]); // restart animation if articles change

  return (
    <section className="pt-56 pb-10 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 md:pt-14">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <HomeHeroText
              text={[`${t("latestNews").split(" & ")[0]} & ${t("latestNews").split(" & ")[1]}`]}
              highlight={{ text: t("latestNews").split(" & ")[1], color: "#22c55e" }}
              typingSpeed={40}
              pauseDuration={0}
              showCursor={false}
              className="text-4xl font-bold"
              startOnVisible={true}
            />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("stayUpdated")}
          </p>
        </div>

        {/* Row 1 */}
        <div
          ref={scrollRef}
          onMouseEnter={() => (hover1.current = true)}
          onMouseLeave={() => (hover1.current = false)}
          className="flex gap-3 overflow-x-auto overflow-y-hidden pb-6 pt-6 relative scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
        >
          {loop1.map((a, i) => (
            <EN1
              key={`r1-${i}-${a.url}`}
              platform="news"
              timestamp={new Date(a.publishedAt).toLocaleString()}
              title={a.title}
              content={a.description ?? ""}
              author={a.author ?? a.source.name}
              url={a.url}
            />
          ))}
        </div>

        {/* Row 2 (opposite direction) */}
        <div
          ref={scrollRef2}
          onMouseEnter={() => (hover2.current = true)}
          onMouseLeave={() => (hover2.current = false)}
          className="flex gap-3 overflow-x-auto overflow-y-hidden pb-6 pt-6 relative mt-6 scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
        >
          {loop2.map((a, i) => (
            <EN1
              key={`r2-${i}-${a.url}`}
              platform="news"
              timestamp={new Date(a.publishedAt).toLocaleString()}
              title={a.title}
              content={a.description ?? ""}
              author={a.author ?? a.source.name}
              url={a.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationNews;
