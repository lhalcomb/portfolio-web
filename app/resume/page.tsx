import React from 'react';
import Image from 'next/image';

export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[--web-gray] p-4">
      <div className="bg-gradient-to-r from-[var(--spidey-red)] via-[var(--web-blue)] to-[var(--spidey-red)] p-1 rounded-full shadow-xl">
        <div className="bg-white rounded-full px-10 py-6 flex items-center space-x-6">
          <Image
            src="/layden1.jpeg"
            alt="Layden's Profile"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover border-4 border-[var(--spidey-red)]"
          />
          <div className="text-[var(--web-blue)] md:inline text-sm">
            <h1 className="text-3xl font-bold">Layden Halcomb</h1>
            <p className="text-[var(--web-gray)]">
              Math + CS @ Drury University | Software Developer
            </p>
            <p className="text-[var(--web-gray)]">
              Born to explore the universe,
              forced to do it from home
            </p>
            <a
              href="/Layden_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--spidey-red)]"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
