"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { experienceData, educationData } from "@/lib/data";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 lg:px-24 py-28"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="section-label">Background</p>
        <h2
          className="font-display font-bold leading-[1.15]"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#EDE8DC" }}
        >
          Experience &amp; Education
        </h2>
      </motion.div>

      <div
        className="grid gap-16"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {/* ── Work timeline ── */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[10px] text-text-dim tracking-widest uppercase mb-8"
          >
            Work History
          </motion.p>

          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-0 top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, #F5A623, transparent)" }}
            />

            {experienceData.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="pl-7 mb-10 relative"
              >
                {/* dot */}
                <div
                  className="absolute -left-1 top-[6px] w-2 h-2 rounded-full bg-accent"
                  style={{ boxShadow: "0 0 0 4px rgba(245,166,35,0.15)" }}
                />

                <div className="flex justify-between items-start mb-1 gap-3 flex-wrap">
                  <div>
                    <div className="font-medium text-[15px] text-text-primary">{exp.role}</div>
                    <div className="text-[13px] text-accent mt-1">{exp.company}</div>
                  </div>
                  <span className="font-mono text-[11px] text-text-dim flex-shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-[1.75] mb-3">{exp.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag tag-dim">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Education & certs ── */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[10px] text-text-dim tracking-widest uppercase mb-8"
          >
            Education &amp; Certs
          </motion.p>

          <div className="flex flex-col gap-4">
            {educationData.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                className="glass hover-card rounded-lg p-5"
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <div className="text-[15px] font-medium text-text-primary mb-1">
                      {ed.degree}
                    </div>
                    <div
                      className="text-[13px]"
                      style={{ color: ed.type === "edu" ? "#F5A623" : "#7DB89A" }}
                    >
                      {ed.institution}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-text-dim flex-shrink-0">
                    {ed.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
