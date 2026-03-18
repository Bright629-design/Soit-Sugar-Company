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
            <header className="relative bg-primary/80 text-primary-foreground py-20 md:py-32">
                 <Image
                    src="/farmers1.jpeg"
                    alt="A farmer in a sugarcane field."
                    fill
                    className="object-cover"
                    data-ai-hint="sugarcane farmer"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                <div className="container relative text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">
                        Partners in Growth
                    </h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Our farmers are the backbone of our success. We are dedicated to building strong, mutually beneficial relationships that empower them to thrive.
                    </p>
                </div>
            </header>

            <main>
                <section className="py-16 md:py-24">
                    <div className="container grid md:grid-cols-2 gap-12 items-center">
                        <Image
                            src="/farmers2.jpg"
                            alt="Two farmers discussing in a sugarcane field."
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg object-cover"
                            data-ai-hint="farmers talking"
                        />
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-headline text-primary">
                                Comprehensive Farmer Support
                            </h2>
                            <p className="text-muted-foreground">
                                We believe that our growth is directly linked to the prosperity of our farmers. That's why we've established a robust support system designed to enhance productivity, ensure sustainability, and improve livelihoods.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {supportPillars.slice(0, 2).map(pillar => (
                                    <div key={pillar.title} className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                                            {pillar.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{pillar.title}</h3>
                                            <p className="text-sm text-muted-foreground">{pillar.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-card">
                     <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">
                                Our Pillars of Support
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We provide a holistic support system to ensure our farming partners have everything they need to succeed.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {supportPillars.map((pillar) => (
                                <Card
                                key={pillar.title}
                                className="text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                >
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                                    {pillar.icon}
                                    </div>
                                    <CardTitle className="font-headline text-xl">
                                    {pillar.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">{pillar.description}</p>
                                </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                 <section className="py-16 md:py-24">
                    <div className="container grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                             <h2 className="text-3xl font-bold font-headline text-primary">
                                Measurable Impact
                            </h2>
                            <p className="text-muted-foreground">
                                Our partnerships have led to significant increases in yield and income for farmers in the Transmara region. By promoting sustainable practices, we are also ensuring the land remains fertile for future generations.
                            </p>
                            <p className='text-muted-foreground'>
                                The economic ripple effect has stimulated local economies, creating a cycle of growth and opportunity.
                            </p>
                             <Button asChild>
                                <Link href="/contact">Become a Partner</Link>
                            </Button>
                        </div>
                        <Image
                            src="/farmers3.jpg"
                            alt="A smiling farmer in a field."
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg object-cover"
                            data-ai-hint="happy farmer"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
