'use-client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutContainer(){
    return (
        <div className=" inline-flex flex-col justify-start gap-2.5">
            <div className="border-4 border-red-600 rounded-md overflow-hidden ">
                <Image
                src="/laydenOnBench.jpg"
                alt="Layden on a bench"
                width={300} 
                height={400}
                />
            </div>
            <div className="inline-flex justify-center items-center  gap-6">
                <Link href="https://github.com/lhalcomb" target="_blank">
                    <Image src="/github-mark.svg" alt="GitHub" width={30} height={30} className="transition-transform duration-200 ease-in-out hover:scale-125" />
                </Link>
                <Link href="https://www.linkedin.com/in/lhalcomb" target="_blank">
                    <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} className="transition-transform duration-200 ease-in-out hover:scale-125"/>
                </Link>
                <Link href="mailto:lhalcomb@drury.edu">
                    <Image src="/outlook.png" alt="Outlook" width={30} height={30} className="transition-transform duration-200 ease-in-out hover:scale-125" />
                </Link>
                <Link href="mailto:lhalcomb@gmail.com">
                    <Image src="/gmail.png" alt="Gmail" width={30} height={30} className="transition-transform duration-200 ease-in-out hover:scale-125" />
                </Link>
            </div>
            {/* <h1 className="text-left font-bold text--web-white">About:</h1>
            <p className = "indent-14"></p> */}
        </div>

    );
}



