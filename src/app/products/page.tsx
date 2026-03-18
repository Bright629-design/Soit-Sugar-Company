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

      <main className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const productImage = PlaceHolderImages.find(
                (img) => img.id === product.imageId
              );
              return (
                <Card
                  key={product.id}
                  className="flex flex-col overflow-hidden group"
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
                      <p className="text-muted-foreground">
                        {product.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-0 pt-6">
                      <Button asChild className="w-full">
                        <Link href={`/products/${product.id}`}>
                          View Details &amp; Get Quote{' '}
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
      </main>
    </div>
  );
}
