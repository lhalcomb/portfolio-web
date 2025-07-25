'use client'
//P5Sketch.ts
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { usePathname } from 'next/navigation';

interface P5SketchProps {
  sketch: (p: p5) => void;
}

const P5Sketch: React.FC<P5SketchProps> = ({ sketch }) => {
  const sketchRef = useRef<HTMLDivElement| null>(null);
  const pathName = usePathname();
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!sketchRef.current) return;

    if (sketchRef.current) {
            p5InstanceRef.current = new p5(sketch, sketchRef.current);
        }

        
        return () => {
            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove(); //Cleans up canvas
            }
        };
  }, [sketch, pathName]); // Triggers cleanup and recreate on route change

  return <div ref={sketchRef} />;
};

export default P5Sketch;