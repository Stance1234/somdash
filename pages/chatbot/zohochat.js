import { useEffect } from "react";

const ZohoChat = () => {
  useEffect(() => {
    const zohoKey = process.env.NEXT_PUBLIC_ZOHO_SALESIQ_KEY;
    if (!zohoKey) {
      console.error("Zoho SalesIQ key is missing in environment variables.");
      return;
    }

    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src = `https://salesiq.zohopublic.com/widget?wc=${zohoKey}`;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ZohoChat;
