import type { Metadata } from "next";
import { CertificationsList, QualityCertImage } from "@/pages/Certifications";

export const metadata: Metadata = {
  title: "الشهادات واعتمادات التبخير الحراري ISPM-15 | شركة النجمة",
  description: "اعتمادات وشهادات المعالجة الحرارية للبالتات الخشبية ISPM-15 بختم IPPC الدولي من مصنع النجمة للبالتات للتصدير لكافة دول العالم.",
  keywords: ["شهادة ISPM-15", "ختم IPPC بالتات", "شهادات معالجة حرارية بالتات", "اعتمادات تصدير الخشب مصر"],
  alternates: {
    canonical: "https://elnegmapallets.com/certificates/",
    languages: {
      "ar-EG": "https://elnegmapallets.com/certificates/",
      "en": "https://elnegmapallets.com/en/certificates/",
      "x-default": "https://elnegmapallets.com/certificates/",
    },
  },
};

export default function Page() {
  return (
    <div className="py-8 flex flex-col gap-6">
      <CertificationsList lang="ar" />
      <QualityCertImage lang="ar" />
    </div>
  );
}
