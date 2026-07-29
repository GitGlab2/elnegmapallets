"use client";

import { palletSizesAr } from "@/data/pallet-sizes";
import { palletSizesEn } from "@/data/pallet-sizes-en";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShieldCheck, Box, Layers, Truck } from "lucide-react";
import Link from "next/link";

export default function ProductsList({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const products = isEn ? palletSizesEn : palletSizesAr;

  const content = {
    ar: {
      title: "منتجات البالتات الخشبية القياسية والمخصصة",
      subtitle: "دليل المواصفات الفنية لجميع مقاسات البالتات الخشبية للتنكيل المحلي والتصدير الدولي",
      viewDetails: "المواصفات والتفاصيل",
      moq: "الحد الأدنى للطلبيات الصناعية: 2000 بالتة",
      specs: "عرض الأبعاد والتحمل",
    },
    en: {
      title: "Standard & Custom Wooden Pallet Products",
      subtitle: "Technical specifications guide for all standard pallet dimensions used in Egypt and export markets.",
      viewDetails: "Specifications & Details",
      moq: "Minimum B2B Order Quantity: 2,000 Pallets",
      specs: "View Specs & Loads",
    }
  }[lang];

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 md:py-16">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3.5 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs md:text-sm font-bold mb-4">
            {isEn ? "Industrial Wooden Pallets Catalog" : "كتالوج البالتات الخشبية الصناعية"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            {content.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div 
              key={item.slug} 
              className="bg-white rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] w-full bg-[#181b24]/5 border-b border-gray-100 p-6 flex items-center justify-center relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 text-xs font-bold text-gray-900 shadow-sm">
                    {item.dimensions}
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <span className="text-xs font-semibold text-secondary block">
                    {item.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div>
                      <span className="block font-semibold text-gray-900">{item.loads.dynamic.toLocaleString()} kg</span>
                      <span>حمل متحرك</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-900">{item.loads.static.toLocaleString()} kg</span>
                      <span>حمل استاتيكي</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <Button 
                  asChild 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-11 rounded-xl"
                >
                  <Link href={isEn ? `/en/products/${item.slug}/` : `/products/${item.slug}/`} className="flex items-center justify-center gap-2">
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
