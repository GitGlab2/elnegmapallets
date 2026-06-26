import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Import sections in slide order
import About from "./About";
import Products from "./Products";
import Features from "./Features";
import Operations from "./Operations";
import OperationsVideo from "./OperationsVideo";
import AdvantagesSlide from "./AdvantagesSlide";
import TeamImageSlide from "./TeamImageSlide";
import Clients from "./Clients";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import { CertificationsList, QualityCertImage, InternationalStandardsImage } from "./Certifications";
import Commitments from "./Commitments";
import Achievements from "./Achievements";
import FutureVision from "./FutureVision";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20 bg-[#181b24] text-white">
      
      {/* Slide 1.5: Advantages Image Slide (First Section) */}
      <section id="home" className="scroll-mt-24">
        <AdvantagesSlide />
      </section>

      {/* Slide 1: Hero Section (Theme Brown background) */}
      <section id="hero-section" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#59331f] pt-10 scroll-mt-24">
        
        {/* Background Wave Decorations matching slide 1 */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-accent" viewBox="0 0 400 720" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q50,150 0,200 T0,300 T0,400 T0,500 T0,600" fill="none" stroke="currentColor" strokeWidth="1"></path>
            <path d="M-20,120 Q30,170 -20,220 T-20,320 T-20,420" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Panel (Right on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-right order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 w-fit justify-start">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">الشركة رقم 1 في مصر</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
              <span className="text-accent text-3xl md:text-4xl block font-medium mb-2">شركة</span>
              النجمة لتصنيع البالتات الخشبية
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              الموقع الرسمي | خبرة 18 عاماً في تصنيع البالتات عالية الجودة للتصدير والسوق المحلي بأعلى المواصفات العالمية.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#products">
                <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-xl shadow-secondary/20 hover:shadow-secondary/40 transition-all bg-secondary hover:bg-secondary/90">
                  استكشف منتجاتنا
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-bold border-2 border-white/20 hover:bg-white/10 transition-all text-white bg-transparent">
                  تواصل معنا
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10 justify-start">
              <div className="flex flex-col">
                <span className="font-black text-2xl text-accent">+500 عميل</span>
                <span className="text-sm text-white/70 mt-0.5">يثقون في متانة منتجاتنا وتوريداتنا</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Pallet Image (Left on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg mx-auto group">
              {/* Glowing Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary to-accent rounded-[20px] blur-xl opacity-30 group-hover:opacity-45 transition duration-1000 group-hover:duration-300" />
              
              <img 
                src="/images/products-image.jpg" 
                alt="تفاصيل الباليات خشبية" 
                className="relative styled-image w-full h-[380px] lg:h-[480px] object-contain shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/sectors-preview.jpg';
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Slide 2 & 3: About Section (من نحن + رسالتنا ورؤيتنا) */}
      <section id="about-section" className="scroll-mt-24">
        <About />
      </section>

      {/* Slide 4: Products Section (منتجاتنا وخدماتنا) */}
      <section id="products-section" className="scroll-mt-24">
        <Products />
      </section>

      {/* Slide 5: Features Section (مزايانا التنافسية) */}
      <section id="features-section" className="scroll-mt-24">
        <Features />
      </section>

      {/* Slide 6: Operations Section (العمليات والجودة) */}
      <section id="operations-section" className="scroll-mt-24">
        <Operations />
      </section>

      {/* Slide 6.2: Team Image Slide (Full Width) */}
      <section id="team-image-section" className="scroll-mt-24">
        <TeamImageSlide />
      </section>

      {/* Slide 6.5: Operations Video Section */}
      <section id="operations-video-section" className="scroll-mt-24">
        <OperationsVideo />
      </section>

      {/* Slide 7: Clients Section (عملاؤنا الكرام) */}
      <section id="clients-section" className="scroll-mt-24">
        <Clients />
      </section>

      {/* Slide 8 & 8b: Gallery Section (شحنات وتوريدات العملاء) */}
      <section id="gallery-section" className="scroll-mt-24">
        <Gallery />
      </section>

      {/* Slide 9: Pricing Section (أنظمة الأسعار والعروض) */}
      <section id="pricing-section" className="scroll-mt-24">
        <Pricing />
      </section>

      {/* Slide 10: Certifications List Section (الشهادات والمعايير) */}
      <section id="certifications-section" className="scroll-mt-24">
        <CertificationsList />
      </section>

      {/* Slide 11: Quality Certification Image Section */}
      <section id="quality-cert-section" className="scroll-mt-24">
        <QualityCertImage />
      </section>

      {/* Slide 12: Commitments Section (ضمان الالتزامات) */}
      <section id="commitments-section" className="scroll-mt-24">
        <Commitments />
      </section>

      {/* Slide 13: Achievements Section (الإنجازات والإحصاءات) */}
      <section id="achievements-section" className="scroll-mt-24">
        <Achievements />
      </section>

      {/* Slide 14: International Standards Image Section */}
      <section id="international-standards-section" className="scroll-mt-24">
        <InternationalStandardsImage />
      </section>

      {/* Slide 15: Future Vision Section (الرؤية المستقبلية والتوسعات) */}
      <section id="future-vision-section" className="scroll-mt-24">
        <FutureVision />
      </section>

      {/* Slide 16: Contact Section (تواصل معنا) */}
      <section id="contact-section" className="scroll-mt-24">
        <Contact />
      </section>

      {/* Bottom Call to Action banner */}
      <section className="container">
        <div className="relative rounded-3xl overflow-hidden bg-[#59331f] text-white px-6 py-16 md:p-20 text-center border border-border/40">
          <div className="absolute inset-0 bg-[url('/images/logistics-truck.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-black text-accent">جاهز لطلب كميتك؟</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              احصل على عرض سعر خاص ومزايا إضافية للكميات، واستفد من خدمات التوريد والشحن المجاني.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href="tel:01080012261" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg font-bold h-14 px-8 bg-secondary hover:bg-secondary/90 text-white">
                  <Phone className="ml-2 w-5 h-5" />
                  01080012261
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
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
