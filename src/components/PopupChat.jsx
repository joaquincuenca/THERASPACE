import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@/hooks/use-chat";
import { useChatUI } from "@/hooks/useChatUI";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileIcon from "../assets/images/profile-icon.png";

export function PopupChat() {
  const { isOpen, toggleChat } = useChatUI();
  const {
    messages,
    inputMessage,
    isLoading,
    setInputMessage,
    handleSendMessage,
  } = useChat();


  return (
    <div className="fixed bottom-2 right-4 z-50">
      <Card
        className={`w-80 md:w-96 flex-col transition-all duration-200 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-90  opacity-0 pointer-events-none'}`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Chat Support</CardTitle>
          <Button variant="ghost" size="sm" onClick={toggleChat}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <div className="flex flex-col justify-between">
          <CardContent>
            <ScrollArea className="h-64 md:h-80 pr-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground p-4">
                  👋 Hi! How can I help you today?
                </div>
              )}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    msg.sender === "user" ? "text-right" : "text-left flex"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <Avatar className="mr-1">
                      <AvatarImage src={profileIcon} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  )}
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="text-left">
                  <span className="inline-block p-2 rounded-lg bg-muted">
                    Typing...
                  </span>
                </div>
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" size="sm" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </div>
      </Card>
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="rounded-full float-right w-12 h-12 transition-all duration-300 ease-in-out"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
