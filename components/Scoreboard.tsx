
import React from 'react';
import { TEAMS } from '../constants';

const Scoreboard: React.FC = () => {
  return (
    <div className="bg-purple-900/20 border border-purple-700 rounded-lg overflow-hidden backdrop-blur-sm">
      <table className="w-full text-left">
        <thead className="bg-purple-900/50">
          <tr>
            <th className="font-chakra p-4 text-purple-300 tracking-wider">Rank</th>
            <th className="font-chakra p-4 text-purple-300 tracking-wider">Team</th>
            <th className="font-chakra p-4 text-purple-300 tracking-wider text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          {TEAMS.map((team, index) => (
            <tr key={team.name} className={`border-t border-purple-800 ${index === 0 ? 'bg-yellow-500/20' : ''}`}>
              <td className="p-4 text-lg font-bold text-cyan-300">{team.rank}</td>
              <td className="p-4 text-lg text-white">{team.name}</td>
              <td className="p-4 text-lg text-cyan-300 font-bold text-right">{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
