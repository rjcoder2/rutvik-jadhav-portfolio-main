import { ArrowUpRight } from "lucide-react";

type Project = {
  num: string;
  title: string;
  category: string;
  tools: string[];
  description: string;
  outcomes: string[];
  cta: string;
  invert?: boolean;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Netflix Data Analysis Dashboard",
    category: "Power BI · Data Visualization",
    tools: ["Power BI", "DAX", "KPIs"],
    description:
      "Built an interactive dashboard analyzing Netflix movies and TV shows; used filters, DAX measures, and KPIs to surface content insights and trends across genres, regions, and release years.",
    outcomes: [
      "Strengthened end-to-end Power BI reporting workflow",
      "Surfaced actionable content trends through KPI design",
      "Practiced storytelling with interactive filters and slicers",
    ],
    cta: "View Dashboard",
    invert: true,
  },
  {
    num: "02",
    title: "Blood Bank Management System",
    category: "Web · Front-end",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Developed a web-based system for managing donor and recipient data with a responsive, user-friendly interface — focused on clarity, accessibility, and lightweight UX.",
    outcomes: [
      "Designed responsive layouts for desktop and mobile",
      "Implemented donor/recipient data flows in vanilla JS",
      "Improved usability with clear visual hierarchy",
    ],
    cta: "View Project",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex items-baseline justify-between border-b border-divider pb-6">
          <p className="font-mono-caps text-muted-text reveal">03 — Selected Works</p>
          <p className="hidden font-mono-caps text-muted-text md:block">2024 — 2026</p>
        </div>

        <div className="mt-16 space-y-10">
          {projects.map((p) => (
            <article
              key={p.num}
              className={
                "reveal grid gap-10 rounded-sm border border-divider p-8 md:grid-cols-12 md:p-14 " +
                (p.invert ? "bg-ink text-ink-foreground" : "bg-surface text-foreground")
              }
            >
              <div className="md:col-span-4">
                <p
                  className={
                    "font-mono-caps " + (p.invert ? "text-white/60" : "text-muted-text")
                  }
                >
                  {p.num} / {p.category}
                </p>
                <h3
                  className="mt-6 font-display font-black"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {p.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className={
                        "rounded-full px-3 py-1 font-mono text-xs " +
                        (p.invert
                          ? "border border-white/30 text-white/80"
                          : "border border-ink/30 text-foreground")
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p
                  className={
                    "text-lg leading-relaxed " +
                    (p.invert ? "text-white/80" : "text-secondary-text")
                  }
                >
                  {p.description}
                </p>
                <ul
                  className={
                    "mt-6 space-y-2 " +
                    (p.invert ? "text-white/70" : "text-secondary-text")
                  }
                >
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-3">
                      <span className="mt-2 inline-block h-px w-5 flex-shrink-0 bg-current opacity-50" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={
                    "mt-8 inline-flex items-center gap-2 border-b pb-1 font-mono-caps transition-opacity hover:opacity-70 " +
                    (p.invert ? "border-white text-white" : "border-ink text-foreground")
                  }
                >
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
