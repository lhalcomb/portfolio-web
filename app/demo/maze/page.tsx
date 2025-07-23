'use client'

//import P5Sketch from '@/components/P5Sketch';
import dynamic from 'next/dynamic';
import mazeSketch from '@/components/maze/MazeSketch'; 

const P5Sketch = dynamic(() => import('@/components/P5Sketch'), { ssr: false });

export default function Test2() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Maze Generator & Solver</h1>
              <P5Sketch sketch={mazeSketch} />
              <div id="button-container" className="mb-4 flex gap-2 flex-wrap" />
        </main>
  );
}