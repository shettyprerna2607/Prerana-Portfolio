import { Code2, Layout, Cpu, Database, Zap, BookOpen, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'Dart', 'JavaScript (ES6+)', 'TypeScript', 'C++', 'Python', 'C#', 'HTML/CSS', 'Kotlin'],
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    color: 'text-blue-500',
  },
  {
    title: 'Frameworks & Frontend',
    icon: Layout,
    skills: ['Spring Boot', 'Flutter', 'React.js', 'Electron', 'Xterm.js', 'Tailwind CSS', 'Zustand'],
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    color: 'text-purple-500',
  },
  {
    title: 'AI & Real-Time',
    icon: Zap,
    skills: ['Gemini AI', 'Ollama (Local LLMs)', 'WebSockets (SockJS/STOMP)', 'MQTT', 'FCM'],
    gradient: 'from-green-500 via-emerald-500 to-green-600',
    color: 'text-green-500',
  },
  {
    title: 'Databases & Infrastructure',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Firestore', 'LanceDB (Vector)', 'MongoDB', 'Docker', 'Render'],
    gradient: 'from-orange-500 via-amber-500 to-orange-600',
    color: 'text-orange-500',
  },
  {
    title: 'IoT & Hardware',
    icon: Cpu,
    skills: ['Microcontrollers', 'Sensors Integration', 'IoT Systems'],
    gradient: 'from-rose-500 via-red-500 to-rose-600',
    color: 'text-rose-500',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-cyan-500 mx-auto rounded-full mt-4 shadow-sm" />
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-w-[300px] p-8 rounded-[2rem] glass-card group hover:-translate-y-2 transition-all duration-500 border border-border/50 hover:border-primary/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-black tracking-tight">{category.title}</h3>
              </div>

              {/* Skills Area */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-xs font-bold rounded-xl bg-secondary/40 border border-border/50 text-foreground/80 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/5 border border-primary/10 text-muted-foreground animate-float">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">
              Always eager to explore and learn <span className="text-primary font-black">new technologies</span> and <span className="text-primary font-black">emerging ideas</span>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
