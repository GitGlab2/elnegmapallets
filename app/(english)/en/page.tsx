import Home from "@/pages/Home";

const products = [
  {
    name: "Euro Pallet (EUR 1)",
    dimensions: "1200 × 800 mm",
    dynamicLoad: "1,500 kg",
    staticLoad: "4,000 kg",
    image: "https://elnegmapallets.com/images/pallets/euro-pallet.webp",
    description:
      "The standard European export pallet, fully compliant with European Pallet Association (EPAL) specifications for international logistics.",
  },
  {
    name: "Industrial Pallet / Citrus Export Pallet",
    dimensions: "1200 × 1000 mm",
    dynamicLoad: "1,500 kg",
    staticLoad: "4,000 kg",
    image: "https://elnegmapallets.com/images/pallets/industrial-pallet.webp",
    description:
      "The most widely used pallet for agricultural export in Egypt, particularly for citrus, potato, and onion export stations.",
  },
  {
    name: "American GMA Pallet",
    dimensions: "1219 × 1016 mm (48 × 40 in)",
    dynamicLoad: "1,500 kg",
    staticLoad: "4,000 kg",
    image: "https://elnegmapallets.com/images/pallets/gma-pallet.webp",
    description: "The standard pallet size for the North American market and shipping to the USA.",
  },
  {
    name: "Chemical Square Pallet",
    dimensions: "1140 × 1140 mm",
    dynamicLoad: "1,500 kg",
    staticLoad: "4,000 kg",
    image: "https://elnegmapallets.com/images/pallets/chemical-pallet.webp",
    description:
      "A square 4-way entry pallet engineered for the chemical, cement, and heavy industry sectors.",
  },
  {
    name: "Heavy Duty Square Pallet",
    dimensions: "1000 × 1000 mm",
    dynamicLoad: "2,000 kg",
    staticLoad: "5,000 kg",
    image: "https://elnegmapallets.com/images/pallets/square-heavy-pallet.webp",
    description:
      "A square industrial pallet designed to carry extreme loads in warehouses and heavy industries.",
  },
];

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wooden Pallet Products — El Negma Pallets",
    description:
      "Standard and custom wooden pallet products from El Negma Pallets factory for export and local markets, all ISPM-15 heat-treated.",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        image: p.image,
        category: "Wooden Pallets",
        url: "https://elnegmapallets.com/en/quote/",
        brand: {
          "@type": "Brand",
          name: "El Negma Pallets",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Dimensions",
            value: p.dimensions,
          },
          {
            "@type": "PropertyValue",
            name: "Dynamic Load",
            value: p.dynamicLoad,
          },
          {
            "@type": "PropertyValue",
            name: "Static Load",
            value: p.staticLoad,
          },
          {
            "@type": "PropertyValue",
            name: "Treatment",
            value: "ISPM-15 Heat Treatment (HT)",
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
      <Home lang="en" />
    </>
  );
}
