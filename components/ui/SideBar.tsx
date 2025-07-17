'use-client';

import React from 'react';
import Link from 'next/link';

type NavLinks = {
    href: string;
    label: string;
    icon?: string;
};

type SideBarProps = {
    header: string;
    navLinks: NavLinks[];
};


export default function SideBar(
    {header, navLinks}: SideBarProps){
        return (
            // Sidebar.tsx (simplified)
        <div className="w-60  bg-[var(--venom-black)] text-white p-10  border-r border-gray-700">
            <h2 className="text-xl font-bold mb-4">{header}</h2>
            <nav className="flex flex-col gap-2">
                {navLinks.map(({ href, label, icon }) => (
                <Link key={href} href={href} className="hover:underline">
                    {icon && <span>{icon}</span>} {label}
                </Link>
                ))}
            </nav>
        </div>
                
        );
    }