'use client';

import React from 'react';

import ProjectCard from '@/components/project-cards';
import SideBar from '@/components/ui/SideBar';
import AboutContainer from '@/components/ui/AboutContainer';


//TODO: Implement the demo for the maze gen/solver and dlx solver in p5 js canvas. Then demo video of the KiiP App. 




const finishedProjects = [
  // Example project data
  {title: "Maze Generator & Solver",
   description: "Maze generator and solver written in Python. The project utilizes multiple algorithms to generate and solve mazes, including A* and Kruskal's algorithms.",
   image: "/mazeImage.png", 
   github: "https://github.com/lhalcomb/MazeGenerationPy",
   demo: "/demo/maze",
   techStack: ["python", "pygame"]
  },
  {title: "Sudoku Solver",
   description: "Donald Knuth's Dancing Links algorithm written in C++. And one written in Python with PyGame to provide a visual representation of the algorithm.",
   image: "/sudoku.png", 
   github: "https://github.com/lhalcomb/SudokuPyGame",
   github2:"https://github.com/lhalcomb/Sudokudlx",
   demo: "/demo/test",
   techStack: ["python", "pygame", "cpp"]
  },
  {
    title: "KiiP - Key Investment Income Planner",
    description: `2024-25 Fall Semester Software Engineering project for the course. This is a Finance Tracker app that is designed to help you track 
    your spending changes or habits and analyze them.`,
    image: "/kiip.png",
    github: "https://github.com/lhalcomb/Kiip",
    demo: "",
    techStack: ["expo", "react", "mySQL"]
  }, 

  {title: "Portfolio Website",
   description: `This is my portfolio website that you are currently viewing. 
                It is built with Next.js, React, and Tailwind CSS. It is a Full Stack application that showcases my projects and skills.
                It utilizes Firebase on the backend for authentication and database management.`,
   image: "",
   github: "https://github.com/lhalcomb/PortfolioWeb",
   techStack: ["nextjs", "firebase", "typescript", "tailwind"]
  }, 

  {
  title: "Machine Learning Projects",
  description: `There are a handful of projects that I worked on in my Machine Learning class my Junior year. 
  Below you will find the project where I built a Convolutional Neural Network to classify the digits from the MNIST 
  dataset.`,
  image: "",
  github: "https://github.com/lhalcomb/IntrotoML",
  accordionDetails: [
    "Trained a CNN to classify handwritten digits (MNIST). ",
    "Used PyTorch with convolution, pooling, and dense layers. ",
    "Visualized confusion matrix and training loss. ",
    "Evaluated using accuracy and F1 score. "
  ],
  nestedProjects: [
    {
      title: "CNN MNIST Digit Classifier",
      image: "/digitClassification.png",
      link: "https://github.com/lhalcomb/IntrotoML/blob/main/PythonFiles/DigitClassificationCNN.py"
    }
  ], 
  techStack: ["python", "pytorch", "matplotlib"]
}

];

const finishedProjectsLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects/inprogress', label: 'Works in Progress' },
  { href: '#maze', label: 'Maze Generator' },
  { href: '#sudoku', label: 'Sudoku Solver'  },
  { href: '#kiip', label: 'KiiP App'  },
  { href: '#portfolio', label: 'Portfolio Site' },
  {href: '#ml', label: 'Machine Learning Projects'}
]

export default function FinishedPage() {
  const ids = ["maze", "sudoku", "kiip", "portfolio", "ml"];
  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--web-gray)]">
      <div className="flex p-10 ">
        <div className="sticky top-15 self-start h-screen pr-4">
          <SideBar header="Projects" navLinks={finishedProjectsLinks} />
        </div>
        
        <div className="flex flex-col items-center space-y-15 gap-6 p-4 overflow-y-auto bg-[var(--venom-black)] max-h-100%">
          {finishedProjects.map((project, index) => (
            
            <div key={index} id={ids[index]}>
              <ProjectCard {...project} />
            </div>

          ))}
        </div>
        <div className="p-6 ">
          <AboutContainer />
        </div>
      </div>
    </div>

    
    
  );
}