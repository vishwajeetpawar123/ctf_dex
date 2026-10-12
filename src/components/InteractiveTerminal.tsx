import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

interface TerminalProps {
  onOpenRegisterModal: () => void;
}

export const InteractiveTerminal: React.FC<TerminalProps> = ({ onOpenRegisterModal }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ text: string; color?: string }>>([
    { text: "$ cid-recon --target penthouse42 --dump-type memory", color: "text-outline-variant" },
    { text: "[+] Target host initialized: 192.168.10.42 (Malhotra Private Workstation)", color: "text-secondary" },
    { text: "[+] Memory Dump loaded: memory.raw (16.00 GB MD5: 9f82c...ba12)", color: "text-on-surface" },
    { text: "[!] Volatility 3 Profile: Win10x64_19041 detected", color: "text-tertiary" },
    { text: "[!] 6 Suspicious hidden processes detected: [pid: 4108 'inject_svchost.exe']", color: "text-primary" },
    { text: "[+] Artifacts unlocked: 5 Capture The Flag tokens mapped to suspect dossiers.", color: "text-on-surface" },
  ]);
  const bufferRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (bufferRef.current) {
      bufferRef.current.scrollTop = bufferRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playKeyClick();
    setInputVal('');

    const newEntries: Array<{ text: string; color?: string }> = [
      { text: `investigator@msoc-cid:~$ ${inputVal}`, color: "text-secondary-container" }
    ];

    switch (cmd) {
      case 'help':
        newEntries.push(
          { text: "COMMANDS: status | suspects | decrypt | scan | register | clear", color: "text-secondary" }
        );
        break;
      case 'status':
        newEntries.push(
          { text: "[+] CASE #8849: Homicide of Vikram Malhotra // TOD: 00:05 AM IST", color: "text-primary" },
          { text: "[+] Siphoned Fund: ₹47,00,00,000 wired to Oceanic Ventures LLC", color: "text-tertiary" }
        );
        break;
      case 'suspects':
        newEntries.push(
          { text: "[!] SUSPECT DOSSIERS ENCRYPTED // EXPOSING OCT 26", color: "text-primary font-bold" },
          { text: "1. ??? (CLASSIFIED) | 2. ??? (CLASSIFIED) | 3. ??? (CLASSIFIED)", color: "text-outline-variant" },
          { text: "4. ??? (CLASSIFIED) | 5. ??? (CLASSIFIED) | 6. ??? (CLASSIFIED)", color: "text-outline-variant" }
        );
        break;
      case 'decrypt':
        newEntries.push(
          { text: "[*] XOR Decrypting phone_image.enc with key 31650...", color: "text-secondary" },
          { text: "[FLAG DISCOVERED]: CID{ph0n3_unlocked_31650}", color: "text-primary font-bold" }
        );
        soundFx.playBeep(920, 0.15);
        break;
      case 'scan':
        newEntries.push(
          { text: "[*] Port 2222/tcp OPEN // SUID /opt/tools/logviewer found", color: "text-tertiary" },
          { text: "[+] Exploit path available in Round 2 Challenge 5.1", color: "text-secondary" }
        );
        break;
      case 'register':
        newEntries.push({ text: "[*] Opening official Unstop registration modal...", color: "text-primary" });
        soundFx.playAlarm();
        onOpenRegisterModal();
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        newEntries.push({ text: `Command not found: '${cmd}'. Try 'help' or 'register'.`, color: "text-outline" });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
  };

  return (
    <div className="mb-8 sm:mb-space-xl bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-2xl">
      {/* Title Bar */}
      <div className="bg-surface-container-low px-3 sm:px-4 py-2 border-b border-outline-variant flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-container"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-tertiary"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary-container"></div>
          <span className="ml-1 sm:ml-2 text-[11px] sm:text-label-sm font-label-sm text-outline-variant font-mono">
            cid-forensics-bash v4.12 <span className="hidden xs:inline sm:inline">// tty1</span>
          </span>
        </div>
        <span className="hidden sm:inline text-label-sm font-label-sm text-secondary-container font-mono">
          ENCRYPTED PROTOCOL 12-X
        </span>
      </div>

      {/* Screen Buffer */}
      <div ref={bufferRef} className="p-3 sm:p-space-md font-mono text-xs sm:text-label-md space-y-1.5 sm:space-y-2 min-h-[200px] max-h-[360px] overflow-y-auto break-words">
        {history.map((line, idx) => (
          <p key={idx} className={`${line.color || "text-on-surface"} leading-relaxed`}>
            {line.text}
          </p>
        ))}
      </div>

      {/* Prompt Form */}
      <form onSubmit={handleCommand} className="bg-surface-container-low border-t border-outline-variant px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
        <span className="text-secondary-container font-mono text-xs sm:text-sm font-bold shrink-0">
          <span className="hidden sm:inline">investigator@zerohour:</span>~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help', 'decrypt', 'status'..."
          className="flex-1 bg-transparent border-none outline-none text-on-surface font-mono text-xs sm:text-sm placeholder:text-outline min-w-0"
        />
        <button
          type="submit"
          className="px-2.5 sm:px-3 py-1 bg-secondary-container/20 text-secondary border border-secondary-container/50 rounded font-mono text-[11px] sm:text-label-sm font-bold uppercase transition-all shrink-0 hover:bg-secondary-container/30 active:scale-95"
        >
          EXEC
        </button>
      </form>
    </div>
  );
};
