import React from 'react';
import Image from 'next/image';

export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Image
        src="/layden1.jpeg"
        alt="Layden's Profile"
        width={96}
        height={96}
        className="w-24 h-24 rounded-full object-cover border-4 border-[var(--spidey-red)]"
      />
      <div className="ml-4 text--web-blue">
        <h1 className="text-3xl font-bold">Layden Halcomb</h1>
        <p className="text-web-gray">
          Math + CS @ Drury University | Building with code & logic
        </p>
        <a
          href="/Layden_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-web-blue underline hover:text"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}
