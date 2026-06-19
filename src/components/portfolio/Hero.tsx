import { ArrowDown } from "lucide-react";

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
        <p className="font-mono-caps text-foreground reveal">
          Data Analyst · MCA Student
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <h1
          className="font-display text-foreground reveal"
          style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)", fontWeight: 900 }}
        >
          RUTVIK
          <br />
          JADHAV
        </h1>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] items-end justify-between gap-6 px-5 md:px-8">
        <p className="reveal max-w-md text-base text-secondary-text md:text-lg">
          Turning raw data into clear insights — building dashboards, models, and
          stories that move decisions forward.
        </p>
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
