import type { Metadata } from "next";
import Gallery from "@/pages/Gallery";

export const metadata: Metadata = {
  title: "معرض الصور وخطوط الإنتاج | شركة النجمة للبالتات الخشبية",
  description: "صور حية من خطوط إنتاج البالتات الخشبية ومراحل التصنيع ورص الحاويات وتخزين البالتات المعالجة حرارياً في مصنع النجمة ببني سويف.",
  keywords: ["صور مصنع بالتات", "خطوط إنتاج بالتات خشبي", "معرض صور شركة النجمة", "تجهيز شحنات التصدير"],
  alternates: {
    canonical: "https://elnegmapallets.com/gallery/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/gallery/",
      "en": "https://elnegmapallets.com/en/gallery/",
      "x-default": "https://elnegmapallets.com/gallery/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <Gallery lang="ar" />
    </div>
  );
}
