// Shared content — references (Home rail), events list, and the full photo gallery.
export interface Reference {
  name: string; title: string; company: string;
  pre: string; hl: string; post: string;
}

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
  { name: 'Petrisor Guta', title: 'Senior Comms & Social Strategist', company: 'Grid Dynamics',
    pre: 'A memorable colleague and a wonderful professional — always on point, always innovating his way of working and ',
    hl: 'delivering super fast and accurate', post: '. Any employer would be lucky to have him.' },
];

// LinkedIn post links, verified per production notes (LinkedIn routes on the
// numeric activity id; some slugs are decorative/misleading).
export const LI_ACTIVITY = 'https://www.linkedin.com/in/rohitmallavarapu17/recent-activity/all/';
const P_ANTHILL = 'https://www.linkedin.com/posts/rohitmallavarapu17_peak-partnership-over-the-weekend-activity-7051133000561938432-4SdQ';
const P_TALENTDECK = 'https://www.linkedin.com/posts/rohitmallavarapu17_thank-you-for-having-us-over-at-people-connect-activity-7155560305685618688-SlYG';
const P_HUMANISING = 'https://www.linkedin.com/posts/rohitmallavarapu17_we-started-humanising-workplaces-with-a-mission-activity-7158070519924228096-nEZp';
const P_TOP25 = 'https://www.linkedin.com/posts/rohitmallavarapu17_the-new-wave-meet-the-25-emerging-community-activity-7185479454809305088-uJcV';
const P_GROWTHX = 'https://www.linkedin.com/posts/rohitmallavarapu17_raised-funds-on-a-piece-of-paper-proud-activity-7196057769240584192-K6v-';
const P_CSR = 'https://www.linkedin.com/posts/rohitmallavarapu17_digitalempowerment-aiforgood-futureready-activity-7354100901751517184-QvaT';
const P_COCREATOR = 'https://www.linkedin.com/posts/rohitmallavarapu17_dynamictalks-aicocreator-griddynamics-activity-7373312194433921024-l4-b';
const P_TEMPORAL = 'https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-dynamictalks-agenticai-activity-7402651704946843648-qVwg';
const P_PACKED = 'https://www.linkedin.com/posts/grid-dynamics-career_ai-leaders-packed-room-ugcPost-7401158094870765571-Mssc';
const P_INCREDIBLE = 'https://www.linkedin.com/posts/grid-dynamics_what-an-incredible-eve-ugcPost-7399046171186532353-cxJI';
const P_TECHINNO1 = 'https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-aiinnovation-digitaltransformation-activity-7252996171978190848-DPJ9';
const P_TECHINNO2 = 'https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-preparetogrow-activity-7260296724965949440-2HEP';

export interface EventItem { title: string; photo: string; href: string; }

// The named appearances (text list). Each row links to its specific post.
export const EVENTS: EventItem[] = [
  { title: 'Grid Dynamics × Temporal — Agentic AI', photo: '/moments/08-temporal-agentic-ai.jpg', href: P_TEMPORAL },
  { title: 'GPEN Chennai — meetup with Ford', photo: '/moments/16-gpen-chennai-talk.jpg', href: LI_ACTIVITY },
  { title: 'Dynamic Talks, Bengaluru', photo: '/moments/07-dynamic-talks-blr.jpg', href: P_COCREATOR },
  { title: 'Dynamic Talks, Hyderabad', photo: '/moments/10-dynamic-talks-hyd-mic.jpg', href: P_PACKED },
  { title: 'Technology & Innovation Day 2024', photo: '/moments/19-tech-innovation-stage.jpg', href: P_TECHINNO2 },
  { title: 'CSR — Grid Dynamics × Nirmaan', photo: '/moments/06-csr-nirmaan.jpg', href: P_CSR },
  { title: 'Top 25 Emerging Leaders 2024 — Indian Startup Times', photo: '/moments/04-top-25-emerging-leaders.jpg', href: P_TOP25 },
  { title: 'Humanising Workplaces — Plum', photo: '/moments/03-humanising-workplaces.jpg', href: P_HUMANISING },
  { title: 'GrowthX Founders Masterclass', photo: '/moments/05-growthx-networking.jpg', href: P_GROWTHX },
  { title: 'The Talent Deck — People Connect', photo: '/moments/02-talent-deck.jpg', href: P_TALENTDECK },
];

export interface GalleryItem { src: string; w: number; h: number; caption: string; tag: string; href: string; }

// Every event photo (production set), ordered for a balanced masonry.
export const GALLERY: GalleryItem[] = [
  { src: '/moments/08-temporal-agentic-ai.jpg', w: 736, h: 1600, caption: 'Grid Dynamics × Temporal', tag: 'Agentic AI', href: P_TEMPORAL },
  { src: '/moments/16-gpen-chennai-talk.jpg', w: 1600, h: 1066, caption: 'GPEN Chennai — tech community meetup', tag: 'with Ford', href: LI_ACTIVITY },
  { src: '/moments/07-dynamic-talks-blr.jpg', w: 900, h: 1600, caption: 'Dynamic Talks, Bengaluru', tag: 'Grid Dynamics', href: P_COCREATOR },
  { src: '/moments/19-tech-innovation-stage.jpg', w: 1600, h: 1201, caption: 'Technology & Innovation Day 2024', tag: 'Grid Dynamics', href: P_TECHINNO2 },
  { src: '/moments/10-dynamic-talks-hyd-mic.jpg', w: 1600, h: 1012, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_PACKED },
  { src: '/moments/18-tech-innovation-award.jpg', w: 1600, h: 1201, caption: 'Technology & Innovation Day 2024', tag: 'Grid Dynamics', href: P_TECHINNO1 },
  { src: '/moments/15-dynamic-talks-hyd-cohost.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_INCREDIBLE },
  { src: '/moments/12-seeing-machines-launch.jpg', w: 1600, h: 972, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_PACKED },
  { src: '/moments/09-temporal-session.jpg', w: 1600, h: 900, caption: 'Grid Dynamics × Temporal', tag: 'Agentic AI', href: P_TEMPORAL },
  { src: '/moments/17-gpen-chennai-group.jpg', w: 1600, h: 1066, caption: 'GPEN Chennai — tech community meetup', tag: 'with Ford', href: LI_ACTIVITY },
  { src: '/moments/11-dynamic-talks-hyd-group.jpg', w: 1600, h: 971, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_INCREDIBLE },
  { src: '/moments/13-dynamic-talks-hyd-group2.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_PACKED },
  { src: '/moments/14-dynamic-talks-hyd-group3.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_INCREDIBLE },
  { src: '/moments/06-csr-nirmaan.jpg', w: 1600, h: 1068, caption: 'CSR — Grid Dynamics × Nirmaan', tag: '610 students', href: P_CSR },
  { src: '/moments/04-top-25-emerging-leaders.jpg', w: 1600, h: 900, caption: 'Top 25 Emerging Leaders 2024', tag: 'Indian Startup Times', href: P_TOP25 },
  { src: '/moments/03-humanising-workplaces.jpg', w: 1200, h: 1600, caption: 'Humanising Workplaces', tag: 'Plum', href: P_HUMANISING },
  { src: '/moments/20-saurabh-note.jpg', w: 900, h: 1600, caption: '“Rockstar you!!” — Saurabh Arora, Co-founder & CTO', tag: 'Plum', href: LI_ACTIVITY },
  { src: '/moments/05-growthx-networking.jpg', w: 1199, h: 1600, caption: 'GrowthX Founders Masterclass', tag: 'Community', href: P_GROWTHX },
  { src: '/moments/02-talent-deck.jpg', w: 1199, h: 1600, caption: 'The Talent Deck — People Connect', tag: 'Delhi', href: P_TALENTDECK },
  { src: '/moments/01-anthill-trek.jpg', w: 1600, h: 900, caption: 'Anthill Ventures trek', tag: 'Team offsite', href: P_ANTHILL },
];
