const items = [
  {
    period: "2024",
    role: "Digital Marketing Intern",
    org: "3-month Internship",
    points: [
      "Practical exposure to digital marketing strategies",
      "Hands-on with campaign tools and basic analytics",
      "Certificate earned on completion",
    ],
  },
  {
    period: "2021 — 2025",
    role: "MCA (Pursuing) · BCA",
    org: "Shivaji University, Kolhapur",
    points: [
      "Independent projects in Power BI, web development, and database design",
      "Foundation in algorithms, databases, and software engineering",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-surface py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex items-baseline justify-between border-b border-divider pb-6">
          <p className="font-mono-caps text-muted-text reveal">04 — Experience</p>
        </div>

        <h2
          className="mt-10 font-display font-black text-foreground reveal"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
        >
          JOURNEY
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-divider md:left-[200px]" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <div key={i} className="reveal relative grid gap-6 pl-8 md:grid-cols-[200px_1fr] md:pl-0">
                <div className="md:pr-10">
                  <span className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-ink md:left-[195px]" />
                  <p className="font-mono-caps text-muted-text">{it.period}</p>
                </div>
                <div className="md:pl-10">
                  <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {it.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted-text">{it.org}</p>
                  <ul className="mt-4 space-y-2 text-secondary-text">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 inline-block h-px w-5 flex-shrink-0 bg-current opacity-50" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
