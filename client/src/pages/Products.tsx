import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Weight, Package, DraftingCompass, Settings, Box } from "lucide-react";

export default function Products() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
        
        {/* Left Side: Dark Presentation Card (Grid span 5) */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[450px]">
          {/* Decorative Linear SVG Lines in background */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 100 L500 500 M-100 130 L500 530 M-100 160 L500 560" stroke="#B165FB" strokeWidth="2" fill="none" />
              <path d="M-100 400 L500 0 M-100 430 L500 30 M-100 460 L500 60" stroke="#d4a976" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Floating White Presentation Card */}
          <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-6 border border-border hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/products-image.jpg" 
              alt="منتجات شركة النجمة" 
              className="rounded-xl w-full h-72 lg:h-80 object-cover shadow-md"
            />
            <div className="w-full text-right flex justify-between items-center border-t border-border pt-4">
              <span className="text-xs text-muted-foreground font-bold dir-ltr">Contact: 01080012261</span>
              <span className="text-lg font-black text-slate-900">El Negma</span>
            </div>
          </div>
        </div>

        {/* Right Side: White Content Section (Grid span 7) */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center text-right">
          {/* Title with left border */}
          <div className="flex items-stretch gap-4 mb-6">
            <div className="w-1.5 bg-secondary rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              منتجاتنا<br />وخدماتنا
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            نقدم مجموعة متكاملة من البالتات الخشبية المصنعة وفقًا للمواصفات العالمية والمحلية، مع مرونة في التصنيع حسب متطلبات العملاء لمختلف الصناعات والاستخدامات.
          </p>

          {/* List items */}
          <div className="flex flex-col gap-6">
            
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-4 hover:bg-muted/10 transition-colors p-2 rounded-lg">
              <div className="text-secondary font-black text-xl font-['Cairo'] whitespace-nowrap order-last md:order-first">120 × 100</div>
              <div className="text-muted-foreground text-sm md:text-base flex-1 text-right order-2">
                بالتة شرق أوسط - حمولة 1250 كجم - متوافقة مع المعايير المحلية والإقليمية
              </div>
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 order-first md:order-last">
                <Package className="w-5 h-5" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-4 hover:bg-muted/10 transition-colors p-2 rounded-lg">
              <div className="text-secondary font-black text-xl font-['Cairo'] whitespace-nowrap order-last md:order-first">120 × 80</div>
              <div className="text-muted-foreground text-sm md:text-base flex-1 text-right order-2">
                بالتة يورو - حمولة 1500 كجم - مطابقة لمواصفات الاتحاد الأوروبي للتصدير
              </div>
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 order-first md:order-last">
                <Box className="w-5 h-5" />
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-4 hover:bg-muted/10 transition-colors p-2 rounded-lg">
              <div className="text-secondary font-bold text-sm md:text-base whitespace-nowrap order-last md:order-first">تصميمات مخصصة</div>
              <div className="text-muted-foreground text-sm md:text-base flex-1 text-right order-2">
                نوفر جميع الأحجام والمواصفات حسب الاحتياجات الخاصة لكل مشروع
              </div>
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 order-first md:order-last">
                <DraftingCompass className="w-5 h-5" />
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-muted/10 transition-colors p-2 rounded-lg">
              <div className="text-secondary font-bold text-sm md:text-base whitespace-nowrap order-last md:order-first">تصنيع حسب الطلب</div>
              <div className="text-muted-foreground text-sm md:text-base flex-1 text-right order-2">
                مرونة كاملة في التصميم والإنتاج لضمان الملاءمة المثالية للاستخدام المطلوب
              </div>
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 order-first md:order-last">
                <Settings className="w-5 h-5" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
