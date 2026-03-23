document.addEventListener("DOMContentLoaded", function() {
const translations = {
    ar: {
        dir: "rtl",
        btn_lang: "English",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        weld_page_title: "اختبار وتوريد اللحامين | QSC",
        weld_hero_h: "اختبار وتوريد الكوادر الفنية واللحامين",
        weld_hero_p: "نوفر أفضل الكفاءات المهنية المعتمدة عالمياً لمشاريع النفط، الغاز، والإنشاءات الكبرى.",
        weld_btn_services: "خدمات الاختبار",
        weld_btn_request: "طلب توريد عمالة",
        weld_stat_1: "مطابقة لأعلى الأكواد العالمية",
        weld_stat_2: "لحام وفني تم اختبارهم",
        weld_stat_3: "نسبة الرفض في الفحوصات الإشعاعية",
        weld_sections_title: "مجالات التخصص والاختبار",
        weld_test_h: "تأهيل اللحامين (WQT)",
        weld_test_p: "إجراء اختبارات الأداء للحامين (6G, 3G, 4G) بجميع الأوضاع لضمان كفاءة اللحام وجودة الوصلات.",
        weld_supply_h: "توريد الكوادر الفنية",
        weld_supply_p: "توريد لحامين، برادين (Fabricators)، وفنيين معتمدين لمواقع العمل بنظام العقود القصيرة والطويلة.",
        weld_qc_h: "مراقبة الجودة وفحص اللحام",
        weld_qc_p: "فحص اللحام بصرياً (Visual Inspection) ومتابعة إجراءات الـ WPS و PQR لضمان مطابقة الكود.",
        weld_footer_h: "هل تحتاج طاقم فني محترف لمشروعك؟",
        weld_footer_p: "نوفر لك العمالة المختبرة الجاهزة للعمل فوراً في أقسى ظروف المواقع.",
        weld_footer_btn: "تواصل مع قسم التوريد",
        feat_certified_techs: "فنيين معتمدين أرامكو/سابك",
        feat_integrated_teams: "فرق متكاملة للمشاريع",
        feat_daily_reports: "تقارير فحص يومية",
        feat_pre_inspection: "فحص ما قبل الصب/التركيب"
    },
    en: {
        dir: "ltr",
        btn_lang: "العربية",
        nav_home: "Home",
        nav_services: "Our Services",
        weld_page_title: "Welder Testing & Manpower Supply | QSC",
        weld_hero_h: "Technical Staff & Welder Testing & Supply",
        weld_hero_p: "Providing top-tier, internationally certified professional talent for oil, gas, and major construction projects.",
        weld_btn_services: "Testing Services",
        weld_btn_request: "Request Manpower",
        weld_stat_1: "Compliant with Global Codes",
        weld_stat_2: "Welders & Techs Tested",
        weld_stat_3: "Radiographic Rejection Rate",
        weld_sections_title: "Specialties & Testing Fields",
        weld_test_h: "Welder Qualification (WQT)",
        weld_test_p: "Conducting Welder Performance Qualification (6G, 3G, 4G) in all positions to ensure welding efficiency.",
        weld_supply_h: "Technical Manpower Supply",
        weld_supply_p: "Supplying certified welders, fabricators, and technicians for sites on short and long-term contracts.",
        weld_qc_h: "Quality Control & Inspection",
        weld_qc_p: "Visual Inspection and monitoring of WPS & PQR procedures to ensure code compliance.",
        weld_footer_h: "Need a professional technical crew for your project?",
        weld_footer_p: "We provide tested manpower ready for immediate deployment in the toughest site conditions.",
        weld_footer_btn: "Contact Supply Department",
        feat_certified_techs: "Aramco/SABIC Certified Technicians",
        feat_integrated_teams: "Integrated Project Teams",
        feat_daily_reports: "Daily Inspection Reports",
        feat_pre_inspection: "Pre-pouring/Installation Inspection"
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