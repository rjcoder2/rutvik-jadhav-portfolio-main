import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-background pt-28 pb-10"
    >
      {/* decorative curves */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 opacity-60"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
      >
        <circle cx="450" cy="450" r="380" stroke="currentColor" strokeOpacity="0.15" />
        <circle cx="450" cy="450" r="280" stroke="currentColor" strokeOpacity="0.1" />
        <path d="M 100 800 Q 450 -100 800 800" stroke="currentColor" strokeOpacity="0.12" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          {/* Left side: Text content */}
          <div className="flex-1">
            <p className="font-mono-caps text-foreground reveal">
              Data Analyst · MCA Student
            </p>
            <h1
              className="font-display text-foreground reveal"
              style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)", fontWeight: 900 }}
            >
              RUTVIK
              <br />
              JADHAV
            </h1>
            <p className="reveal max-w-md text-base text-secondary-text md:text-lg mt-6">
              Turning raw data into clear insights — building dashboards, models, and
              stories that move decisions forward.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-8 reveal">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="https://github.com/rjcoder2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rutvik-jadhav-ab7682275/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>

          {/* Right side: Profile Photo */}
          <div className="flex-shrink-0 reveal">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src="/profile.jpeg"
                alt="Rutvik Jadhav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] items-end justify-between gap-6 px-5 md:px-8">
        <div className="flex gap-6 text-sm text-secondary-text">
          <span>📍 Maharashtra, India</span>
          <span>🎓 MCA Student</span>
          <span>💼 Open to Opportunities</span>
        </div>
        <a
          href="#about"
          className="reveal flex flex-col items-center gap-2 font-mono-caps text-foreground"
        >
          Scroll
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}