type Skill = { name: string; learning?: boolean };
type Group = { title: string; index: string; skills: Skill[] };

const groups: Group[] = [
  {
    index: "01",
    title: "Data Analysis",
    skills: [
      { name: "Excel" },
      { name: "Power BI" },
      { name: "SQL", learning: true },
    ],
  },
  {
    index: "02",
    title: "Programming",
    skills: [{ name: "Python", learning: true }],
  },
  {
    index: "03",
    title: "Web Fundamentals",
    skills: [{ name: "HTML" }, { name: "CSS" }],
  },
  {
    index: "04",
    title: "Tools",
    skills: [
      { name: "Git", learning: true },
      { name: "GitHub", learning: true },
      { name: "Google Colab", learning: true },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex items-baseline justify-between border-b border-divider pb-6">
          <p className="font-mono-caps text-muted-text reveal">02 — Technical Skills</p>
          <p className="hidden font-mono-caps text-muted-text md:block">What I work with</p>
        </div>

        <h2
          className="mt-10 font-display font-black text-foreground reveal"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
        >
          STACK
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="reveal border-t border-divider pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono-caps text-muted-text">{g.index}</span>
                <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {g.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s.name}
                    className={
                      s.learning
                        ? "rounded-full border border-ink/40 px-4 py-2 font-mono text-sm text-foreground"
                        : "rounded-full bg-ink px-4 py-2 font-mono text-sm text-ink-foreground"
                    }
                  >
                    {s.name}
                    {s.learning && <span className="ml-2 text-muted-text">· Learning</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
