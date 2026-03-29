/**
 * handasa.js - الخاص بصفحة الهندسة المعمارية والمدنية
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. بيانات الترجمة الخاصة بالصفحة
    const translations = {
        ar: {
            dir: "rtl", // إضافة الاتجاه
            nav_home: "الرئيسية",
            nav_services: "خدماتنا",
            brand_name: "Quality Skills",
            inf_hero_title: "المقاولات العامة والبنية التحتية",
            inf_hero_desc: "نضع الأساس المتين للمستقبل.. تنفيذ شبكات الأنابيب وخطوط الأنابيب والمرافق بأعلى معايير الجودة.",
            inf_roads_title: "شبكات الانابيب المعدنية",
            inf_roads_desc: "تنفيذ شبكات انابيب التبريد وخطوط نقل المياه والغاز والبترول.",
            inf_water_title: "تمديدات المياه والصرف",
            inf_water_desc: "تنفيذ شبكات مياه الشرب، خطوط الصرف الصحي، وشبكات تصريف مياه الأمطار بكفاءة عالية.",
            inf_excav_title: "الحفر والردم والتسوية",
            inf_excav_desc: "أعمال الحفر العميق، نقل التربة، تسوية الموقع العام وتجهيز الأرضيات للمشاريع الصناعية والسكنية.",
            inf_precision_title: "الجودة في التأسيس هي التزامنا",
            inf_precision_desc: "في QSC، ندرك أن قوة أي مشروع تبدأ من بنيته التحتية. نلتزم بأعلى مواصفات الجودة في المواد المستخدمة ونطبق معايير الأمان الدولية والمحلية ( طبقا للأكواد العالمية ASME-ASTM-API-AWWA-EN)",
            inf_feat_1_title: "التنفيذ وفقا للمواصفات   يتم التنفيذ بأعلي مواصفات الجودة و وفقا للمواصفات المطلوبة وذلك حسب رغبة العميل.",
            inf_feat_1_desc: "فحص دقيق للتربة والخرسانة والأسفلت.",
            inf_feat_2_title: "الالتزام الزمني",
            inf_feat_2_desc: "تسليم المرافق والشبكات في الوقت المحدد.",
            inf_cta_btn: "اطلب دراسة لمشروعك",
            nav_rep: "English" // النص اللي هيظهر على الزرار وأنت في العربي
        },
        en: {
            dir: "ltr", // إضافة الاتجاه
            nav_home: "Home",
            nav_services: "Our Services",
            brand_name: "Quality Skills",
            inf_hero_title: "General Contracting & Infrastructure",
            inf_hero_desc: "Laying a solid foundation for the future.. implementing piping and pipeline networks and utilities with high standards.",
            inf_roads_title: "Metal pipe networks",
            inf_roads_desc: "Implementation of cooling pipe networks and water, gas and petroleum transmission lines. ",
            inf_water_title: "Water & Sewage Systems",
            inf_water_desc: "executing HDPE, ductile and GRP pipeline for water, firefighting, sewer and storm water networks with high efficiency.",
            inf_excav_title: "Excavation & Leveling",
            inf_excav_desc: "Deep excavation works, soil hauling, site leveling, and flooring preparation for industrial and residential projects.",
            inf_precision_title: "Quality in Foundation is Our Commitment",
            inf_precision_desc: "At QSC, we understand that the strength of any project starts with its infrastructure. We adhere to the highest quality specifications in the materials used and apply international and local safety standards (according to global codes ASME-ASTM-API-AWWA-EN)",
            inf_feat_1_title: "Implementation according to specifications: Implementation is carried out with the highest quality specifications and in accordance with the required specifications, as per the customer's wishes.",
            inf_feat_1_desc: "High level of quality level through execution works.",
            inf_feat_2_title: "Time Commitment",
            inf_feat_2_desc: "Delivering utilities and networks on the specified schedule.",
            inf_cta_btn: "Request a Project Study",
            nav_rep: "العربية" // النص اللي هيظهر على الزرار وأنت في الإنجليزي
        }
    };

    // 2. تحديد العناصر
    const langBtn = document.getElementById('lang-toggler');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');

    // 3. وظيفة التبديل
    const updateContent = (lang) => {
        // تحديث لغة واتجاه الصفحة
        document.documentElement.lang = lang;
        document.documentElement.dir = translations[lang].dir;

        // ترجمة كل العناصر اللي عندها data-i18n
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

        // تحديث نص الزرار (المهم جداً)
        if (langBtn) {
            langBtn.textContent = translations[lang].nav_rep;
        }

        // حفظ اللغة في المتصفح
        localStorage.setItem('preferredLang', lang);

        // تبديل ملف الـ Bootstrap بناءً على اللغة (RTL vs LTR)
        if (bootstrapLink) {
            if (lang === 'ar') {
                bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css";
            } else {
                bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
            }
        }
    };

    // 4. تشغيل الزر
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // تبديل بين ar و en
            const currentLang = document.documentElement.lang === 'ar' ? 'ar' : 'en'; 
            // السطر اللي فوق كان فيه غلطة منطقية بسيطة، نعدلها:
            const nextLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
            updateContent(nextLang);
        });
    }

    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    updateContent(savedLang);
});