import { ExternalLink, Github, Heart, Shield, TrendingUp, Cpu, Globe, Zap, Layout, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'SkillChain – P2P Skill Exchange',
    description:
      'A decentralized "knowledge barter" platform matching mentors with learners. Includes an AI Coach (Gemini), real-time community chats via WebSockets, and a gamified system with SkillPoints and badges.',
    techStack: ['Java Spring Boot', 'React.js', 'PostgreSQL', 'Gemini AI', 'WebSockets', 'Docker', 'Render'],
    icon: TrendingUp,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    github: 'https://github.com/shettyprerna2607/SkillChain',
    demo: 'https://skillchain-web.onrender.com/',
    featured: true,
  },
  {
    title: 'MediConnect – Smart Healthcare App',
    description:
      'Real-time healthcare platform featuring vital tracking, doctor appointment booking, and a secure Digital Medical Vault. Includes real-time push notifications (FCM) and an Emergency SOS feature.',
    techStack: ['Flutter', 'Dart', 'Firebase (Firestore/FCM)', 'Reactive Programming', 'Cloud Sync'],
    icon: Shield,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    github: 'https://github.com/shettyprerna2607/MediConnect',
    featured: true,
  },
  {
    title: 'Galaxy AI – Local AI Coding Assistant',
    description:
      'A privacy-focused, offline coding assistant with StarMap Visualization. Features a celestial 2D force-directed graph for codebase navigation, local LLM integration (Ollama), and a semantic context search engine using LanceDB.',
    techStack: ['Electron', 'React 19', 'Zustand', 'Ollama', 'LanceDB', 'Xterm.js', 'Monaco Editor'],
    icon: Globe,
    gradient: 'from-fuchsia-500 via-purple-600 to-indigo-700',
    github: 'https://github.com/shettyprerna2607/Galaxy-AI',
    featured: true,
  },
  {
    title: 'FocusLens AI – Gamified Chrome Extension',
    description:
      'A privacy-first extension that turns time management into a credit-based game. Uses context-aware classification to reward productivity and penalize distractions with a snarky AI personality.',
    techStack: ['JavaScript (ES6+)', 'Chrome Extension API', 'Glassmorphism UI', 'Local Storage'],
    icon: Layout,
    gradient: 'from-indigo-400 via-violet-500 to-purple-600',
    github: 'https://github.com/shettyprerna2607/FocusLens-AI',
    featured: true,
  },
  {
    title: 'Wearable IoT Device for Memory Loss',
    description:
      'An ESP32-based wearable monitoring vitals (Heart rate, SpO2, Temp), tracking GPS location with geofencing, and detecting falls. Synchronized with a smart pill box and caregiver Android app via Firebase.',
    techStack: ['IoT', 'C++', 'Microcontroller', 'Sensors Integration', 'Flutter', 'Firebase Realtime DB'],
    icon: Cpu,
    gradient: 'from-rose-400 via-orange-500 to-amber-600',
    github: 'https://github.com/shettyprerna2607/Wearable_Device_For_Temporary_Memory_loss_patient',
    featured: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-cyan-500 mx-auto rounded-full mt-4 mb-8 shadow-sm" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Developing applications across web, mobile, AI-powered tools, and IoT devices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative grid lg:grid-cols-2 gap-8 items-center bg-card/30 backdrop-blur-md rounded-[2.5rem] border border-border/50 p-6 md:p-8 lg:p-10 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

              {/* Visual Side (Mockup/Icon) */}
              <div className={`relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} p-0.5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute inset-0 bg-background/90 rounded-[calc(1.5rem-2px)] flex items-center justify-center">
                  <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-2xl animate-float`}>
                    <project.icon className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                  </div>

                  {/* Floating Tech Icons Decor */}
                  <div className="absolute top-10 right-10 w-8 h-8 rounded-lg bg-card/80 backdrop-blur shadow-lg animate-float-delayed flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div className="absolute bottom-10 left-10 w-8 h-8 rounded-lg bg-card/80 backdrop-blur shadow-lg animate-float flex items-center justify-center">
                    <Heart className="h-4 w-4 text-rose-500" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">
                    0{index + 1} — Solution Overview
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-bold bg-secondary/50 text-foreground/80 rounded-full border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="lg" asChild className="rounded-2xl shadow-lg ring-offset-background group-hover:animate-pulse">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      View Architecture
                    </a>
                  </Button>
                  {(project as any).demo && (
                    <Button variant="gradient" size="lg" asChild className="rounded-2xl shadow-xl shadow-primary/20">
                      <a
                        href={(project as any).demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Explore Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-24 p-12 rounded-[3.5rem] glass-card text-center border border-primary/20 bg-primary/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4">Committed to Continuous Learning</h3>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              In addition to these projects, I continue to experiment with new technologies, build side projects, and document my learning. Feel free to explore my work on GitHub.
            </p>
            <Button variant="gradient" size="xl" asChild className="rounded-[2rem] shadow-2xl px-12 group-hover:scale-105 transition-all duration-300">
              <a
                href="https://github.com/shettyprerna2607"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="h-6 w-6" />
                Explore GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
