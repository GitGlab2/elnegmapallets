import type { Metadata } from "next";
import Clients from "@/pages/Clients";

export const metadata: Metadata = {
  title: "شركاء النجاح والقطاعات المستهدفة | شركة النجمة للبالتات",
  description: "الشركات والمصانع التي نخدمها في قطاعات الحاصلات الزراعية، السيراميك، الأغذية، الكيماويات، ومحطات التصدير في جميع المناطق الصناعية بمصر.",
  keywords: ["عملاء شركة النجمة", "مورد بالتات شركات السيراميك", "بالتات التصدير الزراعي", "مورد بالتات المصانع مصر"],
  alternates: {
    canonical: "https://elnegmapallets.com/clients/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/clients/",
      "en": "https://elnegmapallets.com/en/clients/",
      "x-default": "https://elnegmapallets.com/clients/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <Clients lang="ar" />
    </div>
  );
}
