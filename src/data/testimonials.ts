import { ViewType } from './views';

export interface Testimonial {
  heading: string;
  text: string;
  author: string;
  role: string;
  company: string;
  priority: Record<ViewType, number>;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    heading: "He pushed the whole team towards newer possibilities and use cases",
    text: "Rohit is the go to person and is the load balance between internal customers and external stakeholders. I had the pleasure to work with him in Cleartax and managing him was very easy when the setup was him hitting his goals accross KRAs and challenging when he pushed the whole team towards newer possibilities and use cases. He has a great personality and go getter attitude.",
    author: "Adwitiya Singh",
    role: "Head BFSI, Payroll, Corp Alliances",
    company: "Clear",
    priority: { about: 3, partnerships: 1, marketing: 5 },
  },
  {
    heading: "Rohit approaches work like a sport, always playing as a team player",
    text: "Rohit approaches work like a sport, always playing as a team player. A natural community builder, he has taken on various roles at Plum, from building partnerships to experiential marketing.",
    author: "Saurabh Arora",
    role: "Co-Founder & CTO",
    company: "Plum Benefits",
    priority: { about: 4, partnerships: 2, marketing: 4 },
  },
  {
    heading: "Rohit was the driving force behind many key initiatives at Plum",
    text: "I had the pleasure of working with Rohit at Plum, and he is truly one of the most high-energy individuals I've encountered. His enthusiasm and eagerness to take on new challenges were evident in every project he undertook. Rohit was the driving force behind many key initiatives at Plum, bringing innovative ideas and exceptional execution to the table.",
    author: "Abhishek Poddar",
    role: "Co-Founder & CEO",
    company: "Plum Benefits",
    priority: { about: 1, partnerships: 3, marketing: 2 },
  },
  {
    heading: "Went above and beyond, spearheading multiple high-impact campaigns",
    text: "Rohit consistently went above and beyond, spearheading multiple high-impact campaigns with remarkable success. His infectious energy was a driving force behind our results. His ability to remain upbeat and focused is unparalleled. I wish him all the best for the future.",
    author: "Prerit Bajaj",
    role: "Associate Director - ABM",
    company: "Plum Benefits",
    priority: { about: 2, partnerships: 5, marketing: 1 },
  },
  {
    heading: "Rohit's energy and grit is unmatched",
    text: "Rohit's energy and grit is unmatched. He ideates, he executes, and achieves all of his goals. Rohit picked up various new initiatives at Plum, aligned different internal teams on these, managed external stakeholders and made all of them a success. He is a great peer and an extremely reliable teammate to work with.",
    author: "Shriya Shah",
    role: "Performance Lead",
    company: "Plum Benefits",
    priority: { about: 5, partnerships: 4, marketing: 3 },
  },
  {
    heading: "He leads by example",
    text: "I worked with Rohit during my internship period and I was particularly impressed by his ability to handle even the toughest client effortlessly. That skill often takes years to develop, but it seemed to come perfectly naturally to him. He was very helping and he leads by example. He always kept the team morale up.",
    author: "Tanushree Upadhyay",
    role: "Account Management",
    company: "Clear",
    priority: { about: 6, partnerships: 6, marketing: 6 },
  },
];
