import React, { useEffect, useRef, useState, useMemo, memo } from "react";
import EN1 from "./EN1";
import HomeHeroText from "../../Text_Animation/HomeHeroText";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";
import { getApiUrl } from "../../utils/api";

interface Article {
  title: string;
  description?: string;
  url: string;
  source: { title: string };
  date: string;
  image?: string;
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

const EducationNews: React.FC = memo(() => {
  const { t } = useLanguage();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollRef2 = useRef<HTMLDivElement | null>(null);
  const hover1 = useRef(false);
  const hover2 = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const apiUrl = getApiUrl('/news');
        const controller = new AbortController();
        abortControllerRef.current = controller;
        
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        timeoutIdRef.current = timeoutId;
        
        const res = await fetch(apiUrl, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const data = await res.json();
        if (data.success && data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setArticles([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(fetchArticles, 100);
    return () => {
      clearTimeout(timer);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);


  const { loop1, loop2 } = useMemo(() => {
    const row1 = ensureSix(articles.slice(0, 6));
    const row2 = ensureSix(articles.slice(6, 12));
    return {
      loop1: [...row1, ...row1],
      loop2: [...row2, ...row2]
    };
  }, [articles]);

  // scrolling animation
  useEffect(() => {
    const c1 = scrollRef.current;
    const c2 = scrollRef2.current;
    if (!c1 || !c2) return;

    let raf = 0;
    const speed = 0.6;
    const speed2 = -0.6;
    
    let half1 = c1.scrollWidth / 2;
    let half2 = c2.scrollWidth / 2;

    const step = () => {
      // Batch reads first, then writes to avoid forced reflow
      let newScroll1 = c1.scrollLeft;
      let newScroll2 = c2.scrollLeft;

      if (!hover1.current) {
        newScroll1 += speed;
        if (newScroll1 >= half1) newScroll1 = 0;
      }
      if (!hover2.current) {
        newScroll2 += speed2;
        if (newScroll2 <= 0) newScroll2 = half2;
      }

      // Write updates together
      if (!hover1.current) c1.scrollLeft = newScroll1;
      if (!hover2.current) c2.scrollLeft = newScroll2;

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [articles]);

  if (articles.length === 0 && !isLoading) {
    return null;
  }

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

        {isLoading ? (
          <div className="flex gap-3 overflow-x-auto pb-6 pt-6 scrollbar-hide">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-80 h-40 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <>
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
                  timestamp={new Date(a.date).toLocaleString()}
                  title={a.title}
                  content={a.description ?? ""}
                  author={a.source.title}
                  url={a.url}
                />
              ))}
            </div>

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
                  timestamp={new Date(a.date).toLocaleString()}
                  title={a.title}
                  content={a.description ?? ""}
                  author={a.source.title}
                  url={a.url}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
});

export default EducationNews;
