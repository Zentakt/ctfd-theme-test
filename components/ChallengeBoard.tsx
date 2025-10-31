
import React from 'react';
import { Challenge, ChallengeCategory } from '../types';
import { CHALLENGES } from '../constants';
import ChallengeCard from './ChallengeCard';

interface ChallengeBoardProps {
  onChallengeSelect: (challenge: Challenge) => void;
}

const ChallengeBoard: React.FC<ChallengeBoardProps> = ({ onChallengeSelect }) => {
  const categories = Array.from(new Set(CHALLENGES.map(c => c.category))) as ChallengeCategory[];

  return (
    <div className="space-y-12">
      {categories.map(category => (
        <div key={category}>
          <h2 className="font-chakra text-4xl text-purple-400 mb-6 border-b-2 border-purple-800 pb-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {CHALLENGES.filter(c => c.category === category).map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} onSelect={onChallengeSelect} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeBoard;
