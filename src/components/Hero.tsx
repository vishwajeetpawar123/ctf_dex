import React, { useState, useEffect } from 'react';
import { Lock, Timer, UserCheck, Terminal, ArrowRight } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';
import { soundFx } from '../utils/audioEffects';

interface HeroProps {
  onOpenRegisterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegisterModal }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const target = new Date(EVENT_CONFIG.targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-6 sm:pt-space-xl pb-16 sm:pb-24 px-3.5 sm:px-space-md lg:px-margin max-w-7xl mx-auto flex flex-col items-center text-center" id="hero">
      
      {/* Top Classification Tag */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 mb-3 sm:mb-space-md bg-surface-container border border-primary-container/40 rounded text-[10px] sm:text-label-sm font-mono text-primary uppercase tracking-wider sm:tracking-widest max-w-full">
        <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
        <span className="truncate">// CASE FILE: 2026-GADBAD-HAI-DAYA <span className="hidden sm:inline">// TOP SECRET CLEARANCE</span></span>
      </div>

      {/* Main Headline with Forensic Glitch Vibe */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-headline-xl font-headline-xl uppercase text-on-surface tracking-tight max-w-5xl leading-[1.1] sm:leading-none">
        CID CTF:{" "}
        <span className="text-primary-container underline decoration-secondary-container decoration-wavy decoration-2">
          KUCH TOH GADBAD HAI DAYA
        </span>
      </h1>

      {/* Narrative Lead Pitch */}
      <p className="mt-3 sm:mt-space-md max-w-3xl text-sm sm:text-base md:text-body-lg font-body-lg text-on-surface-variant font-light px-1 sm:px-0 leading-relaxed">
        A Tech Tycoon Murdered at <span className="text-primary font-mono font-bold">01:09 PM</span>.{" "}
        <span className="text-secondary font-mono font-bold">₹47 Crore Laundered</span>.{" "}
        <span className="text-tertiary font-mono font-bold">6 Suspects</span>.{" "}
        The Evidence is Encrypted in the RAM. Can your squad reconstruct the breach before time runs out?
      </p>

      {/* Digital Countdown Flip-Style Matrix */}
      <div className="mt-6 sm:mt-space-xl w-full max-w-2xl bg-surface-container-low border border-outline-variant p-3 sm:p-space-md rounded-lg shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary-container to-tertiary"></div>
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-outline-variant/60 text-[10px] sm:text-label-sm font-mono">
          <span className="flex items-center gap-1.5 text-primary font-semibold">
            <Timer className="w-3.5 h-3.5 text-primary" />
            <span>REGISTRATION CLOSING SOON</span>
          </span>
          <span className="text-outline uppercase tracking-wider hidden xs:inline sm:inline">EVENT BOOT: ROUND 1 & 2</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 sm:gap-4 text-center font-mono">
          {/* Days */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-primary tracking-wider font-extrabold">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-label-sm font-mono text-outline-variant uppercase mt-1">Days</div>
          </div>
          {/* Hours */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-secondary tracking-wider font-extrabold">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-label-sm font-mono text-outline-variant uppercase mt-1">Hours</div>
          </div>
          {/* Minutes */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-on-surface tracking-wider font-extrabold">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-label-sm font-mono text-outline-variant uppercase mt-1">Mins</div>
          </div>
          {/* Seconds */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-tertiary tracking-wider font-extrabold">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-label-sm font-mono text-outline-variant uppercase mt-1">Secs</div>
          </div>
        </div>
      </div>

      {/* Action Button Group */}
      <div className="mt-6 sm:mt-space-lg flex flex-col sm:flex-row items-center gap-3 sm:gap-space-md w-full sm:w-auto">
        <button
          onClick={() => {
            soundFx.playAlarm();
            onOpenRegisterModal();
          }}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-primary-container text-surface-container-lowest font-mono font-bold text-xs sm:text-sm tracking-wider uppercase border border-primary-container rounded pulse-glow-crimson hover:bg-primary hover:text-on-primary transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95"
        >
          <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>REGISTER ON UNSTOP</span>
        </button>

        <a
          href="#case-file"
          onClick={() => soundFx.playBeep(520, 0.1)}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-surface-container-low text-secondary border border-secondary-container/50 font-mono font-medium text-xs sm:text-sm tracking-wider uppercase rounded hover:bg-surface-container hover:border-secondary-container transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Terminal className="w-4 h-4 text-secondary-container" />
          <span>ACCESS CRIME DOSSIER</span>
        </a>
      </div>

      {/* Forensic Telemetry Stats Bar */}
      <div className="mt-8 sm:mt-space-xl w-full grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl">
        <div className="p-3 sm:p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-secondary-container transition-colors">
          <div className="text-[10px] sm:text-label-sm font-mono text-outline uppercase tracking-wider mb-1">// SCORE MATRIX</div>
          <div className="text-lg sm:text-2xl md:text-headline-md font-headline-md text-secondary tracking-tight">4,500</div>
          <div className="text-[11px] sm:text-body-sm text-on-surface-variant">Total Forensic Points</div>
        </div>

        <div className="p-3 sm:p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-primary-container transition-colors">
          <div className="text-[10px] sm:text-label-sm font-mono text-outline uppercase tracking-wider mb-1">// FORMAT</div>
          <div className="text-lg sm:text-2xl md:text-headline-md font-headline-md text-primary tracking-tight">2 Rounds</div>
          <div className="text-[11px] sm:text-body-sm text-on-surface-variant">Case File ➔ CTF Challenge</div>
        </div>

        <div className="p-3 sm:p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-tertiary transition-colors">
          <div className="text-[10px] sm:text-label-sm font-mono text-outline uppercase tracking-wider mb-1">// REWARD MATRIX</div>
          <div className="text-lg sm:text-2xl md:text-headline-md font-headline-md text-tertiary tracking-tight">₹15,000</div>
          <div className="text-[11px] sm:text-body-sm text-on-surface-variant">Cash &amp; Bounty Pool</div>
        </div>

        <div className="p-3 sm:p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-secondary-container transition-colors">
          <div className="text-[10px] sm:text-label-sm font-mono text-outline uppercase tracking-wider mb-1">// SQUAD SIZE</div>
          <div className="text-lg sm:text-2xl md:text-headline-md font-headline-md text-on-surface tracking-tight">2 - 4 Agents</div>
          <div className="text-[11px] sm:text-body-sm text-on-surface-variant">₹120 Entry Per Squad</div>
        </div>
      </div>

    </section>
  );
};
