// hooks/useChatUI.ts
import { useState } from 'react';

export function useChatUI() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleChat,
  };
}