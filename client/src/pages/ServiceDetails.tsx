"use client";

import { servicesAr } from "@/data/services";
import { servicesEn } from "@/data/services-en";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle2, Phone, HelpCircle, Layers, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceDetails({ slug, lang = "ar" }: { slug: string; lang?: "ar" | "en" }) {
  const isEn = lang === "en";
  const services = isEn ? servicesEn : servicesAr;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {isEn ? "Service Not Found" : "الخدمة غير موجودة"}
        </h1>
        <p className="text-gray-600 mb-8">
          {isEn ? "The requested service page does not exist." : "الخدمة المطلوبة غير متاحة حالياً."}
        </p>
        <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
          <Link href={isEn ? "/en/services/" : "/services/"}>
            {isEn ? "View All Services" : "تصفح جميع الخدمات"}
          </Link>
        </Button>
      </div>
    );
  }

  const content = {
    ar: {
      home: "الرئيسية",
      services: "خدمات مصنع البالتات",
      specsTitle: "المواصفات الفنية للخدمة",
      featuresTitle: "مميزات واشتراطات الخدمة",
      faqTitle: "الأسئلة الشائعة حول الخدمة",
      quoteTitle: "اطلب استشارة أو عرض سعر مخصص",
      quoteDesc: "فريق المبيعات والتجهيزات الفنية جاهز للرد على استفسارات مسؤولي المشتريات والمصانع على مدار الساعة.",
      quoteBtn: "تواصل عبر الواتساب",
      callBtn: "اتصال تلفوني مباشر",
      moqNotice: "نوفر خدمات التوريد والتصنيع للطلبيات الصناعية والكميات الكبرى",
    },
    en: {
      home: "Home",
      services: "Pallet Services",
      specsTitle: "Service Technical Specifications",
      featuresTitle: "Key Features & Service Guarantees",
      faqTitle: "Frequently Asked Questions",
      quoteTitle: "Request Service Quotation / Consultation",
      quoteDesc: "Our technical sales team is ready to provide custom B2B proposals for procurement officers and factory managers.",
      quoteBtn: "Contact via WhatsApp",
      callBtn: "Direct Call Sales",
      moqNotice: "We specialize in bulk industrial supply & high-volume contracts",
    }
  }[lang];

  const whatsappMessage = encodeURIComponent(
    isEn
      ? `Hello El Negma Pallets, I am inquiring about service: ${service.title}.`
      : `مرحباً شركة النجمة للبالتات الخشبية، أود الاستفسار عن خدمة: ${service.title}.`
  );

  return (
    <article className="min-h-screen bg-gray-50/50 pb-20">
      {/* Breadcrumb Header */}
      <div className="bg-[#181b24] text-white py-8 md:py-12 border-b border-gray-800">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-4 overflow-x-auto whitespace-nowrap">
            <Link href={isEn ? "/en/" : "/"} className="hover:text-secondary transition">{content.home}</Link>
            <span>/</span>
            <Link href={isEn ? "/en/services/" : "/services/"} className="hover:text-secondary transition">{content.services}</Link>
            <span>/</span>
            <span className="text-white font-medium">{service.title}</span>
          </nav>
          <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-semibold mb-3">
            {service.category}
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
            {service.title}
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </div>

      <div className="container mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            
            {/* Service Details Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
                <img
                  src={service.image}
                  alt={`${service.title} — ${service.subtitle}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Features & Guarantees */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{content.featuresTitle}</h3>
              <ul className="space-y-4">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-base">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Table */}
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{content.specsTitle}</h3>
              <div className="divide-y divide-gray-100 text-sm md:text-base">
                {Object.entries(service.specifications).map(([key, val], idx) => (
                  <div key={idx} className="py-3 flex justify-between gap-4">
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="text-gray-900 font-semibold text-end">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            {service.faq && service.faq.length > 0 && (
              <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-secondary" />
                  <span>{content.faqTitle}</span>
                </h3>
                <div className="space-y-4">
                  {service.faq.map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">{item.question}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar B2B CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-[#181b24] text-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-800 shadow-xl space-y-6">
              <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold">
                B2B Industrial Services
              </div>

              <h3 className="text-2xl font-black leading-tight text-white">
                {content.quoteTitle}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {content.quoteDesc}
              </p>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-amber-300 font-medium">
                {content.moqNotice}
              </div>

              <div className="space-y-3 pt-2">
                <Button 
                  asChild 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 rounded-xl shadow-lg"
                >
                  <a 
                    href={`https://wa.me/201080012261?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>{content.quoteBtn}</span>
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-white/10 font-bold h-12 rounded-xl"
                >
                  <a href="tel:+201080012261" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>{content.callBtn}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
