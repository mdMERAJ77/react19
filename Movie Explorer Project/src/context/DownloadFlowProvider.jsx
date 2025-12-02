import { DownloadFlowContext } from "./DownloadFlowContext";

export default function DownloadFlowProvider({ children }) {
  const howToDownloadMovie = {
    hindiGuide: `इस वेबसाइट पर दिए गए कुछ download links आपको दूसरी external websites पर ले जाते हैं।
सही download page तक पहुँचने के लिए आपको 2–3 बार manually वापस इस website पर लौटना पड़ सकता है।
कभी-कभी external पेज पर ads या extra windows खुल सकती हैं — यह सामान्य है।
बस back button दबाकर वापस आएं और प्रक्रिया को जारी रखें, जब तक अंतिम download page खुल न जाए।
हम आपको सबसे सही और सुरक्षित लिंक देने की पूरी कोशिश करते हैं।
आपके patience और support के लिए धन्यवाद!`,
    englishGuide: `
                This website contains some download links that may take you to other external websites.
To reach the correct download page, you may need to manually return to this website 2–3 times.
Sometimes ads or extra windows may open on the external pages — this is normal.
Just press the back button to return and continue the process until the final download page opens.
We always try to provide the most accurate and safe links.
Thank you for your patience and support!`,
  };
  return (
    <DownloadFlowContext.Provider value={howToDownloadMovie}>
      {children}
    </DownloadFlowContext.Provider>
  );
}
