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
      <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-md">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-16">
          
          {/* Brand Identity - Clean, Sharp, Uncluttered */}
          <div className="flex items-center gap-3 min-w-0">
            <a
              className="flex items-center gap-3 group cursor-pointer min-w-0"
              href="#hero"
              onClick={() => soundFx.playKeyClick()}
            >
              {/* Club Logo */}
              <img
                src="/assets/club_logo.jpeg"
                alt="Club Logo"
                className="w-8 h-8 rounded-lg object-contain bg-surface-container-low border border-outline-variant/50 p-0.5 shrink-0 group-hover:border-primary-container transition-colors"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />

              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-headline font-bold text-sm tracking-wide text-on-surface group-hover:text-primary transition-colors truncate">
                    OPERATION <span className="text-primary-container">ZERO HOUR</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-primary-container/15 text-primary border border-primary-container/30">
                    CID CTF
                  </span>
                </div>
                <span className="text-[10px] font-mono text-outline-variant tracking-wider hidden sm:inline truncate">
                  CLASSIFIED HOMICIDE CASE #8849
                </span>
                <span className="sm:hidden text-[9px] font-mono text-outline-variant uppercase tracking-widest truncate">
                  ACTIVE CASE #8849
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Sleek Floating Capsule Track */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 border border-outline-variant/40 rounded-full px-2 py-1 shadow-inner backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFx.playKeyClick();
                    setActiveNav(link.name);
                  }}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-medium tracking-wide transition-all duration-150 active:scale-95 ${
                    isActive
                      ? 'bg-primary-container text-surface-container-lowest font-bold shadow-[0_0_12px_rgba(255,81,100,0.35)]'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Trailing Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
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

            {/* Desktop Full CTA */}
            <button
              onClick={() => {
                soundFx.playAlarm();
                onOpenRegisterModal();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary-container text-surface-container-lowest font-mono font-bold text-xs uppercase tracking-wider rounded-lg pulse-glow-crimson hover:bg-primary hover:text-on-primary active:scale-95 duration-100 ease-in-out cursor-pointer transition-all shadow-md"
            >
              <span>REGISTER ON UNSTOP</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
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

        {/* Subtle Cyber Neon Accent Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/40 to-transparent"></div>

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

