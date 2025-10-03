import React, { useState, useRef, useEffect } from "react";
import HeroHeading from "../../Text_Animation/HomeHeroText";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBXvyQXa7LjTNqqDkm3uvubhhkQ1A5dWZs" });

const systemPrompt = "You are Buddy, an AI assistant. Help users with robotics, coding, and Bidyut Innovation programs.";

// --- Improved ChatBox component for better content, alignment, and responsiveness ---
function ChatBox({
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
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!open) return null;
  return (
    <div className="absolute bottom-16 right-2 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-[#0ACF83] flex flex-col animate-fade-in
      sm:w-80 sm:right-2
      ">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-[#f8fefb] rounded-t-2xl">
        <div className="flex items-center gap-2">
          <img src="/ChatBotRobot.svg" alt="Bot" className="w-6 h-6" />
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
        How can I help you today? Ask me anything about robotics, coding, or Bidyut Innovation!
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
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            onSend(input);
            setInput("");
          }
        }}
      >
        <input
          type="text"
          className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0ACF83] transition"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="ml-2 bg-[#0ACF83] rounded-full p-2 hover:bg-[#099e66] transition">
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentVideoIndex] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "me" | "bot"; text: string }[]>([
    {
      from: "bot" as const,
      text: "👋 Hi! I'm Buddy, your AI assistant.\n\nYou can ask me about:\n• Robotics concepts\n• Coding help\n• Bidyut Innovation programs\n\nHow can I assist you today?",
    },
  ]);

  const videos = ["/fnf 03.mp4"];

  // Handle sending message
  const handleSend = async (msg: string) => {
    setMessages((prev) => [...prev, { from: "me" as const, text: msg }]);

    // Prepare conversation history
    const conversation = messages
      .map((m) => `${m.from === "me" ? "User" : "Buddy"}: ${m.text}`)
      .join("\n");

    const fullPrompt = `${systemPrompt}\n${conversation}\nUser: ${msg}\nBuddy:`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: fullPrompt,
      });

      setMessages((prev) => [
        ...prev,
        { from: "bot" as const, text: response.text?.trim() || "" },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        { from: "bot" as const, text: "Sorry, I encountered an error. Please try again." },
      ]);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center font-poppins overflow-hidden">
      {/* Google Fonts (you may want to move this to _document.tsx or index.html) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Background Videos */}
      {videos.map((video, index) => (
        <video
          key={index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center justify-center">
        {/* Small tagline */}
        <div className="text-white dark:text-gray-100 font-semibold text-sm sm:text-base tracking-wide mb-6 drop-shadow-md">
          {t("learnRobotics")}
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight text-white drop-shadow-lg mb-6">
          <HeroHeading
            text={["Think Limitless Learn Beyond Boundaries"]}
            typingSpeed={40}
            pauseDuration={0}
            showCursor={false}
            highlight={{ text: "Think Limitless", color: "#0acf83" }}
          />
        </h1>

        {/* Description */}
        <p className="text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2 sm:px-4">
          Bidyut is the country's most advanced Robotic Edtech Company,
          empowering schools and students in their quest for holistic
          development.
        </p>
      </div>

      {/* Floating Chatbot Button with Bot Image and Speech Bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Speech Bubble - smaller width */}
        {!chatOpen && (
          <div
            className="mb-1 bg-white text-gray-800 text-xs px-2 py-1 rounded-lg shadow-md max-w-[110px] font-medium border border-[#0ACF83]"
            style={{
              fontFamily: "inherit",
              lineHeight: "1.3",
            }}
          >
            <span className="font-semibold text-[#0ACF83]">Hi, I'm Buddy!</span>
            <br />
            <span>
              Ask me anything 🚀
            </span>
          </div>
        )}
        {/* Bot Image Button (bigger, only when chatbox is closed) */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="focus:outline-none"
            aria-label="Open Chatbot"
          >
            <img
              src="/ChatBotRobot.svg"
              alt="Chatbot Robot"
              className="w-20 h-20 object-contain"
              style={{ background: "transparent" }}
            />
          </button>
        )}
        {/* ChatBox (robot ke pass, absolute position, only when open) */}
        <div className="relative w-full flex justify-end">
          <ChatBox
            open={chatOpen}
            onClose={() => setChatOpen(false)}
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
