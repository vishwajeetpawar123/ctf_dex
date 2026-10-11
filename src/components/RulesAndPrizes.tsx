import React from 'react';
import { Users, GraduationCap, Wrench, Gavel } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';

interface RulesProps {
  onOpenRegisterModal: () => void;
}

export const RulesAndPrizes: React.FC<RulesProps> = ({ onOpenRegisterModal }) => {
  return (
    <section className="py-space-xl px-space-md lg:px-margin max-w-7xl mx-auto border-t border-outline-variant/40" id="rules-engagement">
      
      {/* Interactive CLI Terminal from Stitch */}
      <InteractiveTerminal onOpenRegisterModal={onOpenRegisterModal} />

      {/* Rules of Engagement Grid from Stitch */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-space-xl">
        
        {/* Rule 1 */}
        <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
          <div className="text-secondary text-body-lg mb-2">
            <Users className="w-5 h-5 text-secondary" />
          </div>
          <h4 className="text-headline-md font-headline-md text-on-surface text-base">Squad Formation</h4>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
            1 to 4 Operatives. Cross-college and cross-specialization alliances are fully authorized.
          </p>
        </div>

        {/* Rule 2 */}
        <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
          <div className="text-secondary text-body-lg mb-2">
            <GraduationCap className="w-5 h-5 text-secondary" />
          </div>
          <h4 className="text-headline-md font-headline-md text-on-surface text-base">Clearance Eligibility</h4>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
            Open to undergraduate, postgrad students, and cybersecurity researchers worldwide.
          </p>
        </div>

        {/* Rule 3 */}
        <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
          <div className="text-secondary text-body-lg mb-2">
            <Wrench className="w-5 h-5 text-secondary" />
          </div>
          <h4 className="text-headline-md font-headline-md text-on-surface text-base">Permitted Arsenal</h4>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
            Wireshark, Volatility 3, Ghidra, Autopsy, Burp Suite, CyberChef, and custom Python solvers.
          </p>
        </div>

        {/* Rule 4 */}
        <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
          <div className="text-primary text-body-lg mb-2">
            <Gavel className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-headline-md font-headline-md text-on-surface text-base">Code of Integrity</h4>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
            Zero tolerance for flag sharing, squad collusion, or denial-of-service on tournament nodes.
          </p>
        </div>

      </div>

    </section>
  );
};
