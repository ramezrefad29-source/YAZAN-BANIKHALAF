/**
 * English with Yazan — Full Bilingual Translation System (EN ↔ AR)
 * Includes: Language Toggle, Full Arabic Translations, RTL Support, Course-Specific WhatsApp Messages
 */

const TRANSLATIONS = {
  // ========== HEADER ==========
  "Book a Session": "احجز جلسة",
  
  // ========== HERO ==========
  "INSTRUCTOR": "المدرّب",
  "Hello! I'm Yazan": "!مرحباً، أنا يزن",
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
  "Years Experience": "سنوات خبرة",
  "IELTS Band Score": "درجة IELTS",

  // ========== GLOBE ==========
  "✦ Global Reach & Online Tutoring": "✦ انتشار عالمي وتدريس أونلاين",
  "Students From Around": "طلاب من جميع أنحاء",
  "The Entire World": "العالم بأكمله",
  "Join Our Global Class": "انضم لصفنا العالمي",

  // ========== COURSES ==========
  "Adult Conversation Course": "دورة المحادثة للكبار",
  "IELTS Speaking 7+ Course": "دورة IELTS محادثة 7+",
  "Job & Embassy Interview Training": "تدريب مقابلات العمل والسفارة",
  "SPEAKING": "محادثة",
  "FLUENCY": "طلاقة",
  "CONFIDENCE": "ثقة",
  "EXAM PREP": "تحضير امتحان",
  "BAND 7+": "باند 7+",
  "MOCK TESTS": "اختبارات تجريبية",
  "JOB INTERVIEW": "مقابلة عمل",
  "EMBASSY VISA": "فيزا سفارة",

  // Course Detail Headers
  "✦ Adult Conversation Course — Details & Pricing": "✦ دورة المحادثة للكبار — التفاصيل والأسعار",
  "Professional conversation training designed to break fear, build confidence, and achieve natural speaking fluency.": "تدريب محادثة احترافي مصمم لكسر الخوف وبناء الثقة وتحقيق طلاقة طبيعية بالتحدث.",
  "✦ IELTS Speaking 7+ Course — Details & Pricing": "✦ دورة IELTS محادثة 7+ — التفاصيل والأسعار",
  "Intensive, specialized training to help you score Band 7+ in the IELTS Speaking section with confidence.": "تدريب مكثف ومتخصص لمساعدتك على تحقيق باند 7+ في قسم المحادثة بثقة.",
  "✦ Job & Embassy Visa Interview Preparation — Details & Pricing": "✦ تحضير مقابلات العمل والسفارة — التفاصيل والأسعار",
  "Targeted 1-on-1 coaching for corporate job interviews and US / UK / Schengen Embassy visa interviews in English.": "تدريب فردي موجّه لمقابلات الشركات ومقابلات السفارة الأمريكية/البريطانية/شنغن باللغة الإنجليزية.",

  // Course Content Labels
  "What You'll Learn & Experience:": "ما ستتعلمه وتختبره:",
  "What You Will Achieve:": "ما ستحققه:",
  "Private Lessons (1-on-1) Pricing:": "أسعار الدروس الخصوصية (فردي):",
  "Group of 4 Pricing:": "أسعار مجموعة 4 طلاب:",
  "How The Course Works:": "كيف تعمل الدورة:",
  "Course Content & Features:": "محتوى الدورة ومميزاتها:",
  "Session Objectives:": "أهداف الجلسة:",
  "What You Get:": "ما ستحصل عليه:",
  "Pricing (60 min per session):": "الأسعار (60 دقيقة لكل جلسة):",
  "Pricing (50 min per session):": "الأسعار (50 دقيقة لكل جلسة):",
  "Book This Course": "احجز هذه الدورة",
  "Book IELTS Course": "احجز دورة IELTS",
  "Book Interview Prep": "احجز تدريب المقابلات",
  
  // Pricing Cards
  "12 Sessions / 1 Month": "12 جلسة / شهر واحد",
  "24 Sessions / 2 Months": "24 جلسة / شهرين",
  "36 Sessions / 3 Months": "36 جلسة / 3 أشهر",
  "72 Sessions / 6 Months": "72 جلسة / 6 أشهر",
  "Available on Request": "متاح عند الطلب",
  "Full Fluency Track": "مسار الطلاقة الكاملة",
  "1 Session": "جلسة واحدة",
  "2 Sessions": "جلستان",
  "3 Sessions": "3 جلسات",

  // ========== ACHIEVEMENTS ==========
  "IELTS Band 7.5 Achievement": "إنجاز IELTS باند 7.5",
  "500+ Students Coached": "500+ طالب تم تدريبهم",
  "TKT CLIL Band 4 Certified": "شهادة TKT CLIL باند 4",
  "\"Conversation Messi\" Title": 'لقب "ميسي المحادثة"',
  "CERTIFICATION": "شهادة",
  "ACHIEVEMENT": "إنجاز",
  "MILESTONE": "إنجاز بارز",
  "GLOBAL": "عالمي",
  "TEACHING": "تدريس",
  "RECOGNITION": "تقدير",
  "Discover": "اكتشف",
  "My Journey": "رحلتي",

  // ========== CERTIFICATIONS ==========
  "Band Score 7.5 Certificate": "شهادة باند 7.5",
  "Band 4 Teaching Certificate": "شهادة تدريس باند 4",
  "Certified Trainer Credential": "اعتماد مدرب معتمد دولياً",
  "500+ Coached Worldwide": "500+ تم تدريبهم عالمياً",
  "\"Conversation Messi\" Community Title": 'لقب "ميسي المحادثة" من المجتمع',
  "Students Across 30+ Countries": "طلاب في أكثر من 30 دولة",

  // ========== TESTIMONIALS ==========
  "Honest testimonials from students highlighting my commitment to quality, personalized teaching & results-driven English training that delivers real progress": "شهادات صادقة من طلاب تسلط الضوء على التزامي بالجودة والتدريس المخصص والتدريب القائم على النتائج الذي يحقق تقدماً حقيقياً",
  "Training with Yazan was a complete turning point. He helped me overcome my fear of speaking English and gave me the exact strategies I needed to score 7.5 in IELTS Speaking. Highly recommended!": "التدريب مع يزن كان نقطة تحول كاملة. ساعدني أتغلب على خوفي من التحدث بالإنجليزية وأعطاني الاستراتيجيات اللي احتجتها عشان أحقق 7.5 في IELTS محادثة. أنصح فيه بقوة!",
  "Ahmad Al-Masri": "أحمد المصري",
  "IELTS Student (Band 7.5 Score)": "طالب IELTS (درجة باند 7.5)",
  "Yazan's job interview coaching was practical and brilliant. He prepared me for every single technical question, improved my tone and delivery, and I landed my dream job offer!": "تدريب يزن على مقابلات العمل كان عملي ورائع. حضّرني لكل سؤال تقني، حسّن لهجتي وطريقة تقديمي، وحصلت على عرض وظيفة أحلامي!",
  "Sarah Khalil": "سارة خليل",
  "Job Interview Trainee": "متدربة مقابلات عمل",

  // ========== TRUSTED BY ==========
  "Trusted by Students Across 30+ Countries": "موثوق من طلاب في أكثر من 30 دولة",
  "30+ Countries": "30+ دولة",
  "Global Learners": "متعلمون عالميون",
  "500+ Coached": "500+ تم تدريبهم",
  "Successful Students": "طلاب ناجحون",
  "Band 7.5+": "باند 7.5+",
  "IELTS Excellence": "تميز في IELTS",
  "Cambridge": "كامبريدج",
  "TKT CLIL Certified": "معتمد TKT CLIL",
  "Live Zoom": "زووم مباشر",
  "Interactive Classes": "حصص تفاعلية",
  "5.0 / 5.0": "5.0 / 5.0",
  "Top Student Rating": "أعلى تقييم طلاب",

  // ========== FAQ ==========
  "Frequently Asked Questions": "الأسئلة الشائعة",
  "How long is each session?": "كم مدة كل جلسة؟",
  "Are lessons conducted online or in-person?": "هل الدروس أونلاين أم حضورية؟",
  "What level of English do I need to enroll?": "ما مستوى الإنجليزية المطلوب للتسجيل؟",
  "Can I reschedule a session if something comes up?": "هل يمكنني تغيير موعد الجلسة إذا حصل طارئ؟",
  "How can I pay for the courses?": "كيف يمكنني الدفع؟",

  // FAQ Answers
  "Each session duration is <strong>60 minutes</strong> for Conversation & IELTS, and <strong>50 minutes</strong> for Job/Visa Interview Preparation.": "مدة كل جلسة <strong>60 دقيقة</strong> لدورات المحادثة و IELTS، و<strong>50 دقيقة</strong> لتدريب مقابلات العمل والسفارة.",
  "All lessons are held online via Zoom, allowing students from anywhere around the world to join easily and comfortably.": "جميع الدروس أونلاين عبر زووم، مما يتيح للطلاب من أي مكان بالعالم الانضمام بسهولة وراحة.",
  "All levels are welcome! We start with an individual 30-Minute Assessment Session to evaluate your current level, understand your goals, and tailor the perfect learning plan.": "جميع المستويات مرحب بها! نبدأ بجلسة تقييم فردية 30 دقيقة لتقييم مستواك الحالي وفهم أهدافك وتصميم خطة التعلم المثالية.",
  "Yes, sessions can be rescheduled easily with at least 24 hours advance notice via WhatsApp.": "نعم، يمكن تغيير المواعيد بسهولة بإشعار مسبق 24 ساعة على الأقل عبر واتساب.",
  "Payment can be made via Bank Transfer, CliQ (in Jordan), or international transfer options. Full payment details are provided upon booking.": "يمكن الدفع عبر التحويل البنكي أو كليك (في الأردن) أو خيارات التحويل الدولي. تفاصيل الدفع الكاملة تُقدم عند الحجز.",

  // ========== FOOTER ==========
  "Let's Start Your English Journey": "لنبدأ رحلتك مع الإنجليزية",
  "Eng. Yazan Bani Khalaf": "م. يزن بني خلف",
  "Certified IELTS & Conversation Instructor": "مدرب IELTS ومحادثة معتمد",
  "Certified International English Instructor": "مدرب إنجليزي دولي معتمد",
  "Quick Links": "روابط سريعة",
  "English with Yazan": "الإنجليزية مع يزن",
  "© 2025 English with Yazan. All rights reserved": "© 2025 الإنجليزية مع يزن. جميع الحقوق محفوظة",
  "Full Name": "الاسم الكامل",
  "Email Address / Phone Number": "البريد الإلكتروني / رقم الهاتف",
  "Submit Message": "إرسال الرسالة",
  "Contact Me": "تواصل معي",

  // ========== COURSE 1 BULLET ITEMS ==========
  "✦ Interactive, comfortable atmosphere encouraging free speaking without fear of mistakes": "✦ أجواء تفاعلية ومريحة تشجع على التحدث بحرية بدون خوف من الأخطاء",
  "✦ Practical role-playing exercises, discussions simulating daily life, work, and travel": "✦ تمارين لعب أدوار عملية ومناقشات تحاكي الحياة اليومية والعمل والسفر",
  "✦ Instant error correction with clear explanations of structure and grammar": "✦ تصحيح فوري للأخطاء مع شرح واضح للبنية والقواعد",
  "✦ Intensive speaking practice in every single meeting": "✦ ممارسة تحدث مكثفة في كل جلسة",
  "✦ Focus on improving fluency, pronunciation, and rapid response speed": "✦ التركيز على تحسين الطلاقة والنطق وسرعة الاستجابة",
  "✦ Master essential daily idioms and expressions used by native speakers": "✦ إتقان التعبيرات والمصطلحات اليومية المستخدمة من قبل الناطقين الأصليين",
  "✦ Continuous progress tracking with practical homework assignments after each session": "✦ متابعة تقدم مستمرة مع واجبات عملية بعد كل جلسة",
  "✦ Small group sizes to ensure max participation for every student": "✦ مجموعات صغيرة لضمان أقصى مشاركة لكل طالب",

  // Course 1 Achievements
  "Speak English with greater confidence and noticeable fluency": "تحدث الإنجليزية بثقة أكبر وطلاقة ملحوظة",
  "Improve pronunciation and express yourself naturally": "حسّن نطقك وعبّر عن نفسك بشكل طبيعي",
  "Master everyday vocabulary for real-world situations": "أتقن المفردات اليومية للمواقف الواقعية",
  "Stop translating literally — start thinking in English": "توقف عن الترجمة الحرفية — ابدأ بالتفكير بالإنجليزية",
  "Increase your conversation response speed without hesitation": "زد سرعة استجابتك بالمحادثة بدون تردد",
  "Develop strong listening and comprehension skills": "طوّر مهارات استماع وفهم قوية",
  "Build a solid language foundation for work, study, and travel": "ابنِ أساساً لغوياً متيناً للعمل والدراسة والسفر",

  // ========== COURSE 2 BULLET ITEMS (IELTS) ==========
  "✦ Number of sessions is determined after an initial Level Assessment session": "✦ عدد الجلسات يتحدد بعد جلسة تقييم المستوى الأولية",
  "✦ Comprehensive Assessment to pinpoint strengths and key improvement areas": "✦ تقييم شامل لتحديد نقاط القوة ومجالات التحسين الرئيسية",
  "✦ Includes a Full Mock Test before your exam date under realistic exam conditions": "✦ يتضمن اختبار تجريبي كامل قبل موعد امتحانك بظروف واقعية",
  "✦ Intensive practical training on Part 1, Part 2 & Part 3 with customized strategies": "✦ تدريب عملي مكثف على الأجزاء 1 و2 و3 مع استراتيجيات مخصصة",
  "✦ Immediate correction of Grammar, Vocabulary, and Pronunciation errors": "✦ تصحيح فوري لأخطاء القواعد والمفردات والنطق",
  "✦ Techniques to structure complex answers fluently without hesitation": "✦ تقنيات لبناء إجابات معقدة بطلاقة بدون تردد",
  "✦ Learn advanced Band 7+ vocabulary, connectors, and idiomatic structures": "✦ تعلم مفردات وروابط وتراكيب متقدمة لباند 7+",
  "✦ Realistic Mock Interviews simulating the exact IELTS Speaking test format": "✦ مقابلات تجريبية واقعية تحاكي شكل اختبار IELTS المحادثة بالضبط",
  "✦ Detailed performance breakdown after each session with actionable feedback": "✦ تحليل أداء مفصل بعد كل جلسة مع ملاحظات قابلة للتنفيذ",
  "✦ Time management techniques for speaking smoothly under exam pressure": "✦ تقنيات إدارة الوقت للتحدث بسلاسة تحت ضغط الامتحان",

  // ========== COURSE 3 BULLET ITEMS (Interview) ==========
  "✦ Boost overall interview confidence and formal communication skills": "✦ تعزيز الثقة العامة بالمقابلة ومهارات التواصل الرسمي",
  "✦ Master technical & HR responses for top multinational companies": "✦ إتقان الإجابات التقنية وإجابات HR لأكبر الشركات متعددة الجنسيات",
  "✦ Practice US, UK & Schengen Embassy visa interview questions": "✦ التدرب على أسئلة مقابلات السفارة الأمريكية والبريطانية وشنغن",
  "✦ Deliver clear, persuasive, well-structured answers": "✦ تقديم إجابات واضحة ومقنعة ومنظمة",
  "✦ Refine pronunciation, formal tone, and executive vocabulary": "✦ صقل النطق واللهجة الرسمية والمفردات التنفيذية",
  "✦ Simulated mock job & visa interviews tailored to your exact target": "✦ مقابلات تجريبية مخصصة لهدفك بالضبط",
  "✦ Real-time feedback and correction of language & tone errors": "✦ ملاحظات فورية وتصحيح أخطاء اللغة واللهجة",
  "✦ Body language, confidence, and vocal delivery coaching": "✦ تدريب على لغة الجسد والثقة وطريقة إلقاء الصوت",
  "✦ Actionable advice to stand out and secure job & visa approvals": "✦ نصائح عملية للتميز والحصول على الموافقات",

  // ========== NAV & MISC ==========
  "Home": "الرئيسية",
  "About": "عني",
  "Courses": "الدورات",
  "Achievements": "الإنجازات",
  "Testimonials": "آراء الطلاب",
  "Contact": "التواصل",
  "Amman, Jordan": "عمّان، الأردن",
  "close": "إغلاق",
  "results": "النتائج",

  // ========== EXTRA ==========
  "✦ IELTS Speaking 7+ Course — Details & Pricing": "✦ دورة IELTS محادثة 7+ — التفاصيل والأسعار",
  "JOD": "دينار",
};

// ===== STATE =====
let currentLang = 'en';
const originalTexts = new Map();

// ===== CORE TRANSLATION ENGINE =====
function translatePage(lang) {
  currentLang = lang;

  // Set direction
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  // Add/remove RTL class
  document.body.classList.toggle('rtl-mode', lang === 'ar');

  // Walk through all text nodes and translatable elements
  const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, label, input, textarea, td, th, small, strong');

  allElements.forEach(el => {
    // Skip script/style/svg elements
    if (el.closest('script') || el.closest('style') || el.closest('svg')) return;

    // Handle placeholders for inputs
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      const ph = el.getAttribute('placeholder');
      if (ph) {
        if (lang === 'ar') {
          if (!el.dataset.origPlaceholder) el.dataset.origPlaceholder = ph;
          const arPh = TRANSLATIONS[ph];
          if (arPh) el.setAttribute('placeholder', arPh);
        } else {
          if (el.dataset.origPlaceholder) el.setAttribute('placeholder', el.dataset.origPlaceholder);
        }
      }
      return;
    }

    // Handle innerHTML for elements with <strong> tags etc.
    const html = el.innerHTML;
    const text = el.textContent.trim();
    if (!text) return;

    // Check direct children only (skip if has child elements that are also translatable)
    const hasTranslatableChildren = el.querySelector('h1, h2, h3, h4, h5, p, a, span, li, button');
    
    if (lang === 'ar') {
      // Store original
      if (!el.dataset.origHtml) {
        el.dataset.origHtml = html;
        el.dataset.origText = text;
      }

      // Try innerHTML match first (for elements with <strong> etc)
      if (TRANSLATIONS[html.trim()]) {
        el.innerHTML = TRANSLATIONS[html.trim()];
        return;
      }

      // Try text match  
      if (TRANSLATIONS[text] && !hasTranslatableChildren) {
        // If the element has only text (no child elements)
        if (el.childElementCount === 0) {
          el.textContent = TRANSLATIONS[text];
        } else {
          // Has mixed content, try replacing just the text nodes
          replaceTextNodes(el, text, TRANSLATIONS[text]);
        }
        return;
      }
    } else {
      // Restore originals
      if (el.dataset.origHtml) {
        el.innerHTML = el.dataset.origHtml;
        delete el.dataset.origHtml;
        delete el.dataset.origText;
      }
    }
  });

  // Update toggle button text
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.innerHTML = lang === 'ar' 
      ? '<i class="ph-bold ph-translate"></i> EN' 
      : '<i class="ph-bold ph-translate"></i> عربي';
  }

  // Update WhatsApp booking links
  updateBookingLinks(lang);

  // Save preference
  localStorage.setItem('yazan-lang', lang);
}

function replaceTextNodes(el, oldText, newText) {
  // Simple approach: if the trimmed text content matches, replace innerHTML carefully
  if (el.childElementCount === 0) {
    el.textContent = newText;
  }
}

function toggleLanguage() {
  translatePage(currentLang === 'en' ? 'ar' : 'en');
}

// ===== WHATSAPP COURSE-SPECIFIC MESSAGES =====
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

const WHATSAPP_NUMBER = "962789287978";

function getWhatsAppUrl(courseId) {
  const msgs = WHATSAPP_MESSAGES[currentLang] || WHATSAPP_MESSAGES['en'];
  const msg = msgs[courseId] || msgs['general'];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function updateBookingLinks(lang) {
  // Update course booking buttons
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    const courseId = link.dataset.courseId;
    if (courseId) {
      link.href = getWhatsAppUrl(parseInt(courseId));
    }
  });
}

function bookCourse(courseId, event) {
  if (event) event.preventDefault();
  window.open(getWhatsAppUrl(courseId), '_blank');
}

// ===== RTL STYLES =====
function injectRTLStyles() {
  const style = document.createElement('style');
  style.id = 'rtl-styles';
  style.textContent = `
    .rtl-mode {
      font-family: 'Tajawal', 'Inter', sans-serif;
    }
    .rtl-mode .banner-three-left,
    .rtl-mode .banner-three-right,
    .rtl-mode .service-three-single,
    .rtl-mode .portfolio-three-item {
      text-align: right;
    }
    .rtl-mode .d-flex {
      /* flex-direction stays as is, RTL handles it */
    }
    .rtl-mode .marquee_left {
      direction: ltr; /* Keep marquee LTR */
    }
    .rtl-mode .accordion-button::after {
      margin-left: 0;
      margin-right: auto;
    }
    .rtl-mode .tw-text-605,
    .rtl-mode .tw-text-15,
    .rtl-mode .tw-text-2xl,
    .rtl-mode .tw-text-xl,
    .rtl-mode .tw-text-lg {
      line-height: 1.8;
    }
    #lang-toggle-btn {
      background: linear-gradient(135deg, #c8a45a 0%, #ffd700 100%);
      color: #000;
      border: none;
      padding: 8px 18px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 15px rgba(200, 164, 90, 0.4);
    }
    #lang-toggle-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(200, 164, 90, 0.6);
    }
  `;
  document.head.appendChild(style);

  // Add Tajawal font for Arabic
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
}

// ===== INITIALIZATION =====
function initI18n() {
  injectRTLStyles();

  // Add language toggle button to header
  const headerRight = document.querySelector('.header-right');
  if (headerRight) {
    const toggleWrapper = document.createElement('div');
    toggleWrapper.className = 'd-inline-block me-3';
    toggleWrapper.innerHTML = `<button id="lang-toggle-btn" onclick="toggleLanguage()"><i class="ph-bold ph-translate"></i> عربي</button>`;
    headerRight.insertBefore(toggleWrapper, headerRight.firstChild);
  }

  // Add data-course-id to booking buttons
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    const text = link.textContent.trim();
    if (text.includes('Book This Course') || text.includes('احجز هذه الدورة')) {
      link.dataset.courseId = '1';
      link.onclick = (e) => bookCourse(1, e);
    } else if (text.includes('Book IELTS') || text.includes('احجز دورة IELTS')) {
      link.dataset.courseId = '2';
      link.onclick = (e) => bookCourse(2, e);
    } else if (text.includes('Book Interview') || text.includes('احجز تدريب')) {
      link.dataset.courseId = '3';
      link.onclick = (e) => bookCourse(3, e);
    }
  });

  // Check saved language preference
  const savedLang = localStorage.getItem('yazan-lang');
  if (savedLang === 'ar') {
    translatePage('ar');
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  // Small delay to ensure all elements are rendered
  setTimeout(initI18n, 500);
}
