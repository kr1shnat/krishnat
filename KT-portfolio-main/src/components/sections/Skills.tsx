"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import { skillsData, toolPills } from "@/lib/data";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 lg:px-24 py-28"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label">Expertise</p>
          <h2
            className="font-display font-bold leading-[1.15] mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#EDE8DC" }}
          >
            Tools &amp; Skills
          </h2>
          <p className="text-text-muted">
            The craft behind the work — from wireframes to high-fidelity designs.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="flex flex-col gap-7">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-primary">{skill.name}</span>
                  <span className="tag tag-dim">{skill.cat}</span>
                </div>
                <span className="font-mono text-[13px] text-accent">
                  {inView ? `${skill.pct}%` : "0%"}
                </span>
              </div>
              <div
                className="h-[3px] rounded-sm overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="skill-bar-fill h-full"
                  style={{
                    width: inView ? `${skill.pct}%` : "0%",
                    transitionDelay: `${0.2 + i * 0.07}s`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {toolPills.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full text-[13px] text-text-muted transition-all duration-200 cursor-default hover:text-accent"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#F5A623";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
