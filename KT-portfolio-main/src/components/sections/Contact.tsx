"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const inputBase =
    "w-full rounded px-4 py-3 text-sm text-text-primary outline-none transition-all duration-200 focus:border-accent placeholder:text-text-dim";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 lg:px-24 py-28"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <p className="section-label justify-center">Get In Touch</p>
        <h2
          className="font-display font-bold leading-[1.15] mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#EDE8DC" }}
        >
          Let&apos;s Build Something
          <br />
          <span className="accent-text italic">Beautiful Together</span>
        </h2>
        <p className="text-text-muted text-[15px] leading-relaxed">
          Have a project in mind? I&apos;d love to hear about it. Drop a message
          and I&apos;ll get back within 24 hours.
        </p>
      </motion.div>

      <div className="max-w-lg mx-auto">
        {/* Success state */}
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-16 px-10 rounded-xl"
            style={{
              border: "1px solid rgba(125,184,154,0.3)",
              background: "rgba(125,184,154,0.05)",
            }}
          >
            <div className="text-5xl mb-5 animate-float inline-block">✓</div>
            <h3 className="font-display text-2xl text-sage mb-3">
              Message Sent!
            </h3>
            <p className="text-text-muted text-sm">
              Thanks for reaching out — Krishna will respond shortly.
            </p>
          </motion.div>
        ) : (
          /* Form */
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-xl p-8 md:p-10"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-mono text-[10px] text-text-muted tracking-widest uppercase block mb-2">
                  Name
                </label>
                <input
                  className={inputBase}
                  style={{
                    ...inputStyle,
                    borderColor: errors.name
                      ? "#E24B4A"
                      : "rgba(255,255,255,0.08)",
                  }}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, name: e.target.value }));
                    if (errors.name)
                      setErrors((er) => ({ ...er, name: "" }));
                  }}
                />
                {errors.name && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="font-mono text-[10px] text-text-muted tracking-widest uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className={inputBase}
                  style={{
                    ...inputStyle,
                    borderColor: errors.email
                      ? "#E24B4A"
                      : "rgba(255,255,255,0.08)",
                  }}
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, email: e.target.value }));
                    if (errors.email)
                      setErrors((er) => ({ ...er, email: "" }));
                  }}
                />
                {errors.email && (
                  <p className="text-red-400 text-[11px] mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="font-mono text-[10px] text-text-muted tracking-widest uppercase block mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className={`${inputBase} resize-y`}
                style={{
                  ...inputStyle,
                  borderColor: errors.message
                    ? "#E24B4A"
                    : "rgba(255,255,255,0.08)",
                }}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => {
                  setForm((f) => ({ ...f, message: e.target.value }));
                  if (errors.message)
                    setErrors((er) => ({ ...er, message: "" }));
                }}
              />
              {errors.message && (
                <p className="text-red-400 text-[11px] mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-accent text-bg font-medium text-[15px] py-4 rounded transition-all hover:opacity-85 hover:-translate-y-px"
            >
              Send Message →
            </button>
          </motion.div>
        )}

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex justify-center gap-8 mt-12"
        >
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-text-dim tracking-widest uppercase no-underline transition-colors duration-200 hover:text-accent"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
