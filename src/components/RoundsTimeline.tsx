import React from 'react';
import { Search, Terminal, ArrowRight, Stars, ChevronRight, Trophy, Zap } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

interface RoundsTimelineProps {
  onOpenRegisterModal: () => void;
}

export const RoundsTimeline: React.FC<RoundsTimelineProps> = ({ onOpenRegisterModal }) => {
  const round1Skills = ["OSINT", "Critical Thinking", "Google Dorking", "Wikipedia Deep-Dive", "Timeline Verification"];
  const round1Flow = ["Real Case File", "OSINT Recon", "Uncover Clues", "10-Pt Conclusion", "Rubric Scoring", "Advance to CTF"];

  const round2Skills = ["Digital Forensics", "Cryptography", "Web Security", "Reverse Engineering"];
  const round2Flow = ["Infiltrate Systems", "Exploit Clues", "Capture Flags", "Unmask Culprit"];

  return (
    <section className="py-space-xl px-space-md lg:px-margin max-w-7xl mx-auto" id="tournament-architecture">
      
      {/* Header */}
      <div className="mb-6 sm:mb-space-lg text-center max-w-3xl mx-auto">
        <div className="text-[10px] sm:text-label-sm font-label-sm text-secondary uppercase tracking-widest font-mono">
          // TOURNAMENT ARCHITECTURE
        </div>
        <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface uppercase mt-1 leading-tight">
          THE TWO-STAGE PROGRESSION
        </h2>
        
        {/* Progression Pill - Wraps smoothly on small mobile */}
        <div className="mt-3.5 flex flex-wrap sm:inline-flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-xl sm:rounded-full bg-surface-container border border-outline-variant text-[11px] sm:text-label-sm font-mono shadow-md max-w-full">
          <span className="text-secondary flex items-center gap-1.5 font-bold">
            🌐 ROUND 1: OSINT QUALIFIER
          </span>
          <span className="text-outline-variant font-bold">➔</span>
          <span className="text-primary flex items-center gap-1.5 font-bold">
            💻 ROUND 2: CYBER CRIME CTF
          </span>
        </div>

        <p className="text-xs sm:text-body-md font-body-md text-on-surface-variant mt-3 text-sm px-2 sm:px-0">
          Solve real-world mystery case files through open-source intelligence in <strong className="text-secondary font-bold">Round 1 (OSINT)</strong> to earn entry into the flagship <strong className="text-primary font-bold">Round 2 (CTF Mainframe)</strong>.
        </p>
      </div>

      {/* 2 Equal High-Level Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg items-stretch">
        
        {/* ROUND 1 CARD (round_1.txt) */}
        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-space-md sm:p-space-lg flex flex-col justify-between relative overflow-hidden group hover:border-secondary-container transition-all">
          <div className="absolute top-0 right-0 bg-secondary-container/10 border-b border-l border-secondary-container px-3 py-1 text-label-sm font-label-sm text-secondary uppercase font-bold font-mono">
            PHASE 01 // OSINT QUALIFIER
          </div>

          <div>
            {/* Header Badge & Title */}
            <div className="flex items-center gap-3 mb-space-sm mt-2">
              <div className="w-11 h-11 rounded bg-secondary-container/20 border border-secondary-container flex items-center justify-center text-secondary shrink-0">
                <Search className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-label-sm font-label-sm text-secondary uppercase font-mono text-xs">
                  ROUND 1 — THE OSINT INVESTIGATION
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface leading-tight text-xl">
                  REAL-LIFE CASE FILES (OSINT)
                </h3>
              </div>
            </div>

            {/* Poster Tagline */}
            <div className="p-3 bg-surface-container-lowest rounded-lg border border-secondary-container/30 my-space-md">
              <p className="text-sm font-mono text-secondary-fixed font-bold leading-snug">
                "Famous Cases. Open Intelligence. 10-Point Deduction."
              </p>
              <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                Investigate famous, publicly documented real-world case files (e.g. <span className="text-secondary font-semibold">Death of Sushant Singh Rajput</span> or <span className="text-secondary font-semibold">Princess Diana</span>). Scour Google, Wikipedia, media logs &amp; public records to form your theory and submit a <strong>10-point conclusion</strong> cross-verified against benchmark rubrics. Top scorers advance to the CTF!
              </p>
            </div>

            {/* Evaluated Skills */}
            <div className="mb-4">
              <span className="text-[11px] font-mono text-outline block uppercase tracking-wider mb-2">
                Core OSINT Skills:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {round1Skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-surface-container border border-secondary-container/30 text-secondary font-mono text-xs font-semibold"
                  >
                    • {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights bullets */}
            <div className="mb-4 p-3 bg-surface-container-lowest/60 rounded border border-outline-variant/60 text-xs text-on-surface-variant space-y-1.5 font-mono">
              <div className="flex items-start gap-2">
                <span className="text-secondary font-bold">📁</span>
                <span><strong className="text-on-surface">Real-Life Cases:</strong> Publicly available famous case dossiers provided.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary font-bold">📝</span>
                <span><strong className="text-on-surface">10-Point Conclusion:</strong> Submit a 10-point forensic synthesis of findings &amp; theory.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary font-bold">⚖️</span>
                <span><strong className="text-on-surface">Rubric Verification:</strong> Evaluated &amp; cross-verified against benchmark conclusions.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary font-bold">🎯</span>
                <span><strong className="text-on-surface">CTF Progression:</strong> Highest scoring teams advance directly to Round 2 CTF.</span>
              </div>
            </div>

            {/* Round 1 Flow */}
            <div className="mb-4 p-3 bg-surface-container-lowest rounded border border-outline-variant font-mono">
              <span className="text-[10px] text-outline block uppercase tracking-wider mb-1.5">
                Round 1 Flow:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-on-surface">
                {round1Flow.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-bold text-[11px]">
                      {step}
                    </span>
                    {idx < round1Flow.length - 1 && (
                      <span className="text-outline text-xs">➔</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Trigger */}
          <div className="mt-space-md pt-3.5 border-t border-outline-variant flex items-center justify-between text-label-sm font-label-sm">
            <span className="text-outline font-mono text-xs">STAGE: OSINT QUALIFIER</span>
            <button
              onClick={() => {
                soundFx.playAlarm();
                onOpenRegisterModal();
              }}
              className="text-secondary flex items-center gap-1 font-bold hover:underline cursor-pointer text-xs"
            >
              <span>REGISTER SQUAD</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ROUND 2 CARD (ctf_challenge_round_2.md) */}
        <div className="bg-surface-container-low border-2 border-primary-container rounded-xl p-space-md sm:p-space-lg flex flex-col justify-between relative overflow-hidden pulse-glow-crimson group">
          <div className="absolute top-0 right-0 bg-primary-container text-surface-container-lowest px-3 py-1 text-label-sm font-label-sm font-bold uppercase tracking-wider font-mono">
            PHASE 02 // THE CTF
          </div>

          <div>
            {/* Header Badge & Title */}
            <div className="flex items-center gap-3 mb-space-sm mt-2">
              <div className="w-11 h-11 rounded bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary shrink-0">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-label-sm font-label-sm text-primary uppercase font-mono text-xs">
                  ROUND 2 — THE CTF CHALLENGE
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface leading-tight text-xl">
                  CYBER WARFARE ARENA
                </h3>
              </div>
            </div>

            {/* Poster Tagline */}
            <div className="p-3 bg-surface-container-lowest rounded-lg border border-primary-container/40 my-space-md">
              <p className="text-sm font-mono text-primary font-bold leading-snug">
                "Hack the mainframe. Unmask the mastermind."
              </p>
              <p className="text-xs text-on-surface-variant mt-1">
                Shortlisted squads penetrate 6 suspect systems to recover cryptographic keys, decrypt RAM artifacts, and catch the killer.
              </p>
            </div>

            {/* Technical Vectors */}
            <div className="mb-4">
              <span className="text-[11px] font-mono text-outline block uppercase tracking-wider mb-2">
                Challenge Domains:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {round2Skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-surface-container border border-primary-container/30 text-primary font-mono text-xs font-semibold"
                  >
                    • {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Round 2 Flow */}
            <div className="mb-4 p-3 bg-surface-container-lowest rounded border border-outline-variant font-mono">
              <span className="text-[10px] text-outline block uppercase tracking-wider mb-1.5">
                Round 2 Flow:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-on-surface">
                {round2Flow.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-bold text-[11px]">
                      {step}
                    </span>
                    {idx < round2Flow.length - 1 && (
                      <span className="text-outline text-xs">➔</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Trigger */}
          <div className="mt-space-md pt-3.5 border-t border-outline-variant flex items-center justify-between text-label-sm font-label-sm">
            <span className="text-outline font-mono text-xs">₹15,000 BOUNTY POOL</span>
            <button
              onClick={() => {
                soundFx.playAlarm();
                onOpenRegisterModal();
              }}
              className="text-primary flex items-center gap-1 font-bold hover:underline cursor-pointer text-xs"
            >
              <span>CLAIM SPOT</span>
              <Stars className="w-3.5 h-3.5 text-primary" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
