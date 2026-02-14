import { Award, Medal, Star, Trophy, Zap, ExternalLink, Sparkles } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Winner, Avishkar, NITK Surathkal',
    description: 'Awarded for innovative project pitch, strong presentation skills, and technical problem-solving.',
    highlight: '1st Place',
    certificate: 'https://drive.google.com/file/d/1MiZNqq1SpsPWlAI3Cs_Jk9fJFiuFD70Z/view?usp=drive_link',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
  },
  {
    icon: Medal,
    title: 'State Level Model Pitching',
    description: 'Recognized for a practical, implementation-focused project and technical pitching excellence at SDM College Dharwad.',
    highlight: '3rd Place',
    certificate: 'https://drive.google.com/file/d/1N7TItWII2to-6Z6xFT3FBnlmB2objUdu/view?usp=drive_link',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Award,
    title: 'Social Innovation Prototype, Comedkares',
    description: 'Developed a creative and impactful social innovation prototype during a competitive event at SMVITM.',
    highlight: '1st Place',
    certificate: 'https://drive.google.com/file/d/195XT2VfmIf-L7LXQWmBWd3DXtFWcNkz6/view?usp=drive_link',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Star,
    title: 'Sanraksha, IIT Bombay',
    description: 'Selected from 300+ teams for national level solution pitch and expert feedback session.',
    highlight: 'Top 75',
    certificate: 'https://drive.google.com/file/d/1TiWqW9ztmkgcQ0qN_QCiUB_--MKF_egz/view?usp=drive_link',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    icon: Zap,
    title: 'Smart Nitte Hackathon, Nitte College',
    description: 'Developed the MediBot healthcare assistant; recognized for teamwork and full-stack execution.',
    highlight: 'Top 10',
    certificate: 'https://drive.google.com/file/d/1j8UXdR-AnrexkBSfsw_ihH50eQFi-Ge0/view?usp=drive_link',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-cyan-500 mx-auto rounded-full mt-4 shadow-sm" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className={`p-8 rounded-[2rem] glass-card group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Tag */}
              <div className={`absolute top-6 right-6 px-3 py-1 rounded-full ${item.bgColor} ${item.color} text-[10px] font-black uppercase tracking-tighter border-2 ${item.borderColor}`}>
                {item.highlight}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Link */}
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-bold ${item.color} group-hover:underline decoration-2 underline-offset-4 mt-auto`}
              >
                View Certificate
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${item.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
