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
        { name: "الرئيسية", path: "/" },
        { name: "المنتجات", path: "/products/" },
        { name: "المدونة", path: "/articles/" },
      ] as NavItem[]
    },
    en: {
      callBtn: "Contact Us",
      menuCategories: [

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
        { name: "Home", path: "/en/" },
        { name: "Products", path: "/en/products/" },
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
