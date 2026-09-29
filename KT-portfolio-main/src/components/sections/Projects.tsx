"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const [ref, inView] = useInView();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 lg:px-24 py-28"
      style={{ background: "linear-gradient(180deg, transparent, rgba(125,184,154,0.02), transparent)" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="section-label">Case Studies</p>
        <h2
          className="font-display font-bold leading-[1.15] mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#EDE8DC" }}
        >
          Selected Projects
        </h2>
        <p className="text-text-muted max-w-md">
          Each project is a design problem solved — with process, craft, and
          measurable outcomes.
        </p>
      </motion.div>

      {/* Accordion cards */}
      <div className="flex flex-col gap-5">
        {projectsData.map((proj, i) => {
          const isOpen = expanded === proj.id;
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-xl overflow-hidden hover-card"
              style={{
                border: isOpen
                  ? `1px solid ${proj.color}55`
                  : "1px solid rgba(255,255,255,0.08)",
                transition: "border-color 0.3s",
              }}
            >
              {/* Header row */}
              <button
                onClick={() => setExpanded(isOpen ? null : proj.id)}
                className="w-full bg-transparent border-none cursor-pointer px-6 md:px-9 py-7 flex items-center justify-between gap-6 text-left"
              >
                <div className="flex items-center gap-5 md:gap-7">
                  <span
                    className="font-mono text-[13px] opacity-60 hidden sm:block"
                    style={{ color: proj.color }}
                  >
                    {proj.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-display text-xl font-bold text-text-primary">
                        {proj.title}
                      </h3>
                      <span className={`tag ${proj.badge}`}>{proj.type}</span>
                    </div>
                    <p className="text-sm text-text-muted">{proj.tagline}</p>
                  </div>
                </div>

                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full text-text-primary text-lg flex-shrink-0 transition-transform duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    transform: isOpen ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </div>
              </button>

              {/* Expandable body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-6 md:px-9 pb-8"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <div
                        className="grid gap-8 pt-7"
                        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))" }}
                      >
                        {[
                          { label: "Problem", text: proj.problem },
                          { label: "Approach", text: proj.approach },
                          { label: "Outcome", text: proj.outcome },
                        ].map(({ label, text }) => (
                          <div key={label}>
                            <div
                              className="font-mono text-[10px] tracking-widest uppercase mb-2"
                              style={{ color: proj.color }}
                            >
                              {label}
                            </div>
                            <p className="text-sm text-text-muted leading-[1.8]">{text}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tools */}
                      <div className="mt-6">
                        <div
                          className="font-mono text-[10px] tracking-widest uppercase mb-3"
                          style={{ color: proj.color }}
                        >
                          Tools Used
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {proj.tools.map((t) => (
                            <span key={t} className={`tag ${proj.badge}`}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
