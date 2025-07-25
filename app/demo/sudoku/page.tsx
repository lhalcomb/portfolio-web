// app/demo/sudoku/page.tsx
'use client'

//import P5Sketch from '@/components/P5Sketch';
import dynamic from 'next/dynamic';
import sudokuSketch from '@/components/sudoku/SudokuSketch'; 

const P5Sketch = dynamic(() => import('@/components/P5Sketch'), { ssr: false });

export default function Sudoku() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Sudoku Solver</h1>
              <P5Sketch sketch={sudokuSketch} />
              <div id="button-container" className="mb-4 flex gap-2 flex-wrap" />
        </main>
  );
}

