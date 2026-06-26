import { Phone, MapPin, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="container py-12 flex flex-col gap-12">
      
      {/* Centered Split Contact Card */}
      <div className="max-w-4xl mx-auto w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Right Side (First Half): Branding & Info (Dark Side) */}
          <div className="bg-slate-950 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden min-h-[350px]">
            {/* Decorative SVG lines */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 250 L500 650" stroke="#B165FB" strokeWidth="2" fill="none" />
                <path d="M-100 350 L500 750" stroke="#d4a976" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <div className="relative z-10 text-right flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-primary">تواصل مباشر وسريع</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
                يسعدنا الرد على<br />استفساراتكم وطلباتكم
              </h2>
              <p className="text-sm opacity-80 leading-relaxed mt-2">
                تواصل معنا مباشرة عبر الهاتف أو الواتساب للحصول على عروض أسعار فورية وتفاصيل تصنيع وتوريد البالتات الخشبية.
              </p>
            </div>
          </div>

          {/* Left Side (Second Half): Contact Links (Light Side) */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-col gap-6 text-right w-full">
              {/* Phone */}
              <a href="tel:01080012261" className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 border border-border hover:bg-muted hover:border-primary/30 transition-all group">
                <div className="flex flex-col text-right flex-1">
                  <span className="text-xs text-muted-foreground font-bold">اتصل بنا مباشرة</span>
                  <span className="text-lg font-black text-foreground dir-ltr mt-0.5 group-hover:text-primary transition-colors">01080012261</span>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/201080012261" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 border border-border hover:bg-muted hover:border-green-500/30 transition-all group">
                <div className="flex flex-col text-right flex-1">
                  <span className="text-xs text-muted-foreground font-bold">محادثة واتساب مباشرة</span>
                  <span className="text-lg font-black text-foreground mt-0.5 group-hover:text-green-500 transition-colors">تواصل عبر واتساب</span>
                  <span className="text-xs text-muted-foreground mt-0.5">الرد خلال دقائق - متاح 24/7</span>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
              </a>

              {/* Address */}
              <a href="https://www.google.com/maps?cid=16821078517981758662" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 border border-border hover:bg-muted hover:border-secondary/30 transition-all group">
                <div className="flex flex-col text-right flex-1">
                  <span className="text-xs text-muted-foreground font-bold">الموقع الجغرافي</span>
                  <span className="text-lg font-black text-foreground mt-0.5 group-hover:text-secondary transition-colors">بني سويف - بياض العرب</span>
                  <span className="text-xs text-muted-foreground mt-0.5">المنطقة الصناعية (بجوار علوم إدارية)</span>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
              </a>

              {/* Social Links */}
              <div className="flex justify-center gap-4 border-t border-border pt-4 mt-2">
                <a href="https://facebook.com/negma.wood" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-muted/40 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Google Map Embed */}
      <div className="rounded-3xl overflow-hidden border border-border shadow-xl h-[350px] md:h-[450px] relative w-full">
        <iframe
          src="https://maps.google.com/maps?cid=16821078517981758662&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع مصنع النجمة على خريطة جوجل"
          className="absolute inset-0 w-full h-full"
        />
      </div>

    </div>
  );
}
