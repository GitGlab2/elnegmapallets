import { Article } from "../articles-types";

export const containerStuffingPhysicsArticle: Article = {
  slug: "container-stuffing-physics",
  title: "فيزياء شحن الحاويات: دليل السعة الاستيعابية وهندسة رص البالتات",
  description: "الدليل الفني الشامل للهندسة الفراغية وتوزيع الأوزان لحساب السعة القصوى للبالتات الخشبية القياسية والأوروبية داخل الحاويات البحرية والشاحنات.",
  date: "2024-11-05",
  author: "",
  readTime: "8 دقائق",
  image: "/images/articles/container-stuffing-physics.webp",
  category: "لوجستيات النقل البحري",
  categoryId: "export",
  keywords: ["سعة حاوية 20 قدم بالبالتات", "حاوية 40 قدم كم بالتة يورو", "حساب السعة الاستيعابية للحاوية", "الوزن الأقصى للحاوية", "المساحة الميتة في الحاويات", "رص البالتات في الحاوية", "تحميل حاوية بالتات خشب", "كم بالتة تسع الحاوية", "تحميل بضائع على البالتات"],
  toc: [
    { title: "أبعاد الحاويات القياسية والمساحات المتاحة", target: "#dimensions-guide" },
    { title: "جدول السعات ومقارنة المنصات الأوروبية والقياسية", target: "#pallet-capacities" },
    { title: "أنماط الرص الميكانيكي (أنماط التوزيع الفراغي)", target: "#stuffing-patterns" },
    { title: "فيزياء التكديس المزدوج وضوابط الارتفاع", target: "#double-stacking" },
    { title: "توزيع الوزن وسلامة الاتزان الديناميكي", target: "#weight-distribution" },
    { title: "تأمين الشحنة وسد الفراغات اللوجستية", target: "#cargo-securing" }
  ],
  content: `
    <div class="space-y-6 text-right leading-relaxed text-gray-200">
      <section class="border-r-4 border-secondary pr-4 bg-muted/20 p-4 rounded-l-lg">
        <h2 id="dimensions-guide" class="text-xl font-bold text-accent mb-2">1. أبعاد الحاويات القياسية والمساحات المتاحة داخلياً</h2>
        <p class="text-sm text-gray-300">
          يعتمد النجاح اللوجستي لأي عملية تصدير على الاستغلال الأمثل للأبعاد الداخلية للحاوية. بالرغم من أن الحاويات تسمى بأطوالها الخارجية (20 قدم و 40 قدم)، إلا أن الأبعاد الداخلية الفعلية هي المقياس الحقيقي لسعة التحميل:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-2 mt-2 pr-2">
          <li><strong>الحاوية القياسية 20 قدماً (20' GP):</strong> الطول الداخلي: 5.90 متر (5898 مم) | العرض الداخلي: 2.35 متر (2352 مم) | الارتفاع الداخلي: 2.39 متر (2393 مم) | عرض فتحة الباب: 2.34 متر.</li>
          <li><strong>الحاوية القياسية 40 قدماً (40' GP):</strong> الطول الداخلي: 12.03 متر (12032 مم) | العرض الداخلي: 2.35 متر (2352 مم) | الارتفاع الداخلي: 2.39 متر (2393 مم).</li>
          <li><strong>الحاوية مرتفعة السقف 40 قدماً High Cube (40' HC):</strong> الطول الداخلي: 12.03 متر | العرض الداخلي: 2.35 متر | الارتفاع الداخلي: 2.70 متر (2698 مم) - توفر 30 سم إضافية من الارتفاع وهي حاسمة للتكديس المزدوج.</li>
          <li><strong>الحاوية المبردة 40 قدماً (40' Reefer):</strong> الطول الداخلي: 11.58 متر (11583 مم) | العرض الداخلي: 2.29 متر (2286 مم) | الارتفاع الداخلي: 2.25 متر (2250 مم). تتقلص مساحتها بسبب العزل الحراري السميك ونظام تدفق الهواء الأرضي (T-Floor).</li>
        </ul>
        <div class="my-6 text-center">
          <img src="/images/articles/dry-vs-reefer.webp" alt="المقارنة الهندسية بين الحاوية الجافة والحاوية المبردة" class="mx-auto rounded-xl border-2 border-secondary/20 shadow-lg max-w-full lg:max-w-xl" />
          <p class="text-xs text-muted-foreground mt-2">الشكل 1: المقارنة الهندسية بين الحاوية الجافة القياسية (Dry) والحاوية المبردة المعزولة (Reefer) وأنظمة تدفق الهواء</p>
        </div>
      </section>

      <section>
        <h2 id="pallet-capacities" class="text-xl font-bold text-white border-b border-border pb-1">2. جدول السعات ومقارنة المنصات الأوروبية والقياسية</h2>
        <p class="text-sm text-gray-300 mb-4">
          يختلف عدد البالتات التي يمكن شحنها في الطبقة الواحدة (Floor Layer) بناءً على مقاسات البالتة ونوع الحاوية. يوضح الجدول التالي السعات القصوى الفعلية:
        </p>
        <div class="overflow-x-auto my-4">
          <table class="w-full text-right text-xs text-gray-300 border-collapse border border-border/40">
            <thead>
              <tr class="bg-muted/40 text-white border-b border-border/40">
                <th class="p-2 border-r border-border/40 font-bold">نوع الحاوية</th>
                <th class="p-2 border-r border-border/40 font-bold">البالتات الأوروبية (80×120 سم)</th>
                <th class="p-2 border-r border-border/40 font-bold">البالتات القياسية / GMA (100×120 سم)</th>
                <th class="p-2 font-bold">ملاحظات تشغيلية</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border/20 hover:bg-white/5">
                <td class="p-2 border-r border-border/40 font-semibold text-accent">20 قدم قياسية</td>
                <td class="p-2 border-r border-border/40">11 بالتة (رص متقاطع)</td>
                <td class="p-2 border-r border-border/40">10 بالتات (رص طولي)</td>
                <td class="p-2">أقصى وزن حمولة آمن يتراوح بين 21 - 22 طن.</td>
              </tr>
              <tr class="border-b border-border/20 hover:bg-white/5">
                <td class="p-2 border-r border-border/40 font-semibold text-accent">40 قدم قياسية</td>
                <td class="p-2 border-r border-border/40">24-25 بالتة</td>
                <td class="p-2 border-r border-border/40">21 بالتة</td>
                <td class="p-2">استغلال مثالي للسلع ذات الكثافة المتوسطة.</td>
              </tr>
              <tr class="border-b border-border/20 hover:bg-white/5">
                <td class="p-2 border-r border-border/40 font-semibold text-accent">40 قدم High Cube</td>
                <td class="p-2 border-r border-border/40">25 بالتة (طبقة واحدة)</td>
                <td class="p-2 border-r border-border/40">21 بالتة (طبقة واحدة)</td>
                <td class="p-2">تسمح بالتكديس المزدوج ليتضاعف العدد للسلع الخفيفة.</td>
              </tr>
              <tr class="hover:bg-white/5">
                <td class="p-2 border-r border-border/40 font-semibold text-accent">40 قدم مبردة (Reefer)</td>
                <td class="p-2 border-r border-border/40">22-23 بالتة</td>
                <td class="p-2 border-r border-border/40">20 بالتة</td>
                <td class="p-2">يجب ترك مسافة 12 سم على الأقل في السقف لتدفق الهواء البارد.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="stuffing-patterns" class="text-xl font-bold text-white border-b border-border pb-1">3. أنماط الرص الميكانيكي (أنماط التوزيع الفراغي)</h2>
        <p class="text-sm text-gray-300">
          نظراً لأن عرض الحاوية داخلياً هو 2.35 متر، فإنه يمنع وضع بالتتين أوروبيتين بطول 1.20 متر جنباً إلى جنب بشكل عرضي مباشر (1.20 + 1.20 = 2.40 متر وهو أكبر من عرض الحاوية بـ 5 سم). للتغلب على هذه المشكلة الهندسية، يلجأ مخططو اللوجستيات للأنماط التالية:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-2 mt-2 pr-2">
          <li><strong>النمط الطولي (Inline Pattern):</strong> يتم رص جميع البالتات بحيث يكون اتجاه دخول الرافعة الشوكية (الضلع 120 سم) موازياً لطول الحاوية. يستوعب هذا النمط 10 بالتات فقط في حاوية 20 قدم ويترك فراغاً غير مستغل.</li>
          <li><strong>نمط الطاحونة المتقاطع (Pinwheel Layout):</strong> يتم بالتناوب وضع بالتة بالطول وبالتة بالعرض. هذا التوزيع الهندسي المتقاطع يستغل الـ 5 سم المفقودة ويسمح بزيادة سعة الحاوية الـ 20 قدماً إلى <strong>11 بالتة أوروبية</strong> بدلاً من 10، ويقود لزيادة سعة الحاوية الـ 40 قدماً إلى **24 أو 25 بالتة**.</li>
        </ul>
        <div class="my-6 text-center">
          <img src="/images/articles/pallet-loading-layout.webp" alt="تخطيط رص وتوزيع البالتات الخشبية داخل الحاوية" class="mx-auto rounded-xl border-2 border-secondary/20 shadow-lg max-w-full lg:max-w-xl" />
          <p class="text-xs text-muted-foreground mt-2">الشكل 2: تخطيط هندسي لتوزيع البالتات الخشبية لتقليص المساحات الميتة في الحاويات البحرية</p>
        </div>
      </section>

      <section>
        <h2 id="double-stacking" class="text-xl font-bold text-white border-b border-border pb-1">4. فيزياء التكديس المزدوج (Double-Stacking) وضوابط الارتفاع</h2>
        <p class="text-sm text-gray-300">
          في حال البضائع الخفيفة أو المتوسطة الوزن (مثل العبوات البلاستيكية الفارغة أو الكرتون المضلع)، يفضل رص بالتتين فوق بعضهما لتقليل تكلفة الشحن للنصف. لتطبيق التكديس المزدوج بأمان، يجب تطبيق المعادلة الفيزيائية للارتفاع المسموح:
        </p>
        <div class="bg-muted/30 p-4 rounded-xl text-center font-mono my-3 text-accent text-sm">
          إجمالي ارتفاع التحميل الآمن (H_max) = ارتفاع الحاوية الداخلي - 15 سم (خلوص الأمان)
        </div>
        <p class="text-sm text-gray-300">
          في حاويات الـ 40 High Cube، يبلغ الارتفاع الداخلي 2.70 متر (2700 مم). 
          إذا كان ارتفاع البالتة الخشبية شاملة البضائع يبلغ 1.25 متر، فإن وضع بالتتين فوق بعضهما يعطي ارتفاعاً إجمالياً قدره 2.50 متر (2500 مم). 
          بإضافة خلوص الأمان (15 سم لتفادي الاصطدام بسقف الباب أثناء التحميل)، نجد أن 2.65 متر أقل من الارتفاع الأقصى للحاوية، وبالتالي العملية آمنة تماماً ومجدية اقتصادياً.
        </p>
        <p class="text-xs text-red-400 mt-2">
          ⚠️ تنبيه: لا ينصح إطلاقاً بالتكديس المزدوج للمواد الكيميائية الخطرة، السوائل، أو البضائع القابلة للكسر كالسيراميك والرخام لعدم الإخلال بمركز الجاذبية والتسبب في انهيار الحمولة.
        </p>
      </section>

      <section>
        <h2 id="weight-distribution" class="text-xl font-bold text-white border-b border-border pb-1">5. توزيع الوزن وسلامة الاتزان الديناميكي</h2>
        <p class="text-sm text-gray-300">
          خطأ لوجستي شائع يتمثل في تكديس الأوزان الثقيلة في مقدمة أو مؤخرة الحاوية. يؤدي هذا لتركيز الإجهاد الميكانيكي، مما يعرض أرضية الحاوية للتلف، أو يؤدي لغرامات الوزن المحوري الزائد على المحاور الخلفية للشاحنات أثناء النقل البري في دول الوصول.
        </p>
        <p class="text-sm text-gray-300 mt-2">
          <strong>القاعدة الذهبية لتوزيع الوزن:</strong> يجب أن يقع مركز ثقل الشحنة (Center of Gravity) في مركز الحاوية الهندسي تماماً. 
          في الشحنات الثقيلة للغاية (مثل رخام وجرانيت التصدير)، حيث يتم استهلاك الوزن الأقصى المسموح للحاوية (مثلاً 22 طن) باستخدام 10 بالتات دكم ثقيلة فقط، يتم توزيع البالتات على طول الحاوية الـ 20 قدماً مع تثبيتها في المنتصف وترك فراغات متساوية عند الأطراف والوسط لضمان ثبات وتوازن السفينة والشاحنة.
        </p>
      </section>

      <section>
        <h2 id="cargo-securing" class="text-xl font-bold text-white border-b border-border pb-1">6. تأمين الشحنة وسد الفراغات اللوجستية (Dunnage & Lashing)</h2>
        <p class="text-sm text-gray-300">
          حتى مع الرص الهندسي المتقن، تتبقى فراغات طفيفة تتراوح بين 5 إلى 15 سم بين البالتات. أثناء حركة السفينة في عرض البحر، تؤدي الأمواج لاهتزازات ديناميكية مستمرة تسبب تباعد البالتات واصطدامها ببعضها. لتفادي هذا التلف، نتبع الخطوات التالية للتثبيت:
        </p>
        <ul class="list-disc list-inside text-xs text-gray-300 space-y-2 mt-2 pr-2">
          <li><strong>الوسائد الهوائية (Dunnage Bags):</strong> وسائد هوائية متينة قابلة للنفخ يتم وضعها في الفراغات بين صفوف البالتات وتعبئتها بالهواء المضغوط لتشكل حاجزاً يمتص الصدمات ويمنع الحركة تماماً.</li>
          <li><strong>أحزمة التربيط (Lashing Belts):</strong> استخدام أحزمة بوليستر عالية الشد لتربيط البالتات الأخيرة القريبة من الباب وتثبيتها في حلقات التثبيت الأرضية للحاوية لمنع اندفاع البضائع للخارج عند فتح أبواب الحاوية في الجمارك.</li>
          <li><strong>الحصائر مانعة للانزلاق (Anti-Slip Mats):</strong> وضع رقائق مطاطية تحت القواعد الخشبية للبالتات لزيادة معامل الاحتكاك مع أرضية الحاوية المعدنية بنسبة 60%، مما يقلل من احتمالية التزحزح أثناء مناورات السفينة أو كبح الشاحنة المفاجئ.</li>
        </ul>
      </section>
    </div>
  `
};
