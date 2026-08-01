import React, { useState, useEffect } from 'react';
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

import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';
import logo7 from '../assets/7.png';
import logo8 from '../assets/8.png';
import logo9 from '../assets/9.png';
import logo10 from '../assets/10.png';
import logo11 from '../assets/11.png';
import logo12 from '../assets/12.png';
import logo13 from '../assets/13.png';
import logo14 from '../assets/14.png';
import logo15 from '../assets/15.png';
import logo16 from '../assets/16.png';
import logo17 from '../assets/17.jpeg';
import specLogo from '../assets/spec.jpeg';

const clubLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17];

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfy5-SALibn0Xa3l5RTMQTzYIud0cwCjErzYoWAA9aUbto6eQ/viewform?usp=publish-editor";

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

const TIMELINE_DATA = {
  1: [
    {
      time: "09:00 AM – 10:00 AM",
      title: "Registration",
      desc: "Participant registration and kit distribution.",
      badge: "REGISTRATION",
      IconComponent: Users,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "10:00 AM – 11:00 AM",
      title: "Inauguration & Expert Talk",
      desc: "Opening ceremony and expert talks.",
      badge: "CEREMONY",
      IconComponent: Sparkles,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "11:00 AM – 01:00 PM",
      title: "Level 1 — Coding Sprint",
      desc: "Timed coding competition testing algorithm efficiency.",
      badge: "CODE SPRINT",
      IconComponent: Code2,
      highlightType: "gold",
      badgeStyle: "bg-[#091C33] border border-[#FFB800] text-[#FFB800] font-bold"
    },
    {
      time: "01:00 PM",
      title: "Level 1 Submission",
      desc: "Submission deadline for Level 1.",
      badge: "SUBMISSION",
      IconComponent: Terminal,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "01:00 PM – 02:00 PM",
      title: "Lunch Break",
      desc: "Lunch break for participants.",
      badge: "MEAL BREAK",
      IconComponent: Coffee,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "02:00 PM – 05:30 PM",
      title: "Level 2 — Innovate",
      desc: "Teams formulate architectural frameworks and innovate.",
      badge: "INNOVATE",
      IconComponent: Brain,
      highlightType: "gold",
      badgeStyle: "bg-[#091C33] border border-[#FFB800] text-[#FFB800] font-bold"
    },
    {
      time: "02:00 PM – 02:30 PM",
      title: "Expert Talk",
      desc: "Industry expert talk session.",
      badge: "EXPERT TALK",
      IconComponent: Users,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "05:30 PM",
      title: "Level 2 Submission",
      desc: "Submission deadline for Level 2.",
      badge: "SUBMISSION",
      IconComponent: Terminal,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "05:30 PM – 06:00 PM",
      title: "Break",
      desc: "Short break before the next level.",
      badge: "BREAK",
      IconComponent: Coffee,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "06:00 PM – 10:00 PM",
      title: "Level 3 — BuildX",
      desc: "Teams start building working models and software prototypes.",
      badge: "BUILD X",
      IconComponent: Rocket,
      highlightType: "gold",
      badgeStyle: "bg-[#091C33] border border-[#FFB800] text-[#FFB800] font-bold"
    },
    {
      time: "06:00 PM – 06:30 PM",
      title: "Expert Talk",
      desc: "Industry expert talk session.",
      badge: "EXPERT TALK",
      IconComponent: Users,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "09:00 PM – 10:00 PM",
      title: "Running Dinner",
      desc: "Dinner provided at workstations.",
      badge: "DINNER",
      IconComponent: Coffee,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "10:00 PM",
      title: "Level 3 Submission",
      desc: "Submission deadline for Level 3.",
      badge: "SUBMISSION",
      IconComponent: Terminal,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "10:30 PM – 11:30 PM",
      title: "LIVE MUSIC",
      desc: "High-energy live music session.",
      badge: "MUSIC",
      IconComponent: Music,
      highlightType: "gold",
      badgeStyle: "bg-[#091C33] border border-[#FFB800] text-[#FFB800] font-bold"
    }
  ],
  2: [
    {
      time: "11:00 PM – 05:00 AM",
      title: "Level 4 — Overnight Build",
      desc: "Overnight prototype build.",
      badge: "OVERNIGHT BUILD",
      IconComponent: Rocket,
      highlightType: "gold",
      badgeStyle: "bg-[#091C33] border border-[#FFB800] text-[#FFB800] font-bold"
    },
    {
      time: "12:00 AM",
      title: "Expert Talks",
      desc: "Midnight expert talk session.",
      badge: "EXPERT TALK",
      IconComponent: Users,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "05:00 AM",
      title: "Level 4 Submission",
      desc: "Submission deadline for Level 4.",
      badge: "SUBMISSION",
      IconComponent: Terminal,
      highlightType: "standard",
      badgeStyle: "bg-[#091C33] border border-[#EAF2FA]/30 text-[#9FB8D4]"
    },
    {
      time: "06:00 AM – 09:00 AM",
      title: "Final Presentation — Running Breakfast",
      desc: "Teams present live working prototypes to industry judges with breakfast.",
      badge: "PRESENTATION",
      IconComponent: Layers,
      highlightType: "gold",
      badgeStyle: "bg-[#091C33] border border-[#FFB800] text-[#FFB800] font-bold"
    },
    {
      time: "09:00 AM – 10:00 AM",
      title: "Evaluation",
      desc: "Final evaluation by the jury.",
      badge: "EVALUATION",
      IconComponent: Brain,
      highlightType: "gold",
      badgeStyle: "bg-[#091C33] border border-[#FFB800] text-[#FFB800] font-bold"
    },
    {
      time: "10:00 AM",
      title: "Valedictory & Prize Distribution",
      desc: "Announcement of winners and prize distribution.",
      badge: "VALEDICTORY",
      IconComponent: Trophy,
      highlightType: "green",
      badgeStyle: "bg-[#091C33] border border-[#22C55E] text-[#22C55E] font-bold"
    }
  ]
};

const parseEventTime = (timeStr, day) => {
  const [startPart] = timeStr.split('–').map(s => s.trim());
  const match = startPart.match(/(\d+):(\d+)\s+(AM|PM)/i);
  if (!match) return new Date(2026, 7, 22).getTime();
  let hours = parseInt(match[1], 10);
  const mins = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && hours < 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;
  
  const dateDay = (day === 2 && hours >= 18) ? 22 : (day === 1 ? 22 : 23);
  return new Date(2026, 7, dateDay, hours, mins, 0).getTime();
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTimelineDay, setActiveTimelineDay] = useState(1);
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [autoProgress, setAutoProgress] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!autoProgress) return;
    
    // Auto-select the current active stage based on real time
    let foundDay = 1;
    let foundIdx = 0;
    
    // Default to day 1 stage 0 if before event starts
    const firstEventTime = parseEventTime(TIMELINE_DATA[1][0].time, 1);
    if (currentTime >= firstEventTime) {
      for (const day of [1, 2]) {
        for (let i = 0; i < TIMELINE_DATA[day].length; i++) {
          const eventTime = parseEventTime(TIMELINE_DATA[day][i].time, day);
          if (currentTime >= eventTime) {
            foundDay = day;
            foundIdx = i;
          }
        }
      }
    }
    
    setActiveTimelineDay(foundDay);
    setSelectedStageIndex(foundIdx);
  }, [currentTime, autoProgress]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-blueprint-grid min-h-screen text-[#9FB8D4] selection:bg-[#FFB800] selection:text-[#0E2A4A] relative">
      
      {/* Background Particles System */}
      <ParticleBackground />

      {/* 1. FLOATING FIXED GLASSMORPHISM NAV BAR */}
      <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1240px] nav-glassmorphism rounded-full transition-all duration-300">
        <div className="px-4 sm:px-6 md:px-8 flex items-center h-12 md:h-14">
          
          {/* Logo Mark (Left aligned) */}
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 text-white font-display font-bold text-xs md:text-sm tracking-tight no-underline group">
              <img src={specLogo} alt="SPEC Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-md" />
              <span className="leading-none text-white font-extrabold text-xs md:text-sm tracking-wider">SPEC INDUSTRY HACK 2026</span>
            </a>
          </div>

          {/* Desktop Nav Links (Centered in the middle of navbar) */}
          <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-6 font-display text-[10px] xl:text-[11px] font-bold tracking-wider xl:tracking-widest uppercase">
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
                className="btn-nav-cta"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
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
      <section className="relative pt-28 sm:pt-32 pb-16 md:pb-20 border-b border-[#EAF2FA]/20 overflow-hidden">
        <div className="container relative z-10">
          

          {/* Organization & Presents Lines */}
          <div className="flex flex-col items-center select-none text-center mb-2 sm:mb-3 hero-spacing-sm">
            <span className="text-sm sm:text-lg md:text-xl font-extrabold font-mono text-[#FFB800] uppercase tracking-[0.35em]">
              SPEC-IIC
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#9FB8D4] uppercase tracking-[0.4em] mt-0.5">
              PRESENTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-wider leading-[1.08] max-w-5xl mx-auto text-center mb-3 sm:mb-5 hero-title hero-spacing-sm">
            SPEC INDUSTRY HACK <span className="text-[#FFB800]">2026</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-[#FFFFFF] max-w-3xl mx-auto text-center mb-2 sm:mb-3 tracking-wide hero-spacing-sm">
            &ldquo;Industry Challenges, Innovative Solutions, Incredible Impact.&rdquo;
          </p>

          {/* Organizer Attribution */}
          <p className="text-xs sm:text-sm md:text-base text-[#9FB8D4] max-w-3xl mx-auto text-center mb-5 sm:mb-6 leading-relaxed hero-spacing-md">
            Organized by <strong className="text-white font-semibold">St. Peter&apos;s Engineering College</strong>, in collaboration with <strong className="text-[#FFB800]">GeeksforGeeks Student Chapter</strong> &amp; <strong className="text-[#E8483C]">Spectrum Circle</strong>.
          </p>

          {/* Event Dates & Venue Card Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6 text-xs font-mono hero-spacing-md">
            <div className="flex items-center gap-2 px-3.5 py-2 bg-[#123A63] border border-[#EAF2FA]/30 rounded-full text-[#FFFFFF]">
              <Calendar className="w-3.5 h-3.5 text-[#E8483C]" />
              <span>22nd–23rd August 2026</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-[#123A63] border border-[#EAF2FA]/30 rounded-full text-[#FFFFFF]">
              <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>St. Peter&apos;s Engineering College Campus</span>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 hero-spacing-lg">
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
          <div className="pt-5 sm:pt-6 border-t border-[#EAF2FA]/20">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl relative">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white">24+</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#9FB8D4] mt-0.5 sm:mt-1">Hours Non-Stop</div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EAF2FA]/20 text-[9px] sm:text-[10px] font-mono text-[#6B8BAE]">
                  ◄── DURATION ──►
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl relative">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-[#FFB800]">1000+</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#9FB8D4] mt-0.5 sm:mt-1">Participants</div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EAF2FA]/20 text-[9px] sm:text-[10px] font-mono text-[#6B8BAE]">
                  ◄── CAPACITY ──►
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl relative">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white">200</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#9FB8D4] mt-0.5 sm:mt-1">Innovator Teams</div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EAF2FA]/20 text-[9px] sm:text-[10px] font-mono text-[#6B8BAE]">
                  ◄── SQUADS ──►
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl relative">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-[#FFB800]">₹1,00,000</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#9FB8D4] mt-0.5 sm:mt-1">Prize Pool</div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EAF2FA]/20 text-[9px] sm:text-[10px] font-mono text-[#6B8BAE]">
                  ◄── REWARDS ──►
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 p-3 sm:p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl relative">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white">15</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#9FB8D4] mt-0.5 sm:mt-1">Industry Partners</div>
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-[#EAF2FA]/20 text-[9px] sm:text-[10px] font-mono text-[#6B8BAE]">
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
              <h2 className="section-title">
                Bridging Academic Innovation With Real-World Industry Needs
              </h2>
              <p className="text-base sm:text-lg text-[#9FB8D4] mb-6 leading-relaxed">
                <strong className="text-white">SPEC INDUSTRY HACK 2026</strong> is a premier 24-hour national hackathon designed to unite over <strong>1,000 young engineering minds</strong> from colleges across India. Our mission is to move beyond conventional theoretical exercises and tackle genuine, industry-sourced problems.
              </p>
              <p className="text-base text-[#9FB8D4] mb-8 leading-relaxed">
                Participants collaborate in teams of 1 to 3 to engineer functional code, build autonomous AI agents, and prototype full-stack systems under strict time constraints — backed by continuous mentorship from engineering leaders and industry partners.
              </p>

              {/* Fast Fact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
                  <div className="text-[11px] font-mono text-[#E8483C] uppercase tracking-wider mb-1">Team Size</div>
                  <div className="text-base font-bold font-display text-white">1 to 3 Members</div>
                </div>
                <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
                  <div className="text-[11px] font-mono text-[#FFB800] uppercase tracking-wider mb-1">Registration Fee</div>
                  <div className="text-base font-bold font-display text-white">₹300 / Participant</div>
                </div>
                <div className="p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-none">
                  <div className="text-[11px] font-mono text-[#9FB8D4] uppercase tracking-wider mb-1">Scope</div>
                  <div className="text-base font-bold font-display text-white">Pan-India Colleges</div>
                </div>
              </div>
            </div>

            {/* Technical Blueprint Title-Block Info Box */}
            <div className="lg:col-span-5">
              <div className="blueprint-title-block space-y-3">


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
            <p className="section-subtitle mx-auto">
              Explore the core technical tracks designed around active industry friction points and emerging AI frontiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            <div className="tech-card flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#091C33] border border-[#FFB800] rounded-xl text-[#FFB800] mb-6 font-mono font-bold text-xs whitespace-nowrap shadow-sm">
                  [DOMAIN-01]
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
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">Machine Learning</span>
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">NLP / Vision</span>
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">Predictive Ops</span>
              </div>
            </div>

            <div className="tech-card flex flex-col justify-between border-[#E8483C]/50">
              <div>
                <div className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#091C33] border border-[#E8483C] rounded-xl text-[#E8483C] mb-6 font-mono font-bold text-xs whitespace-nowrap shadow-sm">
                  [DOMAIN-02]
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
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">Autonomous Agents</span>
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">Multi-Agent Systems</span>
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">LLM Tool Use</span>
              </div>
            </div>

            <div className="tech-card flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#091C33] border border-[#FFB800] rounded-xl text-[#FFB800] mb-6 font-mono font-bold text-xs whitespace-nowrap shadow-sm">
                  [DOMAIN-03]
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
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">Web &amp; Cloud API</span>
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">Microservices</span>
                <span className="px-2.5 py-1 bg-[#091C33] text-[#9FB8D4] border border-[#EAF2FA]/15 rounded-full">Real-Time UI</span>
              </div>
            </div>

          </div>

          <div className="max-w-2xl mx-auto text-center p-4 bg-[#123A63] border border-[#EAF2FA]/30 rounded-xl text-xs font-mono text-[#9FB8D4]">
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
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Solve Real Industry Challenges</h3>
              <p className="text-sm text-[#9FB8D4]">
                Direct students to work on authentic friction points faced by active technology companies rather than abstract toy problems.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Promote Innovation &amp; Teamwork</h3>
              <p className="text-sm text-[#9FB8D4]">
                Foster cross-functional collaboration under tight 24-hour hackathon deadlines to deliver working software artifacts.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Bridge Academia &amp; Industry</h3>
              <p className="text-sm text-[#9FB8D4]">
                Connect aspiring developers directly with corporate mentors, industry sponsors, and professional technical recruiters.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Practical Hands-On Exposure</h3>
              <p className="text-sm text-[#9FB8D4]">
                Provide immersive experience with industry-standard deployment tooling, AI APIs, version control, and system architecture.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
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
            
            <div className="bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl p-6 flex flex-col justify-between relative">
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

      {/* 7. EVENT TIMELINE — SEQUENTIAL ROADMAP */}
      <section id="timeline" className="py-20 border-b border-[#EAF2FA]/20 relative overflow-hidden">
        <div className="container relative z-10">
          
          {(() => {
            const currentEvents = TIMELINE_DATA[activeTimelineDay] || [];
            const safeIdx = Math.min(selectedStageIndex, currentEvents.length - 1);
            const activeEvent = currentEvents[safeIdx] || currentEvents[0];
            const ActiveIcon = activeEvent.IconComponent || Clock;

            return (
              <>
                <div className="text-center max-w-3xl mx-auto mb-10">

                  <h2 className="section-title">Event Timeline</h2>
                  <p className="section-subtitle mx-auto">
                    Explore the complete 24-hour roadmap across August 22nd and August 23rd, 2026. Hover or click any stage node to view full details.
                  </p>
                </div>

                {/* Day Switcher Toolbar */}
                <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 font-mono text-xs max-w-4xl mx-auto">
                  <button
                    onClick={() => {
                      setActiveTimelineDay(1);
                      setSelectedStageIndex(0);
                      setAutoProgress(false);
                    }}
                    className={`px-6 sm:px-8 py-3 border font-bold transition-all cursor-pointer flex items-center gap-3 rounded-full ${
                      activeTimelineDay === 1
                        ? 'bg-[#123A63] text-[#FFB800] border-[#FFB800] shadow-[0_0_16px_rgba(255,184,0,0.3)] -translate-y-0.5'
                        : 'bg-[#091C33] text-[#9FB8D4] border-[#EAF2FA]/20 hover:border-[#FFB800]/50 hover:text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>DAY 1 — 22ND AUG (8 STAGES)</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTimelineDay(2);
                      setSelectedStageIndex(0);
                      setAutoProgress(false);
                    }}
                    className={`px-6 sm:px-8 py-3 border font-bold transition-all cursor-pointer flex items-center gap-3 rounded-full ${
                      activeTimelineDay === 2
                        ? 'bg-[#123A63] text-[#FFB800] border-[#FFB800] shadow-[0_0_16px_rgba(255,184,0,0.3)] -translate-y-0.5'
                        : 'bg-[#091C33] text-[#9FB8D4] border-[#EAF2FA]/20 hover:border-[#FFB800]/50 hover:text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>DAY 2 — 23RD AUG (5 STAGES)</span>
                  </button>
                </div>

                {/* CONNECTED ROADMAP TRACK */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <div className="bg-[#123A63] border-2 border-[#EAF2FA]/30 p-5 sm:p-8 relative rounded-2xl">
                    <div className="flex items-center justify-between mb-6 font-mono text-xs border-b border-[#EAF2FA]/15 pb-3">
                      <div className="flex items-center gap-2 text-[#FFB800] font-bold uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-[#FFB800]" />
                        <span>SEQUENTIAL ROADMAP — DAY {activeTimelineDay}</span>
                      </div>
                      <div className="text-[#6B8BAE] hidden sm:block">
                        HOVER / CLICK NODES TO INSPECT
                      </div>
                    </div>

                    {/* Connected Stem Line & Scrollable Track */}
                    <div className="relative my-4 px-1 sm:px-4 overflow-x-auto scrollbar-none pb-4">
                      <div className="min-w-[620px] sm:min-w-0 relative py-2">
                        <div className="absolute top-1/2 left-4 right-4 h-1 -translate-y-1/2 timeline-horiz-stem rounded-full overflow-hidden z-0 bg-[#EAF2FA]/10">
                          <div className="absolute top-0 left-0 h-full bg-[#FFB800] transition-all duration-700 shadow-[0_0_12px_rgba(255,184,0,0.6)]" style={{ width: `${Math.max(0, Math.min(100, (safeIdx / Math.max(1, currentEvents.length - 1)) * 100))}%` }} />
                        </div>

                        <div className="relative z-10 flex items-center justify-between gap-1 sm:gap-2">
                          {currentEvents.map((ev, idx) => {
                            const isSelected = safeIdx === idx;
                            // A stage is "completed" if it's strictly before the current auto-progressed index, 
                            // OR if we evaluate based on strictly real time. We will use the selected index to visualize past/present/future
                            const isPassed = idx < safeIdx;
                            const isRed = ev.highlightType === 'red';
                            const isGreen = ev.highlightType === 'green';
                            const isGold = ev.highlightType === 'gold';
                            const IconComp = ev.IconComponent || Clock;

                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  setSelectedStageIndex(idx);
                                  setAutoProgress(false);
                                }}
                                onMouseEnter={() => {
                                  setSelectedStageIndex(idx);
                                  setAutoProgress(false);
                                }}
                                className="group relative flex flex-col items-center shrink-0 cursor-pointer min-w-[72px] sm:min-w-[95px] focus:outline-none"
                              >
                                <span className={`font-mono text-[10px] sm:text-[11px] font-bold mb-2 transition-colors ${
                                  isGreen
                                    ? 'text-[#22C55E]' // Evaluation text green
                                    : 'text-[#FFB800]' // Everything else yellow
                                }`}>
                                  {ev.time.split('–')[0].trim()}
                                </span>

                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 relative ${
                                  isGreen
                                    ? 'bg-[#22C55E] border-[#22C55E] text-[#091C33] shadow-[0_0_20px_rgba(34,197,94,0.6)] scale-110' // Fully filled green
                                    : isSelected
                                      ? 'bg-[#123A63] border-[#FFB800] text-[#FFB800] shadow-[0_0_20px_rgba(255,184,0,0.5)] scale-110'
                                      : isPassed
                                        ? 'bg-[#FFB800] border-[#FFB800] text-[#091C33] shadow-[0_0_15px_rgba(255,184,0,0.4)] group-hover:scale-105' // Fully filled yellow for passed
                                        : 'bg-[#091C33] border-[#FFB800]/50 text-[#FFB800] group-hover:border-[#FFB800] group-hover:text-white group-hover:scale-105'
                                }`}>
                                  <IconComp className="w-4 h-4" />
                                </div>

                                <span className={`font-mono text-[8px] sm:text-[9px] mt-2 px-2 py-0.5 border rounded-full truncate max-w-[80px] sm:max-w-[95px] text-center uppercase tracking-tighter ${
                                  isGreen
                                    ? 'bg-[#091C33] border-[#22C55E] text-[#22C55E] font-bold'
                                    : isSelected
                                      ? 'bg-[#091C33] border-[#FFB800] text-[#FFB800] font-bold'
                                      : isPassed
                                        ? 'bg-[#FFB800]/20 border-[#FFB800] text-[#FFB800]'
                                        : 'bg-[#091C33]/60 border-[#FFB800]/40 text-[#FFB800]'
                                }`}>
                                  {ev.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SPOTLIGHT STAGE CARD */}
                  <div
                    key={`spotlight-flow-${activeTimelineDay}-${safeIdx}`}
                    className={`p-6 sm:p-8 bg-[#091C33] border-2 rounded-2xl volume-spotlight-anim relative ${
                      activeEvent.highlightType === 'red'
                        ? 'border-[#E8483C] shadow-[0_0_30px_rgba(232,72,60,0.3)]'
                        : activeEvent.highlightType === 'gold'
                        ? 'border-[#FFB800] shadow-[0_0_30px_rgba(255,184,0,0.25)]'
                        : activeEvent.highlightType === 'green'
                        ? 'border-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.25)]'
                        : 'border-[#FFB800]/50 shadow-[0_0_30px_rgba(255,184,0,0.15)]'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 font-mono text-xs border-b border-[#EAF2FA]/15 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 bg-[#123A63] border border-[#FFB800] text-[#FFB800] font-bold rounded-full">
                          STAGE {String(safeIdx + 1).padStart(2, '0')} / {String(currentEvents.length).padStart(2, '0')}
                        </span>
                        <div className="flex items-center gap-2 text-white font-bold">
                          <Clock className="w-4 h-4 text-[#FFB800]" />
                          <span>{activeEvent.time}</span>
                        </div>
                      </div>

                      <span className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full ${
                        activeEvent.highlightType === 'green'
                          ? 'bg-[#091C33] border border-[#22C55E] text-[#22C55E]'
                          : 'bg-[#091C33] border border-[#FFB800] text-[#FFB800]'
                      }`}>
                        {activeEvent.badge}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3.5 border shrink-0 hidden sm:flex items-center justify-center rounded-xl ${
                        activeEvent.highlightType === 'green'
                          ? 'bg-[#091C33] text-[#22C55E] border-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                          : 'bg-[#123A63] text-[#FFB800] border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.3)]'
                      }`}>
                        <ActiveIcon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                          {activeEvent.title}
                        </h3>
                        <p className="text-sm text-[#9FB8D4] mt-2 leading-relaxed">
                          {activeEvent.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#EAF2FA]/15 font-mono text-xs">
                      <button
                        onClick={() => setSelectedStageIndex((prev) => (prev > 0 ? prev - 1 : currentEvents.length - 1))}
                        className="px-5 py-2.5 bg-[#123A63] border border-[#EAF2FA]/30 text-[#9FB8D4] hover:text-white hover:border-[#FFB800] transition-colors cursor-pointer flex items-center gap-2 rounded-full"
                      >
                        <ChevronDown className="w-4 h-4 rotate-90" />
                        <span>PREV STAGE</span>
                      </button>

                      <div className="flex-1 mx-4 max-w-xs hidden sm:block bg-[#0E2A4A] h-2 border border-[#EAF2FA]/20 overflow-hidden rounded-full">
                        <div
                          className="bg-[#FFB800] h-full transition-all duration-300 shadow-[0_0_8px_#FFB800] rounded-full"
                          style={{ width: `${((safeIdx + 1) / currentEvents.length) * 100}%` }}
                        />
                      </div>

                      <button
                        onClick={() => setSelectedStageIndex((prev) => (prev < currentEvents.length - 1 ? prev + 1 : 0))}
                        className="px-5 py-2.5 bg-[#123A63] border border-[#EAF2FA]/30 text-[#9FB8D4] hover:text-white hover:border-[#FFB800] transition-colors cursor-pointer flex items-center gap-2 rounded-full"
                      >
                        <span>NEXT STAGE</span>
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}

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
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Registration Kit</h3>
              <p className="text-xs text-[#9FB8D4]">Includes official hackathon badges, developer merch, and documentation materials for all participants.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Day 1 Lunch &amp; Dinner</h3>
              <p className="text-xs text-[#9FB8D4]">Full buffet lunch and dinner provided on August 22nd at campus dining halls.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Day 2 Breakfast</h3>
              <p className="text-xs text-[#9FB8D4]">Hot breakfast served on the morning of August 23rd prior to final project presentations.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Late-Night Coffee</h3>
              <p className="text-xs text-[#9FB8D4]">Unlimited coffee available continuously during late-night and early-morning coding hours.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">High-Speed Internet</h3>
              <p className="text-xs text-[#9FB8D4]">Dedicated gigabit Wi-Fi nodes deployed across all hackathon building floors.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1">Power &amp; Workspaces</h3>
              <p className="text-xs text-[#9FB8D4]">Ergonomic seating arrangements with dedicated power multi-sockets for every team table.</p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
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
          <div className="bg-[#123A63] border-2 border-[#FFB800] p-6 sm:p-8 md:p-12 mb-12 relative overflow-hidden rounded-3xl">
            {/* Stamp & Official Tag Flex Container */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#091C33] border border-[#FFB800] text-xs font-mono text-[#FFB800] uppercase tracking-widest rounded-full">
                <Award className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>OFFICIAL CASH PRIZE</span>
              </span>


            </div>

            <div className="text-left max-w-3xl">
              <h3 className="text-xs font-mono text-[#9FB8D4] mb-2 tracking-widest uppercase">
                [SPEC-REWARD-01] CASH DISTRIBUTION
              </h3>
              
              {/* Huge cash display with blueprint dimension styling */}
              <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white mb-4 tracking-tight truncate">
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
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Internship Opportunities</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Direct fast-track interview and internship placement offers extended by participating industry partners to standout coders and winning teams.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">$4,000 USD AI Credits</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Exclusive access to high-performance AI API credits and LLM inference tokens to empower post-hackathon software building.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#E8483C] mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">Startup Support</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Incubation mentorship, cloud infrastructure sponsorship, and seed support for standout team projects demonstrating commercial viability.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="w-12 h-12 bg-[#091C33] border border-[#EAF2FA]/30 rounded-xl flex items-center justify-center text-[#FFB800] mb-4">
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

            <h2 className="section-title">Industry Partners</h2>
            <p className="section-subtitle mx-auto">
              Collaborating software enterprises providing real-world problem statements, mentorship, and career opportunities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {[
              "Spectrum Circle & Unity Circle",
              "RivicQ Germany",
              "International Startup Foundation",
              "Perfect Corp. & YouCam API",
              "Kodryx AI & Cliqin Health",
              "iRobotix Technologies",
              "HackBoats",
              "GrowAthlete",
              "Kaynos Technologies",
              "Founders Lab",
              "Infinitron AI",
              "IMS",
              "Skyde Solutions"
            ].map((company, idx) => (
              <div key={idx} className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] h-20 sm:h-24 bg-[#123A63]/60 backdrop-blur border border-[#EAF2FA]/20 rounded-2xl p-3 flex flex-col items-center justify-center text-center group hover:bg-[#164373] hover:border-[#FFB800]/60 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,184,0,0.15)] transition-all duration-300">
                <div className="font-display font-bold text-white text-[11px] sm:text-[13px] leading-snug tracking-wider group-hover:text-[#FFB800] transition-colors uppercase">
                  {company}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. SUPPORTING CLUBS */}
      <section id="clubs" className="py-20 border-b border-[#EAF2FA]/20">
        <div className="container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="section-title">Supporting Clubs &amp; Chapters</h2>
            <p className="section-subtitle mx-auto">
              Student organizations spearheading community outreach, technical workshops, and event execution.
            </p>
          </div>

        </div>

        {/* Edge-to-edge Marquee */}
        <div className="marquee-container flex overflow-hidden w-full relative py-8 mt-4">
          <div className="marquee-content flex shrink-0 w-max items-center justify-around gap-8 pr-8">
            {clubLogos.map((logo, index) => (
              <img key={`logo-1-${index}`} src={logo} alt={`Supporting Club ${index + 1}`} loading="lazy" className="h-20 sm:h-28 w-auto object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform" />
            ))}
            {clubLogos.map((logo, index) => (
              <img key={`logo-2-${index}`} src={logo} alt={`Supporting Club ${index + 1}`} loading="lazy" className="h-20 sm:h-28 w-auto object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform" />
            ))}
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
            
            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="text-3xl font-extrabold font-mono text-[#FFB800] mb-3">01</div>
              <h3 className="text-base font-bold font-display text-white mb-2">Practical Solutions</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Production-ready code repositories and architectural models directly addressing industry problem statements.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="text-3xl font-extrabold font-mono text-[#E8483C] mb-3">02</div>
              <h3 className="text-base font-bold font-display text-white mb-2">Enhanced Skill Sets</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Accelerated growth in real-time debugging, full-stack integration, and autonomous agent orchestration.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
              <div className="text-3xl font-extrabold font-mono text-[#FFB800] mb-3">03</div>
              <h3 className="text-base font-bold font-display text-white mb-2">Industry Alignment</h3>
              <p className="text-xs text-[#9FB8D4] leading-relaxed">
                Direct exposure to production expectations, architectural standards, and professional engineering workflows.
              </p>
            </div>

            <div className="p-6 bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl">
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
                a: "Teams must consist of 1 to 3 members. Individual registrations are welcome, and team formation channels are also available on our official community group."
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
                a: "Problem statements authored by our industry partners will be unveiled during the Inauguration Ceremony on Day 1 (August 22, 2026)."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#123A63] border border-[#EAF2FA]/30 rounded-2xl overflow-hidden">
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
                <span>📅 22nd–23rd August 2026</span>
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
              <a
                href="https://www.instagram.com/specindustryhack?igsh=Nmg5bTRsaWkzaHN3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-[#123A63] border border-[#EAF2FA]/30 rounded-full flex items-center justify-center hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/specindustryhack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-[#123A63] border border-[#EAF2FA]/30 rounded-full flex items-center justify-center hover:text-[#FFB800] hover:border-[#FFB800] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}
