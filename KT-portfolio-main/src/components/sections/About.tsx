"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { aboutCards } from "@/lib/data";

export default function About() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 lg:px-24 py-28"
      style={{ background: "linear-gradient(180deg, transparent, rgba(245,166,35,0.02), transparent)" }}
    >
      <div className="grid gap-16 lg:gap-24 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))" }}>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-label">About Me</p>
          <h2
            className="font-display font-bold leading-[1.15] mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#EDE8DC" }}
          >
            Crafting Experiences
            <br />
            <span className="accent-text italic">Not Just Interfaces</span>
          </h2>
          <p className="text-text-muted leading-[1.85] mb-5" style={{ fontSize: 16 }}>
            I&apos;m a Creative UI/UX Designer focused on building modern,
            user-friendly interfaces that balance aesthetic clarity with
            functional precision.
          </p>
          <p className="text-text-muted leading-[1.85] mb-9" style={{ fontSize: 16 }}>
            My process is rooted in empathy — I research, prototype, and
            iterate until the experience feels effortless. Whether it&apos;s a
            complex dashboard or a simple landing page, I bring intentional
            design thinking to every pixel.
          </p>
          <div className="flex gap-3 flex-wrap">
            {["Problem Solver", "Visual Thinker", "Detail Obsessed", "User-First"].map((t) => (
              <span key={t} className="tag tag-dim">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-4"
        >
          {aboutCards.map((card) => (
            <motion.div
              key={card.label}
              variants={cardVariants}
              className="glass hover-card rounded-lg p-5"
            >
              <div className="text-xl mb-3 text-accent">{card.icon}</div>
              <div className="font-mono text-[10px] text-text-dim tracking-widest uppercase mb-2">
                {card.label}
              </div>
              <div className="text-sm text-text-primary leading-relaxed whitespace-pre-line">
                {card.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
