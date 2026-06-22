import { useState, useEffect, useRef } from "react";
import { BarChart3, Code2, Globe, Wrench, Sparkles, Award, GraduationCap, FolderGit2, BadgeCheck, Brain } from "lucide-react";

type Skill = { 
  name: string; 
  level: number; // 0-100
  icon?: string;
  color?: string;
};

type Group = { 
  title: string; 
  index: string; 
  icon: React.ReactNode;
  skills: Skill[];
};

// Skill level mapping - Adjusted to be more realistic/less inflated
const getSkillLevel = (name: string): number => {
  const levels: Record<string, number> = {
    "Python": 75,
    "SQL": 70,
    "Power BI": 65,
    "Tableau": 60,
    "Excel": 70,
    "HTML": 75,
    "CSS": 70,
    "Git": 70,
    "GitHub": 65,
    "Google Colab": 65,
    "Pandas": 65,
    "NumPy": 60,
    "Matplotlib": 55,
    "Seaborn": 55,
    "Kaggle": 60,
  };
  return levels[name] || 50;
};

// Skill colors for visual variety
const getSkillColor = (name: string): string => {
  const colors: Record<string, string> = {
    "Python": "#3776AB",
    "SQL": "#4479A1",
    "Power BI": "#F2C811",
    "Tableau": "#E97627",
    "Excel": "#217346",
    "HTML": "#E34F26",
    "CSS": "#1572B6",
    "Git": "#F05032",
    "GitHub": "#181717",
    "Google Colab": "#F9AB00",
    "Pandas": "#150458",
    "NumPy": "#013243",
    "Matplotlib": "#11557C",
    "Seaborn": "#1278A4",
    "Kaggle": "#20BEFF",
  };
  return colors[name] || "#38BDF8";
};

const groups: Group[] = [
  {
    index: "01",
    title: "Data Analysis",
    icon: <BarChart3 className="h-5 w-5" />,
    skills: [
      { name: "Excel", level: 70 },
      { name: "Power BI", level: 65 },
      { name: "SQL", level: 70 },
      { name: "Tableau", level: 60 },
    ],
  },
  {
    index: "02",
    title: "Programming",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 75 },
      { name: "Pandas", level: 65 },
      { name: "NumPy", level: 60 },
      { name: "Matplotlib", level: 55 },
    ],
  },
  {
    index: "03",
    title: "Web Fundamentals",
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 70 },
    ],
  },
  {
    index: "04",
    title: "Tools & Platforms",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 70 },
      { name: "GitHub", level: 65 },
      { name: "Google Colab", level: 65 },
      { name: "Kaggle", level: 60 },
    ],
  },
];

// Animated Skill Bar Component - Slimmer design
function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const color = getSkillColor(name);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate to the skill level - slower animation
            let current = 0;
            const increment = level / 50; // Slower increment for smoother animation
            const timer = setInterval(() => {
              current += increment;
              if (current >= level) {
                setWidth(level);
                clearInterval(timer);
              } else {
                setWidth(Math.min(current, level));
              }
            }, 25);
            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-text">
          {Math.round(width)}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${width}%`,
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}30`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex items-baseline justify-between border-b border-divider pb-6">
          <p className="font-mono-caps text-muted-text reveal">02 — Technical Skills</p>
          <p className="hidden font-mono-caps text-muted-text md:block">What I work with</p>
        </div>

        <div className="mt-10 flex items-center gap-4 reveal">
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            STACK
          </h2>
          <Sparkles className="h-8 w-8 text-primary animate-pulse" />
        </div>

        {/* Updated Stats Overview - Based on your actual background */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 reveal">
          {/* Projects - Updated to 2+ */}
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <div className="flex justify-center mb-2">
              <FolderGit2 className="h-6 w-6 text-primary/70 group-hover:text-primary transition-colors" />
            </div>
            <p className="text-2xl font-bold text-primary">2+</p>
            <p className="text-xs text-muted-text">Projects</p>
          </div>
          
          {/* Academic Years - Updated to show BCA + MCA */}
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <div className="flex justify-center mb-2">
              <GraduationCap className="h-6 w-6 text-primary/70 group-hover:text-primary transition-colors" />
            </div>
            <p className="text-2xl font-bold text-primary">4</p>
            <p className="text-xs text-muted-text">Academic Years</p>
            <p className="text-[10px] text-muted-text/60">BCA (3) + MCA (1)</p>
          </div>
          
          {/* Certifications - Updated to 4+ */}
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <div className="flex justify-center mb-2">
              <BadgeCheck className="h-6 w-6 text-primary/70 group-hover:text-primary transition-colors" />
            </div>
            <p className="text-2xl font-bold text-primary">5+</p>
            <p className="text-xs text-muted-text">Certifications</p>
          </div>
          
          {/* Technologies - Stayed at 12+ */}
          <div className="rounded-lg border border-divider bg-surface p-4 text-center group hover:border-primary/50 transition-colors">
            <div className="flex justify-center mb-2">
              <Brain className="h-6 w-6 text-primary/70 group-hover:text-primary transition-colors" />
            </div>
            <p className="text-2xl font-bold text-primary">12+</p>
            <p className="text-xs text-muted-text">Technologies</p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="reveal rounded-lg border border-divider bg-surface p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 border-b border-divider pb-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  {g.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-text">{g.index}</span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {g.title}
                  </h3>
                </div>
              </div>
              <div className="mt-4">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-16 rounded-lg border border-primary/20 bg-primary/5 p-6 reveal">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">
              Currently Learning
            </h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Data Analytics", " Power BI Dashboard Design", "SQL & Database Management", "Python for Data Analysis"].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground"
              >
                {topic}
                <span className="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}