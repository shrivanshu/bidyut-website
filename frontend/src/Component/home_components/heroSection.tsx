import React, { useState, useRef, useEffect, lazy, Suspense, useCallback, memo } from "react";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

const HeroHeading = lazy(() => import("../../Text_Animation/HomeHeroText"));

// --- Improved ChatBox component for better content, alignment, and responsiveness ---
const ChatBox = memo(function ChatBox({
  open,
  onClose,
  messages,
  onSend,
}: {
  open: boolean;
  onClose: () => void;
  messages: { from: "me" | "bot"; text: string }[];
  onSend: (msg: string) => void;
}) {
  const { t } = useLanguage();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current && open) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  }, [input, onSend]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  if (!open) return null;
  return (
    <div className="absolute bottom-16 right-2 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-[#0ACF83] flex flex-col animate-fade-in
      sm:w-80 sm:right-2
      ">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-[#f8fefb] rounded-t-2xl">
        <div className="flex items-center gap-2">
          <img src="/ChatBotRobot.svg" alt="Bot" className="w-6 h-6" loading="lazy" />
          <span className="font-semibold text-[#0ACF83] text-base">Bidyut AI</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
      </div>
      {/* Welcome Banner */}
      <div className="bg-[#0ACF83] text-white text-xs text-center py-1 px-2 font-medium rounded-b-lg rounded-t-none">
        {t('chatWelcomeBanner')}
      </div>
      {/* Messages */}
      <div
        className="flex-1 px-3 py-2 overflow-y-auto bg-[#f8fefb] custom-scrollbar"
        style={{ maxHeight: 240 }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-2xl text-sm shadow-sm max-w-[80%] break-words ${
                msg.from === "me"
                  ? "bg-[#0ACF83] text-white rounded-br-md"
                  : "bg-white text-gray-800 border border-[#e0e0e0] rounded-bl-md"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <form
        className="flex items-center border-t px-2 py-2 bg-white rounded-b-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0ACF83] transition"
          placeholder={t('chatPlaceholder')}
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit" className="ml-2 bg-[#0ACF83] rounded-full p-2 hover:bg-[#099e66] transition">
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
});

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentVideoIndex] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "me" | "bot"; text: string }[]>([]);
  const chatModuleRef = useRef<null | typeof import("../../services/chatService")>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const videos = ["/fnf 03.webm"];

  useEffect(() => {
    setMessages([{
      from: "bot" as const,
      text: t('chatInitialMessage'),
    }]);
  }, [t]);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChatOpen = useCallback(() => setChatOpen(true), []);
  const handleChatClose = useCallback(() => setChatOpen(false), []);

  const handleSend = useCallback(async (msg: string) => {
    const nextConversation = [...messages, { from: "me" as const, text: msg }];
    setMessages(nextConversation);

    try {
      if (!chatModuleRef.current) {
        chatModuleRef.current = await import("../../services/chatService");
      }
      const response = await chatModuleRef.current.chatService.sendMessage(msg, nextConversation);
      setMessages((prev) => [
        ...prev,
        { from: "bot" as const, text: response },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        { from: "bot" as const, text: "Sorry, I encountered an error. Please try again." },
      ]);
    }
  }, [messages]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-center justify-center text-center font-poppins overflow-hidden">

      {/* Background Videos - Optimized loading */}
      <div className="absolute inset-0 w-full h-full" style={{ aspectRatio: '16/9' }}>
        {videos.map((video, index) => (
          <video
            ref={index === currentVideoIndex ? videoRef : null}
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{ aspectRatio: '16/9', contentVisibility: 'auto' }}
            disablePictureInPicture
            onError={(e) => e.currentTarget.load()}
          />
        ))}
      </div>

      {/* Overlay - Same dark overlay for both light and dark mode for consistent video visibility */}
      <div className="absolute inset-0 bg-gray-900/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center justify-center" style={{ minHeight: '400px', contain: 'layout' }}>
        {/* Small tagline */}
        <div className="text-white dark:text-gray-100 font-semibold text-sm sm:text-base tracking-wide mb-6 drop-shadow-md" style={{ minHeight: '28px', height: '28px', lineHeight: '28px' }}>
          {t("learnRobotics")}
        </div>

        {/* Hero Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight text-white drop-shadow-lg mb-6" style={{ minHeight: '160px', contain: 'layout style' }}>
          <Suspense
            fallback={
              <span className="inline" style={{ color: "#ffffff" }}>
                {t("heroHeadingFallback")}
              </span>
            }
          >
            <HeroHeading
              text={[t("heroHeading")]}
              typingSpeed={40}
              pauseDuration={0}
              showCursor={false}
              highlight={{ text: t("heroHighlight"), color: "#0acf83" }}
            />
          </Suspense>
        </h1>

        {/* Description */}
        <p className="text-white text-base sm:text-lg max-w-4xl mx-auto leading-relaxed drop-shadow-md px-2 sm:px-4" style={{ minHeight: '120px' }}>
          {t('heroLongDescription')}
        </p>
      </div>

      {/* Floating Chatbot Button with Bot Image and Speech Bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" style={{ width: '110px', height: chatOpen ? 'auto' : '140px', contain: 'layout' }}>
        {/* Speech Bubble - smaller width */}
        {!chatOpen && (
          <div
            className="mb-1 bg-white text-gray-800 text-xs px-2 py-1 rounded-lg shadow-md max-w-[110px] font-medium border border-[#0ACF83]"
            style={{
              fontFamily: "inherit",
              lineHeight: "1.3",
              height: '52px',
            }}
          >
            <span className="font-semibold text-emerald-700">{t('chatSpeechBubbleGreeting')}</span>
            <br />
            <span>
              {t('chatSpeechBubblePrompt')}
            </span>
          </div>
        )}
        {/* Bot Image Button (bigger, only when chatbox is closed) */}
        {!chatOpen && (
          <button
            onClick={handleChatOpen}
            className="focus:outline-none"
            aria-label="Open Chatbot"
            style={{ width: '80px', height: '80px' }}
          >
            <img
              src="/ChatBotRobot.svg"
              alt="Chatbot Robot"
              className="w-20 h-20 object-contain"
              style={{ background: "transparent", width: '80px', height: '80px' }}
              loading="lazy"
              width="80"
              height="80"
            />
          </button>
        )}
        {/* ChatBox (robot ke pass, absolute position, only when open) */}
        <div className="relative w-full flex justify-end">
          <ChatBox
            open={chatOpen}
            onClose={handleChatClose}
            messages={messages}
            onSend={handleSend}
          />
        </div>
      </div>
    </section>
  );
};

// Hide vertical scrollbar but keep scroll functionality
import "../../index.css";

export default HeroSection;
