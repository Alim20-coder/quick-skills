document.addEventListener("DOMContentLoaded", function() {
const translations = {
    ar: {
        dir: "rtl",
        btn_lang: "English",
        coat_page_title: "الطلاء والعزل | QSC",
        coat_hero_title: "حلول الطلاء والعزل الاحترافية",
        coat_hero_desc: "حماية قصوى للمنشآت والأنابيب ضد التآكل والعوامل الجوية بأحدث التقنيات العالمية.",
        coat_internal_title: "الطلاء الداخلي",
        coat_internal_desc: "تطبيق طبقات الحماية الداخلية للأنابيب والخزانات لضمان عدم التفاعل وحماية المنتج والمنشأة.",
        coat_external_title: "الطلاء الخارجي",
        coat_external_desc: "أنظمة طلاء خارجية مقاومة للصدأ، الأشعة فوق البنفسجية، والظروف البيئية القاسية.",
        coat_thermal_title: "العزل الحراري",
        coat_thermal_desc: "حلول عزل حراري متطورة للمواسير والمعدات لتقليل فقد الطاقة والحفاظ على درجات الحرارة.",
        coat_why_title: "لماذا تختار خدمة العزل والطلاء لدينا؟",
        coat_reason_1: "استخدام مواد طلاء وعزل معتمدة من كبرى الشركات العالمية.",
        coat_reason_2: "فريق متخصص في تحضير الأسطح (Sandblasting) والرش الاحترافي.",
        coat_reason_3: "مطابقة معايير الجودة NACE و SSPC الدولية.",
        coat_btn_quote: "طلب فحص أو تسعير"
    },
    en: {
        dir: "ltr",
        btn_lang: "العربية",
        coat_page_title: "Coating & Insulation | QSC",
        coat_hero_title: "Professional Coating & Insulation Solutions",
        coat_hero_desc: "Maximum protection for facilities and pipelines against corrosion and weather elements.",
        coat_internal_title: "Internal Coating",
        coat_internal_desc: "Applying internal protection layers for pipes and tanks to ensure non-reactivity and facility safety.",
        coat_external_title: "External Coating",
        coat_external_desc: "External coating systems resistant to rust, UV rays, and harsh environmental conditions.",
        coat_thermal_title: "Thermal Insulation",
        coat_thermal_desc: "Advanced thermal insulation solutions for pipes and equipment to minimize energy loss.",
        coat_why_title: "Why Choose Our Coating Services?",
        coat_reason_1: "Use of certified coating and insulation materials from global leaders.",
        coat_reason_2: "Specialized team in surface preparation (Sandblasting) and professional spraying.",
        coat_reason_3: "Compliance with international NACE and SSPC quality standards.",
        coat_btn_quote: "Request Inspection or Quote"
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