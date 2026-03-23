"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { keyAdvantages, testimonials, products } from '@/lib/data';
import { Cog, Leaf, MoveRight, Recycle, Users, Sprout } from 'lucide-react';
import type { ElementType } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const iconMap: { [key: string]: ElementType } = {
  'Unmatched Quality': Leaf,
  'Sustainable Practices': Recycle,
  'Community Empowerment': Users,
  'Modern Technology': Cog,
};

// Use the requested images from the public folder for the home header carousel
const heroImages = ['/soit2.jpeg', '/home3.jpg', '/home4.jpg', '/soit8.jpg', '/soit9.jpg'];

export default function Home() {
  const factoryImage = PlaceHolderImages.find(
    (img) => img.id === 'factory-exterior'
  );
  
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false })
  );

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section
            className="relative h-[95vh] min-h-[700px] w-full flex items-center justify-center text-center text-primary-foreground overflow-hidden">
            {/* Carousel Background */}
            <div data-carousel className="absolute inset-0 w-full h-full">
                <div data-carousel-item className="absolute inset-0 w-full h-full block transition-opacity duration-1000">
                    <img src="/images/soit2.jpeg" alt="Soit Sugar background image 1"
                        className="object-cover w-full h-full" />
                </div>
                <div data-carousel-item className="absolute inset-0 w-full h-full hidden transition-opacity duration-1000">
                    <img src="/images/home3.jpg" alt="Soit Sugar background image 2"
                        className="object-cover w-full h-full" />
                </div>
                <div data-carousel-item className="absolute inset-0 w-full h-full hidden transition-opacity duration-1000">
                    <img src="/images/home4.jpg" alt="Soit Sugar background image 3"
                        className="object-cover w-full h-full" />
                </div>
                <div data-carousel-item className="absolute inset-0 w-full h-full hidden transition-opacity duration-1000">
                    <img src="/images/soit8.jpg" alt="Soit Sugar background image 4"
                        className="object-cover w-full h-full" />
                </div>
                <div data-carousel-item className="absolute inset-0 w-full h-full hidden transition-opacity duration-1000">
                    <img src="/images/soit9.jpg" alt="Soit Sugar background image 5"
                        className="object-cover w-full h-full" />
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight tracking-tight drop-shadow-lg">
                    Cultivating Sweetness, <br />
                    Nurturing Communities
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    From the lush fields of Kenya, we bring you the finest, sustainably-produced sugar that enriches
                    lives and empowers our communities.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/about"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                        Discover Our Story
                    </a>
                    <a href="/products"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8">
                        Explore Our Products
                    </a>
                </div>
            </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="relative group">
                    <img src="/images/home1.jpg" alt="Soit Sugar Factory"
                        className="rounded-lg shadow-xl object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                        A Legacy of Sweetness & Quality
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Soit Sugar Company is more than just a factory; we are a community-driven enterprise dedicated
                        to producing Kenya's finest sugar.
                    </p>
                    <p className="text-muted-foreground">
                        Nestled in the heart of Kenya's sugar belt, our state-of-the-art facility combines modern
                        technology with sustainable farming practices. We partner with local farmers to source the
                        highest quality sugarcane, ensuring a sweet, pure product while uplifting our community and
                        protecting our environment.
                    </p>
                    <a href="/about"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Learn More About Us <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                    </a>
                </div>
            </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Our Commitment
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We are founded on a steadfast commitment to excellence, sustainability, and community
                        empowerment. These principles guide every decision we make.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Advantage 1 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center pt-0">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <i data-lucide="leaf" className="h-8 w-8 text-primary"></i>
                            </div>
                            <h3 className="font-semibold tracking-tight font-headline text-xl">Unmatched Quality</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">
                                We adhere to the strictest international standards, using advanced technology to produce
                                pure, high-quality sugar that consistently exceeds expectations.
                            </p>
                        </div>
                    </div>
                    {/* Advantage 2 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center pt-0">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <i data-lucide="recycle" className="h-8 w-8 text-primary"></i>
                            </div>
                            <h3 className="font-semibold tracking-tight font-headline text-xl">Sustainable Practices</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">
                                Our eco-friendly approach minimizes our environmental footprint by using renewable
                                energy, recycling water, and promoting biodiversity on our farms.
                            </p>
                        </div>
                    </div>
                    {/* Advantage 3 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center pt-0">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <i data-lucide="users" className="h-8 w-8 text-primary"></i>
                            </div>
                            <h3 className="font-semibold tracking-tight font-headline text-xl">Community Empowerment</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">
                                We build strong, supportive partnerships with our farmers, providing them with the
                                resources and training needed to thrive and uplift their communities.
                            </p>
                        </div>
                    </div>
                    {/* Advantage 4 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 items-center pt-0">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <i data-lucide="cog" className="h-8 w-8 text-primary"></i>
                            </div>
                            <h3 className="font-semibold tracking-tight font-headline text-xl">Modern Technology</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground text-sm">
                                Our state-of-the-art factory leverages cutting-edge technology for efficient, clean, and
                                sustainable production, ensuring every grain of sugar is perfect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Our Products
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From our fields to your table, we offer a range of premium sugar products crafted with the
                        utmost care and quality.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden group border-2">
                        <div className="w-full aspect-[4/3] overflow-hidden bg-muted">
                            <img src="/images/sugarproducts1.webp" alt="Refined White Sugar"
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-col space-y-1.5 p-0 mb-2">
                                <h3 className="font-semibold tracking-tight font-headline text-2xl">Refined White Sugar</h3>
                            </div>
                            <div className="p-0 flex-grow">
                                <p className="text-muted-foreground text-sm">
                                    High-purity, fine granulated sugar for all your baking and beverage needs.
                                </p>
                            </div>
                            <div className="flex items-center p-0 pt-6">
                                <a href="/products#refined-white-sugar"
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    View Details <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden group border-2">
                        <div className="w-full aspect-[4/3] overflow-hidden bg-muted">
                            <img src="/images/product2.jpg" alt="Natural Brown Sugar"
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-col space-y-1.5 p-0 mb-2">
                                <h3 className="font-semibold tracking-tight font-headline text-2xl">Natural Brown Sugar</h3>
                            </div>
                            <div className="p-0 flex-grow">
                                <p className="text-muted-foreground text-sm">
                                    Unrefined brown sugar with a rich molasses flavor, perfect for rustic baking.
                                </p>
                            </div>
                            <div className="flex items-center p-0 pt-6">
                                <a href="/products#natural-brown-sugar"
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    View Details <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden group border-2">
                        <div className="w-full aspect-[4/3] overflow-hidden bg-muted">
                            <img src="/images/product4.jpg" alt="Sugarcane Syrup"
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-col space-y-1.5 p-0 mb-2">
                                <h3 className="font-semibold tracking-tight font-headline text-2xl">Sugarcane Syrup</h3>
                            </div>
                            <div className="p-0 flex-grow">
                                <p className="text-muted-foreground text-sm">
                                    A sweet and versatile syrup made from pure sugarcane juice.
                                </p>
                            </div>
                            <div className="flex items-center p-0 pt-6">
                                <a href="/products#sugarcane-syrup"
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    View Details <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    Ready to Partner with Soit Sugar?
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Whether you are a farmer, distributor, or a business looking for high-quality sugar, we are ready to
                    build a sweet future together. Contact us to learn more.
                </p>
                <div className="mt-8">
                    <a href="/contact#quote"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8">
                        Get a Free Quote Today
                    </a>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
}
