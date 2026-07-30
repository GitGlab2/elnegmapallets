"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Package, Truck, Globe2, Users } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// ── Animated Counter Component ──
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.floor(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [isInView, value, duration, motionVal, rounded]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ── Floating Particles Background ──
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-secondary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ── Animated SVG Wave Lines ──
function AnimatedWaves() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg className="absolute w-[200%] h-full opacity-[0.07]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <motion.path
          d="M0,250 C150,100 350,400 600,250 C850,100 1050,400 1200,250"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 C200,50 400,350 600,200 C800,50 1000,350 1200,200"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M0,300 C100,150 300,450 600,300 C900,150 1100,450 1200,300"
          fill="none"
          stroke="url(#wave-gradient-3)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.6 }}
        />
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b165fb" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#b165fb" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b165fb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ── Stat Card Colors & Gradients (Unified Brand Purple & Violet Palette) ──
const cardAccents = [
  { gradient: "from-secondary/20 via-purple-500/10 to-transparent", glow: "rgba(177, 101, 251, 0.3)", ring: "ring-secondary/30", iconBg: "bg-secondary/15", iconColor: "text-secondary" },
  { gradient: "from-indigo-500/20 via-violet-500/10 to-transparent", glow: "rgba(99, 102, 241, 0.3)", ring: "ring-indigo-500/30", iconBg: "bg-indigo-500/15", iconColor: "text-indigo-400" },
  { gradient: "from-purple-600/20 via-fuchsia-500/10 to-transparent", glow: "rgba(168, 85, 247, 0.3)", ring: "ring-purple-600/30", iconBg: "bg-purple-600/15", iconColor: "text-purple-400" },
  { gradient: "from-violet-500/20 via-secondary/10 to-transparent", glow: "rgba(139, 92, 246, 0.3)", ring: "ring-violet-500/30", iconBg: "bg-violet-500/15", iconColor: "text-violet-400" },
];

export default function Achievements({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isEn = lang === "en";

  const content = {
    ar: {
      title: "الإنجازات والإحصاءات",
      alignClass: "text-right",
      stats: [
        {
          icon: <Package className="w-7 h-7" />,
          numericValue: 360000,
          suffix: "+",
          displayLabel: "بالتة سنوياً",
          desc: "بالتة خشبية سنوياً تنتجها مصانعنا بأعلى معايير الجودة المحلية والدولية"
        },
        {
          icon: <Truck className="w-7 h-7" />,
          numericValue: 47,
          suffix: "",
          displayLabel: "شحنة شهرياً",
          desc: "شحنة توريد شهرية لكبرى الشركات والمصانع في جميع أنحاء مصر"
        },
        {
          icon: <Globe2 className="w-7 h-7" />,
          numericValue: 100,
          suffix: "%",
          displayLabel: "توصيل لأي مكان",
          desc: "خدمة الشحن والتوصيل الفوري لأي مكان في مصر والمناطق الصناعية بالمحافظات"
        },
        {
          icon: <Users className="w-7 h-7" />,
          numericValue: 93,
          suffix: "%",
          displayLabel: "رضا العملاء",
          desc: "نسبة رضا العملاء عن منتجاتنا وخدماتنا، وهو ما يؤكد التزامنا بالجودة والمواصفات"
        }
      ]
    },
    en: {
      title: "Achievements & Statistics",
      alignClass: "text-left",
      stats: [
        {
          icon: <Package className="w-7 h-7" />,
          numericValue: 360000,
          suffix: "+",
          displayLabel: "Pallets/Year",
          desc: "Wooden pallets annually manufactured by our facility conforming to strict global standards."
        },
        {
          icon: <Truck className="w-7 h-7" />,
          numericValue: 47,
          suffix: "",
          displayLabel: "Monthly Shipments",
          desc: "Ongoing monthly supply shipments delivered to major factories and companies across Egypt."
        },
        {
          icon: <Globe2 className="w-7 h-7" />,
          numericValue: 100,
          suffix: "%",
          displayLabel: "Delivery Anywhere in Egypt",
          desc: "Fast delivery service to any location in Egypt and industrial zones across all governorates."
        },
        {
          icon: <Users className="w-7 h-7" />,
          numericValue: 93,
          suffix: "%",
          displayLabel: "Client Satisfaction",
          desc: "Client satisfaction rate reflecting our rigorous quality control and dimensional precision."
        }
      ]
    }
  }[lang];

  return (
    <div className="container py-12" id="achievements">
      <div className="relative min-h-[520px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-[#0f1118] p-6 md:p-12 lg:p-16 flex flex-col justify-center">
        
        {/* Animated Background Effects */}
        <AnimatedWaves />
        <FloatingParticles />

        {/* Corner Accent Glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className={`relative z-10 w-full flex flex-col gap-10 ${content.alignClass}`}>
          
          {/* Header with animated accent */}
          <motion.div
            initial={{ opacity: 0, x: isEn ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-4 border-b border-border/30 pb-6 justify-start"
          >
            <motion.div
              className="w-1.5 h-14 bg-gradient-to-b from-secondary via-indigo-500 to-secondary/30 rounded-full"
              animate={{ scaleY: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              {content.title}
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
            {content.stats.map((stat, index) => {
              const accent = cardAccents[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className={`
                    relative flex flex-col items-center text-center gap-4
                    bg-gradient-to-br ${accent.gradient}
                    backdrop-blur-sm
                    p-6 md:p-7 rounded-2xl
                    border border-white/[0.06]
                    hover:border-white/[0.12]
                    ring-1 ${accent.ring} ring-inset
                    transition-all duration-500
                    group cursor-default
                    overflow-hidden
                  `}
                >
                  {/* Card hover glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 40px ${accent.glow}, 0 0 30px ${accent.glow}` }}
                  />

                  {/* Animated shine sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                  {/* Icon Container with pulse ring */}
                  <div className="relative">
                    <motion.div
                      className={`w-16 h-16 ${accent.iconBg} rounded-2xl flex items-center justify-center ${accent.iconColor} relative z-10`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    {/* Pulse ring behind icon */}
                    <motion.div
                      className={`absolute inset-0 ${accent.iconBg} rounded-2xl`}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                    />
                  </div>

                  {/* Animated Counter */}
                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums tracking-tight">
                      <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} duration={2 + index * 0.3} />
                    </h3>
                    <span className={`text-xs font-bold uppercase tracking-widest ${accent.iconColor}`}>
                      {stat.displayLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium relative z-10 max-w-[250px]">
                    {stat.desc}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                    style={{ transformOrigin: isEn ? "left" : "right" }}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
