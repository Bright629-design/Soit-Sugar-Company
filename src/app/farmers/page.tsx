import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Tractor, Handshake, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const supportPillars = [
    {
        icon: <Sprout className="h-8 w-8 text-primary" />,
        title: 'Quality Inputs',
        description: 'We provide access to high-yield, disease-resistant sugarcane varieties to maximize crop potential.'
    },
    {
        icon: <Tractor className="h-8 w-8 text-primary" />,
        title: 'Mechanization Support',
        description: 'Farmers get access to modern farming equipment, from planting to harvesting, to improve efficiency.'
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: 'Training & Extension',
        description: 'Continuous training on sustainable agricultural practices to ensure long-term productivity and soil health.'
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: 'Fair & Prompt Payments',
        description: 'We guarantee transparent pricing and timely payments to ensure financial stability for our partners.'
    }
]

export default function FarmersPage() {
    return (
        <div className="bg-background">
            

            <main>
        <header className="relative bg-primary/80 text-primary-foreground py-20 md:py-32 overflow-hidden">
            <img src="/images/farmers1.jpeg" alt="A farmer in a sugarcane field"
                className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
            <div className="container mx-auto px-4 relative text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Partners in Growth
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Our farmers are the backbone of our success. We are dedicated to building strong, mutually
                    beneficial relationships that empower them to thrive.
                </p>
            </div>
        </header>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <img src="/images/farmers2.jpg" alt="Two farmers discussing in a sugarcane field"
                    className="rounded-lg shadow-lg object-cover w-full h-auto" />
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold font-headline text-primary">
                        Comprehensive Farmer Support
                    </h2>
                    <p className="text-muted-foreground">
                        We believe that our growth is directly linked to the prosperity of our farmers. That's why we've
                        established a robust support system designed to enhance productivity, ensure sustainability, and
                        improve livelihoods.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <i data-lucide="sprout" className="h-8 w-8 text-primary"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold">Quality Inputs</h3>
                                <p className="text-sm text-muted-foreground">We provide access to high-yield,
                                    disease-resistant sugarcane varieties to maximize crop potential.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <i data-lucide="tractor" className="h-8 w-8 text-primary"></i>
                            </div>
                            <div>
                                <h3 className="font-semibold">Mechanization Support</h3>
                                <p className="text-sm text-muted-foreground">Farmers get access to modern farming equipment,
                                    from planting to harvesting, to improve efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Our Pillars of Support
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We provide a holistic support system to ensure our farming partners have everything they need to
                        succeed.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                                <i data-lucide="sprout" className="h-8 w-8"></i>
                            </div>
                            <h3 className="text-2xl font-semibold leading-none tracking-tight font-headline text-xl">Quality
                                Inputs</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">We provide access to high-yield, disease-resistant
                                sugarcane varieties to maximize crop potential.</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                                <i data-lucide="tractor" className="h-8 w-8"></i>
                            </div>
                            <h3 className="text-2xl font-semibold leading-none tracking-tight font-headline text-xl">
                                Mechanization Support</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">Farmers get access to modern farming equipment,
                                from planting to harvesting, to improve efficiency.</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                                <i data-lucide="handshake" className="h-8 w-8"></i>
                            </div>
                            <h3 className="text-2xl font-semibold leading-none tracking-tight font-headline text-xl">
                                Training & Extension</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">Continuous training on sustainable agricultural
                                practices to ensure long-term productivity and soil health.</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                                <i data-lucide="trending-up" className="h-8 w-8"></i>
                            </div>
                            <h3 className="text-2xl font-semibold leading-none tracking-tight font-headline text-xl">Fair &
                                Prompt Payments</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">We guarantee transparent pricing and timely
                                payments to ensure financial stability for our partners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold font-headline text-primary">
                        Measurable Impact
                    </h2>
                    <p className="text-muted-foreground">
                        Our partnerships have led to significant increases in yield and income for farmers in the
                        Transmara region. By promoting sustainable practices, we are also ensuring the land remains
                        fertile for future generations.
                    </p>
                    <p className='text-muted-foreground'>
                        The economic ripple effect has stimulated local economies, creating a cycle of growth and
                        opportunity.
                    </p>
                    <a href="/contact"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Become a Partner
                    </a>
                </div>
                <img src="/images/farmers3.jpg" alt="A smiling farmer in a field"
                    className="rounded-lg shadow-lg object-cover w-full h-auto" />
            </div>
        </section>
    </main>
        </div>
    );
}
