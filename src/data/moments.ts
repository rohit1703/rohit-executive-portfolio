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
  { src: '/moments/08-temporal-agentic-ai.jpg', w: 736, h: 1600, caption: 'Grid Dynamics × Temporal — agentic AI, live', tag: 'Dynamic Talks', href: ACTIVITY },
  { src: '/moments/16-gpen-chennai-talk.jpg', w: 1600, h: 1066, caption: 'Tech community meetup, Chennai', tag: 'GPEN × Ford', href: ACTIVITY },
  { src: '/moments/07-dynamic-talks-blr.jpg', w: 900, h: 1600, caption: 'Dynamic Talks, Bengaluru', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/19-tech-innovation-stage.jpg', w: 1600, h: 1201, caption: 'From architecture to production', tag: 'Tech & Innovation Day', href: ACTIVITY },
  { src: '/moments/10-dynamic-talks-hyd-mic.jpg', w: 1600, h: 1012, caption: 'On the mic, Hyderabad', tag: 'Dynamic Talks', href: ACTIVITY },
  { src: '/moments/18-tech-innovation-award.jpg', w: 1600, h: 1201, caption: 'Technology & Innovation Day 2024', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/15-dynamic-talks-hyd-cohost.jpg', w: 1600, h: 1066, caption: 'Co-hosting Dynamic Talks, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/12-seeing-machines-launch.jpg', w: 1600, h: 972, caption: 'Seeing Machines — book launch', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/09-temporal-session.jpg', w: 1600, h: 900, caption: 'Agentic AI for the enterprise', tag: 'Dynamic Talks', href: ACTIVITY },
  { src: '/moments/17-gpen-chennai-group.jpg', w: 1600, h: 1066, caption: 'The community, with Ford', tag: 'GPEN · Chennai', href: ACTIVITY },
  { src: '/moments/11-dynamic-talks-hyd-group.jpg', w: 1600, h: 971, caption: 'From Agents to Architectures — full house', tag: 'Dynamic Talks · HYD', href: ACTIVITY },
  { src: '/moments/13-dynamic-talks-hyd-group2.jpg', w: 1600, h: 1066, caption: 'The room, Hyderabad', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/14-dynamic-talks-hyd-group3.jpg', w: 1600, h: 1066, caption: 'Full house, Hyderabad', tag: 'Dynamic Talks', href: ACTIVITY },
  { src: '/moments/06-csr-nirmaan.jpg', w: 1600, h: 1068, caption: 'CSR with Nirmaan', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/04-top-25-emerging-leaders.jpg', w: 1600, h: 900, caption: 'Top 25 Emerging Leaders 2024', tag: 'Indian Startup Times', href: POST_TOP25 },
  { src: '/moments/03-humanising-workplaces.jpg', w: 1200, h: 1600, caption: 'Humanising workplaces', tag: 'Plum', href: POST_HUMANISING },
  { src: '/moments/20-saurabh-note.jpg', w: 900, h: 1600, caption: "“Rockstar you!!” — from Saurabh Arora, Co-founder & CTO", tag: 'Plum', href: ACTIVITY },
  { src: '/moments/05-growthx-networking.jpg', w: 1199, h: 1600, caption: 'Networking, done right', tag: 'Plum', href: ACTIVITY },
  { src: '/moments/02-talent-deck.jpg', w: 1199, h: 1600, caption: 'Talent brand, in the room', tag: 'Grid Dynamics', href: ACTIVITY },
  { src: '/moments/01-anthill-trek.jpg', w: 1600, h: 900, caption: 'Anthill trek with the team', tag: 'Team', href: ACTIVITY },
];
