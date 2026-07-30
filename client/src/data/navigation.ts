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
          id: "company",
          title: "الشركة",
          items: [
            { name: "من نحن", path: "/about/" },
            { name: "الشهادات والاعتمادات", path: "/certificates/" },
            { name: "معرض الصور", path: "/gallery/" },
            { name: "عملاؤنا", path: "/clients/" },
            { name: "المدونة والمقالات", path: "/articles/" },
          ]
        },
      ] as NavCategory[]
    },
    en: {
      callBtn: "Contact Us",
      menuCategories: [
        {
          id: "company",
          title: "Company",
          items: [
            { name: "About Us", path: "/en/about/" },
            { name: "Certifications", path: "/en/certificates/" },
            { name: "Gallery", path: "/en/gallery/" },
            { name: "Our Clients", path: "/en/clients/" },
            { name: "Blog & Articles", path: "/en/articles/" },
          ]
        },
      ] as NavCategory[]
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
