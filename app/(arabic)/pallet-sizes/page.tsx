import type { Metadata } from "next";
import PalletSizesList from "@/pages/PalletSizesList";

export const metadata: Metadata = {
  title: "مقاسات وأبعاد البالتات الخشبية القياسية | مصنع النجمة للبالتات",
  description: "دليل المقاسات المعتمدة للبالتات الخشبية للتصدير واللوجستيات في مصر. بالتات يورو 120*80، بالتات موالح وصناعية 120*100، بالتات كيماويات CP9 ومقاسات مخصصة.",
  keywords: ["مقاسات البالتات", "أبعاد البالتة الخشبية", "بالتة يورو", "بالتة موالح", "بالتات خشبية مصر"],
};

export default function Page() {
  return <PalletSizesList lang="ar" />;
}
