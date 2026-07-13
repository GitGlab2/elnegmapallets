import { Article } from "../articles-types";

export const ispm15PhytosanitaryStandardArticle: Article = {
  slug: "ispm15-phytosanitary-standard",
  title: "معيار الصحة النباتية الدولي ISPM 15 للبالتات الخشبية للتصدير",
  description: "كل ما تحتاج معرفته عن معيار الصحة النباتية الدولي ISPM 15 للعبور الآمن للبالتات الخشبية والتعبئة عبر الجمارك العالمية دون تأخير.",
  date: "2026-04-28",
  author: "إدارة الجودة - شركة النجمة",
  readTime: "3 دقائق",
  image: "/images/articles/ispm15-phytosanitary-standard.webp",
  category: "معايير الصحة النباتية",
  categoryId: "compliance",
  keywords: ["معيار ISPM 15", "ختم الصحة النباتية", "ختم IPPC للبالتات", "تبخير ومعالجة خشب التصدير", "الحجر الزراعي للبالتات", "شهادة تبخير البالتات", "القمحة على البالتات", "ختم وزارة الزراعة للتصدير", "ISPM-15 مصر"],
  toc: [
    { title: "ما هو معيار ISPM 15؟", target: "#what-is-ispm15" },
    { title: "أهمية الختم الدولي ومكوناته", target: "#ippc-stamp" },
    { title: "المواد المعفاة من المعيار", target: "#exemptions" }
  ],
  content: `
    <div class="space-y-6 text-right leading-relaxed text-gray-200">
      <section class="border-r-4 border-secondary pr-4 bg-muted/20 p-4 rounded-l-lg">
        <h2 id="what-is-ispm15" class="text-xl font-bold text-accent mb-2">ما هو معيار ISPM 15 ولماذا تم تشريعه؟</h2>
        <p class="text-sm text-gray-300">
          يمثل الخشب الخام بيئة خصبة وحاضنة لانتقال الآفات الحشرية الضارة (مثل خنفساء اللحاء والديدان الخيطية) بين القارات. 
          لمكافحة هذا الخطر البيولوجي، نفذت الاتفاقية الدولية لوقاية النباتات (IPPC) المعيار الدولي لتدابير الصحة النباتية رقم 15 
          (<strong>ISPM 15</strong>). 
        </p>
        <p class="text-sm text-gray-300 mt-2">
          يفرض هذا المعيار معالجة جميع مواد التعبئة الخشبية المصمتة (التي يتجاوز سمكها 6 مم) وتطهيرها بشكل صارم قبل السماح بعبورها الحدود الجمركية لأكثر من 180 دولة حول العالم. 
          عدم الامتثال لهذا المعيار يعرض الشحنات للرفض الفوري أو الإعدام في الموانئ الدولية على نفقة المصدر.
        </p>
      </section>

      <section>
        <h2 id="ippc-stamp" class="text-xl font-bold text-white border-b border-border pb-1">مكونات الختم الدولي للمعالجة والتبخير (ختم القمح)</h2>
        <p class="text-sm text-gray-300 mb-2">
          تُمهر البالتات الخشبية المعالجة بختم دولي واضح وحراري باللون الأسود أو البني على جانبين متقابلين، ويحتوي الختم على أربعة رموز رئيسية للتتبع الجمركي:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-1.5 pr-2">
          <li><strong>رمز الدولة (بنظام ISO):</strong> مثل (EG) لجمهورية مصر العربية.</li>
          <li><strong>رقم تسجيل المنشأة:</strong> كود فريد يمنحه الحجر الزراعي للمصنع المعتمد لضمان التتبع العكسي.</li>
          <li><strong>رمز طريقة المعالجة:</strong> مثل (HT) للمعالجة بالتبخير الحراري أو (MB) للتبخير الكيميائي.</li>
          <li><strong>رمز خلو الخشب من اللحاء (DB):</strong> تأكيداً على تقشير الخشب وإزالة اللحاء لمنع استقرار الآفات مجدداً.</li>
        </ul>
      </section>

      <section>
        <h2 id="exemptions" class="text-xl font-bold text-white border-b border-border pb-1">المواد والمشتقات المعفاة تماماً من معيار ISPM 15</h2>
        <p class="text-sm text-gray-300">
          تُعفى جميع مواد التعبئة الخشبية المصنعة (المشتقة) من متطلبات المعيار نتيجة تعرضها لحرارة وضغوط ومواد لاصقة كيميائية أثناء الإنتاج تقضي على الآفات تلقائياً. وتشمل هذه المواد المعفاة:
          أخشاب الأبلاكاش (Plywood)، الألواح المضغوطة (MDF و OSB)، الكرتون المضلع، والمنصات الورقية أو المعدنية التي لا تصنف كبيئة حاضنة للآفات.
        </p>
      </section>
    </div>
  `
};
