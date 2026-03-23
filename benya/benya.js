document.addEventListener("DOMContentLoaded", function() {
const translations = {
    ar: {
        dir: "rtl",
        btn_lang: "English",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        repair_title: "الإصلاح والدعم الفني | QSC",
        repair_hero_h: "الإصلاح والدعم الفني السريع",
        repair_hero_p: "نحن هنا لضمان استمرارية أعمالكم.. حلول تقنية فورية وإصلاحات جذرية للأعطال الطارئة.",
        rep_emer_h: "إصلاح الطوارئ",
        rep_emer_p: "فرق استجابة سريعة للتعامل مع الأعطال المفاجئة في الأنظمة الميكانيكية والكهربائية.",
        rep_supp_h: "دعم فني 24/7",
        rep_supp_p: "استشارات تقنية ودعم فني مباشر لحل المشكلات التشغيلية وضمان كفاءة الأداء.",
        rep_parts_h: "قطع الغيار",
        rep_parts_p: "توفير قطع الغيار الأصلية والمواد الاستهلاكية اللازمة لعمليات الإصلاح بأسعار تنافسية.",
        rep_ov_h: "إعادة التأهيل",
        rep_ov_p: "تحديث الأنظمة القديمة وإعادة تأهيل المعدات الميكانيكية لرفع كفاءتها التشغيلية.",
        rep_detail_h: "خبرة فنية تعيد الحياة لمنشآتك",
        rep_detail_p: "في QSC، لا نكتفي بإصلاح العرض، بل نبحث عن أصل المشكلة لمنع تكرارها. فريقنا مزود بأحدث أجهزة التشخيص لضمان دقة الإصلاح في أقل وقت ممكن.",
        rep_f1: "تشخيص دقيق باستخدام أجهزة فحص متطورة.",
        rep_f2: "ضمان على كافة أعمال الإصلاح وقطع الغيار.",
        rep_f3: "مهندسون وفنيون معتمدون ذوي خبرة واسعة.",
        rep_cta: "اطلب دعم فني الآن"
    },
    en: {
        dir: "ltr",
        btn_lang: "العربية",
        nav_home: "Home",
        nav_services: "Our Services",
        repair_title: "Repair & Technical Support | QSC",
        repair_hero_h: "Rapid Repair & Technical Support",
        repair_hero_p: "We are here to ensure your business continuity.. immediate technical solutions and radical repairs for emergency breakdowns.",
        rep_emer_h: "Emergency Repair",
        rep_emer_p: "Quick response teams to handle sudden failures in mechanical and electrical systems.",
        rep_supp_h: "24/7 Tech Support",
        rep_supp_p: "Direct technical consultations and support to solve operational issues and ensure efficiency.",
        rep_parts_h: "Spare Parts",
        rep_parts_p: "Providing original spare parts and consumables needed for repairs at competitive prices.",
        rep_ov_h: "Overhaul & Refurbishment",
        rep_ov_p: "Upgrading legacy systems and refurbishing mechanical equipment to boost operational efficiency.",
        rep_detail_h: "Technical Expertise That Revitalizes Your Facilities",
        rep_detail_p: "At QSC, we don't just fix the symptoms; we find the root cause to prevent recurrence. Our team is equipped with the latest diagnostic tools for precise and timely repairs.",
        rep_f1: "Accurate diagnosis using advanced inspection devices.",
        rep_f2: "Warranty on all repair works and spare parts.",
        rep_f3: "Certified engineers and technicians with extensive experience.",
        rep_cta: "Request Tech Support Now"
    }
};
    const langBtn = document.getElementById('lang-toggler');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');

    const updateContent = (lang) => {
        document.documentElement.lang = lang;
        document.documentElement.dir = translations[lang].dir;

        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'TITLE') document.title = translations[lang][key];
                else el.textContent = translations[lang][key];
            }
        });

        if (langBtn) langBtn.textContent = translations[lang].btn_lang;
        localStorage.setItem('preferredLang', lang);

        if (bootstrapLink) {
            bootstrapLink.href = lang === 'ar' 
                ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css"
                : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
        }
    };

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            updateContent(document.documentElement.lang === 'ar' ? 'en' : 'ar');
        });
    }

    updateContent(localStorage.getItem('preferredLang') || 'ar');
});