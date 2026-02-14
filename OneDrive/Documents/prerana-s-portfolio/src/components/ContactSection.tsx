import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send, Phone, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'preranashetty85@gmail.com',
    href: 'mailto:preranashetty85@gmail.com',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9535850291',
    href: 'tel:+919535850291',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Indrali, Karnataka, India',
    href: null,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/shettyprerna2607',
    username: '@shettyprerna2607',
    color: 'hover:text-primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prerana-a-shetty/',
    username: '/in/prerana-a-shetty',
    color: 'hover:text-blue-500',
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "1b4ea71c-187e-43a6-bd6c-b2c6b444dafc",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Message dispatched!',
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Transmission failed',
        description: 'Something went wrong. Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/5">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-cyan-500 mx-auto rounded-full mt-4 mb-10 shadow-sm" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I’m currently seeking new opportunities.
            Feel free to reach out if you’d like to discuss a role, collaboration, or project.

          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Side */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-black flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-primary" />
                Let's Talk
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I’m always open to discussing new projects, roles, or opportunities where I can contribute and grow.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="group p-4 rounded-2xl glass-card border-border/50 hover:border-primary/30 transition-all duration-500 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-6">
                Connect Globally
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border/50 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group"
                  >
                    <social.icon className={`h-6 w-6 text-muted-foreground ${social.color} transition-colors group-hover:scale-110`} />
                    <span className="text-sm font-bold tracking-tight">{social.username}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-[2.5rem] glass-card border-2 border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-500 placeholder:text-muted-foreground/50 font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-500 placeholder:text-muted-foreground/50 font-medium"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/30 border border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-500 resize-none placeholder:text-muted-foreground/50 font-medium"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="xl"
                  className="w-full rounded-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 h-16"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3 text-lg font-black uppercase tracking-widest">
                      <Send className="h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
