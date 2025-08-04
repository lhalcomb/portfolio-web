'use client';

import React, {/*useState, */ JSX} from 'react';
import Image from 'next/image';
import {Accordion, AccordionSummary, AccordionDetails, Card, CardContent, CardActions, CardMedia, Typography, Button, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//scratched idea
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPytorch, 
  SiTypescript,
  SiOpengl
} from 'react-icons/si';


const techIcons: { [key: string]: JSX.Element } = {
  python: <SiPython title="Python" />,
  cpp: <SiCplusplus title="C++" />,
  react: <SiReact title="React" />,
  nextjs: <SiNextdotjs title="Next.js" />,
  tailwind: <SiTailwindcss title="Tailwind CSS" />,
  firebase: <SiFirebase title="Firebase" />,
  pytorch: <SiPytorch title="PyTorch" />,
  typescript: <SiTypescript title="Typescript" />,
  opengl: <SiOpengl title="OpenGL" />,
  raylib: <Image src="/raylib.png" alt="Raylib" title="Raylib" width="25" height = "25" />,
  matplotlib: <Image src="/matplotlib.png" alt="Matplotlib" title="Matplotlib" width = "40" height = "40" />

};

type NestedProject = {
  title: string;
  image: string;
  link: string;
};

type ProjectCardProps = {
    title: string;
    description: string;
    image?: string;
    github: string;
    github2?: string;
    demo?: string;
    accordionDetails?: string[];
    nestedProjects?: NestedProject[];
    techStack?: string[];
};



    export default function ProjectCard(
    { title, description, image, github, github2, demo, accordionDetails, nestedProjects, techStack }: ProjectCardProps
        ) {
        // const [open, setOpen] = useState(false);
        // const [selectedImage, setSelectedImage] = useState<string | null>(null);

        // const handleImageClick = (img: string) => {
        //     setSelectedImage(img);
        //     setOpen(true);
        // };

        // const handleClose = () => {
        //     setOpen(false);
        //     setSelectedImage(null);
        // };
        return (
            <div className="bg-gradient-to-r from-[var(--spidey-red)] via-[var(--web-blue)] to-[var(--spidey-red)] p-1 rounded-2xl shadow-xl">
            <Card
                sx={{
                maxWidth: 700,
                width: '100%',
                borderRadius: '1rem', // matches rounded-2xl
                transition: 'transform 0.2s ease',
                backgroundColor: 'white',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 6,
                }
                }}
            >
                <div className="flex">
                <CardContent>
                    <Typography gutterBottom variant="h5">
                    {title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                        {description}
                        </Typography>

                        {accordionDetails && (
                        <Accordion sx={{ mt: 1 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="subtitle2">CNN Digit Classifier (0-9)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                {accordionDetails.map((item, idx) => (
                                <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {nestedProjects && nestedProjects.length > 0 && (
                                <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    border: '1px solid #ccc',
                                    padding: 2,
                                    borderRadius: 2,
                                    backgroundColor: '#f9f9f9',
                                }}
                                >
                                <CardMedia
                                    component="img"
                                    image={nestedProjects[0].image}
                                    alt={nestedProjects[0].title}
                                    sx={{ width: 200, height: 100, borderRadius: 2 }}
                                />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                    {nestedProjects[0].title}
                                    </Typography>
                                    <Button
                                    size="small"
                                    variant="outlined"
                                    href={nestedProjects[0].link}
                                    target="_blank"
                                    sx={{ mt: 1 }}
                                    >
                                    View Project
                                    </Button>
                                </Box>
                                </Box>
                            )}
                            </AccordionDetails>
                        </Accordion>
                        )}
                        {techStack && (
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                            {techStack.map((tech, idx) => (
                            <Box key={idx} sx={{ fontSize: 24 }}>
                                {techIcons[tech]}
                            </Box>
                            ))}
                        </Box>
                        )}

                        <CardActions sx={{ paddingLeft: 0 }}>
                        <Button size="small" href={github} target="_blank">GitHub</Button>
                        {github2 && (
                            <Button size="small" href={github2} target="_blank">GitHub</Button>
                        )}
                        {demo && (
                            <Button size="small" href={demo} target="_blank">Live Demo</Button>
                        )}
                        </CardActions>
                    </Box>
                    <div className = "hidden md:flex w-[400px] ">
                    {image && (
                        <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                    
                        />
                    )}
                    </div>
                    </Box>
                </CardContent>
                </div>
            </Card>
            </div>
        );
        }