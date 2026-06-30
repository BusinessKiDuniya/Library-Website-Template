// ============================================================
// AYODDHYA LIBRARY — Central Data File
// All content and copy lives here for easy editing.
// Source: https://ayoddhyalibrary.com/
// ============================================================

export const SITE = {
  name: "Ayoddhya Library",
  shortName: "Ayoddhya Library",
  tagline: "Nurturing Minds, Shaping Tomorrow",
  alternateTagline: "विद्या का मंदिर",
  description:
    "Ayoddhya Library began in 2023 as an experimental masterpiece — a dedicated sanctuary for the focused mind. Founded on a Teacher's Mindset, it positions itself as The Original Benchmark of Excellence, built by listening to students and crafting spaces where every detail nurtures potential and discipline.",
  founded: "2023",
  phone: "+91 9312252526",
  whatsapp: "+919312252526",
  whatsappLink: "https://wa.me/919312252526",
  landline: "011-41251402",
  email: "",
  address:
    "2nd, 3rd, and 4th Floor, A-1/31,32, Sec-06 Rohini, Ayodhya Chowk, Delhi 110085",
  shortAddress: "A-1/31,32, Sec-06 Rohini, Ayodhya Chowk, Delhi 110085",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1!2d77.3!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzEyLjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin",
  mapLink: "https://maps.app.goo.gl/xCyBu1MQHrW78Fmn7",
  connectPortal:
    "https://docs.google.com/forms/d/e/1FAIpQLSdS-LeLneYWWrPvzovxptVsN5ta6PQCIswI7aq_tIlmiy1LKQ/viewform?usp=header",
  hours: {
    weekday: "Connected 24/7",
    weekend: "Connected 24/7",
    onSite: "Hours not published — please contact for current timings",
  },
  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    linkedin: "",
  },
  logo: "/ayoddhya/logo/logo.png",
  heroImages: [
    "/ayoddhya/hero/annual-meet.jpg",
    "/ayoddhya/hero/library-setup.jpg",
    "/ayoddhya/hero/setup-2023.jpg",
  ],
};

// ── STATS ───────────────────────────────────────────────────
export const STATS = [
  { value: 2023, suffix: "", label: "Year Founded" },
  { value: 3, suffix: "", label: "Floors of Focus" },
  { value: 10, suffix: "", label: "Seats in Executive Room" },
  { value: 35, suffix: "+", label: "Years of Mentorship" },
];

// ── FEATURES / ECOSYSTEM ────────────────────────────────────
export const FEATURES = [
  {
    icon: "Building2",
    title: "Building Lift",
    description:
      "The first library in the vicinity to offer building lift access — convenience that sets us apart from the rest.",
    color: "blue",
  },
  {
    icon: "Crown",
    title: "Executive Room",
    description:
      "A premium, ultra-quiet room limited to just 10 people for the ultimate silent, focused work experience.",
    color: "gold",
  },
  {
    icon: "Sofa",
    title: "TV & Sofa Lounge",
    description:
      "Take mindful breaks in our dedicated TV and sofa lounge — designed to refresh, not distract.",
    color: "purple",
  },
  {
    icon: "Wind",
    title: "Air Purifiers & Heaters",
    description:
      "Breathe easy in every season — air purifiers and heaters keep the library comfortable year-round.",
    color: "cyan",
  },
  {
    icon: "ArrowUp",
    title: "Private Lift Access",
    description:
      "Dedicated private lift inside the library for seamless, contactless movement between floors.",
    color: "indigo",
  },
  {
    icon: "Utensils",
    title: "Dedicated Cafeteria Floor",
    description:
      "A full floor reserved for meals and refreshments — so homely food never disturbs your study zone.",
    color: "orange",
  },
  {
    icon: "Thermometer",
    title: "Smart ACs",
    description:
      "Climate-controlled halls with smart ACs that are serviced monthly throughout the summer for consistent comfort.",
    color: "emerald",
  },
  {
    icon: "Table",
    title: "Oversized Study Tables",
    description:
      "Tables 1.5x–2x the standard size — generous space for laptops, books, notebooks, and more.",
    color: "slate",
  },
  {
    icon: "Lamp",
    title: "Slim LED Desk Lights",
    description:
      "Individual, glare-free slim LED desk lights at every seat so your eyes never strain during long sessions.",
    color: "amber",
  },
  {
    icon: "Fan",
    title: "Advanced Exhaust & Ventilation",
    description:
      "A thoughtfully engineered ventilation system keeps every floor fresh, even during long hours of study.",
    color: "teal",
  },
  {
    icon: "Coffee",
    title: "Pantry & Hydration",
    description:
      "Hot and cold purified water on every floor, plus microwave and kettle access in the pantry.",
    color: "violet",
  },
  {
    icon: "BookOpen",
    title: "Premium Study Basics",
    description:
      "Desk mats, bamboo tissues, monthly planners, and habit trackers — thoughtful touches that elevate your routine.",
    color: "rose",
  },
  {
    icon: "Gamepad2",
    title: "Relaxation Zone",
    description:
      "Recharge with Jenga, Chess, Ludo, Snakes & Ladders, and curated books between focused sessions.",
    color: "pink",
  },
  {
    icon: "Tv",
    title: "TV Lounge with Sofas",
    description:
      "A cozy TV lounge with sofas to unwind, decompress, and reset before your next study block.",
    color: "red",
  },
  {
    icon: "Users",
    title: "Full-Time Support",
    description:
      "Physical staff on site, WhatsApp assistance anytime, and daily digital newspaper — always supported, never alone.",
    color: "blue",
  },
  {
    icon: "Wifi",
    title: "High-Speed Wi-Fi",
    description:
      "Fast, reliable internet for research, online classes, and seamless connectivity throughout the library.",
    color: "purple",
  },
  {
    icon: "Sparkles",
    title: "Clean Washrooms",
    description:
      "Spotlessly maintained washrooms cleaned throughout the day — hygiene you can feel at every visit.",
    color: "emerald",
  },
];

// ── MEMBERSHIP PLANS ────────────────────────────────────────
// Note: Pricing is not publicly published on ayoddhyalibrary.com.
// Connect via WhatsApp / Connect Portal for current pricing.
export const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    price: null,
    duration: "month",
    popular: false,
    description: "Flexible month-to-month access for short-term preparation",
    features: [
      "Access to all study floors",
      "High-speed Wi-Fi",
      "Smart AC environment",
      "Individual LED desk lights",
      "Oversized study tables",
      "Pantry & hydration access",
      "Cafeteria floor access",
      "TV & sofa lounge",
      "Full-time staff support",
    ],
    cta: "Connect With Us",
    color: "slate",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: null,
    duration: "3 months",
    popular: false,
    description: "Ideal for semester and quarterly exam cycles",
    features: [
      "Everything in Monthly",
      "Private lift access",
      "Relaxation zone access",
      "Premium study basics",
      "Digital newspaper daily",
      "WhatsApp priority support",
    ],
    cta: "Connect With Us",
    color: "blue",
  },
  {
    id: "half-yearly",
    name: "Half-Yearly",
    price: null,
    duration: "6 months",
    popular: true,
    description: "Our most loved plan — long-term focus, best value",
    features: [
      "Everything in Quarterly",
      "Executive Room access (limited)",
      "Advanced ventilation priority",
      "Monthly planners & habit trackers",
      "Coffee with Sir sessions",
      "Priority seating selection",
    ],
    cta: "Most Popular",
    color: "emerald",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: null,
    duration: "year",
    popular: false,
    description: "The ultimate membership for serious, long-haul learners",
    features: [
      "Everything in Half-Yearly",
      "Annual Meet & Greet invite",
      "Reserved seat guarantee",
      "Guest pass access",
      "Personal mentorship guidance",
      "Library network access",
      "Invites to exclusive events",
    ],
    cta: "Go Premium",
    color: "gold",
  },
];

// ── FACILITIES SHOWCASE ──────────────────────────────────────
export const FACILITIES = [
  {
    id: "executive-room",
    title: "Executive Room",
    subtitle: "Premium silence for 10",
    description:
      "Limited to just 10 members, the Executive Room is our most exclusive space — built for those who need absolute quiet, maximum privacy, and uninterrupted concentration for the most demanding work.",
    imageAlt: "Exclusive executive room for focused premium members",
    tag: "Exclusive",
    image: "/ayoddhya/study-spaces/space-1.jpg",
  },
  {
    id: "cafeteria",
    title: "Dedicated Cafeteria Floor",
    subtitle: "A full floor for meals & breaks",
    description:
      "Our cafeteria occupies an entire floor so members can enjoy homely food, conversations, and breaks without ever disturbing the silent study zones. Refreshments, microwave, kettle, and comfortable seating — all on their own floor.",
    image: "/ayoddhya/cafeteria/cafeteria-1.jpg",
    imageAlt: "Spacious cafeteria floor with refreshments and seating",
    tag: "Refreshments",
  },
  {
    id: "tv-lounge",
    title: "TV & Sofa Lounge",
    subtitle: "Recharge before you refocus",
    description:
      "A cozy lounge with sofas and TV — perfect for mindful breaks, decompressing between sessions, and returning to your study refreshed and re-energized.",
    image: "/ayoddhya/cafeteria/cafeteria-3.jpg",
    imageAlt: "Comfortable TV and sofa lounge for relaxation",
    tag: "Lounge",
  },
  {
    id: "relaxation",
    title: "Relaxation Zone",
    subtitle: "Play, read, recharge",
    description:
      "Step away from the desk and into our Relaxation Zone — Jenga, Chess, Ludo, Snakes & Ladders, and a curated library of books offer the perfect way to refresh your mind between deep study sessions.",
    image: "/ayoddhya/cafeteria/cafeteria-5.jpg",
    imageAlt: "Relaxation zone with games and reading materials",
    tag: "Wellness",
  },
  {
    id: "study-spaces",
    title: "Study Spaces",
    subtitle: "Where actual magic happens",
    description:
      "Our flagship study floors are designed around one principle — distraction-free focus. Oversized tables, individual LED lights, smart ACs, and a strict silence culture create the ideal environment for deep work and exam preparation.",
    image: "/ayoddhya/study-spaces/space-2.jpg",
    imageAlt: "Spacious and well-lit main study hall with rows of study desks",
    tag: "Main Hall",
  },
  {
    id: "lift",
    title: "Private Lift Access",
    subtitle: "First in the vicinity",
    description:
      "We're the first library in the area to offer building and private lift access — making it effortless to move between our floors with books, bags, and gear.",
    image: "/ayoddhya/study-spaces/space-4.jpg",
    imageAlt: "Private building lift access inside the library",
    tag: "Convenience",
  },
];

// ── TESTIMONIALS / ASPIRANT APPRECIATIONS ──────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Preet Chaudhary",
    role: "Library Member",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    text: "Ayoddhya Library is truly ✨ विद्या का मंदिर ✨ The facilities, the staff and the ambience is truly remarkable!!",
  },
  {
    id: 2,
    name: "Ashish Parashar",
    role: "Library Member",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    text: "Tough to find libraries that wildly compare. You'll find a down-to-earth and ever-helpful guide and guru in the form of Rajbir sir.",
  },
  {
    id: 3,
    name: "Shiwani Bhardwaj",
    role: "Library Member",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
    text: "Extremely clean... bright lighting makes it easy to read for long hours. The Cafeteria is a great bonus.",
  },
  {
    id: 4,
    name: "Diksha Baniwal",
    role: "Library Member",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    text: "Coming for the last 1 year. A lift is available to easily access all floors, and ACs keep the place perfectly cool.",
  },
  {
    id: 5,
    name: "Aryan Adhiraj",
    role: "Library Member",
    avatar: "/images/avatar-5.jpg",
    rating: 5,
    text: "It has truly exceeded my expectations... clean washrooms, high-speed Wi-Fi, and a cozy cafeteria to relax.",
  },
  {
    id: 6,
    name: "Parth Goyal",
    role: "Library Member",
    avatar: "/images/avatar-6.jpg",
    rating: 5,
    text: "Fully air-conditioned and well-lit. We can have lunch without disturbing other students. They even have games for passing time.",
  },
];

// ── FAQ ──────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: "When was Ayoddhya Library founded?",
    answer:
      "Ayoddhya Library was founded in 2023 as an experimental masterpiece — a dedicated sanctuary for the focused mind, curated under the leadership of Meena Kumari.",
  },
  {
    question: "Where is Ayoddhya Library located?",
    answer:
      "We are located on the 2nd, 3rd, and 4th Floors of A-1/31,32, Sec-06 Rohini, Ayodhya Chowk, Delhi 110085 — with dedicated building and private lift access.",
  },
  {
    question: "How can I contact Ayoddhya Library?",
    answer:
      "Reach us on WhatsApp at +91 9312252526, call our landline at 011-41251402, or fill out our Connect Portal form. Our team responds promptly and is happy to answer any questions.",
  },
  {
    question: "What is the Executive Room?",
    answer:
      "The Executive Room is our most premium, ultra-quiet space limited to just 10 members. It is designed for those who need absolute silence and maximum privacy for the most demanding work.",
  },
  {
    question: "Do you offer mentorship programs?",
    answer:
      "Yes! We host 'Coffee with Sir' — monthly open discussions led by Rajbir Sir, who brings 35+ years of teaching experience to offer career guidance, life advice, and personalized feedback.",
  },
  {
    question: "What amenities are included for members?",
    answer:
      "Members enjoy high-speed Wi-Fi, smart ACs, oversized tables, individual LED desk lights, pantry & hydration on every floor, a dedicated cafeteria floor, TV & sofa lounge, a relaxation zone with games, clean washrooms, and full-time physical and WhatsApp support.",
  },
  {
    question: "Is food available on-site?",
    answer:
      "Yes — our entire cafeteria floor is reserved for meals and refreshments so members can enjoy homely food without disturbing the silent study zones. The pantry also includes a microwave and kettle for member use.",
  },
  {
    question: "Are there community events?",
    answer:
      "Absolutely! We host Annual Meet & Greets including our Diwali Party, featuring guest teachers with 25+ years of experience (such as Jaideep Sir for English). It's our way of celebrating the learning community year-round.",
  },
  {
    question: "What is the Wall of Fame?",
    answer:
      "The Wall of Fame honors students who have secured positions in their exams — our stars who sailed their ships off to duties. It's a tribute to the dedication of our members and the support of our community.",
  },
  {
    question: "Do you have a private lift?",
    answer:
      "Yes — Ayoddhya Library is the first library in the vicinity to offer building and private lift access, making it effortless to move between floors with books, bags, and gear.",
  },
];

// ── BLOG POSTS ───────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "nurturing-minds-shaping-tomorrow",
    title: "The Teacher's Mindset Behind Ayoddhya Library",
    excerpt:
      "How a teacher's perspective shaped every corner of Ayoddhya Library — from oversized tables to silent study zones, every detail nurtures potential and discipline.",
    category: "Our Story",
    readTime: "5 min read",
    date: "June 25, 2026",
    image: "/ayoddhya/hero/library-setup.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "coffee-with-sir",
    title: "Coffee with Sir: The Mentorship Series That Changes Everything",
    excerpt:
      "A look inside our monthly open discussions with Rajbir Sir — 35+ years of teaching wisdom distilled into honest conversations about career, life, and learning.",
    category: "Mentorship",
    readTime: "6 min read",
    date: "June 18, 2026",
    image: "/ayoddhya/events/career-counselling.jpg",
    featured: false,
  },
  {
    id: 3,
    slug: "original-benchmark-of-excellence",
    title: "Why We Set the Standard So High (And Why It Matters)",
    excerpt:
      "We set the standard so high that competitors began to copy us — chairs, lighting, layout and more. Here is the philosophy behind our original benchmark of excellence.",
    category: "Philosophy",
    readTime: "4 min read",
    date: "June 12, 2026",
    image: "/ayoddhya/study-spaces/space-3.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "cafeteria-philosophy",
    title: "Our Cafeteria Philosophy: Why Food Stays Off the Study Floor",
    excerpt:
      "We dedicated an entire floor to meals and breaks so homely food never disturbs the silent study zones. Here is the thinking behind that choice.",
    category: "Philosophy",
    readTime: "4 min read",
    date: "June 5, 2026",
    image: "/ayoddhya/cafeteria/cafeteria-2.jpg",
    featured: false,
  },
  {
    id: 5,
    slug: "wall-of-fame",
    title: "Wall of Fame: Honoring Our Stars Who Sailed Off to Duties",
    excerpt:
      "Every name on our Wall of Fame represents a journey of discipline, focus, and community support. Meet the students who made it.",
    category: "Community",
    readTime: "7 min read",
    date: "May 28, 2026",
    image: "/ayoddhya/events/physical-wall.jpg",
    featured: false,
  },
  {
    id: 6,
    slug: "executive-room-experience",
    title: "Inside the Executive Room: Premium Silence for 10",
    excerpt:
      "Limited to just 10 members, our Executive Room is built for absolute quiet and maximum privacy. Here is what makes it the most exclusive space in the library.",
    category: "Facilities",
    readTime: "5 min read",
    date: "May 20, 2026",
    image: "/ayoddhya/study-spaces/space-5.jpg",
    featured: false,
  },
];

// ── TEAM MEMBERS ────────────────────────────────────────────
export const TEAM = [
  {
    name: "Meena Kumari",
    role: "Founder & Curator",
    image: "/images/team-1.jpg",
    bio: "The visionary behind Ayoddhya Library — curated the entire space with a Teacher's Mindset, listening to students and crafting every detail to nurture potential and discipline.",
  },
  {
    name: "Rajbir Sir",
    role: "Mentor & Guide",
    image: "/images/team-2.jpg",
    bio: "Brings 35+ years of teaching experience to Ayoddhya Library through 'Coffee with Sir' — monthly open discussions on career guidance, life, and honest feedback.",
  },
  {
    name: "Jaideep Sir",
    role: "Guest Mentor — English",
    image: "/images/team-3.jpg",
    bio: "Featured guest teacher with 25+ years of experience in English, joining our Annual Meet & Greets to share wisdom and inspire our community of learners.",
  },
];

// ── WALL OF FAME (ACHIEVERS) ────────────────────────────────
export const WALL_OF_FAME = {
  tagline: "Our stars who sailed their ships off to duties, inspiring those still in the harbor.",
  physicalWallImage: "/ayoddhya/events/physical-wall.jpg",
  achievers: Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: `/ayoddhya/wall-of-fame/achiever-${i + 1}.jpg`,
  })),
};

// ── MENTORSHIP & EVENTS ─────────────────────────────────────
export const EVENTS = [
  {
    id: "coffee-with-sir",
    title: "Coffee with Sir",
    description:
      "Monthly open discussions led by Rajbir Sir, leveraging 35+ years of teaching experience for career guidance, life advice, and honest feedback. A signature Ayoddhya tradition.",
    image: "/ayoddhya/events/career-counselling.jpg",
    tag: "Monthly",
  },
  {
    id: "annual-meet-greet",
    title: "Annual Meet & Greets",
    description:
      "Yearly community gatherings that bring members and celebrated teachers together. Featured guests include teachers with 25+ years of experience such as Jaideep Sir (English).",
    image: "/ayoddhya/hero/annual-meet.jpg",
    tag: "Yearly",
  },
  {
    id: "diwali-party",
    title: "Diwali Party",
    description:
      "Our flagship annual celebration — a festive evening where the entire Ayoddhya community comes together to celebrate the year, the wins, and the bonds that built them.",
    image: "/ayoddhya/events/diwali.jpg",
    tag: "Annual",
  },
  {
    id: "career-counselling",
    title: "Career Counselling Sessions",
    description:
      "Dedicated career guidance sessions that help members align their preparation with real-world opportunities — both in India and abroad.",
    image: "/ayoddhya/events/career-counselling.jpg",
    tag: "Workshop",
  },
];

// ── GALLERY CATEGORIES ──────────────────────────────────────
export const GALLERY_CATEGORIES = [
  "All",
  "Study Spaces",
  "Cafeteria",
  "Executive Room",
  "Lounge",
  "Events",
  "Wall of Fame",
];

// ── GALLERY IMAGES ──────────────────────────────────────────
export const GALLERY_IMAGES = [
  // Study Spaces
  { src: "/ayoddhya/study-spaces/space-1.jpg", category: "Study Spaces", alt: "Study hall seating area" },
  { src: "/ayoddhya/study-spaces/space-2.jpg", category: "Study Spaces", alt: "Library study desks" },
  { src: "/ayoddhya/study-spaces/space-3.jpg", category: "Study Spaces", alt: "Premium study cabin" },
  { src: "/ayoddhya/study-spaces/space-4.jpg", category: "Study Spaces", alt: "Study space lighting" },
  { src: "/ayoddhya/study-spaces/space-5.jpg", category: "Study Spaces", alt: "Library interior" },
  // Cafeteria
  { src: "/ayoddhya/cafeteria/cafeteria-1.jpg", category: "Cafeteria", alt: "Cafeteria floor" },
  { src: "/ayoddhya/cafeteria/cafeteria-2.jpg", category: "Cafeteria", alt: "Cafeteria seating" },
  { src: "/ayoddhya/cafeteria/cafeteria-3.jpg", category: "Cafeteria", alt: "Refreshment zone" },
  { src: "/ayoddhya/cafeteria/cafeteria-4.jpg", category: "Cafeteria", alt: "Dining area" },
  { src: "/ayoddhya/cafeteria/cafeteria-5.jpg", category: "Cafeteria", alt: "Lounge and games area" },
  { src: "/ayoddhya/cafeteria/cafeteria-6.jpg", category: "Cafeteria", alt: "Community dining" },
  { src: "/ayoddhya/cafeteria/cafeteria-7.jpg", category: "Cafeteria", alt: "Breakout space" },
  { src: "/ayoddhya/cafeteria/cafeteria-8.jpg", category: "Cafeteria", alt: "Cafeteria ambience" },
  // Lounge
  { src: "/ayoddhya/hero/library-setup.jpg", category: "Lounge", alt: "TV and sofa lounge" },
  // Events
  { src: "/ayoddhya/hero/annual-meet.jpg", category: "Events", alt: "Annual Meet & Greet 2025" },
  { src: "/ayoddhya/events/diwali.jpg", category: "Events", alt: "Diwali Party" },
  { src: "/ayoddhya/events/event-1.jpg", category: "Events", alt: "Community event" },
  { src: "/ayoddhya/events/event-2.jpg", category: "Events", alt: "Workshop session" },
  { src: "/ayoddhya/events/event-3.jpg", category: "Events", alt: "Member gathering" },
  { src: "/ayoddhya/events/career-counselling.jpg", category: "Events", alt: "Career counselling" },
  // Wall of Fame
  { src: "/ayoddhya/events/physical-wall.jpg", category: "Wall of Fame", alt: "Physical Wall of Fame" },
  ...Array.from({ length: 15 }, (_, i) => ({
    src: `/ayoddhya/wall-of-fame/achiever-${i + 1}.jpg`,
    category: "Wall of Fame",
    alt: `Wall of Fame achiever ${i + 1}`,
  })),
];

// ── RULES ───────────────────────────────────────────────────
export const RULES = [
  {
    category: "Silence & Conduct",
    items: [
      "Maintain strict silence inside all study halls and reading areas.",
      "Talking is permitted only on the Cafeteria Floor and lounge areas.",
      "Mobile phones must be on silent mode at all times.",
      "Do not play audio without headphones. Even headphone audio at high volume is discouraged.",
      "Be respectful and courteous to all staff and fellow members.",
    ],
  },
  {
    category: "Entry & Exit",
    items: [
      "Carry your membership card or valid ID on every visit.",
      "Members must sign in at reception on entry and sign out on departure.",
      "Entry is restricted to registered members and authorized guests only.",
      "Day pass visitors must complete the registration process before entering.",
    ],
  },
  {
    category: "Food & Beverages",
    items: [
      "Food and beverages are permitted only on the dedicated Cafeteria Floor.",
      "Water bottles are allowed at all seats on study floors.",
      "Hot meals and strongly aromatic food are not permitted inside study halls.",
      "Please use the pantry's microwave and kettle for personal food preparation.",
    ],
  },
  {
    category: "Seat & Facility Policy",
    items: [
      "Seats cannot be reserved by leaving belongings unattended for more than 30 minutes.",
      "Do not occupy multiple seats simultaneously.",
      "Executive Room access is limited to authorized members only.",
      "Report any damaged furniture or equipment to reception immediately.",
    ],
  },
  {
    category: "Safety & Security",
    items: [
      "The library is under 24/7 CCTV surveillance. Suspicious activity will be reported.",
      "In case of emergency, follow staff instructions and exit via the nearest fire escape.",
      "Use the private lift with care and follow posted safety guidelines.",
      "Any form of theft, harassment, or misconduct will result in immediate membership cancellation without refund.",
    ],
  },
];

// ── FOUNDING STORY ──────────────────────────────────────────
export const FOUNDING_STORY = {
  title: "An Experimental Masterpiece",
  subtitle: "The Vision & Journey",
  paragraphs: [
    "Ayoddhya Library launched in 2023 as an experimental masterpiece. Rather than simply supplying desks and chairs, the founders aimed to design a sanctuary for focused study — gathering direct input from students about gaps in their preparation.",
    "A Teacher's Mindset philosophy guided the build, positioning the venue as the original benchmark whose visual cues (chairs, lighting, layout) were later imitated by competitors.",
  ],
  quote: "We set the standard so high that competitors began to copy us…",
};

// ── NAVIGATION ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];