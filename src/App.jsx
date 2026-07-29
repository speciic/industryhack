import React, { useState } from 'react';
import {
  Zap,
  Clock,
  Users,
  Trophy,
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Code2,
  Brain,
  Layers,
  Sparkles,
  Award,
  Coffee,
  Wifi,
  Music,
  ShieldCheck,
  Briefcase,
  Rocket,
  CheckCircle2,
  HelpCircle,
  Menu,
  X,
  ArrowUpRight,
  Terminal,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from 'lucide-react';

const FORM_LINK = "https://forms.gle/REPLACE_WITH_ACTUAL_FORM_LINK";

function ParticleBackground() {
  React.useEffect(() => {
    const container = document.getElementById('particles-container');
    if (!container) return;

    container.innerHTML = ''; // Hot-reload safety

    const particleCount = 65;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 5 + 2; // 2px to 7px
      const duration = Math.random() * 15 + 15; // 15s to 30s
      const delay = -(Math.random() * duration);
      const maxOpacity = Math.random() * 0.3 + 0.1; // 0.1 to 0.4
      const left = Math.random() * 100;
      const colorType = Math.floor(Math.random() * 3); // 0, 1, 2

      particle.style.setProperty('--width', `${size}px`);
      particle.style.setProperty('--duration', `${duration}s`);
      particle.style.setProperty('--delay', `${delay}s`);
      particle.style.setProperty('--max-opacity', maxOpacity);
      particle.style.left = `${left}%`;
      particle.setAttribute('data-color-type', colorType.toString());

      container.appendChild(particle);
    }
  }, []);

  return <div id="particles-container" />;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTimelineDay, setActiveTimelineDay] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-blueprint-grid min-h-screen text-[#9FB8D4] selection:bg-[#FFB800] selection:text-[#0E2A4A] relative">
      
      {/* Background Particles System */}
      <ParticleBackground />

      {/* 1. FLOATING FIXED GLASSMORPHISM NAV BAR */}
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1240px] nav-glassmorphism rounded-full transition-all duration-300">
        <div className="px-6 sm:px-8 flex items-center h-12 md:h-14">
          
          {/* Logo Mark (Left aligned) */}
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center gap-3 text-white font-display font-bold text-xs md:text-sm tracking-tight no-underline group">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-[#123A63]/80 border border-[#EAF2FA]/30 group-hover:border-[#FFB800] flex items-center justify-center rounded-none text-[#FFB800] font-mono font-bold transition-colors">
                SIH
              </div>
              <div className="flex flex-col">
                <span className="leading-none text-white font-extrabold text-xs md:text-sm tracking-wider">SPEC INDUSTRY HACK</span>
                <span className="text-[8px] md:text-[9px] font-mono text-[#E8483C] tracking-widest mt-0.5 uppercase">[DWG: SIH-2026]</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links (Centered in the middle of navbar) */}
          <nav className="hidden lg:flex items-center justify-center gap-6 font-display text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
            <a href="#about" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">About</a>
            <a href="#themes" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">Themes</a>
            <a href="#structure" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">Structure</a>
            <a href="#timeline" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">Timeline</a>
            <a href="#prizes" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">Prizes</a>
            <a href="#partners" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">Partners</a>
            <a href="#clubs" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">Clubs</a>
            <a href="#faq" className="text-[#9FB8D4] hover:text-white transition-colors no-underline">FAQ</a>
          </nav>

          {/* Desktop Illuminated CTA Container / Mobile toggle (Right aligned) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-illuminated py-1.5 px-4 text-[10px] tracking-wider rounded-full"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#9FB8D4] hover:text-white bg-[#123A63]/80 border border-[#EAF2FA]/30 rounded-full shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0E2A4A]/95 backdrop-blur-xl border border-[#EAF2FA]/20 mt-2 px-6 py-6 flex flex-col gap-4 font-display text-sm font-bold tracking-wider uppercase rounded-2xl shadow-xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">About</a>
            <a href="#themes" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">Themes</a>
            <a href="#structure" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">Structure</a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">Timeline</a>
            <a href="#prizes" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">Prizes</a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">Partners</a>
            <a href="#clubs" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">Clubs</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#FFB800] py-1 no-underline">FAQ</a>
            <div className="pt-2">
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-illuminated w-full text-center justify-center rounded-full"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 md:pt-16 pb-16 md:pb-24 border-b border-[#EAF2FA]/20 overflow-hidden">
        <div className="container relative z-10">
          

          {/* Presents Line */}
          <div className="text-xs sm:text-sm font-mono text-[#FFB800] uppercase tracking-[0.25em] mb-3 select-none text-center">
            SPEC-IIC PRESENTS
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-wider leading-[1.08] max-w-5xl mx-auto text-center mb-6">
            SPEC INDUSTRY HACK <span className="text-[#FFB800]">2026</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-display font-bold text-[#FFFFFF] max-w-3xl mx-auto text-center mb-4 tracking-wide">
            &ldquo;Industry Challenges, Innovative Solutions, Incredible Impact.&rdquo;
          </p>

          {/* Organizer Attribution */}
          <p className="text-base text-[#9FB8D4] max-w-3xl mx-auto text-center mb-10 leading-relaxed">
            Organized by <strong className="text-white font-semibold">St. Peter&apos;s Engineering College</strong>, in collaboration with <strong className="text-[#FFB800]">GeeksforGeeks Student Chapter</strong> &amp; <strong className="text-[#E8483C]">Spectrum Circle</strong>.
          </p>

          {/* Event Dates & Venue Card Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-xs font-mono">
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none text-[#FFFFFF]">
              <Calendar className="w-4 h-4 text-[#E8483C]" />
              <span>1st–2nd August 2026</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none text-[#FFFFFF]">
              <MapPin className="w-4 h-4 text-[#FFB800]" />
              <span>St. Peter&apos;s Engineering College Campus</span>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-illuminated btn-illuminated-lg"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a href="#themes" className="btn-ghost btn-ghost-lg">
              <span>Explore Themes</span>
              <ChevronRight className="w-5 h-5 text-[#9FB8D4]" />
            </a>
          </div>

          {/* Blueprint Key Stats Bar with Dimension Lines */}
          <div className="pt-8 border-t border-[#EAF2FA]/20">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none relative">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">24+</div>
                <div className="text-xs font-mono text-[#9FB8D4] mt-1">Hours Non-Stop</div>
                <div className="mt-3 pt-2 border-t border-[#EAF2FA]/20 text-[10px] font-mono text-[#6B8BAE]">
                  ◄── DURATION ──►
                </div>
              </div>

              <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none relative">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FFB800]">1000+</div>
                <div className="text-xs font-mono text-[#9FB8D4] mt-1">Participants</div>
                <div className="mt-3 pt-2 border-t border-[#EAF2FA]/20 text-[10px] font-mono text-[#6B8BAE]">
                  ◄── CAPACITY ──►
                </div>
              </div>

              <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none relative">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">200</div>
                <div className="text-xs font-mono text-[#9FB8D4] mt-1">Innovator Teams</div>
                <div className="mt-3 pt-2 border-t border-[#EAF2FA]/20 text-[10px] font-mono text-[#6B8BAE]">
                  ◄── SQUADS ──►
                </div>
              </div>

              <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none relative">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FFB800]">₹1,00,000</div>
                <div className="text-xs font-mono text-[#9FB8D4] mt-1">Prize Pool</div>
                <div className="mt-3 pt-2 border-t border-[#EAF2FA]/20 text-[10px] font-mono text-[#6B8BAE]">
                  ◄── REWARDS ──►
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none relative">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">15</div>
                <div className="text-xs font-mono text-[#9FB8D4] mt-1">Industry Partners</div>
                <div className="mt-3 pt-2 border-t border-[#EAF2FA]/20 text-[10px] font-mono text-[#6B8BAE]">
                  ◄── SPONSORS ──►
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT / INTRODUCTION */}
      <section id="about" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="section-tag">
                <Brain className="w-3.5 h-3.5" />
                <span>About The Event</span>
              </div>
              <h2 className="section-title">
                Bridging Academic Innovation With Real-World Industry Needs
              </h2>
              <p className="text-base sm:text-lg text-[#9FB8D4] mb-6 leading-relaxed">
                <strong className="text-white">SPEC INDUSTRY HACK 2026</strong> is a premier 24-hour national hackathon designed to unite over <strong>1,000 young engineering minds</strong> from colleges across India. Our mission is to move beyond conventional theoretical exercises and tackle genuine, industry-sourced problems.
              </p>
              <p className="text-base text-[#9FB8D4] mb-8 leading-relaxed">
                Participants collaborate in teams of 2 to 4 to engineer functional code, build autonomous AI agents, and prototype full-stack systems under strict time constraints — backed by continuous mentorship from engineering leaders and industry partners.
              </p>

              {/* Fast Fact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
                  <div className="text-[11px] font-mono text-[#E8483C] uppercase tracking-wider mb-1">[SPEC 01] Team Size</div>
                  <div className="text-base font-bold font-display text-white">2 to 4 Members</div>
                </div>
                <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
                  <div className="text-[11px] font-mono text-[#FFB800] uppercase tracking-wider mb-1">[SPEC 02] Registration Fee</div>
                  <div className="text-base font-bold font-display text-white">₹300 / Participant</div>
                </div>
                <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
                  <div className="text-[11px] font-mono text-[#9FB8D4] uppercase tracking-wider mb-1">[SPEC 03] Scope</div>
                  <div className="text-base font-bold font-display text-white">Pan-India Colleges</div>
                </div>
              </div>
            </div>

            {/* Technical Blueprint Title-Block Info Box */}
            <div className="lg:col-span-5">
              <div className="blueprint-title-block space-y-3">
                <div className="border-b border-[#EAF2FA]/30 pb-3 mb-3 flex items-center justify-between">
                  <span className="font-bold text-white tracking-wider uppercase">TITLE BLOCK // DWG-2026</span>
                  <span className="text-[10px] text-[#E8483C] font-bold px-2 py-0.5 border border-[#E8483C]">REV 1.0</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-[#EAF2FA]/15 py-1">
                    <span className="text-[#9FB8D4]">ORGANIZER</span>
                    <span className="text-white font-semibold">ST. PETER&apos;S ENGG COLLEGE</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EAF2FA]/15 py-1">
                    <span className="text-[#9FB8D4]">ACADEMIC CHAPTER</span>
                    <span className="text-[#FFB800] font-semibold">GEEKSFORGEEK STUDENT CHAPTER</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EAF2FA]/15 py-1">
                    <span className="text-[#9FB8D4]">TECHNICAL PARTNER</span>
                    <span className="text-[#E8483C] font-semibold">SPECTRUM CIRCLE</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EAF2FA]/15 py-1">
                    <span className="text-[#9FB8D4]">PROBLEM SOURCE</span>
                    <span className="text-white font-semibold">DIRECT INDUSTRY PARTNERS</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EAF2FA]/15 py-1">
                    <span className="text-[#9FB8D4]">EVALUATION</span>
                    <span className="text-white font-semibold">3-STAGE LEVEL ELIMINATION</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#9FB8D4]">CASH POOL</span>
                    <span className="text-[#FFB800] font-bold text-sm">₹1,00,000 INR</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EAF2FA]/30 text-[10px] text-[#9FB8D4] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FFB800] shrink-0" />
                  <span>Certificates of Participation &amp; Excellence awarded to all registered teams.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THEMES / DOMAINS */}
      <section id="themes" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Themes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            <div className="tech-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-6 font-mono font-bold text-base">
                  [DOM-01]
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-[#FFB800]" />
                  <h3 className="text-lg font-bold font-display text-white">Artificial Intelligence</h3>
                </div>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  Build predictive models, natural language understanding pipelines, computer vision systems, and data-driven decision frameworks that process complex industrial datasets with precision.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">Machine Learning</span>
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">NLP / Vision</span>
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">Predictive Ops</span>
              </div>
            </div>

            <div className="tech-card flex flex-col justify-between border-[#E8483C]/50">
              <div>
                <div className="w-12 h-12 bg-[#091C33] border border-[#E8483C]/50 rounded-none flex items-center justify-center text-[#E8483C] mb-6 font-mono font-bold text-base">
                  [DOM-02]
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#E8483C]" />
                  <h3 className="text-lg font-bold font-display text-white">Agentic AI</h3>
                </div>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  Design autonomous multi-agent networks, reasoning systems, tool-using AI orchestrators, and goal-driven workflows capable of executing end-to-end industry task automation.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">Autonomous Agents</span>
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">Multi-Agent Systems</span>
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">LLM Tool Use</span>
              </div>
            </div>

            <div className="tech-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-6 font-mono font-bold text-base">
                  [DOM-03]
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-[#FFB800]" />
                  <h3 className="text-lg font-bold font-display text-white">Full Stack Development</h3>
                </div>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  Engineer resilient web and cloud architectures, microservices APIs, intuitive real-time dashboards, and performant user interfaces built for high scale and reliability.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">Web &amp; Cloud API</span>
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">Microservices</span>
                <span className="px-2 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15">Real-Time UI</span>
              </div>
            </div>

          </div>

          <div className="max-w-2xl mx-auto text-center p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none text-xs font-mono text-[#9FB8D4]">
            <span className="text-[#E8483C] font-bold">[NOTE]</span> Problem statements are provided directly by our industry partners to ensure real-world technical relevance.
          </div>

        </div>
      </section>

      {/* 5. OBJECTIVES */}
      <section className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Event Objectives</h2>
            <p className="section-subtitle mx-auto">
              Constructed to cultivate technical rigor, real-world execution, and collaborative engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Solve Real Industry Challenges</h3>
              <p className="text-sm text-[#9FB8D4]">
                Direct students to work on authentic friction points faced by active technology companies rather than abstract toy problems.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Promote Innovation &amp; Teamwork</h3>
              <p className="text-sm text-[#9FB8D4]">
                Foster cross-functional collaboration under tight 24-hour hackathon deadlines to deliver working software artifacts.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Bridge Academia &amp; Industry</h3>
              <p className="text-sm text-[#9FB8D4]">
                Connect aspiring developers directly with corporate mentors, industry sponsors, and professional technical recruiters.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Practical Hands-On Exposure</h3>
              <p className="text-sm text-[#9FB8D4]">
                Provide immersive experience with industry-standard deployment tooling, AI APIs, version control, and system architecture.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Foster Entrepreneurship &amp; Excellence</h3>
              <p className="text-sm text-[#9FB8D4]">
                Empower high-potential project ideas with post-hackathon startup incubation support, API credits, and seed mentorship.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. HACKATHON STRUCTURE */}
      <section id="structure" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Hackathon Progression Structure</h2>
            <p className="section-subtitle mx-auto">
              A rigorous 3-stage evaluation framework designed to test raw algorithmic execution, architectural ideation, and full-stack building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
            
            <div className="bg-[#123A63] border border-[#EAF2FA]/30 rounded-none p-6 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#E8483C] px-3 py-1 bg-[#091C33] border border-[#E8483C]/40">
                    STAGE 01
                  </span>
                  <span className="font-mono text-xs text-[#9FB8D4]">DAY 1 — MORNING</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-3">Level 1 — Code Sprint</h3>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  Participants solve intensive coding-based case studies and algorithmic benchmarks satisfying demanding test cases within a timed sprint environment.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex items-center gap-2 text-xs font-mono text-[#9FB8D4]">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                <span>Algorithmic correctness &amp; speed</span>
              </div>
            </div>

            <div className="bg-[#123A63] border border-[#EAF2FA]/30 rounded-none p-6 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#E8483C] px-3 py-1 bg-[#091C33] border border-[#E8483C]/40">
                    STAGE 02
                  </span>
                  <span className="font-mono text-xs text-[#9FB8D4]">DAY 1 — AFTERNOON</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-3">Level 2 — Innovate</h3>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  Teams analyze partner problem statements and propose architectural solutions, system flow diagrams, and technical feasibility blueprints.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex items-center gap-2 text-xs font-mono text-[#9FB8D4]">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                <span>System design &amp; industry alignment</span>
              </div>
            </div>

            <div className="bg-[#123A63] border-2 border-[#FFB800] rounded-none p-6 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#FFB800] px-3 py-1 bg-[#091C33] border border-[#FFB800]">
                    FINAL STAGE 03
                  </span>
                  <span className="font-mono text-xs text-[#9FB8D4]">DAY 1 NIGHT – DAY 2</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-3">Level 3 — BuildX</h3>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  Shortlisted teams execute end-to-end building overnight — engineering functional software prototypes, live models, and working code bases for final jury presentation.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex items-center gap-2 text-xs font-mono text-[#FFB800]">
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>Working prototype &amp; live jury demo</span>
              </div>
            </div>

          </div>

          <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none text-center text-xs font-mono text-[#9FB8D4]">
            <span className="text-[#E8483C] font-bold">[SELECTION CRITERIA]</span> Cumulative scores from <strong className="text-white">Level 1 (Code Sprint)</strong> and <strong className="text-white">Level 2 (Innovate)</strong> determine the final shortlist of teams advancing to <strong className="text-[#FFB800]">Level 3 (BuildX)</strong>.
          </div>

        </div>
      </section>

      {/* 7. EVENT TIMELINE */}
      <section id="timeline" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Event Timeline</h2>
            <p className="section-subtitle mx-auto">
              Detailed hour-by-hour operational breakdown across August 1st and August 2nd, 2026.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 font-mono">
            <button
              onClick={() => setActiveTimelineDay(1)}
              className={`px-6 py-3 rounded-none border text-xs font-bold tracking-widest transition-colors cursor-pointer ${
                activeTimelineDay === 1
                  ? 'bg-[#123A63] text-[#FFB800] border-[#FFB800]'
                  : 'bg-[#091C33] text-[#9FB8D4] border-[#EAF2FA]/30 hover:text-white'
              }`}
            >
              DAY 1 — 1st AUGUST 2026
            </button>
            <button
              onClick={() => setActiveTimelineDay(2)}
              className={`px-6 py-3 rounded-none border text-xs font-bold tracking-widest transition-colors cursor-pointer ${
                activeTimelineDay === 2
                  ? 'bg-[#123A63] text-[#FFB800] border-[#FFB800]'
                  : 'bg-[#091C33] text-[#9FB8D4] border-[#EAF2FA]/30 hover:text-white'
              }`}
            >
              DAY 2 — 2nd AUGUST 2026
            </button>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            
            {activeTimelineDay === 1 && (
              <>
                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#E8483C] font-bold w-44 shrink-0">09:00 AM – 10:00 AM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Participant Registration &amp; Kit Distribution</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Check-in, identity verification, and allocation of team workspaces and hackathon kits.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4] rounded-none shrink-0 self-start sm:self-auto">CHECK-IN</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#E8483C] font-bold w-44 shrink-0">10:00 AM – 11:00 AM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Inauguration Ceremony &amp; Guest Keynote</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Opening remarks by St. Peter&apos;s Engineering leadership and industry partner addresses.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4] rounded-none shrink-0 self-start sm:self-auto">CEREMONY</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#FFB800]/50 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#FFB800] font-bold w-44 shrink-0">11:00 AM – 01:30 PM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Level 1 — Code Sprint</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Timed coding competition testing algorithm efficiency and test-case resolution.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#FFB800] text-[#FFB800] rounded-none shrink-0 self-start sm:self-auto font-bold">LEVEL 1 SPRINT</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#9FB8D4] font-bold w-44 shrink-0">01:30 PM – 02:30 PM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Lunch Break &amp; Networking</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Complimentary buffet lunch provided for all registered participants.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4] rounded-none shrink-0 self-start sm:self-auto">MEAL BREAK</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#FFB800]/50 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#FFB800] font-bold w-44 shrink-0">02:30 PM – 06:30 PM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Level 2 — Innovate</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Teams formulate architectural frameworks for industry problem statements.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#FFB800] text-[#FFB800] rounded-none shrink-0 self-start sm:self-auto font-bold">LEVEL 2 DESIGN</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#E8483C] font-bold w-44 shrink-0">06:30 PM – 07:30 PM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Presentation of Innovative Solutions</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Pitching Level 2 designs for shortlist evaluation into Level 3.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4] rounded-none shrink-0 self-start sm:self-auto">EVALUATION</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#9FB8D4] font-bold w-44 shrink-0">07:30 PM – 08:30 PM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Dinner &amp; DJ Engagement Session</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Dinner break and high-energy music session to recharge participants for the night sprint.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#E8483C] rounded-none shrink-0 self-start sm:self-auto">MEAL &amp; MUSIC</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border-2 border-[#E8483C] rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#E8483C] font-bold w-44 shrink-0">08:30 PM Onwards</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Level 3 — BuildX Begins (Overnight Prototype Build)</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Shortlisted teams start building working models and software prototypes.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#E8483C] text-white font-bold rounded-none shrink-0 self-start sm:self-auto">LEVEL 3 BUILD</span>
                </div>
              </>
            )}

            {activeTimelineDay === 2 && (
              <>
                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#FFB800] font-bold w-44 shrink-0">01:00 AM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Late-Night Coffee Break &amp; Music</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Fresh brewed coffee served continuously at hackathon workstations.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#FFB800] rounded-none shrink-0 self-start sm:self-auto">MIDNIGHT RECHARGE</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#FFB800] font-bold w-44 shrink-0">05:30 AM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Wake-Up Music &amp; Morning Coffee Break</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Energizing track list and morning coffee station open.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#FFB800] rounded-none shrink-0 self-start sm:self-auto">MORNING RECHARGE</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#9FB8D4] font-bold w-44 shrink-0">07:30 AM – 08:00 AM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Fresh-Up Time &amp; Breakfast</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Fresh-up facilities available followed by hot breakfast for all teams.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4] rounded-none shrink-0 self-start sm:self-auto">BREAKFAST</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border border-[#FFB800]/50 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#FFB800] font-bold w-44 shrink-0">08:00 AM – 10:00 AM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Final Project Submission &amp; Jury Demonstrations</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Repositories frozen; teams present live working prototypes to industry judges.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#091C33] border border-[#FFB800] text-[#FFB800] rounded-none shrink-0 self-start sm:self-auto font-bold">JURY DEMO</span>
                </div>

                <div className="p-4 sm:p-5 bg-[#123A63] border-2 border-[#E8483C] rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#E8483C] font-bold w-44 shrink-0">10:00 AM – 11:00 AM</div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold font-display text-white">Valedictory Ceremony &amp; Prize Distribution</h4>
                    <p className="text-xs text-[#9FB8D4] mt-0.5">Announcement of ₹1,00,000 cash winners, internship offers, and closing address.</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-[#E8483C] text-white font-bold rounded-none shrink-0 self-start sm:self-auto">VALEDICTORY</span>
                </div>
              </>
            )}

          </div>

        </div>
      </section>

      {/* 8. FACILITIES PROVIDED */}
      <section className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Facilities Provided</h2>
            <p className="section-subtitle mx-auto">
              We ensure all infrastructure and dietary needs are taken care of so teams can remain focused on building.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Registration Kit</h3>
              <p className="text-xs text-[#9FB8D4]">Includes official hackathon badges, developer merch, and documentation materials for all participants.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Day 1 Lunch &amp; Dinner</h3>
              <p className="text-xs text-[#9FB8D4]">Full buffet lunch and dinner provided on August 1st at campus dining halls.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Day 2 Breakfast</h3>
              <p className="text-xs text-[#9FB8D4]">Hot breakfast served on the morning of August 2nd prior to final project presentations.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Late-Night Coffee</h3>
              <p className="text-xs text-[#9FB8D4]">Unlimited coffee available continuously during late-night and early-morning coding hours.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">High-Speed Internet</h3>
              <p className="text-xs text-[#9FB8D4]">Dedicated gigabit Wi-Fi nodes deployed across all hackathon building floors.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Power &amp; Workspaces</h3>
              <p className="text-xs text-[#9FB8D4]">Ergonomic seating arrangements with dedicated power multi-sockets for every team table.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">DJ Engagement Sessions</h3>
              <p className="text-xs text-[#9FB8D4]">High-energy music &amp; relaxation sessions curated to keep participants active and energized through the night.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 9. PRIZES & OPPORTUNITIES */}
      <section id="prizes" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Prizes &amp; Opportunities</h2>
            <p className="section-subtitle mx-auto">
              Substantial financial rewards, API credits, and direct career acceleration pathways for top teams.
            </p>
          </div>

          {/* Primary Reward: 100K Cash Prize (Industrial Blueprint Highlighted Card) */}
          <div className="bg-[#123A63] border-2 border-[#FFB800] p-8 md:p-12 mb-12 relative overflow-hidden">

            <div className="text-left max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#091C33] border border-[#FFB800] text-xs font-mono text-[#FFB800] uppercase tracking-widest mb-6">
                <Award className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>OFFICIAL CASH PRIZE</span>
              </span>
              
              <h3 className="text-xs font-mono text-[#9FB8D4] mb-2 tracking-widest uppercase">
                [SPEC-REWARD-01] CASH DISTRIBUTION
              </h3>
              
              {/* Huge cash display with blueprint dimension styling */}
              <div className="text-5xl sm:text-7xl font-extrabold font-display text-white mb-4 tracking-tight">
                ₹1,00,000
              </div>

              <div className="dimension-line mb-6 max-w-lg">
                <span className="text-[#FFB800] font-bold">100% DIRECT CASH POOL</span>
              </div>

              <p className="text-base sm:text-lg text-[#EAF2FA] leading-relaxed mb-4">
                The <strong className="text-white">₹1,00,000 cash prize</strong> is awarded directly to the top-performing engineering teams demonstrating the most innovative solutions, robust architecture, and clean code execution across the track domains.
              </p>
              
              <div className="flex flex-wrap gap-6 text-xs font-mono text-[#9FB8D4] mt-6 pt-4 border-t border-[#EAF2FA]/15">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span>1st Place: Highest Allocation</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span>Domain Track Winners: Equal Distribution</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Internship Opportunities</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Direct fast-track interview and internship placement offers extended by participating industry partners to standout coders and winning teams.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">$4,000 USD AI Credits</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Exclusive access to high-performance AI API credits and LLM inference tokens to empower post-hackathon software building.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#E8483C] mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Startup Support</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Incubation mentorship, cloud infrastructure sponsorship, and seed support for standout team projects demonstrating commercial viability.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center text-[#FFB800] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Industry Mentorship</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                1-on-1 networking windows with veteran software architects, technical directors, and startup founders throughout the event.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 10. INDUSTRY PARTNERS */}
      <section id="partners" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-tag mx-auto">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate Collaboration</span>
            </div>
            <h2 className="section-title">Industry Partners</h2>
            <p className="section-subtitle mx-auto">
              Collaborating software enterprises providing real-world problem statements, mentorship, and career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            
            <div className="h-28 bg-[#123A63] border border-[#FFB800] rounded-none p-4 flex flex-col items-center justify-center text-center group hover:bg-[#164373] transition-colors">
              <div className="font-display font-extrabold text-white text-sm tracking-widest group-hover:text-[#FFB800] transition-colors">
                SPECTRUM CIRCLE
              </div>
              <span className="text-[9px] font-mono text-[#FFB800] mt-1.5 px-2 py-0.5 bg-[#091C33] border border-[#FFB800]">
                CONFIRMED PARTNER
              </span>
            </div>

            <div className="h-28 bg-[#123A63] border border-[#E8483C] rounded-none p-4 flex flex-col items-center justify-center text-center group hover:bg-[#164373] transition-colors">
              <div className="font-display font-extrabold text-white text-sm tracking-widest group-hover:text-[#E8483C] transition-colors">
                TalentFarm.ai
              </div>
              <span className="text-[9px] font-mono text-[#E8483C] mt-1.5 px-2 py-0.5 bg-[#091C33] border border-[#E8483C]">
                CONFIRMED PARTNER
              </span>
            </div>

            {Array.from({ length: 13 }).map((_, idx) => (
              <div key={idx} className="h-28 bg-[#123A63] border border-[#EAF2FA]/20 rounded-none p-4 flex flex-col items-center justify-center text-center">
                <Building2 className="w-5 h-5 text-[#6B8BAE] mb-2" />
                <span className="text-[11px] font-mono text-[#9FB8D4]">Slot #{idx + 3}</span>
                <span className="text-[9px] font-mono text-[#6B8BAE] mt-1">Logo Coming Soon</span>
              </div>
            ))}

          </div>

          <div className="text-center text-xs font-mono text-[#9FB8D4]">
            <span className="text-[#FFB800] font-bold">+ 4 additional prominent software companies</span> to be announced prior to event launch.
          </div>

        </div>
      </section>

      {/* 11. SUPPORTING CLUBS */}
      <section id="clubs" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-tag mx-auto">
              <Users className="w-3.5 h-3.5" />
              <span>Campus Chapters</span>
            </div>
            <h2 className="section-title">Supporting Clubs &amp; Chapters</h2>
            <p className="section-subtitle mx-auto">
              Student organizations spearheading community outreach, technical workshops, and event execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-[#123A63] border-2 border-[#EAF2FA]/30 rounded-none p-8 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#FFB800] font-mono text-xs font-bold rounded-none mb-4">
                  STUDENT CHAPTER
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">GeeksforGeeks Student Chapter</h3>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  St. Peter&apos;s Engineering College GeeksforGeeks Student Chapter drives algorithmic coding excellence, technical bootcamps, and competitive programming readiness across the student community.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex items-center justify-between text-xs font-mono text-[#9FB8D4]">
                <span>Role: Co-Organizer &amp; Coding Track Facilitator</span>
                <ExternalLink className="w-4 h-4 text-[#FFB800]" />
              </div>
            </div>

            <div className="bg-[#123A63] border-2 border-[#EAF2FA]/30 rounded-none p-8 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-[#091C33] border border-[#EAF2FA]/30 text-[#E8483C] font-mono text-xs font-bold rounded-none mb-4">
                  TECHNICAL COMMUNITY
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">Spectrum Circle</h3>
                <p className="text-sm text-[#9FB8D4] leading-relaxed mb-6">
                  An elite peer technical collective focusing on practical software engineering, cloud infrastructure, AI development, and industry mentor connect programs.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAF2FA]/20 flex items-center justify-between text-xs font-mono text-[#9FB8D4]">
                <span>Role: Co-Organizer &amp; Industry Liaison</span>
                <ExternalLink className="w-4 h-4 text-[#E8483C]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 12. EXPECTED OUTCOMES */}
      <section className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Expected Outcomes</h2>
            <p className="section-subtitle mx-auto">
              Tangible technical and career results generated through 24 hours of structured engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="text-3xl font-extrabold font-mono text-[#FFB800] mb-3">01</div>
              <h3 className="text-base font-bold font-display text-white mb-2">Practical Solutions</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Production-ready code repositories and architectural models directly addressing industry problem statements.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="text-3xl font-extrabold font-mono text-[#E8483C] mb-3">02</div>
              <h3 className="text-base font-bold font-display text-white mb-2">Enhanced Skill Sets</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Accelerated growth in real-time debugging, full-stack integration, and autonomous agent orchestration.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="text-3xl font-extrabold font-mono text-[#FFB800] mb-3">03</div>
              <h3 className="text-base font-bold font-display text-white mb-2">Industry Alignment</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Direct exposure to production expectations, architectural standards, and professional engineering workflows.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
              <div className="text-3xl font-extrabold font-mono text-[#E8483C] mb-3">04</div>
              <h3 className="text-base font-bold font-display text-white mb-2">Long-Term Connections</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Enduring mentorship channels between engineering students, technical founders, and corporate recruiters.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 13. FAQ / QUICK INFO STRIP */}
      <section id="faq" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Key information regarding registration, team rules, logistics, and hardware requirements.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            
            {[
              {
                q: "What is the team size requirement?",
                a: "Teams must consist of 2 to 4 members. Individual registrations are not allowed, but team formation channels are available on our official community group."
              },
              {
                q: "What is the registration fee and how is it paid?",
                a: "The registration fee is ₹300 per participant. Payment instructions are provided inside the official Google Form registration link."
              },
              {
                q: "Who is eligible to participate?",
                a: "Currently enrolled undergraduate and postgraduate students from any recognized engineering or technology college in India are eligible."
              },
              {
                q: "What should participants bring to the venue?",
                a: "Participants must bring their personal laptops, chargers, hardware accessories, college ID cards, and any required personal toiletries for overnight stay."
              },
              {
                q: "Will food and accommodation be provided?",
                a: "Yes! Full meals (Lunch & Dinner on Day 1, Breakfast on Day 2), continuous coffee service, dedicated seating, and power setups are fully provided."
              },
              {
                q: "When will the problem statements be released?",
                a: "Problem statements authored by our industry partners will be unveiled during the Inauguration Ceremony on Day 1 (August 1, 2026)."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between font-display font-bold text-white hover:text-[#FFB800] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#9FB8D4] transition-transform ${openFaq === index ? 'rotate-180 text-[#FFB800]' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-[#9FB8D4] leading-relaxed border-t border-[#EAF2FA]/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 14. FOOTER / CONTACT & SOCIAL */}
      <footer id="contact" className="py-16 bg-[#091C33] border-t border-[#EAF2FA]/30">
        <div className="container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#EAF2FA]/20 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
                Ready to solve real industry challenges?
              </h2>
              <p className="text-sm text-[#9FB8D4] max-w-xl mb-6">
                Prepared by <strong className="text-white">St. Peter&apos;s Engineering College</strong>, in collaboration with <strong className="text-[#FFB800]">GeeksforGeeks Student Chapter</strong> &amp; <strong className="text-[#E8483C]">Spectrum Circle</strong>.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9FB8D4]">
                <span>📅 1st–2nd August 2026</span>
                <span>📍 St. Peter&apos;s Engineering College</span>
                <span>💰 ₹1,00,000 Prize Pool</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-illuminated btn-illuminated-lg"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="text-xs font-mono text-[#9FB8D4]">
              &copy; 2026 SPEC INDUSTRY HACK. All Rights Reserved. St. Peter&apos;s Engineering College.
            </div>

            <div className="flex items-center gap-4 text-[#9FB8D4]">
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center hover:text-[#FFB800] hover:border-[#FFB800] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center hover:text-[#FFB800] hover:border-[#FFB800] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter / X" className="w-9 h-9 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center hover:text-[#FFB800] hover:border-[#FFB800] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none flex items-center justify-center hover:text-[#FFB800] hover:border-[#FFB800] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}
