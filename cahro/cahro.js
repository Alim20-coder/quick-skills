document.addEventListener("DOMContentLoaded", function() {
    
    // 1. بيانات الترجمة الخاصة بصفحة MEP
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            mep_page_title: "الأعمال الكهروميكانيكية MEP | QSC",
            mep_hero_h1: "حلول الكهروميكانيك (MEP)",
            mep_hero_p: "نحن نبض المبنى.. نصمم وننفذ الأنظمة الحيوية التي تجعل المنشأة تعمل بكفاءة وذكاء.",
            mep_elec_h: "الأنظمة الكهربائية",
            mep_elec_1: "لوحات التوزيع والجهد المنخفض.",
            mep_elec_2: "أنظمة الإنارة الداخلية والخارجية.",
            mep_elec_3: "المولدات وأنظمة التيار الخفيف.",
            mep_hvac_h: "أنظمة HVAC",
            mep_hvac_1: "أنظمة التكييف المركزي والـ VRF.",
            mep_hvac_2: "شبكات التهوية ومجاري الهواء (Duct).",
            mep_hvac_3: "أنظمة التحكم في الحرارة والرطوبة.",
            mep_plumb_h: "السباكة ومكافحة الحريق",
            mep_plumb_1: "شبكات تغذية المياه والصرف الصحي.",
            mep_plumb_2: "أنظمة إطفاء الحريق الآلية (Sprinklers).",
            mep_plumb_3: "محطات الرفع ومعالجة المياه.",
            mep_integ_h: "تكامل الأنظمة لضمان الأداء",
            mep_integ_p: "نحن لا نقوم فقط بالتركيب، بل نصمم أنظمة كهروميكانيكية متكاملة تعمل بانسجام تام. نركز على توفير استهلاك الطاقة وسهولة الصيانة المستقبلية لتقليل التكاليف التشغيلية للمالك.",
            mep_code_txt: "اعتماد الكود العالمي في كافة التصميمات.",
            mep_cta: "اطلب عرض سعر فني"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            mep_page_title: "Electromechanical Works MEP | QSC",
            mep_hero_h1: "Electromechanical Solutions (MEP)",
            mep_hero_p: "We are the heart of the building.. We design and execute the vital systems that make facilities work efficiently and smartly.",
            mep_elec_h: "Electrical Systems",
            mep_elec_1: "Distribution boards and low voltage systems.",
            mep_elec_2: "Indoor and outdoor lighting systems.",
            mep_elec_3: "Generators and light current systems.",
            mep_hvac_h: "HVAC Systems",
            mep_hvac_1: "Central air conditioning and VRF systems.",
            mep_hvac_2: "Ventilation networks and air ducts.",
            mep_hvac_3: "Temperature and humidity control systems.",
            mep_plumb_h: "Plumbing & Firefighting",
            mep_plumb_1: "Water supply and sewage networks.",
            mep_plumb_2: "Automatic fire extinguishing systems (Sprinklers).",
            mep_plumb_3: "Water lifting and treatment plants.",
            mep_integ_h: "System Integration for Performance",
            mep_integ_p: "We don't just install; we design integrated electromechanical systems that work in perfect harmony. We focus on energy savings and ease of future maintenance to reduce operational costs for the owner.",
            mep_code_txt: "International code compliance in all designs.",
            mep_cta: "Request a Technical Quote"
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