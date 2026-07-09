import { PalletSize } from "./pallet-sizes-types";

export const palletSizesEn: PalletSize[] = [
  {
    slug: "120x80-euro-pallet",
    title: "Standard Euro Pallet EUR 1",
    subtitle: "The Approved European Dimension for Export & International Logistics",
    dimensions: "1200 × 800 mm (120 × 80 cm)",
    category: "Standard European Export Pallet (EPAL 1)",
    description: "The EUR 1 Euro pallet is the most widely used pallet dimension in Europe and globally. It was designed specifically to maximize loading volume inside European train cars, freight trucks, and standard door openings. Made from high-grade imported spruce or pine wood, fully compliant with the European Pallet Association (EPAL) regulations.",
    image: "/images/pallets/euro-pallet.webp",
    keywords: ["euro pallet", "euro pallet sizes", "export wooden pallets", "EPAL 1", "120x80 pallet"],
    specs: {
      length: 1200,
      width: 800,
      height: 144,
      weight: 25,
      woodType: "Heat-treated imported spruce / pine wood",
      topBoards: "5 top boards (alternating: 145 mm and 100 mm wide) with 22 mm thickness",
      bottomBoards: "3 chamfered bottom boards for easier entry",
      blocks: "9 solid wood or composite wood blocks (145x145 mm and 145x100 mm)"
    },
    loads: {
      static: 4000,
      dynamic: 1500,
      racking: 1000
    },
    stuffing: {
      twentyFt: 11,
      fortyFt: 24,
      reefer40: 23,
      layoutPattern: "Pinwheel / Staggered pattern to avoid spaces"
    },
    applications: [
      "Shipping and exporting consumer goods, pharmaceuticals, and retail items to the European Union",
      "Automated warehousing systems and production lines configured for EPAL standards",
      "Food and light chemical industry logistics"
    ],
    features: [
      "Chamfered bottom deck boards allow easy entry for manual hand jacks and electric forklifts",
      "4-Way entry design provides full operational flexibility for material handling equipment",
      "ISPM 15 heat-treated phytosanitary stamp guarantees restriction-free customs clearing globally"
    ]
  },
  {
    slug: "120x100-industrial-pallet",
    title: "Standard Industrial Pallet / Citrus Pallet",
    subtitle: "The Leading Dimension for Agricultural Exports & Heavy Industries in Egypt",
    dimensions: "1200 × 1000 mm (120 × 100 cm)",
    category: "Standard Agricultural & Citrus Export Pallet (EPAL 2 / GMA counterpart)",
    description: "The 120 × 100 cm pallet forms the backbone of agricultural exports in Egypt, particularly in citrus (orange), potato, and onion packhouses. Famously known in the local market as the 'Citrus Pallet', it is engineered with a robust structure to carry extremely heavy weight while fitting perfectly inside shipping reefer containers.",
    image: "/images/pallets/industrial-pallet.webp",
    keywords: ["citrus pallet", "120x100 wooden pallet", "agricultural export pallets", "industrial pallet dimensions", "citrus packing"],
    specs: {
      length: 1200,
      width: 1000,
      height: 162,
      weight: 35,
      woodType: "Premium heat-treated Muski / Finnish spruce wood",
      topBoards: "7 to 9 deck boards (90-100 mm width) with 22-25 mm thickness",
      bottomBoards: "3 bottom runners/skids for robust stabilization",
      blocks: "9 heavy-duty blocks (100x100x78 mm) to handle heavy static stack loads"
    },
    loads: {
      static: 5000,
      dynamic: 1500,
      racking: 1250
    },
    stuffing: {
      twentyFt: 10,
      fortyFt: 21,
      reefer40: 20,
      layoutPattern: "Double Row parallel loading pattern"
    },
    applications: [
      "Packaging and exporting fresh oranges, lemons, and fruits in refrigerated containers (Reefers)",
      "Shipping packed dry food products, fast-moving consumer goods (FMCG), and local distribution",
      "Engineering, heavy machinery, cabling, and industrial manufacturing goods"
    ],
    features: [
      "Reinforced 9-block layout delivers excellent weight distribution for vertical warehouse stacking",
      "Perfect container-width compatibility minimizing lateral cargo movement and friction damage",
      "Fully kiln-dried and heat-treated (HT) to ensure zero insect or fungal contamination"
    ]
  },
  {
    slug: "114x114-chemical-pallet",
    title: "Standard Chemical Pallet CP9",
    subtitle: "The Square Layout Specifically Engineered for Chemical Drums and IBC Containers",
    dimensions: "1140 × 1140 mm (114 × 114 cm)",
    category: "Chemical and Petrochemical Industry Standard Pallet",
    description: "The square CP9 pallet is designed specifically for the chemical and petrochemical industries. The 114 × 114 cm layout allows for the precise, safe placement of four 55-gallon chemical drums. Its symmetrical square dimensions also ensure maximum loading capacity in cargo containers without any wasted side gap spaces.",
    image: "/images/pallets/chemical-pallet.webp",
    keywords: ["chemical pallet", "CP9 pallet", "drum pallet", "114x114 pallet", "petrochemical shipping"],
    specs: {
      length: 1140,
      width: 1140,
      height: 138,
      weight: 28,
      woodType: "High-strength heat-treated spruce or pine softwood",
      topBoards: "9 closely spaced top deck boards to prevent drum slippage or tilting",
      bottomBoards: "Full perimeter bottom box frame (Double Deck / Perimeter Box)",
      blocks: "9 solid blocks securely fastened for premium stability"
    },
    loads: {
      static: 4000,
      dynamic: 1500,
      racking: 1000
    },
    stuffing: {
      twentyFt: 10,
      fortyFt: 22,
      reefer40: 20,
      layoutPattern: "Inline double row parallel pattern"
    },
    applications: [
      "Transporting plastic and steel drums containing raw chemical liquids and materials",
      "Shipping Intermediate Bulk Containers (IBCs) and bulk powder big bags",
      "Fertilizers, industrial paints, and polymer manufacturers exporting worldwide"
    ],
    features: [
      "Perimeter bottom box frame adds exceptional bottom reinforcement, preventing tipping during forklift maneuvers",
      "Flat, closely packed top deck distributes heavy drum point-loads evenly across the wooden structure",
      "ISPM 15 phytosanitary stamp applied after deep kiln baking for immediate export customs clearance"
    ]
  },
  {
    slug: "120x120-heavy-pallet",
    title: "Heavy-Duty Square Pallet 120 × 120",
    subtitle: "Square Wood Layout Built for Oversized Cargo, Construction Goods, and Heavy Industry",
    dimensions: "1200 × 1200 mm (120 × 120 cm)",
    category: "Heavy-Duty Square Industrial Pallet",
    description: "A highly durable square wooden pallet designed for handling extra heavy, non-standard weight structures, construction materials (like concrete slabs, bricks, and raw marble blocks), and industrial machinery. Features extra-thick deck boards for ultimate structural security.",
    image: "/images/pallets/square-heavy-pallet.webp",
    keywords: ["120x120 pallet", "heavy duty square pallet", "marble shipping pallet", "oversized cargo pallet"],
    specs: {
      length: 1200,
      width: 1200,
      height: 150,
      weight: 38,
      woodType: "Thick cut Swedish pine / Muski with intensive kiln treatment",
      topBoards: "9 to 11 top deck boards (25 mm thickness) for extreme load limits",
      bottomBoards: "3 to 5 thick bottom planks supporting the heavy base",
      blocks: "9 large wooden blocks (120x120 mm) for strong fastener grip"
    },
    loads: {
      static: 5500,
      dynamic: 1800,
      racking: 1200
    },
    stuffing: {
      twentyFt: 10,
      fortyFt: 20,
      reefer40: 18,
      layoutPattern: "Direct parallel grid alignment"
    },
    applications: [
      "Shipping marble tiles, raw stones, ceramics, cement bags, and masonry work",
      "Storing and handling heavy electric motors, iron molds, and manufacturing equipment",
      "Heavy industrial processing applications requiring top-tier loading limits"
    ],
    features: [
      "Thick deck boards (up to 25 mm) resist bending, splitting, and buckling under extreme weights",
      "Perfect square structure balances the center of gravity for circular or cubic machinery loads",
      "Assembled with high-grip ring-shank/spiral nails to prevent joint loosening from cargo vibrations"
    ]
  },
  {
    slug: "121x101-gma-pallet",
    title: "Standard American GMA Pallet",
    subtitle: "The Approved Grocery Manufacturer Association Size for Exports to North America",
    dimensions: "1219 × 1016 mm (48 × 40 Inches)",
    category: "Standard US Grocery Export Pallet (GMA)",
    description: "The GMA pallet is the official standard approved by the Grocery Manufacturers Association in the United States and Canada, representing over 30% of all pallets used in North America. We manufacture it at El Negma factory under precise specifications to ensure seamless entry into US warehouses and fulfillment centers.",
    image: "/images/pallets/gma-pallet.webp",
    keywords: ["american pallet", "GMA standard pallet", "48x40 inch pallet", "amazon FBA pallet Egypt", "US export wooden pallet"],
    specs: {
      length: 1219,
      width: 1016,
      height: 135,
      weight: 24,
      woodType: "Kiln-dried Swedish pine wood fully compliant with US standards",
      topBoards: "7 top boards (alternating 140 mm and 90 mm widths)",
      bottomBoards: "5 bottom deck boards for structural strength",
      blocks: "Stringer design with notched entries for 4-way forklift access (Notched Stringer)"
    },
    loads: {
      static: 4000,
      dynamic: 1250,
      racking: 1000
    },
    stuffing: {
      twentyFt: 10,
      fortyFt: 21,
      reefer40: 20,
      layoutPattern: "Parallel or staggered alignment"
    },
    applications: [
      "Exporting agricultural crops, citrus fruits, and foods to the United States and Canadian markets",
      "Shipping consumer goods directly to major US fulfillment hubs (like Amazon FBA, Walmart)",
      "Transatlantic commercial shipping operations"
    ],
    features: [
      "Notched stringer board design allows 4-way entry for forklifts and pallet jacks",
      "Lightweight yet strong wood layout saves weight, lowering air and ocean shipping costs",
      "100% heat-treated (HT) and stamped with the official Egyptian Ministry of Agriculture export clearance mark"
    ]
  }
];
