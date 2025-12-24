import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [isVapiReady, setIsVapiReady] = useState(false);

  useEffect(() => {
    // Wait for VAPI widget to be fully loaded
    const checkVapiWidget = setInterval(() => {
      const vapiWidget = document.querySelector('vapi-widget');
      if (vapiWidget && vapiWidget.innerHTML.length > 0) {
        setIsVapiReady(true);
        clearInterval(checkVapiWidget);
      }
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(checkVapiWidget);
      setIsVapiReady(true);
    }, 10000);

    return () => {
      clearInterval(checkVapiWidget);
      clearTimeout(timeout);
    };
  }, []);

  const handleOpenChat = () => {
    const vapiWidget = document.querySelector('vapi-widget');
    
    if (!vapiWidget) {
      console.error('VAPI widget not found');
      return;
    }

    // Find the VAPI toggle button
    const buttons = vapiWidget.querySelectorAll('button');
    
    if (buttons.length > 0) {
      const button = buttons[0] as HTMLButtonElement;
      
      // Create and dispatch a real click event
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      
      button.dispatchEvent(clickEvent);
      console.log('VAPI widget button clicked');
    }
  };

  return (
    <button
      onClick={handleOpenChat}
      className="fixed bottom-6 right-6 z-[9999] px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-110 font-medium"
      aria-label="Open AI chat assistant"
      title={isVapiReady ? "Chat with our AI assistant" : "Loading AI assistant..."}
      disabled={!isVapiReady}
    >
      <MessageCircle className="h-5 w-5" />
      <span>Chat Now</span>
    </button>
  );
}
