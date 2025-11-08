import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface TextPressureProps {
    text?: string;
    fontFamily?: string;
    fontUrl?: string;
    width?: boolean;
    weight?: boolean;
    italic?: boolean;
    alpha?: boolean;
    flex?: boolean;
    stroke?: boolean;
    scale?: boolean;
    textColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    className?: string;
    minFontSize?: number;
}

const GalleryText: React.FC<TextPressureProps> = ({
    text = '',
    fontFamily = 'Compressa VF',
    fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
    width = true,
    weight = true,
    italic = true,
    alpha = false,
    flex = true,
    stroke = false,
    scale = false,
    textColor = '#FFFFFF',
    strokeColor = '#FF0000',
    strokeWidth = 2,
    className = '',
    minFontSize = 24,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
    const spanCentersRef = useRef<{ x: number; y: number }[]>([]);
    const titleMetricsRef = useRef({ width: 0 });
    const animationFrameRef = useRef<number | null>(null);

    const mouseRef = useRef({ x: 0, y: 0 });
    const cursorRef = useRef({ x: 0, y: 0 });

    const [fontSize, setFontSize] = useState(minFontSize);
    const [scaleY, setScaleY] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);

    const chars = text.split('');

    const measureLayout = useCallback(() => {
        if (!titleRef.current) return;
        const centers: { x: number; y: number }[] = [];
        spansRef.current.forEach((span, index) => {
            if (!span) return;
            const rect = span.getBoundingClientRect();
            centers[index] = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            };
        });
        spanCentersRef.current = centers;
        const titleRect = titleRef.current.getBoundingClientRect();
        titleMetricsRef.current.width = titleRect.width;
    }, []);

    const updateGlyphs = useCallback(() => {
        if (!titleRef.current) return;
        const spans = spansRef.current;
        const centers = spanCentersRef.current;
        const maxDist = Math.max(titleMetricsRef.current.width / 2, 1);
        spans.forEach((span, index) => {
            if (!span) return;
            const center = centers[index];
            if (!center) return;
            const dx = mouseRef.current.x - center.x;
            const dy = mouseRef.current.y - center.y;
            const distance = Math.min(Math.sqrt(dx * dx + dy * dy), maxDist);
            const ratio = maxDist > 0 ? distance / maxDist : 0;
            const computeAttr = (minVal: number, maxVal: number) => {
                const value = minVal + maxVal * (1 - ratio);
                return value < minVal ? minVal : value;
            };
            const wdthValue = width ? Math.round(computeAttr(5, 200)) : 100;
            const wghtValue = weight ? Math.round(computeAttr(100, 900)) : 400;
            const italValue = italic ? computeAttr(0, 1) : 0;
            const alphaValue = alpha ? Math.min(1, computeAttr(0, 1)) : 1;
            span.style.opacity = alpha ? alphaValue.toFixed(2) : '1';
            span.style.fontVariationSettings = `'wght' ${wghtValue}, 'wdth' ${wdthValue}, 'ital' ${italValue.toFixed(2)}`;
        });
    }, [alpha, italic, weight, width]);

    const runStep = useCallback(() => {
        mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
        mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;
        updateGlyphs();
        const dx = Math.abs(cursorRef.current.x - mouseRef.current.x);
        const dy = Math.abs(cursorRef.current.y - mouseRef.current.y);
        if (dx > 0.5 || dy > 0.5) {
            animationFrameRef.current = requestAnimationFrame(runStep);
        } else {
            animationFrameRef.current = null;
        }
    }, [updateGlyphs]);

    useLayoutEffect(() => {
        spansRef.current.length = chars.length;
        measureLayout();
        updateGlyphs();
    }, [measureLayout, updateGlyphs, chars.length, fontSize, lineHeight, scaleY, text]);

    useEffect(() => {
        if (!titleRef.current || typeof ResizeObserver === 'undefined') return;
        const observer = new ResizeObserver(() => {
            measureLayout();
            updateGlyphs();
        });
        observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, [measureLayout, updateGlyphs]);

    useEffect(() => {
        const handlePointer = (x: number, y: number) => {
            cursorRef.current.x = x;
            cursorRef.current.y = y;
            if (animationFrameRef.current !== null) return;
            animationFrameRef.current = requestAnimationFrame(runStep);
        };
        const handleMouseMove = (e: MouseEvent) => handlePointer(e.clientX, e.clientY);
        const handleTouchMove = (e: TouchEvent) => {
            const t = e.touches[0];
            if (t) handlePointer(t.clientX, t.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            mouseRef.current.x = centerX;
            mouseRef.current.y = centerY;
            cursorRef.current.x = centerX;
            cursorRef.current.y = centerY;
            updateGlyphs();
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [runStep, updateGlyphs]);

    useEffect(() => {
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, []);

    const setSize = useCallback(() => {
        if (!containerRef.current || !titleRef.current) return;
        const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 768;
        let newFontSize: number;
        if (isMobile) {
            newFontSize = Math.min(containerW / (chars.length * 0.6), 40);
        } else {
            newFontSize = Math.min(containerW / (chars.length * 0.7), 80);
        }
        newFontSize = Math.max(newFontSize, minFontSize);
        setFontSize(newFontSize);
        setScaleY(1);
        setLineHeight(1);
        requestAnimationFrame(() => {
            if (!titleRef.current) return;
            if (scale && containerH > 0) {
                const textRect = titleRef.current.getBoundingClientRect();
                if (textRect.height > 0) {
                    const yRatio = containerH / textRect.height;
                    if (yRatio < 1) {
                        setScaleY(yRatio * 0.9);
                        setLineHeight(yRatio * 0.9);
                    }
                }
            }
        });
    }, [chars.length, minFontSize, scale]);

    useEffect(() => {
        setSize();
        const handleResize = () => setSize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setSize]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden bg-transparent"
        >
            <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

            <h1
                ref={titleRef}
                className={`text-pressure-title ${className} ${flex ? 'flex justify-between' : ''} ${stroke ? 'stroke' : ''} uppercase text-center`}
                style={{
                    fontFamily,
                    fontSize,
                    lineHeight,
                    transform: `scale(1, ${scaleY})`,
                    transformOrigin: 'center top',
                    margin: 0,
                    fontWeight: 100,
                    color: stroke ? undefined : textColor,
                    whiteSpace: 'nowrap',
                    overflow: 'visible',
                }}
            >
                {chars.map((char, i) => (
                    <span
                        key={i}
                        ref={el => { spansRef.current[i] = el; }}
                        data-char={char}
                        className="inline-block"
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default GalleryText;
