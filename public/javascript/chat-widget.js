import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      // Check if the script is already added
      if (!document.querySelector('script[src*="s01.live2support.com/dashboardv2/chatwindow/"]')) {
        const script = document.createElement('script');
        const firstScript = document.getElementsByTagName('script')[0];
        
        // Set the session/tracking ID (if needed elsewhere, you might want to manage this differently)
        window.stid = 'SjIwekdEQ0Y3RTNkME1EZTlubzRBdz09';
        
        script.type = 'text/javascript';
        script.async = true;
        script.src = `${
          window.location.protocol === 'https:' ? 'https://' : 'http://'
        }s01.live2support.com/dashboardv2/chatwindow/`;
        
        firstScript.parentNode?.insertBefore(script, firstScript);
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default LiveChat;