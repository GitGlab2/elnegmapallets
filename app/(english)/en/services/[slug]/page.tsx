import type { Metadata } from "next";
import { servicesEn } from "@/data/services-en";
import ServiceDetails from "@/pages/ServiceDetails";

const SITE_URL = "https://elnegmapallets.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesEn.find(s => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | El Negma Pallets",
    };
  }
  const serviceUrl = `${SITE_URL}/en/services/${slug}/`;
  const imageUrl = new URL(service.image, SITE_URL).toString();

  return {
    title: `${service.title} | El Negma Pallets Egypt`,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: serviceUrl,
      languages: {
        "ar": `${SITE_URL}/services/${slug}/`,
        "en": `${SITE_URL}/en/services/${slug}/`,
        "x-default": `${SITE_URL}/services/${slug}/`,
      },
    },
    openGraph: {
      type: "website",
      url: serviceUrl,
      title: service.title,
      description: service.description,
      images: [{ url: imageUrl, alt: service.title }],
    },
  };
}

export async function generateStaticParams() {
  return servicesEn.map(service => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = servicesEn.find(s => s.slug === slug);
  const serviceUrl = `${SITE_URL}/en/services/${slug}/`;
  const imageUrl = service
    ? new URL(service.image, SITE_URL).toString()
    : undefined;

  const serviceSchema = service && {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceUrl,
    name: service.title,
    serviceType: service.category,
    provider: {
      "@id": "https://elnegmapallets.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    description: service.description,
  };

  const breadcrumbData = service && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/en/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pallet Services",
        item: `${SITE_URL}/en/services/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  const faqData = service?.faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <ServiceDetails slug={slug} lang="en" />
    </>
  );
}
