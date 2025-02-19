const API_KEY = "AIzaSyAdgri_uj6KS87-x2CdVy2y98t9F8A-75E";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const SYSTEM_PROMPT = `You are a friendly and helpful customer support assistant. 
- Keep your responses concise but warm and engaging
- Use a natural, conversational tone
- Show empathy and understanding
- Ask clarifying questions when needed
- Remember context from earlier in the conversation
- Use appropriate emojis occasionally to convey friendliness
Your goal is to help users while maintaining a pleasant, human-like conversation.`;

export function useChatAPI() {
  const sendMessageToAPI = async (message,conversationHistory) => {
    const history = conversationHistory
      .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
      .join('\n');

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${SYSTEM_PROMPT}\n\nConversation history:\n${history}\n\nUser: ${message}\n\nAssistant:`,
          }],
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch response from Gemini API');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  return { sendMessageToAPI };
}