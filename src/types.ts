export interface Suspect {
  id: string;
  name: string;
  role: string;
  codename: string;
  image?: string;
  status: 'In Custody' | 'Under Surveillance' | 'Prime Suspect' | 'Mole / Wanted' | 'Wanted / Fugitive';
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Extreme' | 'Critical';
  motive: string;
  seizedDevice: string;
  challenges: {
    num: string;
    title: string;
    category: string;
    points: number;
    description: string;
  }[];
  quote: string;
  flagHint: string;
}

export interface EvidenceNode {
  id: string;
  title: string;
  type: 'Photo' | 'Burner Phone' | 'Ledger' | 'Audio Wiretap' | 'Disk Dump' | 'CCTV Frame';
  x: number; // percentage
  y: number; // percentage
  image?: string;
  suspectRef: string;
  description: string;
  timestamp: string;
  tag: string;
}
