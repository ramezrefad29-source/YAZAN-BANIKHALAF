/**
 * English with Yazan — Bulletproof Bilingual Translation System (EN ↔ AR)
 */

const TRANSLATIONS = {
  // ========== HEADER & HERO ==========
  "Book a Session": "احجز جلسة",
  "INSTRUCTOR": "المدرّب",
  "Hello! I'm Yazan": "مرحباً، أنا يزن",
  "a certified international English instructor & conversation coach.": "مدرب إنجليزي دولي معتمد ومدرب محادثة.",
  "IELTS Preparation (Band 7+)": "تحضير IELTS (باند 7+)",
  "Conversation Mastery": "إتقان المحادثة",
  "Job & Visa Interview Coaching": "تدريب مقابلات العمل والسفارة",
  "Fluency Coaching": "تدريب الطلاقة",
  "Pronunciation & Confidence": "النطق والثقة",
  "Teaching English, building confidence, changing lives worldwide.": "تعليم الإنجليزية، بناء الثقة، تغيير حياة الطلاب حول العالم.",
  "Explore Courses": "استعرض الدورات",
  "Free Level Quiz 🧭": "اختبار المستوى المجاني 🧭",
  "Student Satisfaction Rate": "نسبة رضا الطلاب",
  "Students Coached": "طالب تم تدريبهم",
  "Countries Worldwide": "دولة حول العالم",

  // ========== QUIZ ==========
  "✦ Instant Level Evaluation": "✦ تقييم مستوى فوري",
  "Test Your English Level In 60 Seconds 🧭": "اختبر مستواك في الإنجليزية بـ 60 ثانية 🧭",
  "Answer these 4 quick questions to evaluate your speaking & fluency baseline and get personalized course recommendations instantly.": "أجب على 4 أسئلة سريعة لتقييم مستواك في التحدث والطلاقة واحصل على توصيات فورية بالدورة المناسبة.",
  "FREE ASSESMENT": "تقييم مجاني",
  "Question 1 of 4": "السؤال 1 من 4",
  "Question 2 of 4": "السؤال 2 من 4",
  "Question 3 of 4": "السؤال 3 من 4",
  "Question 4 of 4": "السؤال 4 من 4",
  "How do you feel when you speak English with native speakers or in job interviews?": "كيف تشعر عندما تتحدث الإنجليزية مع أشخاص أصليين أو في مقابلات العمل؟",
  "A) Very hesitant, I freeze or translate literally from Arabic in my head.": "أ) متردد جداً، أتجمد أو أترجم حرفياً من العربي في رأسي.",
  "B) I can speak basic sentences, but struggle with vocabulary & complex grammar.": "ب) أقدر أحكي جمل بسيطة، لكن أواجه صعوبة بالمفردات والقواعد المعقدة.",
  "C) Good fluency, but I need Band 7+ IELTS score or professional executive polish.": "ج) طلاقة جيدة، لكن أحتاج سكور باند 7+ بالـ IELTS أو صقل مهني تنفيذي.",
  "What is your main English objective right now?": "ما هو هدفك الأساسي من الإنجليزية الآن؟",
  "A) Speak English with natural fluency without fear or hesitation.": "أ) أتحدث الإنجليزية بطلاقة طبيعية بدون خوف أو تردد.",
  "B) Achieve Band 7.5+ in the official IELTS exam.": "ب) تحقيق باند 7.5+ في امتحان الـ IELTS الرسمي.",
  "C) Pass a corporate job interview or Embassy visa interview.": "ج) اجتياز مقابلة عمل أو مقابلة سفارة للفيزا.",
  "How much time can you dedicate per week to practice?": "كم وقت تقدر تخصص أسبوعياً للتمرين؟",
  "A) 2 to 3 sessions per week (Focused progress).": "أ) 2 إلى 3 حصص أسبوعياً (تقدم مركّز).",
  "B) 3 to 4 sessions per week (Fast-track intensive track).": "ب) 3 إلى 4 حصص أسبوعياً (مسار مكثف سريع).",
  "C) Flexible weekend scheduling.": "ج) جدول مرن في عطلة نهاية الأسبوع.",
  "Which learning mode do you prefer?": "أي نمط تعلم تفضل؟",
  "A) 1-on-1 Private Coaching (Max focus & custom speed).": "أ) تدريب خصوصي فردي (أقصى تركيز وسرعة مخصصة).",
  "B) Duo Track (2 Friends learning together).": "ب) مسار ثنائي (صديقان يتعلمان معاً).",
  "C) Small Interactive Group (4 Students Max).": "ج) مجموعة تفاعلية صغيرة (4 طلاب كحد أقصى).",
  "Assessment Complete!": "اكتمل التقييم!",
  "Book Free 30-Min Level Session": "احجز جلسة تقييم مجانية 30 دقيقة",

  // ========== ROADMAP ==========
  "✦ Proven Teaching Methodology": "✦ منهجية تدريس مثبتة",
  "Your 5-Step Fluency Transformation 🚀": "رحلتك للطلاقة في 5 خطوات 🚀",
  "From hesitating to speak to natural fluency & scoring Band 7.5+ on the IELTS exam.": "من التردد بالتحدث إلى الطلاقة الطبيعية وتحقيق باند 7.5+ في امتحان الـ IELTS.",
  "30-Min Assessment Session": "جلسة تقييم 30 دقيقة",
  "We evaluate your current speaking level, identify root causes of hesitation, and map out your goal.": "نقيّم مستواك الحالي بالتحدث، نحدد أسباب التردد الجذرية، ونرسم خطة لهدفك.",
  "Break Speaking Fear": "كسر حاجز الخوف من التحدث",
  "A safe, supportive environment designed to eliminate fear of making mistakes in every single class.": "بيئة آمنة وداعمة مصممة لإزالة الخوف من الأخطاء في كل حصة.",
  "Sentence Structure & Idioms": "بناء الجمل والتعبيرات",
  "Stop literal Arabic translation. Master rapid sentence construction, native expressions, and vocabulary.": "توقف عن الترجمة الحرفية. أتقن بناء الجمل السريع والتعبيرات والمفردات الأصلية.",
  "Live Mock Interviews & Role-Play": "مقابلات تجريبية حية ولعب أدوار",
  "Simulate real IELTS speaking tests, job interviews, or embassy visa interviews under realistic conditions.": "محاكاة اختبارات IELTS الحقيقية، مقابلات العمل، أو مقابلات السفارة بظروف واقعية.",
  "Fluency & Score Achievement": "تحقيق الطلاقة والدرجة",
  "Achieve Band 7.5+, land your dream job offer, or travel with absolute English confidence.": "حقق باند 7.5+، احصل على عرض العمل المثالي، أو سافر بثقة تامة بالإنجليزية.",

  // ========== ABOUT ==========
  "I am dedicated to helping you master the English language through practical, confidence-building methods. My teaching goes beyond textbooks — I focus on real-world fluency that transforms how you communicate.": "أنا ملتزم بمساعدتك على إتقان اللغة الإنجليزية من خلال أساليب عملية تبني الثقة. تدريسي يتجاوز الكتب — أركز على الطلاقة الواقعية التي تغيّر طريقة تواصلك.",
  "My Journey with English...": "رحلتي مع الإنجليزية...",

  // ========== GLOBE ==========
  "✦ Global Reach & Online Tutoring": "✦ انتشار عالمي وتدريس أونلاين",
  "Students From Around": "طلاب من جميع أنحاء",
  "The Entire World": "العالم بأكمله",

  // ========== COURSES ==========
  "Adult Conversation Course": "دورة المحادثة للكبار",
  "IELTS Speaking 7+ Course": "دورة IELTS محادثة 7+",
  "Job & Embassy Interview Training": "تدريب مقابلات العمل والسفارة",
  "✦ Adult Conversation Course — Details & Pricing": "✦ دورة المحادثة للكبار — التفاصيل والأسعار",
  "Professional conversation training designed to break fear, build confidence, and achieve natural speaking fluency.": "تدريب محادثة احترافي مصمم لكسر الخوف وبناء الثقة وتحقيق طلاقة طبيعية بالتحدث.",
  "✦ IELTS Speaking 7+ Course — Details & Pricing": "✦ دورة IELTS محادثة 7+ — التفاصيل والأسعار",
  "Intensive, specialized training to help you score Band 7+ in the IELTS Speaking section with confidence.": "تدريب مكثف ومتخصص لمساعدتك على تحقيق باند 7+ في قسم المحادثة بثقة.",
  "✦ Job & Embassy Visa Interview Preparation — Details & Pricing": "✦ تحضير مقابلات العمل والسفارة — التفاصيل والأسعار",
  "Targeted 1-on-1 coaching for corporate job interviews and US / UK / Schengen Embassy visa interviews in English.": "تدريب فردي موجّه لمقابلات الشركات ومقابلات السفارة الأمريكية/البريطانية/شنغن باللغة الإنجليزية.",

  "What You'll Learn & Experience:": "ما ستتعلمه وتختبره:",
  "What You Will Achieve:": "ما ستحققه:",
  "Private Lessons (1-on-1) Pricing:": "أسعار الدروس الخصوصية (فردي):",
  "Group of 4 Pricing:": "أسعار مجموعة 4 طلاب:",
  "How The Course Works:": "كيف تعمل الدورة:",
  "Course Content & Features:": "محتوى الدورة ومميزاتها:",
  "Session Objectives:": "أهداف الجلسة:",
  "What You Get:": "ما ستحصل عليه:",
  "Book This Course": "احجز هذه الدورة",
  "Book IELTS Course": "احجز دورة IELTS",
  "Book Interview Prep": "احجز تدريب المقابلات",

  // ========== ACHIEVEMENTS ==========
  "IELTS Band 7.5 Achievement": "إنجاز IELTS باند 7.5",
  "500+ Students Coached": "500+ طالب تم تدريبهم",
  "TKT CLIL Band 4 Certified": "شهادة TKT CLIL باند 4",
  "\"Conversation Messi\" Title": 'لقب "ميسي المحادثة"',

  // ========== TRUSTED BY & FAQ ==========
  "Trusted by Students Across 30+ Countries": "موثوق من طلاب في أكثر من 30 دولة",
  "Frequently Asked Questions": "الأسئلة الشائعة",
  "How long is each session?": "كم مدة كل جلسة؟",
  "Are lessons conducted online or in-person?": "هل الدروس أونلاين أم حضورية؟",
  "What level of English do I need to enroll?": "ما مستوى الإنجليزية المطلوب للتسجيل؟",
  "Can I reschedule a session if something comes up?": "هل يمكنني تغيير موعد الجلسة إذا حصل طارئ؟",
  "How can I pay for the courses?": "كيف يمكنني الدفع؟",

  // ========== FOOTER ==========
  "Let's Start Your English Journey": "لنبدأ رحلتك مع الإنجليزية",
  "Eng. Yazan Bani Khalaf": "م. يزن بني خلف",
  "Certified IELTS & Conversation Instructor": "مدرب IELTS ومحادثة معتمد",
  "Quick Links": "روابط سريعة",
  "English with Yazan": "الإنجليزية مع يزن",
  "Submit Message": "إرسال الرسالة",
  "Contact Me": "تواصل معي"
};

let currentLang = 'en';

function translatePage(lang) {
  currentLang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.body.classList.toggle('rtl-mode', lang === 'ar');

  // Translate elements with text
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, label, strong');

  elements.forEach(el => {
    if (el.closest('script') || el.closest('style') || el.closest('svg') || el.id === 'lang-float-btn' || el.id === 'lang-toggle-btn') return;

    const originalText = el.getAttribute('data-orig-en') || el.textContent.trim();
    if (!el.getAttribute('data-orig-en')) {
      el.setAttribute('data-orig-en', originalText);
    }

    if (lang === 'ar') {
      if (TRANSLATIONS[originalText]) {
        el.textContent = TRANSLATIONS[originalText];
      }
    } else {
      if (el.getAttribute('data-orig-en')) {
        el.textContent = el.getAttribute('data-orig-en');
      }
    }
  });

  // Update Buttons
  const floatBtns = document.querySelectorAll('#lang-float-btn, #lang-toggle-btn, #lang-toggle-btn-mobile');
  floatBtns.forEach(btn => {
    if (btn) {
      btn.innerHTML = lang === 'ar' 
        ? '<i class="ph-bold ph-translate"></i> English' 
        : '<i class="ph-bold ph-translate"></i> عربي';
    }
  });

  // Update WhatsApp links
  updateBookingLinks(lang);
  localStorage.setItem('yazan-lang', lang);
}

function toggleLanguage() {
  translatePage(currentLang === 'en' ? 'ar' : 'en');
}

const WHATSAPP_MESSAGES = {
  en: {
    1: "Hello Yazan! 👋 I'm interested in the *Adult Conversation Course*. I'd like to know more about the schedule and book a session. Thank you!",
    2: "Hello Yazan! 👋 I'm interested in the *IELTS Speaking 7+ Course*. I'd like to book an assessment session and know more details. Thank you!",
    3: "Hello Yazan! 👋 I'm interested in *Job & Embassy Interview Training*. I'd like to prepare for my upcoming interview. Thank you!",
    general: "Hello Yazan! 👋 I'm interested in your English courses. I'd like to know more and book a session. Thank you!"
  },
  ar: {
    1: "مرحبا يزن! 👋 أنا مهتم بـ *دورة المحادثة للكبار*. أود معرفة المزيد عن الجدول وحجز جلسة. شكراً!",
    2: "مرحبا يزن! 👋 أنا مهتم بـ *دورة IELTS محادثة 7+*. أود حجز جلسة تقييم ومعرفة المزيد. شكراً!",
    3: "مرحبا يزن! 👋 أنا مهتم بـ *تدريب مقابلات العمل والسفارة*. أود التحضير لمقابلتي القادمة. شكراً!",
    general: "مرحبا يزن! 👋 أنا مهتم بدوراتك لتعليم الإنجليزية. أود معرفة المزيد وحجز جلسة. شكراً!"
  }
};

function updateBookingLinks(lang) {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    const courseId = link.dataset.courseId || 'general';
    const msgs = WHATSAPP_MESSAGES[lang] || WHATSAPP_MESSAGES['en'];
    const msg = msgs[courseId] || msgs['general'];
    link.href = `https://wa.me/962789287978?text=${encodeURIComponent(msg)}`;
  });
}

function injectRTLStyles() {
  if (document.getElementById('rtl-styles')) return;
  const style = document.createElement('style');
  style.id = 'rtl-styles';
  style.textContent = `
    .rtl-mode {
      font-family: 'Tajawal', 'Inter', sans-serif !important;
    }
    .rtl-mode .banner-three-left,
    .rtl-mode .banner-three-right,
    .rtl-mode .service-three-single,
    .rtl-mode .portfolio-three-item {
      text-align: right;
    }
  `;
  document.head.appendChild(style);

  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
}

function initI18n() {
  injectRTLStyles();
  const savedLang = localStorage.getItem('yazan-lang');
  if (savedLang === 'ar') {
    translatePage('ar');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  setTimeout(initI18n, 300);
}
