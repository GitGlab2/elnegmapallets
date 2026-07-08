"use client";

import { TocItem } from "@/data/articles-types";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import ShareButton from "./ShareButton";

interface ToCProps {
  items: TocItem[];
}

export function TableOfContents({ items }: ToCProps) {
  return (
    <div className="bg-muted/20 border border-border/20 rounded-2xl p-6 shadow-md">
      <h3 className="font-bold text-lg text-white mb-4 border-b border-border/40 pb-2">فهرس المحتويات</h3>
      <nav className="flex flex-col gap-2 text-right">
        {items.map((item, index) => (
          <a 
            key={index}
            href={item.target}
            className="text-sm text-muted-foreground hover:text-secondary hover:translate-x-[-4px] transition-all flex items-center gap-2 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function ArticleContactCard() {
  return (
    <div className="bg-gradient-to-br from-[#59331f] to-[#181b24] border border-border/30 rounded-2xl p-6 shadow-md flex flex-col gap-5 text-right">
      <h3 className="font-bold text-lg text-accent border-b border-white/10 pb-2">تواصل مباشر لطلب المنتجات</h3>
      <p className="text-xs text-gray-300 leading-relaxed">
        هل لديك شحنة تصدير زراعية أو صناعية وتبحث عن البالتة المثالية المتوافقة مع معيار ISPM-15 والجمارك الدولية؟
      </p>
      
      <ul className="flex flex-col gap-3 text-xs text-gray-300">
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-accent" />
          <a href="tel:01080012261" className="hover:text-white transition-colors dir-ltr font-bold text-sm">01080012261</a>
        </li>
        <li className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-accent" />
          <a href="mailto:info@elnegmapallets.com" className="hover:text-white transition-colors">info@elnegmapallets.com</a>
        </li>
        <li className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-accent mt-0.5" />
          <span>بني سويف - منطقة بياض العرب الصناعية</span>
        </li>
      </ul>

      <a href="tel:01080012261" className="w-full">
        <Button className="w-full font-bold bg-secondary hover:bg-secondary/90 text-white gap-2">
          <Phone className="w-4 h-4" />
          اتصل الآن بالشركة
        </Button>
      </a>
    </div>
  );
}

interface ShareProps {
  title: string;
  description: string;
}

export function ArticleShareWidget({ title, description }: ShareProps) {
  return (
    <div className="bg-muted/10 border border-border/20 rounded-2xl p-6 shadow-md flex flex-col gap-4 text-center">
      <h4 className="font-bold text-sm text-gray-300">شاركه الان</h4>
      <div className="flex justify-center">
        <ShareButton title={title} description={description} />
      </div>
    </div>
  );
}
