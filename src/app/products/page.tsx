import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/data';
import { MoveRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <header className="relative text-primary-foreground h-[400px]">
        <Image
          src="/production1.jpg"
          alt="Sugar production"
          fill
          className="object-cover"
          data-ai-hint="sugar production"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Our Premium Sugar Products
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Explore our range of high-quality sugar products, crafted with
            purity and precision.
          </p>
        </div>
      </header>

      <main>
        <header className="relative text-primary-foreground h-[400px]">
            <img src="/images/production1.jpg" alt="Sugar production"
                className="object-cover w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div
                className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Our Premium Sugar Products
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Explore our range of high-quality sugar products, crafted with purity and precision.
                </p>
            </div>
        </header>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
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
                                <a href="/product-details?id=refined-white-sugar"
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    View Details & Get Quote <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
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
                                <a href="/product-details?id=natural-brown-sugar"
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    View Details & Get Quote <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
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
                                <a href="/product-details?id=sugarcane-syrup"
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    View Details & Get Quote <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
}
