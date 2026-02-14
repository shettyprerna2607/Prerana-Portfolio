import { BookOpen, GraduationCap, MapPin, Calendar, Sparkles } from 'lucide-react';

const education = [
  {
    degree: 'Primary & Secondary Schooling',
    institution: 'Indrali English Medium Nursery and Higher Primary School',
    location: 'Udupi, Karnataka',
    duration: '2012 – 2020',
    grade: '73.28',
    icon: BookOpen,
    current: false,
    highlights: [
      'Completed foundational education with a focus on holistic development.',
    ],
  },
  {
    degree: 'Pre-University Course (PUC)',
    institution: 'Mahatma Gandhi Memorial College (MGM), Udupi',
    location: 'Udupi, Karnataka',
    duration: '2020 – 2022',
    grade: '65.3',
    icon: GraduationCap,
    current: false,
    highlights: [
      'Specialized in Physics, Chemistry, Mathematics, and Computer Science (PCMCS).',
    ],
  },
  {
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM)',
    location: 'Udupi, Karnataka',
    duration: '2022 - Expected 2026',
    grade: '7.28',
    icon: GraduationCap,
    current: true,
    highlights: [
      'Relevant Coursework: C, Python, Java (OOP), DSA, DBMS, Web Development',
      'Focusing on Full-Stack Development and IoT Integration',
    ],
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden bg-secondary/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Academic <span className="gradient-text">History</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-cyan-500 mx-auto rounded-full mt-4 shadow-sm" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full opacity-20" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] z-20 hidden md:block" />

                <div className={`w-full md:w-[calc(50%-2rem)] transition-all duration-700 hover:-translate-y-2`}>
                  <div className={`p-8 md:p-10 rounded-[2.5rem] glass-card border-2 ${item.current ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border/50'} relative overflow-hidden group transition-all duration-500`}>

                    {item.current && (
                      <div className="absolute top-0 right-10 px-6 py-2 rounded-b-2xl bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg animate-pulse">
                        Current
                      </div>
                    )}

                    <div className="flex flex-col gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">{item.degree}</h3>
                        <p className="text-primary font-bold text-lg tracking-wide">{item.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest bg-secondary/50 px-4 py-2 rounded-xl border border-border/50">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest bg-secondary/50 px-4 py-2 rounded-xl border border-border/50">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {item.location}
                      </div>
                    </div>

                    {/* Grade Highlight */}
                    <div className="mb-8 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-primary/5 border-2 border-primary/20">
                      <span className="text-xs font-black tracking-[0.2em] text-primary uppercase opacity-70">Result</span>
                      <span className="text-xl font-black text-foreground">{item.grade}</span>
                    </div>

                    {/* Key Highlights List */}
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-2">Focus Areas</p>
                      <ul className="space-y-3">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-4 text-[15px] font-medium text-muted-foreground/90 leading-relaxed group-hover:text-foreground transition-colors">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_10px_rgba(var(--primary-rgb),1)]" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
