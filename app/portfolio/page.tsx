"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase,
  SiStripe, SiReact, SiPython, SiDjango, SiSanity, SiGithub,
} from "react-icons/si";
import {
  TbExternalLink, TbPlayerPlay, TbBrandReactNative,
  TbX, TbChevronLeft, TbChevronRight,
} from "react-icons/tb";
import { MdStorefront } from "react-icons/md";

// Types 

type Category = "All" | "Full-Stack" | "E-Commerce" | "Websites" | "Mobile" | "Brand" | "Lab";
type Status   = "Live" | "In Progress" | "Under Review" | "Demo" | "Concept";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  images?: string[];   
  video?: string;      
  liveUrl?: string;
  category: Category[];
  tags: string[];
  stack: string[];
  status: Status;
  tier: 1 | 2 | 3 | 4;
  highlight?: string;
}

// Data 

const PROJECTS: Project[] = [
  {
    id: "ndc",
    title: "NDC USA Chapter",
    subtitle: "Full-Stack Political Diaspora Platform",
    description:
      "Official membership platform for the NDC Ghanaian diaspora across all 50 US states. 3-tier role system (super_admin, state_admin, member), 52-admin state-locked permissions enforced across Supabase RLS, Sanity CMS, and Next.js API layers. Includes Stripe subscriptions, AI chatbot, digital ID card generation, statement document generation, gallery, news feed, and a published React Native mobile app.",
    image: "/assets/ndc-hero.png",
    images: ["/assets/ndc-hero.png", "/assets/ndc-dashboard.png", "/assets/ndc-mobile.png"],
    liveUrl: "https://www.ndcuschapter.com",
    category: ["Full-Stack", "Mobile"],
    tags: ["Multi-role Auth", "50-State Architecture", "AI Chatbot", "ID Generation", "Mobile App"],
    stack: ["Next.js", "TypeScript", "Supabase", "Sanity", "Stripe", "React Native", "Tailwind"],
    status: "Live",
    tier: 1,
    highlight: "Most Complex Build",
  },
  {
    id: "gemos",
    title: "GemOS",
    subtitle: "AI-Powered Personal Operating System",
    description:
      "A custom internal operating system for managing all studio clients in real time. Powered by Gemini 2.5 AI — live dashboard, task management, automated weekly reporting, history vault, and multi-client workspace switching.",
    image: "/assets/gemos-hero.png",
    liveUrl: "https://gem-os.vercel.app",
    category: ["Full-Stack", "Lab"],
    tags: ["AI Integration", "Real-time", "Multi-client", "Automated Reports"],
    stack: ["TypeScript", "Supabase", "Gemini 2.5", "Next.js", "Tailwind"],
    status: "Live",
    tier: 1,
    highlight: "AI-Powered",
  },
  {
    id: "skingold",
    title: "SkinGold Beauty",
    subtitle: "Premium Organic Cosmetics E-Commerce",
    description:
      "Full-stack e-commerce for a Ghanaian skincare brand. Sanity CMS, Paystack payments, automated SMS (Arkesel) and email (Resend) confirmations, product collections, newsletter, and a cinematic video hero.",
    image: "/assets/skingold-hero.png",
    liveUrl: "https://www.skingoldbeauty.com",
    category: ["Full-Stack", "E-Commerce"],
    tags: ["Paystack", "SMS Notifications", "Email Automation", "CMS", "Video Hero"],
    stack: ["Next.js", "Sanity", "Paystack", "Arkesel", "Resend", "Tailwind"],
    status: "Live",
    tier: 1,
  },
  {
    id: "akeeroi",
    title: "Akee-Roi Collections",
    subtitle: "Luxury Footwear E-Commerce",
    description:
      "Full e-commerce for a Ghanaian luxury women's shoe brand. Filtered browsing by style and category, Visa/Mastercard/MoMo payments, email notifications, size guide, shipping/returns pages, and a newsletter.",
    image: "/assets/akeeroi-hero.png",
    liveUrl: "https://www.akeeroi.com",
    category: ["Full-Stack", "E-Commerce"],
    tags: ["Multi-Payment", "Product Filtering", "Email Notifications", "Mobile Money"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Paystack"],
    status: "Live",
    tier: 1,
  },
  {
    id: "3bs",
    title: "The 3Bs Bakery",
    subtitle: "Cake & Pastry E-Commerce Store",
    description:
      "E-commerce for a Ghanaian bakery. Categorized browsing (bento, wedding, cupcakes, donuts, custom), cinematic video hero, email notifications, gallery, and newsletter subscription.",
    image: "/assets/3bs-hero.png",
    liveUrl: "https://www.the3bsbakery.store",
    category: ["Full-Stack", "E-Commerce"],
    tags: ["Video Hero", "Categorized Shop", "Email Notifications", "Gallery"],
    stack: ["Next.js", "Tailwind", "Sanity", "Resend"],
    status: "Live",
    tier: 1,
  },
  {
    id: "brukina",
    title: "The Brukina Bar",
    subtitle: "Ghanaian Beverage E-Commerce",
    description:
      "E-commerce for a Ghanaian millet and yogurt brand. Cinematic video hero, flavor-based browsing, shopping cart, instant email confirmation, gallery, and a customer reviews system.",
    image: "/assets/brukina-hero.png",
    liveUrl: "https://www.thebrukinabar.com",
    category: ["Full-Stack", "E-Commerce"],
    tags: ["Video Hero", "Instant Email Confirmation", "Reviews System", "Gallery"],
    stack: ["Next.js", "Tailwind", "Sanity", "Resend"],
    status: "Live",
    tier: 1,
  },
  {
    id: "afriqsoul",
    title: "Afrique Soul",
    subtitle: "African Products E-Commerce — USA Market",
    description:
      "Full-stack e-commerce targeting the US market with authentic African products. Stripe payments, CMS-driven product management, and a rich shopping experience. Currently in active development.",
    image: "/assets/afriqsoul-hero.png",
    liveUrl: "https://www.afriqsoul.com",
    category: ["Full-Stack", "E-Commerce"],
    tags: ["Stripe", "USA Market", "CMS", "African Products"],
    stack: ["Next.js", "TypeScript", "Stripe", "Sanity", "Tailwind"],
    status: "In Progress",
    tier: 1,
  },
  {
    id: "supermarket",
    title: "Supermarket Concept",
    subtitle: "Client Pitch — Retail E-Commerce Demo",
    description:
      "A fully functional supermarket e-commerce demo built as a client pitch. Product categorization, shopping cart, GHS pricing, and a clean storefront built to win a contract.",
    image: "/assets/supermarket-hero.png",
    liveUrl: "https://supermarket-demo-gem.vercel.app",
    category: ["Full-Stack", "E-Commerce"],
    tags: ["Client Pitch", "Retail", "Product Catalog", "Cart System"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
    status: "Demo",
    tier: 2,
  },
  {
    id: "aspiralaw",
    title: "AspiraLaw Academic Consult",
    subtitle: "Legal Education Consultancy Website",
    description:
      "Full website for Ghana's legal education consultancy. Service showcase, team profiles, resource library, e-book bookshop, event registration, booking system, and a legal articles platform.",
    image: "/assets/aspiralaw-hero.png",
    liveUrl: "https://www.aspiralawac.com",
    category: ["Websites"],
    tags: ["Booking System", "Resource Library", "Event Registration", "Brand Identity"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    status: "Live",
    tier: 2,
  },
  {
    id: "camatrust",
    title: "CamaTrust Farms",
    subtitle: "Sustainable Farming & Agriculture Website",
    description:
      "Website and product catalog for a Ghanaian sustainable farming company. Product market, team showcase, project portfolio, gallery, and sections for livestock, organic produce, and agri-consultancy.",
    image: "/assets/camatrust-hero.png",
    liveUrl: "https://www.camatrustfarms.com",
    category: ["Websites"],
    tags: ["Product Catalog", "Gallery", "Team Profiles", "Agri-Tech"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
    status: "Live",
    tier: 2,
  },
  {
    id: "kobbe",
    title: "Kobbe Mensah",
    subtitle: "Elite Fitness & Massage Therapy",
    description:
      "Premium personal brand website for an elite Ghanaian fitness trainer. Cinematic video hero, service pages, gallery, booking form, client stats, and a strong editorial design.",
    image: "/assets/kobbe-hero.png",
    liveUrl: "https://www.kobbemensah.com",
    category: ["Websites"],
    tags: ["Personal Brand", "Video Hero", "Booking System", "Editorial Design"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
    status: "Live",
    tier: 2,
  },
  {
    id: "skyeenterprise",
    title: "Skye Space Enterprise",
    subtitle: "Corporate Website",
    description: "Corporate website for Skye Space Enterprise, a US-based engineering and consulting company.",
    image: "/assets/skyeenterprise-hero.png",
    liveUrl: "https://www.skyespaceenterprise.org",
    category: ["Websites"],
    tags: ["Corporate", "Engineering", "USA"],
    stack: ["Next.js", "Tailwind"],
    status: "Live",
    tier: 2,
  },
  {
    id: "skyeconsulting",
    title: "Skye Space Consulting",
    subtitle: "Mining Engineering Consultancy",
    description: "Professional website for Skye Space Consulting, a mining engineering firm based in Westminster, MD, USA.",
    image: "/assets/skyeconsulting-hero.png",
    liveUrl: "https://www.skyespaceconsulting.com",
    category: ["Websites"],
    tags: ["Consulting", "Mining", "Professional"],
    stack: ["Next.js", "Tailwind"],
    status: "Live",
    tier: 2,
  },
  {
    id: "butrous",
    title: "Butrous Services",
    subtitle: "Health & Wellness Website",
    description: "Website and brand identity for a Ghanaian health and wellness services company.",
    image: "/assets/butrous-hero.png",
    liveUrl: "https://www.butrousservices.com",
    category: ["Websites", "Brand"],
    tags: ["Health & Wellness", "Brand Identity", "Services"],
    stack: ["Next.js", "Tailwind"],
    status: "Live",
    tier: 2,
  },
  {
    id: "royalgiants",
    title: "Royal Giants",
    subtitle: "Organisation Website",
    description: "Full website for Royal Giants organization.",
    image: "/assets/royalgiants-hero.png",
    liveUrl: "https://www.royalgiants.org",
    category: ["Websites"],
    tags: ["Organisation", "Web Presence"],
    stack: ["Next.js", "Tailwind"],
    status: "Live",
    tier: 2,
  },
  {
    id: "plutus",
    title: "Plutus Painting Works",
    subtitle: "Painting & Interior Design Website",
    description: "Full website and brand identity for a painting and interior design company in Ghana.",
    image: "/assets/plutus-hero1.png",
    liveUrl: "https://www.plutuspaintingworks.com",
    category: ["Websites", "Brand"],
    tags: ["Interior Design", "Brand Identity", "Services"],
    stack: ["Next.js", "Tailwind"],
    status: "Live",
    tier: 2,
  },
  {
    id: "gemkids",
    title: "GEM Kids",
    subtitle: "Microsoft Encarta-Inspired Educational PWA",
    description:
      "A Progressive Web App for children inspired by Microsoft Encarta. Offline functionality, an immersive educational interface, and a nostalgic design built for desktop engagement.",
    image: "/assets/gemkids-hero.png",
    liveUrl: "https://www.gemkids2026.site",
    category: ["Lab", "Full-Stack"],
    tags: ["PWA", "Offline Mode", "Educational", "Kids"],
    stack: ["TypeScript", "React", "Tailwind", "PWA"],
    status: "Live",
    tier: 3,
  },
  {
    id: "gemconnect",
    title: "GemConnect",
    subtitle: "Full-Stack Social Media Application",
    description:
      "A fully functional social media app built from scratch. User profiles, posts, follows, real-time feed, and social interactions. Video walkthrough available.",
    video: "/assets/gemconnect-demo.mp4",
    category: ["Lab", "Full-Stack"],
    tags: ["Social Media", "Real-time Feed", "User Profiles", "Full-Stack"],
    stack: ["React", "Python", "Django", "PostgreSQL"],
    status: "Concept",
    tier: 3,
  },
  {
    id: "handyhub",
    title: "HandyHub",
    subtitle: "Artisan Marketplace Platform",
    description:
      "A marketplace connecting local artisans with customers. Service listings, artisan profiles, booking, and search. Video walkthrough available.",
    video: "/assets/handyhub-demo.mp4",
    category: ["Lab", "Full-Stack"],
    tags: ["Marketplace", "Artisans", "Booking", "Community"],
    stack: ["React", "Python", "Django", "PostgreSQL"],
    status: "Concept",
    tier: 3,
  },
  {
    id: "chatbot",
    title: "AI Portfolio Chatbot",
    subtitle: "AI Agent That Answers On My Behalf",
    description:
      "An AI-powered chatbot trained to answer questions about my work, skills, and experience. Built with React and Flask, powered by Gemini AI.",
    video: "/assets/ai-demo.mp4",
    liveUrl: "https://gems-ai-portfolio.vercel.app",
    category: ["Lab", "Full-Stack"],
    tags: ["AI Agent", "Gemini AI", "Chatbot", "Portfolio"],
    stack: ["React", "Flask", "Gemini AI", "Python"],
    status: "Live",
    tier: 3,
  },
];

// Constants

const CATEGORIES: Category[] = ["All", "Full-Stack", "E-Commerce", "Websites", "Mobile", "Brand", "Lab"];

const STATUS_STYLES: Record<Status, string> = {
  Live:            "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  "In Progress":   "bg-amber-500/20  text-amber-300  border border-amber-500/30",
  "Under Review":  "bg-blue-500/20   text-blue-300   border border-blue-500/30",
  Demo:            "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  Concept:         "bg-zinc-500/20   text-zinc-300   border border-zinc-500/30",
};

const STACK_ICONS: Record<string, React.ReactNode> = {
  "Next.js":      <SiNextdotjs       className="w-3.5 h-3.5" />,
  TypeScript:     <SiTypescript      className="w-3.5 h-3.5" />,
  Tailwind:       <SiTailwindcss     className="w-3.5 h-3.5" />,
  Supabase:       <SiSupabase        className="w-3.5 h-3.5" />,
  Stripe:         <SiStripe          className="w-3.5 h-3.5" />,
  React:          <SiReact           className="w-3.5 h-3.5" />,
  "React Native": <TbBrandReactNative className="w-3.5 h-3.5" />,
  Python:         <SiPython          className="w-3.5 h-3.5" />,
  Django:         <SiDjango          className="w-3.5 h-3.5" />,
  Sanity:         <SiSanity          className="w-3.5 h-3.5" />,
};

const BRAND_ITEMS = [
  { img: "/assets/brand-1.png", name: "AspiraLaw Academic Consult",  role: "Brand Identity" },
  { img: "/assets/brand-2.png", name: "Lumière Cosmetics",            role: "Brand Identity" },
  { img: "/assets/brand-3.png", name: "Butrous Services",             role: "Brand Identity" },
  { img: "/assets/brand-4.png", name: "GemSwirls Ice Cream",          role: "Brand Identity" },
];

// NDC Modal

function NDCModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = project.images ?? [project.image];

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const prev = () => setActiveImg((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveImg((i) => (i + 1) % images.length);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <motion.div
        className="relative w-full sm:max-w-3xl sm:mx-4 max-h-[93vh] sm:max-h-[88vh] bg-[#0e0e12] border border-white/10 rounded-t-3xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 36 }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden shrink-0">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <TbX className="w-4 h-4 text-white" />
        </button>

        <div className="overflow-y-auto flex-1">
          {/* Gallery */}
          <div className="bg-black/40">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={images[activeImg]}
                alt={`NDC screenshot ${activeImg + 1}`}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/800x450/111/333?text=NDC+USA+Chapter";
                }}
              />
              {images.length > 1 && (
                <>
                  <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center border border-white/10 transition-colors">
                    <TbChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center border border-white/10 transition-colors">
                    <TbChevronRight className="w-5 h-5 text-white" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button key={i} onClick={() => setActiveImg(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeImg ? "bg-pink-400 w-5" : "bg-white/30 w-1.5"}`} />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? "border-pink-500" : "border-white/10 opacity-50 hover:opacity-80"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-5 sm:p-6 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                {project.highlight && (
                  <p className="text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-1">
                    {project.highlight}
                  </p>
                )}
                <h2 className="text-xl font-black text-white">{project.title}</h2>
                <p className="text-sm text-white/40 mt-0.5">{project.subtitle}</p>
              </div>
              <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[project.status]}`}>
                {project.status}
              </span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/8">
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span key={tech} className="flex items-center gap-1.5 text-sm text-white/50">
                    {STACK_ICONS[tech] ?? <span className="w-3.5 h-3.5 rounded-sm bg-white/10" />}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-1 pb-2">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                  <TbExternalLink className="w-4 h-4" /> View Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Sub-components 

function StatBar() {
  const stats = [
    { value: "20+", label: "Client Projects" },
    { value: "8",   label: "Industries" },
    { value: "50",  label: "US States Covered" },
    { value: "1",   label: "Published Mobile App" },
    { value: "100%",label: "Built Solo" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
      {stats.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          className="bg-black/40 backdrop-blur-sm px-4 py-5 flex flex-col items-center text-center">
          <span className="text-2xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-mono">
            {s.value}
          </span>
          <span className="text-[10px] text-white/40 mt-1 tracking-wide uppercase">{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function FilterTabs({ active, onChange }: { active: Category; onChange: (c: Category) => void }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((cat) => (
        <button key={cat} onClick={() => onChange(cat)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            active === cat
              ? "text-white border-transparent"
              : "text-white/40 border-white/10 hover:text-white/70 hover:border-white/20"
          }`}>
          {active === cat && (
            <motion.span layoutId="filterPill"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
              style={{ zIndex: -1 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }} />
          )}
          {cat}
        </button>
      ))}
    </div>
  );
}

function BrowserFrame({ src, alt, isVideo }: { src: string; alt: string; isVideo?: boolean }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a]">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2a2a2a] border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-3 h-5 rounded-md bg-white/5 flex items-center px-3">
          <span className="text-[10px] text-white/20 truncate">{alt}</span>
        </div>
      </div>
      <div className="aspect-video relative overflow-hidden">
        {isVideo ? (
          <video src={src} className="w-full h-full object-cover" autoPlay loop muted playsInline />
        ) : (
          <img src={src} alt={alt} className="w-full h-full object-cover object-top"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://placehold.co/800x450/111/333?text=${encodeURIComponent(alt)}`;
            }} />
        )}
      </div>
    </div>
  );
}

function VideoCard({ project }: { project: Project }) {
  return (
    <div className="relative w-full aspect-video bg-black/60 rounded-xl overflow-hidden">
      <video src={project.video} className="w-full h-full object-cover opacity-90" autoPlay loop muted playsInline />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpenNDC,
}: {
  project: Project;
  index: number;
  onOpenNDC: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isVideoProject = !!project.video && !project.image;
  const isNDC = project.id === "ndc";
  const hasExtra = (project.images?.length ?? 0) > 1;

  const handleClick = () => {
    if (isNDC) { onOpenNDC(); return; }
    if (project.liveUrl) window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleClick}
      className="group relative bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all duration-500 hover:bg-white/[0.05] flex flex-col cursor-pointer"
    >
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at 50% 0%, rgba(236,72,153,0.07), transparent 60%)" }} />

      {/* Preview */}
      <div className="p-4 pb-0 relative">
        {isVideoProject
          ? <VideoCard project={project} />
          : <BrowserFrame src={project.image ?? ""} alt={project.title} />
        }
        {/* NDC "View Screenshots" badge */}
        {hasExtra && (
          <div className="absolute top-6 right-6 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-pink-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-pink-500/30">
            View Screenshots +{project.images!.length - 1}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            {project.highlight && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-0.5">
                {project.highlight}
              </p>
            )}
            <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-xs text-white/40 mt-0.5">{project.subtitle}</p>
          </div>
          <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-white/55 leading-relaxed line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/8">
              {tag}
            </span>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/5">
          {project.stack.map((tech) => (
            <span key={tech} className="flex items-center gap-1 text-[11px] text-white/40 hover:text-white/70 transition-colors">
              {STACK_ICONS[tech] ?? <span className="w-3.5 h-3.5 rounded-sm bg-white/10" />}
              {tech}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="flex gap-2 pt-1">
          {isNDC ? (
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity">
              View Full Details →
            </button>
          ) : project.liveUrl ? (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold group-hover:opacity-90 transition-opacity">
              <TbExternalLink className="w-3.5 h-3.5" /> View Live
            </div>
          ) : project.video ? (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 text-white/50 text-xs font-medium">
              <TbPlayerPlay className="w-3.5 h-3.5" /> Playing Above
            </div>
          ) : (
            <span className="flex-1 flex items-center justify-center py-2.5 rounded-xl border border-white/5 text-white/20 text-xs">
              Private / Restricted
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Main Page 

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [ndcOpen, setNdcOpen] = useState(false);

  const filtered = PROJECTS.filter(
    (p) => activeFilter === "All" || p.category.includes(activeFilter)
  );
  const featured = activeFilter === "All" ? filtered.filter((p) => p.tier === 1).slice(0, 2) : [];
  const rest = activeFilter === "All"
    ? filtered.filter((p) => !(p.tier === 1 && featured.includes(p)))
    : filtered;

  const openNDC  = useCallback(() => setNdcOpen(true),  []);
  const closeNDC = useCallback(() => setNdcOpen(false), []);
  const ndcProject = PROJECTS.find((p) => p.id === "ndc")!;

  return (
    <>
      <AnimatePresence>
        {ndcOpen && <NDCModal project={ndcProject} onClose={closeNDC} />}
      </AnimatePresence>

      <main className="min-h-screen bg-[#060608] text-white overflow-x-hidden">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, #c026d3 0%, #7c3aed 40%, transparent 70%)", filter: "blur(80px)" }} />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #ec4899 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          {/* ── Hero ── */}
          <div className="text-center mb-14 sm:mb-16">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-semibold tracking-widest uppercase mb-6">
              <MdStorefront className="w-3.5 h-3.5" />
              Matilda Esenam Gbeve · Built Solo
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black leading-none tracking-tight mb-4">
              <span className="block text-white">Everything</span>
              <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                I&apos;ve Built.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Full-stack platforms, e-commerce stores, corporate websites, mobile apps, and lab experiments —
              every line of code written by me.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center justify-center gap-3 mt-6">
              {["gemgeek", "tillygem"].map((handle) => (
                <a key={handle} href={`https://github.com/${handle}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition-all">
                  <SiGithub className="w-4 h-4" /> {handle}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Stats ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-14 sm:mb-16">
            <StatBar />
          </motion.div>

          {/* ── Filters ── */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-10 sm:mb-12">
            <FilterTabs active={activeFilter} onChange={setActiveFilter} />
          </motion.div>

          {/* ── Featured 2-up ── */}
          <AnimatePresence mode="wait">
            {featured.length > 0 && (
              <motion.div key="featured" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mb-5">
                <p className="text-xs text-white/20 uppercase tracking-widest font-semibold mb-4">✦ Featured Platforms</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                  {featured.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} onOpenNDC={openNDC} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── All projects — 2 cols on mobile, 3 on xl ── */}
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {activeFilter !== "All" && (
                <p className="text-xs text-white/20 uppercase tracking-widest font-semibold mb-4">
                  {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                </p>
              )}
              {activeFilter === "All" && rest.length > 0 && (
                <p className="text-xs text-white/20 uppercase tracking-widest font-semibold mb-4">✦ All Projects</p>
              )}
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">
                {rest.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} onOpenNDC={openNDC} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Brand Identity ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-20 rounded-2xl border border-white/8 bg-white/[0.02] p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-2">Brand Identity & Visual Design</h2>
              <p className="text-white/40 text-sm max-w-md mx-auto">
                Logo systems, brand identities, campaign flyers, and visual storytelling across industries.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {BRAND_ITEMS.map((item, i) => (
                <div key={i} className="group flex flex-col gap-2">
                  <div className="aspect-square rounded-xl overflow-hidden border border-white/8 bg-white/5 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                        const parent = el.parentElement;
                        if (parent && !parent.querySelector("span")) {
                          const txt = document.createElement("span");
                          txt.textContent = item.name;
                          txt.style.cssText = "font-size:11px;color:rgba(255,255,255,0.2);text-align:center;padding:8px";
                          parent.appendChild(txt);
                        }
                      }}
                    />
                  </div>
                  {/* Caption */}
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white/70 leading-tight">{item.name}</p>
                    <p className="text-[10px] text-pink-400/70 mt-0.5">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Footer CTA ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-white/30 text-sm">
                Every project above was built entirely by me — design, frontend, backend, deployment.
              </p>
              <a href="mailto:esenam16@gmail.com"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20">
                Let&apos;s Build Something Together →
              </a>
            </div>
          </motion.div>

        </div>
      </main>
    </>
  );
}