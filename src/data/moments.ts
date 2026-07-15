export interface Moment {
  src: string;
  w: number;
  h: number;
  caption: string;
  tag: string;
  href: string;
}

// LinkedIn destinations. Two are matched to specific posts; the rest point at
// the activity feed until exact post URLs are confirmed per photo.
const ACTIVITY = 'https://www.linkedin.com/in/rohitmallavarapu17/recent-activity/all/';
const POST_TOP25 =
  'https://www.linkedin.com/posts/rohitmallavarapu17_the-new-wave-meet-the-25-emerging-community-activity-7185479454809305088-uJcV';
const POST_HUMANISING =
  'https://www.linkedin.com/posts/rohitmallavarapu17_we-started-humanising-workplaces-with-a-mission-activity-7158070519924228096-nEZp';

export const MOMENTS: Moment[] = [
  { src: '/moments/08-temporal-agentic-ai.jpg', w: 736, h: 1600, caption: 'Grid Dynamics × Temporal', tag: 'Agentic AI', href: ACTIVITY },
  { src: '/moments/16-gpen-chennai-talk.jpg', w: 1600, h: 1066, caption: 'GPEN Chennai — tech community meetup', tag: 'with Ford', href: ACTIVITY },
  { src: '/moments/07-dynamic-talks-blr.jpg', w: 900, h: 1600, caption: 'Dynamic Talks, Bengaluru', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/19-tech-innovation-stage.jpg', w: 1600, h: 1201, caption: 'Technology & Innovation Day 2024', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/10-dynamic-talks-hyd-mic.jpg', w: 1600, h: 1012, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/18-tech-innovation-award.jpg', w: 1600, h: 1201, caption: 'Technology & Innovation Day 2024', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/15-dynamic-talks-hyd-cohost.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/12-seeing-machines-launch.jpg', w: 1600, h: 972, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/09-temporal-session.jpg', w: 1600, h: 900, caption: 'Grid Dynamics × Temporal', tag: 'Agentic AI', href: ACTIVITY },
  { src: '/moments/17-gpen-chennai-group.jpg', w: 1600, h: 1066, caption: 'GPEN Chennai — tech community meetup', tag: 'with Ford', href: ACTIVITY },
  { src: '/moments/11-dynamic-talks-hyd-group.jpg', w: 1600, h: 971, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/13-dynamic-talks-hyd-group2.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/14-dynamic-talks-hyd-group3.jpg', w: 1600, h: 1066, caption: 'Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/06-csr-nirmaan.jpg', w: 1600, h: 1068, caption: 'CSR event', tag: 'Grid Dynamics × Nirmaan', href: ACTIVITY },
  { src: '/moments/04-top-25-emerging-leaders.jpg', w: 1600, h: 900, caption: 'Top 25 Emerging Leaders 2024', tag: 'Indian Startup Times', href: POST_TOP25 },
  { src: '/moments/03-humanising-workplaces.jpg', w: 1200, h: 1600, caption: 'Humanising workplaces', tag: 'Plum', href: POST_HUMANISING },
  { src: '/moments/20-saurabh-note.jpg', w: 900, h: 1600, caption: '“Rockstar you!!” — Saurabh Arora, Co-founder & CTO', tag: 'Plum', href: ACTIVITY },
  { src: '/moments/05-growthx-networking.jpg', w: 1199, h: 1600, caption: 'GrowthX event', tag: 'Community', href: ACTIVITY },
  { src: '/moments/02-talent-deck.jpg', w: 1199, h: 1600, caption: 'Talent deck event', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/01-anthill-trek.jpg', w: 1600, h: 900, caption: 'Anthill trek', tag: 'Team offsite', href: ACTIVITY },
];
