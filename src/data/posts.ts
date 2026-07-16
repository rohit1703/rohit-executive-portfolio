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
    title: "Top 25 Emerging Leaders, 2024",
    category: "Recognition",
    description: "Named to the Indian Startup Times' Top 25 Emerging Leaders.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_the-new-wave-meet-the-25-emerging-community-activity-7185479454809305088-uJcV",
    priority: { about: 1, partnerships: 1, marketing: 2 },
  },
  {
    title: "An AI-Native Marketing Stack",
    category: "AI-native",
    description: "I run full campaign cycles, research, content, decks, scripts, with Claude, NotebookLM, and Perplexity.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_aimarketing-marketinginnovation-digitaltransformation-activity-7318241480840486914-mMLC",
    priority: { about: 2, partnerships: 7, marketing: 1 },
  },
  {
    title: "The AI Co-creator Era",
    category: "Flagship Event",
    description: "Hosting Grid Dynamics' 'The AI Co-creator Era', building the room where clients and talent meet.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_dynamictalks-aicocreator-griddynamics-activity-7373312194433921024-l4-b",
    priority: { about: 3, partnerships: 5, marketing: 3 },
  },
  {
    title: "One Year at Grid Dynamics",
    category: "Milestone",
    description: "A year running India marketing solo. What I learned owning client, talent, and brand at once.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-preparetogrow-marketingleadership-activity-7351868351813505025-rrLn",
    priority: { about: 4, partnerships: 6, marketing: 4 },
  },
  {
    title: "Two Events. One Signal.",
    category: "Strategy",
    description: "Two audiences, one brand signal, how I ran two Grid Dynamics events off a single through-line.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-dynamictalks-agenticai-activity-7402651704946843648-qVwg",
    priority: { about: 5, partnerships: 4, marketing: 5 },
  },
  {
    title: "Is Failure the Shortcut to Success?",
    category: "Mindset",
    description: "On reframing failure as input, the scars, and what they taught me.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_failure-growth-resilience-activity-7282697546458701824-i0xZ",
    priority: { about: 6, partnerships: 8, marketing: 6 },
  },
  {
    title: "Organizing AI Innovation",
    category: "Events",
    description: "A day of AI and digital-transformation talks at Grid Dynamics, run start to finish.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-aiinnovation-digitaltransformation-activity-7252996171978190848-DPJ9",
    priority: { about: 7, partnerships: 3, marketing: 7 },
  },
  {
    title: "Digital Empowerment with Nirmaan",
    category: "CSR",
    description: "Supporting Nirmaan's digital-education drive, reaching 610 students.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_digitalempowerment-aiforgood-futureready-activity-7354100901751517184-QvaT",
    priority: { about: 8, partnerships: 2, marketing: 8 },
  },
  {
    title: "The GrowthX Founders Masterclass",
    category: "Community",
    description: "Plum partnered with GrowthX for a founders' masterclass, a room of operators and builders.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_raised-funds-on-a-piece-of-paper-proud-activity-7196057769240584192-K6v-",
    priority: { about: 9, partnerships: 9, marketing: 9 },
  },
  {
    title: "The Plum Chapter",
    category: "Gratitude",
    description: "Closing two years at Plum, partnerships built, community built, promoted twice.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_newbeginnings-gratitude-plumbenefits-activity-7219966266780831744-IfsD",
    priority: { about: 10, partnerships: 10, marketing: 10 },
  },
];
