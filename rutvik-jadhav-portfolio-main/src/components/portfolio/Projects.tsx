import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

type Project = {
  num: string;
  title: string;
  category: string;
  tools: string[];
  description: string;
  outcomes: string[];
  cta: string;
  invert?: boolean;
  image: string;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Netflix Data Analysis Dashboard",
    category: "Power BI · Data Visualization",
    tools: ["Power BI", "DAX", "KPIs", "Data Analysis"],
    description:
      "Built an interactive dashboard analyzing Netflix movies and TV shows; used filters, DAX measures, and KPIs to surface content insights and trends across genres, regions, and release years.",
    outcomes: [
      "Strengthened end-to-end Power BI reporting workflow",
      "Surfaced actionable content trends through KPI design",
      "Practiced storytelling with interactive filters and slicers",
    ],
    cta: "View Dashboard",
    invert: true,
    image: "/netflix-dashboard.png",
    github: "https://github.com/rjcoder2/netflix-data-analysis-dashboard",
    demo: "https://github.com/rjcoder2/netflix-data-analysis-dashboard",
  },
  {
    num: "02",
    title: "HR Attrition Dashboard",
    category: "Power BI · HR Analytics",
    tools: ["Power BI", "DAX", "HR Analytics", "Data Visualization"],
    description:
      "Designed an interactive HR dashboard to analyze employee attrition patterns, identify key drivers, and provide actionable insights for retention strategies.",
    outcomes: [
      "Identified top attrition drivers using DAX measures",
      "Created interactive visualizations for HR decision-making",
      "Developed predictive insights for employee retention",
    ],
    cta: "View Dashboard",
    invert: false,
    image: "/hr-attrition-dashboard.png",
    github: "https://github.com/rjcoder2/HR-Attrition-Dashboard",
    demo: "https://github.com/rjcoder2/HR-Attrition-Dashboard",
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
                "reveal grid gap-8 rounded-sm border border-divider p-6 md:grid-cols-12 md:gap-10 md:p-10 " +
                (p.invert ? "bg-ink text-ink-foreground" : "bg-surface text-foreground")
              }
            >
              {/* Image Section with Contrasting Container */}
              <div className="md:col-span-5">
                <div 
                  className={`
                    relative overflow-hidden rounded-lg shadow-xl
                    ${p.invert 
                      ? 'bg-white/10 p-3' // Light container for dark background
                      : 'bg-black/5 p-3'  // Dark container for light background
                    }
                  `}
                >
                  {/* Inner image container with contrast */}
                  <div 
                    className={`
                      relative overflow-hidden rounded-md
                      ${p.invert 
                        ? 'bg-white' // White background for image
                        : 'bg-black' // Black background for image
                      }
                    `}
                  >
                    <div className="aspect-video w-full">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='24' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E" + 
                            encodeURIComponent(p.title) + 
                            "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    
                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-all duration-300 hover:opacity-100">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-3 text-black shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-primary p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>

                    {/* Image badge */}
                    <div className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      Dashboard
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-7">
                <p
                  className={
                    "font-mono-caps text-sm " + 
                    (p.invert ? "text-white/60" : "text-muted-text")
                  }
                >
                  {p.num} / {p.category}
                </p>
                <h3
                  className="mt-4 font-display font-black leading-tight"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                >
                  {p.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className={
                        "rounded-full px-3 py-1 font-mono text-xs font-medium " +
                        (p.invert
                          ? "border border-white/30 text-white/80"
                          : "border border-ink/30 text-foreground")
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p
                  className={
                    "mt-4 text-base leading-relaxed md:text-lg " +
                    (p.invert ? "text-white/80" : "text-secondary-text")
                  }
                >
                  {p.description}
                </p>
                <ul
                  className={
                    "mt-4 space-y-2 " +
                    (p.invert ? "text-white/70" : "text-secondary-text")
                  }
                >
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-3">
                      <span className="mt-2 inline-block h-px w-4 flex-shrink-0 bg-current opacity-50" />
                      <span className="text-sm md:text-base">{o}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "inline-flex items-center gap-2 border-b-2 pb-1 font-mono-caps text-sm transition-all hover:opacity-70 " +
                      (p.invert ? "border-white text-white" : "border-ink text-foreground")
                    }
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "inline-flex items-center gap-2 border-b-2 pb-1 font-mono-caps text-sm transition-all hover:opacity-70 " +
                      (p.invert ? "border-white text-white" : "border-ink text-foreground")
                    }
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}