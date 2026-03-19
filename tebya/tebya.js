document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            medical_badge: "حلول طبية متكاملة",
            ser_6_h: "قسم الهندسة الطبية",
            ser_6_p: "نحن متخصصون في تجهيز المنشآت الصحية بأحدث الحلول الهندسية لغرف العمليات، العزل، ووحدات التعقيم وفق المواصفات العالمية.",
            medical_op_title: "تجهيز غرف العمليات",
            medical_op_desc: "تصميم وتنفيذ غرف العمليات بنظام الكبسولة (Modular OR) مع التحكم الكامل في تدفق الهواء والضغط.",
            medical_iso_title: "وحدات العزل والتعقيم",
            medical_iso_desc: "تجهيز غرف العزل ذات الضغط السالب ووحدات التعقيم المركزي (CSSD) لضمان أعلى مستويات السلامة.",
            medical_gas_title: "شبكات الغازات الطبية",
            medical_gas_desc: "تصميم وتركيب شبكات الأكسجين والهواء الطبي وأنظمة التشفط المركزية بدقة هندسية متناهية.",
            medical_commit_title: "التزامنا بالمعايير الطبية",
            medical_commit_desc: "في QSC، ندرك أن الخطأ في الهندسة الطبية غير مسموح به. لذلك نلتزم بـ:",
            medical_list_1: "معايير مكافحة العدوى العالمية (JCI).",
            medical_list_2: "أنظمة تنقية الهواء عالية الكفاءة (HEPA Filters).",
            medical_list_3: "الأرضيات والحوائط المضادة للبكتيريا والساكنة.",
            medical_btn: "طلب استشارة فنية",
            nav_contact: "تواصل معنا"
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            medical_badge: "Integrated Medical Solutions",
            ser_6_h: "Medical Engineering Department",
            ser_6_p: "We specialize in equipping health facilities with the latest engineering solutions for operating rooms, isolation, and sterilization units according to international specifications.",
            medical_op_title: "Operating Room Equipment",
            medical_op_desc: "Design and implementation of modular operating rooms (Modular OR) with full control over airflow and pressure.",
            medical_iso_title: "Isolation & Sterilization Units",
            medical_iso_desc: "Equipping negative pressure isolation rooms and central sterilization units (CSSD) to ensure the highest safety levels.",
            medical_gas_title: "Medical Gas Networks",
            medical_gas_desc: "Design and installation of oxygen, medical air, and central vacuum systems with extreme engineering precision.",
            medical_commit_title: "Our Commitment to Medical Standards",
            medical_commit_desc: "At QSC, we realize that errors in medical engineering are not permitted. Therefore, we adhere to:",
            medical_list_1: "International Infection Control Standards (JCI).",
            medical_list_2: "High-Efficiency Particulate Air (HEPA Filters).",
            medical_list_3: "Anti-bacterial and anti-static floors and walls.",
            medical_btn: "Request Technical Consultation",
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