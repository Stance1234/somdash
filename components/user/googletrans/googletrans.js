import React, { useEffect } from "react";

const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Check if the script is already added
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      // Define the Google Translate initialization function
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };

      // Load the Google Translate script dynamically
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslateWidget;
