// app/demo/sudoku/page.tsx
'use client'

//import P5Sketch from '@/components/P5Sketch';
import dynamic from 'next/dynamic';
import sudokuSketch from '@/components/sudoku/SudokuSketch'; 

const P5Sketch = dynamic(() => import('@/components/P5Sketch'), { ssr: false });

export default function Sudoku() {

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const scale = isMobile ? 0.65 : 1;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Sudoku Solver</h1>
              <div
                className="canvas-wrapper"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                }}
              >
              <P5Sketch sketch={sudokuSketch} />

              </div>

              <div id="button-container" className="mb-4 mt-[-400] md:mt-0 flex gap-2 flex-wrap" />
        </main>
  );
}

