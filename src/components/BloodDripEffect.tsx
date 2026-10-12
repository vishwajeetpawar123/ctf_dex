import React from 'react';

export const BloodDripEffect: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 h-screen w-36 sm:w-56 md:w-72 pointer-events-none z-30 overflow-hidden select-none"
    >
      {/* Upper-Right Corner Blood Pool & Dripping Stalactites SVG */}
      <svg
        className="absolute top-0 right-0 w-full h-44 sm:h-64 drop-shadow-[0_4px_18px_rgba(180,0,25,0.7)]"
        viewBox="0 0 260 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Viscous Blood Gradient */}
          <linearGradient id="bloodGradDark" x1="130" y1="0" x2="130" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#420008" />
            <stop offset="45%" stopColor="#7a0011" />
            <stop offset="85%" stopColor="#9e0018" />
            <stop offset="100%" stopColor="#59000c" />
          </linearGradient>

          {/* Secondary Crimson Gradient */}
          <linearGradient id="bloodGradBright" x1="130" y1="0" x2="130" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#66000d" />
            <stop offset="60%" stopColor="#b3001c" />
            <stop offset="100%" stopColor="#6e0010" />
          </linearGradient>

          {/* Glossy Specular Highlight Filter */}
          <linearGradient id="specularGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7085" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#ff2a4b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Corner Pooling Splatter Layer */}
        <path
          d="M260 0H80C80 0 92 18 102 32C112 48 98 62 104 80C110 98 128 108 132 128C136 148 148 160 156 182C164 204 172 215 174 215C176 215 178 195 186 172C194 150 206 130 216 108C224 88 242 65 260 52V0Z"
          fill="url(#bloodGradDark)"
          opacity="0.95"
        />

        {/* Primary Drip 1 - Longest Focal Drip Near Corner */}
        <path
          d="M178 0C178 35 166 75 166 120C166 150 174 175 174 198C174 210 170 218 167 218C164 218 160 210 160 198C160 175 168 150 168 120C168 75 178 35 178 0Z"
          fill="url(#bloodGradBright)"
        />
        {/* Bulbous Teardrop Tip 1 */}
        <ellipse cx="167" cy="216" rx="7" ry="8" fill="#a8001a" />
        <ellipse cx="165" cy="214" rx="2.5" ry="3.5" fill="#ffa1b0" opacity="0.7" />

        {/* Primary Drip 2 - Secondary Arterial Stream */}
        <path
          d="M215 0C215 30 206 65 206 100C206 125 212 145 212 165C212 174 209 182 206 182C203 182 200 174 200 165C200 145 206 125 206 100C206 65 215 30 215 0Z"
          fill="url(#bloodGradDark)"
        />
        <ellipse cx="206" cy="180" rx="6" ry="7" fill="#8c0014" />
        <ellipse cx="204" cy="178" rx="2" ry="3" fill="#ffa1b0" opacity="0.65" />

        {/* Primary Drip 3 - Outer Corner Accent Drip */}
        <path
          d="M245 0C245 20 238 45 238 72C238 90 242 104 242 118C242 125 240 130 238 130C236 130 234 125 234 118C234 104 238 90 238 72C238 45 245 20 245 0Z"
          fill="url(#bloodGradBright)"
        />
        <ellipse cx="238" cy="128" rx="4.5" ry="5.5" fill="#a8001a" />
        <ellipse cx="236.5" cy="126.5" rx="1.5" ry="2" fill="#ffa1b0" opacity="0.6" />

        {/* Small Trailing Corner Droplet Clot */}
        <path
          d="M135 0C135 15 128 32 128 50C128 62 132 72 132 82C132 87 130 91 128 91C126 91 124 87 124 82C124 72 128 62 128 50C128 32 135 15 135 0Z"
          fill="url(#bloodGradDark)"
        />
        <circle cx="128" cy="90" r="4" fill="#8c0014" />

        {/* Specular Wet Light Highlights */}
        <path
          d="M169 25C169 65 163 110 163 155"
          stroke="url(#specularGlow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M208 20C208 55 203 90 203 130"
          stroke="url(#specularGlow)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M240 15C240 40 236 68 236 95"
          stroke="url(#specularGlow)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      {/* Vertical Viscous Trickle Line Running Down Whole Height */}
      <div className="absolute top-0 right-14 sm:right-20 md:right-28 w-[2px] h-full bg-gradient-to-b from-[#8f0016]/90 via-[#700011]/50 to-transparent shadow-[0_0_8px_rgba(255,26,75,0.4)]"></div>

      {/* Secondary Faint Satellite Trickle */}
      <div className="hidden sm:block absolute top-0 right-8 sm:right-10 md:right-14 w-[1px] h-3/4 bg-gradient-to-b from-[#6b000e]/70 via-[#50000a]/30 to-transparent"></div>

      {/* Animated Detached Droplets Trickling Down Whole Screen */}
      <div className="blood-drop blood-drop-1 right-14 sm:right-20 md:right-28"></div>
      <div className="blood-drop blood-drop-2 right-14 sm:right-20 md:right-28"></div>
      <div className="blood-drop blood-drop-3 right-8 sm:right-10 md:right-14"></div>
      <div className="blood-drop blood-drop-4 right-14 sm:right-20 md:right-28"></div>
    </div>
  );
};
