import { useState, useRef, useEffect } from 'react';
import { chatService } from '../../services/chatService';

interface Message {
  from: 'me' | 'bot';
  text: string;
}

export default function ChatBotModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hello! I\'m Buddy from Bidyut Innovation. Ask me about robotics, coding, or our programs!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { from: 'me', text: userMessage }]);
    setLoading(true);

    try {
      const response = await chatService.sendMessage(userMessage, messages);
      setMessages(prev => [...prev, { from: 'bot', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full shadow p-1 z-10"
          aria-label="Close"
        >
          <span className="text-2xl font-bold text-gray-500">&times;</span>
        </button>
        <div className="bg-white rounded-2xl shadow-2xl p-0 w-[370px] sm:w-[420px] h-[500px] flex flex-col justify-between border border-[#0ACF83] relative overflow-hidden">
          <div className="flex flex-col items-center pt-6 pb-2">
            <img src="/bidyut_logo_green 1.svg" alt="Bidyut Logo" className="h-8 mb-2" />
            <div className="text-gray-500 text-lg font-semibold">Ask our AI anything</div>
          </div>
          <div className="flex-1 px-4 py-2 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-4">
                {msg.from === 'me' && <div className="text-xs text-gray-700 font-bold mb-1">ME</div>}
                <div className={`bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 shadow text-sm w-fit ${msg.from === 'bot' ? 'bg-gray-50' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-sm text-gray-500">Buddy is typing...</div>}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t border-gray-100 flex items-center bg-[#f8fefb]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
              placeholder="Ask me anything about robotics..."
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading} className="ml-2 bg-[#0ACF83] rounded-full p-2 disabled:opacity-50">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}