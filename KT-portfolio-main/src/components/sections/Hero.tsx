"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ROLES = ["UI/UX Designer", "Design Thinker", "Visual Storyteller"];

export default function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const current = ROLES[roleIdx.current];
      if (!deleting.current) {
        setTypedRole(current.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(type, 1800);
        } else {
          timeout = setTimeout(type, 80);
        }
      } else {
        setTypedRole(current.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % ROLES.length;
          timeout = setTimeout(type, 400);
        } else {
          timeout = setTimeout(type, 45);
        }
      }
    }

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    }),
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-6 md:px-16 lg:px-24 pt-20 pb-10"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Amber glow */}
        <div className="absolute top-[15%] left-[58%] w-[480px] h-[480px] rounded-full bg-radial-amber animate-float opacity-80"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        {/* Sage glow */}
        <div className="absolute top-[48%] left-[14%] w-[340px] h-[340px] rounded-full animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(125,184,154,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
        />

        {/* Orbit rings */}
        {[260, 380, 500].map((sz, i) => (
          <div
            key={sz}
            className="orbit-ring absolute"
            style={{
              width: sz,
              height: sz,
              top: `calc(50% - ${sz / 2}px)`,
              left: `calc(70% - ${sz / 2}px)`,
              animationDuration: `${20 + i * 8}s`,
              animationDirection: i % 2 === 0 ? "normal" : "reverse",
            }}
          />
        ))}

        {/* Floating KT monogram */}
        <div
          className="absolute flex items-center justify-center animate-float"
          style={{
            top: "calc(50% - 90px)",
            left: "calc(70% - 90px)",
            width: 180,
            height: 180,
            borderRadius: "40% 60% 60% 40% / 50% 50% 50% 50%",
            background: "linear-gradient(135deg, rgba(245,166,35,0.2), rgba(125,184,154,0.12))",
            border: "1px solid rgba(245,166,35,0.25)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span className="font-display italic text-5xl text-accent opacity-90">KT</span>
        </div>

        {/* Dot grid */}
        <div className="dot-grid" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-xl">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <span className="tag tag-amber inline-block mb-6">Available for freelance</span>
        </motion.div>

        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-display font-bold leading-[1.05] tracking-tight mb-3"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          Krishna
          <br />
          <span className="accent-text">Topale</span>
        </motion.h1>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="font-mono text-text-muted mb-5"
          style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)", minHeight: "2em" }}
        >
          {typedRole}
          <span className="cursor-blink" />
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="text-text-muted leading-[1.8] mb-10 max-w-[440px]"
          style={{ fontSize: 17 }}
        >
          I design clean, intuitive digital experiences — where form follows
          function and every pixel has a purpose.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="flex gap-4 flex-wrap"
        >
          <Link
            href="#projects"
            className="bg-accent text-bg px-7 py-3 rounded text-sm font-medium tracking-wide hover:opacity-85 transition-all hover:-translate-y-px no-underline"
          >
            View Work →
          </Link>
          <Link
            href="#contact"
            className="border text-text-primary px-7 py-3 rounded text-sm tracking-wide hover:border-accent hover:text-accent transition-all no-underline"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.85}
          className="flex gap-10 mt-14 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            ["3+", "Years Exp."],
            ["12+", "Projects Done"],
            ["5+", "Happy Clients"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-accent">{num}</div>
              <div className="font-mono text-[11px] text-text-dim tracking-wide mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
      >
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #F5A623, transparent)" }} />
        <span className="font-mono text-[10px] text-text-dim tracking-widest">scroll</span>
      </motion.div>
    </section>
  );
}
