
import React from 'react';
import { Challenge } from '../types';
import { CheckCircleIcon } from './Icons';

interface ChallengeCardProps {
  challenge: Challenge;
  onSelect: (challenge: Challenge) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(challenge)}
      className="relative cursor-pointer bg-purple-900/30 backdrop-blur-sm border border-purple-600/50 p-4 rounded-lg
                 transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] hover:-translate-y-1"
    >
      {challenge.solvedByMe && (
        <div className="absolute top-2 right-2 text-green-400" title="Solved">
          <CheckCircleIcon className="w-6 h-6" />
        </div>
      )}
      <h3 className="font-chakra text-lg text-purple-300 truncate">{challenge.title}</h3>
      <p className="text-2xl font-bold text-cyan-300 my-2">{challenge.points}</p>
      <p className="text-xs text-gray-400">Solves: {challenge.solves}</p>
      {challenge.solvedByMe && (
        <div className="absolute inset-0 bg-green-500/10 rounded-lg pointer-events-none"></div>
      )}
    </div>
  );
};

export default ChallengeCard;
