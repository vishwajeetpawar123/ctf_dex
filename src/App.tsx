import React, { useState, useEffect } from 'react';
import { CyberMatrixBackground } from './components/CyberMatrixBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EvidenceBoard } from './components/EvidenceBoard';
import { RoundsTimeline } from './components/RoundsTimeline';
import { SuspectsGrid } from './components/SuspectsGrid';
import { RulesAndPrizes } from './components/RulesAndPrizes';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { EVENT_CONFIG } from './data/eventData';
import { ArrowRight } from 'lucide-react';
import { soundFx } from './utils/audioEffects';

export function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [unstopUrl, setUnstopUrl] = useState(EVENT_CONFIG.unstopRegistrationUrl);
  const [showStickyBottom, setShowStickyBottom] = useState(false);

  useEffect(() => {
    // Ensure fresh page load starts at the top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBottom(true);
      } else {
        setShowStickyBottom(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-surface-container-lowest text-on-surface antialiased crt-grid selection:bg-primary-container selection:text-surface-container-lowest">
      
      {/* Background Cyber Canvas & Ambient Scanning Overlays */}
      <CyberMatrixBackground />
      <div className="fixed inset-0 crt-scanlines z-40 pointer-events-none"></div>

      {/* Ambient Neon Haze Nodes from Stitch */}
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none -z-10"></div>
      <div className="fixed top-1/2 right-10 w-96 h-96 rounded-full bg-secondary-container/10 blur-[140px] pointer-events-none -z-10"></div>

      {/* 1. SHARED COMPONENT: TopNavBar from Stitch */}
      <Navbar
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        unstopUrl={unstopUrl}
      />

      {/* Main Sections Ordered Verbatim as Stitch */}
      <main className="w-full overflow-hidden relative z-20">
        
        {/* 2. HERO SECTION: Classified Murder Mystery */}
        <Hero onOpenRegisterModal={() => setIsRegisterModalOpen(true)} />

        {/* 3. INTERACTIVE EVIDENCE CORKBOARD & STORYLINE */}
        <EvidenceBoard />

        {/* 4. TOURNAMENT ARCHITECTURE: 2-PHASE INVESTIGATION CHAIN */}
        <RoundsTimeline onOpenRegisterModal={() => setIsRegisterModalOpen(true)} />

        {/* 5. THE 6 SUSPECTS CASE DOSSIER */}
        <SuspectsGrid />

        {/* 6. DETECTIVE CLI TERMINAL & RULES OF ENGAGEMENT */}
        <RulesAndPrizes onOpenRegisterModal={() => setIsRegisterModalOpen(true)} />

        {/* 7. DECLASSIFIED INTEL FAQ & HIGH-IMPACT REGISTRATION CALLOUT */}
        <FaqSection onOpenRegisterModal={() => setIsRegisterModalOpen(true)} />

      </main>

      {/* 8. SHARED COMPONENT: Footer from Stitch */}
      <Footer onOpenRegisterModal={() => setIsRegisterModalOpen(true)} />

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        unstopUrl={unstopUrl}
      />

      {/* Mobile Sticky Enlistment Bottom Bar */}
      {showStickyBottom && (
        <div className="sm:hidden fixed bottom-3 inset-x-3 z-50 animate-in slide-in-from-bottom duration-300">
          <div className="p-2 bg-surface-container-low/95 border-2 border-primary-container rounded-xl shadow-2xl backdrop-blur-md flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 pl-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping shrink-0"></span>
              <span className="font-label-sm text-[10px] text-on-surface uppercase font-bold tracking-wider">
                ROUND 1 &amp; 2 OPEN
              </span>
            </div>
            <button
              onClick={() => {
                soundFx.playAlarm();
                setIsRegisterModalOpen(true);
              }}
              className="px-4 py-2 bg-primary-container text-surface-container-lowest font-label-md font-bold text-xs uppercase tracking-wider rounded-lg pulse-glow-crimson flex items-center gap-1.5"
            >
              <span>REGISTER ON UNSTOP</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
