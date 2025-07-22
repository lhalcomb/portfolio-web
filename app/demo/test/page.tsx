'use client'

import dynamic from 'next/dynamic';

const Test = dynamic(
    () => import('@/components/test'),
    { ssr: false },
)

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Maze Generator & Solver</h1>
              <Test />
        </main>
    )
}