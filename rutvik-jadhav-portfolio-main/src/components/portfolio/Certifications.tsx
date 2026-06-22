import { Award, ExternalLink, Calendar, CheckCircle2, Database, Globe, Megaphone } from "lucide-react";

type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  tag: string;
  icon: React.ReactNode;
  skills?: string[];
};

const certifications: Certification[] = [
  {
    name: "SQL and Relational Databases 101",
    issuer: "IBM",
    date: "December 2025",
    credentialId: "DB0101EN",
    verifyUrl: "https://courses.etrain.skillsnetwork.site/certificates/ca4eaac7194d456eb14b7820045fe506",
    tag: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["SQL", "Relational Databases", "IBM"],
  },
  {
    name: "Data Science 101",
    issuer: "IBM (Cognitive Class)",
    date: "May 2026",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/329b370da4a94202abfa65b6303b6794",    tag: "Data Science",
    icon: <Award className="h-5 w-5" />,
    skills: ["Data Science", "Python", "Analytics"],
  },
  {
  name: "Getting Started with Tableau",
  issuer: "Analytics Vidhya",
  date: "April 2026",
  credentialId: "c0uvwojwg5",
  verifyUrl: "https://courses.analyticsvidhya.com/certificates/c0uvwojwg5",
  tag: "Data Visualization",
  icon: <Award className="h-5 w-5" />,
  skills: ["Tableau", "Data Visualization", "Business Intelligence"],
},
 {
  name: "Introduction to jQuery",
  issuer: "Simplilearn",
  date: "November 2025",
  credentialId: "9416646",
  verifyUrl: "https://lms.simplilearn.com/courses/6379/Introduction-to-jQuery/certificate/download-skillup",
  tag: "Web Development",
  icon: <Globe className="h-5 w-5" />,
  skills: ["jQuery", "JavaScript", "Web Development"],
},
  {
    name: "Digital Marketing Internship",
    issuer: "Scaler Vision Media",
    date: "December 2025",
    credentialId: "SVMIOONT2025014",
    tag: "Marketing",
    icon: <Megaphone className="h-5 w-5" />,
    skills: ["Digital Marketing", "Content Coordination", "Ad Performance"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex items-baseline justify-between border-b border-divider pb-6">
          <p className="font-mono-caps text-muted-text reveal">04 — Certifications</p>
          <p className="hidden font-mono-caps text-muted-text md:block">Professional Development</p>
        </div>

        <div className="mt-10 flex items-center gap-4 reveal">
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            CERTIFICATIONS
          </h2>
          <Award className="h-8 w-8 text-primary animate-pulse" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group reveal rounded-lg border border-divider bg-surface p-6 transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      {cert.icon}
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-mono text-primary">
                      {cert.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-text">{cert.issuer}</p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-text">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="text-xs">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 rounded-full bg-primary/10 p-2 text-primary transition-all hover:bg-primary hover:text-white"
                    aria-label="Verify Certificate"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-ink/5 px-3 py-1 text-xs text-muted-text border border-divider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">5</p>
            <p className="text-xs text-muted-text">Certifications</p>
          </div>
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">5</p>
            <p className="text-xs text-muted-text">Issuers</p>
            <p className="text-[10px] text-muted-text/60">IBM, Scaler Vision, Online</p>
          </div>
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">2025-26</p>
            <p className="text-xs text-muted-text">Period</p>
          </div>
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-xs text-muted-text">Completion Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}