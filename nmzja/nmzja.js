document.addEventListener("DOMContentLoaded", function() {
const translations = {
    ar: {
        dir: "rtl",
        btn_lang: "English",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        test_page_title: "الاختبار والتشغيل Testing & Commissioning | QSC",
        test_hero_h: "الاختبار والتشغيل (Commissioning)",
        test_hero_p: "نحن نضمن أن كل صمام، كابل، ومعدة تعمل بدقة 100% وفقاً للتصاميم الهندسية العالمية قبل التسليم النهائي.",
        test_badge: "ضمان ومراقبة الجودة QA/QC",
        test_process_h: "منهجيتنا في فحص الأنظمة",
        test_process_p: "عملية الـ Commissioning هي الجسر بين الانتهاء من الإنشاء وبدء التشغيل الفعلي. في QSC، نتبع بروتوكولات صارمة تشمل:",
        test_feat_1_h: "اختبارات ما قبل التشغيل (Pre-commissioning)",
        test_feat_1_p: "فحص التوصيلات، معايرة الحساسات، واختبارات الضغط (Hydrotest) لضمان سلامة كافة الشبكات.",
        test_feat_2_h: "مزامنة الأنظمة والتحكم آلياً",
        test_feat_2_p: "تكامل أنظمة الـ PLC و SCADA لضمان استجابة المعدات للأوامر البرمجية بدقة متناهية.",
        test_types_h: "خدمات الفحص المتخصصة",
        test_types_p: "نغطي كافة التخصصات الهندسية لضمان تسليم مشروع متكامل الأركان خالي من العيوب.",
        test_mech_h: "الاختبارات الميكانيكية",
        test_mech_p: "اختبار أداء المضخات، الغلايات، والمحركات، والتأكد من عدم وجود اهتزازات أو ضجيج غير طبيعي.",
        test_elec_h: "الاختبارات الكهربائية",
        test_elec_p: "قياس الأحمال، اختبار العزل للكابلات، وفحص لوحات الجهد المتوسط والمنخفض وأنظمة الطوارئ.",
        test_piping_h: "اختبارات الأنابيب",
        test_piping_p: "اختبار الضغط المائي والهوائي (Hydro & Pneumatic) وتطهير الخطوط (Flushing) قبل التشغيل.",
        test_cta: "اطلب فريق الفحص والتشغيل الآن"
    },
    en: {
        dir: "ltr",
        btn_lang: "العربية",
        nav_home: "Home",
        nav_services: "Our Services",
        test_page_title: "Testing & Commissioning | QSC",
        test_hero_h: "Testing & Commissioning Services",
        test_hero_p: "We ensure every valve, cable, and equipment functions 100% according to international engineering designs before final handover.",
        test_badge: "Quality Assurance & Control (QA/QC)",
        test_process_h: "Our Systems Inspection Methodology",
        test_process_p: "Commissioning is the bridge between construction completion and actual operation. At QSC, we follow strict protocols including:",
        test_feat_1_h: "Pre-commissioning Tests",
        test_feat_1_p: "Checking connections, sensor calibration, and pressure testing (Hydrotest) to ensure network integrity.",
        test_feat_2_h: "System Sync & Automation Control",
        test_feat_2_p: "Integrating PLC and SCADA systems to ensure equipment responds perfectly to software commands.",
        test_types_h: "Specialized Inspection Services",
        test_types_p: "We cover all engineering disciplines to ensure the delivery of a flawless, integrated project.",
        test_mech_h: "Mechanical Testing",
        test_mech_p: "Testing performance of pumps, boilers, and motors, ensuring no abnormal vibrations or noise.",
        test_elec_h: "Electrical Testing",
        test_elec_p: "Load measurement, cable insulation testing, and inspection of MV/LV panels and emergency systems.",
        test_piping_h: "Piping Testing",
        test_piping_p: "Hydrostatic and Pneumatic pressure testing, and line flushing before initial startup.",
        test_cta: "Request Commissioning Team Now"
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