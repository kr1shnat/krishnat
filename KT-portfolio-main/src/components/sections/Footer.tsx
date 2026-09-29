import Link from "next/link";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 lg:px-24 py-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#hero" className="no-underline">
          <span className="font-display italic text-lg text-text-dim">
            KT<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Mini nav */}
        <div className="flex gap-6 flex-wrap justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-[11px] text-text-dim tracking-widest uppercase no-underline hover:text-accent transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Copy */}
        <span className="font-mono text-[11px] text-text-dim">
          © {new Date().getFullYear()} Krishna Topale
        </span>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-6">
        <Link
          href="#hero"
          className="font-mono text-[11px] text-text-dim tracking-widest uppercase no-underline hover:text-accent transition-colors duration-200"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
