import { motion } from "framer-motion";
import { Phone, MapPin, Facebook, MessageCircle, Mail } from "lucide-react";

export default function Contact({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "تواصل معنا",
      mapTitle: "موقع مصنع النجمة على خريطة جوجل",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      phoneLabel: "رقم الهاتف الرسمي للتواصل",
      phoneVal: "01080012261",
      waLabel: "واتساب مباشر للتواصل السريع",
      waVal: "راسلنا على واتساب",
      mailLabel: "البريد الإلكتروني الرسمي",
      mailVal: "info@elnegmapallets.com",
      mapLabel: "الموقع الجغرافي للمصنع",
      mapVal: "بني سويف - بياض العرب",
      fbLabel: "الصفحة الرسمية على فيسبوك",
      fbVal: "facebook.com/negma.wood"
    },
    en: {
      title: "Contact Us",
      mapTitle: "El Negma Pallets Factory Location on Google Maps",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      phoneLabel: "Official Inquiries Phone Number",
      phoneVal: "01080012261",
      waLabel: "Direct Chat via WhatsApp",
      waVal: "Chat with us",
      mailLabel: "Official Email Address",
      mailVal: "info@elnegmapallets.com",
      mapLabel: "Factory Physical Location",
      mapVal: "Beni Suef - Bayad Al-Arab, Egypt",
      fbLabel: "Official Facebook Page",
      fbVal: "facebook.com/negma.wood"
    }
  }[lang];

  return (
    <div className="container py-12" id="contact">
      <div className="flex flex-col gap-12">
        
        {/* Slide 16: تواصل معنا */}
        <div className="relative min-h-[550px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#181b24] p-8 md:p-16 flex items-center">
          
          {/* Left Side: Wave Line Decoration (Grid span 6) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg className="w-full h-full text-secondary" viewBox="0 0 640 720" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,200 C100,180 200,350 300,300 C400,250 500,400 600,250" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M0,210 C100,190 200,360 300,310 C400,260 500,410 600,260" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M0,220 C100,200 200,370 300,320 C400,270 500,420 600,270" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </svg>
          </div>

          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (Decoration spacing) - Grid span 4 */}
            <div className="hidden lg:block lg:col-span-4" />

            {/* Right Column (Contact Links) - Grid span 8 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-8 flex flex-col justify-center ${content.alignClass}`}
            >
              <div className="flex items-stretch gap-4 mb-8 justify-start">
                <div className="w-1.5 bg-secondary rounded-full" />
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  {content.title}
                </h2>
              </div>

              {/* Direct links list matching Slide 17 style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone Link */}
                <a href="tel:01080012261" className={`flex items-center gap-4 p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary hover:bg-[#202430]/80 transition-all group justify-start ${isEn ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/10 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className={`flex flex-col ${content.alignClass}`}>
                    <span className="text-xs text-muted-foreground">{content.phoneLabel}</span>
                    <span className="text-lg font-black text-white dir-ltr mt-0.5">{content.phoneVal}</span>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a href="https://wa.me/201080012261" target="_blank" rel="noopener noreferrer nofollow" className={`flex items-center gap-4 p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary hover:bg-[#202430]/80 transition-all group justify-start ${isEn ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/10 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className={`flex flex-col ${content.alignClass}`}>
                    <span className="text-xs text-muted-foreground">{content.waLabel}</span>
                    <span className="text-lg font-bold text-white mt-0.5">{content.waVal}</span>
                  </div>
                </a>


                {/* Email Link */}
                <a href="mailto:info@elnegmapallets.com" className={`flex items-center gap-4 p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary hover:bg-[#202430]/80 transition-all group justify-start ${isEn ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/10 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className={`flex flex-col ${content.alignClass}`}>
                    <span className="text-xs text-muted-foreground">{content.mailLabel}</span>
                    <span className="text-base font-bold text-white mt-0.5">{content.mailVal}</span>
                  </div>
                </a>

                {/* Address Link */}
                <a href="https://www.google.com/maps?cid=16821078517981758662" target="_blank" rel="noopener noreferrer nofollow" className={`flex items-center gap-4 p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary hover:bg-[#202430]/80 transition-all group justify-start ${isEn ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/10 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className={`flex flex-col ${content.alignClass}`}>
                    <span className="text-xs text-muted-foreground">{content.mapLabel}</span>
                    <span className="text-base font-bold text-white mt-0.5 leading-snug">{content.mapVal}</span>
                  </div>
                </a>

                {/* Facebook Link */}
                <a href="https://facebook.com/negma.wood" target="_blank" rel="noopener noreferrer nofollow" className={`flex items-center gap-4 p-4 rounded-2xl bg-[#202430]/40 border border-border/40 hover:border-secondary hover:bg-[#202430]/80 transition-all group justify-start sm:col-span-2 ${isEn ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/10 group-hover:scale-105 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className={`flex flex-col ${content.alignClass}`}>
                    <span className="text-xs text-muted-foreground">{content.fbLabel}</span>
                    <span className="text-base font-bold text-white mt-0.5">{content.fbVal}</span>
                  </div>
                </a>

              </div>
            </motion.div>

          </div>

        </div>

        {/* CID Maps Iframe (Required at the end of the page) */}
        <div className="rounded-3xl overflow-hidden border border-border shadow-2xl h-[350px] md:h-[450px] relative w-full">
          <iframe
            src="https://maps.google.com/maps?cid=16821078517981758662&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={content.mapTitle}
            className="absolute inset-0 w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}
