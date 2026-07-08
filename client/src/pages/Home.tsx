"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";

// Eager imports of all sections to prevent layout shifts and ensure accurate scroll target positioning
import AdvantagesSlide from "./AdvantagesSlide";
import About from "./About";
import Products from "./Products";
import Features from "./Features";
import Operations from "./Operations";
import OperationsVideo from "./OperationsVideo";
import TeamImageSlide from "./TeamImageSlide";
import Clients from "./Clients";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Commitments from "./Commitments";
import Achievements from "./Achievements";
import FutureVision from "./FutureVision";
import Contact from "./Contact";
import { CertificationsList, QualityCertImage, InternationalStandardsImage } from "./Certifications";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20 bg-[#181b24] text-white">
      
      {/* Slide 1.5: Advantages Image Slide (First Section - above the fold) */}
      <section id="home" className="scroll-mt-24">
        <AdvantagesSlide />
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
          <div className="flex flex-col gap-6 text-right order-2 lg:order-1 animate-fade-in-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 w-fit justify-start">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">الشركة رقم 1 في مصر</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              <span className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl block font-medium mb-1 md:mb-2">شركة</span>
              النجمة لتصنيع البالتات الخشبية
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
              الموقع الرسمي | خبرة 18 عاماً في تصنيع البالتات عالية الجودة للتصدير والسوق المحلي بأعلى المواصفات العالمية.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#products-section">
                <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold shadow-xl shadow-secondary/20 hover:shadow-secondary/40 transition-all bg-secondary hover:bg-secondary/90">
                  استكشف منتجاتنا
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact-section">
                <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold border-2 border-white/20 hover:bg-white/10 transition-all text-white bg-transparent">
                  تواصل معنا
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 justify-start">
              <div className="flex flex-col">
                <span className="font-black text-xl md:text-2xl text-accent">+500 عميل</span>
                <span className="text-sm text-white/70 mt-0.5">يثقون في متانة منتجاتنا وتوريداتنا</span>
              </div>
            </div>
          </div>

          {/* Hero Pallet Image */}
          <div className="relative z-10 order-1 lg:order-2 animate-fade-in-left">
            <div className="relative w-full max-w-lg mx-auto group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary to-accent rounded-[20px] blur-xl opacity-30 group-hover:opacity-45 transition duration-1000 group-hover:duration-300" />
              
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/products-image-mobile.webp" type="image/webp" />
                <source media="(min-width: 769px)" srcSet="/images/products-image.webp" type="image/webp" />
                <img 
                  src="/images/products-image.jpg" 
                  alt="تفاصيل الباليات خشبية" 
                  width={600}
                  height={480}
                  className="relative styled-image w-full h-[280px] sm:h-[350px] lg:h-[480px] object-contain shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/sectors-preview.jpg';
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Rendered Eagerly to prevent layout shifting scroll issues */}
      <section id="about-section" className="scroll-mt-24">
        <About />
      </section>

      <section id="products-section" className="scroll-mt-24">
        <Products />
      </section>

      <section id="features-section" className="scroll-mt-24">
        <Features />
      </section>

      <section id="operations-section" className="scroll-mt-24">
        <Operations />
      </section>

      <section id="team-image-section" className="scroll-mt-24">
        <TeamImageSlide />
      </section>

      <section id="operations-video-section" className="scroll-mt-24">
        <OperationsVideo />
      </section>

      <section id="clients-section" className="scroll-mt-24">
        <Clients />
      </section>

      <section id="gallery-section" className="scroll-mt-24">
        <Gallery />
      </section>

      <section id="pricing-section" className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="certifications-section" className="scroll-mt-24">
        <CertificationsList />
      </section>

      <section id="quality-cert-section" className="scroll-mt-24">
        <QualityCertImage />
      </section>

      <section id="commitments-section" className="scroll-mt-24">
        <Commitments />
      </section>

      <section id="achievements-section" className="scroll-mt-24">
        <Achievements />
      </section>

      <section id="international-standards-section" className="scroll-mt-24">
        <InternationalStandardsImage />
      </section>

      <section id="future-vision-section" className="scroll-mt-24">
        <FutureVision />
      </section>

      <section id="contact-section" className="scroll-mt-24">
        <Contact />
      </section>

      {/* Bottom Call to Action banner */}
      <section className="container">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#59331f] text-white px-4 py-10 md:p-20 text-center border border-border/40">
          <div className="absolute inset-0 bg-[url('/images/logistics-truck.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6 md:gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-accent">جاهز لطلب كميتك؟</h2>
            <p className="text-sm md:text-lg opacity-90 leading-relaxed">
              احصل على عرض سعر خاص ومزايا إضافية للكميات، واستفد من خدمات التوريد والشحن المجاني.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href="tel:01080012261" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg font-bold h-14 px-8 bg-secondary hover:bg-secondary/90 text-white">
                  <Phone className="ml-2 w-5 h-5" />
                  01080012261
                </Button>
              </a>
              <a href="#contact-section" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-lg font-bold h-14 px-8 bg-transparent border-white/40 hover:bg-white/10 text-white">
                  تواصل معنا
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
