document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            academy_hero_title: "أكاديمية QSC للتدريب الهندسي",
            ser_7_p: "نسد الفجوة بين الدراسة الأكاديمية وسوق العمل من خلال تدريب عملي مكثف.",
            academy_btn_browse: "تصفح الدورات",
            academy_btn_inquiry: "استفسار مباشر",
            academy_stat_1: "مهندس وفني تم تدريبهم",
            academy_stat_2: "دورة هندسية متخصصة",
            academy_stat_3: "تطبيق عملي في المواقع",
            academy_sections_title: "المجالات التدريبية",
            course_1_title: "دبلومة التصميم المعماري والـ BIM",
            course_1_desc: "تعلم استخدام Revit و Navisworks لإدارة المشاريع الهندسية بنظام النمذجة الحديث.",
            course_2_title: "أعمال الكهروميكانيك (MEP)",
            course_2_desc: "تدريب عملي على تصميم وتنفيذ أنظمة الحريق، التكييف، واللوحات الكهربائية للمباني.",
            course_3_title: "تأهيل مهندسي المواقع والمكتب الفني",
            course_3_desc: "إعداد التقارير، حصر الكميات، استلام الأعمال، وإدارة العمالة في المواقع الإنشائية.",
            duration_8: "8 أسابيع",
            duration_6: "6 أسابيع",
            duration_10: "10 أسابيع",
            academy_details: "تفاصيل الدورة",
            academy_footer_h: "جاهز لبدء رحلتك المهنية؟",
            academy_footer_p: "سجل الآن في قائمة الانتظار للحصول على خصم 20% على الدورة القادمة.",
            academy_footer_btn: "سجل اهتمامك الآن"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            academy_hero_title: "QSC Engineering Training Academy",
            ser_7_p: "We bridge the gap between academic study and the labor market through intensive practical training.",
            academy_btn_browse: "Browse Courses",
            academy_btn_inquiry: "Direct Inquiry",
            academy_stat_1: "Engineers & Technicians Trained",
            academy_stat_2: "Specialized Engineering Courses",
            academy_stat_3: "100% Practical Application",
            academy_sections_title: "Training Fields",
            course_1_title: "Architectural Design & BIM Diploma",
            course_1_desc: "Learn Revit and Navisworks for modern engineering project modeling and management.",
            course_2_title: "Electromechanical Works (MEP)",
            course_2_desc: "Practical training on firefighting, HVAC, and electrical systems for buildings.",
            course_3_title: "Site & Technical Office Engineering",
            course_3_desc: "Reporting, quantity surveying, works handover, and site workforce management.",
            duration_8: "8 Weeks",
            duration_6: "6 Weeks",
            duration_10: "10 Weeks",
            academy_details: "Course Details",
            academy_footer_h: "Ready to Start Your Career?",
            academy_footer_p: "Register now in the waiting list for a 20% discount on the next course.",
            academy_footer_btn: "Register Your Interest Now"
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