"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  description: string;
}

export default function ShareButton({ title, description }: ShareButtonProps) {
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
        alert("تم نسخ رابط المقال إلى الحافظة بنجاح!");
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center gap-2 bg-muted/40 hover:bg-muted/80 border border-border/40 text-xs px-4 py-2 rounded-lg transition-colors font-bold text-white cursor-pointer w-full justify-center"
    >
      <Share2 className="w-3.5 h-3.5 text-accent" />
      مشاركة رابط المقال
    </button>
  );
}
