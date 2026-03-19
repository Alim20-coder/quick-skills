/**
 * handasa.js - الخاص بصفحة الهندسة المعمارية والمدنية
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. بيانات الترجمة الخاصة بالصفحة
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            ser_1_h: "الهندسة المعمارية والمدنية | QSC",
            civ_hero_title: "الهندسة المعمارية والمدنية",
            ser_1_p: "من المخططات الورقية إلى الصروح العمرانية.. نبني برؤية هندسية مبتكرة.",
            civ_arch_title: "التصميم المعماري",
            civ_arch_desc: "تصميمات عصرية تجمع بين استغلال المساحات والجمال البصري مع تقديم مخططات 3D تفصيلية.",
            civ_const_title: "التنفيذ الإنشائي",
            civ_const_desc: "إشراف وتنفيذ كامل للأعمال الخرسانية والمباني بأعلى معايير الأمان والجودة الإنشائية.",
            civ_finish_title: "التشطيبات والديكور",
            civ_finish_desc: "تنفيذ أرقى أنواع التشطيبات الداخلية والخارجية وتسليم المشاريع بنظام 'مفتاح'.",
            civ_precision_title: "الدقة في التنفيذ هي شعارنا",
            civ_precision_desc: "في QSC، نهتم بأدق التفاصيل الإنشائية لضمان استدامة المبنى. نستخدم أحدث أجهزة الرفع المساحي ونطبق أعلى مواصفات الكود المصري والسعودي في البناء.",
            civ_feat_1_title: "إشراف هندسي",
            civ_feat_1_desc: "مهندسون متخصصون بكل موقع.",
            civ_feat_2_title: "جودة المواد",
            civ_feat_2_desc: "استخدام أفضل الخامات المعتمدة.",
            civ_cta_btn: "اطلب معاينة لموقعك"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            ser_1_h: "Architectural & Civil Engineering | QSC",
            civ_hero_title: "Architectural & Civil Engineering",
            ser_1_p: "From blueprints to urban monuments.. We build with an innovative engineering vision.",
            civ_arch_title: "Architectural Design",
            civ_arch_desc: "Modern designs blending space optimization with visual aesthetics, including detailed 3D plans.",
            civ_const_title: "Structural Execution",
            civ_const_desc: "Full supervision and execution of concrete works and buildings with the highest standards.",
            civ_finish_title: "Finishing & Decoration",
            civ_finish_desc: "Executing the finest types of interior and exterior finishes, delivering projects on a 'turn-key' basis.",
            civ_precision_title: "Precision in Execution is Our Motto",
            civ_precision_desc: "At QSC, we care about the smallest structural details to ensure sustainability. We use the latest surveying equipment and apply top building codes.",
            civ_feat_1_title: "Engineering Supervision",
            civ_feat_1_desc: "Specialized engineers at every site.",
            civ_feat_2_title: "Material Quality",
            civ_feat_2_desc: "Using the best-certified raw materials.",
            civ_cta_btn: "Request a Site Inspection"
        }
    };

    // 2. تحديد العناصر
    const langBtn = document.getElementById('lang-toggler');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');

    // 3. وظيفة التبديل
    const updateContent = (lang) => {
        document.documentElement.lang = lang;
        document.documentElement.dir = translations[lang].dir;

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // لو العنصر هو الـ Title بتاع الصفحة
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        if (langBtn) langBtn.textContent = translations[lang].btn_lang;
        localStorage.setItem('preferredLang', lang);

        // تبديل ملف الـ Bootstrap بناءً على اللغة
        if (bootstrapLink) {
            if (lang === 'ar') {
                bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css";
            } else {
                bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
            }
        }
    };

    // 4. تشغيل الزر
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.lang;
            const nextLang = currentLang === 'ar' ? 'en' : 'ar';
            updateContent(nextLang);
        });
    }

    // 5. تحميل اللغة المحفوظة أو العربية كافتراضي
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    updateContent(savedLang);
});