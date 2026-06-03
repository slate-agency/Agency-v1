import { motion } from 'framer-motion';
import {
  Bookmark,
  Zap,
  LayoutDashboard,
  RefreshCw,
  Timer,
  ScanText,
  Calendar,
  Music,
  Share2,
  Heart,
  MessageCircle,
  Globe,
  ArrowRight,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';


// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--border)] bg-[var(--background)]/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl">
            <img 
                src="/images/SlateAutoSoft.png" 
                alt="Logo"/>
          </div>
          <span className="text-[18px] font-semibold tracking-tight">Slate Software</span>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-[12px] font-semibold uppercase tracking-wider text-[var(--foreground)]/70">
          <a href="#featured" className="hover:text-[var(--primary)] transition-colors">Featured</a>
          <a href="#apps" className="hover:text-[var(--primary)] transition-colors">Apps</a>
          <a href="#tools" className="hover:text-[var(--primary)] transition-colors">Tools</a>
          <a href="#contact" className="hover:text-[var(--primary)] transition-colors">Contact</a>
        </div>
        {/* 
        <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-full text-[12px] font-semibold hover:opacity-90 transition-opacity">
          Get Started
        </button>
        */}
      </div> 
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--primary)]/20 blur-[120px] rounded-full -z-10 opacity-50" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[var(--primary)] mb-4 block">
            
          </span>
          <h1 className="text-[36px] md:text-[56px] font-bold tracking-[-0.03em] leading-tight mb-6">
            We build premium <span className="text-[var(--primary)]">productivity software and smart tools</span> for individuals and teams 
          </h1>
          <p className="text-[13px] md:text-[16px] text-[var(--foreground)]/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Who demand more from their digital workspace - beautifully designed, built to last.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apps" className="bg-[var(--primary)] text-white px-8 py-3 rounded-full text-[12px] font-semibold flex items-center gap-2 hover:gap-3 transition-all inline-flex items-center justify-center">
              Explore Apps <ArrowRight size={16} />
            </a>
            <a href="#tools" className="px-8 py-3 rounded-full text-[12px] font-semibold border border-[var(--border)] hover:bg-[var(--accent)] transition-colors inline-flex items-center justify-center">
              View Tools
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <section id="featured" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[var(--card)] border border-[var(--border)] rounded-[16px] p-8 md:p-12 overflow-hidden relative">
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--primary)]/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[var(--primary)] mb-4 block">
              Featured Software
            </span>
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-6">
              SlatePM: Project Management <br />Reimagined.
            </h2>
            <p className="text-[13px] text-[var(--foreground)]/60 mb-8 leading-relaxed">
              Our flagship project management tool Turns chaotic workloads into clear, actionable priorities with a clean, distraction-free interface. Stop juggling tasks and start finishing what actually matters.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Smart scheduling',
                'Real-time collaboration with glass-morphism UI (Coming soon)',
                'Enterprise-grade security and encryption'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] text-[var(--foreground)]/80">
                  <div className="w-5 h-5 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">
                    <ChevronRight size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
           <a
  href="https://slatepm.app"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-full text-[12px] font-semibold hover:opacity-90 transition-opacity"
>
  Try SlatePM for Free
</a>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-[12px] overflow-hidden shadow-2xl border border-[var(--border)]">
              <img 
                src="/images/featured-app.jpg" 
                alt="SlatePM Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[var(--primary)]/30 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AppsSection = () => {
  const apps = [
    {
      name: 'Curio',
      desc: 'The ultimate bookmark manager for curators and researchers.',
      icon: <Bookmark className="text-[var(--brand-project)]" />,
      color: 'var(--brand-project)',
      url: 'https://slatesoftware.gumroad.com/l/curio',
    },
    {
      name: 'EmaSig',
      desc: 'Advanced email signature builder.',
      icon: <Zap className="text-[var(--brand-ai)]" />,
      color: 'var(--brand-ai)',
      url: 'https://emasig.replit.app/',
    },
    {
      name: 'SlatePM',
      desc: 'Smart Project Management.',
      icon: <LayoutDashboard className="text-[var(--primary)]" />,
      color: 'var(--primary)',
      url: 'https://slatepm.app',
    },
  ];

  return (
    <section id="apps" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[var(--primary)] mb-4 block">
          Our Ecosystem
        </span>
        <h2 className="text-[24px] font-semibold tracking-[-0.02em]">Core Applications</h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {apps.map((app, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-[16px] bg-[var(--card)] border border-[var(--border)] group transition-all hover:border-[var(--primary)]/50"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {app.icon}
            </div>
            <h3 className="text-[14px] font-semibold mb-3">{app.name}</h3>
            <p className="text-[13px] text-[var(--foreground)]/60 leading-relaxed mb-6">
              {app.desc}
            </p>
            <a href={app.url} target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-[var(--primary)] flex items-center gap-1 hover:gap-2 transition-all">
              Learn more <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tools = [
    { name: 'Conversion Tool', icon: <RefreshCw size={20} /> },
    { name: 'RecipeTimer', icon: <Timer size={20} /> },
    { name: 'OCR Tool', icon: <ScanText size={20} /> },
    { name: 'DaysUntil Tool', icon: <Calendar size={20} /> },
    { name: 'Music Ed Game', icon: <Music size={20} /> },
  ];

  return (
    <section id="tools" className="py-20 px-6 bg-[var(--muted)]/30">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[var(--primary)] mb-4 block">
          Free Utilities
        </span>
        <h2 className="text-[24px] font-semibold tracking-[-0.02em]">Quick Tools</h2>
        <p className="text-[13px] text-[var(--foreground)]/60 mt-4">Powerful, free tools for everyday tasks.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {tools.map((tool, i) => (
          <div 
            key={i} 
            className="p-6 rounded-[12px] bg-[var(--card)] border border-[var(--border)] flex flex-col items-center text-center gap-3 hover:border-[var(--primary)] transition-colors group"
          >
            <div className="text-[var(--primary)] group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <span className="text-[12px] font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xbderzaj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[var(--primary)] rounded-[24px] p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10">
          <h2 className="text-[28px] font-bold tracking-tight mb-4">Join the Inner Circle</h2>
          <p className="text-[14px] text-white/80 mb-8 max-w-md mx-auto">
            Get early access to new tools, product updates, and productivity tips delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-[13px] focus:outline-none focus:ring-2 ring-white/30 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-[var(--primary)] px-6 py-3 rounded-full text-[12px] font-bold hover:bg-opacity-90 transition-all"
              disabled={status === 'sending'}
            >
              Subscribe
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-sm text-green-200">✅ Thanks! You’re on the list.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-200">⚠️ Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      colorClass: "hover:text-[#1877f2] hover:border-[#1877f2]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      colorClass: "hover:text-[#e1306c] hover:border-[#e1306c]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      colorClass: "hover:text-[#0077b5] hover:border-[#0077b5]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Threads",
      href: "https://threads.net",
      colorClass: "hover:text-[var(--foreground)]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.859 3.13 3.513 5.463l-2.387.65c-1.044-3.82-3.564-5.76-7.952-5.783-2.894.02-5.131.977-6.65 2.843C4.05 6.989 3.35 9.44 3.326 12.01c.024 2.57.725 5.022 2.24 6.739 1.52 1.866 3.757 2.823 6.65 2.843 2.676-.02 4.479-.655 5.925-2.124 1.575-1.595 1.906-3.524 1.906-5.095v-.393l-.002-.006c-.02-1.424-.348-2.476-.979-3.126-.566-.582-1.33-.878-2.27-.888-.26 0-.512.015-.754.045-.232 1.5-.75 2.71-1.55 3.614-.865.978-2.01 1.558-3.414 1.721-1.076.125-2.094-.073-2.942-.57-.909-.53-1.446-1.35-1.507-2.307-.054-.845.25-1.659.855-2.293.655-.686 1.614-1.107 2.76-1.22.807-.08 1.606-.08 2.405 0 .148.015.295.035.44.06-.02-.55-.16-1.015-.42-1.393-.375-.543-.994-.82-1.84-.832h-.02c-.608 0-1.162.152-1.603.42-.463.282-.754.7-.888 1.25l-2.373-.475c.275-1.084.882-1.977 1.8-2.633.905-.648 2.026-.983 3.337-.995h.032c1.506.012 2.749.494 3.596 1.396.804.857 1.252 2.063 1.334 3.584.378-.04.773-.06 1.18-.06 1.463.018 2.638.5 3.49 1.41.884.94 1.356 2.315 1.403 4.087v.468c0 2.08-.428 4.475-2.501 6.497-1.899 1.848-4.195 2.755-7.37 2.775h-.003z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com",
      colorClass: "hover:text-[var(--foreground)]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zM17.083 20.25h1.833L7.084 4.126H5.117L17.083 20.25z" />
        </svg>
      ),
    },
  ];

  const contactLinks = [
    {
      name: "WhatsApp Business",
      href: "https://wa.me/4915225369744",
      label: "Chat on WhatsApp",
      iconBg: "bg-[#25d366]",
      textColor: "text-[#25d366]",
      cardBg: "bg-[rgba(37,211,102,0.10)]",
      borderColor: "border-[rgba(37,211,102,0.25)]",
      shadowColor: "hover:shadow-[0_8px_24px_rgba(37,211,102,0.10)]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.gg/6XTQ5CRdbV",
      label: "Join our Discord",
      iconBg: "bg-[#5865f2]",
      textColor: "text-[#5865f2]",
      cardBg: "bg-[rgba(88,101,242,0.10)]",
      borderColor: "border-[rgba(88,101,242,0.25)]",
      shadowColor: "hover:shadow-[0_8px_24px_rgba(88,101,242,0.10)]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
  ];

  const footerLinks = {
    Products: ["Curio", "SlateEmaSig", "GIST", "SlatePM"],
    Tools: ["Conversion Tool", "RecipeTimer", "OCR Tool", "DaysUntil", "Music Game"],
    Company: ["About Us", "Blog", "Careers", "Press Kit"],
  };

  return (
    <footer
      id="contact"
      className="pt-20 pb-10 px-5 bg-[var(--background)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[var(--primary)] text-white">
                <img 
                src="/images/SlateAutoSoft.png" 
                alt="Logo"/>
              </div>

              <div>
                <div className="font-bold text-sm text-[var(--foreground)]">
                  Slate Software
                </div>
                <div className="text-[11px] uppercase tracking-[0.08em] text-[var(--foreground)]/50">
                   
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm mb-6 text-[var(--foreground)]/70">
              Building premium productivity apps and tools for the modern workspace.
              Thoughtfully designed, built to last.
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[var(--foreground)]/50">
                Follow Us
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]/50 transition-all duration-150 hover:-translate-y-0.5 ${social.colorClass}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[var(--foreground)]/50">
              Contact Us
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 rounded-xl border-[1.5px] transition-all duration-150 hover:-translate-y-0.5 ${contact.cardBg} ${contact.borderColor} ${contact.shadowColor}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white ${contact.iconBg}`}
                  >
                    {contact.icon}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {contact.name}
                    </p>
                    <p className={`text-xs ${contact.textColor}`}>
                      {contact.label}
                    </p>
                  </div>

                  <span
                    className={`ml-auto text-lg transition-transform duration-150 group-hover:translate-x-1 ${contact.textColor}`}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[var(--foreground)]/50">
                {category}
              </p>

              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--foreground)]/70 transition-colors duration-150 hover:text-[var(--primary)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--foreground)]/50">
            &copy; {new Date().getFullYear()} Slate Automations + Software. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[var(--foreground)]/50 text-center sm:text-left">
              
            </span>
          </div>

          <a
            href="#"
            className="text-xs text-[var(--foreground)]/50 underline underline-offset-2 transition-colors duration-150 hover:text-[var(--foreground)]/70"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <AppsSection />
        <ToolsSection />
        <Newsletter />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
