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
    <section className="relative pt-space-xl pb-24 px-space-md lg:px-margin max-w-7xl mx-auto flex flex-col items-center text-center" id="hero">
      
      {/* Top Classification Tag from Stitch */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-space-md bg-surface-container border border-primary-container/40 rounded text-label-sm font-label-sm text-primary uppercase tracking-widest">
        <Lock className="w-3.5 h-3.5 text-primary" />
        <span>// CASE FILE: 2025-ZERO-HOUR // TOP SECRET CLEARANCE LEVEL 4</span>
      </div>

      {/* Main Headline with Forensic Glitch Vibe from Stitch */}
      <h1 className="text-headline-xl font-headline-xl uppercase text-on-surface tracking-tight max-w-5xl leading-none">
        CID CTF:{" "}
        <span className="text-primary-container underline decoration-secondary-container decoration-wavy decoration-2">
          OPERATION ZERO HOUR
        </span>
      </h1>

      {/* Narrative Lead Pitch from Stitch */}
      <p className="mt-space-md max-w-3xl text-body-lg font-body-lg text-on-surface-variant font-light">
        A Tech Tycoon Murdered at <span className="text-primary font-label-md font-bold">00:05</span>.{" "}
        <span className="text-secondary font-label-md font-bold">₹47 Crore Laundered</span>.{" "}
        <span className="text-tertiary font-label-md font-bold">6 Suspects</span>.{" "}
        The Evidence is Encrypted in the RAM. Can your squad reconstruct the breach before time runs out?
      </p>

      {/* Digital Countdown Flip-Style Matrix from Stitch */}
      <div className="mt-space-xl w-full max-w-2xl bg-surface-container-low border border-outline-variant p-space-md rounded-lg shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary-container to-tertiary"></div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-outline-variant/60 text-label-sm font-label-sm">
          <span className="flex items-center gap-1.5 text-primary font-semibold">
            <Timer className="w-3.5 h-3.5 text-primary" />
            <span>REGISTRATION CLOSING SOON</span>
          </span>
          <span className="text-outline uppercase tracking-wider">EVENT BOOT: ROUND 1 & 2</span>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center font-mono">
          {/* Days */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-headline-lg font-headline-lg text-primary tracking-wider font-extrabold">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-label-sm font-label-sm text-outline-variant uppercase mt-1">Days</div>
          </div>
          {/* Hours */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-headline-lg font-headline-lg text-secondary tracking-wider font-extrabold">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-label-sm font-label-sm text-outline-variant uppercase mt-1">Hours</div>
          </div>
          {/* Minutes */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-headline-lg font-headline-lg text-on-surface tracking-wider font-extrabold">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-label-sm font-label-sm text-outline-variant uppercase mt-1">Mins</div>
          </div>
          {/* Seconds */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 p-2 sm:p-3 rounded">
            <div className="text-headline-lg font-headline-lg text-tertiary tracking-wider font-extrabold">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-label-sm font-label-sm text-outline-variant uppercase mt-1">Secs</div>
          </div>
        </div>
      </div>

      {/* Action Button Group from Stitch */}
      <div className="mt-space-lg flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
        <button
          onClick={() => {
            soundFx.playAlarm();
            onOpenRegisterModal();
          }}
          className="w-full sm:w-auto px-8 py-3.5 bg-primary-container text-surface-container-lowest font-label-lg font-bold tracking-wider uppercase border border-primary-container rounded pulse-glow-crimson hover:bg-primary hover:text-on-primary transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95"
        >
          <UserCheck className="w-5 h-5" />
          <span>REGISTER ON UNSTOP</span>
        </button>

        <a
          href="#case-file"
          onClick={() => soundFx.playBeep(520, 0.1)}
          className="w-full sm:w-auto px-8 py-3.5 bg-surface-container-low text-secondary border border-secondary-container/50 font-label-lg font-medium tracking-wider uppercase rounded hover:bg-surface-container hover:border-secondary-container transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Terminal className="w-4 h-4 text-secondary-container" />
          <span>ACCESS CRIME DOSSIER</span>
        </a>
      </div>

      {/* Forensic Telemetry Stats Bar from Stitch */}
      <div className="mt-space-xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
        <div className="p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-secondary-container transition-colors">
          <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider mb-1">// SCORE MATRIX</div>
          <div className="text-headline-md font-headline-md text-secondary tracking-tight">4,500</div>
          <div className="text-body-sm font-body-sm text-on-surface-variant">Total Forensic Points</div>
        </div>

        <div className="p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-primary-container transition-colors">
          <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider mb-1">// FORMAT</div>
          <div className="text-headline-md font-headline-md text-primary tracking-tight">2 Rounds</div>
          <div className="text-body-sm font-body-sm text-on-surface-variant">Case File ➔ CTF Challenge</div>
        </div>

        <div className="p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-tertiary transition-colors">
          <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider mb-1">// REWARD MATRIX</div>
          <div className="text-headline-md font-headline-md text-tertiary tracking-tight">₹50,000+</div>
          <div className="text-body-sm font-body-sm text-on-surface-variant">Cash &amp; Bounty Pool</div>
        </div>

        <div className="p-4 bg-surface-container-low/80 border border-outline-variant/60 rounded text-left relative overflow-hidden group hover:border-secondary-container transition-colors">
          <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider mb-1">// UNIT FORMATION</div>
          <div className="text-headline-md font-headline-md text-on-surface tracking-tight">1 - 4 Agents</div>
          <div className="text-body-sm font-body-sm text-on-surface-variant">Per Squad / Division</div>
        </div>
      </div>

    </section>
  );
};
