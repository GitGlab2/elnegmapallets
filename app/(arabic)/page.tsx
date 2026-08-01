import Home from "@/pages/Home";

const products = [
  {
    name: "البالتة اليورو القياسية EUR 1",
    dimensions: "1200 × 800 مم",
    dynamicLoad: "1500 كجم",
    staticLoad: "4000 كجم",
    image: "https://elnegmapallets.com/images/pallets/euro-pallet.webp",
    description:
      "المقاس الأوروبي المعتمد للتصدير والخدمات اللوجستية الدولية، مطابق لمواصفات الهيئة الأوروبية للبالتات (EPAL).",
  },
  {
    name: "البالتة الصناعية القياسية / بالتة الموالح",
    dimensions: "1200 × 1000 مم",
    dynamicLoad: "1500 كجم",
    staticLoad: "4000 كجم",
    image: "https://elnegmapallets.com/images/pallets/industrial-pallet.webp",
    description:
      "المقاس الأكثر استخداماً في التصدير الزراعي والقطاعات الصناعية بمصر، خصوصاً محطات تصدير البرتقال والبطاطس.",
  },
  {
    name: "البالتة الأمريكية GMA",
    dimensions: "1219 × 1016 مم (48 × 40 بوصة)",
    dynamicLoad: "1500 كجم",
    staticLoad: "4000 كجم",
    image: "https://elnegmapallets.com/images/pallets/gma-pallet.webp",
    description: "المقاس القياسي للسوق الأمريكي والشحن إلى أمريكا الشمالية.",
  },
  {
    name: "البالتة المربعة للكيماويات",
    dimensions: "1140 × 1140 مم",
    dynamicLoad: "1500 كجم",
    staticLoad: "4000 كجم",
    image: "https://elnegmapallets.com/images/pallets/chemical-pallet.webp",
    description:
      "بالتة مربعة بدخول رباعي الاتجاهات مخصصة لقطاع الكيماويات والأسمنت والصناعات الثقيلة.",
  },
  {
    name: "البالتة المربعة فائقة الحمولة",
    dimensions: "1000 × 1000 مم",
    dynamicLoad: "2000 كجم",
    staticLoad: "5000 كجم",
    image: "https://elnegmapallets.com/images/pallets/square-heavy-pallet.webp",
    description: "بالتة صناعية مربعة مصممة لتحمل الأوزان الفائقة في المخازن والصناعات الثقيلة.",
  },
];

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "منتجات البالتات الخشبية — شركة النجمة",
    description:
      "منتجات مصنع النجمة للبالتات الخشبية القياسية والمخصصة للتصدير والسوق المحلي، جميعها معالجة حرارياً وفق معيار ISPM-15.",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        image: p.image,
        category: "بالتات خشبية",
        url: "https://elnegmapallets.com/quote/",
        brand: {
          "@type": "Brand",
          name: "شركة النجمة للبالتات الخشبية",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "الأبعاد",
            value: p.dimensions,
          },
          {
            "@type": "PropertyValue",
            name: "الحمولة المتحركة",
            value: p.dynamicLoad,
          },
          {
            "@type": "PropertyValue",
            name: "الحمولة الساكنة",
            value: p.staticLoad,
          },
          {
            "@type": "PropertyValue",
            name: "المعالجة",
            value: "معالجة حرارية (HT) متوافقة مع ISPM-15",
          },
        ],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Home />
    </>
  );
}
