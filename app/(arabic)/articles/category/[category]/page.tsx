import type { Metadata } from "next";
import ArticlesList from "@/pages/ArticlesList";
import { articles } from "@/data/articles";

const SITE_URL = "https://elnegmapallets.com";

const categories = [
  { id: "export", name: "شحن وتصدير" },
  { id: "compliance", name: "معالجة وتبخير" },
  { id: "procurement", name: "أسعار ومواصفات" },
  { id: "industry", name: "متطلبات صناعية" },
  { id: "sizes", name: "أبعاد ومقاسات" },
];

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catInfo = categories.find(c => c.id === category);
  
  if (!catInfo) {
    return {
      title: "قسم غير موجود | المدونة | شركة النجمة",
    };
  }

  const categoryUrl = `${SITE_URL}/articles/category/${category}/`;

  return {
    title: `قسم ${catInfo.name} | مدونة شركة النجمة للبالتات`,
    description: `مقالات متخصصة في ${catInfo.name} ضمن مدونة شركة النجمة لتصنيع البالتات الخشبية في مصر.`,
    alternates: {
      canonical: categoryUrl,
      languages: {
        "ar": `${SITE_URL}/articles/category/${category}/`,
        "en": `${SITE_URL}/en/articles/category/${category}/`,
        "x-default": `${SITE_URL}/articles/category/${category}/`,
      },
    },
    openGraph: {
      type: "website",
      url: categoryUrl,
      title: `قسم ${catInfo.name} | مدونة شركة النجمة`,
      description: `مقالات متخصصة في ${catInfo.name} ضمن مدونة شركة النجمة.`,
    },
  };
}

export async function generateStaticParams() {
  return categories.map(cat => ({
    category: cat.id,
  }));
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const catInfo = categories.find(c => c.id === category);

  const categoryUrl = `${SITE_URL}/articles/category/${category}/`;

  const breadcrumbData = catInfo && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": `${SITE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المقالات والمعلومات اللوجستية",
        "item": `${SITE_URL}/articles/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": catInfo.name,
        "item": categoryUrl
      }
    ]
  };

  return (
    <>
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <ArticlesList lang="ar" initialCategory={category} />
    </>
  );
}
