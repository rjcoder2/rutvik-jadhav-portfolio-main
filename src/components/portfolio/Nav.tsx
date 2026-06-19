import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-surface transition-shadow ${
          scrolled ? "shadow-[0_1px_0_0_var(--divider),0_8px_24px_-16px_rgba(0,0,0,0.15)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <a href="#hero" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-ink font-display text-base font-black text-ink-foreground">
              RJ
            </span>
            <span className="hidden font-mono-caps text-foreground sm:inline">Rutvik Jadhav</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-caps text-foreground transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-sm border border-ink px-5 py-2.5 font-mono-caps text-foreground transition-colors hover:bg-ink hover:text-ink-foreground md:inline-block"
            >
              Hire Me
            </a>
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
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-surface px-6 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-ink font-display text-base font-black text-ink-foreground">
              RJ
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-black text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-block self-start rounded-sm bg-ink px-6 py-3 font-mono-caps text-ink-foreground"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
