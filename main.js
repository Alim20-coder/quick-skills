document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    reveals.forEach(element => {
        observer.observe(element);
    });

    const translations = {
        ar: {
            dir: "rtl",
            btn_lang: "English",
            nav_home: "الرئيسية",
            nav_about: "عن الشركة",
            nav_services: "خدماتنا",
            nav_who: "من نحن",
            nav_projects: "مشاريعنا",
            nav_partners: "عملاؤنا",
            nav_contact: "تواصل معنا",
            hero_subtitle: "للمقاولات وخدمات خطوط الانابيب",
            hero_desc: "شركة متخصصة في تنفيذ وخدمات خطوط الانابيب- اعمال اللحامات والعزل الداخلي والخارجي للانابيب واختبارات الضغط والتشغيل- اختبارات-تدريب واعمال الاصلاحات والدعم الفني",
            hero_btn_quote: "اطلب عرض سعر",
            hero_btn_services: "خدماتنا",
            about_title: "عن الشركة",
            about_desc: "تعد Quality Skills احدي الشركات المتخصصة في مجال الشركات للبنية التحتية وخطوط الانابيب واختبارات الضغط وعزل الانابيب واعمال التدريب والصيانة ونلتزم بمعايير الجودة والاحترافية لتقديم حلول وتضمن نجاح ورضا عملاءنا..",
            vision_title: "الرؤية",
            vision_desc: "نسعى لتقديم حلول فعالة وآمنة ودعم حقيقي لعملائنا في أعمال البنية التحتية وخدمات خطوط الانابيب.",
            mission_title: "المهمة",
            mission_desc: "خلق نموذج حقيقي لشركة  رائدة في مجال البنية التحتية وخدمات خطوط الانابيب مدعومة بفريق هندسي ذو كفاءة عالية.",
            projects_highlight: "أبرز مشاريعنا",
            project_text: "مشروع",
            ser_title: "خدماتنا",
            ser_1_h: "البنية التحتية ",
ser_1_p: "جميع شبكات البنية التحتية خطوط تبريد (district cooling) شبكات الحريق والصرف والمياه والغاز والكهرباء والفايبر.",            ser_2_h: "الأعمال الكهروميكانيكية (QSC)",
           ser_piping_h: "الأنابيب وشبكات المواسير الداخلية",
ser_piping_p: "تنفيذ جميع الخطوط والشبكات الحديدية والاستانليس لمحطات المياه والمعالجة وشبكات التبريد.",
ser_coating_h: "الطلاء والعزل",
ser_coating_p: "تنفيذ العزل الخارجي للمواسير (الحراري والتغليف علي البارد) والعزل الداخلي للانابيب من الايبوكسي ودهانات الباودر الصالحة للشرب.",
ser_testing_h: "الاختبار والتشغيل",
ser_testing_p: "تنفيذ اختبارات الضغط للشبكات والخطوط حتي ٢٠٠ بار لضمان سلامة وكفاءة الأنظمة والتسليم النهائي للعميل.",
ser_repair_h: "الإصلاح والدعم الفني",
ser_repair_p: "حلول الإصلاح الهندسي السريع وتقديم الدعم التقني المتخصص للمواقع والمشاريع.",
ser_structural_h: "الأعمال الهيكلية والإنشائية",
ser_structural_p: "تنفيذ الأعمال الهيكلية الصناعية والتجارية بأعلى معايير الجودة الإنشائية.",
ser_welders_h: "توريد واختبار اللحامين",
ser_welders_p: "توفير واختبار كفاءة الكوادر الفنية واللحامين المحترفين لمشاريع EPC الكبرى.",
ser_quality_h: "الجودة وتدريب NDT",
ser_quality_p: "تقديم برامج تدريبية متخصصة في مراقبة الجودة والاختبارات غير التدميرية (NDT).",
 who_title: "من نحن....",
            who_roots_h: "الجذور والخبرة التأسيسية",
            who_roots_p: "تأسست Quality Skills (QSC) في عام 2010 في مصر، لتكون منارة للتميز في خدمات خطوط الأنابيب وتأهيل الكوادر الهندسية والفنية، خاصة في مجالات اللحام المتقدم والمشاريع الاستراتيجية للبنية التحتية.",
            who_ksa_h: "التوسع الاستراتيجي في المملكة العربية السعودية",
            who_ksa_p: "في عام 2026، بدأت QSC رحلة استثمارية كبرى في المملكة العربية السعودية من خلال شراكة استراتيجية (Joint Venture) مع شركة سعودية، بهدف نقل خبراتها العميقة والمساهمة في تحقيق رؤية المملكة 2030.",
            who_green_h: "بصمتنا في 'الرياض الخضراء'",
            who_green_p: "أثبتت الشركة قوتها في السوق السعودي من خلال العمل ضمن مجموعات مشروع 'الرياض الخضراء' (Green Riyadh)، حيث قدمنا مستويات تنفيذ عالمية تضمن الجودة والاستدامة، مما جعلنا شريكاً موثوقاً في أهم المشاريع البيئية والإنشائية.",
            who_commit_h: "التزامنا بالجودة والجدول الزمني",
            who_commit_p1: "نحن في QSC نضع رضا العميل في مقدمة أولوياتنا، ملتزمين بتقديم حلول فعالة من حيث التكلفة مع احترام صارم للجداول الزمنية، مدفوعين بقوى عاملة مخلصة وخبرة فنية تتجاوز التوقعات في كل مشروع نسند إليه.",
            who_commit_p2: "تمتد رؤيتنا لتشمل بناء شراكات طويلة الأمد تعتمد على الثقة المتبادلة والنتائج الملموسة، حيث نجمع بين التقنيات الحديثة والمهارة اليدوية الفائقة لتقديم نموذج فريد في قطاع المقاولات الإقليمي.",
            pro_title: "أبرز مشاريعنا",
            pro_type: "النوع:",
            pro_client: "العميل:",
            pro_contractor: "المقاول:",
            pro_scope: "النطاق:",
            loc_riyadh: "الرياض",
            loc_jeddah: "جدة",
            loc_alamein: "العلمين الجديدة",
            loc_noubaria: "النوبارية",
            type_infra: "بنية تحتية",
            type_support: "دعم فني",
            pro_4_h: "أبراج العلمين (NUCA)",
            client_orascom: "أوراسكوم للإنشاءات",
            pro_4_s: "أعمال الكهرباء أبراج A&B",
            pro_5_h: "مصنع لمار للألبان",
            pro_5_s: "تركيب قطع كهروميكانيكية",
            partners_title: "عملاؤنا وشركاء النجاح",
            foot_contact: "تواصل معنا",
            foot_email: "البريد الإلكتروني",
            foot_links: "روابط سريعة",
            foot_follow: "تابعنا وتواصل معنا",
            foot_follow_desc: "تابع جديدنا وعروضنا الخاصة على صفحاتنا الاجتماعية.",
            foot_btn_wa: "تواصل معنا عبر واتساب",
            foot_rights: "جميع الحقوق محفوظة © 2026 شركة QSC للتصميم والبناء.",
            foot_design: "تم التصميم بواسطة",
        },
        en: {
            dir: "ltr",
            btn_lang: "العربية",
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Services",
            nav_who: "Who We Are",
            nav_projects: "Projects",
            nav_partners: "Our Clients",
            nav_contact: "Contact Us",
            hero_subtitle: " for contracting and pipeline services",
            hero_desc: "specialized on pipline and piping construction, welding, internal and external coating, testing and commissioning , testing, training, repairing works and technical support.",
            hero_btn_quote: "Get a Quote",
            hero_btn_services: "Our Services",
            about_title: "About Us",
            about_desc: "We are one of the companies specializing in infrastructure, pipelines, pressure testing, pipe insulation, training and maintenance work, and we are committed to quality and professional standards to provide solutions and ensure the success and satisfaction of our clients.",
            vision_title: "Vision",
            vision_desc: "We strive to provide effective, safe solutions and genuine support to our clients in infrastructure and pipeline services.",
            mission_title: "Mission",
            mission_desc: "Creating a true model for a leading  company in infrastructure and pipeline services , backed by a highly efficient engineering team.",
            projects_highlight: "Featured Projects",
            project_text: "Project",
            ser_title: "Our Services",
            ser_1_h: "Infrastructure",
ser_1_p: "All neural network networks, cooling lines (district cooling), fire and drainage networks, as well as electrical and fiber optic networks.",            ser_2_h: "Electromechanical Works (QSC)",
           ser_piping_h: "Internal Piping and Pipe Networks",
ser_piping_p: "Implementation of all iron and stainless steel lines and networks for water and treatment plants and cooling networks",
ser_coating_h: "Internal & External Coating",
ser_coating_p: "Implementation of external pipe insulation (thermal and cold coating) and internal pipe insulation using epoxy and potable powder coatings.",
ser_testing_h: "Testing & Commissioning",
ser_testing_p: "Performing pressure tests on networks and lines up to 200 bar to ensure the safety and efficiency of systems and final delivery to the customer.",
ser_repair_h: "Repairing & Tech Support",
ser_repair_p: "Quick engineering repair solutions and specialized technical support for project sites.",
ser_structural_h: "Industrial & Commercial Structural Works",
ser_structural_p: "Execution of industrial and commercial structural projects with high-quality standards.",
ser_welders_h: "Supplying & Testing Welders",
ser_welders_p: "Providing and testing qualified welding professionals for major EPC projects.",
ser_quality_h: "Quality & NDT Training",
ser_quality_p: "Specialized training programs in Quality Control and Non-Destructive Testing (NDT).", who_title: "Who we are....",
            who_roots_h: "Roots and Foundational Experience",
            who_roots_p: "Quality Skills (QSC) was founded in 2010 in Egypt, as a beacon of excellence in pipeline services and the qualification of engineering and technical staff, specifically in advanced welding and strategic infrastructure projects.",
            who_ksa_h: "Strategic Expansion in Saudi Arabia",
            who_ksa_p: "In 2026, QSC launched a major investment journey in KSA through a strategic Joint Venture, aiming to transfer its deep expertise and contribute to Saudi Vision 2030.",
            who_green_h: "Our Footprint in 'Green Riyadh'",
            who_green_p: "The company proved its strength in the Saudi market by working within the 'Green Riyadh' project groups, delivering world-class execution levels that ensure quality and sustainability, making us a trusted partner in key environmental and construction projects.",
            who_commit_h: "Commitment to Quality & Schedule",
            who_commit_p1: "At QSC, we put client satisfaction at the forefront, committed to providing cost-effective solutions with strict adherence to timelines, driven by a loyal workforce and technical expertise that exceeds expectations in every assigned project.",
            who_commit_p2: "Our vision extends to building long-term partnerships based on mutual trust and tangible results, combining modern technologies with superior manual skills to present a unique model in the regional contracting sector.",
            pro_title: "Featured Projects",
            pro_type: "Type:",
            pro_client: "Client:",
            pro_contractor: "Contractor:",
            pro_scope: "Scope:",
            loc_riyadh: "Riyadh",
            loc_jeddah: "Jeddah",
            loc_alamein: "New Alamein",
            loc_noubaria: "Noubaria",
            type_infra: "Infrastructure",
            type_support: "Technical Support",
            pro_4_h: "Al Alamein Towers (NUCA)",
            client_orascom: "Orascom Construction",
            pro_4_s: "Electrical works for Towers A & B",
            pro_5_h: "Lamar Dairy Factory",
            pro_5_s: "Electromechanical components installation",
            partners_title: "Our Clients & Success Partners",
            foot_contact: "Contact Us",
            foot_email: "Email & Web",
            foot_links: "Quick Links",
            foot_follow: "Follow Us",
            foot_follow_desc: "Follow our latest news and special offers on social media.",
            foot_btn_wa: "Contact us via WhatsApp",
            foot_rights: "All rights reserved © 2026 QSC Design & Construction.",
            foot_design: "Designed by"
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
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        langBtn.textContent = translations[lang].btn_lang;
        localStorage.setItem('preferredLang', lang);
    };

    langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        updateContent(nextLang);
    });

    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    updateContent(savedLang);
});