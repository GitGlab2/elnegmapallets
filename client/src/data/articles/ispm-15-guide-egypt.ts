import { Article } from "../articles-types";

export const ispm15GuideEgyptArticle: Article = {
  slug: "ispm-15-guide-egypt",
  title: "دليل معيار ISPM-15 الشامل في مصر: كل ما يجب معرفته قبل تصدير البالتات الخشبية",
  description: "الدليل المرجعي الكامل لمعيار ISPM-15 الدولي للصحة النباتية في مصر. يشرح الاشتراطات الفنية، إجراءات الحجر الزراعي، ختم IPPC، والمستندات المطلوبة لتصدير التعبئة الخشبية دون رفض جمركي.",
  date: "2024-09-15",
  author: "",
  readTime: "7 دقائق",
  image: "/images/articles/heat-treatment-vs-methyl-bromide.webp",
  category: "الامتثال الدولي ومعايير التصدير",
  categoryId: "compliance",
  keywords: [
    "ISPM-15 مصر",
    "معيار ISPM 15",
    "ختم IPPC بالتات خشب",
    "شهادة تبخير بالتات",
    "متطلبات التصدير الحجر الزراعي",
    "معيار الصحة النباتية الدولي",
    "تصدير بالتات خشبية من مصر",
    "ISPM 15 compliant pallets Egypt"
  ],
  toc: [
    { title: "ما هو معيار ISPM-15 ولماذا فُرض دولياً؟", target: "#what-is-ispm15" },
    { title: "ما هي التعبئة الخشبية الخاضعة للمعيار؟", target: "#covered-materials" },
    { title: "طرق المعالجة المعتمدة وفق ISPM-15", target: "#approved-treatments" },
    { title: "ختم IPPC: مكوناته وكيفية قراءته", target: "#ippc-mark" },
    { title: "إجراءات الحصول على شهادة ISPM-15 في مصر", target: "#egypt-procedures" },
    { title: "الدول التي تُلزم بتطبيق المعيار", target: "#enforcing-countries" },
    { title: "عواقب عدم الامتثال عند التصدير", target: "#non-compliance" },
    { title: "الأسئلة الشائعة حول ISPM-15", target: "#faq" }
  ],
  content: `
    <div class="space-y-6 text-right leading-relaxed text-gray-200">
      <section class="border-r-4 border-secondary pr-4 bg-muted/20 p-4 rounded-l-lg">
        <h2 id="what-is-ispm15" class="text-xl font-bold text-accent mb-2">ما هو معيار ISPM-15 ولماذا فُرض دولياً؟</h2>
        <p class="text-sm text-gray-300">
          معيار <strong>ISPM-15</strong> (International Standards for Phytosanitary Measures No. 15) هو الإطار التنظيمي الدولي الذي أصدرته <strong>الاتفاقية الدولية لوقاية النباتات (IPPC)</strong> التابعة لمنظمة الأغذية والزراعة (FAO) لتنظيم معالجة مواد التعبئة الخشبية المستخدمة في التجارة الدولية. جاء هذا المعيار استجابةً لحوادث انتشار آفات حشرية مدمرة عبر القارات نتيجة شحنات خشبية غير معالجة، أبرزها خنفساء الصنوبر الآسيوية طويلة القرون (ALB) التي كلّفت الولايات المتحدة مليارات الدولارات في مكافحتها.
        </p>
        <p class="text-sm text-gray-300 mt-2">
          يهدف المعيار إلى القضاء على أي كائنات حية ضارة (حشرات، يرقات، نيماتودا، فطريات) داخل الأخشاب المستخدمة في البالتات والصناديق والإطارات الخشبية قبل عبورها للحدود الدولية، مما يحمي الغابات والنظم البيئية في الدول المستوردة.
        </p>
      </section>

      <section>
        <h2 id="covered-materials" class="text-xl font-bold text-white border-b border-border pb-1">ما هي التعبئة الخشبية الخاضعة للمعيار؟</h2>
        <p class="text-sm text-gray-300 mt-2">
          يُطبق معيار ISPM-15 على جميع مواد التعبئة الخشبية المصنوعة من الخشب الخام (الصلب) بسمك يزيد عن 6 مم، وتشمل:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-2 mt-2 pr-2">
          <li><strong>البالتات الخشبية (Pallets):</strong> بجميع أنواعها — دكم (Block)، عوارض (Stringer)، ذات مدخلين أو أربعة مداخل.</li>
          <li><strong>الصناديق والأقفاص الخشبية (Crates & Boxes):</strong> المستخدمة في تغليف المعدات والآلات والمنتجات الثقيلة.</li>
          <li><strong>الكتل والقوائم الخشبية (Dunnage):</strong> الأخشاب المستخدمة لتثبيت البضائع داخل الحاويات.</li>
          <li><strong>الأطواق والإطارات الخشبية (Collars & Frames):</strong> الملحقات الخشبية المضافة فوق البالتات.</li>
        </ul>
        <div class="bg-muted/30 border border-border/40 rounded-lg p-3 mt-3">
          <p class="text-xs text-gray-400">
            <strong>ملاحظة مهمة:</strong> الأخشاب المصنعة مثل الخشب الحبيبي (Particleboard)، الأبلكاش (Plywood)، والخشب المضغوط (OSB) <strong>لا تخضع</strong> للمعيار لأن عمليات التصنيع ذاتها تقضي على الآفات.
          </p>
        </div>
      </section>

      <section>
        <h2 id="approved-treatments" class="text-xl font-bold text-white border-b border-border pb-1">طرق المعالجة المعتمدة وفق ISPM-15</h2>
        <p class="text-sm text-gray-300 mt-2">
          يعتمد المعيار حالياً طريقتين رئيسيتين لمعالجة التعبئة الخشبية:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div class="bg-muted/20 border border-border/30 rounded-lg p-4">
            <h3 class="text-sm font-bold text-secondary mb-2">المعالجة الحرارية (HT)</h3>
            <ul class="list-disc list-inside text-xs text-gray-300 space-y-1">
              <li>تسخين قلب الخشب إلى <strong>56°C</strong> لمدة <strong>30 دقيقة</strong> متواصلة</li>
              <li>آمنة بيئياً بنسبة 100% — لا مواد كيميائية</li>
              <li>مقبولة في <strong>جميع</strong> الدول بلا استثناء</li>
              <li>الرمز الدولي: <strong>HT</strong></li>
            </ul>
          </div>
          <div class="bg-muted/20 border border-border/30 rounded-lg p-4">
            <h3 class="text-sm font-bold text-secondary mb-2">التبخير بغاز بروميد الميثيل (MB)</h3>
            <ul class="list-disc list-inside text-xs text-gray-300 space-y-1">
              <li>تعريض الخشب لغاز CH₃Br بتركيز ومدة محددة حسب درجة الحرارة</li>
              <li>فعالة لكنها <strong>محظورة</strong> في الاتحاد الأوروبي وكندا وأستراليا ودول أخرى</li>
              <li>في طور الإلغاء التدريجي عالمياً (بروتوكول مونتريال)</li>
              <li>الرمز الدولي: <strong>MB</strong></li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-300 mt-3">
          تُنفذ كلتا العمليتين في محطات معالجة مرخصة ومعتمدة من الجهة الرقابية الوطنية (وزارة الزراعة في حالة مصر). يُنصح دائماً باختيار المعالجة الحرارية (HT) لضمان قبول الشحنة في جميع الأسواق العالمية دون قيود.
        </p>
      </section>

      <section>
        <h2 id="ippc-mark" class="text-xl font-bold text-white border-b border-border pb-1">ختم IPPC: مكوناته وكيفية قراءته</h2>
        <p class="text-sm text-gray-300 mt-2">
          بعد اكتمال المعالجة، تُختم البالتة بعلامة <strong>IPPC</strong> الدولية (رمز القمحة) التي تمثل جواز مرور التعبئة الخشبية عبر الحدود. يتكون الختم من العناصر التالية:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-2 mt-2 pr-2">
          <li><strong>رمز القمحة (Wheat Symbol):</strong> الشعار الرسمي للاتفاقية الدولية لوقاية النباتات — يُثبت أن المعالجة تمت وفق المعايير الدولية.</li>
          <li><strong>رمز الدولة (Country Code):</strong> الحرفان الدوليان للدولة المُصنّعة. في حالة مصر: <strong>EG</strong>.</li>
          <li><strong>رقم المنشأة (Producer Number):</strong> رقم تسجيل فريد يصدره الحجر الزراعي المصري لكل منشأة معالجة معتمدة، ويُتيح التتبع الكامل.</li>
          <li><strong>رمز طريقة المعالجة:</strong> إما <strong>HT</strong> (معالجة حرارية) أو <strong>MB</strong> (تبخير بغاز بروميد الميثيل).</li>
        </ul>
        <div class="bg-muted/30 border border-border/40 rounded-lg p-3 mt-3 text-center">
          <p class="text-xs text-gray-400 font-mono">
            [رمز القمحة] &nbsp; EG - XXXX &nbsp; HT
          </p>
          <p class="text-[10px] text-gray-500 mt-1">مثال توضيحي لختم IPPC على بالتة مصرية معالجة حرارياً</p>
        </div>
      </section>

      <section>
        <h2 id="egypt-procedures" class="text-xl font-bold text-white border-b border-border pb-1">إجراءات الحصول على شهادة ISPM-15 في مصر</h2>
        <p class="text-sm text-gray-300 mt-2">
          تمر عملية الحصول على الشهادة والختم الدولي في مصر بالمراحل التالية:
        </p>
        <ol class="list-decimal list-inside text-xs text-gray-300 space-y-3 mt-3 pr-2">
          <li>
            <strong>تصنيع البالتات:</strong> يتم تصنيع البالتات من أخشاب خام (صنوبر، زان، أو أنواع أخرى) وفق المقاسات والمواصفات المطلوبة.
          </li>
          <li>
            <strong>إرسال الشحنة لمحطة المعالجة المعتمدة:</strong> تُنقل البالتات إلى محطة معالجة حرارية (HT) أو تبخير (MB) مُسجلة لدى الإدارة المركزية للحجر الزراعي المصري.
          </li>
          <li>
            <strong>إجراء المعالجة تحت إشراف فني:</strong> تتم المعالجة مع تسجيل إلكتروني لدرجات الحرارة والمدة الزمنية بواسطة مستشعرات معايرة.
          </li>
          <li>
            <strong>الوسم بختم IPPC:</strong> بعد اكتمال المعالجة الناجحة، يُحرق أو يُطبع ختم IPPC على كل بالتة بشكل واضح ودائم.
          </li>
          <li>
            <strong>إصدار شهادة التطهير الرسمية:</strong> تُصدر شهادة موثقة من الحجر الزراعي المصري تتضمن بيانات الشحنة ونتائج المعالجة، وتُرفق مع مستندات التصدير.
          </li>
        </ol>
        <p class="text-sm text-gray-300 mt-3">
          يتوفر في السوق المصري عدد من محطات المعالجة المعتمدة في المناطق الصناعية الرئيسية (العاشر من رمضان، السادس من أكتوبر، بني سويف، الإسكندرية) مما يُسهّل لوجستياً عملية المعالجة قبل الشحن.
        </p>
      </section>

      <section>
        <h2 id="enforcing-countries" class="text-xl font-bold text-white border-b border-border pb-1">الدول التي تُلزم بتطبيق المعيار</h2>
        <p class="text-sm text-gray-300 mt-2">
          يُطبق معيار ISPM-15 في أكثر من <strong>180 دولة</strong> حول العالم. تتفاوت صرامة التطبيق بين الدول، لكن الأسواق الرئيسية التالية تتميز بتشديد ملحوظ في الرقابة:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-2 mt-2 pr-2">
          <li><strong>الاتحاد الأوروبي (EU):</strong> يقبل HT فقط — MB محظور تماماً منذ 2010.</li>
          <li><strong>الولايات المتحدة وكندا:</strong> يقبلان HT و MB مع تشديد الرقابة على MB تدريجياً.</li>
          <li><strong>أستراليا ونيوزيلندا:</strong> من أكثر الدول صرامة — يُشترط HT فقط مع فحص إضافي عند الميناء.</li>
          <li><strong>الصين واليابان وكوريا:</strong> يقبلون HT و MB مع إجراءات فحص عشوائي مكثفة.</li>
          <li><strong>دول الخليج العربي:</strong> تطبق المعيار في الموانئ الرئيسية مع تساهل نسبي في بعض المنافذ البرية.</li>
        </ul>
      </section>

      <section>
        <h2 id="non-compliance" class="text-xl font-bold text-white border-b border-border pb-1">عواقب عدم الامتثال عند التصدير</h2>
        <p class="text-sm text-gray-300 mt-2">
          عدم الالتزام بمعيار ISPM-15 يعرض المُصدّر لعواقب تجارية ومالية جسيمة تشمل:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-2 mt-2 pr-2">
          <li><strong>رفض الشحنة بالكامل:</strong> ترفض سلطات الجمارك والحجر الزراعي في دولة الوصول إدخال البضاعة وتأمر بإعادتها على نفقة المُصدّر.</li>
          <li><strong>إعادة المعالجة الإجبارية:</strong> في بعض الحالات يُسمح بمعالجة الشحنة في ميناء الوصول، لكن بتكلفة مضاعفة وتأخير يصل لأسابيع.</li>
          <li><strong>إتلاف البضاعة:</strong> قد تأمر السلطات بإتلاف التعبئة الخشبية بالكامل إذا اكتُشفت آفات حية.</li>
          <li><strong>غرامات مالية:</strong> تفرض بعض الدول (خاصة أستراليا والولايات المتحدة) غرامات مالية كبيرة على المخالفين تصل لعشرات الآلاف من الدولارات.</li>
          <li><strong>تشويه السمعة التجارية:</strong> يُسجل المخالف في قوائم الرقابة المشددة مما يعني فحص جميع شحناته المستقبلية بشكل إلزامي.</li>
        </ul>
      </section>

      <section>
        <h2 id="faq" class="text-xl font-bold text-white border-b border-border pb-1">الأسئلة الشائعة حول ISPM-15</h2>
        <div class="space-y-4 mt-3">
          <div class="bg-muted/20 border border-border/30 rounded-lg p-3">
            <p class="text-sm font-bold text-white">هل تحتاج البالتات المستخدمة داخل مصر فقط لمعالجة ISPM-15؟</p>
            <p class="text-xs text-gray-300 mt-1">لا، المعيار مخصص فقط للتعبئة الخشبية التي تعبر الحدود الدولية. البالتات المستخدمة في النقل والتخزين المحلي لا تحتاج هذه المعالجة.</p>
          </div>
          <div class="bg-muted/20 border border-border/30 rounded-lg p-3">
            <p class="text-sm font-bold text-white">كم تستمر صلاحية ختم IPPC؟</p>
            <p class="text-xs text-gray-300 mt-1">لا توجد مدة صلاحية محددة للختم ذاته طالما بقي واضحاً ومقروءاً. لكن إذا تعرضت البالتة لإصلاح أو إعادة تصنيع باستخدام أخشاب غير معالجة، يجب إعادة معالجتها بالكامل والحصول على ختم جديد.</p>
          </div>
          <div class="bg-muted/20 border border-border/30 rounded-lg p-3">
            <p class="text-sm font-bold text-white">ما الفرق بين ختم IPPC وشهادة التبخير؟</p>
            <p class="text-xs text-gray-300 mt-1">ختم IPPC هو العلامة المادية المحفورة أو المطبوعة على البالتة ذاتها وهو الدليل البصري للجمارك. أما شهادة التبخير فهي مستند ورقي رسمي صادر من الحجر الزراعي يُرفق مع أوراق الشحن ويتضمن تفاصيل المعالجة. كلاهما مطلوب للتصدير.</p>
          </div>
          <div class="bg-muted/20 border border-border/30 rounded-lg p-3">
            <p class="text-sm font-bold text-white">هل يمكن استخدام بالتات بلاستيكية بدلاً من الخشبية لتجنب ISPM-15؟</p>
            <p class="text-xs text-gray-300 mt-1">نعم، البالتات البلاستيكية والمعدنية لا تخضع للمعيار. لكن تكلفتها أعلى بكثير وقد لا تناسب جميع التطبيقات، خاصة الشحنات الثقيلة والمنتجات التي تحتاج تهوية طبيعية أثناء النقل.</p>
          </div>
        </div>
      </section>
    </div>
  `
};
