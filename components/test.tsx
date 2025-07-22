'use client';

import p5 from 'p5';
import React, { useEffect, useRef } from 'react';



function sketch(p: p5) {
    let x: number; // X-coordinate of the circle's center
    let y: number; // Y-coordinate of the circle's center
    let xspeed: number; // Horizontal speed
    let yspeed: number; // Vertical speed
    let r: number; // Radius of the circle
    const width = 400;
    const height = 400;

    p.setup = function() {
        

        p.createCanvas(400, 400); // Creates a canvas with a width of 640 and a height of 360
        x = width / 2; // Initial X position (center of the canvas horizontally)
        y = height / 2; // Initial Y position (center of the canvas vertically)
        xspeed = 5; // Initial horizontal speed
        yspeed = 2; // Initial vertical speed
        r = 25; // Radius of the circle

    }


    p.draw = function (){

        p.background(0); // Sets the background color to black (clears the previous frame)

        // Draw the circle
        p.ellipse(x, y, r * 2, r * 2); // Draws a circle at (x, y) with a diameter of r*2

        // Update the circle's position
        x += xspeed; // Move the circle horizontally
        y += yspeed; // Move the circle vertically

        // Check for horizontal boundary collisions
        if (x > width - r || x < r) { // If the circle hits the right or left edge
            xspeed = -xspeed; // Reverse the horizontal speed (bounce)
        }

        // Check for vertical boundary collisions
        if (y > height - r || y < r) { // If the circle hits the bottom or top edge
            yspeed = -yspeed; // Reverse the vertical speed (bounce)
        }
        
    }

};

export default function Test() {
    const sketchRef = useRef<HTMLDivElement>(null);
    const p5InstanceRef = useRef<p5 | null>(null);
    
    useEffect(() => {
        if (sketchRef.current) {
            p5InstanceRef.current = new p5(sketch, sketchRef.current);
        }

        
        return () => {
            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove(); //Cleans up canvas
            }
        };
        
    }, [])

    return <div ref={sketchRef} />;
}