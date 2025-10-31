
export type ChallengeCategory = 'Metamorphic Python' | 'Magnificent Ruby' | 'Java The Explorer' | 'Exuberant Ajax' | 'Mainframe';

export interface Challenge {
  id: number;
  title: string;
  category: ChallengeCategory;
  points: number;
  description: string;
  solves: number;
  solvedByMe: boolean;
  files?: { name: string; url: string }[];
}

export interface Team {
  rank: number;
  name: string;
  score: number;
}

export interface Protocol {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface Avatar {
  name: string;
  icon: string;
  description: string;
}
