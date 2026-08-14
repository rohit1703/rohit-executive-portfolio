// Shared content — references (Home rail + Proof) and events (Home).
export interface Reference {
  name: string;
  title: string;
  company: string;
  pre: string;   // quote text before the highlighted phrase
  hl: string;    // the accent-italic phrase
  post: string;  // quote text after
}

export const REFERENCES: Reference[] = [
  { name: 'Abhishek Poddar', title: 'Co-Founder & CEO', company: 'Plum Benefits',
    pre: 'Rohit was the driving force behind many key initiatives at Plum, bringing innovative ideas and ',
    hl: 'exceptional execution', post: ' to the table.' },
  { name: 'Adwitiya Singh', title: 'Head, BFSI & Payroll', company: 'Clear',
    pre: 'The go-to person and the ',
    hl: 'load balance between internal customers and external stakeholders',
    post: '. He pushed the whole team towards newer possibilities and use cases.' },
  { name: 'Saurabh Arora', title: 'Co-Founder & CTO', company: 'Plum Benefits',
    pre: 'Rohit approaches work like a sport, always a team player — ',
    hl: 'a natural community builder', post: ', from partnerships to experiential marketing.' },
  { name: 'Shriya Shah', title: 'Performance Lead', company: 'Plum Benefits',
    pre: "Rohit's ", hl: 'energy and grit is unmatched',
    post: '. He ideates, executes, and achieves all of his goals, aligning teams and managing stakeholders.' },
  { name: 'Prerit Bajaj', title: 'Associate Director, ABM', company: 'Plum Benefits',
    pre: 'Rohit consistently ', hl: 'went above and beyond',
    post: ', spearheading multiple high-impact campaigns. His infectious energy drove our results.' },
  { name: 'Tanushree Upadhyay', title: 'Account Management', company: 'Clear',
    pre: 'Handles even the ', hl: 'toughest client effortlessly',
    post: ' — a skill that often takes years. He leads by example and kept team morale up.' },
  { name: 'Akshay Bhatt', title: 'Strategic Alliances & Growth', company: 'Clear',
    pre: 'Great zeal and enthusiasm towards challenging tasks, closing them with the best solution — ',
    hl: 'an asset to any company', post: ' he works for.' },
  { name: 'Abhishek Srivastava', title: 'Partnerships', company: 'Clear',
    pre: 'One of the most hardworking people I have worked with — ',
    hl: 'the all-rounder of the team', post: ". I'd love the chance to work with him again." },
  { name: 'Petrisor Guta', title: 'Senior Comms & Social Strategist', company: 'Grid Dynamics',
    pre: 'A wonderful professional, always on point, always innovating his way of working and ',
    hl: 'delivering super fast and accurate', post: '. Any employer would be lucky to have him.' },
];

export interface EventItem { title: string; photo: string; }

export const EVENTS: EventItem[] = [
  { title: 'Grid Dynamics × Temporal — Agentic AI', photo: '/moments/08-temporal-agentic-ai.jpg' },
  { title: 'GPEN Chennai — meetup with Ford', photo: '/moments/16-gpen-chennai-talk.jpg' },
  { title: 'Dynamic Talks, Bengaluru', photo: '/moments/07-dynamic-talks-blr.jpg' },
  { title: 'Dynamic Talks, Hyderabad', photo: '/moments/10-dynamic-talks-hyd-mic.jpg' },
  { title: 'Technology & Innovation Day 2024', photo: '/moments/19-tech-innovation-stage.jpg' },
  { title: 'CSR — Grid Dynamics × Nirmaan', photo: '/moments/06-csr-nirmaan.jpg' },
  { title: 'Top 25 Emerging Leaders 2024 — Indian Startup Times', photo: '/moments/04-top-25-emerging-leaders.jpg' },
  { title: 'Humanising Workplaces — Plum', photo: '/moments/03-humanising-workplaces.jpg' },
  { title: 'GrowthX Founders Masterclass', photo: '/moments/05-growthx-networking.jpg' },
  { title: 'The Talent Deck — People Connect', photo: '/moments/02-talent-deck.jpg' },
];
