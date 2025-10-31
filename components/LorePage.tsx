
import React from 'react';
import { PROTOCOLS, AVATARS } from '../constants';
import GlitchText from './GlitchText';

const LorePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <p className="text-cyan-400">// REALITY IS COMPROMISED. A SYSTEM REBOOT IS IMMINENT. //</p>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300">
          This is not a drill. Our reality has become unstable. For one day only, we have one chance to escape. We are triggering a GLITCH IN REALITY! Welcome to the IT VERSE, a high-voltage dimension we've created as a temporary sanctuary.
        </p>
      </section>

      <section>
        <h2 className="font-chakra text-4xl text-center text-purple-400 mb-8">THE PROTOCOLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROTOCOLS.map((protocol) => (
            <div key={protocol.name} className={`bg-purple-900/30 border-t-4 ${protocol.color} p-6 rounded-lg shadow-lg`}>
              <h3 className="font-chakra text-2xl text-purple-300">{protocol.icon} {protocol.name}</h3>
              <p className="mt-3 text-gray-400">{protocol.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="text-center">
        <h3 className="font-chakra text-3xl text-yellow-300">BECOME THE SOVEREIGNS OF THE SOURCE CODE!</h3>
      </section>

      <section>
        <h2 className="font-chakra text-4xl text-center text-purple-400 mb-8">// BOOT UP YOUR AVATAR: RENDER YOUR CLASS! //</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AVATARS.map((avatar) => (
            <div key={avatar.name} className="bg-purple-900/30 border border-purple-700/50 p-6 rounded-lg">
              <h3 className="font-chakra text-xl text-purple-300">{avatar.name}</h3>
              <p className="mt-2 text-gray-400">{avatar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LorePage;
