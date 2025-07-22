import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="inline-flex justify-center items-center gap-28 flex-1">
        <div className="w-[665px] inline-flex flex-col justify-start items-center gap-1.5">
            <div className="w-[619.48px] h-80 text-center justify-start text-zinc-900 text-2xl font-medium font-['Inter']">
                Hello there! I am Layden Halcomb. I like comics, coffee, puzzles, and quality time. I also love to make software. <br/><br/>
                Below you can find my finished projects from my coursework and my works in progress. <br/><br/>
            </div>
            <div id="projects" className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-[100px]">
                <Link href="/projects/finished" className="hover:scale-105 duration-150 border-4 border-blue-500 rounded-lg p-4 text-center w-64 bg-[var(--venom-black)] text-white">
                <Image alt="Finished Projects" src="/projects.png" width={200} height={200} className="mx-auto" />
                <p className="mt-4 text-lg font-semibold">Finished Projects</p>
                </Link>
                <Link href="/projects/inprogress" className="hover:scale-105 duration-150 border-4 border-red-500 rounded-lg p-4 text-center w-64 bg-[var(--venom-black)] text-white">
                <Image alt="Works in Progress" src="/wipprojects.png" width={200} height={200} className="mx-auto" />
                <p className="mt-4 text-lg font-semibold">Works in Progress</p>
                </Link>
            </div>
        </div>
        <div className=" inline-flex flex-col justify-start gap-2.5">
            <div className="border-4 border-red-600 rounded-md overflow-hidden ">
                <Image
                src="/laydenOnBench.jpg"
                alt="Layden on a bench"
                width={400}
                height={800}
                />
            </div>
            <div className="inline-flex justify-center items-center gap-7">
                <Link href="https://github.com/lhalcomb" target="_blank">
                    <Image src="/github-mark.svg" alt="GitHub" width={30} height={30} className= "transition-transform duration-200 ease-in-out hover:scale-125" />
                </Link>
                <Link href="https://www.linkedin.com/in/lhalcomb" target="_blank">
                    <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} className= "transition-transform duration-200 ease-in-out hover:scale-125" />
                </Link>
                <Link href="mailto:lhalcomb@drury.edu">
                    <Image src="/outlook.png" alt="Outlook" width={30} height={30} className= "transition-transform duration-200 ease-in-out hover:scale-125" />
                </Link>
                <Link href="mailto:lhalcomb@gmail.com">
                    <Image src="/gmail.png" alt="Gmail" width={30} height={30} className= "transition-transform duration-200 ease-in-out hover:scale-125" />
                </Link>
            </div>
            {/* <h1 className="text-left font-bold text--web-white">About:</h1>
            <p className = "indent-14"></p> */}
        </div>
        
        
    </div>
  );
}