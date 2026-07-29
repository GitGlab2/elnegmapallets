import type { Metadata } from "next";
import { CertificationsList } from "@/pages/Certifications";

export const metadata: Metadata = {
  title: "ISPM-15 Certifications & Export Standards | El Negma Pallets",
  description: "Official ISPM-15 heat treatment certifications & IPPC stamps for export wooden pallets from El Negma Pallets factory in Egypt.",
  keywords: ["ISPM-15 certification Egypt", "IPPC pallet stamp", "heat treatment certificates pallets", "wooden pallet export compliance"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/certificates/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/certificates/",
      "en": "https://elnegmapallets.com/en/certificates/",
      "x-default": "https://elnegmapallets.com/certificates/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <CertificationsList lang="en" />
    </div>
  );
}
