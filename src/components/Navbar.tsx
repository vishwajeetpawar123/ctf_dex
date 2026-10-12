import React, { useState } from 'react';
import { Menu, X, Shield, Terminal, ExternalLink, FileSearch, Layers, Users, BookOpen, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

interface NavbarProps {
  onOpenRegisterModal: () => void;
  unstopUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegisterModal }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Case File');

  const navLinks = [
    { name: "Case File", href: "#case-file", icon: FileSearch },
    { name: "Rounds 1 & 2", href: "#tournament-architecture", icon: Layers },
    { name: "6 Suspects", href: "#suspects-dossier", icon: Users },
    { name: "Intel & Rules", href: "#rules-engagement", icon: BookOpen },
    { name: "FAQ", href: "#faq-section", icon: HelpCircle }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-low dark:bg-surface-container-lowest shadow-md backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-space-md lg:px-margin max-w-7xl mx-auto h-16">
          
          {/* Brand & Case Identifier Cluster - No College Logo */}
          <div className="flex items-center gap-space-md">
            
            {/* Optional Club Logo Only */}
            <img
              src="/assets/club_logo.jpeg"
              alt="Club Logo"
              className="w-9 h-9 object-contain rounded border border-outline-variant bg-surface-container p-0.5"
              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
            />

            <a
              className="flex items-center gap-2.5 group cursor-pointer"
              href="#hero"
              onClick={() => soundFx.playKeyClick()}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container"></span>
              </span>
              <div className="flex flex-col text-left">
                <span className="text-label-lg font-label-lg tracking-wider text-primary group-hover:text-primary-container uppercase font-bold transition-colors">
                  CID CYBER FORENSICS // ZERO HOUR
                </span>
                <span className="text-label-sm font-label-sm text-outline-variant uppercase tracking-widest hidden sm:inline">
                  UNIT 09 DIGITAL EVIDENCE TERMINAL
                </span>
              </div>
            </a>

            {/* Case Status Tag */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container border border-outline-variant rounded text-label-sm font-label-sm text-tertiary">
              <Shield className="w-3.5 h-3.5 text-tertiary" />
              <span>ACTIVE CASE: #8849</span>
            </div>
          </div>

          {/* Neatly Buttonised Navigation Options */}
          <nav className="hidden lg:flex items-center gap-2">
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
                  className={`px-3.5 py-1.5 rounded font-label-md font-medium uppercase tracking-wider transition-all duration-150 flex items-center gap-1.5 text-xs active:scale-95 ${
                    isActive
                      ? 'bg-surface-container-high border border-primary-container text-primary shadow-[0_0_12px_rgba(255,81,100,0.3)]'
                      : 'bg-surface-container/70 hover:bg-surface-container-high border border-outline-variant/60 hover:border-secondary-container text-on-surface hover:text-secondary'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-primary' : 'text-outline-variant group-hover:text-secondary'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Trailing Action Cluster */}
          <div className="flex items-center gap-space-sm">
            
            {/* Terminal Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-outline-variant pr-space-xs">
              <Terminal className="w-4 h-4 text-secondary-container" />
            </div>

            {/* Unstop Direct Portal CTA */}
            <button
              onClick={() => {
                soundFx.playAlarm();
                onOpenRegisterModal();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-primary-container text-surface-container-lowest font-label-md font-bold tracking-wider uppercase border border-primary rounded pulse-glow-crimson hover:bg-primary hover:text-on-primary active:scale-95 duration-100 ease-in-out cursor-pointer transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface-container-lowest opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-surface-container-lowest"></span>
              </span>
              <span>REGISTER ON UNSTOP</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded bg-surface-container border border-outline-variant text-on-surface hover:text-primary transition-colors"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Hazard Tape Divider Strip */}
        <div className="w-full hazard-stripe h-4 overflow-hidden shadow-inner select-none border-y border-tertiary/40"></div>

        {/* Mobile Dropdown */}
        {isMobileOpen && (
          <div className="lg:hidden bg-surface-container-low border-b border-outline-variant px-6 py-4 flex flex-col gap-2.5 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFx.playKeyClick();
                    setIsMobileOpen(false);
                  }}
                  className="px-4 py-2.5 rounded bg-surface-container border border-outline-variant text-on-surface hover:text-secondary hover:border-secondary-container font-label-sm font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all"
                >
                  <Icon className="w-4 h-4 text-secondary-container" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <button
              onClick={() => {
                soundFx.playAlarm();
                setIsMobileOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full mt-2 py-3 bg-primary-container text-surface-container-lowest font-label-md font-bold uppercase tracking-wider rounded text-center pulse-glow-crimson"
            >
              REGISTER SQUAD ON UNSTOP
            </button>
          </div>
        )}
      </header>
    </>
  );
};
