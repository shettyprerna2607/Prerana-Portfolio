import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import resumeFile from '../assets/resume/Prerana_Shetty_Resume.pdf';

export const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Java Full-Stack Developer",
    "Flutter App Developer",
    "AI & IoT Enthusiast"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 50 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 opacity-0 animate-fade-up stagger-1">
            <span className="text-primary font-mono text-sm font-medium tracking-wider uppercase">
              Available for Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight opacity-0 animate-fade-up stagger-2">
            <span className="gradient-text leading-tight">Prerana A Shetty</span>
          </h1>

          {/* Role */}
          <div className="h-[40px] sm:h-[60px] flex items-center justify-center mb-8 opacity-0 animate-fade-up stagger-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground">
              I'm a <span className="text-primary">{text}</span>
              <span className="animate-pulse inline-block w-1.5 h-8 sm:h-10 bg-primary ml-1 align-middle" />
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up stagger-4">
            I build scalable full-stack Java and Flutter applications and enjoy exploring Local AI and IoT systems to create practical solutions for real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 opacity-0 animate-fade-up stagger-5">
            <Button variant="gradient" size="xl" asChild className="group shadow-2xl transition-all duration-500 rounded-2xl">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Let's Collaborate
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-2 font-bold transition-all duration-500 rounded-2xl">
              <a href={resumeFile} download="Prerana_Shetty_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up mb-24" style={{ animationDelay: '0.6s' }}>
            {[
              { href: "https://github.com/shettyprerna2607", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/prerana-a-shetty/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:preranashetty85@gmail.com", icon: Mail, label: "Email" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:text-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up hidden lg:block" style={{ animationDelay: '1.2s' }}>
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Discover More</span>
            <div className="w-5 h-8 border-2 border-muted-foreground/20 rounded-full flex justify-center p-1 group-hover:border-primary transition-colors">
              <div className="w-1 h-1 bg-primary rounded-full animate-scroll" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
