export default function ChatBotModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <style>{`
        /* Isolate chatbot modal from parent text-center inheritance */
        .chat-modal-isolated {
          text-align: left !important;
          direction: ltr !important;
        }
        .chat-modal-isolated,
        .chat-modal-isolated * {
          text-align: left !important;
        }
        /* Override parent section text-center specifically */
        section .chat-modal-isolated {
          text-align: left !important;
        }
        section .chat-modal-isolated * {
          text-align: left !important;
        }
        .text-center .chat-modal-isolated {
          text-align: left !important;
        }
        .text-center .chat-modal-isolated * {
          text-align: left !important;
        }
        .font-poppins .chat-modal-isolated {
          text-align: left !important;
        }
        .font-poppins .chat-modal-isolated * {
          text-align: left !important;
        }
        /* Specific overrides for inherited classes */
        .chat-modal-isolated.text-center {
          text-align: left !important;
        }
        .chat-modal-isolated.font-poppins {
          text-align: left !important;
        }
        .chat-modal-isolated .font-poppins {
          text-align: left !important;
        }
        .chat-modal-isolated .text-center {
          text-align: left !important;
        }
        .chat-modal-isolated div,
        .chat-modal-isolated span,
        .chat-modal-isolated p,
        .chat-modal-isolated button {
          text-align: left !important;
        }
        /* Reset any flexbox centering for text content */
        .chat-modal-text-left {
          text-align: left !important;
          justify-content: flex-start !important;
          align-items: flex-start !important;
        }
        .chat-modal-text-left * {
          text-align: left !important;
        }
      `}</style>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 chat-modal-isolated">
        <div className="relative chat-modal-isolated">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white rounded-full shadow p-1 z-10 chat-modal-isolated"
            aria-label="Close"
          >
            <span className="text-2xl font-bold text-gray-500 chat-modal-isolated">&times;</span>
          </button>
          {/* Chatbot UI */}
          <div className="bg-white rounded-2xl shadow-2xl p-0 w-[370px] sm:w-[420px] h-[500px] flex flex-col justify-between border border-[#0ACF83] relative overflow-hidden chat-modal-isolated">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f8fefb] rounded-t-2xl chat-modal-isolated">
              <div className="flex items-center gap-2 chat-modal-isolated">
                <img src="/ChatBotRobot.svg" alt="Bot" className="w-6 h-6 chat-modal-isolated" loading="lazy" />
                <span className="font-semibold text-[#0ACF83] text-base chat-modal-text-left chat-modal-isolated">Bidyut AI</span>
              </div>
            </div>
            {/* Welcome Banner */}
            <div className="bg-[#0ACF83] text-white text-xs py-2 px-3 font-medium chat-modal-isolated" style={{ textAlign: 'center' }}>
              How can I help you today? Ask me anything about robotics, coding, or Bidyut Innovation!
            </div>
            {/* Suggested Questions */}
            <div className="px-4 py-3 space-y-2 chat-modal-isolated">
              <button className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200 transition-colors chat-modal-text-left chat-modal-isolated">
                What is Bidyut Innovation?
              </button>
              <button className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200 transition-colors chat-modal-text-left chat-modal-isolated">
                What services do you provide?
              </button>
              <button className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200 transition-colors chat-modal-text-left chat-modal-isolated">
                How can I contact Bidyut?
              </button>
            </div>
            {/* Chat Area */}
            <div className="flex-1 px-4 py-2 overflow-y-auto bg-[#f8fefb] chat-modal-isolated">
              {/* Bot Message */}
              <div className="mb-3 flex justify-start chat-modal-isolated">
                <div className="bg-white text-gray-800 border border-[#e0e0e0] rounded-2xl rounded-bl-md px-3 py-2 text-sm shadow-sm max-w-[80%] chat-modal-text-left chat-modal-isolated">
                  <div className="flex items-start gap-1 mb-2 chat-modal-text-left chat-modal-isolated">
                    <span className="text-lg flex-shrink-0 chat-modal-isolated">👋</span>
                    <div className="font-medium text-emerald-700 chat-modal-text-left chat-modal-isolated">
                      Hi! I'm Buddy, your AI assistant.
                    </div>
                  </div>
                  <div className="text-gray-700 leading-relaxed chat-modal-text-left chat-modal-isolated">
                    <div className="mb-2 chat-modal-text-left chat-modal-isolated">
                      You can ask me about:
                    </div>
                    <div className="space-y-1 chat-modal-text-left chat-modal-isolated" style={{ paddingLeft: '8px' }}>
                      <div className="chat-modal-text-left chat-modal-isolated">• Robotics concepts</div>
                      <div className="chat-modal-text-left chat-modal-isolated">• Coding help</div>
                      <div className="chat-modal-text-left chat-modal-isolated">• Bidyut Innovation programs</div>
                    </div>
                    <div className="mt-3 font-medium chat-modal-text-left chat-modal-isolated">
                      How can I assist you today?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Input Area */}
            <div className="flex items-center border-t px-3 py-3 bg-white rounded-b-2xl chat-modal-isolated">
              <input
                type="text"
                className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0ACF83] transition chat-modal-text-left chat-modal-isolated"
                placeholder="Type your message..."
                disabled
              />
              <button className="ml-2 bg-[#0ACF83] rounded-full p-2 hover:bg-[#099e66] transition chat-modal-isolated">
                <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                  <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}