import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

interface FooterProps {
  onOpenRegisterModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegisterModal }) => {
  const scrollToTop = () => {
    soundFx.playKeyClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-3.5 sm:px-space-md lg:px-margin py-8 pb-24 sm:pb-8 max-w-7xl mx-auto gap-6 sm:gap-space-md">
        
        {/* Unit Brand Identity */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xs sm:text-label-md font-mono font-bold tracking-widest text-primary-container">
            CID CYBER FORENSICS // KUCH TOH GADBAD HAI DAYA
          </span>
          <p className="text-[11px] sm:text-body-sm text-outline-variant mt-1 text-center md:text-left max-w-md font-mono">
            © {new Date().getFullYear()} CID CYBER FORENSICS UNIT // KUCH TOH GADBAD HAI DAYA CTF. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Links Cluster */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-label-sm font-mono">
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors" href="#hero">
            Top
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors" href="#case-file">
            Case File
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors" href="#tournament-architecture">
            Rounds 1 &amp; 2
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors" href="#suspects-dossier">
            6 Suspects
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors" href="#rules-engagement">
            Rules
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors" href="#faq-section">
            FAQ
          </a>
          <button
            onClick={onOpenRegisterModal}
            className="text-secondary hover:underline transition-colors font-bold cursor-pointer"
          >
            Unstop Portal
          </button>
          
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="p-1.5 rounded bg-surface-container border border-outline-variant text-outline-variant hover:text-secondary active:scale-95 transition-all ml-1"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
