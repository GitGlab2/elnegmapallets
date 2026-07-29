import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact Us | El Negma Wooden Pallets Manufacturing Egypt",
  description: "Direct contact with El Negma Pallets sales team in Bayad Al-Arab Industrial Zone, Beni Suef. Phone: +201080012261. Request bulk quotes for export & local supply.",
  keywords: ["contact El Negma Pallets", "wooden pallet supplier phone", "Beni Suef pallet factory address", "bulk pallet quote Egypt"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/contact/",
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
    "name": "Contact Us - El Negma Pallets",
    "url": "https://elnegmapallets.com/en/contact/",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "El Negma Pallets Manufacturing",
      "telephone": "+201080012261",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bayad Al-Arab Industrial Zone",
        "addressLocality": "Beni Suef",
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
        <Contact lang="en" />
      </div>
    </>
  );
}
