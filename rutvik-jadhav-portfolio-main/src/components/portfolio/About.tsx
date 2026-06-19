import { GraduationCap, Target, Sparkles, Heart, BookOpen, Award, Briefcase, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28 text-ink-foreground md:py-40">
      {/* Background Decoration */}
      <h2
        aria-hidden
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none font-display font-black text-white/[0.04]"
        style={{ fontSize: "clamp(8rem, 28vw, 26rem)" }}
      >
        ABOUT
      </h2>

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono-caps text-white/60 reveal">01 — About Me</p>
            <h3
              className="mt-6 font-display font-black reveal"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Data with
              <br />
              purpose.
            </h3>
            <div className="mt-8 flex items-center gap-4 reveal">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-white/50">Open to opportunities</span>
            </div>
          </div>
          
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-white/80 reveal md:text-xl">
              I'm Rutvik Jadhav, an MCA student with a strong foundation in data analytics, 
              business intelligence, and programming. Currently pursuing my Master's in 
              Computer Applications, I'm passionate about transforming raw data into 
              actionable insights that drive business decisions.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/60 reveal md:text-xl">
              With a BCA background and continuous learning in Python, SQL, Power BI, 
              and Tableau, I bridge the gap between technical expertise and business 
              storytelling — turning complex datasets into clear, compelling narratives.
            </p>
          </div>
        </div>

        {/* Education & Stats Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {/* Education Card */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 reveal hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/20 p-2">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold">Education</h4>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-white">MCA (2025-2027)</p>
                <p className="text-sm text-white/60">Master of Computer Applications</p>
                <p className="text-xs text-white/40">Focus: Data Analytics & Visualization</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">BCA (2022-2025)</p>
                <p className="text-sm text-white/60">Bachelor of Computer Applications</p>
                <p className="text-xs text-white/40">Focus: Programming & Database Management</p>
              </div>
            </div>
          </div>

          {/* What Drives Me Card */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 reveal hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/20 p-2">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold">What Drives Me</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Sparkles className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <span>Data-driven decision making & storytelling</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Target className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <span>Building interactive dashboards & visualizations</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Code2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <span>Continuous learning & exploring new technologies</span>
              </li>
            </ul>
          </div>

          {/* Quick Facts Card - UPDATED */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 reveal hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/20 p-2">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold">Quick Facts</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold text-primary">2+</p>
                <p className="text-xs text-white/60">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-xs text-white/60">Certifications</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4</p>
                <p className="text-xs text-white/60">Academic Years</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">12+</p>
                <p className="text-xs text-white/60">Technologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Goal Section - FIXED with dark gray text */}
        <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6 reveal">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary" />
            <h4 className="font-display text-lg font-bold text-white">Career Goal</h4>
          </div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            To become a <span className="text-gray-300 font-medium">Data Analyst</span> who bridges the gap 
            between data and business decisions. I aim to leverage my skills in Python, SQL, 
            and visualization tools to help organizations make data-driven decisions and 
            uncover meaningful insights.
          </p>
        </div>
      </div>
    </section>
  );
}