import React from 'react';
import {Card, CardContent, CardActions, CardMedia, Typography, Button} from '@mui/material';

const finishedProjects = [
  // Example project data
  {title: "Maze Solver",
   description: "",
   image: "", 
   github: "",
   demo: ""
  },
  {title: "Sudoku Solver",
   description: "Donald Knuth's Dancing Links algorithm written in C++. And one written in Python with PyGame to provide a visual representation of the algorithm.",
   image: "", 
   github: "https://github.com/lhalcomb/SudokuPyGame",
   github2:"https://github.com/lhalcomb/Sudokudlx",
   demo: ""
  },
  {
    title: "",
    description: "",
    image: "",
    github: "",
    demo: ""
  }


];
export default function FinishedPage() {
  return (
    <div className= "flex justify-center items-center min-h-screen bg-[var(--web-gray)]">
      <div className="flex flex-col items-center gap-6 p-4 overflow-y-auto bg-[var(--venom-black)] max-h-[90vh]">
        {finishedProjects.map((project, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.github} target="_blank">GitHub</Button>
              {project.github2 && (
                <Button size="small" href={project.github2} target="_blank">GitHub</Button>
              )}
              {project.demo && (
                <Button size="small" href={project.demo} target="_blank">Live Demo</Button>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}