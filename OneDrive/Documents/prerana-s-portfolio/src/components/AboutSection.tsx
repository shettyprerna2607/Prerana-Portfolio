import { Code2, Lightbulb, Target, Zap, Sparkles, User, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Practical approach to technical challenges, from hardware logic to complex software architectures.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'End-to-end development experience from mobile apps to scalable backend systems.',
  },
  {
    icon: Target,
    title: 'Domain Focus',
    description: 'Specialized in healthcare tech and AI-powered productivity tools with real-world impact.',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Adaptable and eager to embrace new technologies and methodologies.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-secondary/5">
      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            The <span className="gradient-text">Engineer</span> Behind
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-cyan-500 mx-auto rounded-full mt-4 shadow-sm" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
                Building practical digital solutions that solve <span className="text-primary">real-world problems.</span>
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I’m a <span className="text-foreground font-semibold">Computer Science engineering student</span> who likes building full-stack Java and Flutter applications. I enjoy starting with an idea, figuring out how it should work, and slowly turning it into a working product.
                </p>
                <p>
                  I’ve worked on projects like <span className="text-foreground font-semibold">SkillChain</span>, a peer learning platform built with Spring Boot and React, and <span className="text-foreground font-semibold">MediConnect</span>, a healthcare app that tracks vitals and stores medical records. While building them, I gained hands-on experience in backend development, authentication, real-time data handling, and deployment.
                </p>
                <p>
                  Apart from that, I’m interested in exploring <span className="text-foreground font-semibold">AI tools and IoT devices</span>. I’ve experimented with desktop AI applications, browser extensions, and wearable devices using ESP32 and C++. I like understanding how software connects with hardware and how both can work together in real life.
                </p>
                <p>
                  I believe I learn best by building things. Idea pitching, hackathons, and personal projects have helped me improve my problem-solving skills, and I’m always looking for ways to <span className="text-foreground font-semibold">build something useful and practical.</span>
                </p>
              </div>
            </div>

            {/* Stats Area */}
            <div className="flex flex-wrap gap-x-12 gap-y-8 pt-6">
              {[
                { label: 'Projects Built', value: '5+', icon: Code2 },
                { label: 'Achievements', value: '3+', icon: Target },
                { label: 'Core Tools', value: '20+', icon: Sparkles }
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-black tracking-tighter leading-none">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-[2rem] glass-card border border-border/50 group hover:-translate-y-2 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-2 leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
