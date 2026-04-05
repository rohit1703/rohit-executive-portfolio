import { ViewType } from './views';

export interface LinkedInPost {
  title: string;
  category: string;
  description: string;
  link: string;
  priority: Record<ViewType, number>;
}

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    title: "Named Among Top 25 Emerging Leaders",
    category: "Recognition",
    description: "Honoured to be named among the top 25 emerging leaders by the Indian Startup Times. Recognition for innovation and visionary leadership.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_the-new-wave-meet-the-25-emerging-community-activity-7185479454809305088-uJcV",
    priority: { about: 1, partnerships: 1, marketing: 2 },
  },
  {
    title: "AI Marketing Team in 4 Weeks",
    category: "Rapid Transformation",
    description: "I built an AI marketing team under 4 weeks while everyone else was still debating AI. A masterclass in strategic execution.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_aimarketing-marketinginnovation-digitaltransformation-activity-7318241480840486914-mMLC",
    priority: { about: 2, partnerships: 7, marketing: 1 },
  },
  {
    title: "The AI Co-creator Era",
    category: "Flagship Event",
    description: "An incredible day hosting 'The AI Co-creator Era' at Grid Dynamics. Redefining how we co-create with intelligence.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_dynamictalks-aicocreator-griddynamics-activity-7373312194433921024-l4-b",
    priority: { about: 3, partnerships: 5, marketing: 3 },
  },
  {
    title: "One Year at Grid Dynamics",
    category: "Milestone",
    description: "Reflecting on one journey and countless lessons learned. Scaling marketing leadership on the NASDAQ stage.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-preparetogrow-marketingleadership-activity-7351868351813505025-rrLn",
    priority: { about: 4, partnerships: 6, marketing: 4 },
  },
  {
    title: "Two Events. One Simple Signal.",
    category: "Strategy",
    description: "Managing two different audiences at Grid Dynamics with one simple brand signal. Precision marketing in action.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-dynamictalks-agenticai-activity-7402651704946843648-qVwg",
    priority: { about: 5, partnerships: 4, marketing: 5 },
  },
  {
    title: "Is Failure the Shortcut to Success?",
    category: "Mindset",
    description: "Growth, resilience, and the strategic importance of reframing failure as a catalyst for high-performance marketing.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_failure-growth-resilience-activity-7282697546458701824-i0xZ",
    priority: { about: 6, partnerships: 8, marketing: 6 },
  },
  {
    title: "Organizing AI Innovation",
    category: "Events",
    description: "Grateful to have organized an incredible day of innovation and insights centered around AI and Digital Transformation.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-aiinnovation-digitaltransformation-activity-7252996171978190848-DPJ9",
    priority: { about: 7, partnerships: 3, marketing: 7 },
  },
  {
    title: "Digital Empowerment: AI for Good",
    category: "Initiative",
    description: "Proud to support this incredible initiative focused on digital empowerment and future-ready AI capabilities.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_digitalempowerment-aiforgood-futureready-activity-7354100901751517184-QvaT",
    priority: { about: 8, partnerships: 2, marketing: 8 },
  },
  {
    title: "From Bosses to Coaches",
    category: "Leadership",
    description: "The future of leadership is shifting from top-down management to high-impact coaching and empowerment.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_aimarketing-marketinginnovation-digitaltransformation-activity-7318241480840486914-mMLC",
    priority: { about: 9, partnerships: 9, marketing: 9 },
  },
  {
    title: "The Plum Chapter: Farewell",
    category: "Gratitude",
    description: "Embarking on a new chapter after two enriching years at Plum. A journey filled with growth and collaboration.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_newbeginnings-gratitude-plumbenefits-activity-7219966266780831744-IfsD",
    priority: { about: 10, partnerships: 10, marketing: 10 },
  },
];
