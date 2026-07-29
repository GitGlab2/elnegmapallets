import type { Metadata } from "next";
import Clients from "@/pages/Clients";

export const metadata: Metadata = {
  title: "Clients & Industries Served | El Negma Pallets Manufacturing",
  description: "Key industries and corporate clients we serve across agricultural export, citrus packing, ceramics, chemicals, food & pharma in Egypt.",
  keywords: ["El Negma clients", "citrus export pallet supplier", "ceramics wooden pallets Egypt", "industrial pallet contracts"],
  alternates: {
    canonical: "https://elnegmapallets.com/en/clients/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/clients/",
      "en": "https://elnegmapallets.com/en/clients/",
      "x-default": "https://elnegmapallets.com/clients/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8">
      <Clients lang="en" />
    </div>
  );
}
