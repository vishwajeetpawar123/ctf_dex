import React, { useState, useEffect } from 'react';
import { Fingerprint, X, ShieldAlert, Timer, Lock, AlertTriangle } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';
import { EVENT_CONFIG } from '../data/eventData';

interface SuspectCardData {
  id: string;
  num: string;
  name: string;
  role: string;
  status: string;
  statusColor: string;
  motive: string;
  evidence: string;
  quote: string;
}

export const SuspectsGrid: React.FC = () => {
  const [selectedSuspect, setSelectedSuspect] = useState<SuspectCardData | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(EVENT_CONFIG.targetDate).getTime();
    const calculateTime = () => {
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
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const suspects: SuspectCardData[] = [
    {
      id: "s1",
      num: "01",
      name: "???",
      role: "REDACTED // PERSON 01",
      status: "CLASSIFIED",
      statusColor: "bg-tertiary/10 border-tertiary text-tertiary",
      motive: "CLASSIFIED // Encrypted dossier chunk locked until Oct 26 reveal.",
      evidence: "Physical evidence sealed in evidence vault #1.",
      quote: "Dossier encrypted with AES-256 cipher. Identity will be exposed on October 26."
    },
    {
      id: "s2",
      num: "02",
      name: "???",
      role: "REDACTED // PERSON 02",
      status: "CLASSIFIED",
      statusColor: "bg-primary-container/20 border-primary-container text-primary",
      motive: "CLASSIFIED // Encrypted dossier chunk locked until Oct 26 reveal.",
      evidence: "Physical evidence sealed in evidence vault #2.",
      quote: "Dossier encrypted with AES-256 cipher. Identity will be exposed on October 26."
    },
    {
      id: "s3",
      num: "03",
      name: "???",
      role: "REDACTED // PERSON 03",
      status: "CLASSIFIED",
      statusColor: "bg-tertiary/10 border-tertiary text-tertiary",
      motive: "CLASSIFIED // Encrypted dossier chunk locked until Oct 26 reveal.",
      evidence: "Physical evidence sealed in evidence vault #3.",
      quote: "Dossier encrypted with AES-256 cipher. Identity will be exposed on October 26."
    },
    {
      id: "s4",
      num: "04",
      name: "???",
      role: "REDACTED // PERSON 04",
      status: "CLASSIFIED",
      statusColor: "bg-tertiary/10 border-tertiary text-tertiary",
      motive: "CLASSIFIED // Encrypted dossier chunk locked until Oct 26 reveal.",
      evidence: "Physical evidence sealed in evidence vault #4.",
      quote: "Dossier encrypted with AES-256 cipher. Identity will be exposed on October 26."
    },
    {
      id: "s5",
      num: "05",
      name: "???",
      role: "REDACTED // PERSON 05",
      status: "CLASSIFIED",
      statusColor: "bg-primary-container/20 border-primary-container text-primary",
      motive: "CLASSIFIED // Encrypted dossier chunk locked until Oct 26 reveal.",
      evidence: "Physical evidence sealed in evidence vault #5.",
      quote: "Dossier encrypted with AES-256 cipher. Identity will be exposed on October 26."
    },
    {
      id: "s6",
      num: "06",
      name: "???",
      role: "REDACTED // PERSON 06",
      status: "CLASSIFIED",
      statusColor: "bg-primary-container/20 border-primary-container text-primary",
      motive: "CLASSIFIED // Encrypted dossier chunk locked until Oct 26 reveal.",
      evidence: "Physical evidence sealed in evidence vault #6.",
      quote: "Dossier encrypted with AES-256 cipher. Identity will be exposed on October 26."
    }
  ];

  const handleInspect = (s: SuspectCardData) => {
    soundFx.playBeep(740, 0.08);
    setSelectedSuspect(s);
  };

  return (
    <section className="py-space-xl px-space-md lg:px-margin max-w-7xl mx-auto border-t border-outline-variant/40" id="suspects-dossier">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-space-lg gap-2 sm:gap-4">
        <div>
          <div className="text-[10px] sm:text-label-sm font-label-sm text-primary uppercase tracking-widest font-mono flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span>// TOP SECRET PERSONS OF INTEREST</span>
          </div>
          <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface uppercase mt-1 leading-tight">
            6 SUSPECTS <span className="text-primary-container">(???)</span>
          </h2>
        </div>
        <div className="text-[11px] sm:text-label-sm font-mono text-outline-variant">
          STATUS: ENCRYPTED // EXPOSING LIVE DOSSIERS ON OCT 26
        </div>
      </div>

      {/* Prominent Reveal Countdown Banner */}
      <div className="mb-8 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low border-2 border-primary-container/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 pointer-events-none"></div>
        <div className="flex items-center gap-3.5 text-left w-full md:w-auto">
          <div className="w-12 h-12 rounded-lg bg-primary-container/20 border border-primary-container flex items-center justify-center shrink-0">
            <Timer className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-label-sm font-mono font-bold text-primary tracking-widest uppercase">
                SUSPECT IDENTITIES LOCKED
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-primary-container text-white">
                SECRET
              </span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant font-mono mt-0.5">
              All 6 primary suspect dossiers are held in encrypted isolation. Full identities will be exposed on October 26 night.
            </p>
          </div>
        </div>

        {/* Live Reveal Countdown Clock */}
        <div className="flex items-center gap-2 sm:gap-3 bg-surface-container-lowest/80 border border-outline-variant/80 px-4 py-2.5 rounded-lg shrink-0 w-full md:w-auto justify-center">
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl font-mono font-black text-on-surface leading-none">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-mono text-outline uppercase tracking-wider">DAYS</span>
          </div>
          <span className="text-primary font-mono font-bold text-lg -mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl font-mono font-black text-on-surface leading-none">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-mono text-outline uppercase tracking-wider">HRS</span>
          </div>
          <span className="text-primary font-mono font-bold text-lg -mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl font-mono font-black text-on-surface leading-none">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-mono text-outline uppercase tracking-wider">MIN</span>
          </div>
          <span className="text-primary font-mono font-bold text-lg -mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl font-mono font-black text-primary leading-none animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-mono text-outline uppercase tracking-wider">SEC</span>
          </div>
        </div>
      </div>

      {/* 6 Suspects Bento Grid with ??? Redaction Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {suspects.map((suspect) => (
          <div
            key={suspect.id}
            className="bg-surface-container-low border border-outline-variant hover:border-primary-container/80 p-space-md rounded-lg flex flex-col justify-between transition-all duration-200 group relative"
          >
            <div>
              <div className="flex items-center justify-between text-label-sm font-label-sm mb-3">
                <span className="text-outline font-mono">SUSPECT #{suspect.num}</span>
                <span className={`px-2 py-0.5 border rounded text-[10px] font-bold ${suspect.statusColor}`}>
                  {suspect.status}
                </span>
              </div>

              {/* Question Mark Avatar Frame */}
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-16 h-16 rounded bg-surface-container-lowest border-2 border-outline-variant group-hover:border-primary-container/80 flex flex-col items-center justify-center shrink-0 relative overflow-hidden transition-all duration-300 shadow-inner">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                  <span className="text-3xl font-mono font-black text-primary/80 group-hover:text-primary transition-colors tracking-tight select-none">
                    ???
                  </span>
                  <span className="text-[7px] font-mono text-outline uppercase tracking-wider font-bold">
                    LOCKED
                  </span>
                </div>
                
                <div>
                  <h3 className="text-headline-md font-headline-md text-on-surface leading-tight font-mono tracking-wider">
                    {suspect.name}
                  </h3>
                  <div className="text-label-sm font-label-sm text-secondary font-mono mt-0.5">
                    {suspect.role}
                  </div>
                </div>
              </div>

              {/* Motive & Clue Sealed Notice */}
              <div className="text-body-sm font-body-sm text-on-surface-variant space-y-1.5 text-xs">
                <p className="font-mono text-outline-variant">
                  <strong className="text-on-surface">Motive:</strong> [FILE ENCRYPTED — UNLOCKS OCT 26]
                </p>
                <p className="font-mono text-outline-variant">
                  <strong className="text-on-surface">Evidence Lead:</strong> [EVIDENCE VAULT SEALED]
                </p>
              </div>
            </div>

            {/* Inspect Button */}
            <button
              onClick={() => handleInspect(suspect)}
              className="mt-4 w-full py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-label-sm font-label-sm text-on-surface tracking-wider uppercase rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:border-primary-container"
            >
              <Fingerprint className="w-3.5 h-3.5 text-primary" />
              <span>INSPECT SEALED FILE</span>
            </button>
          </div>
        ))}
      </div>

      {/* Selected Suspect Modal - Redacted Dossier View */}
      {selectedSuspect && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-surface-container-low border-2 border-primary-container max-w-xl w-full rounded-xl p-4 sm:p-7 shadow-2xl relative animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedSuspect(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Subtitle */}
            <div className="flex items-center gap-2 text-[11px] sm:text-label-sm font-label-sm text-primary uppercase mb-3 font-mono">
              <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span>CLASSIFIED DOSSIER // SUSPECT #{selectedSuspect.num}</span>
            </div>

            {/* Suspect Header with Question Mark Placeholder */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 pb-4 border-b border-outline-variant">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-surface-container-lowest border-2 border-primary-container flex flex-col items-center justify-center shrink-0 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-primary-container/10"></div>
                <span className="text-2xl sm:text-3xl font-mono font-black text-primary select-none">???</span>
                <span className="text-[7px] sm:text-[8px] font-mono text-outline uppercase tracking-widest font-bold mt-0.5">
                  REDACTED
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-headline-lg font-headline-lg text-on-surface uppercase leading-tight truncate font-mono">
                  SUSPECT #{selectedSuspect.num}: ???
                </h3>
                <div className="text-xs sm:text-label-md font-mono text-secondary truncate">
                  IDENTITY ENCRYPTED UNTIL OCT 26
                </div>
                <span className={`inline-block mt-1 sm:mt-1.5 px-2 py-0.5 rounded text-[10px] font-bold border ${selectedSuspect.statusColor}`}>
                  LOCKED DOSSIER
                </span>
              </div>
            </div>

            {/* Notice */}
            <div className="p-3 bg-surface-container-lowest rounded border-l-4 border-primary-container mb-4 text-on-surface font-mono text-xs">
              <div className="flex items-center gap-2 text-primary font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-primary" />
                <span>DOSSIER EXPOSURE IN PROGRESS</span>
              </div>
              All 6 primary suspect records are held under tight confidentiality. The identities and challenge leads will be revealed once registration wraps up on October 26 night.
            </div>

            {/* High Level Case Intel */}
            <div className="space-y-2.5 mb-5 text-body-sm font-body-sm text-on-surface-variant text-xs">
              <div className="p-3 bg-surface-container-lowest rounded border border-outline-variant font-mono">
                <strong className="text-on-surface block text-xs uppercase font-mono text-outline mb-0.5">Dossier State:</strong>
                AES-256 encrypted payload. Master key scheduled for publication on October 26.
              </div>
              <div className="p-3 bg-surface-container-lowest rounded border border-outline-variant font-mono">
                <strong className="text-on-surface block text-xs uppercase font-mono text-outline mb-0.5">Physical Evidence:</strong>
                Seized by MSOC Cyber Forensics Investigation Squad. Stored under custody.
              </div>
            </div>

            <button
              onClick={() => setSelectedSuspect(null)}
              className="w-full py-2.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface font-label-md font-bold uppercase rounded text-xs transition-colors font-mono cursor-pointer"
            >
              ACKNOWLEDGE &amp; CLOSE
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
