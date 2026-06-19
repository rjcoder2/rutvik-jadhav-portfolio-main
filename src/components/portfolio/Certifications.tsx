const certs = [
  { name: "Relational Database Management System (SQL)", issuer: "IBM", tag: "Database" },
  { name: "Introduction to jQuery", issuer: "Online Platform", tag: "Web" },
  { name: "Digital Marketing Internship", issuer: "Agency", tag: "Marketing" },
];

export function Certifications() {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex items-baseline justify-between border-b border-divider pb-6">
          <p className="font-mono-caps text-muted-text reveal">05 — Certifications</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {certs.map((c) => (
            <div
              key={c.name}
              className="reveal flex flex-col justify-between rounded-sm border border-divider bg-surface p-8 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]"
            >
              <span className="self-start rounded-full border border-ink/30 px-3 py-1 font-mono text-xs text-foreground">
                {c.tag}
              </span>
              <h3 className="mt-10 font-display text-xl font-bold text-foreground md:text-2xl">
                {c.name}
              </h3>
              <p className="mt-6 font-mono-caps text-muted-text">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
