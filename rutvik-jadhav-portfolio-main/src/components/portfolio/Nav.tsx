import { useEffect, useState } from "react";
import { Menu, X, FileText, Home } from "lucide-react";
import ResumeModal from "./ResumeModal";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showResume, setShowResume] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      
      // Update active section
      const sections = ["hero", "about", "skills", "projects", "experience", "certifications", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-surface transition-all duration-300 ${
          scrolled 
            ? "shadow-[0_1px_0_0_var(--divider),0_8px_24px_-16px_rgba(0,0,0,0.15)] bg-surface/95 backdrop-blur-sm" 
            : "bg-surface"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 md:px-8 md:py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-ink font-display text-base font-black text-ink-foreground transition-transform group-hover:scale-105">
              RJ
            </span>
            <span className="hidden font-mono-caps text-foreground sm:inline">
              Rutvik Jadhav
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-mono-caps text-sm transition-all hover:opacity-60 relative ${
                  activeSection === l.href.replace("#", "") 
                    ? "text-foreground" 
                    : "text-foreground/60"
                }`}
              >
                {l.label}
                {activeSection === l.href.replace("#", "") && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Resume - open in modal */}
            <button
              type="button"
              onClick={() => setShowResume(true)}
              className="hidden items-center gap-2 rounded-sm border border-ink px-5 py-2.5 font-mono-caps text-sm text-foreground transition-colors hover:bg-ink hover:text-ink-foreground md:inline-flex"
            >
              <FileText className="h-4 w-4" />
              Resume
            </button>
            
            {/* Contact Button */}
            <a
              href="#contact"
              className="hidden rounded-sm bg-primary px-5 py-2.5 font-mono-caps text-sm text-white transition-colors hover:bg-primary/90 md:inline-block"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="h-0.5 w-full bg-ink/5">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
            }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-surface/98 backdrop-blur-md px-6 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <a 
              href="#hero" 
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-ink font-display text-base font-black text-ink-foreground"
            >
              RJ
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-foreground hover:bg-ink/5 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-6">
            {/* Home Link */}
            <a
              href="#hero"
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-black text-foreground/60 hover:text-foreground transition-colors flex items-center gap-3"
            >
              <Home className="h-6 w-6" />
              Home
            </a>
            
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-display text-4xl font-black transition-colors ${
                  activeSection === l.href.replace("#", "")
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {l.label}
                {activeSection === l.href.replace("#", "") && (
                  <span className="ml-3 text-sm text-primary">✦</span>
                )}
              </a>
            ))}
            
            <div className="mt-8 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  setShowResume(true);
                  setOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-6 py-3 font-mono-caps text-foreground transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <FileText className="h-4 w-4" />
                Resume
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 font-mono-caps text-white transition-colors hover:bg-primary/90"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
      <ResumeModal open={showResume} onClose={() => setShowResume(false)} />
    </>
  );
}