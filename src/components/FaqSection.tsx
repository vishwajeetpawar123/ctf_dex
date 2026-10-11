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
      a: "No. Round 1 features beginner-friendly OSINT, logical deductions, and fundamental cryptographic ciphers. We provide comprehensive field handbooks and starter commands so motivated investigators can learn on the fly."
    },
    {
      q: "How do we register and verify our squad on Unstop?",
      a: "Click the 'REGISTER ON UNSTOP' button above. The squad leader creates the team on Unstop and invites up to 3 squad mates via their registered email IDs. You will receive your CID Detective Call-Sign upon approval."
    },
    {
      q: "What are the tournament rewards, certificates, and bounties?",
      a: "The top 3 investigative squads share ₹50,000+ in cash bounties, with verified National CID Forensics certificates of excellence. Top performers also receive direct fast-track interviews with sponsor cybersecurity agencies."
    },
    {
      q: "Is Round 2 conducted online or in-person?",
      a: "Both phases are completely virtual and cloud-hosted. Round 2 provides remote VPN tunnel access to the simulated Penthouse 42 private network infrastructure."
    }
  ];

  return (
    <div className="py-space-xl px-space-md lg:px-margin max-w-7xl mx-auto" id="faq-section">
      
      {/* FAQ Section from Stitch */}
      <div className="max-w-4xl mx-auto mb-space-xl">
        <div className="text-center mb-space-md">
          <div className="text-label-sm font-label-sm text-outline uppercase tracking-widest">// DECLASSIFIED INTEL</div>
          <h2 className="text-headline-lg font-headline-lg text-on-surface uppercase">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-lg p-4">
              <h3 className="text-body-lg font-semibold text-on-surface flex items-center justify-between">
                <span>{faq.q}</span>
                <HelpCircle className="w-4 h-4 text-secondary shrink-0 ml-2" />
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* High-Impact Registration Callout from Stitch */}
      <section className="my-space-lg" id="register">
        <div className="bg-gradient-to-b from-surface-container to-surface-container-low border-2 border-primary-container rounded-2xl p-space-lg sm:p-space-xl text-center relative overflow-hidden pulse-glow-crimson">
          <div className="absolute inset-0 crt-grid opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-space-sm bg-surface-container-lowest border border-primary-container text-label-sm font-label-sm text-primary uppercase">
              <AlertOctagon className="w-3.5 h-3.5 text-primary" />
              <span>CRITICAL COUNTDOWN: MEMORY PURGE IMMINENT</span>
            </div>

            <h2 className="text-headline-xl font-headline-xl text-on-surface uppercase tracking-tight">
              THE CLOCK IS TICKING. SOLVE THE CRIME BEFORE THE EVIDENCE PURGES.
            </h2>

            <p className="mt-space-sm text-body-lg font-body-lg text-on-surface-variant">
              Vikram Malhotra's killers are burning their server footprints. Secure your squad's clearance pass on Unstop today.
            </p>

            <div className="mt-space-lg flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  soundFx.playAlarm();
                  onOpenRegisterModal();
                }}
                className="w-full sm:w-auto px-10 py-4 bg-primary-container text-surface-container-lowest font-label-lg font-extrabold uppercase tracking-widest border-2 border-primary rounded hover:bg-primary transition-all duration-150 flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 stroke-[3]" />
                <span>REGISTER ON UNSTOP NOW</span>
              </button>

              <a
                href="#case-file"
                onClick={() => soundFx.playBeep(520, 0.1)}
                className="w-full sm:w-auto px-8 py-4 bg-surface-container-lowest text-secondary font-label-lg font-medium uppercase tracking-wider border border-secondary-container rounded hover:bg-surface-container transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REVIEW EVIDENCE VAULT</span>
              </a>
            </div>

            <div className="mt-space-md text-label-sm font-label-sm text-outline-variant font-mono">
              FREE REGISTRATION // ELIGIBLE FOR ALL COLLEGE STUDENTS &amp; TECH ENTHUSIASTS
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
