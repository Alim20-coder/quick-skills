document.addEventListener("DOMContentLoaded", function() {
const translations = {
    ar: {
        dir: "rtl",
        btn_lang: "English",
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        struct_page_title: "الأعمال الهيكلية والإنشائية | QSC",
        struct_badge: "تنفيذ، توريد، وإشراف",
        struct_hero_h: "الأعمال الهيكلية والإنشائية",
        struct_hero_p: "نبني الأسس المتينة للمشاريع العملاقة، من الهياكل الخرسانية المسلحة إلى المنشآت المعدنية المتطورة بأعلى دقة هندسية.",
        struct_conc_h: "الخرسانة المسلحة",
        struct_conc_p: "تنفيذ كافة الأعمال الخرسانية من القواعد والأعمدة والأسقف باستخدام أحدث أنظمة الشدات المعدنية.",
        struct_steel_h: "المنشآت المعدنية",
        struct_steel_p: "تصميم وتركيب الهياكل الحديدية (Steel Structure) للمصانع والمستودعات والمباني التجارية.",
        struct_earth_h: "الحفر والتدعيم",
        struct_earth_p: "أعمال الحفر والردم وتدعيم جوانب الحفر لضمان سلامة المنشآت المجاورة أثناء التنفيذ.",
        struct_qual_h: "قوة التنفيذ وجودة البناء",
        struct_qual_p: "في QSC، نلتزم بتسليم مشاريع إنشائية تعيش لعقود، من خلال رقابة صارمة على جودة المواد الموردة وعمليات الصب:",
        struct_list_1: "استخدام خرسانة معتمدة ومختبرة معملياً.",
        struct_list_2: "مطابقة المخططات الإنشائية والأكواد الهندسية (SBC).",
        struct_list_3: "فرق عمل متخصصة في النجارة والحدادة المسلحة.",
        struct_btn: "ابدأ مشروعك الإنشائي معنا",
        nav_contact: "تواصل معنا"
    },
    en: {
        dir: "ltr",
        btn_lang: "العربية",
        nav_home: "Home",
        nav_services: "Our Services",
        struct_page_title: "Structural & Civil Works | QSC",
        struct_badge: "Execution, Supply & Supervision",
        struct_hero_h: "Structural & Civil Works",
        struct_hero_p: "Building solid foundations for mega projects, from reinforced concrete structures to advanced steel buildings with supreme engineering precision.",
        struct_conc_h: "Reinforced Concrete",
        struct_conc_p: "Execution of all concrete works including foundations, columns, and slabs using the latest modular formwork systems.",
        struct_steel_h: "Steel Structures",
        struct_steel_p: "Design and installation of steel structures for factories, warehouses, and commercial buildings.",
        struct_earth_h: "Earthworks & Shoring",
        struct_earth_p: "Excavation, backfilling, and shoring works to ensure the safety of adjacent structures during execution.",
        struct_qual_h: "Execution Strength & Building Quality",
        struct_qual_p: "At QSC, we are committed to delivering construction projects that last for decades through strict control over material quality and pouring processes:",
        struct_list_1: "Using certified and lab-tested concrete mix.",
        struct_list_2: "Compliance with structural shop drawings and Building Codes (SBC).",
        struct_list_3: "Specialized teams for professional carpentry and steel fixing.",
        struct_btn: "Start Your Construction Project With Us",
        nav_contact: "Contact Us"
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
        
        // تعديل Bootstrap RTL/LTR تلقائياً
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