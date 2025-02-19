import { useState, } from "react";
import { useChatAPI } from "./use-chat-api";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { sendMessageToAPI } = useChatAPI();

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: "user" };
    addMessage(userMessage);
    setInputMessage("");
    setIsLoading(true);

    try {
      const botResponse = await sendMessageToAPI(inputMessage, messages);
      addMessage({ text: botResponse, sender: "bot" });
    } catch (error) {
      addMessage({
        text: "I apologize, but I'm having trouble connecting right now. Could you please try again?",
        sender: "bot",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    inputMessage,
    isLoading,
    setInputMessage,
    handleSendMessage,
  };
}
