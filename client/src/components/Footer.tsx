"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import { getLayoutContent } from "@/data/navigation";

interface FooterProps {
  lang: "ar" | "en";
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string, isAnchor: boolean) => void;
}

export function Footer({ lang, onNavClick }: FooterProps) {
  const content = getLayoutContent(lang);

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Company Logo & Social */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/brand/company-logo.webp" 
                alt={content.logoAlt} 
                className="w-10 h-10 object-cover rounded-md border border-border shadow-sm bg-white"
              />
              <span className="font-black text-lg text-white">{content.logoMain}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {content.footerDesc}
            </p>
            <div className="flex gap-3">
              {/* Official Facebook Icon */}
              <a 
                href="https://facebook.com/negma.wood" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                aria-label="Facebook Page" 
                className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Official WhatsApp Icon */}
              <a 
                href="https://wa.me/201080012261" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                aria-label="WhatsApp Contact" 
                className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Site Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{content.footerQuickLinks}</h3>
            <ul className="space-y-3">
              {content.footerQuickLinksList.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path}
                    onClick={(e) => onNavClick(e, item.path, item.isAnchor)}
                  >
                    <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{content.footerContact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:01080012261" className={`text-sm text-muted-foreground hover:text-primary transition-colors dir-ltr ${content.oppositeAlignClass}`}>01080012261</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:info@elnegmapallets.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  info@elnegmapallets.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <a 
                  href="https://www.google.com/maps?cid=16821078517981758662" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                >
                  {content.footerAddress}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center">
            {content.footerCopyright}
          </p>
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
            <span>{content.footerDev}</span>
            <a 
              href="https://xfai.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-secondary/40 bg-secondary/10 hover:bg-secondary text-secondary hover:text-white font-black transition-all duration-300 shadow-md shadow-secondary/5 hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="tracking-wide">XFAI</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
