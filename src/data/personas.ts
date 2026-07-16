// Cumulative career impact (revenue + pipeline influenced, events hosted) and the
// breadth of partner ecosystems Rohit has built across.
export interface CareerStat {
  value: number;
  prefix?: string;
  suffix: string;
  caption: string;
}

export const CAREER_STATS: CareerStat[] = [
  {
    value: 10,
    prefix: '$',
    suffix: 'M+',
    caption: 'in revenue and pipeline across six years.',
  },
  {
    value: 35,
    suffix: '+',
    caption: 'events hosted across three companies and cities.',
  },
];

export const PARTNER_PERSONAS: string[] = [
  'BFSI — banks & NBFCs',
  'Payroll & HRMS',
  'VCs',
  'Accelerators',
  'Incubators',
  'Coworking spaces',
  'Government & associations',
  'Enterprises — Fortune 1000',
  'Global Capability Centres',
];
