export interface NavItem {
  name: string;
  path: string;
  isAnchor?: boolean;
  description?: string;
  icon?: string;
}

export interface NavCategory {
  id: string;
  title: string;
  items: NavItem[];
}

export const getNavData = (lang: "ar" | "en" = "ar") => {
  return {
    ar: {
      callBtn: "تواصل معنا",
      menuCategories: [
        {
          id: "products",
          title: "المنتجات",
          items: [
            { name: "كتالوج المنتجات", path: "/products/", icon: "Package", description: "استعرض كافة أنواع البالتات الخشبية القياسية والمخصصة." },
            { name: "بالتة اليورو EUR 1", path: "/products/120x80-euro-pallet/", icon: "Layers", description: "بالتة (120 × 80 سم) المعتمدة أوروبياً للتبادل اللوجستي." },
            { name: "البالتة الصناعية", path: "/products/120x100-industrial-pallet/", icon: "Box", description: "بالتة (120 × 100 سم) شديدة التحمل للأغراض الصناعية." },
            { name: "بالتة الكيماويات CP9", path: "/products/114x114-chemical-pallet/", icon: "TestTube", description: "بالتة (114 × 114 سم) مصممة خصيصاً للصناعات الكيماوية." },
            { name: "البالتة المربعة الثقيلة", path: "/products/120x120-heavy-pallet/", icon: "Weight", description: "بالتة (120 × 120 سم) للأحمال الجامبو والصناعات الثقيلة." },
            { name: "البالتة الأمريكية GMA", path: "/products/121x101-gma-pallet/", icon: "Truck", description: "بالتة (48 × 40 بوصة) القياسية للتصدير لأمريكا الشمالية." },
          ]
        },
        {
          id: "tools",
          title: "الأدوات",
          items: [
            { name: "مخصص البالتات الهندسية", path: "/articles/tools/pallet-customizer/", icon: "Sliders", description: "أداة تفاعلية لتحديد المواصفات الفنية للبالتات." },
            { name: "حاسبة استيعاب الحاويات", path: "/articles/tools/container-calculator/", icon: "Calculator", description: "احسب كفاءة رص البالتات في حاويات الشحن." },
          ]
        },
        {
          id: "company",
          title: "الشركة",
          items: [
            { name: "من نحن", path: "/about/", icon: "Info", description: "تعرف على تاريخ مصنع النجمة ورؤيتنا في صناعة البالتات." },
            { name: "الشهادات والاعتمادات", path: "/certificates/", icon: "Award", description: "اعتمادات الجودة الدولية وشهادات المعالجة الحرارية." },
            { name: "عملائنا", path: "/clients/", icon: "Briefcase", description: "شركاء النجاح من كبرى الشركات والمصانع." },
            { name: "معرض الصور", path: "/gallery/", icon: "Image", description: "جولة مصورة داخل خطوط الإنتاج بالمصنع." },
          ]
        },
      ] as NavCategory[],
      mainLinks: [
        { name: "المدونة", path: "/articles/" },
      ] as NavItem[]
    },
    en: {
      callBtn: "Contact Us",
      menuCategories: [
        {
          id: "products",
          title: "Products",
          items: [
            { name: "Products Catalog", path: "/en/products/", icon: "Package", description: "Browse all standard and custom wooden pallets." },
            { name: "Euro Pallet EUR 1", path: "/en/products/120x80-euro-pallet/", icon: "Layers", description: "Certified (120 x 80 cm) pallet for EU logistics." },
            { name: "Industrial Pallet", path: "/en/products/120x100-industrial-pallet/", icon: "Box", description: "Heavy-duty (120 x 100 cm) block pallet." },
            { name: "Chemical Pallet CP9", path: "/en/products/114x114-chemical-pallet/", icon: "TestTube", description: "Specialized (114 x 114 cm) pallet for chemical sector." },
            { name: "Heavy Square Pallet", path: "/en/products/120x120-heavy-pallet/", icon: "Weight", description: "Jumbo (120 x 120 cm) pallet for heavy equipment." },
            { name: "GMA American Pallet", path: "/en/products/121x101-gma-pallet/", icon: "Truck", description: "Standard (48 x 40 in) pallet for North American export." },
          ]
        },
        {
          id: "tools",
          title: "Tools",
          items: [
            { name: "Pallet Customizer", path: "/en/articles/tools/pallet-customizer/", icon: "Sliders", description: "Interactive tool to specify technical pallet needs." },
            { name: "Container Calculator", path: "/en/articles/tools/container-calculator/", icon: "Calculator", description: "Calculate optimal pallet loading for shipping." },
          ]
        },
        {
          id: "company",
          title: "Company",
          items: [
            { name: "About Us", path: "/en/about/", icon: "Info", description: "Learn about El Negma's history and vision in pallet manufacturing." },
            { name: "Certifications", path: "/en/certificates/", icon: "Award", description: "International quality certifications and heat treatment." },
            { name: "Our Clients", path: "/en/clients/", icon: "Briefcase", description: "Success partners from major industrial enterprises." },
            { name: "Gallery", path: "/en/gallery/", icon: "Image", description: "A visual tour inside our factory production lines." },
          ]
        },
      ] as NavCategory[],
      mainLinks: [
        { name: "Blog", path: "/en/articles/" },
      ] as NavItem[]
    }
  }[lang];
};

export const getLayoutContent = (lang: "ar" | "en" = "ar") => {
  return {
    ar: {
      logoMain: "شركة النجمة",
      logoSub: "لتصنيع البالتات الخشبية",
      logoAlt: "شعار شركة النجمة",
      callBtn: "تواصل معنا",
      switcherText: "English",
      footerDesc: "الشركة رقم 1 في مصر لتصنيع البالتات الخشبية. خبرة تزيد عن 18 عامًا في خدمة كبرى الشركات والمصانع.",
      footerQuickLinks: "روابط الموقع",
      footerQuickLinksList: [
        { name: "من نحن", path: "/about/", isAnchor: false },
        { name: "الشهادات والاعتمادات", path: "/certificates/", isAnchor: false },
        { name: "معرض الصور", path: "/gallery/", isAnchor: false },
        { name: "عملاؤنا والقطاعات", path: "/clients/", isAnchor: false },
        { name: "المدونة والمقالات", path: "/articles/", isAnchor: false },
      ],
      footerContact: "معلومات الاتصال",
      footerAddress: "بني سويف - المنطقة الصناعية بياض العرب (بجوار علوم إدارية)",
      footerCopyright: `© ${new Date().getFullYear()} شركة النجمة لتصنيع البالتات الخشبية. جميع الحقوق محفوظة.`,
      footerDev: "تم التطوير بواسطة",
      direction: "rtl" as const,
      fontClass: "font-['Cairo']",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
    },
    en: {
      logoMain: "El Negma",
      logoSub: "Wooden Pallets Factory",
      logoAlt: "El Negma Pallets Logo",
      callBtn: "Contact Us",
      switcherText: "عربي",
      footerDesc: "Egypt's #1 wooden pallet manufacturer. 18+ years serving major industrial enterprise supply chains.",
      footerQuickLinks: "Site Links",
      footerQuickLinksList: [
        { name: "About Us", path: "/en/about/", isAnchor: false },
        { name: "Certifications", path: "/en/certificates/", isAnchor: false },
        { name: "Gallery", path: "/en/gallery/", isAnchor: false },
        { name: "Clients & Sectors", path: "/en/clients/", isAnchor: false },
        { name: "Blog & Articles", path: "/en/articles/", isAnchor: false },
      ],
      footerContact: "Contact Information",
      footerAddress: "Beni Suef - Bayad Al-Arab Industrial Zone, Egypt",
      footerCopyright: "All Rights Reserved © El Negma Wooden Pallets Co. 2026",
      footerDev: "Developed by",
      direction: "ltr" as const,
      fontClass: "font-sans",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
    }
  }[lang];
};
