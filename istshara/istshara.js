document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            ser_5_h: "الاستشارات البيئية والاستدامة | QSC",
            env_hero_title: "الاستشارات البيئية والاستدامة",
            ser_5_p: "نساعدكم في بناء مشاريع صديقة للبيئة متوافقة مع المعايير الدولية والمحلية.",
            env_feat_1_title: "دراسات تقييم الأثر البيئي (EIA)",
            env_feat_1_desc: "إعداد التقارير الفنية اللازمة للحصول على الموافقات البيئية للمشاريع الصناعية والإنشائية، وضمان توافقها مع قوانين البيئة.",
            env_feat_2_title: "تصميم المباني الخضراء (LEED)",
            env_feat_2_desc: "تقديم استشارات للحصول على شهادات الريادة في الطاقة والتصميم البيئي، لتقليل استهلاك الطاقة والمياه وتحسين جودة الحياة داخل المبنى.",
            env_feat_3_title: "حلول إدارة النفايات والاستدامة",
            env_feat_3_desc: "وضع خطط متكاملة للتخلص الآمن من النفايات الإنشائية وإعادة تدويرها، وتقديم حلول الطاقة المتجددة للمشاريع الكبرى.",
            env_cta_title: "هل تبحث عن حلول مستدامة لمشروعك؟",
            env_cta_desc: "فريقنا من الخبراء البيئيين جاهز لمساعدتك في الحصول على التراخيص وتحويل مشروعك إلى 'مشروع أخضر'.",
            env_cta_btn: "احصل على استشارة بيئية الآن"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            ser_5_h: "Environmental Consulting & Sustainability | QSC",
            env_hero_title: "Environmental Consulting & Sustainability",
            ser_5_p: "We help you build eco-friendly projects compliant with international and local standards.",
            env_feat_1_title: "Environmental Impact Assessment (EIA)",
            env_feat_1_desc: "Preparing technical reports required for environmental approvals for industrial and construction projects, ensuring compliance with environmental laws.",
            env_feat_2_title: "Green Building Design (LEED)",
            env_feat_2_desc: "Providing consultancy to obtain LEED certifications, reducing energy and water consumption and improving indoor quality of life.",
            env_feat_3_title: "Waste Management & Sustainability Solutions",
            env_feat_3_desc: "Developing integrated plans for safe disposal and recycling of construction waste, and providing renewable energy solutions for major projects.",
            env_cta_title: "Looking for sustainable solutions for your project?",
            env_cta_desc: "Our team of environmental experts is ready to help you obtain permits and transform your project into a 'Green Project'.",
            env_cta_btn: "Get Environmental Consultation Now"
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