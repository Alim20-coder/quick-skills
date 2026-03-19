document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            infra_title: "أعمال البنية التحتية | QSC",
            infra_hero_h1: "أعمال البنية التحتية",
            infra_hero_p: "نشيد القواعد الأساسية للمدن الحديثة بشبكات متكاملة تضمن استدامة الحياة والخدمات.",
            infra_water_h: "المياه والصرف",
            infra_water_p: "تنفيذ خطوط الطرد، شبكات الانحدار، ومحطات الرفع بأعلى معايير الجودة.",
            infra_elec_h: "شبكات الكهرباء",
            infra_elec_p: "تمديد كابلات الجهد المتوسط والمنخفض، وتركيب المحولات وغرف الكهرباء.",
            infra_comm_h: "الاتصالات والـ IT",
            infra_comm_p: "تنفيذ مسارات الألياف الضوئية (Fiber Optics) والبنية التحتية للمدن الذكية.",
            infra_road_h: "الطرق والتمهيد",
            infra_road_p: "أعمال الحفر والردم، تمهيد الطرق، وتجهيز طبقات التأسيس للمشاريع الكبرى.",
            infra_detail_h: "الدقة تحت الأرض.. هي ما يضمن الأمان فوقها",
            infra_detail_p: "نحن ندرك أن أعمال البنية التحتية هي أصعب مراحل التنفيذ نظراً لتعقيداتها الفنية. لذا نستخدم أحدث معدات الحفر الموجه (HDD) وأجهزة كشف المرافق لضمان تنفيذ الشبكات دون أخطاء أو تداخلات.",
            infra_f1: "الالتزام بالمواصفات القياسية والهندسية.",
            infra_f2: "سرعة التنفيذ لتقليل تعطيل المناطق السكنية.",
            infra_f3: "استخدام مواد معتمدة تدوم لعقود.",
            infra_cta: "تواصل مع قسم المشاريع"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            infra_title: "Infrastructure Works | QSC",
            infra_hero_h1: "Infrastructure Works",
            infra_hero_p: "Building the core foundations of modern cities with integrated networks that ensure life and service sustainability.",
            infra_water_h: "Water & Sewage",
            infra_water_p: "Executing pressure lines, gravity networks, and lifting stations with the highest quality standards.",
            infra_elec_h: "Power Networks",
            infra_elec_p: "Laying medium and low voltage cables, installing transformers and electrical rooms.",
            infra_comm_h: "Telecom & IT",
            infra_comm_p: "Implementing fiber optic routes and smart city infrastructure.",
            infra_road_h: "Roads & Grading",
            infra_road_p: "Excavation and backfilling, road grading, and base layer preparation for mega projects.",
            infra_detail_h: "Precision Underground.. Guarantees Safety Above",
            infra_detail_p: "We understand that infrastructure is the most challenging stage due to technical complexities. We use advanced HDD equipment and utility locators to ensure flawless execution.",
            infra_f1: "Compliance with engineering and standard specifications.",
            infra_f2: "Swift execution to minimize disruption in residential areas.",
            infra_f3: "Using certified materials that last for decades.",
            infra_cta: "Contact Projects Department"
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