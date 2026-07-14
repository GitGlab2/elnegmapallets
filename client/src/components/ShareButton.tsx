"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  description: string;
  lang?: "ar" | "en";
  className?: string;
}

export default function ShareButton({ title, description, lang = "ar", className }: ShareButtonProps) {
  const isEn = lang === "en";
  const handleShare = () => {
    if (typeof navigator !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: title,
          text: description,
          url: window.location.href,
        }).catch((err) => console.log("Share failed:", err));
      } else {
        navigator.clipboard.writeText(window.location.href);
        // Custom message for copy success
        const msg = isEn 
          ? "Article link copied to clipboard!" 
          : "تم نسخ رابط المقال إلى الحافظة بنجاح!";
        alert(msg);
      }
    }
  };

  const btnText = isEn ? "Share Article" : "شارك المقال";

  return (
    <button 
      onClick={handleShare}
      className={`inline-flex items-center justify-center gap-2 bg-[#1c1f2a] hover:bg-secondary border border-border/40 hover:border-secondary text-sm px-6 py-3 rounded-xl transition-all duration-300 font-bold text-white cursor-pointer shadow-md hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0 ${className || ""}`}
    >
      <Share2 className="w-4 h-4 text-accent" />
      <span>{btnText}</span>
    </button>
  );
}
