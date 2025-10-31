
import React, { useState } from 'react';
import { Challenge } from '../types';
import { CloseIcon } from './Icons';

interface ChallengeModalProps {
  challenge: Challenge | null;
  onClose: () => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ challenge, onClose }) => {
  const [flag, setFlag] = useState('');
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  if (!challenge) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (flag === 'CTF{fake_flag_for_demo}') {
      setFeedback({ message: 'Correct Flag! System compromised.', type: 'success' });
    } else {
      setFeedback({ message: 'Incorrect Flag. Access denied.', type: 'error' });
    }
    setTimeout(() => setFeedback(null), 3000);
  };
  
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div 
        className="w-full max-w-3xl bg-[#1a1130] border border-purple-500 rounded-lg shadow-xl shadow-purple-900/50
                   flex flex-col max-h-[90vh] relative animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <CloseIcon />
        </button>

        <header className="p-6 border-b border-purple-800">
          <h2 className="font-chakra text-3xl text-purple-300">{challenge.title}</h2>
          <p className="text-cyan-400 font-bold text-lg">{challenge.points} Points <span className="text-gray-400 font-normal text-sm ml-4">Solves: {challenge.solves}</span></p>
        </header>
        
        <main className="p-6 overflow-y-auto scrollbar-thin">
          <p className="text-gray-300 whitespace-pre-wrap">{challenge.description}</p>
          {challenge.files && challenge.files.length > 0 && (
            <div className="mt-6">
              <h4 className="font-chakra text-xl text-purple-400 mb-2">Files</h4>
              <ul>
                {challenge.files.map(file => (
                  <li key={file.name}>
                    <a href={file.url} download className="text-cyan-400 hover:underline">{file.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>

        <footer className="p-6 border-t border-purple-800 mt-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
              placeholder="CTF{...}"
              className="flex-grow bg-purple-900/50 border border-purple-600 rounded-md px-4 py-2 text-white
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Submit Flag
            </button>
          </form>
          {feedback && (
            <p className={`mt-3 text-sm ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {feedback.message}
            </p>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ChallengeModal;
