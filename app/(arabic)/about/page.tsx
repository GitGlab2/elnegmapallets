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
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://elnegmapallets.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "من نحن",
        "item": "https://elnegmapallets.com/about/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="py-8">
        <About lang="ar" />
      </div>
    </>
  );
}
