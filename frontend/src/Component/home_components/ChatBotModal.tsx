export default function ChatBotModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full shadow p-1 z-10"
          aria-label="Close"
        >
          <span className="text-2xl font-bold text-gray-500">&times;</span>
        </button>
        {/* Chatbot UI */}
        <div className="bg-white rounded-2xl shadow-2xl p-0 w-[370px] sm:w-[420px] h-[500px] flex flex-col justify-between border border-[#0ACF83] relative overflow-hidden">
          {/* Logo and Heading */}
          <div className="flex flex-col items-center pt-6 pb-2">
            <img src="/bidyut_logo_green 1.svg" alt="Bidyut Logo" className="h-8 mb-2" />
            <div className="text-gray-500 text-lg font-semibold">Ask our AI anything</div>
          </div>
          {/* Chat Area */}
          <div className="flex-1 px-4 py-2 overflow-y-auto">
            <div className="mb-4">
              <div className="text-xs text-gray-700 font-bold mb-1">ME</div>
              <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 shadow text-sm w-fit">
                What can I ask you to do?
              </div>
            </div>
            <div>
              <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 shadow text-sm w-fit">
                Great question! You can ask for my help with the following:<br />
                1. Anything to do with your reports in our software e.g. What is the last report we exported?<br />
                2. Anything to do with your organisation e.g. how many employees are using our software?
              </div>
            </div>
          </div>
          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 flex items-center bg-[#f8fefb]">
            <input
              type="text"
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
              placeholder="Ask me anything about ....."
              disabled
            />
            <button className="ml-2 bg-[#0ACF83] rounded-full p-2">
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