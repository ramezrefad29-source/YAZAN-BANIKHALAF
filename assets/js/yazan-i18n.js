/**
 * English with Yazan — Fail-Proof Bilingual Translation Engine (EN ↔ AR)
 * Normalizes all whitespace (tabs, newlines) to guarantee 100% dictionary matching
 */

const T = {
  // === HEADER & BRAND ===
  "English with Yazan": "الإنجليزية مع يزن",
  "Book a Session": "احجز جلسة",
  "Home": "الرئيسية",
  "About": "عن يزن",
  "About Me": "عن يزن",
  "Courses": "الدورات",
  "Level Quiz": "اختبار المستوى",
  "Achievements": "الإنجازات",
  "Testimonials": "آراء الطلاب",
  "Contact": "التواصل",
  "Contact Me": "تواصل معي",

  // === HERO ===
  "INSTRUCTOR": "المدرّب",
  "Hello! I'm Yazan": "مرحباً! أنا يزن",
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

  // === QUIZ ===
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

  // === ROADMAP ===
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

  // === ABOUT SECTION ===
  "I am dedicated to helping you master the English language through practical, confidence-building methods. My teaching goes beyond textbooks — I focus on real-world fluency that transforms how you communicate.": "أنا ملتزم بمساعدتك على إتقان اللغة الإنجليزية من خلال أساليب عملية تبني الثقة. تدريسي يتجاوز الكتب — أركز على الطلاقة الواقعية التي تغيّر طريقة تواصلك.",
  "My Journey with English...": "رحلتي مع الإنجليزية...",
  "From being unable to express myself in English to scoring 7.5 on the IELTS, earning a TKT CLIL Band 4 certification, and becoming an internationally certified English coach.": "من عدم القدرة على التعبير عن نفسي بالإنجليزية إلى تحقيق 7.5 في الـ IELTS، والحصول على شهادة TKT CLIL باند 4، والتحول إلى مدرب إنجليزي دولي معتمد.",
  "Years ago, despite my engineering degree, I struggled to speak English. Confidence was zero, and job rejections kept coming. That's when I made a firm decision to master the language no matter what. Through daily commitment, continuous practice, and learning from mistakes, I achieved fluency.": "قبل سنوات، رغم شهادتي الهندسية، كنت أعاني من التحدث بالإنجليزية. الثقة كانت صفر، والرفض من الوظائف مستمر. حينها قررت بشكل حازم إتقان اللغة مهما كلف الأمر. من خلال الالتزام اليومي والممارسة المستمرة والتعلم من الأخطاء، حققت الطلاقة.",
  "Over time, my students began calling me \"Conversation Messi\" because of my unique ability to help anyone talk about any topic in English — even if it's their first time encountering it. The secret isn't just memorizing thousands of words; it's learning how to build sentences, organize thoughts, and use techniques that make you express yourself smoothly in any situation.": "مع الوقت، بدأ طلابي يسمونني \"ميسي المحادثة\" بسبب قدرتي الفريدة على مساعدة أي شخص للتحدث عن أي موضوع بالإنجليزية — حتى لو كانت أول مرة يصادفه. السر ليس مجرد حفظ آلاف الكلمات؛ بل تعلم كيفية بناء الجمل وتنظيم الأفكار واستخدام تقنيات تجعلك تعبر عن نفسك بسلاسة في أي موقف.",
  "Years Experience": "سنوات خبرة",
  "IELTS Band Score": "درجة IELTS باند",

  // === GLOBE ===
  "✦ Global Reach & Online Tutoring": "✦ انتشار عالمي وتدريس أونلاين",
  "Students From Around": "طلاب من جميع أنحاء",
  "The Entire World": "العالم بأكمله",
  "Whether you are located in Jordan, Saudi Arabia, UAE, Qatar, the UK, Germany, Canada, or Japan — my interactive online courses bring world-class English coaching directly to your screen via Zoom.": "سواء كنت في الأردن، السعودية، الإمارات، قطر، بريطانيا، ألمانيا، كندا، أو اليابان — دوراتي التفاعلية عبر الإنترنت توصل تدريب إنجليزي عالمي مباشرة إلى شاشتك عبر زووم.",
  "Join an international community of 500+ successful learners across 30+ countries who conquered their fear of speaking, mastered real-life conversation, and achieved Band 7+ on the IELTS exam.": "انضم لمجتمع دولي من 500+ متعلم ناجح في 30+ دولة تغلبوا على خوفهم من التحدث، أتقنوا المحادثة الواقعية، وحققوا باند 7+ في امتحان الـ IELTS.",
  "Join Our Global Class": "انضم لصفنا العالمي",

  // === COURSES & TAGS ===
  "COURSES": "الدورات",
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

  // === COURSE DETAILS ===
  "✦ Adult Conversation Course — Details & Pricing": "✦ دورة المحادثة للكبار — التفاصيل والأسعار",
  "Professional conversation training designed to break fear, build confidence, and achieve natural speaking fluency.": "تدريب محادثة احترافي مصمم لكسر الخوف وبناء الثقة وتحقيق طلاقة طبيعية بالتحدث.",
  "What You'll Learn & Experience:": "ما ستتعلمه وتختبره:",
  "✦ Interactive, comfortable atmosphere encouraging free speaking without fear of mistakes": "✦ أجواء تفاعلية ومريحة تشجع على التحدث بحرية بدون خوف من الأخطاء",
  "✦ Practical role-playing exercises, discussions simulating daily life, work, and travel": "✦ تمارين لعب أدوار عملية، ومناقشات تحاكي الحياة اليومية والعمل والسفر",
  "✦ Instant error correction with clear explanations of structure and grammar": "✦ تصحيح فوري للأخطاء مع شرح واضح للبنية والقواعد",
  "✦ Intensive speaking practice in every single meeting": "✦ ممارسة تحدث مكثفة في كل جلسة",
  "✦ Focus on improving fluency, pronunciation, and rapid response speed": "✦ التركيز على تحسين الطلاقة والنطق وسرعة الاستجابة",
  "✦ Master essential daily idioms and expressions used by native speakers": "✦ إتقان التعبيرات اليومية الأساسية التي يستخدمها المتحدثون الأصليون",
  "✦ Continuous progress tracking with practical homework assignments after each session": "✦ متابعة تقدم مستمرة مع واجبات عملية بعد كل جلسة",
  "✦ Small group sizes to ensure max participation for every student": "✦ مجموعات صغيرة لضمان أقصى مشاركة لكل طالب",
  "What You Will Achieve:": "ما ستحققه:",
  "Speak English with greater confidence and noticeable fluency": "التحدث بالإنجليزية بثقة أكبر وطلاقة ملحوظة",
  "Improve pronunciation and express yourself naturally": "تحسين النطق والتعبير عن نفسك بشكل طبيعي",
  "Master everyday vocabulary for real-world situations": "إتقان المفردات اليومية للمواقف الواقعية",
  "Stop translating literally — start thinking in English": "التوقف عن الترجمة الحرفية — البدء بالتفكير بالإنجليزية",
  "Increase your conversation response speed without hesitation": "زيادة سرعة استجابتك بالمحادثة بدون تردد",
  "Develop strong listening and comprehension skills": "تطوير مهارات استماع وفهم قوية",
  "Build a solid language foundation for work, study, and travel": "بناء أساس لغوي متين للعمل والدراسة والسفر",
  "Private Lessons (1-on-1) Pricing:": "أسعار الدروس الخصوصية (فردي):",
  "12 Sessions / 1 Month": "12 جلسة / شهر واحد",
  "24 Sessions / 2 Months": "24 جلسة / شهرين",
  "36 Sessions / 3 Months": "36 جلسة / 3 أشهر",
  "72 Sessions / 6 Months": "72 جلسة / 6 أشهر",
  "Available on Request": "متاح عند الطلب",
  "Full Fluency Track": "مسار الطلاقة الكاملة",
  "Group of 4 Pricing:": "أسعار مجموعة 4 طلاب:",
  "Book This Course": "احجز هذه الدورة",
  "Book IELTS Course": "احجز دورة IELTS",
  "Book Interview Prep": "احجز تدريب المقابلات",

  // === IELTS COURSE ===
  "✦ IELTS Speaking 7+ Course — Details & Pricing": "✦ دورة IELTS محادثة 7+ — التفاصيل والأسعار",
  "Intensive, specialized training to help you score Band 7+ in the IELTS Speaking section with confidence.": "تدريب مكثف ومتخصص لمساعدتك على تحقيق باند 7+ في قسم المحادثة بثقة.",
  "How The Course Works:": "كيف تعمل الدورة:",
  "✦ Number of sessions is determined after an initial Level Assessment session": "✦ عدد الجلسات يُحدد بعد جلسة تقييم المستوى الأولية",
  "✦ Comprehensive Assessment to pinpoint strengths and key improvement areas": "✦ تقييم شامل لتحديد نقاط القوة ومجالات التحسين الرئيسية",
  "✦ Includes a Full Mock Test before your exam date under realistic exam conditions": "✦ يتضمن اختبار تجريبي كامل قبل موعد الامتحان بظروف واقعية",
  "Course Content & Features:": "محتوى الدورة ومميزاتها:",
  "✦ Intensive practical training on Part 1, Part 2 & Part 3 with customized strategies": "✦ تدريب عملي مكثف على Part 1 و Part 2 و Part 3 باستراتيجيات مخصصة",
  "✦ Immediate correction of Grammar, Vocabulary, and Pronunciation errors": "✦ تصحيح فوري لأخطاء القواعد والمفردات والنطق",
  "✦ Techniques to structure complex answers fluently without hesitation": "✦ تقنيات لبناء إجابات معقدة بطلاقة بدون تردد",
  "✦ Learn advanced Band 7+ vocabulary, connectors, and idiomatic structures": "✦ تعلم مفردات باند 7+ متقدمة وروابط وتراكيب اصطلاحية",
  "✦ Realistic Mock Interviews simulating the exact IELTS Speaking test format": "✦ مقابلات تجريبية واقعية تحاكي شكل اختبار IELTS بالضبط",
  "✦ Detailed performance breakdown after each session with actionable feedback": "✦ تحليل أداء تفصيلي بعد كل جلسة مع ملاحظات قابلة للتنفيذ",
  "✦ Time management techniques for speaking smoothly under exam pressure": "✦ تقنيات إدارة الوقت للتحدث بسلاسة تحت ضغط الامتحان",
  "Pricing (60 min per session):": "الأسعار (60 دقيقة لكل جلسة):",

  // === INTERVIEW COURSE ===
  "✦ Job & Embassy Visa Interview Preparation — Details & Pricing": "✦ تحضير مقابلات العمل والسفارة — التفاصيل والأسعار",
  "Targeted 1-on-1 coaching for corporate job interviews and US / UK / Schengen Embassy visa interviews in English.": "تدريب فردي موجّه لمقابلات الشركات ومقابلات السفارة الأمريكية/البريطانية/شنغن باللغة الإنجليزية.",
  "Session Objectives:": "أهداف الجلسة:",
  "✦ Boost overall interview confidence and formal communication skills": "✦ تعزيز الثقة العامة بالمقابلات ومهارات التواصل الرسمي",
  "✦ Master technical & HR responses for top multinational companies": "✦ إتقان الردود التقنية وردود الموارد البشرية لأكبر الشركات متعددة الجنسيات",
  "✦ Practice US, UK & Schengen Embassy visa interview questions": "✦ ممارسة أسئلة مقابلات السفارة الأمريكية والبريطانية وشنغن",
  "✦ Deliver clear, persuasive, well-structured answers": "✦ تقديم إجابات واضحة ومقنعة ومنظمة بشكل جيد",
  "✦ Refine pronunciation, formal tone, and executive vocabulary": "✦ صقل النطق والنبرة الرسمية والمفردات التنفيذية",
  "What You Get:": "ما ستحصل عليه:",
  "✦ Simulated mock job & visa interviews tailored to your exact target": "✦ مقابلات عمل وفيزا تجريبية مخصصة لهدفك بالضبط",
  "✦ Real-time feedback and correction of language & tone errors": "✦ ملاحظات فورية وتصحيح أخطاء اللغة والنبرة",
  "✦ Body language, confidence, and vocal delivery coaching": "✦ تدريب على لغة الجسد والثقة وإلقاء الصوت",
  "✦ Actionable advice to stand out and secure job & visa approvals": "✦ نصائح عملية للتميز وضمان الموافقة على الوظائف والتأشيرات",
  "Pricing (50 min per session):": "الأسعار (50 دقيقة لكل جلسة):",
  "1 Session": "جلسة واحدة",
  "2 Sessions": "جلستين",
  "3 Sessions": "3 جلسات",

  // === ACHIEVEMENTS & CERTIFICATIONS ===
  "✦ Verified Credentials & Milestones": "✦ المؤهلات والاعتمادات الرسمية",
  "Professional Qualifications & Achievements 🏆": "الشهادات والإنجازات المهنية 🏆",
  "IELTS Band 7.5 Certificate": "شهادة IELTS باند 7.5 الرسمية",
  "Cambridge Official Exam Result": "نتيجة امتحان كامبريدج الرسمية",
  "TKT CLIL Band 4 Teaching Certificate": "شهادة تدريس TKT CLIL باند 4",
  "Cambridge Assessment English Credential": "اعتماد كامبريدج لتعليم الإنجليزية",
  "International Certified Trainer Credential": "اعتماد مدرب دولي معتمد",
  "Certified Professional English Coach": "مدرب إنجليزي محترف معتمد",
  "500+ Students Coached Worldwide": "500+ طالب تم تدريبهم حول العالم",
  "Proven Fluency & IELTS Success Milestone": "إنجاز مثبت بالطلاقة واختبار IELTS",
  "\"Conversation Messi\" Community Title": "لقب مجتمعي \"ميسي المحادثة\"",
  "Student Community Recognition": "تقدير وتكريم من مجتمع الطلاب",
  "Global Students Across 30+ Countries": "طلاب في أكثر من 30 دولة حول العالم",
  "Worldwide Tutoring Impact": "أثر تدريب عالمي وانتشار دولي",
  "IELTS Band 7.5 Achievement": "إنجاز IELTS باند 7.5",
  "500+ Students Coached": "500+ طالب تم تدريبهم",
  "TKT CLIL Band 4 Certified": "شهادة TKT CLIL باند 4",
  "\"Conversation Messi\" Title": "لقب \"ميسي المحادثة\"",
  "CERTIFICATION": "شهادة",
  "ACHIEVEMENT": "إنجاز",
  "MILESTONE": "إنجاز بارز",
  "GLOBAL": "عالمي",
  "RECOGNITION": "تقدير",
  "Discover": "اكتشف",
  "My Journey": "رحلتي",

  // === TESTIMONIALS ===
  "Honest testimonials from students highlighting my commitment to quality, personalized teaching & results-driven English training that delivers real progress": "شهادات صادقة من طلاب تبرز التزامي بالجودة والتدريس المخصص والتدريب الموجه بالنتائج الذي يحقق تقدماً حقيقياً",
  "Training with Yazan was a complete turning point. He helped me overcome my fear of speaking English and gave me the exact strategies I needed to score 7.5 in IELTS Speaking. Highly recommended!": "التدريب مع يزن كان نقطة تحول كاملة. ساعدني أتغلب على خوفي من التحدث بالإنجليزية وأعطاني بالضبط الاستراتيجيات اللي احتجتها لأحقق 7.5 في IELTS Speaking. أنصح فيه بشدة!",
  "Ahmad Al-Masri": "أحمد المصري",
  "IELTS Student (Band 7.5 Score)": "طالب IELTS (درجة باند 7.5)",
  "Yazan's job interview coaching was practical and brilliant. He prepared me for every single technical question, improved my tone and delivery, and I landed my dream job offer!": "تدريب يزن على مقابلات العمل كان عملي وممتاز. حضّرني لكل سؤال تقني، حسّن نبرتي وطريقة إلقائي، وحصلت على عرض وظيفتي المثالية!",
  "Sarah Khalil": "سارة خليل",
  "Job Interview Trainee": "متدربة مقابلات عمل",

  // === FAQ ===
  "Frequently Asked Questions": "الأسئلة الشائعة",
  "How long is each session?": "كم مدة كل جلسة؟",
  "Each session duration is 60 minutes for Conversation & IELTS, and 50 minutes for Job/Visa Interview Preparation.": "مدة كل جلسة هي 60 دقيقة لدروس المحادثة واختبار IELTS، و 50 دقيقة لتحضير مقابلات العمل والتأشيرة (السفارة).",
  "Are lessons conducted online or in-person?": "هل الدروس أونلاين أم حضورية؟",
  "All lessons are held online via Zoom, allowing students from anywhere around the world to join easily and comfortably.": "جميع الدروس تُعقد أونلاين عبر برنامج زووم (Zoom)، مما يسمح للطلاب من أي مكان في العالم بالانضمام بسهولة وراحة من منازلهم.",
  "What level of English do I need to enroll?": "ما مستوى الإنجليزية المطلوب للتسجيل؟",
  "All levels are welcome! We start with an individual 30-Minute Assessment Session to evaluate your current level, understand your goals, and tailor the perfect learning plan.": "جميع المستويات مرحب بها! نبدأ بجلسة تقييم فردية مدتها 30 دقيقة لتقييم مستواك الحالي، فهم أهدافك، وتصميم خطة التعلم المثالية لك.",
  "Can I reschedule a session if something comes up?": "هل يمكنني تغيير موعد الجلسة إذا حصل طارئ؟",
  "Yes, sessions can be rescheduled easily with at least 24 hours advance notice via WhatsApp.": "نعم، يمكن إعادة جدولة الجلسات بسهولة مع إشعار مسبق لا يقل عن 24 ساعة عبر الواتساب.",
  "How can I pay for the courses?": "كيف يمكنني الدفع؟",
  "Payment can be made via Bank Transfer, CliQ (in Jordan), or international transfer options. Full payment details are provided upon booking.": "يمكن الدفع عن طريق التحويل البنكي، أو تطبيق كليك (CliQ داخل الأردن)، أو خيارات التحويل الدولي. يتم توفير تفاصيل الدفع الكاملة عند الحجز.",

  // === HANGING PHOTO & FOOTER ===
  "Eng. Yazan Bani Khalaf": "م. يزن بني خلف",
  "Certified International English Instructor": "مدرب إنجليزي دولي معتمد",
  "Certified IELTS & Conversation Instructor": "مدرب IELTS ومحادثة معتمد",
  "Let's Start Your English Journey": "لنبدأ رحلتك مع الإنجليزية",
  "Amman, Jordan": "عمّان، الأردن",
  "Submit Message": "إرسال الرسالة",
  "close": "إغلاق",
  "© 2025 English with Yazan. All rights reserved": "© 2025 الإنجليزية مع يزن. جميع الحقوق محفوظة",
  "results": "نتائج",
  "Yazan": "يزن",
  "Home / الرئيسية": "الرئيسية",
  "About / عن يزن": "عن يزن",
  "Courses / الدورات": "الدورات",
  "Level Quiz / اختبار المستوى": "اختبار المستوى",
  "Achievements / الإنجازات": "الإنجازات",
  "Testimonials / آراء الطلاب": "آراء الطلاب",
  "Contact / التواصل": "التواصل",
  "Home,": "الرئيسية،",
  "About Me,": "عن يزن،",
  "Courses,": "الدورات،",
  "Level Quiz,": "اختبار المستوى،",
  "Methodology,": "المنهجية،"
};

// Helper: Normalize all whitespace to single spaces for fail-proof matching
function norm(str) {
  return (str || '').replace(/\s+/g, ' ').trim();
}

// Normalized dictionaries
const NT = {};
const NRevT = {};

for (const [k, v] of Object.entries(T)) {
  NT[norm(k)] = v;
  NRevT[norm(v)] = k;
}

let currentLang = 'en';

function translatePage(lang) {
  currentLang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.body.classList.toggle('rtl-mode', lang === 'ar');

  const dict = lang === 'ar' ? NT : NRevT;

  // 1. Element-level Translation (Handles elements with text or mixed formatting)
  const selectors = 'h1, h2, h3, h4, h5, h6, p, span, a, button, li, label, strong, small, td, th';
  document.querySelectorAll(selectors).forEach(el => {
    // Skip scripts, styles, SVGs, and lang buttons
    if (el.closest('script') || el.closest('style') || el.closest('svg')) return;
    if (el.id === 'lang-float-btn' || el.id === 'lang-toggle-btn' || el.id === 'lang-toggle-btn-mobile') return;

    // Save original English text on first pass
    if (!el._origEnText) {
      el._origEnText = norm(el.textContent);
    }

    const key = lang === 'ar' ? el._origEnText : norm(el.textContent);
    if (dict[key]) {
      // If direct match, set translated text cleanly
      el.textContent = dict[key];
    }
  });

  // 2. Text-Node Level Translation (TreeWalker fallback)
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if (parent.closest('svg')) return NodeFilter.FILTER_REJECT;
        if (parent.id === 'lang-float-btn' || parent.id === 'lang-toggle-btn' || parent.id === 'lang-toggle-btn-mobile') return NodeFilter.FILTER_REJECT;
        const key = norm(node.textContent);
        if (!key || key.length < 2) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(node => {
    if (!node._origText) {
      node._origText = norm(node.textContent);
    }

    const key = lang === 'ar' ? node._origText : norm(node.textContent);
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  // 3. Translate Placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const ph = norm(el.getAttribute('placeholder'));
    if (!el._origPh) el._origPh = ph;
    const key = lang === 'ar' ? el._origPh : ph;
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  // 4. Update Language Toggle Buttons
  document.querySelectorAll('#lang-float-btn, #lang-toggle-btn, #lang-toggle-btn-mobile').forEach(btn => {
    btn.innerHTML = lang === 'ar'
      ? '<i class="ph-bold ph-translate"></i> English'
      : '<i class="ph-bold ph-translate"></i> عربي';
  });

  // 5. Direct FAQ Translation (bypasses generic walker for reliability)
  const faqData = [
    {
      btnId: 'faq-btn-1',
      answerId: 'faq1',
      q_en: 'How long is each session?',
      q_ar: 'كم مدة كل جلسة؟',
      a_en: 'Each session duration is <strong>60 minutes</strong> for Conversation & IELTS, and <strong>50 minutes</strong> for Job/Visa Interview Preparation.',
      a_ar: 'مدة كل جلسة هي <strong>60 دقيقة</strong> لدروس المحادثة واختبار IELTS، و <strong>50 دقيقة</strong> لتحضير مقابلات العمل والتأشيرة (السفارة).'
    },
    {
      btnId: 'faq-btn-2',
      answerId: 'faq2',
      q_en: 'Are lessons conducted online or in-person?',
      q_ar: 'هل الدروس أونلاين أم حضورية؟',
      a_en: 'All lessons are held online via Zoom, allowing students from anywhere around the world to join easily and comfortably.',
      a_ar: 'جميع الدروس تُعقد أونلاين عبر برنامج زووم (Zoom)، مما يسمح للطلاب من أي مكان في العالم بالانضمام بسهولة وراحة من منازلهم.'
    },
    {
      btnId: 'faq-btn-3',
      answerId: 'faq3',
      q_en: 'What level of English do I need to enroll?',
      q_ar: 'ما مستوى الإنجليزية المطلوب للتسجيل؟',
      a_en: 'All levels are welcome! We start with an individual 30-Minute Assessment Session to evaluate your current level, understand your goals, and tailor the perfect learning plan.',
      a_ar: 'جميع المستويات مرحب بها! نبدأ بجلسة تقييم فردية مدتها 30 دقيقة لتقييم مستواك الحالي، فهم أهدافك، وتصميم خطة التعلم المثالية لك.'
    },
    {
      btnId: 'faq-btn-4',
      answerId: 'faq4',
      q_en: 'Can I reschedule a session if something comes up?',
      q_ar: 'هل يمكنني تغيير موعد الجلسة إذا حصل طارئ؟',
      a_en: 'Yes, sessions can be rescheduled easily with at least 24 hours advance notice via WhatsApp.',
      a_ar: 'نعم، يمكن إعادة جدولة الجلسات بسهولة مع إشعار مسبق لا يقل عن 24 ساعة عبر الواتساب.'
    },
    {
      btnId: 'faq-btn-5',
      answerId: 'faq5',
      q_en: 'How can I pay for the courses?',
      q_ar: 'كيف يمكنني الدفع؟',
      a_en: 'Payment can be made via Bank Transfer, CliQ (in Jordan), or international transfer options. Full payment details are provided upon booking.',
      a_ar: 'يمكن الدفع عن طريق التحويل البنكي، أو تطبيق كليك (CliQ داخل الأردن)، أو خيارات التحويل الدولي. يتم توفير تفاصيل الدفع الكاملة عند الحجز.'
    }
  ];

  faqData.forEach(faq => {
    const btn = document.getElementById(faq.btnId);
    const answerDiv = document.getElementById(faq.answerId);
    if (btn) {
      btn.textContent = lang === 'ar' ? faq.q_ar : faq.q_en;
    }
    if (answerDiv) {
      const body = answerDiv.querySelector('.faq-answer-body');
      if (body) {
        body.innerHTML = lang === 'ar' ? faq.a_ar : faq.a_en;
      }
    }
  });

  updateBookingLinks(lang);

  // Sync Quiz if active
  if (typeof renderQuizCurrentStep === 'function') {
    try { renderQuizCurrentStep(); } catch(e) {}
  }

  localStorage.setItem('yazan-lang', lang);
}

function toggleLanguage() {
  translatePage(currentLang === 'en' ? 'ar' : 'en');
}

const WA_MSGS = {
  en: {
    1: "Hello Yazan! 👋 I'm interested in the *Adult Conversation Course*. I'd like to know more and book a session. Thank you!",
    2: "Hello Yazan! 👋 I'm interested in the *IELTS Speaking 7+ Course*. I'd like to book an assessment session. Thank you!",
    3: "Hello Yazan! 👋 I'm interested in *Job & Embassy Interview Training*. Thank you!",
    general: "Hello Yazan! 👋 I'm interested in your English courses. Thank you!"
  },
  ar: {
    1: "مرحبا يزن! 👋 أنا مهتم بـ *دورة المحادثة للكبار*. أود معرفة المزيد وحجز جلسة. شكراً!",
    2: "مرحبا يزن! 👋 أنا مهتم بـ *دورة IELTS محادثة 7+*. أود حجز جلسة تقييم. شكراً!",
    3: "مرحبا يزن! 👋 أنا مهتم بـ *تدريب مقابلات العمل والسفارة*. شكراً!",
    general: "مرحبا يزن! 👋 أنا مهتم بدوراتك لتعليم الإنجليزية. شكراً!"
  }
};

function updateBookingLinks(lang) {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    const cid = link.dataset.courseId || 'general';
    const msgs = WA_MSGS[lang] || WA_MSGS['en'];
    const msg = msgs[cid] || msgs['general'];
    link.href = 'https://wa.me/962789287978?text=' + encodeURIComponent(msg);
  });
}

function injectRTLStyles() {
  if (document.getElementById('rtl-styles')) return;
  const s = document.createElement('style');
  s.id = 'rtl-styles';
  s.textContent = `.rtl-mode, .rtl-mode * { font-family: 'Tajawal', 'Inter', sans-serif !important; }`;
  document.head.appendChild(s);
  const f = document.createElement('link');
  f.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap';
  f.rel = 'stylesheet';
  document.head.appendChild(f);
}

function initI18n() {
  injectRTLStyles();
  const saved = localStorage.getItem('yazan-lang');
  if (saved === 'ar') {
    setTimeout(() => translatePage('ar'), 150);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  setTimeout(initI18n, 150);
}
