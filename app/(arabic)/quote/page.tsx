import type { Metadata } from "next";
import Pricing from "@/pages/Pricing";

export const metadata: Metadata = {
  title: "طلب عرض سعر توريدات كميات البالتات الخشبية | شركة النجمة",
  description: "احصل على عرض سعر مخصص وخصومات الكميات الكبرى (2000+ بالتة) لتوريد البالتات الخشبية القياسية والمعالجة حرارياً من مصنع النجمة.",
  keywords: ["عرض سعر بالتات خشبي", "طلب توريد كميات بالتات", "تسعير بالتات التصدير", "خصم طلبيات البالتات"],
  alternates: {
    canonical: "https://elnegmapallets.com/quote/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/quote/",
      "en": "https://elnegmapallets.com/en/quote/",
      "x-default": "https://elnegmapallets.com/quote/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <Pricing lang="ar" />
    </div>
  );
}
