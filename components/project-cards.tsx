'use client';

import React from 'react';
import {Card, CardContent, CardActions, CardMedia, Typography, Button, Box} from '@mui/material';


type ProjectCardProps = {
    title: string;
    description: string;
    image?: string;
    github: string;
    github2?: string;
    demo?: string;
};


export default function ProjectCard(
    { title, description, image, github, github2, demo }: ProjectCardProps ){
        return (
            <Card sx={
                    {maxWidth: 700, width: '100%', 
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 6,
                    }}}>
                <div className="flex">
                    <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexGrow: 1
                        }}
                        >
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <CardActions sx={{ paddingLeft: 0 }}>
                            <Button size="small" href={github} target="_blank">
                            GitHub
                            </Button>
                            {github2 && (
                            <Button size="small" href={github2} target="_blank">
                                GitHub
                            </Button>
                            )}
                            {demo && (
                            <Button size="small" href={demo} target="_blank">
                                Live Demo
                            </Button>
                            )}
                        </CardActions>
                        </Box>
                        {image && (
                        <CardMedia
                            component="img"
                            image={image}
                            alt={title}
                            sx={{
                            width: 200,
                            height: '85%',
                            borderTopRightRadius: '4px',
                            borderBottomRightRadius: '4px'
                            }}
                        />
                        )}
                    </Box>
                    </CardContent>
                </div>
            </Card>
        );
    }

