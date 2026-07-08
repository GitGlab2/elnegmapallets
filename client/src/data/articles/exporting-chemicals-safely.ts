import { Article } from "../articles-types";

export const exportingChemicalsSafelyArticle: Article = {
  slug: "exporting-chemicals-safely",
  title: "معايير سلامة شحن البراميل والكيماويات والمواد البترولية على البالتات",
  description: "كيفية اختيار مقاسات البالتات المخصصة مثل 114×114 و 110×130 لشحن البراميل والمواد الكيميائية الخطرة دون بروز أطراف الشحنة.",
  date: "2026-07-02",
  author: "إدارة السلامة والصحة المهنية - شركة النجمة",
  readTime: "3 دقائق",
  image: "/images/articles/exporting-chemicals-safely.webp",
  category: "شحن المواد الكيميائية",
  keywords: ["بالتات شحن الكيماويات", "مقاس 114x114 للبراميل", "شحن براميل البترول", "منع بروز الشحنة Overhang", "بالتات خشبية معالجة للبراميل"],
  toc: [
    { title: "أهمية اختيار البالتة للكيماويات", target: "#chemical-safety" },
    { title: "مقاسات البالتات الاستثنائية للبراميل", target: "#pallet-sizes-drums" },
    { title: "تأمين الشحنات وتخفيف المخاطر اللوجستية", target: "#securing-drums" }
  ],
  content: `
    <div class="space-y-6 text-right leading-relaxed text-gray-200">
      <section class="border-r-4 border-secondary pr-4 bg-muted/20 p-4 rounded-l-lg">
        <h2 id="chemical-safety" class="text-xl font-bold text-accent mb-2">أهمية البالتات المتخصصة لشحن المواد البتروكيميائية</h2>
        <p class="text-sm text-gray-300">
          يمثل نقل الكيماويات والمواد البترولية الخطرة تحدياً أمنياً وبيئياً كبيراً. 
          أي اهتزاز أو انزلاق للبراميل قد يؤدي لتسرب مواد سامة أو حارقة تؤثر على السفينة والبيئة بأكملها. 
          لذلك، يفرض هذا القطاع مواصفات صارمة لنوع البالتة والتوزيع الهندسي للبراميل فوقها.
        </p>
      </section>

      <section>
        <h2 id="pallet-sizes-drums" class="text-xl font-bold text-white border-b border-border pb-1">المقاسات الاستثنائية لشحن البراميل والكيماويات</h2>
        <p class="text-sm text-gray-300">
          لتلافي مشكلة بروز أطراف البراميل (Overhang) التي تؤدي لاحتكاك المواد ببعضها وتعرضها للانثقاب، تم تخصيص مقاسات باليتات مربعة ومحددة تستوعب أربعة براميل فولاذية متجاورة بدقة تامة:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-1.5 mt-2 pr-2">
          <li><strong>بالتات مقاس 114 × 114 سم (أو 45 × 45 بوصة):</strong> المقاس المثالي لاستيعاب البراميل الكيميائية والنفطية القياسية دون أي بروز خارجي للعبوة.</li>
          <li><strong>بالتات مقاس 110 × 130 سم:</strong> تُستخدم للبراميل وحاويات السوائل الوسيطة (Intermediate Bulk Containers - IBCs) لضمان ثبات تام على قاعدة الارتكاز.</li>
        </ul>
      </section>

      <section>
        <h2 id="securing-drums" class="text-xl font-bold text-white border-b border-border pb-1">تأمين الشحنات ومقاومة المواد الكيميائية</h2>
        <p class="text-sm text-gray-300">
          يتم ربط البراميل بقاعدة البالتة بأربطة معدنية وبلاستيكية شديدة المقاومة (Strapping) مع وضع زوايا حماية كرتونية أو بلاستيكية متينة. 
          ويُفضل استخدام البالتات الخشبية الجديدة عالية الكثافة والمعالجة حرارياً (HT) لكونها آمنة تماماً ومصممة لتحمل الأوزان والاهتزازات مع إحكام ربط وتأمين البراميل لمنع حدوث أي تسريب طفيف.
        </p>
      </section>
    </div>
  `
};
