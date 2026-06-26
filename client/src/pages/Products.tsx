import { motion } from "framer-motion";
import { Package, Box, DraftingCompass, Settings } from "lucide-react";

export default function Products() {
  const items = [
    {
      dimensions: "120 × 100",
      desc: "بالتة شرق أوسط - حمولة 1250 كجم - متوافقة مع المعايير المحلية والإقليمية",
      icon: <Package className="w-6 h-6 text-secondary shrink-0" />
    },
    {
      dimensions: "120 × 80",
      desc: "بالتة يورو - حمولة 1500 كجم - مطابقة لمواصفات الاتحاد الأوروبي للتصدير",
      icon: <Box className="w-6 h-6 text-secondary shrink-0" />
    },
    {
      dimensions: "تصميمات مخصصة",
      desc: "تصميمات مخصصة وفقاً لمتطلبات العميل - نوفر جميع الأحجام والمواصفات حسب الاحتياجات الخاصة لكل مشروع",
      icon: <DraftingCompass className="w-6 h-6 text-secondary shrink-0" />
    },
    {
      dimensions: "تصنيع حسب الطلب",
      desc: "تصنيع البالتات وفقاً لاحتياجات العميل - مرونة كاملة في التصميم والإنتاج لضمان الملاءمة المثالية للاستخدام المطلوب",
      icon: <Settings className="w-6 h-6 text-secondary shrink-0" />
    }
  ];

  return (
    <div className="container py-12" id="products">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch rounded-3xl overflow-hidden border border-border shadow-2xl min-h-[650px]">
        
        {/* Right Section (Dark Background, Images) - Grid span 6 */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-[#181b24] p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden order-1 lg:order-2"
        >
          {/* Wave Decoration */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
            <svg className="w-full h-full text-secondary" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
              <path d="M-400,0 C-200,50 0,100 200,150 C400,200 600,250 800,300" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M-400,20 C-200,70 0,120 200,170 C400,220 600,270 800,320" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M-400,40 C-200,90 0,140 200,190 C400,240 600,290 800,340" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <img 
              src="/images/products-image.jpg" 
              alt="بالتات خشبية للتصدير" 
              className="styled-image w-full h-[350px] object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>
        </motion.div>

        {/* Left Section (White Background, Text) - Grid span 6 */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-white p-8 md:p-16 flex flex-col justify-center text-right order-2 lg:order-1"
        >
          <div className="flex items-stretch gap-4 mb-6 justify-start">
            <div className="w-2 bg-secondary rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-[#181b24] leading-tight">
              منتجاتنا<br />وخدماتنا
            </h2>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            نقدم مجموعة متكاملة من البالتات الخشبية المصنعة وفقًا للمواصفات العالمية والمحلية، مع مرونة في التصنيع حسب متطلبات العملاء لمختلف الصناعات والاستخدامات.
          </p>

          {/* List items matching Slide 4 styles */}
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 text-right justify-start">
                <div className="mt-1 shrink-0 p-2 rounded-lg bg-secondary/10">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg text-secondary leading-none">{item.dimensions}</h4>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
