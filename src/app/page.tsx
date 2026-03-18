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
const heroImages = ['/soit2.jpeg', '/production2.jpg', '/soit6.jpg', '/soit8.jpg', '/soit9.jpg'];


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
        <section className="relative h-[95vh] min-h-[700px] w-full flex items-center justify-center text-center text-primary-foreground">
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            className="absolute inset-0 w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
          >
            <CarouselContent className="m-0 h-full">
              {heroImages.map((src, index) => (
                <CarouselItem key={index} className="p-0 h-full">
                  <Image
                    src={src}
                    alt={`Soit Sugar background image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 animate-fade-in-up space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight tracking-tight drop-shadow-lg">
              Cultivating Sweetness, <br />
              Nurturing Communities
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
              From the lush fields of Kenya, we bring you the finest, sustainably-produced sugar that enriches lives and empowers our communities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative group">
              <Image
                src="/home1.jpg"
                alt="Soit Sugar Factory"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="modern factory"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                A Legacy of Sweetness & Quality
              </h2>
              <p className="text-muted-foreground text-lg">
                Soit Sugar Company is more than just a factory; we are a
                community-driven enterprise dedicated to producing Kenya's
                finest sugar.
              </p>
              <p className="text-muted-foreground">
                Nestled in the heart of Kenya's sugar belt, our
                state-of-the-art facility combines modern technology with
                sustainable farming practices. We partner with local farmers to
                source the highest quality sugarcane, ensuring a sweet, pure
                product while uplifting our community and protecting our
                environment.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Our Commitment
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are founded on a steadfast commitment to excellence, sustainability, and community empowerment. These principles guide every decision we make.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyAdvantages.map((advantage) => {
                const Icon = iconMap[advantage.title];
                return (
                  <Card
                    key={advantage.title}
                    className="text-center p-6 bg-card border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <CardHeader className="items-center">
                      <div className="bg-primary/10 p-4 rounded-full mb-4">
                        {Icon && <Icon className="h-8 w-8 text-primary" />}
                      </div>
                      <CardTitle className="font-headline text-xl">
                        {advantage.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Our Products
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From our fields to your table, we offer a range of premium sugar products crafted with the utmost care and quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const productImage = PlaceHolderImages.find(
                  (img) => img.id === product.imageId
                );
                return (
                  <Card
                    key={product.id}
                    className="flex flex-col overflow-hidden group border-2"
                  >
                    {productImage && (
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
                        <Image
                          src={productImage.imageUrl}
                          alt={product.name}
                          width={500}
                          height={500}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={productImage.imageHint}
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <CardHeader className="p-0">
                        <CardTitle className="font-headline text-2xl mb-2">
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 flex-grow">
                        <p className="text-muted-foreground text-sm">
                          {product.description}
                        </p>
                      </CardContent>
                      <CardFooter className="p-0 pt-6">
                        <Button asChild className="w-full">
                          <Link href={`/products/${product.id}`}>
                            View Details
                            <MoveRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Voices of Our Community
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our success is reflected in the prosperity of our partners and the satisfaction of our clients.
              </p>
            </div>
             <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                     <div className="p-1 h-full">
                        <Card
                          className="flex flex-col bg-card shadow-lg h-full"
                        >
                          <CardContent className="pt-6 flex-grow">
                            <p className="text-muted-foreground italic">
                              "{testimonial.quote}"
                            </p>
                          </CardContent>
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage
                                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                                />
                                <AvatarFallback>
                                  {testimonial.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                     </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='-left-4' />
              <CarouselNext className='-right-4' />
            </Carousel>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Ready to Partner with Soit Sugar?
            </h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Whether you are a farmer, distributor, or a business looking for high-quality sugar, we are ready to build a sweet future together. Contact us to learn more.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact#quote">Get a Free Quote Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
