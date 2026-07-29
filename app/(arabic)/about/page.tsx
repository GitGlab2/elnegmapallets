import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "من نحن | شركة النجمة لإنشاء وتصنيع البالتات الخشبية",
  description: "نبذة عن مصنع النجمة للبالتات الخشبية في بني سويف مصر. خبرة 18 عاماً في تصنيع البالتات القياسية والمعالجة حرارياً ISPM-15 للتصدير وخدمة كبرى الشركات والمصانع.",
  keywords: ["عن شركة النجمة", "مصنع بالتات بني سويف", "تاريخ شركة النجمة للبالتات", "خبرة تصنيع البالتات"],
  alternates: {
    canonical: "https://elnegmapallets.com/about/",
    languages: {
      "ar": "https://elnegmapallets.com/about/",
      "en": "https://elnegmapallets.com/en/about/",
      "x-default": "https://elnegmapallets.com/about/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <About lang="ar" />
    </div>
  );
}
