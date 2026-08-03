export interface NavItem {
  name: string;
  path: string;
  isAnchor?: boolean;
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
            { name: "كتالوج المنتجات", path: "/products/" },
            { name: "بالتة اليورو EUR 1 (120 × 80)", path: "/products/120x80-euro-pallet/" },
            { name: "البالتة الصناعية / الموالح (120 × 100)", path: "/products/120x100-industrial-pallet/" },
            { name: "بالتة الكيماويات CP9 (114 × 114)", path: "/products/114x114-chemical-pallet/" },
            { name: "البالتة المربعة الثقيلة (120 × 120)", path: "/products/120x120-heavy-pallet/" },
            { name: "البالتة الأمريكية GMA (48 × 40)", path: "/products/121x101-gma-pallet/" },
          ]
        },
        {
          id: "tools",
          title: "الأدوات",
          items: [
            { name: "مخصص البالتات الهندسية", path: "/articles/tools/pallet-customizer/" },
            { name: "حاسبة استيعاب الحاويات", path: "/articles/tools/container-calculator/" },
          ]
        },
      ] as NavCategory[],
      mainLinks: [
        { name: "من نحن", path: "/about/" },
        { name: "الشهادات والاعتمادات", path: "/certificates/" },
        { name: "معرض الصور", path: "/gallery/" },
        { name: "عملائنا", path: "/clients/" },
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
            { name: "Products Catalog", path: "/en/products/" },
            { name: "Euro Pallet EUR 1 (120 x 80)", path: "/en/products/120x80-euro-pallet/" },
            { name: "Industrial / Citrus Pallet (120 x 100)", path: "/en/products/120x100-industrial-pallet/" },
            { name: "Chemical Pallet CP9 (114 x 114)", path: "/en/products/114x114-chemical-pallet/" },
            { name: "Heavy Square Pallet (120 x 120)", path: "/en/products/120x120-heavy-pallet/" },
            { name: "GMA American Pallet (48 x 40)", path: "/en/products/121x101-gma-pallet/" },
          ]
        },
        {
          id: "tools",
          title: "Tools",
          items: [
            { name: "Pallet Customizer", path: "/en/articles/tools/pallet-customizer/" },
            { name: "Container Calculator", path: "/en/articles/tools/container-calculator/" },
          ]
        },
      ] as NavCategory[],
      mainLinks: [
        { name: "About Us", path: "/en/about/" },
        { name: "Certifications", path: "/en/certificates/" },
        { name: "Gallery", path: "/en/gallery/" },
        { name: "Our Clients", path: "/en/clients/" },
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
