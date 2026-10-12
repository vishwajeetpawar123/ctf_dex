import React, { useState } from 'react';
import { Fingerprint, X, ShieldAlert, FileSearch, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

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

  const suspects: SuspectCardData[] = [
    {
      id: "s1",
      num: "01",
      name: "Riya Sharma",
      role: "The Executive Secretary",
      status: "INTERROGATED",
      statusColor: "bg-tertiary/10 border-tertiary text-tertiary",
      motive: "Threatened by discovery of secret blackmail records & private memos.",
      evidence: "Encrypted burner device & wiped messaging logs.",
      quote: "I only saved what I needed to protect myself. Vikram wasn't innocent."
    },
    {
      id: "s2",
      num: "02",
      name: "Arjun Kapoor",
      role: "Co-Founder & CFO",
      status: "ON THE RUN",
      statusColor: "bg-primary-container/20 border-primary-container text-primary",
      motive: "Hostile takeover after siphoning ₹47 Crore into offshore Cayman accounts.",
      evidence: "Corrupted corporate ledger hashes & split PGP private keys.",
      quote: "It wasn't murder. It was an involuntary corporate restructuring."
    },
    {
      id: "s3",
      num: "03",
      name: "Meera Desai",
      role: "The Estranged Ex-Wife",
      status: "SURVEILLANCE",
      statusColor: "bg-tertiary/10 border-tertiary text-tertiary",
      motive: "Disinherited from victim's ₹300 Crore private estate.",
      evidence: "Dark Web escrow transaction timestamped 48 hours before the homicide.",
      quote: "Hell hath no fury like someone stripped of everything by corporate lawyers."
    },
    {
      id: "s4",
      num: "04",
      name: "Karan Singh",
      role: "Chief of Security",
      status: "INTERROGATED",
      statusColor: "bg-tertiary/10 border-tertiary text-tertiary",
      motive: "Large anonymous wire transfer received prior to incident.",
      evidence: "7 minutes of looped CCTV footage on penthouse camera feeds.",
      quote: "I was paid to protect him. Somebody else offered ten times more to look away."
    },
    {
      id: "s5",
      num: "05",
      name: "Devraj Patel",
      role: "The Rogue Contractor",
      status: "FUGITIVE",
      statusColor: "bg-primary-container/20 border-primary-container text-primary",
      motive: "Triggered dead man's switch over proprietary source code theft.",
      evidence: "Ransomware injector script & reverse shell hidden in penthouse server.",
      quote: "Nothing is impenetrable. It only took three lines of bash to bypass his perimeter."
    },
    {
      id: "s6",
      num: "06",
      name: "Commissioner Rao",
      role: "The Inside Mole",
      status: "PRIME TARGET",
      statusColor: "bg-primary-container/20 border-primary-container text-primary",
      motive: "Covering up high-level vendor kickbacks and surveillance bribes.",
      evidence: "Expunged police dispatch audio archives from midnight.",
      quote: "The easiest way to close a murder is ensuring nobody ever looks in the right direction."
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
          <div className="text-[10px] sm:text-label-sm font-label-sm text-primary uppercase tracking-widest font-mono">// PERSONS OF INTEREST</div>
          <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface uppercase mt-1 leading-tight">6 PRIMARY SUSPECTS</h2>
        </div>
        <div className="text-[11px] sm:text-label-sm font-mono text-outline-variant">
          STATUS: CLASSIFIED // INVESTIGATE CLUES IN ROUND 1 TO INFILTRATE IN ROUND 2
        </div>
      </div>

      {/* 6 Suspects Bento Grid with Question Mark Placeholders */}
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
                    ?
                  </span>
                  <span className="text-[7px] font-mono text-outline uppercase tracking-wider font-bold">
                    CLASSIFIED
                  </span>
                </div>
                
                <div>
                  <h3 className="text-headline-md font-headline-md text-on-surface leading-tight">{suspect.name}</h3>
                  <div className="text-label-sm font-label-sm text-secondary font-mono mt-0.5">{suspect.role}</div>
                </div>
              </div>

              {/* Concise Motive & Key Clue */}
              <div className="text-body-sm font-body-sm text-on-surface-variant space-y-1.5 text-xs">
                <p><strong className="text-on-surface">Motive:</strong> {suspect.motive}</p>
                <p><strong className="text-on-surface">Key Lead:</strong> {suspect.evidence}</p>
              </div>
            </div>

            {/* Inspect Button */}
            <button
              onClick={() => handleInspect(suspect)}
              className="mt-4 w-full py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-label-sm font-label-sm text-on-surface tracking-wider uppercase rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:border-primary-container"
            >
              <Fingerprint className="w-3.5 h-3.5 text-primary" />
              <span>VIEW DOSSIER TEASER</span>
            </button>
          </div>
        ))}
      </div>

      {/* Selected Suspect Modal - Concise High-Level Overview */}
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
                <span className="text-3xl sm:text-4xl font-mono font-black text-primary select-none">?</span>
                <span className="text-[7px] sm:text-[8px] font-mono text-outline uppercase tracking-widest font-bold mt-0.5">
                  REDACTED
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-headline-lg font-headline-lg text-on-surface uppercase leading-tight truncate">
                  {selectedSuspect.name}
                </h3>
                <div className="text-xs sm:text-label-md font-mono text-secondary truncate">
                  {selectedSuspect.role}
                </div>
                <span className={`inline-block mt-1 sm:mt-1.5 px-2 py-0.5 rounded text-[10px] font-bold border ${selectedSuspect.statusColor}`}>
                  {selectedSuspect.status}
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="p-3 bg-surface-container-lowest rounded border-l-4 border-primary-container mb-4 italic text-on-surface font-body-sm text-xs">
              "{selectedSuspect.quote}"
            </div>

            {/* High Level Case Intel */}
            <div className="space-y-2.5 mb-5 text-body-sm font-body-sm text-on-surface-variant text-xs">
              <div className="p-3 bg-surface-container-lowest rounded border border-outline-variant">
                <strong className="text-on-surface block text-xs uppercase font-mono text-outline mb-0.5">Primary Motive:</strong>
                {selectedSuspect.motive}
              </div>
              <div className="p-3 bg-surface-container-lowest rounded border border-outline-variant">
                <strong className="text-on-surface block text-xs uppercase font-mono text-outline mb-0.5">Seized Physical Clue:</strong>
                {selectedSuspect.evidence}
              </div>
            </div>

            <button
              onClick={() => setSelectedSuspect(null)}
              className="w-full py-2.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface font-label-md font-bold uppercase rounded text-xs transition-colors"
            >
              CLOSE DOSSIER
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
