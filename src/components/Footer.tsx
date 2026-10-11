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
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-space-md lg:px-margin py-space-lg max-w-7xl mx-auto gap-space-md">
        
        {/* Unit Brand Identity from Stitch */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-label-md font-label-md font-bold tracking-widest text-primary-container">
            CID CYBER FORENSICS // ZERO HOUR
          </span>
          <p className="text-body-sm font-body-sm text-outline-variant mt-1 text-center md:text-left max-w-md">
            © {new Date().getFullYear()} CID CYBER FORENSICS UNIT // OPERATION ZERO HOUR CTF. ALL RIGHTS RESERVED. ENCRYPTED COMMS PROTOCOL 12-X.
          </p>
        </div>

        {/* Links Cluster from Stitch */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 text-label-sm font-label-sm">
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors duration-150" href="#case-file">
            Security Clearance
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors duration-150" href="#case-file">
            Case File Archives
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors duration-150" href="#tournament-architecture">
            Rounds 1 &amp; 2
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors duration-150" href="#suspects-dossier">
            6 Suspects
          </a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-colors duration-150" href="#rules-engagement">
            Rules of Engagement
          </a>
          <button
            onClick={onOpenRegisterModal}
            className="text-secondary font-label-sm hover:text-secondary hover:underline transition-colors duration-150 font-bold cursor-pointer"
          >
            Unstop Portal
          </button>
          
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="p-1 rounded bg-surface-container border border-outline-variant text-outline-variant hover:text-secondary ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
