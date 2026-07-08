import { Article } from "../articles-types";

export const palletDimensionsStandardsArticle: Article = {
  slug: "pallet-dimensions-standards",
  title: "دليل أبعاد ومقاسات الباليتات القياسية والأوروبية المعتمدة دولياً",
  description: "شرح تفصيلي لأبعاد ومقاسات الباليتات الأوروبية (Euro Pallet) والبالتات القياسية (Standard GMA) وتصنيفات الأيزو ISO 6780 للتداول الدولي.",
  date: "2026-04-12",
  author: "إدارة الدعم الفني - شركة النجمة",
  readTime: "4 دقائق",
  image: "/images/factory-image.webp",
  category: "مقاسات وأبعاد البالتات",
  keywords: ["أبعاد الباليتة الأوروبية", "مقاسات الباليتات القياسية", "بالتة GMA", "أبعاد البالتات الخشبية", "معايير ISO 6780 للبالتات"],
  toc: [
    { title: "البالتة الأوروبية Euro Pallet", target: "#euro-pallet" },
    { title: "البالتة القياسية الأمريكية GMA", target: "#gma-pallet" },
    { title: "المواصفات القياسية لأيزو ISO 6780", target: "#iso-standards" }
  ],
  content: `
    <div class="space-y-6 text-right leading-relaxed text-gray-200">
      <section class="border-r-4 border-secondary pr-4 bg-muted/20 p-4 rounded-l-lg">
        <h2 id="euro-pallet" class="text-xl font-bold text-accent mb-2">أولاً: البالتة الأوروبية (EPAL 1 / EUR 1)</h2>
        <p class="text-sm text-gray-300">
          تبلغ أبعاد البالتة الأوروبية القياسية <strong>1200 مم طولاً × 800 مم عرضاً × 144 مم ارتفاعاً</strong>. 
          تم تصميم هذه الأبعاد بدقة متناهية لتتوافق مع شبكات النقل والسكك الحديدية الأوروبية وأبعاد الشاحنات. 
          تزن البالتة فارغة ما بين 20 إلى 25 كجم، وتتكون من 11 لوحاً خشبياً و9 كتل خشبية (دُكم) متصلة بـ 78 مسماراً فولاذياً حلزونياً.
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-1 mt-2 pr-2">
          <li><strong>الحمل الديناميكي (أثناء الحركة):</strong> 1500 كجم (1.5 طن).</li>
          <li><strong>الحمل الاستاتيكي (التخزين الثابت):</strong> 4000 إلى 5500 كجم.</li>
          <li><strong>حمل الأرفف المرتفعة:</strong> 1000 كجم كحد أقصى.</li>
        </ul>
      </section>

      <section>
        <h2 id="gma-pallet" class="text-xl font-bold text-white border-b border-border pb-1">ثانياً: البالتة القياسية الأمريكية (GMA)</h2>
        <p class="text-sm text-gray-300">
          تعتمد البالتة القياسية المهيمنة في أمريكا الشمالية والشرق الأوسط على مقاس <strong>1219 مم × 1016 مم (48 × 40 بوصة)</strong>. 
          توفر هذه البالتة مساحة سطحية أكبر بنسبة 25% مقارنة بالبالتة الأوروبية (1.23 متر مربع مقابل 0.96 متر مربع)، مما يمنح استقراراً فائقاً للأحمال الضخمة والصناعية العامة.
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-1 mt-2 pr-2">
          <li><strong>الحمل الديناميكي:</strong> 1134 إلى 2087 كجم.</li>
          <li><strong>الحمل الاستاتيكي:</strong> 2268 إلى 3402 كجم.</li>
        </ul>
      </section>

      <section>
        <h2 id="iso-standards" class="text-xl font-bold text-white border-b border-border pb-1">ثالثاً: التصنيفات الستة المعتمدة لدى المنظمة الدولية للأيزو (ISO 6780)</h2>
        <p class="text-sm text-gray-300 mb-3">
          لضمان تكامل سلاسل الشحن متعدد الوسائط، يعترف المعيار الدولي (ISO 6780) بستة أبعاد رئيسية لمنصات التحميل حول العالم:
        </p>
        <div class="overflow-x-auto border border-border rounded-xl">
          <table class="w-full text-right text-xs text-gray-300">
            <thead class="bg-primary/40 text-white border-b border-border">
              <tr>
                <th class="px-4 py-2 font-bold">التصنيف</th>
                <th class="px-4 py-2 font-bold">الأبعاد (مم)</th>
                <th class="px-4 py-2 font-bold">المنطقة أو الاستخدام الأساسي</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border/50">
              <tr class="hover:bg-muted/30">
                <td class="px-4 py-2 font-bold text-accent">ISO 1</td>
                <td class="px-4 py-2">1219 × 1016</td>
                <td class="px-4 py-2">أمريكا الشمالية (GMA)</td>
              </tr>
              <tr class="hover:bg-muted/30">
                <td class="px-4 py-2 font-bold text-accent">ISO 2</td>
                <td class="px-4 py-2">1200 × 1000</td>
                <td class="px-4 py-2">أوروبا، آسيا، وحاويات الشحن البحري القياسية</td>
              </tr>
              <tr class="hover:bg-muted/30">
                <td class="px-4 py-2 font-bold text-accent">ISO 3 (EUR)</td>
                <td class="px-4 py-2">1200 × 800</td>
                <td class="px-4 py-2">أوروبا (EPAL)</td>
              </tr>
              <tr class="hover:bg-muted/30">
                <td class="px-4 py-2 font-bold text-accent">ISO 4</td>
                <td class="px-4 py-2">1140 × 1140</td>
                <td class="px-4 py-2">أستراليا وشحنات الكيماويات المتخصصة</td>
              </tr>
              <tr class="hover:bg-muted/30">
                <td class="px-4 py-2 font-bold text-accent">ISO 5</td>
                <td class="px-4 py-2">1100 × 1100</td>
                <td class="px-4 py-2">منطقة آسيا والمحيط الهادئ والتداول الداخلي</td>
              </tr>
              <tr class="hover:bg-muted/30">
                <td class="px-4 py-2 font-bold text-accent">ISO 6</td>
                <td class="px-4 py-2">1067 × 1067</td>
                <td class="px-4 py-2">استخدامات لوجستية دولية متنوعة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
};
