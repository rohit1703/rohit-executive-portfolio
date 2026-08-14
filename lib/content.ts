// Shared content — references (Home rail) and events (Home).
export interface Reference {
  name: string;
  title: string;
  company: string;
  pre: string;
  hl: string;
  post: string;
}

// v2 order: lead with the ones that describe the work (Saurabh, Adwitiya),
// keep the CEO (Poddar) prominent. Trimmed to two sentences each.
export const REFERENCES: Reference[] = [
  { name: 'Saurabh Arora', title: 'Co-Founder & CTO', company: 'Plum Benefits',
    pre: 'Rohit approaches work like a sport, always a team player. ',
    hl: 'A natural community builder', post: ', he took on everything from partnerships to experiential marketing.' },
  { name: 'Adwitiya Singh', title: 'Head, BFSI & Payroll', company: 'Clear',
    pre: 'Rohit was the ',
    hl: 'load balance between internal customers and external stakeholders',
    post: '. He pushed the whole team toward newer possibilities and use cases.' },
  { name: 'Abhishek Poddar', title: 'Co-Founder & CEO', company: 'Plum Benefits',
    pre: 'Rohit was the driving force behind many of our key initiatives at Plum — ',
    hl: 'innovative ideas and exceptional execution', post: ', on everything he took on.' },
  { name: 'Shriya Shah', title: 'Performance Lead', company: 'Plum Benefits',
    pre: "Rohit's ", hl: 'energy and grit is unmatched',
    post: '. He ideates, executes, and hits his goals — reliable on every initiative.' },
  { name: 'Prerit Bajaj', title: 'Associate Director, ABM', company: 'Plum Benefits',
    pre: 'Rohit ', hl: 'went above and beyond',
    post: ', leading multiple high-impact campaigns. His focus and consistency drove the results.' },
  { name: 'Tanushree Upadhyay', title: 'Account Management', company: 'Clear',
    pre: 'Rohit handled ', hl: 'the toughest client effortlessly',
    post: " — a skill that usually takes years. He led by example and kept the team's morale up." },
  { name: 'Akshay Bhatt', title: 'Strategic Alliances & Growth', company: 'Clear',
    pre: 'Rohit closes hard problems with the best solution. He’s ',
    hl: 'an asset to any company', post: ' he works for.' },
  { name: 'Abhishek Srivastava', title: 'Partnerships', company: 'Clear',
    pre: "One of the most dedicated people I've worked with — ",
    hl: 'the all-rounder of the team', post: ', across every vertical. I’d work with him again in a heartbeat.' },
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
