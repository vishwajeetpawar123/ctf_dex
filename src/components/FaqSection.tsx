import React from 'react';
import { HelpCircle, AlertOctagon, ExternalLink, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

interface FaqProps {
  onOpenRegisterModal: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenRegisterModal }) => {
  const faqs = [
    {
      q: "Do I need prior digital forensics or CTF experience?",
      a: "No. Round 1 is an open-source intelligence (OSINT) qualifier where teams investigate famous real-life cases using Google, Wikipedia, and public archives to write a 10-point conclusion. Top scorers advance to the hands-on Round 2 CTF."
    },
    {
      q: "How do we register and verify our squad on Unstop?",
      a: "Click the 'REGISTER ON UNSTOP' button above. The squad leader creates the team on Unstop and invites up to 3 squad mates via their registered email IDs. You will receive your CID Detective Call-Sign upon approval."
    },
    {
      q: "What are the tournament rewards, certificates, and bounties?",
      a: "The top investigative squads share ₹15,000 in cash bounties, with verified National CID Forensics certificates of excellence. Top performers also receive direct fast-track opportunities."
    },
    {
      q: "Is the tournament conducted online or offline?",
      a: "Both Round 1 and Round 2 are conducted offline in-person at the venue. Squads investigate the real-life OSINT case files in Round 1 and execute the technical CTF mainframe attack in Round 2."
    }
  ];

  return (
    <div className="py-space-xl px-space-md lg:px-margin max-w-7xl mx-auto" id="faq-section">

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-10 sm:mb-space-xl">
        <div className="text-center mb-6 sm:mb-space-md">
          <div className="text-[10px] sm:text-label-sm font-label-sm text-outline uppercase tracking-widest font-mono">// DECLASSIFIED INTEL</div>
          <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-on-surface uppercase leading-tight mt-1">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-lg p-3.5 sm:p-4">
              <h3 className="text-sm sm:text-body-lg font-semibold text-on-surface flex items-center justify-between">
                <span>{faq.q}</span>
                <HelpCircle className="w-4 h-4 text-secondary shrink-0 ml-2" />
              </h3>
              <p className="text-xs sm:text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* High-Impact Registration Callout */}
      <section className="my-6 sm:my-space-lg" id="register">
        <div className="bg-gradient-to-b from-surface-container to-surface-container-low border-2 border-primary-container rounded-2xl p-4 sm:p-space-lg md:p-space-xl text-center relative overflow-hidden pulse-glow-crimson">
          <div className="absolute inset-0 crt-grid opacity-20 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 mb-3 sm:mb-space-sm bg-surface-container-lowest border border-primary-container text-[10px] sm:text-label-sm font-mono text-primary uppercase max-w-full">
              <AlertOctagon className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">CRITICAL COUNTDOWN: MEMORY PURGE IMMINENT</span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-headline-xl font-headline-xl text-on-surface uppercase tracking-tight leading-tight">
              THE CLOCK IS TICKING. SOLVE THE CRIME BEFORE THE EVIDENCE PURGES.
            </h2>

            <p className="mt-2.5 sm:mt-space-sm text-xs sm:text-sm md:text-body-lg font-body-lg text-on-surface-variant">
              Vikram Malhotra's killers are burning their server footprints. Secure your squad's clearance pass on Unstop today.
            </p>

            <div className="mt-6 sm:mt-space-lg flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  soundFx.playAlarm();
                  onOpenRegisterModal();
                }}
                className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-primary-container text-surface-container-lowest font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest border-2 border-primary rounded hover:bg-primary transition-all duration-150 flex items-center justify-center gap-2 shadow-2xl cursor-pointer active:scale-95"
              >
                <ExternalLink className="w-4 h-4 stroke-[3]" />
                <span>REGISTER ON UNSTOP NOW</span>
              </button>

              <a
                href="#case-file"
                onClick={() => soundFx.playBeep(520, 0.1)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-surface-container-lowest text-secondary font-mono font-medium text-xs sm:text-sm uppercase tracking-wider border border-secondary-container rounded hover:bg-surface-container transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REVIEW EVIDENCE VAULT</span>
              </a>
            </div>

            <div className="mt-3.5 sm:mt-space-md text-[10px] sm:text-label-sm text-outline-variant font-mono">
              ₹120 PER TEAM REGISTRATION // 2-4 DETECTIVES // OPEN TO ALL COLLEGE STUDENTS &amp; TECH ENTHUSIASTS
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
