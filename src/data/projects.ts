import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';

interface projects {id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    codeLink: string;
    
}

export const projectsData: projects[]   = [
  {
    id: 1,
    title: 'Smart Atm System',
    description: 'A full-featured ATM banking simulation built with React, TypeScript, and Zustand. It allows users to log in, check balances, deposit/withdraw, transfer funds, view transaction history, track exchange rates, and toggle dark/light mode.',
    image: project1,
    tags: ['React', 'TypeScript', 'API',' Zustand' ],
    liveLink: 'https://hazemziead50.github.io/Smart-ATM-System/',
    codeLink: 'https://github.com/hazemziead50/Smart-ATM-System',
  },
  {
    id: 2,
    title: 'Quiz App',
    description: 'A web-based Quiz Application built using Object-Oriented Programming (OOP) principles in JavaScript. The app allows users to answer multiple-choice questions, track their score, and view results at the end.',
    image: project2,
    tags: [ 'JavaScript','Modules' ],
    liveLink: 'https://hazemziead50.github.io/Quiz-App-OOP/',
    codeLink: 'https://github.com/hazemziead50/Quiz-App-OOP',
  },
  {
    id: 3,
    title: 'Prayer Times',
    description: 'A web app for global prayer times based on location, featuring an automatic next-prayer finder and a real-time countdown timer to the Adhan.',
    image: project3,
    tags: [ 'TypeScript', 'API'],
    liveLink: 'https://hazemziead50.github.io/Prayer-Times/',
    codeLink: 'https://github.com/hazemziead50/Prayer-Times',
  },
];