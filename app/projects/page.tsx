"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase,
  SiStripe, SiReact, SiPython, SiDjango, SiSanity, SiGithub,
} from "react-icons/si";
import { TbExternalLink, TbPlayerPlay, TbBrandReactNative } from "react-icons/tb";

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = "Live" | "In Progress" | "Demo" | "Concept" | "Design";

interface Project {
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
  tags: string[];
  liveLink: string | null;
  githubLink: string | null;
  status: Status;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<Status, string> = {
  Live:         "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  "In Progress":"bg-amber-500/20  text-amber-300  border border-amber-500/30",
  Demo:         "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  Concept:      "bg-zinc-500/20   text-zinc-300   border border-zinc-500/30",
  Design:       "bg-blue-500/20   text-blue-300   border border-blue-500/30",
};

const STACK_ICONS: Record<string, React.ReactNode> = {
  "Next.js":      <SiNextdotjs        className="w-3.5 h-3.5" />,
  TypeScript:     <SiTypescript       className="w-3.5 h-3.5" />,
  "Tailwind CSS": <SiTailwindcss      className="w-3.5 h-3.5" />,
  Tailwind:       <SiTailwindcss      className="w-3.5 h-3.5" />,
  Supabase:       <SiSupabase         className="w-3.5 h-3.5" />,
  Stripe:         <SiStripe           className="w-3.5 h-3.5" />,
  React:          <SiReact            className="w-3.5 h-3.5" />,
  "React Native": <TbBrandReactNative className="w-3.5 h-3.5" />,
  Python:         <SiPython           className="w-3.5 h-3.5" />,
  Django:         <SiDjango           className="w-3.5 h-3.5" />,
  Sanity:         <SiSanity           className="w-3.5 h-3.5" />,
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const featuredProjects: Project[] = [
  {
    title: "GemOS (Internal OS)",
    subtitle: "AI-Powered Business Management",
    image: "/assets/gem-os.png",
    tags: ["TypeScript", "Supabase", "Gemini 2.5", "Next.js", "Tailwind"],
    liveLink: "https://gem-os.vercel.app",
    githubLink: null,
    status: "Live",
  },
  {
    title: "SkinGold Beauty",
    subtitle: "Full-Stack E-commerce",
    image: "/assets/skin-gold.png",
    tags: ["Next.js", "Sanity", "Paystack", "Arkesel SMS", "Resend"],
    liveLink: "https://www.skingoldbeauty.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Akee-Roi Collections",
    subtitle: "Luxury Footwear E-Commerce",
    image: "/assets/akeeroi-hero.png",
    tags: ["Next.js", "TypeScript", "Sanity", "Paystack", "Tailwind"],
    liveLink: "https://www.akeeroi.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "The 3Bs Bakery",
    subtitle: "Cake & Pastry E-Commerce Store",
    image: "/assets/3bs-hero.png",
    tags: ["Next.js", "Tailwind", "Sanity", "Resend"],
    liveLink: "https://www.the3bsbakery.store",
    githubLink: null,
    status: "Live",
  },
  {
    title: "The Brukina Bar",
    subtitle: "Ghanaian Beverage E-Commerce",
    image: "/assets/brukina-hero.png",
    tags: ["Next.js", "Tailwind", "Sanity", "Resend"],
    liveLink: "https://www.thebrukinabar.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Afrique Soul",
    subtitle: "African Products E-Commerce — USA Market",
    image: "/assets/afriqsoul-hero.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Sanity", "Tailwind"],
    liveLink: "https://www.afriqsoul.com",
    githubLink: null,
    status: "In Progress",
  },
  {
    title: "Supermarket Concept",
    subtitle: "Client Pitch — Retail E-Commerce Demo",
    image: "/assets/supermarket-hero.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    liveLink: "https://supermarket-demo-gem.vercel.app",
    githubLink: null,
    status: "Demo",
  },
  {
    title: "AspiraLaw Academic Consult",
    subtitle: "Legal Education Consultancy Website",
    image: "/assets/aspiralaw-hero.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveLink: "https://www.aspiralawac.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "CamaTrust Farms",
    subtitle: "Sustainable Farming & Agriculture Website",
    image: "/assets/camatrust-hero.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    liveLink: "https://www.camatrustfarms.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Kobbe Mensah",
    subtitle: "Elite Fitness & Massage Therapy",
    image: "/assets/kobbe-hero.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    liveLink: "https://www.kobbemensah.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Skye Space Enterprise",
    subtitle: "Corporate Website",
    image: "/assets/skyeenterprise-hero.png",
    tags: ["Next.js", "Tailwind"],
    liveLink: "https://www.skyespaceenterprise.org",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Skye Space Consulting",
    subtitle: "Mining Engineering Consultancy",
    image: "/assets/skyeconsulting-hero.png",
    tags: ["Next.js", "Tailwind"],
    liveLink: "https://www.skyespaceconsulting.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Butrous Services",
    subtitle: "Health & Wellness Website",
    image: "/assets/butrous-hero.png",
    tags: ["Next.js", "Tailwind"],
    liveLink: "https://www.butrousservices.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Royal Giants",
    subtitle: "Organisation Website",
    image: "/assets/royalgiants-hero.png",
    tags: ["Next.js", "Tailwind"],
    liveLink: "https://www.royalgiants.org",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Plutus Painting Works",
    subtitle: "Painting & Interior Design Website",
    image: "/assets/plutus-hero1.png",
    tags: ["Next.js", "Tailwind"],
    liveLink: "https://www.plutuspaintingworks.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "GEM Kids",
    subtitle: "Encarta-Inspired Educational PWA",
    image: "/assets/gem-kids.png",
    tags: ["TypeScript", "React", "Tailwind", "PWA"],
    liveLink: "https://www.gemkids2026.site",
    githubLink: null,
    status: "Live",
  },
  {
    title: "Personal Website",
    subtitle: "My Portfolio Site",
    image: "/assets/screenshot.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://www.gemgeek.online/",
    githubLink: "https://github.com/gemgeek/personal-website",
    status: "Live",
  },
  {
    title: "AI Portfolio Chatbot",
    subtitle: "AI Agent That Answers On My Behalf",
    video: "/assets/ai-demo.mp4",
    tags: ["React", "Flask", "Gemini AI", "Python"],
    liveLink: "https://gems-ai-portfolio.vercel.app/",
    githubLink: "https://github.com/gemgeek/Gems-AI-Portfolio",
    status: "Live",
  },
  {
    title: "GemConnect",
    subtitle: "Full-Stack Social Media Application",
    video: "/assets/gemconnect-demo.mp4",
    tags: ["React", "Python", "Django", "PostgreSQL"],
    liveLink: null,
    githubLink: null,
    status: "Concept",
  },
  {
    title: "HandyHub",
    subtitle: "Artisan Marketplace Platform",
    video: "/assets/handyhub-demo.mp4",
    tags: ["React", "Python", "Django", "PostgreSQL"],
    liveLink: null,
    githubLink: null,
    status: "Concept",
  },
  {
    title: "FIT App (Farmers in Tech)",
    subtitle: "UI/UX Design",
    image: "/assets/project-fit-app.jpg",
    tags: ["UI/UX", "Figma", "Mobile App"],
    liveLink: null,
    githubLink: null,
    status: "Design",
  },
];

const brandDesigns: Project[] = [
  {
    title: "Lumiere Skincare",
    subtitle: "Brand Identity",
    image: "/assets/project-skincare.jpg",
    tags: ["Branding", "Canva", "Logo Design"],
    liveLink: null,
    githubLink: null,
    status: "Live",
  },
  {
    title: "Butrous Services",
    subtitle: "Health & Wellness Identity",
    image: "/assets/but.png",
    tags: ["Branding", "Identity Design", "Web Design"],
    liveLink: "https://www.butrousservices.com",
    githubLink: null,
    status: "Live",
  },
  {
    title: "VAVE Fintech",
    subtitle: "Brand Identity",
    image: "/assets/project-fintech.png",
    tags: ["Branding", "Corporate", "Logo"],
    liveLink: null,
    githubLink: null,
    status: "Live",
  },
];

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isVideo = !!project.video && !project.image;

  const handleClick = () => {
    if (project.liveLink) window.open(project.liveLink, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onClick={project.liveLink ? handleClick : undefined}
      className={`group relative bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden 
        transition-all duration-500 hover:bg-white/[0.05] flex flex-col
        ${project.liveLink ? "cursor-pointer hover:border-pink-500/30" : "cursor-default hover:border-white/15"}`}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at 50% 0%, rgba(236,72,153,0.06), transparent 60%)" }}
      />

      {/* Preview */}
      <div className="relative w-full overflow-hidden rounded-t-2xl bg-black/40">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2a2a2a] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-3 h-5 rounded-md bg-white/5 flex items-center px-3">
            <span className="text-[10px] text-white/20 truncate">{project.title}</span>
          </div>
        </div>

        {/* Media */}
        <div className="aspect-video overflow-hidden">
          {isVideo ? (
            <video
              src={project.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  `https://placehold.co/800x450/111/333?text=${encodeURIComponent(project.title)}`;
              }}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">

        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-xs text-white/40 mt-0.5">{project.subtitle}</p>
          </div>
          <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Tags / Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[11px] text-white/40 hover:text-white/70 transition-colors"
            >
              {STACK_ICONS[tag] ?? (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/8">
                  {tag}
                </span>
              )}
              {STACK_ICONS[tag] ? tag : null}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <TbExternalLink className="w-3.5 h-3.5" /> View Live
            </a>
          ) : isVideo ? (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 text-white/40 text-xs">
              <TbPlayerPlay className="w-3.5 h-3.5" /> Playing Above
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center py-2.5 rounded-xl border border-white/5 text-white/20 text-xs">
              Coming Soon
            </div>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 text-white/50 text-xs hover:border-white/30 hover:text-white transition-all"
            >
              <SiGithub className="w-3.5 h-3.5" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const ProjectsPage = () => {
  return (
    <div className="pt-24 container mx-auto px-4 py-16">

      {/* ── Page Header ── */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto" suppressHydrationWarning>
          A curated showcase of innovative solutions, from AI-powered operating systems to bold brand identities.
          Each project reflects creativity, problem-solving, and a commitment to high-quality results.
        </p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <span className="border border-gray-600 px-4 py-2 rounded-full text-sm">Full-Stack</span>
          <span className="border border-gray-600 px-4 py-2 rounded-full text-sm">E-Commerce</span>
          <span className="border border-gray-600 px-4 py-2 rounded-full text-sm">Branding</span>
          <span className="border border-gray-600 px-4 py-2 rounded-full text-sm">UI/UX</span>
        </div>
      </motion.div>

      {/* ── Engineering Projects ── */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          Featured Engineering Projects
        </h2>
        {/* 1 col mobile → 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>
      </div>

      {/* ── Brand Identity ── */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          Brand Identity Designs
        </h2>
        {/* 1 col mobile → 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {brandDesigns.map((proj, index) => (
            <ProjectCard key={index} project={proj} index={index} />
          ))}
        </div>
      </div>

      {/* ── GitHub CTA ── */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">💡 Want to see more?</h3>
        <p className="text-gray-400 mb-4">
          I&apos;ve built 20+ projects across multiple industries — explore them on GitHub.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a
            href="https://github.com/gemgeek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 font-semibold text-lg hover:underline"
          >
            github/gemgeek →
          </a>
          <a
            href="https://github.com/tillygem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 font-semibold text-lg hover:underline"
          >
            github/tillygem →
          </a>
        </div>
      </div>

    </div>
  );
};

export default ProjectsPage;