"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Logo } from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/farmers', label: 'Our Farmers' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-transparent">
        <div className="container mx-auto px-4 flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="/index" className="flex items-center gap-2" aria-label="Soit Sugar Home Page">
                <i data-lucide="leaf" className="h-7 w-7 text-primary"></i>
                <span className="text-xl font-bold text-foreground">Soit Sugar</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <a href="/index" className="text-primary transition-colors hover:text-primary">Home</a>
                    <a href="/about" className="text-foreground/80 hover:text-primary transition-colors">About Us</a>
                    <a href="/products" className="text-foreground/80 hover:text-primary transition-colors">Products</a>
                    <a href="/sustainability"
                        className="text-foreground/80 hover:text-primary transition-colors">Sustainability</a>
                    <a href="/farmers" className="text-foreground/80 hover:text-primary transition-colors">Our
                        Farmers</a>
                    <a href="/news" className="text-foreground/80 hover:text-primary transition-colors">News</a>
                    <a href="/careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</a>
                    <a href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                    <a href="/contact#quote"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Request Quote
                    </a>
                    <a href="/admin/login"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Admin Login
                    </a>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button data-mobile-menu-button
                className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <i data-lucide="menu" className="h-6 w-6"></i>
                <span className="sr-only">Open Menu</span>
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div data-mobile-menu className="hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div
                className="fixed inset-y-0 left-0 z-50 h-full w-3/4 gap-4 border-r bg-background p-6 shadow-lg sm:max-w-sm">
                <div className="flex flex-col gap-6">
                    <div className="mb-4">
                        <a href="/index" className="flex items-center gap-2">
                            <i data-lucide="leaf" className="h-7 w-7 text-primary"></i>
                            <span className="text-xl font-bold text-foreground">Soit Sugar</span>
                        </a>
                    </div>
                    <nav className="flex flex-col gap-4">
                        <a href="/index" className="text-lg font-medium text-primary" data-close-menu>Home</a>
                        <a href="/about" className="text-lg font-medium text-foreground hover:text-primary"
                            data-close-menu>About Us</a>
                        <a href="/products" className="text-lg font-medium text-foreground hover:text-primary"
                            data-close-menu>Products</a>
                        <a href="/sustainability" className="text-lg font-medium text-foreground hover:text-primary"
                            data-close-menu>Sustainability</a>
                        <a href="/farmers" className="text-lg font-medium text-foreground hover:text-primary"
                            data-close-menu>Our Farmers</a>
                        <a href="/news" className="text-lg font-medium text-foreground hover:text-primary"
                            data-close-menu>News</a>
                        <a href="/careers" className="text-lg font-medium text-foreground hover:text-primary"
                            data-close-menu>Careers</a>
                        <a href="/contact" className="text-lg font-medium text-foreground hover:text-primary"
                            data-close-menu>Contact</a>
                    </nav>
                    <div className="mt-4 flex flex-col gap-4">
                        <a href="/contact#quote"
                            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            data-close-menu>
                            Request Quote
                        </a>
                        <a href="/admin/login"
                            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            data-close-menu>
                            Admin Login
                        </a>
                    </div>
                </div>
            </div>
            {/* Close on click outside */}
            <div className="absolute inset-0" data-close-menu></div>
        </div>
    </header>
  );
}
