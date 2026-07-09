import { Article } from "../articles-types";

export const exportingCitrusAgriculturalProductsArticle: Article = {
  slug: "exporting-citrus-agricultural-products",
  title: "لوجستيات تصدير الموالح والحاصلات الزراعية المصرية باستخدام البالتات",
  description: "دراسة حالة تفصيلية حول معايير الحجر الزراعي وتعبئة كراتين البرتقال ورص البالتات لتصدير الموالح والبطاطس لروسيا وأوروبا والصين.",
  date: "2026-06-18",
  author: "إدارة اللوجستيات الزراعية - شركة النجمة",
  readTime: "4 دقائق",
  image: "/images/articles/exporting-citrus-agricultural-products.webp",
  category: "تصدير زراعي وموالح",
  keywords: ["تصدير البرتقال المصري", "محطات فرز وتعبئة الموالح", "حاوية مبردة للتصدير", "الحجر الزراعي المصري", "معالجة باردة للصين", "بالتات تصدير موالح", "طبالي خشب للزراعة", "بالتات فرز وتعبئة برتقال", "تصدير ليمون مصر"],
  toc: [
    { title: "ريادة مصر في تصدير الموالح", target: "#citrus-leadership" },
    { title: "عملية الفرز والتعبئة الهندسية", target: "#sorting-packing" },
    { title: "لوجستيات الشحن المبرد والاشتراطات", target: "#reefer-logistics" }
  ],
  content: `
    <div class="space-y-6 text-right leading-relaxed text-gray-200">
      <section class="border-r-4 border-secondary pr-4 bg-muted/20 p-4 rounded-l-lg">
        <h2 id="citrus-leadership" class="text-xl font-bold text-accent mb-2">تصدير الموالح والحاصلات الزراعية في مصر</h2>
        <p class="text-sm text-gray-300">
          تتبوأ جمهورية مصر العربية مركزاً ريادياً عالمياً في تصدير الحاصلات الزراعية، وبشكل خاص الموالح (البرتقال الصيفي والشتوي)، حيث تسجل كميات التصدير السنوية أرقاماً قياسية تتجاوز 1.3 مليون طن من الحمضيات إلى الأسواق الأوروبية، والروسية، والصينية، والخليجية. 
          تخضع هذه الصادرات لإشراف صارم من الحجر الزراعي المصري للتأكد من امتثالها للمتطلبات الصحية العالمية ومعيار <strong>ISPM 15</strong> لتعقيم البالتات الخشبية.
        </p>
      </section>

      <section>
        <h2 id="sorting-packing" class="text-xl font-bold text-white border-b border-border pb-1">عملية الفرز والترتيب والتعبئة</h2>
        <p class="text-sm text-gray-300">
          داخل محطات التعبئة المرخصة والمفرزة، يتم غسيل وتطهير وتشميع ثمار البرتقال، وتمريرها عبر أجهزة المعايرة الرقمية التي تقسمها لمقاسات تتراوح بين 30 إلى 113 حبة للكرتونة. 
          تعبأ الثمار في كراتين مخصصة بوزن 15 كجم أو 8 كجم، ويتم رصها وتجميعها بدقة متناهية على بالتات التصدير الخشبية المعالجة حرارياً (عادة بالتات قياسية 100×120 سم):
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-1.5 mt-2 pr-2">
          <li><strong>كراتين 15 كجم:</strong> تُرص 80 كرتونة متداخلة تماماً على بالتة تصدير واحدة.</li>
          <li><strong>كراتين 8 كجم:</strong> تُرص 150 كرتونة على البالتة الواحدة.</li>
        </ul>
      </section>

      <section>
        <h2 id="reefer-logistics" class="text-xl font-bold text-white border-b border-border pb-1">لوجستيات الشحن المبرد واشتراطات المعالجة الباردة</h2>
        <p class="text-sm text-gray-300">
          تُنقل البالتات المحملة بالبرتقال في حاويات مبردة (Reefer Containers) سعة 40 قدماً، والتي تتسع بدقة لـ <strong>20 بالتة قياسية</strong>، بإجمالي شحنة صافية يبلغ 24 طناً. 
          تضمن هذه التهيئة تدفق الهواء البارد بشكل متساوي لمنع تلف الثمار. 
          وتشترط بعض الدول كالصين تطبيق <strong>المعالجة الباردة (Cold Treatment)</strong>، وهي خفض درجة حرارة الثمار لدرجة الصفر المئوي لمدة محددة خلال الرحلة لإبادة أي يرقات حشرية، مع توثيق ذلك بحساسات قياس الحرارة المدمجة.
        </p>
      </section>
    </div>
  `
};
