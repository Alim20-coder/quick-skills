document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            ser_3_h: "خدمات الصيانة | QSC",
            maint_hero_title: "خدمات الصيانة الشاملة",
            ser_3_p: "برامج صيانة وقائية وعلاجية تضمن استدامة مبانيكم ومرافقكم بأعلى معايير الجودة.",
            maint_prev_title: "صيانة وقائية",
            maint_prev_desc: "فحوصات دورية مجدولة لتقليل الأعطال المفاجئة وإطالة عمر المعدات والأنظمة الميكانيكية.",
            maint_corr_title: "صيانة علاجية (إصلاح)",
            maint_corr_desc: "استجابة سريعة للأعطال الطارئة مع توفير قطع غيار أصلية وحلول هندسية متكاملة.",
            maint_mep_title: "أنظمة MEP",
            maint_mep_desc: "صيانة شبكات الكهرباء، السباكة، وأنظمة التكييف والتهوية بأحدث التقنيات.",
            maint_why_title: "لماذا تختار QSC للصيانة؟",
            maint_reason_1: "خبرة تمتد من عام 2010 في السوق المصري والسعودي.",
            maint_reason_2: "كوادر فنية مدربة ومعتمدة عالمياً.",
            maint_reason_3: "الالتزام بالجداول الزمنية ومعايير السلامة.",
            maint_btn_visit: "طلب زيارة فنية"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            ser_3_h: "Maintenance Services | QSC",
            maint_hero_title: "Comprehensive Maintenance Services",
            ser_3_p: "Preventive and corrective maintenance programs ensuring building sustainability with top quality standards.",
            maint_prev_title: "Preventive Maintenance",
            maint_prev_desc: "Scheduled periodic inspections to reduce sudden failures and extend equipment and mechanical systems lifespan.",
            maint_corr_title: "Corrective Maintenance",
            maint_corr_desc: "Rapid response to emergency breakdowns with original spare parts and integrated engineering solutions.",
            maint_mep_title: "MEP Systems",
            maint_mep_desc: "Maintenance of electrical grids, plumbing, HVAC, and ventilation systems using latest techniques.",
            maint_why_title: "Why Choose QSC for Maintenance?",
            maint_reason_1: "Experience since 2010 in Egyptian and Saudi markets.",
            maint_reason_2: "Globally trained and certified technical staff.",
            maint_reason_3: "Strict commitment to schedules and safety standards.",
            maint_btn_visit: "Request Technical Visit"
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