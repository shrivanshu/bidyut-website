// Chat service for handling backend API calls

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export interface ChatMessage {
  from: 'me' | 'bot';
  text: string;
}

export interface ChatResponse {
  success: boolean;
  response?: string;
  error?: string;
  timestamp?: string;
  chatCount?: number;
  remainingChats?: number;
  limitReached?: boolean;
}

// Generate unique session ID (persists until page reload)
let sessionId: string | null = null;

function getSessionId(): string {
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  return sessionId;
}

export const chatService = {
  async sendMessage(message: string, conversation: ChatMessage[] = []): Promise<string> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversation,
          sessionId: getSessionId(),
        }),
      });

      const data: ChatResponse = await response.json();

      if (data.success && data.response) {
        // Add info about remaining chats if provided
        let responseText = data.response;
        if (data.remainingChats !== undefined) {
          if (data.limitReached) {
            responseText += '\n\n⚠️ You have reached the maximum of 3 chats per session. Please refresh the page to start a new session.';
          } else if (data.remainingChats === 1) {
            responseText += '\n\n💡 You have 1 chat remaining in this session.';
          }
        }
        return responseText;
      } else if (data.limitReached) {
        return data.response || 'You have reached the maximum of 3 chats per session. Please refresh the page to start a new session.';
      } else {
        // If main AI fails, try fallback
        return await this.sendFallbackMessage(message);
      }
    } catch (error) {
      console.error('Chat service error:', error);
      // Try fallback on network error
      return await this.sendFallbackMessage(message);
    }
  },

  async sendFallbackMessage(message: string): Promise<string> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/fallback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChatResponse = await response.json();

      if (data.success && data.response) {
        return data.response;
      } else {
        throw new Error(data.error || 'Failed to get fallback response');
      }
    } catch (error) {
      console.error('Fallback chat service error:', error);
      return "I'm temporarily unavailable. Please try again later or contact us directly for assistance with robotics and educational programs.";
    }
  },
};