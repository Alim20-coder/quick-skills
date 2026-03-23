document.addEventListener("DOMContentLoaded", function() {
const translations = {
    ar: {
        dir: "rtl",
        btn_lang: "English",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        ndt_page_title: "الجودة وتدريب NDT | QSC",
        ndt_hero_h: "إدارة الجودة والتدريب على NDT",
        ndt_hero_p: "نقدم حلولاً متكاملة لفحص المواد وتدريب الكوادر الفنية وفقاً للمعايير الدولية ASNT.",
        ndt_feat_1_title: "خدمات الاختبارات غير التدميرية (NDT)",
        ndt_feat_1_desc: "تنفيذ فحوصات UT, RT, MT, PT بأحدث الأجهزة لضمان خلو المعادن واللحامات من العيوب الهيكلية.",
        ndt_feat_2_title: "برامج التدريب والتأهيل",
        ndt_feat_2_desc: "دورات تدريبية متخصصة لمفتشي الجودة للحصول على شهادات Level I, II وفقاً لنظام SNT-TC-1A.",
        ndt_feat_3_title: "نظم إدارة الجودة (QA/QC)",
        ndt_feat_3_desc: "إعداد خطط الجودة (ITP)، ومراجعة إجراءات العمل لضمان مطابقة المشاريع للمواصفات الفنية القياسية.",
        ndt_cta_title: "ارتقِ بمعايير الجودة في منشأتك",
        ndt_cta_desc: "نحن شركاؤك في ضمان السلامة والكفاءة من خلال الفحص الدقيق والتدريب المحترف.",
        ndt_cta_btn: "طلب استشارة فنية في الجودة"
    },
    en: {
        dir: "ltr",
        btn_lang: "العربية",
        nav_home: "Home",
        nav_services: "Services",
        ndt_page_title: "Quality Control & NDT Training | QSC",
        ndt_hero_h: "Quality Management & NDT Training",
        ndt_hero_p: "Providing integrated material testing solutions and technical staff training according to ASNT international standards.",
        ndt_feat_1_title: "Non-Destructive Testing (NDT) Services",
        ndt_feat_1_desc: "Execution of UT, RT, MT, PT inspections using latest equipment to ensure welds and metals are free from structural defects.",
        ndt_feat_2_title: "Training & Qualification Programs",
        ndt_feat_2_desc: "Specialized training courses for QC inspectors to obtain Level I, II certifications per SNT-TC-1A system.",
        ndt_feat_3_title: "Quality Management Systems (QA/QC)",
        ndt_feat_3_desc: "Preparing Inspection & Test Plans (ITP) and reviewing procedures to ensure project compliance with standard technical specs.",
        ndt_cta_title: "Elevate Quality Standards in Your Facility",
        ndt_cta_desc: "We are your partners in ensuring safety and efficiency through precise inspection and professional training.",
        ndt_cta_btn: "Request Technical Quality Consultation"
    }
};
    // ... (باقي كود التبديل المنطقي كما في الصفحات السابقة) ...
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