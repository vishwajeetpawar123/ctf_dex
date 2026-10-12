import { Suspect, EvidenceNode } from '../types';

export const EVENT_CONFIG = {
  eventName: "CID CTF: OPERATION ZERO HOUR",
  tagline: "A Tech Tycoon Murdered at 01:05. ₹47 Crore Laundered. 6 Suspects. The Crime Scene is Encrypted in the RAM.",
  caseNumber: "CASE #8849-ZERO-HOUR",
  victim: "Vikram Malhotra (46), Founder of Malhotra Cyber Dynamics",
  timeOfDeath: "October 14, 01:05 AM IST",
  crimeScene: "Penthouse 42, Cyber Heights, Mumbai",
  totalPoints: 4500,
  teamSize: "1 to 4 Detectives",
  targetDate: "2026-10-29T10:00:00+05:30", // Configurable countdown date
  unstopRegistrationUrl: "https://unstop.com/hackathons/cid-ctf-operation-zero-hour-2026", // Will be replaced by user's link
  prizePool: "₹50,000+ Bounty Pool",
  eligibility: "Open to all College Students & Cyber Forensics Enthusiasts across India",
  collegeName: "Department of Computer Science & Engineering",
  clubName: "Cyber Security & CTF Club",
  contactEmail: "cidctf.support@domain.edu",
};

export const SUSPECTS_DATA: Suspect[] = [
  {
    id: "riya",
    name: "Riya Sharma",
    role: "The Executive Secretary",
    codename: "PHANTOM_ARCHIVE",
    image: undefined, // uses avatar placeholder with red crime badge
    status: "In Custody",
    riskLevel: "Moderate",
    motive: "Access to Vikram's confidential encrypted memos and blackmail leverage.",
    seizedDevice: "Encrypted Android Burner Phone (XOR Locked) + NotesApp APK",
    quote: "I only saved what I needed to survive. Vikram wasn't an angel.",
    flagHint: "CID{r1y4_kn3w_t00_much}",
    challenges: [
      { num: "1.1", title: "Crack the Phone", category: "Crypto / EXIF", points: 100, description: "Extract EXIF Employee ID and XOR decrypt the seized disk image." },
      { num: "1.2", title: "Deleted Texts", category: "SQLite Forensics", points: 100, description: "Recover deleted WAL freelist rows containing the master warehouse passphrase." },
      { num: "1.3", title: "The Hidden Photo", category: "Steganography", points: 100, description: "Inspect LSB stego channels in the vacation photo gallery." },
      { num: "1.4", title: "The Burner App", category: "Mobile Reverse Engineering", points: 100, description: "Decompile NotesApp.apk, bypass base64 obfuscation and hit the secret C2 endpoint." }
    ]
  },
  {
    id: "arjun",
    name: "Arjun Kapoor",
    role: "The Business Partner (50-50)",
    codename: "OFFSHORE_BROKER",
    image: undefined,
    status: "Under Surveillance",
    riskLevel: "High",
    motive: "Siphoned ₹47 Crore into Oceanic Ventures LLC before Vikram initiated a forensic audit.",
    seizedDevice: "Corporate ThinkPad + Encrypted PGP Mail Archive + Financial Portals",
    quote: "It wasn't murder. It was an involuntary corporate restructuring.",
    flagHint: "CID{f0ll0w_th3_m0n3y_tr41l}",
    challenges: [
      { num: "2.1", title: "Cooked Books", category: "Data Carving / Stego", points: 125, description: "Unhide hidden Excel ledger sheets detailing the ₹47Cr transfer." },
      { num: "2.2", title: "The PGP Puzzle", category: "Cryptography", points: 125, description: "Reconstruct split PGP private keys across file properties and metadata." },
      { num: "2.3", title: "Follow the Money", category: "Web Exploitation", points: 125, description: "Bypass authentication on the private transaction portal using SQL Injection." },
      { num: "2.4", title: "The Voicemail", category: "Audio Signals / DTMF", points: 125, description: "Separate dual stereo channels to extract hidden DTMF telephone tones." }
    ]
  },
  {
    id: "meera",
    name: "Meera Desai",
    role: "The Ex-Wife",
    codename: "POISON_PEN",
    image: "/assets/ex-wife.jpeg",
    status: "Prime Suspect",
    riskLevel: "Extreme",
    motive: "Devastating divorce settlement left her penniless while Vikram held a ₹120Cr empire.",
    seizedDevice: "MacBook Air + Browser History Cache + Forged Legal PDF Dump",
    quote: "Hell hath no fury like a woman stripped of everything by high-priced lawyers.",
    flagHint: "CID{h3ll_h4th_n0_fury}",
    challenges: [
      { num: "3.1", title: "Browser Breadcrumbs", category: "Forensics", points: 150, description: "Carve Chrome history SQLite cache for dark web poison searches." },
      { num: "3.2", title: "The Cipher Paste", category: "Classical Ciphers", points: 150, description: "Decrypt the Vigenère pastebin confession using victim passphrase keys." },
      { num: "3.3", title: "The Forged Will", category: "Document Carving", points: 150, description: "Recover deleted legal PDF and highlight white-on-white rendezvous GPS coordinates." },
      { num: "3.4", title: "The Social Trail", category: "OSINT / Recon", points: 150, description: "Cross-reference GPS telemetry with geotagged social media photo alt tags." }
    ]
  },
  {
    id: "karan",
    name: "Karan Singh",
    role: "The Personal Bodyguard (15 Yrs)",
    codename: "INSIDE_BREACH",
    image: "/assets/bodyguard.jpeg",
    status: "Prime Suspect",
    riskLevel: "Extreme",
    motive: "Received ₹20L bounty & crypto transfer; possessed smart card codes and physical keys.",
    seizedDevice: "Bodycam SD Card + Encrypted USB Drive + Intercepted Radio Comms",
    quote: "I was paid to protect him. Somebody else offered ten times more to look away.",
    flagHint: "CID{b0dygu4rd_g0n3_r0gu3}",
    challenges: [
      { num: "4.1", title: "DNS Exfil", category: "Network Packet Analysis", points: 175, description: "Inspect Wireshark PCAP DNS query subdomains to reconstruct payload exfiltration." },
      { num: "4.2", title: "Tampered Footage", category: "Video Forensics", points: 175, description: "Extract 900 CCTV frames to isolate brightness-manipulated Bitcoin wallet hashes." },
      { num: "4.3", title: "XOR Radio", category: "Crypto / Radio Signals", points: 175, description: "Execute a known plaintext attack on repeating XOR VHF tactical audio chatter." },
      { num: "4.4", title: "The Tracker Binary", category: "Reverse Engineering", points: 175, description: "Analyze ELF binary strings to hit GPS tracker API endpoints and map movements." }
    ]
  },
  {
    id: "devraj",
    name: "Devraj Patel",
    role: "The Ghost Hacker",
    codename: "ZERO_TRACE",
    image: undefined,
    status: "Wanted / Fugitive",
    riskLevel: "Critical",
    motive: "Hired cyber merc who coded the CCTV killswitch and ransomware encryption script.",
    seizedDevice: "Linux Command Center Server (Port 2222) + AES Ransomware Script",
    quote: "Nothing is secure. Vikram thought his smart penthouse was an impenetrable vault. It took 3 lines of bash.",
    flagHint: "CID{gh0st_1n_th3_mach1n3}",
    challenges: [
      { num: "5.1", title: "The Server", category: "Linux Privilege Escalation", points: 250, description: "SSH into low-priv user and exploit world-writable cron jobs or SUID binaries." },
      { num: "5.2", title: "The Ransomware", category: "Cryptanalysis", points: 250, description: "Analyze AES-CTR keystream PRNG seed timestamp trap across UTC/IST timezones." },
      { num: "5.3", title: "Blockchain Trace", category: "Blockchain Forensics", points: 250, description: "Follow multi-hop Bitcoin transactions and unwrap triple-encoded memo fields." },
      { num: "5.4", title: "The Dead Drop", category: "Web & Spectrogram", points: 250, description: "Forge HS256 JWT tokens and inspect audio spectrogram frequencies for the flag." }
    ]
  },
  {
    id: "rao",
    name: "Commissioner Rao",
    role: "The Investigating Commissioner (FINAL BOSS)",
    codename: "INSIDER_APEX",
    image: undefined,
    status: "Mole / Wanted",
    riskLevel: "Critical",
    motive: "₹2 Crore bribe from Arjun & Meera to bury evidence and pin the crime on street thugs.",
    seizedDevice: "7-Zip Multi-Flag Vault + CID Internal Web Portal + Volatility Memory Dump",
    quote: "The easiest way to solve a murder is to ensure nobody ever looks in the right direction.",
    flagHint: "CID{c4s3_cl0s3d_just1c3_s3rv3d}",
    challenges: [
      { num: "6.1", title: "The Vault", category: "Master Crypto", points: 300, description: "Concatenate all 5 previous flags to unlock 7z archive and derive OTP keys." },
      { num: "6.2", title: "The Mole Network", category: "Web Exploitation / IDOR", points: 300, description: "Exploit IDOR on CID internal portal and defeat client-side TOTP validation." },
      { num: "6.3", title: "The Escape Plan", category: "PDF Forensics & Barcodes", points: 300, description: "Extract embedded JavaScript from Caracas boarding pass & scan PDF417 barcode." },
      { num: "6.4", title: "Case Closed", category: "Volatility Memory Dump", points: 300, description: "Analyze raw Windows RAM memory dump to recover AES key and play final confession." }
    ]
  }
];

export const EVIDENCE_NODES: EvidenceNode[] = [
  {
    id: "e1",
    title: "Vikram's Homicide Photo",
    type: "Photo",
    x: 18,
    y: 20,
    image: "/assets/vikram_face_crosses.jpeg",
    suspectRef: "Victim (Vikram Malhotra)",
    description: "Found collapsed in Penthouse 42 private study. Smart locks overridden at 23:47.",
    timestamp: "Oct 14 // 00:05 IST",
    tag: "PRIMARY HOMICIDE"
  },
  {
    id: "e2",
    title: "Burner Phone Recovered",
    type: "Burner Phone",
    x: 48,
    y: 15,
    suspectRef: "Riya Sharma",
    description: "Recovered from trash chute near fire exit. XOR encrypted with Employee ID formula.",
    timestamp: "Oct 14 // 01:15 IST",
    tag: "ENCRYPTED EVIDENCE"
  },
  {
    id: "e3",
    title: "Offshore Ledger 47Cr",
    type: "Ledger",
    x: 80,
    y: 22,
    suspectRef: "Arjun Kapoor",
    description: "Hidden Sheet6 in financial accounts. 14 wire transfers to Oceanic Ventures LLC.",
    timestamp: "Oct 12 // 16:30 IST",
    tag: "FINANCIAL MOTIVE"
  },
  {
    id: "e4",
    title: "Dark Web Poison Search",
    type: "Disk Dump",
    x: 25,
    y: 70,
    image: "/assets/ex-wife.jpeg",
    suspectRef: "Meera Desai",
    description: "Browser history shows queries for 'untraceable poison buy' and forged will draft.",
    timestamp: "Oct 10 // 22:18 IST",
    tag: "PREMEDITATED"
  },
  {
    id: "e5",
    title: "Tampered CCTV Feed",
    type: "CCTV Frame",
    x: 55,
    y: 72,
    image: "/assets/bodyguard.jpeg",
    suspectRef: "Karan Singh",
    description: "Hallway camera frames 447-449 altered. Faint Bitcoin address steganography detected.",
    timestamp: "Oct 13 // 23:47 IST",
    tag: "BREACH COVERT"
  },
  {
    id: "e6",
    title: "Flat 402 Command Node",
    type: "Audio Wiretap",
    x: 82,
    y: 68,
    suspectRef: "Devraj & Rao",
    description: "VHF radio recordings intercepted: 'System offline at 23:47. You have 12 minutes.'",
    timestamp: "Oct 13 // 21:00 IST",
    tag: "MASTER CONSPIRACY"
  }
];

export const ROUNDS_INFO = [
  {
    roundNumber: "01",
    title: "ROUND 1 — THE CASE FILE",
    subtitle: "Investigate. Connect the clues. Uncover the motive.",
    mode: "Case Investigation / Theory Evaluation",
    duration: "Qualifier Round",
    progression: "🕵️ Phase 1: Case Investigation",
    skills: ["Critical Thinking", "OSINT", "Problem Solving", "Logical Reasoning"],
    flow: ["Case", "Investigate", "Analyze Clues", "Build Theory", "Score", "Shortlist"],
    description: "Teams are given different mystery cases to investigate. They must analyze the available clues, connect evidence, identify possible motives, suspects, timelines, and contradictions, and construct their own conclusion and conspiracy theory evaluated against predefined case-solving metrics.",
    highlights: [
      "Investigate multi-layered physical and digital clue dossiers",
      "Analyze evidence, suspects, contradictions & movement timelines",
      "Construct a structured conclusion & conspiracy theory submission",
      "Highest-scoring teams shortlisted for Round 2 — the CTF"
    ],
    statusBadge: "THE CASE FILE",
    accentColor: "cyan"
  },
  {
    roundNumber: "02",
    title: "ROUND 2 — THE CTF (OPERATION NIGHTFALL)",
    subtitle: "The 6-Suspect Mainframe Exploit (From ctf_challenge_round_2.md)",
    mode: "Hands-on Technical CTF Mainframe",
    duration: "Grand Finale CTF Arena",
    progression: "💻 Phase 2: CTF Challenge",
    skills: ["Reverse Engineering", "Memory Forensics", "Web Exploitation", "Cryptanalysis"],
    flow: ["Riya's Phone", "Arjun's Ledger", "Meera's Will", "Karan's CCTV", "Devraj's Server", "Rao's Vault"],
    description: "The official technical CTF challenge. Shortlisted detective squads break into the crime scene mainframe to solve 24 chained challenges across 6 suspects for 4,500 total points, concluding with unmasking the insider mole.",
    highlights: [
      "Suspect 1 (Riya): XOR burner phone decrypt, SQLite chat recovery & APK reverse engineering",
      "Suspect 2 (Arjun): Cooked books, split PGP key reconstruction & SQL injection portal bypass",
      "Suspect 3 (Meera): Chrome history cache carving, Vigenère cipher & carved PDF will analysis",
      "Suspect 4 (Karan): Wireshark DNS payload exfiltration, CCTV frame stego & XOR radio intercept",
      "Suspect 5 (Devraj): Linux SUID privilege escalation, AES-CTR PRNG seed & blockchain tracing",
      "Suspect 6 (Commissioner Rao): 7z flag archive vault, IDOR portal & Volatility RAM memory dump"
    ],
    statusBadge: "THE CTF SHOWDOWN",
    accentColor: "crimson"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What is CID CTF: Operation Zero Hour?",
    answer: "It is an immersive narrative-driven Cyber Crime & Murder Mystery Capture The Flag (CTF) tournament. Unlike conventional CTFs, every challenge represents actual forensic evidence from a tech tycoon's homicide case."
  },
  {
    question: "What are the requirements for Round 1 vs Round 2?",
    answer: "Round 1 is a rapid online qualifier focusing on analytical aptitude, OSINT, logic puzzles, and beginner-to-intermediate cipher cracking. The top squads qualify for Round 2, where the full 4,500-point forensic exploitation playground unlocks."
  },
  {
    question: "What is the team size and who is eligible?",
    answer: "You can participate as a solo detective or enlist a squad of 2 to 4 members. Students from any college or university with an interest in cybersecurity, digital forensics, or investigative problem-solving are welcome."
  },
  {
    question: "How do we register on Unstop?",
    answer: "Click the 'REGISTER ON UNSTOP' button anywhere on this portal. It will take your team directly to the official Unstop event registration page where you can create or join your squad."
  },
  {
    question: "What tools and skills do we need?",
    answer: "Helpful tools include Wireshark, Ghidra/Jadx, CyberChef, SQLite Browser, ExifTool, Volatility 3, Python, and a web browser with DevTools. Prior CTF experience is not mandatory for Round 1!"
  }
];
