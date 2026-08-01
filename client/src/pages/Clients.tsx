"use client";

import { motion } from "framer-motion";
import { Sprout, Utensils, Tv, Hammer, Zap, FlaskConical, Building2, Factory, Network } from "lucide-react";

export default function Clients({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "عملاؤنا والقطاعات المستهدفة",
      subtitle: "خريطة الشراكات والقطاعات الصناعية والتصديرية التي نتشرف بخدمتها",
      desc: "نتشرف بخدمة نخبة متميزة من كبرى الشركات والمصانع الرائدة عبر 6 قطاعات حيوية رئيسية في مصر والشرق الأوسط.",
      rootNode: "مصنع النجمة للبالتات الخشبية",
      rootSub: "مركز التوريد والحلول اللوجستية",
      caption: "نفتخر بثقة عملاء كبرى الشركات",
      imgAlt: "شعارات عملاء شركة النجمة الكرام",
      alignClass: "text-right",
      oppositeAlignClass: "text-left",
      treeCategories: [
        {
          category: "قطاع الصادرات والتغذية",
          branches: [
            {
              title: "قطاع التصدير الزراعي والخضروات",
              desc: "بالتات معالجة ISPM-15 طازجة لتصدير الفاكهة والخضروات للاتحاد الأوروبي ودول الخليج بأعلى ثبات.",
              icon: <Sprout className="w-5 h-5 text-emerald-400 shrink-0" />
            },
            {
              title: "قطاع الصناعات الغذائية والمشروبات",
              desc: "بالتات خشبية صحية ومطابقة لاشتراطات سلامة الغذاء لتخزين وتداول البضائع الغذائية بالمستودعات.",
              icon: <Utensils className="w-5 h-5 text-amber-400 shrink-0" />
            }
          ]
        },
        {
          category: "قطاع الصناعات الثقيلة والبناء",
          branches: [
            {
              title: "قطاع السيراميك والأسمنت والرخام",
              desc: "بالتات خشبية ثقيلة (120×100 و 120×120) قادرة على تحمل أوزان فائقة تصل إلى 2.5 طن.",
              icon: <Hammer className="w-5 h-5 text-purple-400 shrink-0" />
            },
            {
              title: "قطاع الكابلات والكيماويات والبراميل",
              desc: "بالتات كيماويات CP9 وبكرات كابلات فائقة المتانة مصممة للثبات المطلق أثناء الشحن البحري.",
              icon: <Zap className="w-5 h-5 text-blue-400 shrink-0" />
            }
          ]
        },
        {
          category: "القطاعات المتخصصة والتكنولوجية",
          branches: [
            {
              title: "قطاع الإلكترونيات والأجهزة المنزلية",
              desc: "حلول حماية وتغليف متطورة وبصمة خفيفة متينة مخصصة للأجهزة الكهربائية الحساسة.",
              icon: <Tv className="w-5 h-5 text-cyan-400 shrink-0" />
            },
            {
              title: "قطاعات الأدوية والمستلزمات والأسمدة",
              desc: "توريد كميات دورية وعقود سنوية للمستحضرات الطبية ومزارع الدواجن وشركات الأسمدة.",
              icon: <FlaskConical className="w-5 h-5 text-rose-400 shrink-0" />
            }
          ]
        }
      ]
    },
    en: {
      title: "Our Clients & Industry Sectors",
      subtitle: "Hierarchical Map of Key Industrial & Export Sectors Served",
      desc: "Proudly supplying top-tier factories and global exporters across 6 strategic industrial sectors in Egypt and the MENA region.",
      rootNode: "El Negma Pallets Manufacturing",
      rootSub: "Central Supply & Logistics Hub",
      caption: "Trusted by Industry Leaders",
      imgAlt: "El Negma Valued Clients Logos",
      alignClass: "text-left",
      oppositeAlignClass: "text-right",
      treeCategories: [
        {
          category: "Export & Food Sectors",
          branches: [
            {
              title: "Agricultural & Vegetable Export",
              desc: "ISPM-15 certified pallets engineered for fresh produce exports to the EU, UK, and Gulf region.",
              icon: <Sprout className="w-5 h-5 text-emerald-400 shrink-0" />
            },
            {
              title: "Food & Beverage Processing",
              desc: "Sanitary, food-grade wooden pallets meeting strict hygiene regulations for cold storage and warehouse handling.",
              icon: <Utensils className="w-5 h-5 text-amber-400 shrink-0" />
            }
          ]
        },
        {
          category: "Heavy Industry & Construction",
          branches: [
            {
              title: "Ceramics, Cement & Marble",
              desc: "Heavy-duty square & industrial pallets tested for high load capacity up to 2,500 kg dynamic payload.",
              icon: <Hammer className="w-5 h-5 text-purple-400 shrink-0" />
            },
            {
              title: "Cables, Chemicals & Heavy Cargo",
              desc: "CP9 chemical pallets and heavy cable reel platforms providing maximum tilt stability during marine shipping.",
              icon: <Zap className="w-5 h-5 text-blue-400 shrink-0" />
            }
          ]
        },
        {
          category: "Specialized & Tech Sectors",
          branches: [
            {
              title: "Electronics & Home Appliances",
              desc: "Precision dimensional pallets providing smooth automated conveyor flow and shock absorption for home appliances.",
              icon: <Tv className="w-5 h-5 text-cyan-400 shrink-0" />
            },
            {
              title: "Pharma, Fertilizers & Agriculture",
              desc: "Contract manufacturing and seasonal bulk supply for major pharmaceutical laboratories and fertilizer plants.",
              icon: <FlaskConical className="w-5 h-5 text-rose-400 shrink-0" />
            }
          ]
        }
      ]
    }
  }[lang];

  return (
    <div className="flex flex-col gap-12">
      
      {/* Top Hero Banner with Background Image */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] flex items-center justify-center overflow-hidden border-b border-border/40">
        {/* Background Image - صورة هيدر القطاعات والعملاء */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-105"
          style={{ backgroundImage: "url('/images/sections/clients-hero-bg.webp')" }}
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] via-[#181b24]/80 to-black/60" />

        {/* Hero Content */}
        <div className="container relative z-10 text-center flex flex-col items-center gap-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary font-bold text-xs md:text-sm backdrop-blur-md"
          >
            <Network className="w-4 h-4" />
            <span>{content.subtitle}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg max-w-4xl"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-gray-200 max-w-2xl font-medium leading-relaxed"
          >
            {content.desc}
          </motion.p>
        </div>
      </div>

      <div className="container py-4 pb-16" id="clients">

      {/* Hierarchical Tree Map Layout */}
      <div className="relative flex flex-col items-center">
        
        {/* Tree Root Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex flex-col items-center mb-8"
        >
          <div className="px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-secondary text-white font-black text-lg md:text-xl shadow-2xl shadow-secondary/30 border border-white/20 flex items-center gap-3">
            <Factory className="w-6 h-6 shrink-0" />
            <div className="flex flex-col text-right">
              <span>{content.rootNode}</span>
              <span className="text-xs font-medium text-white/80">{content.rootSub}</span>
            </div>
          </div>
          {/* Vertical Connecting Line down */}
          <div className="w-1 h-10 md:h-12 bg-gradient-to-b from-secondary to-secondary/30 mt-2" />
        </motion.div>

        {/* Tree Categories & Branches (Grid 3 Columns) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {content.treeCategories.map((cat, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="flex flex-col rounded-2xl md:rounded-3xl border border-border/80 bg-[#181b24] p-5 md:p-6 shadow-xl relative overflow-hidden group hover:border-secondary/50 transition-all"
            >
              {/* Category Header (Branch Node) */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border/60">
                <div className="p-2.5 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-white">{cat.category}</h3>
              </div>

              {/* Branch Leaf Cards */}
              <div className="flex flex-col gap-4 flex-1">
                {cat.branches.map((branch, bIdx) => (
                  <div 
                    key={bIdx} 
                    className="p-4 rounded-xl bg-[#202430]/60 border border-border/40 hover:border-secondary/40 hover:bg-[#202430] transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0 mt-0.5">
                      {branch.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-sm md:text-base text-white">{branch.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{branch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Banner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mt-10 md:mt-16 rounded-2xl md:rounded-3xl border border-border shadow-2xl bg-[#181b24] p-6 md:p-10 flex flex-col items-center gap-6 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {content.caption}
          </h3>
          <div className="bg-white p-4 rounded-2xl shadow-xl w-full max-w-xl">
            <picture>
              <source srcSet="/images/brand/clients-logos-grid.webp" type="image/webp" />
              <img 
                src="/images/brand/clients-logos-grid.webp" 
                alt={content.imgAlt} 
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-[180px] md:h-[280px] object-contain rounded-lg"
              />
            </picture>
          </div>
        </motion.div>

      </div>
    </div>
    </div>
  );
}
