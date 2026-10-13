# 🔍 CID CTF — Full Challenge Walkthrough (Player Perspective)

> This document shows **exactly** what participants experience at every step.
> For each challenge: **What you get → What you do → What you find → What you submit**

---

## 🧑 SUSPECT 1: Riya Sharma — The Secretary

> Participants are told: *"A burner phone was recovered near the crime scene. It belongs to Vikram's secretary, Riya Sharma. The phone image is encrypted. Crack it and find out what she was hiding."*

---

### Challenge 1.1 — Crack the Phone 🔐

```mermaid
flowchart LR
    A["📦 You receive:\n• phone_image.enc\n• sticky_note.jpg"] --> B["🔍 What you do:\n1. Open sticky_note.jpg\n2. Read handwritten text:\n   key = emp_id × 7 + 3\n3. Run exiftool on sticky_note.jpg\n4. Find EXIF field:\n   Employee_ID = 4521\n5. Calculate: 4521×7+3 = 31650\n6. XOR decrypt phone_image.enc\n   with key 31650"]
    B --> C["📂 You unlock:\nphone_contents.zip\n(SMS db, photos, APK)"]
```

**Flag:** `CID{ph0n3_unlocked_31650}` (submitted to scoreboard to confirm you cracked it)

**How it connects to 1.2:** The ZIP you just decrypted contains the files for the next 3 challenges.

---

### Challenge 1.2 — Deleted Texts 🧪

```mermaid
flowchart LR
    A["📦 From the ZIP:\n• messages.db (SQLite)"] --> B["🔍 What you do:\n1. Open messages.db in\n   sqlitebrowser or sqlite3\n2. Normal messages visible\n   (grocery lists, casual chats)\n3. Notice gaps in row IDs:\n   1,2,3,7,8,12...\n4. Recover deleted rows from\n   WAL file or freelist pages\n5. Run: pragma freelist_count;\n   then parse free pages"]
    B --> C["💬 You find 3 deleted messages:\n\n• 'The files are with A.K. He keeps\n   them on a spreadsheet on his laptop'\n• 'Meet at warehouse 11pm sharp'\n• 'backup pwd: vikram2024'\n"]
```

**Flag:** `CID{d3l3t3d_but_n0t_g0n3}`

**How it connects to 1.3:** The password `vikram2024` from deleted texts is needed in the next challenge.

---

### Challenge 1.3 — The Hidden Photo 🖼️

```mermaid
flowchart LR
    A["📦 From the ZIP:\n• 12 photos in /gallery/\n  (selfies, food, sunset,\n   office pics...)"] --> B["🔍 What you do:\n1. Run steg tools on each photo\n   (zsteg, stegsolve, steghide)\n2. sunset_beach.png has\n   LSB-encoded data!\n3. Extract hidden data →\n   it's a password-protected ZIP\n4. Use password 'vikram2024'\n   from the deleted texts (1.2)\n5. Unzip → photo of a document\n   with 'Arjun Kapoor' circled"]
    B --> C["📄 You find:\nA photo of an internal memo\nwith Arjun Kapoor's name\ncircled in red marker"]
```

**Flag:** `CID{h1dd3n_1n_pl41n_s1ght}`

**How it connects to 1.4:** You now know Arjun is suspicious, but you need proof. The APK in the ZIP is the last piece.

---

### Challenge 1.4 — The Burner App 🔄

```mermaid
flowchart LR
    A["📦 From the ZIP:\n• NotesApp.apk"] --> B["🔍 What you do:\n1. Decompile with jadx/apktool\n2. Browse source code\n3. Find LoginActivity.java\n4. Hardcoded creds (obfuscated):\n   user = base64('== ...') → 'riya_s'\n   pass = reverse('drowssap') → 'password'\n   (but reversed + base64)\n5. Find API endpoint URL in code:\n   https://ctf-server/api/notes\n6. Login with creds via curl/browser"]
    B --> C["📡 Server responds:\n{\n  next_suspect: 'Arjun Kapoor',\n  clue: 'Check the offshore\n         spreadsheet',\n  flag: 'CID{r1y4_kn3w_t00_much}'\n}"]
```

**Flag:** `CID{r1y4_kn3w_t00_much}`

---

### 🔗 CHAIN LINK: Suspect 1 → Suspect 2

> The API response explicitly says: **"Arjun Kapoor"** and **"offshore spreadsheet"**
> The scoreboard unlocks Suspect 2's challenge files after you submit this flag.

---
---

## 👨 SUSPECT 2: Arjun Kapoor — The Business Partner

> Participants are told: *"Arjun Kapoor was Vikram's 50-50 business partner. ₹47 Crore has gone missing from the company. CID seized his laptop — here's what we found."*

---

### Challenge 2.1 — Cooked Books 📊

```mermaid
flowchart LR
    A["📦 You receive:\n• financials.xlsx"] --> B["🔍 What you do:\n1. Open in Excel/LibreCalc\n2. See 5 sheets of normal data\n   (Q1 Revenue, Expenses, etc.)\n3. Right-click sheet tabs →\n   'Unhide' → reveal Sheet6!\n4. Sheet6: secret transactions to\n   'Oceanic Ventures LLC'\n   totaling ₹47,00,00,000\n5. Hover over cell F12 →\n   a cell COMMENT appears\n   with a URL: ctf-server/portal"]
    B --> C["🔗 You find:\n• Shell company name\n• ₹47Cr laundered\n• URL to a financial portal"]
```

**Flag:** `CID{c00k3d_b00ks_47cr}`

**How it connects to 2.2:** You now have the URL and know about the shell company. The email archive has more details.

---

### Challenge 2.2 — The PGP Puzzle 🔐

```mermaid
flowchart LR
    A["📦 You receive:\n• email_archive/ folder\n  (10 .eml files, 1 is PGP\n   encrypted)\n• company_logo.jpg"] --> B["🔍 What you do:\n1. Find the PGP-encrypted .eml\n2. Need private key — it's split:\n\n   Part 1: File → Properties →\n   Custom Properties in the .xlsx\n   (field 'pgp_key_1')\n\n   Part 2: Run exiftool on\n   company_logo.jpg →\n   UserComment field\n\n   Part 3: One filename in the\n   archive is base64:\n   'cGdwX2tleV8z...' → decode it\n\n3. Concatenate parts → import key\n4. gpg --decrypt blackmail.eml"]
    B --> C["📧 Decrypted email:\n\nFrom: meera.desai@mail.com\nTo: arjun.kapoor@mail.com\n\n'I know about Oceanic Ventures.\nI know about the ₹47Cr. Pay me\nwhat I'm owed from the divorce\nor I go to the police. —Meera'"]
```

**Flag:** `CID{pgp_p1ec3s_t0g3th3r}`

**How it connects to 2.3:** The blackmail email reveals Meera Desai is involved. The portal URL from 2.1 is the next target.

---

### Challenge 2.3 — Follow the Money 🌐

```mermaid
flowchart LR
    A["🌐 You visit:\nctf-server/portal\n(Login page)"] --> B["🔍 What you do:\n1. Try login → 'Invalid credentials'\n2. Test SQL injection:\n   Username: admin' OR 1=1 --\n   Password: anything\n3. Bypass! You're in.\n4. See a transaction ledger with\n   100+ entries\n5. Search for 'K. Singh' →\n   3 payments labeled:\n   'Security Consulting'\n   totaling ₹10,00,000\n6. One entry has a note:\n   'See voicemail for confirmation'\n   + download link for .wav file"]
    B --> C["📥 You download:\nvoicemail_oct14.wav"]
```

**Flag:** `CID{sql1_th3_b00ks}`

**How it connects to 2.4:** You now have the voicemail file AND you know Karan Singh ("K. Singh") was being paid. But first, decode the voicemail.

---

### Challenge 2.4 — The Voicemail 🔊

```mermaid
flowchart LR
    A["📦 From the portal:\n• voicemail_oct14.wav"] --> B["🔍 What you do:\n1. Play it — hear muffled\n   argument (red herring)\n2. Open in Audacity\n3. Notice: Stereo file!\n   Left channel = argument\n   Right channel = beeping\n4. Solo the right channel\n5. Recognize DTMF tones\n   (phone dial sounds)\n6. Use DTMF decoder tool →\n   digits: 9876543210\n7. Reverse: 0123456789\n8. Hex decode: phone number\n   that maps to flag"]
    B --> C["📞 You find:\nMeera Desai's burner\nphone number\n+ flag"]
```

**Flag:** `CID{f0ll0w_th3_m0n3y_tr41l}`

---

### 🔗 CHAIN LINK: Suspect 2 → Suspect 3

> The blackmail email (2.2) names **Meera Desai**. The DTMF phone number is her burner.
> Scoreboard unlocks Suspect 3.

---
---

## 👩 SUSPECT 3: Meera Desai — The Ex-Wife

> *"The divorce left Meera with nothing. Vikram's legal team destroyed her. CID seized her personal laptop."*

---

### Challenge 3.1 — Browser Breadcrumbs 🧪

```mermaid
flowchart LR
    A["📦 You receive:\n• meera_browser_profile/\n  (Chrome-style folder with\n   History, Cookies, Login Data,\n   Bookmarks files)"] --> B["🔍 What you do:\n1. Open 'History' in sqlite3\n2. Query: SELECT url, title\n   FROM urls ORDER BY\n   last_visit_time DESC\n3. See damning searches:\n   'untraceable poison buy'\n   'disable CCTV remotely'\n   'hire someone dark web'\n4. Check Bookmarks file (JSON)\n   → one bookmark URL:\n   ctf-server/paste/a8f3k2\n5. Open 'Login Data' (SQLite)\n   → saved password entry for\n   site 'vigenere-key.local'\n   password = 'MALHOTRA'"]
    B --> C["🔗 You find:\n• Pastebin URL\n• Vigenère key: MALHOTRA"]
```

**Flag:** `CID{br0ws3r_n3v3r_f0rg3ts}`

**How it connects to 3.2:** You have the pastebin URL AND the decryption key.

---

### Challenge 3.2 — The Cipher Paste 🔐

```mermaid
flowchart LR
    A["🌐 You visit:\nctf-server/paste/a8f3k2\n(Block of scrambled text)"] --> B["🔍 What you do:\n1. Recognize Vigenère cipher\n   (or AI helps identify it)\n2. Use key 'MALHOTRA' from 3.1\n3. Decrypt using CyberChef\n   or any Vigenère tool\n4. Read the plaintext"]
    B --> C["📝 Decrypted diary entry:\n\n'Oct 10: I contacted K through\nthe usual channels. He says ₹10L\nupfront, ₹10L after. I agreed.\nMeeting him at our usual spot —\ncheck my posts, you know which\none. The will is ready. Once V\nis gone, everything is mine.\n—M'"]
```

**Flag:** `CID{v1g3n3r3_d14ry_cr4ck3d}`

**How it connects to 3.3:** The diary mentions "the will is ready" → look for the forged will. It also mentions "check my posts" → needed for 3.4.

---

### Challenge 3.3 — The Forged Will 🧪

```mermaid
flowchart LR
    A["📦 You receive:\n• laptop_dump.img\n  (small forensic image,\n   ~200MB)"] --> B["🔍 What you do:\n1. Run file carving tools:\n   foremost / scalpel / binwalk\n   on the disk image\n2. Recover a deleted PDF:\n   'last_will_vikram_m.pdf'\n3. Open PDF — looks like a\n   normal legal will document\n4. Press Ctrl+A (select all)\n   → hidden white-on-white text\n   appears!\n5. Copy the hidden text"]
    B --> C["📄 Hidden text reveals:\n\n'GPS: 19.0760, 72.8777\nKaran Singh — meeting confirmed\nOct 13, 9:00 PM\nLocation: Cafe Noir, Bandra'\n\n+ flag in the text"]
```

**Flag:** `CID{wh1t3_0n_wh1t3_w1ll}`

**How it connects to 3.4:** You have GPS coordinates. The diary said "check my posts" — time to find Meera's social media.

---

### Challenge 3.4 — The Social Trail 🌐

```mermaid
flowchart LR
    A["🌐 Hints so far:\n• 'check my posts'\n• GPS: 19.0760, 72.8777\n• Name: Meera Desai"] --> B["🔍 What you do:\n1. Visit the CTF's fake social\n   media platform (linked from\n   the scoreboard or found via\n   browser bookmarks)\n2. Search 'Meera Desai' →\n   find her profile with 20 posts\n3. Several photos have location\n   tags — check each one\n4. Cross-reference GPS from 3.3\n   with geotagged photos\n5. Photo #14 matches! (Cafe Noir)\n6. Right-click → Inspect Element\n   on that photo\n7. Find alt='base32_encoded_flag'\n8. Decode base32 → flag"]
    B --> C["🏷️ You find:\nThe meeting location confirmed\n+ Karan Singh tagged\nin photo comments"]
```

**Flag:** `CID{h3ll_h4th_n0_fury}`

---

### 🔗 CHAIN LINK: Suspect 3 → Suspect 4

> GPS + diary + social media all point to **Karan Singh** as the hired muscle.
> Scoreboard unlocks Suspect 4.

---
---

## 🧔 SUSPECT 4: Karan Singh — The Bodyguard

> *"Vikram's personal bodyguard for 15 years. He had the keys, the codes, and access to everything. CID intercepted his network traffic on the night of the murder."*

---

### Challenge 4.1 — DNS Exfil 🌐

```mermaid
flowchart LR
    A["📦 You receive:\n• capture_oct14.pcap"] --> B["🔍 What you do:\n1. Open in Wireshark\n2. Tons of traffic (HTTP,\n   TLS, DNS, Netflix...)\n3. Filter: dns\n4. Notice weird DNS queries:\n   4d53473a.evil.ctf\n   20446576.evil.ctf\n   72616a2e.evil.ctf\n   ...(20+ queries)\n5. Export subdomain labels\n6. Hex decode each label\n7. Concatenate in order"]
    B --> C["📨 Decoded message:\n\n'MSG: Package delivered.\nCleanup done. CCTV wiped.\nContact D at the usual\naddress. Payment pending.'"]
```

**Flag:** `CID{dns_3xf1l_d3c0d3d}`

**How it connects to 4.2:** "CCTV wiped" — but was it really? Let's check the footage.

---

### Challenge 4.2 — The Tampered Footage 🖼️

```mermaid
flowchart LR
    A["📦 You receive:\n• hallway_cam.mp4\n  (30-second CCTV clip)"] --> B["🔍 What you do:\n1. Watch the video — looks\n   normal, Karan patrolling\n2. Extract all frames:\n   ffmpeg -i hallway_cam.mp4\n   frames/frame_%04d.png\n3. Get ~900 frames\n4. Compare adjacent frames\n   (diff tool or visual scan)\n5. Frames 447, 448, 449 look\n   slightly different!\n6. Increase brightness/contrast\n   on those 3 frames\n7. Each frame has faint text\n   written on the wall:\n   Frame 447: '1CID'\n   Frame 448: '7xR9'\n   Frame 449: 'mK2q'"]
    B --> C["💰 You find:\nBitcoin wallet address:\n1CID7xR9mK2q...\n(needed later in S5)"]
```

**Flag:** `CID{fr4m3_by_fr4m3}`

**How it connects to 4.3:** Now you know there's crypto payments involved. The radio transmissions will reveal who Karan was coordinating with.

---

### Challenge 4.3 — XOR Radio 🔐

```mermaid
flowchart LR
    A["📦 You receive:\n• transmission.bin\n• hint.txt saying:\n  'All messages start\n   with header KMSG0001'"] --> B["🔍 What you do:\n1. Known plaintext attack!\n2. First 8 bytes of file:\n   (hex) 2a 1f 0b 33 5c 41 2e 08\n3. XOR with 'KMSG0001':\n   K=4b M=4d S=53 G=47\n   0=30 0=30 0=30 1=31\n4. 2a⊕4b=61, 1f⊕4d=52...\n   Key = 'aR...' (8 bytes)\n5. XOR entire file with\n   repeating 8-byte key\n6. Read decrypted conversation"]
    B --> C["📻 Decrypted radio log:\n\nK: 'System offline at 23:47'\nD: 'Confirmed. You have 12 min'\nK: 'The package?'\nD: 'Flat 402, Cyber Heights.\n    Come before 22:00'\nK: 'Copy. Moving now.'"]
```

**Flag:** `CID{x0r_kn0wn_pl41nt3xt}`

**How it connects to 4.4:** "D" at "Flat 402, Cyber Heights" — who lives there? The tracker binary will confirm.

---

### Challenge 4.4 — The Tracker Binary 🔄

```mermaid
flowchart LR
    A["📦 You receive:\n• tracker (ELF binary\n  from Karan's USB)"] --> B["🔍 What you do:\n1. Run 'strings tracker' or\n   open in Ghidra\n2. Find hardcoded:\n   IP: ctf-server:8443\n   Token: 'ksingh_auth_x7f2'\n3. curl -H 'Auth: ksingh_auth_x7f2'\n   https://ctf-server:8443/logs\n4. Server returns GPS JSON"]
    B --> C["📍 GPS Movement Log:\n\n21:30 — Left Malhotra residence\n21:47 — Arrived Flat 402,\n         Cyber Heights (DEVRAJ)\n22:15 — Left Flat 402\n23:40 — Returned Malhotra residence\n23:47 — CCTV system disabled\n01:09 PM — 💀 Vikram's TOD\n\nResident of Flat 402:\nDEVRAJ PATEL"]
```

**Flag:** `CID{b0dygu4rd_g0n3_r0gu3}`

---

### 🔗 CHAIN LINK: Suspect 4 → Suspect 5

> GPS logs prove Karan visited **Devraj Patel** 2 hours before the murder. "D" in the radio = Devraj.
> Scoreboard unlocks Suspect 5.

---
---

# 💀💀💀 DIFFICULTY SPIKE 💀💀💀

> From here on, challenges have **multiple layers**, **deliberate misdirections**, and require **real exploitation skills**. AI can help write scripts but cannot replace hands-on work.

---

## 👨‍💻 SUSPECT 5: Devraj Patel — The Hacker

> *"A digital ghost. No social media, no public records. But every system Vikram owned has his fingerprints on it."*

---

### Challenge 5.1 — The Server 💻

```mermaid
flowchart LR
    A["📦 From Karan's USB:\n• id_rsa (SSH private key)\n• note: 'D's box:\n  ctf-server port 2222'"] --> B["🔍 What you do:\n1. ssh -i id_rsa guest@ctf-server -p 2222\n2. You're in as 'guest' (low priv)\n3. Can't read /root/case_files/\n4. Enumerate for privesc:\n   find / -perm -4000 2>/dev/null\n5. Find: /opt/tools/logviewer (SUID root)\n   OR discover cron job:\n   cat /etc/cron.d/cleanup →\n   '*/2 * * * * root /tmp/cleanup.sh'\n   AND /tmp/cleanup.sh is world-writable!\n6. Option A: exploit SUID binary\n   Option B: echo 'cp /root/case_files/*\n   /tmp/loot && chmod 777 /tmp/loot'\n   > /tmp/cleanup.sh\n   Wait 2 min...\n7. Read /root/case_files/"]
    B --> C["📂 You access:\n/root/case_files/\n├── clients.db\n├── encryptor.py\n└── evidence.db.enc"]
```

**Flag:** `CID{r00t3d_th3_gh0st}` (found in `/root/flag.txt`)

**How it connects to 5.2:** You now have the ransomware script AND the encrypted database.

---

### Challenge 5.2 — The Ransomware 🔄

```mermaid
flowchart LR
    A["📦 From the server:\n• encryptor.py\n• evidence.db.enc"] --> B["🔍 What you do:\n1. Read encryptor.py source code\n2. Uses AES-CTR mode\n3. IV = custom_prng(seed)\n4. seed = int(time.time()) // 3600\n   (hour-level timestamp)\n5. Check: ls -la evidence.db.enc\n   Modified: Oct 14 21:30 IST\n6. Calculate seed: convert to\n   epoch → divide by 3600\n\n   ⚠️ TRAP: Server timezone is\n   UTC+5:30 but file timestamp\n   shows IST. Must compute\n   correct UTC epoch!\n\n7. Generate keystream with\n   correct seed → decrypt"]
    B --> C["🗄️ Decrypted clients.db:\n\n| Client | Payment | Service |\n|---|---|---|\n| Meera D. | ₹5L | 'Arrange contact' |\n| Karan S. | ₹3L | 'CCTV disable tool' |\n| Comm. Rao | ₹5L | 'Disable security protocols' |\n| ... | ... | ... |\n\n+ Bitcoin wallet references\n+ API config for dead drop site"]
```

**Flag:** `CID{t1m3z0n3_tr4p_f3ll}`

**How it connects to 5.3:** The Bitcoin wallet from S4C2 appears in the DB. Time to follow the money.

---

### Challenge 5.3 — Blockchain Trace 🔐🌐

```mermaid
flowchart LR
    A["🌐 You know:\n• Bitcoin wallet 1CID7xR9mK2q\n  (from S4 tampered footage)\n• Mock blockchain explorer\n  linked from clients.db"] --> B["🔍 What you do:\n1. Visit CTF blockchain explorer\n2. Search wallet 1CID7xR9mK2q\n3. Follow transaction chain:\n   Wallet A (Meera) →\n   Wallet B (Karan) →\n   Wallet C (Devraj) →\n   Wallet D (???)\n4. Wallet D has 50+ transactions\n   (noise/padding!)\n5. Check EACH transaction's\n   memo field (most are empty)\n6. Transaction #37 has a memo!\n   It's hex → base64 → ROT13\n   (triple encoded)\n7. Unwrap all 3 layers"]
    B --> C["📜 Decoded memo:\n\n'Commissioner Rao authorized\nthe hit. Payment confirmed.\nOperation Nightfall is a go.'\n\n+ Wallet D belongs to a\nshell company linked to Rao"]
```

**Flag:** `CID{bl0ckch41n_n3v3r_l13s}`

**How it connects to 5.4:** You now have proof Rao is involved. One more piece — the dead drop file.

---

### Challenge 5.4 — The Dead Drop 🌐

```mermaid
flowchart LR
    A["🌐 From clients.db:\n• URL: ctf-server/deadrop\n• api_config: {\n    alg: 'HS256',\n    hint: 'victim_fullname\n           _lowercase'\n  }"] --> B["🔍 What you do:\n1. Visit ctf-server/deadrop\n   → 403 Forbidden\n2. Inspect → needs JWT token\n   in Authorization header\n3. Secret = 'vikram_malhotra'\n   (from the hint)\n4. Forge JWT:\n   Header: {alg:'HS256'}\n   Payload: {role:'admin'}\n   Sign with secret\n5. curl -H 'Authorization:\n   Bearer <token>'\n   ctf-server/deaddrop/files\n6. Download: recording.wav\n7. Open in Audacity →\n   Spectrogram view\n8. The spectrogram visually\n   spells out letters!"]
    B --> C["👁️ Spectrogram reads:\n\nCID{gh0st_1n_th3_mach1n3}\n\n(The audio itself is Rao's\nvoice authorizing the hit)"]
```

**Flag:** `CID{gh0st_1n_th3_mach1n3}`

---

### 🔗 CHAIN LINK: Suspect 5 → Suspect 6

> Client list, blockchain, AND audio recording all point to **Commissioner Rao**.
> To unlock Suspect 6: **submit all 5 previous flags**.

---
---

## 👴 SUSPECT 6: Commissioner Rao — The Insider (FINAL BOSS)

> *"He assigned himself to lead the investigation. He was suppressing evidence, misdirecting officers, and covering tracks. The man solving the case... was the one who ordered the murder."*

### 🔒 Entry Gate

```
Combine all 5 suspect flags:
CID{r1y4_kn3w_t00_much}
CID{f0ll0w_th3_m0n3y_tr41l}
CID{h3ll_h4th_n0_fury}
CID{b0dygu4rd_g0n3_r0gu3}
CID{gh0st_1n_th3_mach1n3}

Concatenate → this is the passphrase for the final archive
```

---

### Challenge 6.1 — The Vault 🔐

```mermaid
flowchart LR
    A["📦 You receive:\n• rao_vault.7z\n  (password = concatenated\n   5 flags)"] --> B["🔍 What you do:\n1. 7z x rao_vault.7z -p'CID{r1y4\n   _kn3w_t00_much}CID{f0ll0w...}'\n2. Inside: multiple files\n   including confession_draft.enc\n3. It's XOR encrypted again\n4. Derive the OTP key:\n   Take content between {}\n   of each flag → first char:\n   r, f, h, b, g = 'rfhbg'\n5. XOR confession_draft.enc\n   with repeating key 'rfhbg'\n6. Decrypt → read confession"]
    B --> C["📝 Rao's confession draft:\n\n'I did what had to be done.\nVikram was going to expose the\nentire network. Arjun funded it,\nMeera wanted revenge, I wanted\nprotection. Devraj handled the\ntechnical side. Karan did the\nrest. ₹2Cr was my price.\nFlight to Caracas booked for\nOct 20. — R'"]
```

**Flag:** `CID{th3_c0nf3ss10n}`

---

### Challenge 6.2 — The Mole Network 🌐

```mermaid
flowchart LR
    A["🌐 From Rao's files:\n• URL to CID internal portal\n  ctf-server/cid-portal"] --> B["🔍 What you do:\n1. Register an account on portal\n2. Login → your profile page:\n   /profile?id=1337\n3. Try IDOR: /profile?id=1\n   → Commissioner Rao's profile!\n4. See 'Documents' tab\n5. Click download on\n   'operation_nightfall.pdf'\n   → Error: invalid token\n6. View page source →\n   find hidden form field\n   with TOTP token logic\n7. Read the JavaScript:\n   secret is in the JS source\n8. Generate valid TOTP token\n9. Submit form → download PDF"]
    B --> C["📋 operation_nightfall.pdf:\n\nFull murder plan:\n• Oct 13 21:00 — Karan meets Devraj\n• Oct 14 12:47 PM — CCTV kill switch\n• Oct 14 01:00 PM — Karan enters penthouse\n• Oct 14 01:09 PM — Vikram eliminated\n• Oct 14 01:25 PM — USB drive extracted\n• Payments: Meera ₹20L, Karan ₹20L,\n  Devraj ₹8L, Rao ₹2Cr"]
```

**Flag:** `CID{m0l3_n3tw0rk_3xp0s3d}`

---

### Challenge 6.3 — The Escape Plan 🧪

```mermaid
flowchart LR
    A["📦 From the vault:\n• boarding_pass.pdf\n  (Flight to Caracas,\n   Oct 20)"] --> B["🔍 What you do:\n1. Run pdfid / pdf-parser\n   on the PDF\n2. Detect: /JavaScript action!\n   (suspicious for a boarding pass)\n3. Extract embedded JS\n4. JS is obfuscated:\n   var a='C';var b='H';\n   var c=a+b+...(100 lines)\n5. Deobfuscate (manually or\n   use JS beautifier + eval)\n   → reveals IBAN number:\n   CH93 0076 2011 6238 5295 7\n6. ALSO: scan the PDF417\n   barcode on the boarding pass\n   using a barcode reader\n7. Barcode data ≠ visible text!\n   Passenger: 'Rajesh Verma'\n   (Rao's alias!)"]
    B --> C["🛫 You find:\n• Swiss bank IBAN\n• Rao's escape alias:\n  'Rajesh Verma'\n• Flag components from\n  both the JS + barcode"]
```

**Flag:** `CID{n0_3sc4p3_fr0m_just1c3}`

---

### Challenge 6.4 — Case Closed 🏆

```mermaid
flowchart LR
    A["📦 You receive:\n• memory_dump.raw\n  (~100MB, from Rao's\n   office computer)"] --> B["🔍 What you do:\n1. Load in Volatility 3:\n   vol -f memory_dump.raw\n   windows.pslist\n2. Find suspicious process:\n   'evidence_shredder.exe'\n   PID: 4892\n3. Dump process memory:\n   vol -f memory_dump.raw\n   windows.memmap --pid 4892\n   --dump\n4. Strings on the dump →\n   find AES key in plaintext:\n   'NIGHTFALL_KEY_2024'\n5. Also find filename:\n   'final_confession.mp4.enc'\n6. Encrypted video is in\n   Rao's vault files\n7. openssl aes-256-cbc -d\n   -k 'NIGHTFALL_KEY_2024'\n   -in final_confession.mp4.enc\n   -out final_confession.mp4\n8. Play video: Rao typing\n   his confession on screen\n9. exiftool final_confession.mp4\n   → Comment field = flag"]
    B --> C["🏆 MASTER FLAG:\n\nCID{c4s3_cl0s3d_just1c3_s3rv3d}\n\n🎉 CASE SOLVED 🎉\n\nThe conspiracy:\nMeera wanted revenge.\nArjun wanted the money.\nRao wanted protection.\nDevraj was the tech.\nKaran was the muscle.\nRiya knew too much."]
```

**Flag:** `CID{c4s3_cl0s3d_just1c3_s3rv3d}`

---

## 📊 Complete Flag Table

| # | Challenge | Flag | Points |
|---|-----------|------|--------|
| 1.1 | Crack the Phone | `CID{ph0n3_unlocked_31650}` | 100 |
| 1.2 | Deleted Texts | `CID{d3l3t3d_but_n0t_g0n3}` | 100 |
| 1.3 | Hidden Photo | `CID{h1dd3n_1n_pl41n_s1ght}` | 100 |
| 1.4 | Burner App | `CID{r1y4_kn3w_t00_much}` | 100 |
| 2.1 | Cooked Books | `CID{c00k3d_b00ks_47cr}` | 125 |
| 2.2 | PGP Puzzle | `CID{pgp_p1ec3s_t0g3th3r}` | 125 |
| 2.3 | Follow the Money | `CID{sql1_th3_b00ks}` | 125 |
| 2.4 | Voicemail | `CID{f0ll0w_th3_m0n3y_tr41l}` | 125 |
| 3.1 | Browser Breadcrumbs | `CID{br0ws3r_n3v3r_f0rg3ts}` | 150 |
| 3.2 | Cipher Paste | `CID{v1g3n3r3_d14ry_cr4ck3d}` | 150 |
| 3.3 | Forged Will | `CID{wh1t3_0n_wh1t3_w1ll}` | 150 |
| 3.4 | Social Trail | `CID{h3ll_h4th_n0_fury}` | 150 |
| 4.1 | DNS Exfil | `CID{dns_3xf1l_d3c0d3d}` | 175 |
| 4.2 | Tampered Footage | `CID{fr4m3_by_fr4m3}` | 175 |
| 4.3 | XOR Radio | `CID{x0r_kn0wn_pl41nt3xt}` | 175 |
| 4.4 | Tracker Binary | `CID{b0dygu4rd_g0n3_r0gu3}` | 175 |
| 5.1 | The Server | `CID{r00t3d_th3_gh0st}` | 250 |
| 5.2 | Ransomware | `CID{t1m3z0n3_tr4p_f3ll}` | 250 |
| 5.3 | Blockchain Trace | `CID{bl0ckch41n_n3v3r_l13s}` | 250 |
| 5.4 | Dead Drop | `CID{gh0st_1n_th3_mach1n3}` | 250 |
| 6.1 | The Vault | `CID{th3_c0nf3ss10n}` | 300 |
| 6.2 | Mole Network | `CID{m0l3_n3tw0rk_3xp0s3d}` | 300 |
| 6.3 | Escape Plan | `CID{n0_3sc4p3_fr0m_just1c3}` | 300 |
| 6.4 | Case Closed | `CID{c4s3_cl0s3d_just1c3_s3rv3d}` | 300 |
| | | **TOTAL** | **4,500** |
