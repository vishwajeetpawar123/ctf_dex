import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, ShieldCheck, Users, AlertTriangle } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';
import { soundFx } from '../utils/audioEffects';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  unstopUrl: string;
}

export const RegistrationModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, unstopUrl }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    soundFx.playKeyClick();
    navigator.clipboard.writeText(unstopUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProceed = () => {
    soundFx.playAlarm();
    window.open(unstopUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-surface-container-low border-2 border-primary-container rounded-2xl p-5 sm:p-8 shadow-[0_0_50px_rgba(255,81,100,0.35)] overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-primary-container/15 border border-primary-container/50 rounded-full text-[10px] sm:text-xs font-mono text-primary uppercase tracking-wider mb-3 sm:mb-4 max-w-[85%]">
          <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="truncate">OFFICIAL REGISTRATION // UNSTOP ENLISTMENT</span>
        </div>

        <h3 className="text-xl sm:text-3xl font-black font-headline text-on-surface uppercase mb-2">
          JOIN OPERATION <span className="text-primary-container">ZERO HOUR</span>
        </h3>
        <p className="text-xs sm:text-sm text-on-surface-variant font-body mb-5 leading-relaxed">
          Official registration and squad management for both Round 1 &amp; Round 2 is hosted securely on Unstop.
        </p>

        {/* Squad Specifications Card */}
        <div className="p-3.5 sm:p-4 bg-surface-container-lowest rounded-xl border border-outline-variant mb-5 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-secondary" />
              SQUAD CAPACITY:
            </span>
            <span className="text-on-surface font-bold">{EVENT_CONFIG.teamSize}</span>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant">
            <span>QUALIFYING FORMAT:</span>
            <span className="text-tertiary font-bold text-[11px] sm:text-xs">Round 1 Online → Round 2 CTF</span>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant">
            <span>REGISTRATION FEE:</span>
            <span className="text-secondary font-bold">FREE REGISTRATION</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 sm:space-y-3 mb-5">
          <button
            onClick={handleProceed}
            className="w-full py-3.5 sm:py-4 bg-primary-container text-surface-container-lowest font-mono font-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest rounded-lg pulse-glow-crimson hover:bg-primary active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>PROCEED TO UNSTOP REGISTRATION</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full py-2.5 sm:py-3 bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant font-mono text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-secondary font-bold">UNSTOP LINK COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-outline" />
                <span>COPY UNSTOP REGISTRATION LINK</span>
              </>
            )}
          </button>
        </div>

        {/* Note on link placeholder */}
        <div className="p-2.5 sm:p-3 bg-surface-container-lowest rounded border border-outline-variant text-[11px] font-mono text-outline-variant flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-tertiary shrink-0" />
          <span>
            Link destination will be updated automatically with your team's live Unstop event URL.
          </span>
        </div>

      </div>

    </div>
  );
};

