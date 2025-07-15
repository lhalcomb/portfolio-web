'use client';

import React from 'react';

import ProjectCard from '@/components/project-cards';
import SideBar from '@/components/ui/SideBar';


//TODO: Implement the demo for the maze gen/solver and dlx solver in p5 js canvas. Then demo video of the KiiP App. 

const finishedProjects = [
  // Example project data
  {title: "Maze Generator & Solver",
   description: "Maze generator and solver written in Python. The project utilizes multiple algorithms to generate and solve mazes, including A* and Kruskal's algorithms.",
   image: "/mazeImage.png", 
   github: "https://github.com/lhalcomb/MazeGenerationPy",
   demo: ""
  },
  {title: "Sudoku Solver",
   description: "Donald Knuth's Dancing Links algorithm written in C++. And one written in Python with PyGame to provide a visual representation of the algorithm.",
   image: "/sudoku.png", 
   github: "https://github.com/lhalcomb/SudokuPyGame",
   github2:"https://github.com/lhalcomb/Sudokudlx",
   demo: ""
  },
  {
    title: "KiiP - Key Investment Income Planner",
    description: `2024-25 Fall Semester Software Engineering project for the course. This is a Finance Tracker app that is designed to help you track 
    your spending changes or habits and analyze them.`,
    image: "",
    github: "https://github.com/lhalcomb/Kiip",
    demo: ""
  }, 

  {title: "Portfolio Website",
   description: `This is my portfolio website that you are currently viewing. 
                It is built with Next.js, React, and Tailwind CSS. It is a Full Stack application that showcases my projects and skills.
                It utilizes Firebase on the backend for authentication and database management.`,
   image: "",
   github: "https://github.com/lhalcomb/PortfolioWeb"
  }


];

const finishedProjectsLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects/inprogress', label: 'Works in Progress' },
  { href: '#maze', label: 'Maze Generator' },
  { href: '#sudoku', label: 'Sudoku Solver'  },
  { href: '#kiip', label: 'KiiP App'  },
  { href: '#portfolio', label: 'Portfolio Site' },
]
export default function FinishedPage() {
  return (
    <div className= "flex justify-center items-center min-h-screen bg-[var(--web-gray)]">
      <SideBar header="Projects" navLinks={finishedProjectsLinks} />
      <div className="flex flex-col items-center space-y-15 gap-6 p-4 overflow-y-auto bg-[var(--venom-black)] max-h-100%">
        {finishedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}