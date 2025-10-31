
import { Challenge, Team, Protocol, Avatar } from './types';

export const PROTOCOLS: Protocol[] = [
  {
    name: 'Metamorphic Python',
    icon: '🐍',
    description: 'The ultimate adaptors. They weave through problems with flawless logic, executing complex solutions with deadly precision.',
    color: 'border-green-400'
  },
  {
    name: 'Magnificent Ruby',
    icon: '✨',
    description: 'The master architects. They forge elegant, powerful structures that are as beautiful as they are unbreakable.',
    color: 'border-red-400'
  },
  {
    name: 'Java The Explorer',
    icon: '🗺️',
    description: 'The relentless explorers. Built to run anywhere, they are an unstoppable force that conquers every platform and every challenge.',
    color: 'border-blue-400'
  },
  {
    name: 'Exuberant Ajax',
    icon: '⚡',
    description: 'The agents of speed. They operate in a blink, creating dynamic, lightning-fast results that leave all other systems in the dust.',
    color: 'border-yellow-400'
  }
];

export const AVATARS: Avatar[] = [
    { name: 'The Pisonet Warrior! 🏆', description: "The uniform of a true champion. Rock that comfy sando, shorts, and headset combo.", icon: '🎮' },
    { name: 'The Mysterious Hacker 🕶️', description: "The quiet genius. Go for the dark hoodie and sunglasses, looking like you could breach any firewall.", icon: '💻' },
    { name: 'The \'IT Support\' Hero 🤓🔧', description: "The savior of the technically challenged. Ready to ask, \"Have you tried turning it off and on again?\"", icon: '💡' },
    { name: 'The Caffeine-Powered Coder ☕💻', description: "Fueled by coffee and deadlines. Looks like they've been coding for 48 hours straight.", icon: '☕' },
    { name: 'The Viral Influencer 🤳✨', description: "You've mastered the algorithm. Dress to impress, hold your phone high, and get ready to go live!", icon: '📱' },
    { name: 'Your Digital Avatar! 🦸', description: "Bring your favorite character from an anime, movie, or game to life!", icon: '🎭' },
    { name: 'A Living Robot 🤖', description: "Use your engineering skills to build your own robot suit with boxes and foil. Beep boop beep.", icon: '🤖' }
];

export const CHALLENGES: Challenge[] = [
  { id: 1, title: "Logic Weaving", category: "Metamorphic Python", points: 100, description: "A simple script has its logic tangled. Unravel the pythonic knot to find the flag.", solves: 50, solvedByMe: true },
  { id: 2, title: "Gem Forgery", category: "Magnificent Ruby", points: 150, description: "This web app is built with elegance, but a flaw in its structure allows for a forge. Can you craft the right payload?", solves: 35, solvedByMe: false },
  { id: 3, title: "Cross-Platform Jump", category: "Java The Explorer", points: 200, description: "This Java binary is supposed to run anywhere, but it's trapped. Decompile and find the escape route.", solves: 22, solvedByMe: false },
  { id: 4, title: "Blink of an Eye", category: "Exuberant Ajax", points: 250, description: "The flag is loaded asynchronously, but it's gone in a flash. Intercept the request before it vanishes.", solves: 15, solvedByMe: false },
  { id: 5, title: "Polymorphic Shell", category: "Metamorphic Python", points: 300, description: "The server is running a Python script that changes its behavior based on input. Find the right sequence to trigger the shell.", solves: 10, solvedByMe: false },
  { id: 6, title: "The Mainframe Core", category: "Mainframe", points: 500, description: "The heart of the IT VERSE. All protocols must converge to stabilize it. This requires a multi-stage exploit. Good luck, Sovereign.", solves: 1, solvedByMe: false },
  { id: 7, title: "Ruby on Rails Derailment", category: "Magnificent Ruby", points: 400, description: "A classic RoR application has a vulnerability in its session handling. Hijack a session to gain admin access.", solves: 5, solvedByMe: false },
  { id: 8, title: "JVM Breakout", category: "Java The Explorer", points: 450, description: "Escape the Java Virtual Machine sandbox to read a sensitive file on the host system. A true test for an explorer.", solves: 3, solvedByMe: false },
];

export const TEAMS: Team[] = [
  { rank: 1, name: "Metamorphic Python 🐍", score: 900 },
  { rank: 2, name: "Exuberant Ajax ⚡", score: 850 },
  { rank: 3, name: "Magnificent Ruby ✨", score: 700 },
  { rank: 4, name: "Java The Explorer 🗺️", score: 650 },
  { rank: 5, name: "Null Pointers", score: 400 },
  { rank: 6, name: "Syntax Terrors", score: 250 },
  { rank: 7, name: "404 Brain Not Found", score: 100 },
];
