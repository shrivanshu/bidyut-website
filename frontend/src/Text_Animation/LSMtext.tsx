import React, { useRef, useEffect } from "react";
// @ts-ignore - Pre-existing GSAP SplitText TypeScript issues
import type { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";
import { loadGSAP, loadScrollTrigger, loadSplitText } from "../utils/gsapLoader";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef<ScrollTriggerInstance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const [gsap, , SplitText] = await Promise.all([
          loadGSAP(),
          loadScrollTrigger(),
          loadSplitText()
        ]);

        // Check if component is still mounted
        if (!ref.current) return;

        const el = ref.current;
        animationCompletedRef.current = false;

        el.removeAttribute("aria-label");
        el.removeAttribute("role");

        const absoluteLines = splitType === "lines";
        if (absoluteLines) el.style.position = "relative";

        // @ts-ignore - Pre-existing GSAP SplitText TypeScript issues
        let splitter: typeof SplitText;
        try {
          // @ts-ignore
          splitter = new SplitText(el, {
            type: splitType,
            absolute: absoluteLines,
            linesClass: "split-line",
          });
        } catch (error) {
          console.error("Failed to create SplitText:", error);
          return;
        }

        let targets: Element[];
        switch (splitType) {
          case "lines":
            // @ts-ignore
            targets = splitter.lines;
            break;
          case "words":
            // @ts-ignore
            targets = splitter.words;
            break;
          case "chars":
            // @ts-ignore
            targets = splitter.chars;
            break;
          default:
            // @ts-ignore
            targets = splitter.chars;
        }

        if (!targets || targets.length === 0) {
          console.warn("No targets found for SplitText animation");
          // @ts-ignore
          splitter.revert();
          return;
        }

        targets.forEach((t) => {
          (t as HTMLElement).style.willChange = "transform, opacity";
        });

        const startPct = (1 - threshold) * 100;
        const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
        const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
        const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
        const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
        const start = `top ${startPct}%${sign}`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
            once: true,
            onToggle: (self) => {
              scrollTriggerRef.current = self;
            },
          },
          smoothChildTiming: true,
          onComplete: () => {
            animationCompletedRef.current = true;
            gsap.set(targets, {
              ...to,
              clearProps: "willChange",
              immediateRender: true,
            });
            onLetterAnimationComplete?.();
          },
        });

        tl.set(targets, { ...from, immediateRender: false, force3D: true });
        tl.to(targets, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          force3D: true,
        });

        cleanup = () => {
          tl.kill();
          if (scrollTriggerRef.current) {
            scrollTriggerRef.current.kill();
            scrollTriggerRef.current = null;
          }
          gsap.killTweensOf(targets);
          if (splitter) {
            // @ts-ignore
            splitter.revert();
          }
        };
      } catch (error) {
        console.error('Failed to load GSAP dependencies:', error);
      }
    })();

    return () => {
      if (cleanup) cleanup();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
