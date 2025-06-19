
import { ThemeProvider } from '@/components/theme-provider'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import type { Metadata } from "next";
import localFont from 'next/font/local'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";


const inter = localFont({
    variable: '--font-inter',
    src: '../public/inter-variable.otf',
})

export const metadata: Metadata = {
  title: "Layden Halcomb",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang='en' suppressHydrationWarning>
        <body
            className={`${inter.className} antialiased min-h-screen relative flex flex-none flex-col`}>
        <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            disableTransitionOnChange
        >
            <header className={'sticky h-16 top-0 border-b bg-[#171615] border-[#262626] z-10'}>
                <div className={'h-16 flex items-center justify-between mx-auto max-w-[1024px] px-4'}>
                    <Link className={'flex gap-4 items-center font-medium text-sm text-nowrap'}
                          href={'/'}>
                        <Image src={'/SpidermanLogo.png'} alt={'Logo'} width={32} height={32}/>
                        Layden Halcomb
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList className={'font-semibold text-sm'}>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild><Link href='/projects'
                                                                  passHref>Projects</Link></NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild><Link href='/contact'
                                                                  passHref>Contact</Link></NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild><Link href='/resume'
                                                                  passHref>Resume</Link></NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
            {children}
        </ThemeProvider>
        </body>
        </html>
  );
}


