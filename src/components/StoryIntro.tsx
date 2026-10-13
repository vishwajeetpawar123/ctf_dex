import React, { useState } from 'react';
import { FileText, Clock, MapPin, AlertOctagon, Terminal, Play, CheckCircle } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';
import { soundFx } from '../utils/audioEffects';

export const StoryIntro: React.FC = () => {
  const [activeLog, setActiveLog] = useState<number>(2);

  const timelineLogs = [
    {
      time: "21:30 IST",
      label: "Bodyguard Departs",
      detail: "Karan Singh leaves the Malhotra residence in a black SUV. GPS tracker indicates movement towards Bandra.",
      status: "VERIFIED"
    },
    {
      time: "21:47 IST",
      label: "Flat 402 Cyber Heights",
      detail: "Karan enters the apartment of Devraj Patel (The Ghost Hacker). Intercepted audio confirms payload handover.",
      status: "INTERCEPTED"
    },
    {
      time: "23:47 IST",
      label: "CCTV Kill Switch Triggered",
      detail: "Penthouse 42 internal surveillance goes dark for exactly 18 minutes. Magnetic lock fail-safes bypassed remotely.",
      status: "CRITICAL BREACH"
    },
    {
      time: "01:09 PM IST",
      label: "💀 Estimated Time of Death",
      detail: "Vikram Malhotra found collapsed in his private terminal room. Cyanide trace in glass. Primary hard drive wiped with DBAN.",
      status: "HOMICIDE"
    },
    {
      time: "01:15 IST",
      label: "Burner Phone Discarded",
      detail: "Riya Sharma attempts to purge encrypted WhatsApp backups and drops her burner phone into the disposal chute.",
      status: "EVIDENCE SEIZED"
    }
  ];

  return (
    <section id="incident-log" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-void-700/60">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-void-800 border border-void-600 rounded text-xs font-mono text-cyan uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5 text-cyan" />
          <span>POLICE DOSSIER // CRIME SCENE BRIEFING</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-headline text-white uppercase tracking-tight">
          THE MALHOTRA <span className="text-crimson">HOMICIDE</span>
        </h2>
        <p className="max-w-2xl text-gray-400 text-sm sm:text-base mt-3">
          Every file is an authentic piece of forensic evidence. As your squad solves flags, the conspiracy unravels from the penthouse to the police headquarters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Victim Profile Card */}
        <div className="lg:col-span-5 bg-void-900 border border-void-600 rounded-lg overflow-hidden shadow-2xl relative">
          <div className="bg-void-800/80 px-4 py-3 border-b border-void-700 flex items-center justify-between font-mono text-xs">
            <span className="text-crimson font-bold flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-crimson" />
              DECEASED PERSON RECORD
            </span>
            <span className="text-gray-400">ID: #VM-9921</span>
          </div>

          <div className="p-6">
            <div className="relative mb-6 rounded overflow-hidden border-2 border-crimson/40 bg-void-950 flex items-center justify-center">
              <img
                src="/assets/vikram.jpeg"
                alt="Vikram Malhotra"
                className="w-full h-64 object-cover filter contrast-125 brightness-90 grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Fallback placeholder if image not found
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-crimson text-black font-mono font-bold text-[10px] tracking-wider uppercase">
                DECEASED // TOD 01:09 PM
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-void-950 p-3 pt-8 text-xs font-mono text-gray-300">
                Found in Penthouse 42 Private Study
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-void-800 pb-2">
                <span className="text-gray-400">VICTIM NAME:</span>
                <span className="text-white font-bold">Vikram Malhotra (46)</span>
              </div>
              <div className="flex justify-between border-b border-void-800 pb-2">
                <span className="text-gray-400">DESIGNATION:</span>
                <span className="text-cyan font-bold">Founder, Malhotra Cyber Dynamics</span>
              </div>
              <div className="flex justify-between border-b border-void-800 pb-2">
                <span className="text-gray-400">ESTIMATED ASSETS:</span>
                <span className="text-amber font-bold">₹120+ Crore (₹47Cr Missing)</span>
              </div>
              <div className="flex justify-between border-b border-void-800 pb-2">
                <span className="text-gray-400">PRIMARY INVESTIGATOR:</span>
                <span className="text-crimson font-bold">Commissioner Rao (CID)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-gray-400">CAUSE OF INCIDENT:</span>
                <span className="text-gray-200">Digital Lock Override + Chemical Toxin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Murder Night Timeline */}
        <div className="lg:col-span-7 bg-void-900 border border-void-600 rounded-lg p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-void-700 pb-3 mb-6 font-mono text-xs">
            <span className="text-cyan font-bold flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan" />
              TIMELINE RECONSTRUCTION (OCTOBER 13-14)
            </span>
            <span className="text-gray-400">5 KEY INCIDENTS</span>
          </div>

          <div className="space-y-4">
            {timelineLogs.map((log, index) => {
              const isSelected = activeLog === index;
              return (
                <div
                  key={index}
                  onClick={() => {
                    soundFx.playKeyClick();
                    setActiveLog(index);
                  }}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-void-800 border-crimson shadow-[0_0_15px_rgba(255,26,75,0.25)]'
                      : 'bg-void-950/60 border-void-700/70 hover:border-void-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isSelected ? 'bg-crimson text-black' : 'bg-void-700 text-cyan'
                      }`}>
                        {log.time}
                      </span>
                      <span className="text-white font-bold">{log.label}</span>
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${
                      log.status === 'HOMICIDE' ? 'text-crimson' : log.status === 'CRITICAL BREACH' ? 'text-amber' : 'text-gray-400'
                    }`}>
                      {log.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-body pl-1">
                    {log.detail}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-void-950 border border-void-700 rounded text-xs font-mono text-gray-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
              <span>FORENSIC REPORT SEALED // AWAITING SQUAD REGISTRATION</span>
            </div>
            <a
              href="#suspects-dossier"
              onClick={() => soundFx.playBeep(440, 0.1)}
              className="text-cyan hover:underline font-bold"
            >
              VIEW 6 SUSPECTS →
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
