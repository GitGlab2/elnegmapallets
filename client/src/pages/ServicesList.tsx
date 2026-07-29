"use client";

import { servicesAr } from "@/data/services";
import { servicesEn } from "@/data/services-en";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicesList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const services = isEn ? servicesEn : servicesAr;

  const content = {
    ar: {
      title: "خدمات التوريد، التعقيم والتصنيع المخصص",
      subtitle: "حلول متكاملة لخدمة المصانع، الشركات الكبرى، ومحطات التصدير الزراعي بم مصر والشرق الأوسط",
      viewDetails: "التفاصيل والمواصفات",
    },
    en: {
      title: "Supply, Phytosanitary Sanitation & Custom Services",
      subtitle: "Integrated pallet solutions serving industrial plants, major exporters, and agricultural packhouses.",
      viewDetails: "Service Details & Specs",
    }
  }[lang];

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 md:py-16">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3.5 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs md:text-sm font-bold mb-4">
            {isEn ? "Pallet Manufacturing & Export Services" : "خدمات تصنيع وتوريد البالتات"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            {content.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div 
              key={item.slug} 
              className="bg-white rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] w-full bg-gray-100 border-b border-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <span className="text-xs font-semibold text-secondary block">
                    {item.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <Button 
                  asChild 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-11 rounded-xl"
                >
                  <Link href={isEn ? `/en/services/${item.slug}/` : `/services/${item.slug}/`} className="flex items-center justify-center gap-2">
                    <span>{content.viewDetails}</span>
                    {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
