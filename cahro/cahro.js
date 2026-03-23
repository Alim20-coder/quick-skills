document.addEventListener("DOMContentLoaded", function() {
    
    // 1. بيانات الترجمة الخاصة بصفحة MEP
const translations = {
    ar: {
        dir: "rtl",
        btn_lang: "English",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        piping_page_title: "أنابيب المحطات Station Piping | QSC",
        piping_hero_h: "أنابيب المحطات (Station Piping)",
        piping_hero_p: "نحن المتخصصون في شريان الصناعة.. تصميم وتركيب شبكات الأنابيب والضخ للمحطات البترولية والصناعية.",
        pip_install_h: "تركيب شبكات الأنابيب",
        pip_install_1: "تركيب أنابيب الكربون والستانلس ستيل.",
        pip_install_2: "أعمال اللحام المتخصص بكافة الأقطار.",
        pip_install_3: "تركيب الصمامات والمحابس الصناعية.",
        pip_pumping_h: "أنظمة الضخ والتحكم",
        pip_pumping_1: "تركيب مضخات الطرد المركزي والعمودية.",
        pip_pumping_2: "تنفيذ أنظمة الحماية من المطرقة المائية.",
        pip_pumping_3: "لوحات التحكم الآلي في تدفق السوائل.",
        pip_tanks_h: "الخزانات والوصلات",
        pip_tanks_1: "ربط خزانات الوقود والمياه بالمحطات.",
        pip_tanks_2: "تنفيذ وصلات التمدد والاهتزاز.",
        pip_tanks_3: "أعمال العزل الحراري للأنابيب والمعدات.",
        pip_quality_h: "دقة التنفيذ في أصعب الظروف",
        pip_quality_p: "في QSC، نلتزم بتنفيذ مشاريع الأنابيب (Piping Projects) وفقاً لأكواد ASME و API العالمية. نضمن لعملائنا دقة متناهية في اللحامات، واختبارات ضغط هيدروليكية صارمة قبل تسليم أي محطة لضمان صفر حوادث أو تسريبات.",
        pip_safety_txt: "تطبيق صارم لمعايير السلامة المهنية (HSE).",
        pip_cta: "اطلب استشارة فنية لمشروعك"
    },
    en: {
        dir: "ltr",
        btn_lang: "العربية",
        nav_home: "Home",
        nav_services: "Our Services",
        piping_page_title: "Station Piping Works | QSC",
        piping_hero_h: "Station Piping Solutions",
        piping_hero_p: "Specialists in the industrial lifeline.. designing and installing piping and pumping networks for oil and industrial plants.",
        pip_install_h: "Piping Network Installation",
        pip_install_1: "Installation of carbon and stainless steel pipes.",
        pip_install_2: "Specialized welding works for all diameters.",
        pip_install_3: "Installation of industrial valves and fittings.",
        pip_pumping_h: "Pumping & Control Systems",
        pip_pumping_1: "Installation of centrifugal and vertical pumps.",
        pip_pumping_2: "Implementation of water hammer protection systems.",
        pip_pumping_3: "Automated flow control panels.",
        pip_tanks_h: "Tanks & Connections",
        pip_tanks_1: "Connecting fuel and water tanks to stations.",
        pip_tanks_2: "Execution of expansion and vibration joints.",
        pip_tanks_3: "Thermal insulation for pipes and equipment.",
        pip_quality_h: "Precision in Tough Conditions",
        pip_quality_p: "At QSC, we are committed to executing piping projects according to international ASME and API codes. We guarantee extreme precision in welding and rigorous hydraulic pressure tests to ensure zero accidents or leaks.",
        pip_safety_txt: "Strict application of Occupational Safety (HSE) standards.",
        pip_cta: "Request a Technical Consultation"
    }
};

    // 2. منطق التبديل (The Logic)
    const langBtn = document.getElementById('lang-toggler');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');

    const updateContent = (lang) => {
        document.documentElement.lang = lang;
        document.documentElement.dir = translations[lang].dir;

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        if (langBtn) langBtn.textContent = translations[lang].btn_lang;
        localStorage.setItem('preferredLang', lang);

        // تبديل Bootstrap RTL/LTR
        if (bootstrapLink) {
            bootstrapLink.href = lang === 'ar' 
                ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css"
                : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
        }
    };

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
            updateContent(currentLang);
        });
    }

    // تشغيل اللغة المحفوظة
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    updateContent(savedLang);
});