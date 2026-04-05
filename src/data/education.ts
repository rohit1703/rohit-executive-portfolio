export interface Education {
  title: string;
  institution: string;
  year: string;
  type: 'degree' | 'certification';
}

export const EDUCATION: Education[] = [
  {
    title: 'B.Tech — Information & Communication Technology',
    institution: 'DA-IICT (Dhirubhai Ambani Institute), Gujarat',
    year: '2020',
    type: 'degree',
  },
  {
    title: 'Brand Management',
    institution: 'London Business School',
    year: '2022',
    type: 'certification',
  },
  {
    title: 'Customer Analytics',
    institution: 'Wharton School, University of Pennsylvania',
    year: '2021',
    type: 'certification',
  },
  {
    title: 'Financial Accounting',
    institution: 'Wharton School, University of Pennsylvania',
    year: '2023',
    type: 'certification',
  },
  {
    title: 'Data Analytics',
    institution: 'IBM',
    year: '2021',
    type: 'certification',
  },
];
