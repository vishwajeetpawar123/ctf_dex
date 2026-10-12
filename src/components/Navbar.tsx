import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, ExternalLink, FileSearch, Layers, Users, BookOpen, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

interface NavbarProps {
  onOpenRegisterModal: () => void;
  unstopUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegisterModal }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Case File');

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const navLinks = [
    { name: "Case File", href: "#case-file", icon: FileSearch, detail: "Penthouse 42 Evidence" },
    { name: "Rounds 1 & 2", href: "#tournament-architecture", icon: Layers, detail: "Investigation ➔ CTF" },
    { name: "6 Suspects", href: "#suspects-dossier", icon: Users, detail: "Persons of Interest" },
    { name: "Intel & Rules", href: "#rules-engagement", icon: BookOpen, detail: "CLI & Guidelines" },
    { name: "FAQ", href: "#faq-section", icon: HelpCircle, detail: "Bounties & Clearance" }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/50 shadow-lg">
        <div className="flex justify-between items-center w-full px-3.5 sm:px-space-md lg:px-margin max-w-7xl mx-auto h-14 sm:h-16">
          
          {/* Brand & Case Identifier Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            
            {/* Club Logo */}
            <img
              src="/assets/club_logo.jpeg"
              alt="Club Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded border border-outline-variant bg-surface-container p-0.5 shrink-0"
              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
            />

            <a
              className="flex items-center gap-2 group cursor-pointer min-w-0"
              href="#hero"
              onClick={() => soundFx.playKeyClick()}
            >
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-primary-container"></span>
              </span>
              <div className="flex flex-col text-left min-w-0">
                {/* Mobile clean condensed title */}
                <span className="sm:hidden text-xs font-mono font-bold tracking-wider text-primary group-hover:text-primary-container uppercase truncate transition-colors">
                  CID // ZERO HOUR
                </span>
                <span className="sm:hidden text-[9px] font-mono text-outline-variant uppercase tracking-widest truncate">
                  ACTIVE CASE #8849
                </span>

                {/* Desktop full title */}
                <span className="hidden sm:inline text-label-md sm:text-label-lg font-mono tracking-wider text-primary group-hover:text-primary-container uppercase font-bold transition-colors truncate">
                  CID CYBER FORENSICS // ZERO HOUR
                </span>
                <span className="hidden sm:inline text-label-sm font-mono text-outline-variant uppercase tracking-widest truncate">
                  UNIT 09 DIGITAL EVIDENCE TERMINAL
                </span>
              </div>
            </a>

            {/* Case Status Tag (Desktop) */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container border border-outline-variant rounded text-label-sm font-mono text-tertiary">
              <Shield className="w-3.5 h-3.5 text-tertiary" />
              <span>ACTIVE CASE: #8849</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFx.playKeyClick();
                    setActiveNav(link.name);
                  }}
                  className={`px-3 py-1.5 rounded font-mono font-medium uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 text-xs active:scale-95 ${
                    isActive
                      ? 'bg-surface-container-high border border-primary-container text-primary shadow-[0_0_12px_rgba(255,81,100,0.3)]'
                      : 'bg-surface-container/60 hover:bg-surface-container-high border border-outline-variant/60 hover:border-secondary-container text-on-surface hover:text-secondary'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-outline-variant group-hover:text-secondary'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Trailing Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-space-sm shrink-0">
            
            {/* Terminal Indicator (Tablet/Desktop) */}
            <div className="hidden md:flex items-center gap-1.5 text-outline-variant pr-1 font-mono text-xs">
              <Terminal className="w-3.5 h-3.5 text-secondary-container" />
              <span className="text-[10px] text-outline">PORT:2222</span>
            </div>

            {/* Mobile Compact CTA */}
            <button
              onClick={() => {
                soundFx.playAlarm();
                onOpenRegisterModal();
              }}
              className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 bg-primary-container text-surface-container-lowest font-mono font-bold text-[11px] uppercase tracking-wider rounded border border-primary pulse-glow-crimson hover:bg-primary active:scale-95 transition-all shadow-md"
            >
              <span>REGISTER</span>
              <ExternalLink className="w-3 h-3 stroke-[2.5]" />
            </button>

            {/* Desktop / Tablet Full CTA */}
            <button
              onClick={() => {
                soundFx.playAlarm();
                onOpenRegisterModal();
              }}
              className="hidden sm:flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-primary-container text-surface-container-lowest font-mono font-bold text-xs uppercase tracking-wider border border-primary rounded pulse-glow-crimson hover:bg-primary hover:text-on-primary active:scale-95 duration-100 ease-in-out cursor-pointer transition-all shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface-container-lowest opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-surface-container-lowest"></span>
              </span>
              <span>REGISTER ON UNSTOP</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFx.playKeyClick();
                setIsMobileOpen(!isMobileOpen);
              }}
              aria-label="Toggle navigation"
              className="lg:hidden p-2 rounded-lg bg-surface-container border border-outline-variant/80 text-on-surface hover:text-primary hover:border-primary-container active:scale-95 transition-all"
            >
              {isMobileOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>

        {/* Clean Cyber Neon Accent Line (replaces messy thick hazard tape) */}
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-primary-container/70 to-transparent"></div>

        {/* Mobile Navigation Drawer / Overlay */}
        {isMobileOpen && (
          <div className="lg:hidden bg-surface-container-low/95 backdrop-blur-xl border-b border-primary-container/30 px-4 py-5 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-3 duration-200">
            
            {/* Header in menu */}
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-outline-variant/60 text-[10px] font-mono text-outline">
              <span className="text-secondary">// UNIT 09 NAVIGATOR</span>
              <span className="text-primary font-bold">STATUS: ACTIVE</span>
            </div>

            {/* Nav list */}
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFx.playKeyClick();
                    setIsMobileOpen(false);
                    setActiveNav(link.name);
                  }}
                  className="px-3.5 py-2.5 rounded-lg bg-surface-container/80 border border-outline-variant/70 text-on-surface hover:text-secondary hover:border-secondary-container font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-secondary-container" />
                    <span>{link.name}</span>
                  </div>
                  <span className="text-[10px] text-outline font-normal lowercase">{link.detail}</span>
                </a>
              );
            })}

            {/* Mobile Drawer CTA */}
            <button
              onClick={() => {
                soundFx.playAlarm();
                setIsMobileOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full mt-2.5 py-3 bg-primary-container text-surface-container-lowest font-mono font-bold text-xs uppercase tracking-wider rounded-lg text-center pulse-glow-crimson flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              <span>REGISTER SQUAD ON UNSTOP</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};

