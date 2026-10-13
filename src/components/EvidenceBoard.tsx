import React, { useState } from 'react';
import { Eye, MapPin, X, ZoomIn } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

export const EvidenceBoard: React.FC = () => {
  const [activeExhibit, setActiveExhibit] = useState<string | null>(null);

  const exhibits = {
    A: {
      title: "EXHIBIT-A: VIKRAM MALHOTRA",
      tag: "TAG: #8849-01 // THE VICTIM",
      image: "/assets/vikram_face_crosses.jpeg",
      desc: "Tech Tycoon found dead in Penthouse 42 at 01:09 PM. Master locks disabled remotely."
    },
    B: {
      title: "EXHIBIT-B: IOT ACCESS LOGS",
      tag: "TAMPER DETECTED",
      desc: "Smart penthouse cameras 03, 04, and 07 were killed for exactly 18 minutes prior to the homicide."
    },
    C: {
      title: "EXHIBIT-C: MEMORY DUMP FRAGMENT",
      tag: "RAM FORENSICS",
      desc: "Volatile memory dump captured AES-256 keys and an unauthorized reverse shell connection."
    },
    D: {
      title: "EXHIBIT-D: 911 AUDIO INTERCEPT",
      tag: "ENCRYPTED VOIP",
      desc: "Muffled argument intercepted: '...they are inside the server room... don't let Arjun trigger the killswitch...'"
    },
    E: {
      title: "EXHIBIT-E: BURNER IMEI TRACKER",
      tag: "BKC SECTOR 03",
      desc: "Burner device pinged 4 minutes prior to victim flatline before the SIM card was burned."
    }
  };

  return (
    <section className="py-space-lg px-space-md lg:px-margin max-w-7xl mx-auto border-t border-outline-variant/40" id="case-file">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-md gap-3 sm:gap-4">
        <div>
          <div className="text-[10px] sm:text-label-sm font-label-sm text-primary uppercase tracking-widest font-mono">// THE CRIME SCENE</div>
          <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface uppercase mt-1 leading-tight">
            PENTHOUSE 42 FORENSIC CORKBOARD
          </h2>
        </div>
        <div className="self-start md:self-auto flex items-center gap-2 text-xs sm:text-label-sm bg-surface-container px-3 py-1.5 border border-outline-variant rounded text-on-surface-variant font-mono">
          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          <span>EVIDENCE PINNING ENGINE (5 ARTIFACTS)</span>
        </div>
      </div>

      {/* Corkboard Container */}
      <div className="relative bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-3 sm:p-space-lg overflow-hidden shadow-2xl">
        
        {/* SVG Vector Threads - Displayed on desktop where coordinates align */}
        <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
          <line className="string-vector" stroke="#ff5164" strokeWidth="2" x1="220" x2="520" y1="180" y2="120"></line>
          <line className="string-vector" stroke="#ff5164" strokeWidth="2" x1="220" x2="360" y1="180" y2="440"></line>
          <line className="string-vector" stroke="#00e3fd" strokeWidth="2" x1="520" x2="840" y1="120" y2="240"></line>
          <line className="string-vector" stroke="#ff5164" strokeWidth="1.5" x1="360" x2="840" y1="440" y2="240"></line>
          <line className="string-vector" stroke="#00e3fd" strokeWidth="2" x1="840" x2="980" y1="240" y2="480"></line>
        </svg>

        {/* Bento Corkboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-space-md relative z-20">
          
          {/* Evidence Item 1: Vikram Photo With Cross */}
          <div
            onClick={() => {
              soundFx.playBeep(680, 0.08);
              setActiveExhibit('A');
            }}
            className="md:col-span-4 bg-surface-container-low border border-primary-container/80 p-3 sm:p-3.5 rounded-lg relative transform rotate-0 md:-rotate-1 shadow-lg group hover:rotate-0 transition-transform cursor-pointer"
          >
            {/* Push Pin */}
            <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-container border-2 border-surface-container-lowest z-30 shadow-md"></div>
            
            {/* Vikram Image with Cross Neatly Fitted */}
            <div className="relative overflow-hidden rounded bg-surface-container-lowest border border-outline-variant aspect-[3/4] max-h-64 sm:max-h-72 w-full mb-2.5 flex items-center justify-center">
              <img
                className="w-full h-full object-cover object-top contrast-125 brightness-95 group-hover:scale-105 transition-all duration-300"
                src="/assets/vikram_face_crosses.jpeg"
                alt="Vikram Malhotra with Red Cross"
              />
              <div className="absolute bottom-2 right-2 border border-primary-container text-primary-container px-2 py-0.5 font-label-sm font-extrabold uppercase bg-surface-container-lowest/90 tracking-wider">
                DECEASED: 01:09 PM
              </div>
            </div>

            <div className="flex items-center justify-between text-label-sm font-label-sm mb-1 font-mono">
              <span className="text-primary font-bold">#EXHIBIT-A // VICTIM</span>
              <span className="text-outline">#8849-01</span>
            </div>
            <div className="text-label-md font-label-md text-on-surface font-bold uppercase">VIKRAM MALHOTRA</div>
            <p className="text-body-sm text-on-surface-variant mt-1 text-xs line-clamp-2">
              Founder of Malhotra Cyber Dynamics. Murdered at 01:09 PM. ₹47 Crore missing.
            </p>
          </div>

          {/* Evidence Item 2: Penthouse Biometric Logs */}
          <div
            onClick={() => {
              soundFx.playBeep(680, 0.08);
              setActiveExhibit('B');
            }}
            className="md:col-span-4 bg-surface-container-low border border-outline-variant p-3 sm:p-3.5 rounded-lg relative transform rotate-0 md:rotate-1 shadow-lg hover:rotate-0 transition-transform cursor-pointer group"
          >
            <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary-container border-2 border-surface-container-lowest z-30 shadow-md"></div>
            
            <div className="flex items-center justify-between text-label-sm font-label-sm pb-1.5 border-b border-outline-variant mb-2 font-mono">
              <span className="text-secondary font-bold">#EXHIBIT-B // IOT TELEMETRY</span>
              <span className="text-tertiary">TAMPERED</span>
            </div>

            <div className="bg-surface-container-lowest p-2.5 rounded font-mono text-[11px] leading-relaxed text-secondary-fixed border border-outline-variant/60">
              <span className="text-outline-variant">// 23:47:00</span> [CCTV_SYS] Feed severed (CAM 03, 04)<br/>
              <span className="text-outline-variant">// 23:58:01</span> [DOOR_LOCK] Override: Token 0x98FF<br/>
              <span className="text-primary font-bold">// 01:09:00 PM [CARDIAC] Signal Flatline</span>
            </div>

            <p className="text-body-sm text-on-surface-variant mt-2 text-xs">
              Smart locks overridden right before CCTV cameras went dark.
            </p>
          </div>

          {/* Evidence Item 3: Memory Dump */}
          <div
            onClick={() => {
              soundFx.playBeep(680, 0.08);
              setActiveExhibit('C');
            }}
            className="md:col-span-4 bg-surface-container-low border border-outline-variant p-3 sm:p-3.5 rounded-lg relative transform rotate-0 md:-rotate-1 shadow-lg hover:rotate-0 transition-transform cursor-pointer group"
          >
            <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-container border-2 border-surface-container-lowest z-30 shadow-md"></div>
            
            <div className="flex items-center justify-between text-label-sm font-label-sm pb-1.5 border-b border-outline-variant mb-2 font-mono">
              <span className="text-primary font-bold">#EXHIBIT-C // RAM FORENSICS</span>
              <span className="text-outline">RAW DUMP</span>
            </div>

            <div className="bg-surface-container-lowest p-2.5 rounded font-mono text-[11px] text-on-surface border border-outline-variant/60">
              <p className="text-outline-variant">// OFFSET: 0x7FFF0012</p>
              <p className="text-primary font-mono tracking-tight">41 45 53 2D 32 35 36 20 4B 45 59</p>
              <p className="text-secondary font-mono tracking-tight">reverse_shell.exe --port 2222</p>
            </div>

            <p className="text-body-sm text-on-surface-variant mt-2 text-xs">
              RAM buffer captured unencrypted AES keys and an active exploit payload.
            </p>
          </div>

          {/* Evidence Item 4: Audio Waveform */}
          <div
            onClick={() => {
              soundFx.playBeep(680, 0.08);
              setActiveExhibit('D');
            }}
            className="md:col-span-6 bg-surface-container-low border border-outline-variant p-3 sm:p-3.5 rounded-lg relative transform rotate-0 md:rotate-1 shadow-lg cursor-pointer group"
          >
            <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary-container border-2 border-surface-container-lowest z-30 shadow-md"></div>
            
            <div className="flex items-center justify-between text-label-sm font-label-sm mb-2 font-mono">
              <span className="text-secondary font-bold">#EXHIBIT-D // WIRETRAP INTERCEPT</span>
              <span className="text-primary">ENCRYPTED</span>
            </div>

            <div className="h-10 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-center px-4 gap-1.5">
              <div className="w-1 bg-primary h-3 rounded"></div>
              <div className="w-1 bg-primary h-6 rounded animate-pulse"></div>
              <div className="w-1 bg-primary h-8 rounded"></div>
              <div className="w-1 bg-secondary-container h-5 rounded"></div>
              <div className="w-1 bg-secondary-container h-7 rounded"></div>
              <div className="w-1 bg-primary h-4 rounded"></div>
              <div className="w-1 bg-primary h-8 rounded animate-pulse"></div>
              <div className="w-1 bg-secondary-container h-6 rounded"></div>
              <div className="w-1 bg-primary h-3 rounded"></div>
            </div>

            <div className="mt-2 text-label-sm font-label-sm text-outline-variant italic text-xs">
              "Fragment: '...they are inside the server room... don't let Arjun trigger the killswitch...'"
            </div>
          </div>

          {/* Evidence Item 5: Burner GPS */}
          <div
            onClick={() => {
              soundFx.playBeep(680, 0.08);
              setActiveExhibit('E');
            }}
            className="md:col-span-6 bg-surface-container-low border border-outline-variant p-3 sm:p-3.5 rounded-lg relative transform rotate-0 md:-rotate-1 shadow-lg cursor-pointer group"
          >
            <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary border-2 border-surface-container-lowest z-30 shadow-md"></div>
            
            <div className="flex items-center justify-between text-label-sm font-label-sm mb-2 font-mono">
              <span className="text-tertiary font-bold">#EXHIBIT-E // BURNER TRIANGULATION</span>
              <span className="text-outline">SECTOR 03</span>
            </div>

            <div className="h-10 bg-surface-container-lowest rounded border border-outline-variant flex items-center justify-between px-3 text-label-sm font-label-sm font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-on-surface text-xs">19.0760° N, 72.8777° E (Bandra BKC)</span>
              </div>
              <span className="px-1.5 py-0.5 bg-tertiary/10 border border-tertiary text-tertiary rounded text-[9px] font-bold">
                SIGNAL DROPPED
              </span>
            </div>

            <p className="text-body-sm text-on-surface-variant mt-2 text-xs">
              Burner phone active 4 minutes before TOD before being discarded.
            </p>
          </div>

        </div>

      </div>

      {/* Selected Exhibit Popover */}
      {activeExhibit && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3.5 sm:p-4">
          <div className="bg-surface-container-low border-2 border-primary-container rounded-xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveExhibit(null)}
              className="absolute top-4 right-4 p-1.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-label-sm font-label-sm text-primary uppercase mb-1 font-mono">
              {exhibits[activeExhibit as keyof typeof exhibits].tag}
            </div>

            <h3 className="text-headline-md font-headline-md text-on-surface uppercase mb-3">
              {exhibits[activeExhibit as keyof typeof exhibits].title}
            </h3>

            {activeExhibit === 'A' && (
              <div className="w-full max-h-72 aspect-[3/4] rounded overflow-hidden border border-primary-container/60 mb-4 bg-surface-container-lowest mx-auto flex items-center justify-center">
                <img
                  src="/assets/vikram_face_crosses.jpeg"
                  alt="Vikram Malhotra with Red Cross"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <p className="text-body-sm text-on-surface-variant mb-5 leading-relaxed">
              {exhibits[activeExhibit as keyof typeof exhibits].desc}
            </p>

            <button
              onClick={() => setActiveExhibit(null)}
              className="w-full py-2 bg-primary-container text-surface-container-lowest font-label-md font-bold uppercase rounded"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

