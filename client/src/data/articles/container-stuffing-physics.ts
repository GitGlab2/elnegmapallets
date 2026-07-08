import { Article } from "../articles-types";

export const containerStuffingPhysicsArticle: Article = {
  slug: "container-stuffing-physics",
  title: "فيزياء شحن الحاويات: السعة الاستيعابية للبالتات في حاويات 20 و 40 قدم",
  description: "الهندسة الفراغية لحساب السعة القصوى للبالتات الأوروبية والقياسية داخل الحاويات البحرية والشاحنات لتقليص المساحات الميتة.",
  date: "2026-06-05",
  author: "إدارة التخطيط اللوجستي - شركة النجمة",
  readTime: "4 دقائق",
  image: "/images/factory-image.webp",
  category: "لوجستيات النقل البحري",
  keywords: ["سعة حاوية 20 قدم بالبالتات", "حاوية 40 قدم كم بالتة يورو", "حساب السعة الاستيعابية للحاوية", "الوزن الأقصى للحاوية", "المساحة الميتة في الحاويات"],
  toc: [
    { title: "سعة مقطورات الشحن البري الأوروبية", target: "#road-trailers" },
    { title: "سعة الحاويات البحرية 20 قدم و 40 قدم", target: "#sea-containers" },
    { title: "التحسين الحجمي والوزن الإجمالي", target: "#load-optimization" }
  ],
  content: `
    <div class="space-y-6 text-right leading-relaxed text-gray-200">
      <section class="border-r-4 border-secondary pr-4 bg-muted/20 p-4 rounded-l-lg">
        <h2 id="road-trailers" class="text-xl font-bold text-accent mb-2">1. مقطورات الشحن البري الأوروبية</h2>
        <p class="text-sm text-gray-300">
          تتميز الشاحنات البرية الأوروبية القياسية بطول داخلي 13.6 متر وعرض داخلي 2.40 متر. 
          بما أن طول البالتة الأوروبية (1200 مم) يمثل بالضبط نصف عرض المقطورة، يتم رص منصتين عرضياً بشكل متراص تماماً لمنع الحركة الجانبية. 
          بترتيب متقاطع ومتناوب، تستوعب المقطورة <strong>33 بالتة أوروبية بالضبط</strong> في طبقة واحدة، مما يحقق استغلالاً حجمياً بنسبة 100%.
        </p>
      </section>

      <section>
        <h2 id="sea-containers" class="text-xl font-bold text-white border-b border-border pb-1">2. الحاويات البحرية القياسية (20 قدم و 40 قدم)</h2>
        <p class="text-sm text-gray-300 mb-2">
          تمتلك الحاويات البحرية عرضاً داخلياً يبلغ 2.35 متر (2352 مم). هذا العرض يمنع رص منصتين أوروبيتين بطول 1200 مم بشكل عرضي مباشر (حيث 1200 + 1200 = 2400 مم وهو أكبر من عرض الحاوية). 
          لذلك، تختلف السعات بشكل دقيق بناء على ترتيب الأبعاد:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-1 pr-2">
          <li><strong>حاوية 20 قدماً جافة:</strong> تستوعب 10 إلى 11 بالتة أوروبية (80×120 سم)، أو 9 إلى 10 بالتات قياسية (100×120 سم).</li>
          <li><strong>حاوية 40 قدماً جافة:</strong> تستوعب 23 إلى 24 بالتة أوروبية، أو 20 إلى 21 بالتة قياسية.</li>
          <li><strong>حاوية 40 قدماً High Cube (مرتفعة):</strong> توفر ارتفاعاً إضافياً يسمح بالتكديس المزدوج (Double-Stacking) لرفع السعة إلى الضعف في السلع الخفيفة.</li>
        </ul>
      </section>

      <section>
        <h2 id="load-optimization" class="text-xl font-bold text-white border-b border-border pb-1">3. معادلة الوزن الأقصى والتحسين الحجمي</h2>
        <p class="text-sm text-gray-300">
          لا بد من مراعاة التوازن الهندسي في الشحن؛ فالحاويات المبردة (Reefer Containers) بسبب سماكة العزل الداخلي وقنوات تدفق الهواء تتقلص سعتها الاستيعابية بمقدار بالتة إلى بالتتين مقارنة بالحاويات الجافة. 
          بالإضافة لذلك، الشحنات الكثيفة (مثل السيراميك والرخام) تستنفد الوزن الأقصى الآمن للحاوية (Payload) ببالتات قليلة، بينما الشحنات الخفيفة تمتلئ حجمياً بالكامل دون بلوغ الحد الأقصى للوزن.
        </p>
      </section>
    </div>
  `
};
