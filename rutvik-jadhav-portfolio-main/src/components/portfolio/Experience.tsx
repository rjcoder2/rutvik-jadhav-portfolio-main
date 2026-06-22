import { Briefcase, GraduationCap, Calendar, MapPin, Award, ExternalLink } from "lucide-react";

const items = [
  {
    period: "2022 — 2025",
    role: "Bachelor of Computer Applications (BCA)",
    org: "Shivaji University, Kolhapur",
    location: "Maharashtra, India",
    type: "Education",
    icon: <GraduationCap className="h-5 w-5" />,
    points: [
      "Strong foundation in programming and database management",
      "Completed projects in web development and database design",
      "Learned algorithms, data structures, and software engineering",
      "Participated in academic competitions and workshops",
    ],
    achievements: ["Graduated with distinction", "Project-based learning"],
  },
  {
    period: "Dec 2025 — Mar 2026",
    role: "Digital Marketing Intern",
    org: "Scaler Vision Media",
    location: "Remote",
    type: "Internship",
    icon: <Briefcase className="h-5 w-5" />,
    points: [
      "Assisted in digital marketing campaigns and content coordination",
      "Tracked ad performance and analyzed campaign metrics",
      "Supported day-to-day marketing operations and reporting",
      "Demonstrated strong initiative and willingness to learn",
    ],
    certificate: "SVMIOONT2025014",
    achievements: ["Certificate of Completion", "Positive performance review"],
  },
  {
    period: "2025 — 2027",
    role: "Master of Computer Applications (MCA)",
    org: "D Y Patil Talsande University",
    location: "Maharashtra, India",
    type: "Education",
    icon: <GraduationCap className="h-5 w-5" />,
    points: [
      "Specializing in Data Analytics and Visualization",
      "Building expertise in Python, SQL, and Power BI",
      "Developing data-driven solutions for real-world problems",
      "Collaborating on academic and research projects",
    ],
    achievements: ["Current CGPA: Pursuing", "Data Analytics focus"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-surface py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex items-baseline justify-between border-b border-divider pb-6">
          <p className="font-mono-caps text-muted-text reveal">04 — Experience & Education</p>
          <p className="hidden font-mono-caps text-muted-text md:block">My journey so far</p>
        </div>

        <div className="mt-10 flex items-center gap-4 reveal">
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            JOURNEY
          </h2>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-text">Active</span>
          </div>
        </div>

        {/* Stats Overview - Updated */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 reveal">
          <div className="rounded-lg border border-divider bg-background p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">1</p>
            <p className="text-xs text-muted-text">Bachelor's Degree</p>
          </div>
          <div className="rounded-lg border border-divider bg-background p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">1</p>
            <p className="text-xs text-muted-text">Master's Degree</p>
            <p className="text-[10px] text-muted-text/60">(Pursuing)</p>
          </div>
          <div className="rounded-lg border border-divider bg-background p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">1</p>
            <p className="text-xs text-muted-text">Internship</p>
          </div>
          <div className="rounded-lg border border-divider bg-background p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">2+</p>
            <p className="text-xs text-muted-text">Projects</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-divider md:left-[200px]" />
          
          <div className="space-y-12">
            {items.map((it, i) => (
              <div key={i} className="reveal relative grid gap-4 pl-10 md:grid-cols-[200px_1fr] md:pl-0">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary md:left-[197px]">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Left Column - Period */}
                <div className="md:pr-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="font-mono-caps text-sm text-muted-text">{it.period}</p>
                  </div>
                  <span className="mt-1 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-mono text-primary">
                    {it.type}
                  </span>
                </div>

                {/* Right Column - Content */}
                <div className="md:pl-8">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      {it.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                        {it.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3">
                        <p className="font-mono text-sm text-muted-text">{it.org}</p>
                        {it.location && (
                          <>
                            <span className="h-1 w-1 rounded-full bg-divider" />
                            <div className="flex items-center gap-1 text-xs text-muted-text">
                              <MapPin className="h-3 w-3" />
                              {it.location}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="mt-4 space-y-2 pl-2">
                    {it.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-secondary-text">
                        <span className="mt-2 inline-block h-px w-4 flex-shrink-0 bg-current opacity-50" />
                        <span className="text-sm md:text-base">{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements / Certificate */}
                  {it.achievements && it.achievements.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {it.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                        >
                          <Award className="h-3 w-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Certificate Link */}
                  {it.certificate && (
                    <div className="mt-3">
                      <a
                        href={`/certificates/${it.certificate}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}