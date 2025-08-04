'use client';

import React from 'react';

import ProjectCard from '@/components/project-cards';
import SideBar from '@/components/ui/SideBar';
import AboutContainer from '@/components/ui/AboutContainer';

const wipProjects = [
  // Example project data
  {title: "Chess Bot in C++",
   description: "In the process of creating a Chess Bot in C++ using the RayLib game development graphics library. ",
   image: "/chess.png", 
   github: "https://github.com/lhalcomb/ChessBot",
   demo: "", 
   techStack: ["cpp", "raylib"]
  },
  {title: "Gravity Simulator - Coming Soon",
   description: `I plan to develop a gravity simulator using OpenGL, GLFW, and other graphics programming libraries
   to better my low level skills and learn some things about graphics programming. I also enjoy the mathematics behind 
   the physics of our universe and would love to explore using my math skills in a project. `, 
   image: "",
   github: "To be - Dont Click Me Yet", 
   demo: "", 
   techStack: ["cpp", "opengl", "GLFW"]
  }

];

const wipProjectsLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects/finished', label: 'Finished Projects' },
  { href: '#chess', label: 'Chess Bot in C++'}
];

export default function WorksInProgress() {
  return (
     <div className="flex justify-center items-center min-h-screen bg-[var(--web-gray)]">
          <div className="flex p-10">
            <div className="sticky hidden md:inline pr-4 min-h-full">
              <SideBar header="Projects" navLinks={wipProjectsLinks} />
            </div>
            
            <div className="flex flex-col items-center space-y-15 gap-6 p-4 overflow-y-auto bg-[var(--venom-black)] max-h-100%">
              {wipProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            <div className="p-6 hidden md:flex ">
              <AboutContainer />
            </div>
          </div>
        </div>
  );
}