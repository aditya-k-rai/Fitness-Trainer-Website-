// ============================================================
//  SITE CONSTANTS — Single source of truth for all content
// ============================================================

export const SITE = {
  name: "Aneesh Jha",
  title: "Aneesh Jha | Certified Fitness Trainer in Greater Noida",
  description:
    "Aneesh Jha – Certified Personal Trainer in Greater Noida with 8+ years experience. Expert in Fat Loss, Muscle Building, Strength & Conditioning, Athletic Performance and Nutrition Coaching. Book a free consultation today.",
  keywords:
    "fitness trainer Greater Noida, personal trainer Greater Noida, fat loss coach Greater Noida, muscle building trainer Greater Noida, Aneesh Jha trainer, strength conditioning Greater Noida",
  url: "https://aneeshjha.com",
  phone: "+91-9350281197",
  email: "aneeshjhafitnees@gmail.com",
  whatsapp: "919350281197",
  instagram: "https://www.instagram.com/aneesh.jha?igsh=MWFsczhzNmQwbWt6NA==",
  instagramHandle: "@aneesh.jha",
  location: "Greater Noida, Uttar Pradesh, India",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    id: "personal-training",
    number: "01",
    title: "Personal Training",
    description:
      "One-on-one sessions fully customized to your body, goals, and schedule. Every rep, set, and rest period is scientifically programmed for maximum results.",
    features: ["Personalized workout plans", "Form correction & technique", "Progress tracking"],
  },
  {
    id: "athletic-performance",
    number: "02",
    title: "Athletic Performance",
    description:
      "Specialized training for competitive athletes — improve speed, power, agility, and sport-specific endurance to outperform the competition.",
    features: ["Speed & agility drills", "Sport-specific conditioning", "Competition prep programs"],
  },
  {
    id: "strength-conditioning",
    number: "03",
    title: "Strength & Conditioning",
    description:
      "Build a foundation of functional strength and resilience. Programs designed to improve muscular endurance, joint stability, and overall physical capacity.",
    features: ["Compound movement mastery", "Progressive overload systems", "Injury prevention focus"],
  },
  {
    id: "weight-loss",
    number: "04",
    title: "Weight Loss / Fat Loss",
    description:
      "Science-backed fat loss protocols combining targeted training and sustainable nutrition habits. Lose fat, not muscle — and keep it off for good.",
    features: ["Metabolic conditioning", "HIIT & cardio programming", "Body composition tracking"],
    featured: true,
  },
  {
    id: "muscle-building",
    number: "05",
    title: "Muscle Building",
    description:
      "Hypertrophy-focused programs engineered for maximum muscle gain. Structured periodization, recovery optimization, and nutrition timing for elite results.",
    features: ["Hypertrophy programming", "Muscle activation techniques", "Periodization planning"],
  },
  {
    id: "nutrition-coaching",
    number: "06",
    title: "Nutrition & Lifestyle Coaching",
    description:
      "Holistic coaching that goes beyond the gym. Personalized meal planning, lifestyle habits, sleep optimization, and mindset coaching for whole-body transformation.",
    features: ["Custom meal planning", "Macro & calorie guidance", "Lifestyle habit building"],
  },
];

export const WHO_I_TRAIN = [
  {
    id: "beginners",
    title: "Beginners",
    description:
      "Starting from zero? I build you up safely and confidently, step by step — no judgment, just progress.",
  },
  {
    id: "athletes",
    title: "Athletes",
    description:
      "Push your limits with specialized athletic performance training designed to elevate speed, power, and endurance.",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Clients",
    description:
      "Science-backed fat loss protocols with sustainable nutrition habits. Real results, no crash diets.",
  },
  {
    id: "ready-to-transform",
    title: "Anyone Ready to Transform",
    description:
      "All it takes is the decision to start. I'll handle the rest — programming, nutrition, and accountability.",
  },
];

export type TransformType = "weight-loss" | "athletic" | "muscle";

export const TESTIMONIALS: {
  id: string;
  type: TransformType;
  badgeLabel: string;
  statValue: string;
  statLabel: string;
  days: number;
  daysLabel: string;
  stars: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}[] = [
  {
    id: "rahul",
    type: "weight-loss",
    badgeLabel: "Weight Loss",
    statValue: "−14 kg",
    statLabel: "Fat Lost",
    days: 90,
    daysLabel: "Days",
    stars: 5,
    quote:
      "Aneesh transformed my approach to fitness completely. In just 3 months I went from 84 kg down to 70 kg — losing 14 kg of pure fat while actually gaining strength. His personalized plan and daily check-ins made all the difference!",
    name: "Rahul Sharma",
    role: "Weight Loss · 3 Months · Greater Noida",
    image: "/images/testimonial_rahul.png",
  },
  {
    id: "priya",
    type: "athletic",
    badgeLabel: "Athletic Performance",
    statValue: "−0.8s",
    statLabel: "Sprint Time",
    days: 45,
    daysLabel: "Days",
    stars: 5,
    quote:
      "Preparing for state-level competitions, I needed edge performance. Aneesh's sport-specific conditioning improved my 100m sprint time by 0.8 seconds in just 6 weeks. His athletic programming is truly exceptional.",
    name: "Priya Kapoor",
    role: "Athletic Performance · 6 Weeks · Greater Noida",
    image: "/images/testimonial_priya.png",
  },
  {
    id: "arjun",
    type: "muscle",
    badgeLabel: "Muscle Building",
    statValue: "+9 kg",
    statLabel: "Muscle Gained",
    days: 120,
    daysLabel: "Days",
    stars: 5,
    quote:
      "Started as a complete beginner — skinny, no idea what to do in a gym. In 4 months under Aneesh's guidance I packed on 9 kg of clean muscle. His nutrition coaching was the real game-changer for me!",
    name: "Arjun Mishra",
    role: "Muscle Building · 4 Months · Greater Noida",
    image: "/images/testimonial_arjun.png",
  },
];

export const BLOG_POSTS = [
  {
    id: "fat-loss-tips",
    category: "Fat Loss",
    date: "May 2024",
    readTime: "5 min read",
    title: "Top 5 Fat Loss Tips That Actually Work — No Crash Diets",
    excerpt:
      "Sustainable fat loss isn't about starving yourself. Learn the science-backed strategies I use with my Greater Noida clients to lose 10–15 kg in 90 days without losing muscle.",
    image: "/images/blog_fat_loss.png",
    imageAlt: "Fat loss tips Greater Noida fitness blog",
  },
  {
    id: "muscle-building",
    category: "Muscle Building",
    date: "April 2024",
    readTime: "7 min read",
    title: "How to Build Serious Muscle in 90 Days as a Beginner",
    excerpt:
      "Most beginners waste months with random workouts. This is the exact beginner hypertrophy program I've used to help clients add 6–10 kg of lean muscle in their first 3 months.",
    image: "/images/blog_muscle.png",
    imageAlt: "Muscle building program beginners Greater Noida gym",
  },
  {
    id: "nutrition-guide",
    category: "Nutrition",
    date: "March 2024",
    readTime: "6 min read",
    title: "The Simple Nutrition Plan That Drives 80% of Your Results",
    excerpt:
      "You don't need a complicated diet. Discover the straightforward approach to meal planning, protein intake, and calorie tracking that I teach every client from day one.",
    image: "/images/blog_nutrition.png",
    imageAlt: "Nutrition meal planning guide fitness Greater Noida",
  },
];

export const PRICING_PERKS = [
  "First session is completely FREE",
  "Personal Training, Online & Offline options",
  "Nutrition plan included in all packages",
  "No lock-in contracts — flexible billing",
];

export const GALLERY_ITEMS = [
  {
    id: "hero-shot",
    src: "/images/hero.png",
    alt: "Aneesh Jha outdoor fitness training Greater Noida",
    label: "Athletic Training",
    span: "col" as const,
  },
  {
    id: "body-image",
    src: "/images/body.png",
    alt: "Aneesh Jha physique body transformation Greater Noida",
    label: "Body Transformation",
    span: "normal" as const,
  },
  {
    id: "fitness-activities",
    src: "/images/fitness_activities.jpeg",
    alt: "Aneesh Jha athletic competition track and field",
    label: "Athletic Competition",
    span: "normal" as const,
  },
  {
    id: "formal",
    src: "/images/formal.jpeg",
    alt: "Aneesh Jha professional fitness coach Greater Noida",
    label: "Professional",
    span: "row" as const,
  },
];
