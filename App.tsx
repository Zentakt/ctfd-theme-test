
import React, { useState } from 'react';
import { Challenge } from './types';
import GlitchText from './components/GlitchText';
import ChallengeBoard from './components/ChallengeBoard';
import ChallengeModal from './components/ChallengeModal';
import Scoreboard from './components/Scoreboard';
import LorePage from './components/LorePage';
import { CodeBracketIcon } from './components/Icons';

type Page = 'challenges' | 'scoreboard' | 'lore';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('challenges');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const renderPage = () => {
    switch (activePage) {
      case 'challenges':
        return <ChallengeBoard onChallengeSelect={setSelectedChallenge} />;
      case 'scoreboard':
        return <Scoreboard />;
      case 'lore':
        return <LorePage />;
      default:
        return <ChallengeBoard onChallengeSelect={setSelectedChallenge} />;
    }
  };
  
  const NavButton = ({ page, children }: { page: Page, children: React.ReactNode }) => (
    <button 
      onClick={() => setActivePage(page)}
      className={`font-chakra uppercase tracking-widest px-4 py-2 rounded-md transition-all duration-300 relative
                  ${activePage === page 
                    ? 'text-cyan-300' 
                    : 'text-purple-400 hover:text-cyan-300'}`}
    >
      {children}
      {activePage === page && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.7)]"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen text-white font-source-code">
      <header className="py-6 px-4 md:px-8 border-b-2 border-purple-900/80 sticky top-0 bg-[#100a1f]/80 backdrop-blur-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CodeBracketIcon className="w-8 h-8 text-purple-400"/>
            <GlitchText text="IT VERSE" className="font-chakra text-3xl md:text-4xl" />
          </div>
          <nav className="flex items-center space-x-2 md:space-x-4">
            {/* FIX: The NavButton component requires a 'children' prop for the button's text content. Added text for each navigation button. */}
            <NavButton page="challenges">Challenges</NavButton>
            <NavButton page="scoreboard">Scoreboard</NavButton>
            <NavButton page="lore">Lore</NavButton>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto p-4 md:p-8">
        {renderPage()}
      </main>

      <footer className="text-center py-6 border-t border-purple-900/50 text-purple-600">
        <p>// SYSTEM REBOOT IMMINENT. GOOD LUCK. //</p>
      </footer>
      
      <ChallengeModal challenge={selectedChallenge} onClose={() => setSelectedChallenge(null)} />
    </div>
  );
};

export default App;
