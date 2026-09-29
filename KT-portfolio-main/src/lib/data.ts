// ── Design Tokens ──────────────────────────────────
export const tokens = {
  bg: "#0D0F14",
  bgCard: "#13161D",
  bgGlass: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(245,166,35,0.4)",
  accent: "#F5A623",
  accentSoft: "rgba(245,166,35,0.12)",
  text: "#EDE8DC",
  textMuted: "#8A8578",
  textDim: "#565248",
  sage: "#7DB89A",
  sageSoft: "rgba(125,184,154,0.12)",
} as const;

// ── Skills Data ────────────────────────────────────
export const skillsData = [
  { name: "UI Design", pct: 92, cat: "Design" },
  { name: "UX Research", pct: 85, cat: "Research" },
  { name: "Responsive Design", pct: 88, cat: "Design" },
  { name: "Figma", pct: 95, cat: "Tools" },
  { name: "Adobe XD / Illustrator", pct: 80, cat: "Tools" },
  { name: "Canva", pct: 90, cat: "Tools" },
  { name: "Prototyping", pct: 83, cat: "Research" },
  { name: "Design Systems", pct: 78, cat: "Design" },
];

export const toolPills = [
  "Figma", "Adobe XD", "Illustrator", "Photoshop",
  "Canva", "InVision", "Maze", "Notion", "Miro", "Zeplin",
];

// ── Projects Data ──────────────────────────────────
export const projectsData = [
  {
    id: "01",
    title: "Portfolio Website",
    type: "Personal Project",
    tagline: "A minimalist portfolio that speaks through design.",
    problem:
      "Designers often struggle to showcase their process, not just their output. Generic templates fail to communicate personal identity.",
    approach:
      "Designed a dark, editorial-style portfolio with a clear narrative structure — using typography, whitespace, and micro-animations to guide visitors through the story.",
    tools: ["Figma", "React", "Framer Motion", "Tailwind CSS"],
    outcome:
      "A distinctive, scroll-driven portfolio that increased recruiter engagement by 3× over a previous template-based version.",
    color: "#F5A623",
    badge: "tag-amber" as const,
  },
  {
    id: "02",
    title: "Food Ordering App UX",
    type: "UX Case Study",
    tagline: "Reducing friction from hunger to checkout.",
    problem:
      "Existing food apps suffer from complex navigation, hidden fees revealed too late, and poor discoverability of new restaurants.",
    approach:
      "Conducted 8 user interviews, built affinity maps, and created a simplified 3-tap ordering flow. Ran 2 rounds of usability testing to validate card sorting and IA decisions.",
    tools: ["Figma", "Maze", "Miro", "Adobe Illustrator"],
    outcome:
      "Prototype tested at 91% task completion rate (vs. 68% for the incumbent app). Checkout time reduced by 40% in testing.",
    color: "#7DB89A",
    badge: "tag-sage" as const,
  },
];

// ── Experience Data ────────────────────────────────
export const experienceData = [
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2022 — Present",
    desc: "Designed web & mobile interfaces for multiple clients. Worked on dashboards, landing pages, e-commerce flows, and mobile apps.",
    tags: ["Figma", "Web Design", "Mobile UI"],
  },
  {
    role: "Design Intern",
    company: "Startup Studio",
    period: "2021 — 2022",
    desc: "Contributed to the design system, created component libraries, and prototyped 3 product features from concept to handoff.",
    tags: ["Design Systems", "Prototyping", "UX Research"],
  },
];

// ── Education Data ─────────────────────────────────
export const educationData = [
  {
    degree: "B.Tech — Computer Science",
    institution: "VIT, Mumbai",
    period: "2019 — 2023",
    type: "edu" as const,
  },
  {
    degree: "Google UX Design Certificate",
    institution: "Coursera / Google",
    period: "2022",
    type: "cert" as const,
  },
  {
    degree: "UI/UX Fundamentals",
    institution: "Udemy",
    period: "2021",
    type: "cert" as const,
  },
];

// ── About cards ────────────────────────────────────
export const aboutCards = [
  { icon: "✦", label: "Languages", value: "English\nHindi · Marathi" },
  { icon: "◈", label: "Education", value: "B.Tech CS\nVIT, Mumbai" },
  { icon: "◎", label: "Availability", value: "Open to\nOpportunities" },
  { icon: "⬡", label: "Based in", value: "Mumbai\nIndia 🇮🇳" },
];
