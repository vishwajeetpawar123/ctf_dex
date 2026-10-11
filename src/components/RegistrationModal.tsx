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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-void-900 border-2 border-crimson rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,26,75,0.4)] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-void-800 text-gray-400 hover:text-white hover:bg-void-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson/15 border border-crimson/50 rounded-full text-xs font-mono text-crimson uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-crimson" />
          <span>OFFICIAL REGISTRATION PORTAL // UNSTOP ENLISTMENT</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black font-headline text-white uppercase mb-2">
          JOIN OPERATION <span className="text-crimson">ZERO HOUR</span>
        </h3>
        <p className="text-sm text-gray-300 font-body mb-6 leading-relaxed">
          Official registration and squad management for both Round 1 & Round 2 is hosted securely on Unstop.
        </p>

        {/* Squad Specifications Card */}
        <div className="p-4 bg-void-950 rounded-xl border border-void-700 mb-6 font-mono text-xs space-y-2.5">
          <div className="flex items-center justify-between text-gray-300">
            <span className="text-gray-400 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-cyan" />
              SQUAD CAPACITY:
            </span>
            <span className="text-white font-bold">{EVENT_CONFIG.teamSize}</span>
          </div>
          <div className="flex items-center justify-between text-gray-300">
            <span className="text-gray-400">QUALIFYING FORMAT:</span>
            <span className="text-amber font-bold">Round 1 Online → Round 2 Finalist CTF</span>
          </div>
          <div className="flex items-center justify-between text-gray-300">
            <span className="text-gray-400">REGISTRATION FEE:</span>
            <span className="text-terminal-green font-bold">FREE REGISTRATION</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleProceed}
            className="w-full py-4 bg-crimson text-black font-mono font-black text-sm uppercase tracking-widest chamfer-md glow-crimson hover:bg-crimson-bright hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>PROCEED TO UNSTOP REGISTRATION</span>
            <ExternalLink className="w-4 h-4 stroke-[3]" />
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full py-3 bg-void-800 hover:bg-void-700 text-gray-300 border border-void-600 font-mono text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-terminal-green" />
                <span className="text-terminal-green font-bold">UNSTOP LINK COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-400" />
                <span>COPY UNSTOP REGISTRATION LINK</span>
              </>
            )}
          </button>
        </div>

        {/* Note on link placeholder */}
        <div className="p-3 bg-void-950/60 rounded border border-void-800 text-[11px] font-mono text-gray-400 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber shrink-0" />
          <span>
            Link destination will be updated automatically with your team's live Unstop event URL.
          </span>
        </div>

      </div>

    </div>
  );
};
