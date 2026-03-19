document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            ser_4_h: "نمذجة معلومات البناء BIM | QSC",
            bim_hero_title: "نمذجة معلومات البناء (BIM)",
            ser_4_p: "نحول الرؤى المعمارية إلى واقع رقمي ذكي يقلل التكاليف ويمنع التداخلات قبل بدء التنفيذ.",
            bim_how_title: "كيف نطور مشاريعكم باستخدام تقنية BIM؟",
            bim_how_desc: "نعتمد في QSC على أحدث البرمجيات مثل (Autodesk Revit, Navisworks) لتوفير دقة متناهية في كافة مراحل المشروع:",
            bim_feat_1_title: "منع تعارض الأنظمة (Clash Detection)",
            bim_feat_1_desc: "كشف التداخلات بين الأنظمة الكهربائية والميكانيكية والإنشائية قبل الوصول للموقع.",
            bim_feat_2_title: "حصر كميات دقيق 100%",
            bim_feat_2_desc: "استخراج جداول الكميات والتكاليف من النموذج الرقمي مباشرة لضمان أقل نسبة هادر.",
            bim_dims_title: "مستويات العمل (BIM Dimensions)",
            bim_dims_desc: "نقدم حلولاً تبدأ من التصميم ثلاثي الأبعاد وصولاً لإدارة المرافق.",
            bim_3d_title: "النمذجة والتمثيل البصري",
            bim_3d_desc: "إنشاء نماذج رقمية دقيقة تحتوي على كافة المعلومات الهندسية للمشروع.",
            bim_4d_title: "الجدولة الزمنية (Time)",
            bim_4d_desc: "ربط العناصر الإنشائية بالجدول الزمني لمتابعة تسلسل التنفيذ بدقة.",
            bim_5d_title: "تقدير التكاليف (Cost)",
            bim_5d_desc: "حساب دقيق للتكاليف والتدفقات النقدية بناءً على حجم العمل الفعلي.",
            bim_cta_btn: "اطلب نموذجاً لمشروعك الآن"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            ser_4_h: "Building Information Modeling BIM | QSC",
            bim_hero_title: "Building Information Modeling (BIM)",
            ser_4_p: "We transform architectural visions into smart digital realities that reduce costs and prevent clashes before execution.",
            bim_how_title: "How we develop projects using BIM?",
            bim_how_desc: "At QSC, we rely on the latest software (Autodesk Revit, Navisworks) to provide extreme accuracy at all project stages:",
            bim_feat_1_title: "Clash Detection",
            bim_feat_1_desc: "Detecting overlaps between electrical, mechanical, and structural systems before reaching the site.",
            bim_feat_2_title: "100% Accurate Quantity Surveying",
            bim_feat_2_desc: "Extracting quantity and cost schedules directly from the digital model to ensure minimal waste.",
            bim_dims_title: "BIM Dimensions",
            bim_dims_desc: "We offer solutions starting from 3D design up to facility management.",
            bim_3d_title: "3D Modeling & Visualization",
            bim_3d_desc: "Creating precise digital models containing all engineering information for the project.",
            bim_4d_title: "4D Scheduling (Time)",
            bim_4d_desc: "Linking structural elements to the schedule to track construction sequence accurately.",
            bim_5d_title: "5D Cost Estimation",
            bim_5d_desc: "Precise calculation of costs and cash flows based on actual work volume.",
            bim_cta_btn: "Request a Model for Your Project Now"
        }
    };

    const langBtn = document.getElementById('lang-toggler');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    const updateContent = (lang) => {
        document.documentElement.lang = lang;
        document.documentElement.dir = translations[lang].dir;

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        if (langBtn) langBtn.textContent = translations[lang].btn_lang;
        localStorage.setItem('preferredLang', lang);

        const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
        if (lang === 'ar') {
            bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css";
        } else {
            bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
        }
    };

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const nextLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
            updateContent(nextLang);
        });
    }

    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    updateContent(savedLang);
});