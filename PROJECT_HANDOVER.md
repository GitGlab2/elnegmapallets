# 📌 PROJECT HANDOVER & STATUS — وثيقة تسليم واستمرارية المشروع

> [!IMPORTANT]
> **إلى النموذج القادم (To the incoming AI agent):**
> اقرأ هذا الملف **أولاً وبشكل كامل** قبل اتخاذ أي خطوة أو كتابة أي كود. هذا الملف يحتوي على القوانين الثابتة للمشروع، هيكلية الكود، ما تم إنجازه، وما يجب القيام به بعد ذلك.

---

## 1. ⚙️ معلومات أساسية عن المشروع (Project Core Specs)

- **نوع المشروع:** تطبيق Next.js (App Router) مع تصدير ثابت (Static HTML Export) إلى مجلد `out/`.
- **رابط الموقع الرسمي:** `https://elnegmapallets.com`
- **اللغات المدعومة:** 
  - العربية (المسار الافتراضي عند الجذور مثل `/` و `/articles`).
  - الإنجليزية (المسار يبدأ بـ `/en` مثل `/en/` و `/en/articles`).
- **المستودع الرئيسي للملفات والبيانات:**
  - المقالات العربية: [articles.ts](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/data/articles.ts) (والملفات الفردية في المجلد [articles](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/data/articles)).
  - المقالات الإنجليزية: [articles-en.ts](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/data/articles-en.ts).
  - بيانات مقاسات البالتات: [pallet-sizes.ts](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/data/pallet-sizes.ts) (عربي) و [pallet-sizes-en.ts](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/data/pallet-sizes-en.ts) (إنجليزي).
  - مولد المقالات التلقائي للمقاسات: [pallet-size-articles.ts](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/data/pallet-size-articles.ts).

---

## 2. 🛡️ التكليفات الثابتة وقوانين الجودة (Strict Rules & Mandates)

المستخدم هو **المشرف ومدير الجودة والاستراتيجية**. يجب الالتزام الصارم بالقوانين التالية:

1. **لا تقبل عبارة "تم التنفيذ بنجاح" دون إرفاق التقرير الثماني التالي:**
   - الملفات المعدلة بدقة.
   - ملخص دقيق للتغييرات البرمجية واللوجستية.
   - نتائج البناء والتصدير الفعلي (`npm run build`).
   - روابط الصفحات المتأثرة.
   - تقرير المعاينة والتجاوب مع الهاتف والكمبيوتر.
   - التحذيرات وأي نقاط ضعف مكتشفة.
   - الأثر الإيجابي أو السلبي على الـ SEO.
   - تأكيد قطعي بخلو الموقع من صفحات الخطأ 404.
2. **النظافة التامة (Strict Code Cleanliness):**
   - ممنوع تماماً ترك أي ملفات تخطيط، مسودات، نصوص غير مستخدمة، أو ملفات قديمة مثل `Pallet SEO Content Strategy.txt` أو مسودات docx في جذر المشروع.
   - ممنوع استخدام أطر عمل SPA أو Vite أو Express أو باتشات قديمة.
3. **دقة المصطلحات والبيانات اللوجستية:**
   - اسم الكيان: **مصنع النجمة لتصنيع البالتات الخشبية** (El Negma Pallets).
   - المقر الفعلي: **بياض العرب، بني سويف، مصر**.
   - نوع المنتجات: **بالتات خشبية جديدة آلية** (وليس بالتات مستعملة كمنتج أساسي).
   - معيار المعالجة: **المعالجة الحرارية HT المعتمدة بختم ISPM-15**.

---

## 3. 🚀 ما تم إنجازه في الجلسة الأخيرة (Accomplished Tasks)

تم تنفيذ إصلاحات برمجية وهيكلية هامة لضبط جودة الـ SEO بدون التسبب في أي أخطاء بناء:

1. **إزالة التكرار في البيانات الإنجليزية:** تم تعديل ملف [articles-en.ts](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/data/articles-en.ts) وحذف المقالات المكررة بالكامل لـ `pallet-prices-egypt` و `buying-pallets-guide` والتي كانت تسبب مشاكل تضارب في بناء المسارات.
2. **تحديث خريطة الموقع (Sitemap):** تم إعادة كتابة ملف [sitemap.xml](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/public/sitemap.xml) بالكامل ليشمل جميع المسارات الثابتة البالغ عددها 60 مساراً نشطاً (تشمل الصفحات الرئيسية، المقالات، والمقاسات باللغتين).
3. **إضافة وسوم الـ `hreflang` و الـ `canonical`:**
   - تم تعديل ملفات Layouts لتضمين روابط canonical ولغات بديلة (`alternates.languages`) تشمل `ar` و `en` و `x-default`.
   - تم تعديل ملفات توليد صفحات المقالات والمقاسات لإضافة وسوم canonical والربط المتبادل للغات ديناميكياً بناءً على الـ slug.
4. **تحديث رقم الهاتف في Schema:** تم تصحيح رقم الهاتف في LocalBusiness Schema في كلا الـ Layouts ليكون بالصيغة الدولية المعتمدة للمصنع: `+201080012261`.
5. **طريقة عرض المقالات (Compact List View):** تم تحويل شبكة المقالات من نظام 3 أعمدة (Grid) إلى قائمة رأسية متتالية (Horizontal List Card Layout) مطابقة تماماً للموقع المرجعي `profit-steps.com/blog` (الصورة على اليمين والنص على اليسار في العربي، وتصميم مضغوط وأكثر انسيابية وتجاوباً).

---

## 4. 📝 الخطوات القادمة الموصى بها (Next Steps)

هذه هي قائمة التحسينات والمهام الموصى بالبدء بها في الجلسة القادمة:

### أولوية عالية ⚠️
- **ضغط صور المقالات الكبيرة:** هناك 7 صور رئيسية في مجلد `public/images/articles/` تتجاوز مساحتها 700KB (أكبرها `pallets-warehouse-storage.webp` بحجم 1.04MB) ويجب ضغطها وتقليل أبعادها لتصبح تحت 200KB لتحسين سرعة تحميل الصفحات على الموبايل (Lighthouse Performance).
- **حذف الصور غير المستخدمة:** حذف الصور المتبقية التي لا يشير إليها أي كود مثل `ai-pallet-logistics.webp` و `pallet-loading-layout.webp` و `dry-vs-reefer.webp`.

### أولوية متوسطة 💡
- **تفعيل روابط الفوتر:** في [Layout.tsx](file:///c:/Users/Islam%20Glab/Desktop/elnegmapallets/client/src/components/Layout.tsx)، روابط المنتجات في الفوتر تظهر كنصوص ثابتة (`<span>`)؛ يُنصح بتحويلها إلى روابط (`<a>`) تقود مباشرة إلى صفحات مقاسات البالتات المخصصة لها لتسهيل الزحف الداخلي والتنقل.
- **إضافة رابط دليل المقاسات في الهيدر:** ربط صفحة دليل مقاسات البالتات (`/pallet-sizes`) في القائمة الملاحية الرئيسية لتسهيل وصول الزوار إليها من الصفحة الرئيسية مباشرة.
- **إكمال الـ Breadcrumbs Schema:** إضافة بيانات BreadcrumbList المنظمة لصفحات المقالات وتفاصيل المقاسات لتعزيز شكل الروابط في نتائج بحث جوجل.
