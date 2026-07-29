import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "تواصل معنا | شركة النجمة لتصنيع البالتات الخشبية",
  description: "تواصل مباشر مع مبيعات مصنع النجمة للبالتات الخشبية في بياض العرب بني سويف. هاتف: 01080012261. طلب عروض أسعار واستشارات توريد البالتات للتصدير والسوق المحلي.",
  keywords: ["تواصل شركة النجمة", "رقم مصنع بالتات", "عنوان مصنع بالتات بني سويف", "عرض سعر بالتات خشب"],
  alternates: {
    canonical: "https://elnegmapallets.com/contact/",
    languages: {
      "ar": "https://elnegmapallets.com/contact/",
      "en": "https://elnegmapallets.com/en/contact/",
      "x-default": "https://elnegmapallets.com/contact/",
    },
  },
};

export default function Page() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "تواصل معنا - شركة النجمة للبالتات الخشبية",
    "url": "https://elnegmapallets.com/contact/",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "شركة النجمة للبالتات الخشبية",
      "telephone": "+201080012261",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "المنطقة الصناعية، بياض العرب، بجوار علوم إدارية",
        "addressLocality": "بني سويف",
        "addressCountry": "EG"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="py-8">
        <Contact lang="ar" />
      </div>
    </>
  );
}
