"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft, ArrowRight } from "lucide-react";

// Eager imports — أقسام حصرية للصفحة الرئيسية فقط
import AdvantagesSlide from "./AdvantagesSlide";
import Products from "./Products";
import Features from "./Features";
import Operations from "./Operations";
import OperationsVideo from "./OperationsVideo";
import TeamImageSlide from "./TeamImageSlide";
import Pricing from "./Pricing";
import Commitments from "./Commitments";
import Achievements from "./Achievements";
import FutureVision from "./FutureVision";
import Contact from "./Contact";

export default function Home({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const heroContent = {
    ar: {
      badge: "الشركة رقم 1 في مصر",
      titlePrefix: "شركة",
      titleMain: "النجمة لتصنيع البالتات الخشبية",
      desc: "الموقع الرسمي | خبرة 18 عاماً في تصنيع البالتات عالية الجودة للتصدير والسوق المحلي بأعلى المواصفات العالمية.",
      btnExplore: "استكشف منتجاتنا",
      btnContact: "تواصل معنا",
      clientsCount: "+500 عميل",
      clientsText: "يثقون في متانة منتجاتنا وتوريداتنا",
      ctaTitle: "جاهز لطلب كميتك؟",
      ctaDesc: "احصل على عرض سعر خاص ومزايا إضافية للكميات، واستفد من خدمات التوريد والشحن المجاني.",
      ctaContact: "تواصل معنا",
    },
    en: {
      badge: "#1 Manufacturer in Egypt",
      titlePrefix: "El Negma",
      titleMain: "Wooden Pallets Manufacturing",
      desc: "Official Website | 18 Years of Experience in Manufacturing High-Quality Pallets for Export & Local Markets to International Standards.",
      btnExplore: "Explore Our Products",
      btnContact: "Contact Us",
      clientsCount: "+500 Clients",
      clientsText: "Trusting the durability of our products & supplies",
      ctaTitle: "Ready to Order Your Batch?",
      ctaDesc: "Get a special quote and additional volume benefits, and take advantage of our delivery services.",
      ctaContact: "Contact Us",
    }
  }[lang];

  return (
    <div className={`flex flex-col gap-10 pb-20 bg-[#181b24] text-white ${isEn ? "font-sans" : "font-['Cairo']"}`}>
      
      {/* Slide 1.5: Advantages Image Slide (First Section - above the fold) */}
      <section id="home" className="scroll-mt-24">
        <AdvantagesSlide lang={lang} />
      </section>

      {/* Slide 1: Hero Section (Theme Brown background) */}
      <section id="hero-section" className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#59331f] pt-6 md:pt-10 scroll-mt-24">
        
        {/* Background Wave Decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-accent" viewBox="0 0 400 720" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q50,150 0,200 T0,300 T0,400 T0,500 T0,600" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M-20,120 Q30,170 -20,220 T-20,320 T-20,420" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Panel */}
          <div className={`flex flex-col gap-6 ${isEn ? "text-left order-2 lg:order-1 animate-fade-in-left" : "text-right order-2 lg:order-1 animate-fade-in-right"} justify-start`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 w-fit justify-start">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">{heroContent.badge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              <span className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl block font-medium mb-1 md:mb-2">{heroContent.titlePrefix}</span>
              {heroContent.titleMain}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
              {heroContent.desc}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#products-section">
                <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold shadow-xl shadow-secondary/20 hover:shadow-secondary/40 transition-all bg-secondary hover:bg-secondary/90">
                  {heroContent.btnExplore}
                  {isEn ? (
                    <ArrowRight className="ml-2 w-5 h-5" />
                  ) : (
                    <ArrowLeft className="mr-2 w-5 h-5" />
                  )}
                </Button>
              </a>
              <a href="#contact-section">
                <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold border-2 border-white/20 hover:bg-white/10 transition-all text-white bg-transparent">
                  {heroContent.btnContact}
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 justify-start">
              <div className="flex flex-col">
                <span className="font-black text-xl md:text-2xl text-accent">{heroContent.clientsCount}</span>
                <span className="text-sm text-white/70 mt-0.5">{heroContent.clientsText}</span>
              </div>
            </div>
          </div>

          {/* Hero Pallet Image */}
          <div className="relative z-10 order-1 lg:order-2 animate-fade-in-left">
            <div className="relative w-full max-w-lg mx-auto group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary to-accent rounded-[20px] blur-xl opacity-30 group-hover:opacity-45 transition duration-1000 group-hover:duration-300" />
              
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/sections/products-image-mobile.webp" type="image/webp" />
                <source media="(min-width: 769px)" srcSet="/images/sections/products-image.webp" type="image/webp" />
                <img 
                  src="/images/sections/products-image.webp" 
                  alt={isEn ? "Wooden pallets details" : "تفاصيل الباليات خشبية"} 
                  width={600}
                  height={480}
                  className="relative styled-image w-full h-[280px] sm:h-[350px] lg:h-[480px] object-contain shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/sections/sectors-preview.webp';
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>



      {/* المنتجات — إيه اللي بنصنعه (الزائر جه عشان ده) */}
      <section id="products-section" className="scroll-mt-24">
        <Products lang={lang} />
      </section>

      {/* المزايا التنافسية — ليه تختارنا */}
      <section id="features-section" className="scroll-mt-24">
        <Features lang={lang} />
      </section>

      {/* خط الإنتاج — شوف المصنع */}
      <section id="operations-section" className="scroll-mt-24">
        <Operations lang={lang} />
      </section>

      {/* فيديو العمليات — إثبات بصري */}
      <section id="operations-video-section" className="scroll-mt-24">
        <OperationsVideo lang={lang} />
      </section>

      {/* فريق العمل — العنصر البشري */}
      <section id="team-image-section" className="scroll-mt-24">
        <TeamImageSlide lang={lang} />
      </section>

      {/* الإنجازات والأرقام — بعد ما شاف المصنع، الأرقام بتضرب أقوى */}
      <section id="achievements-section" className="scroll-mt-24">
        <Achievements lang={lang} />
      </section>




      {/* الالتزامات — الضمانات قبل السعر */}
      <section id="commitments-section" className="scroll-mt-24">
        <Commitments lang={lang} />
      </section>

      {/* الأسعار — بعد ما شاف كل حاجة، السعر مبرر */}
      <section id="pricing-section" className="scroll-mt-24">
        <Pricing lang={lang} />
      </section>

      {/* الرؤية المستقبلية */}
      <section id="future-vision-section" className="scroll-mt-24">
        <FutureVision lang={lang} />
      </section>

      {/* تواصل معنا — قسم التواصل والمعلومات المباشرة */}
      <section id="contact-section" className="scroll-mt-24">
        <Contact lang={lang} />
      </section>

      {/* Bottom Call to Action banner */}
      <section className="container">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#59331f] text-white px-4 py-10 md:p-20 text-center border border-border/40">
          <div className="absolute inset-0 bg-[url('/images/sections/logistics-truck.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6 md:gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-accent">{heroContent.ctaTitle}</h2>
            <p className="text-sm md:text-lg opacity-90 leading-relaxed">
              {heroContent.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href="tel:01080012261" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg font-bold h-14 px-8 bg-secondary hover:bg-secondary/90 text-white">
                  {isEn ? (
                    <Phone className="mr-2 w-5 h-5" />
                  ) : (
                    <Phone className="ml-2 w-5 h-5" />
                  )}
                  01080012261
                </Button>
              </a>
              <a href={isEn ? "#contact-section" : "#contact-section"} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-lg font-bold h-14 px-8 bg-transparent border-white/40 hover:bg-white/10 text-white">
                  {heroContent.ctaContact}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
