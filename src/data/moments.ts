export interface Moment {
  src: string;
  w: number;
  h: number;
  caption: string;
  tag: string;
  href: string;
}

// LinkedIn destinations. Each card links to the topically-matching post from
// Rohit's shared set; cards with no matching post fall back to the activity feed.
const ACTIVITY = 'https://www.linkedin.com/in/rohitmallavarapu17/recent-activity/all/';
const P_AGENTIC = 'https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-dynamictalks-agenticai-activity-7402651704946843648-qVwg';
const P_PACKED = 'https://www.linkedin.com/posts/grid-dynamics-career_ai-leaders-packed-room-ugcPost-7401158094870765571-Mssc';
const P_INCREDIBLE = 'https://www.linkedin.com/posts/grid-dynamics_what-an-incredible-eve-ugcPost-7399046171186532353-cxJI';
const P_COCREATOR = 'https://www.linkedin.com/posts/rohitmallavarapu17_dynamictalks-aicocreator-griddynamics-activity-7373312194433921024-l4-b';
const P_DIGITAL = 'https://www.linkedin.com/posts/rohitmallavarapu17_digitalempowerment-aiforgood-futureready-activity-7354100901751517184-QvaT';
const P_PREPARE = 'https://www.linkedin.com/posts/rohitmallavarapu17_preparetogrow-griddynamics-activity-7263065682320207872-cDnK';
const P_CSR = 'https://www.linkedin.com/posts/rohitmallavarapu17_raised-funds-on-a-piece-of-paper-proud-activity-7196057769240584192-K6v-';
const P_TOP25 = 'https://www.linkedin.com/posts/rohitmallavarapu17_the-new-wave-meet-the-25-emerging-community-activity-7185479454809305088-uJcV';
const P_NETWORKING = 'https://www.linkedin.com/posts/rohitmallavarapu17_humanresources-workplaceculture-networking-activity-7173170420378923009-XVy4';
const P_HUMANISING = 'https://www.linkedin.com/posts/rohitmallavarapu17_we-started-humanising-workplaces-with-a-mission-activity-7158070519924228096-nEZp';
const P_PEOPLECONNECT = 'https://www.linkedin.com/posts/rohitmallavarapu17_thank-you-for-having-us-over-at-people-connect-activity-7155560305685618688-SlYG';
const P_PEAK = 'https://www.linkedin.com/posts/rohitmallavarapu17_peak-partnership-over-the-weekend-activity-7051133000561938432-4SdQ';

export const MOMENTS: Moment[] = [
  { src: '/moments/08-temporal-agentic-ai.jpg', w: 736, h: 1600, caption: 'Grid Dynamics × Temporal', tag: 'Agentic AI', href: P_AGENTIC },
  { src: '/moments/16-gpen-chennai-talk.jpg', w: 1600, h: 1066, caption: 'GPEN Chennai — tech community meetup', tag: 'with Ford', href: P_PEOPLECONNECT },
  { src: '/moments/07-dynamic-talks-blr.jpg', w: 900, h: 1600, caption: 'Dynamic Talks, Bengaluru', tag: 'Grid Dynamics', href: P_COCREATOR },
  { src: '/moments/19-tech-innovation-stage.jpg', w: 1600, h: 1201, caption: 'Technology & Innovation Day 2024', tag: 'Grid Dynamics', href: P_DIGITAL },
  { src: '/moments/10-dynamic-talks-hyd-mic.jpg', w: 1600, h: 1012, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_PACKED },
  { src: '/moments/18-tech-innovation-award.jpg', w: 1600, h: 1201, caption: 'Technology & Innovation Day 2024', tag: 'Grid Dynamics', href: P_DIGITAL },
  { src: '/moments/15-dynamic-talks-hyd-cohost.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_INCREDIBLE },
  { src: '/moments/12-seeing-machines-launch.jpg', w: 1600, h: 972, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_PACKED },
  { src: '/moments/09-temporal-session.jpg', w: 1600, h: 900, caption: 'Grid Dynamics × Temporal', tag: 'Agentic AI', href: P_AGENTIC },
  { src: '/moments/17-gpen-chennai-group.jpg', w: 1600, h: 1066, caption: 'GPEN Chennai — tech community meetup', tag: 'with Ford', href: P_PEOPLECONNECT },
  { src: '/moments/11-dynamic-talks-hyd-group.jpg', w: 1600, h: 971, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_PACKED },
  { src: '/moments/13-dynamic-talks-hyd-group2.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_INCREDIBLE },
  { src: '/moments/14-dynamic-talks-hyd-group3.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: P_INCREDIBLE },
  { src: '/moments/06-csr-nirmaan.jpg', w: 1600, h: 1068, caption: 'CSR event', tag: 'Grid Dynamics × Nirmaan', href: P_CSR },
  { src: '/moments/04-top-25-emerging-leaders.jpg', w: 1600, h: 900, caption: 'Top 25 Emerging Leaders 2024', tag: 'Indian Startup Times', href: P_TOP25 },
  { src: '/moments/03-humanising-workplaces.jpg', w: 1200, h: 1600, caption: 'Humanising workplaces', tag: 'Plum', href: P_HUMANISING },
  { src: '/moments/20-saurabh-note.jpg', w: 900, h: 1600, caption: '“Rockstar you!!” — Saurabh Arora, Co-founder & CTO', tag: 'Plum', href: ACTIVITY },
  { src: '/moments/05-growthx-networking.jpg', w: 1199, h: 1600, caption: 'GrowthX event', tag: 'Community', href: P_NETWORKING },
  { src: '/moments/02-talent-deck.jpg', w: 1199, h: 1600, caption: 'Talent deck event', tag: 'Grid Dynamics', href: P_PREPARE },
  { src: '/moments/01-anthill-trek.jpg', w: 1600, h: 900, caption: 'Anthill trek', tag: 'Team offsite', href: P_PEAK },
];
