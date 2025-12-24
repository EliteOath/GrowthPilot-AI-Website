import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function useCalendly() {
  useEffect(() => {
    // Ensure Calendly script is loaded
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
      }
    }, 100);

    return () => clearInterval(checkCalendly);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/elite-oath-ventures/ai_growth_strategy_consultation'
      });
    } else {
      console.error('Calendly widget not loaded');
    }
  };

  return { openCalendly };
}
