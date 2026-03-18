import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Check, Download } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const productImage = PlaceHolderImages.find(
    (img) => img.id === product.imageId
  );

  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="flex justify-center items-start">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint={productImage.imageHint}
              />
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{product.description}</p>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Technical Specifications</h2>
              <ul className="space-y-2 text-sm">
                {product.specifications.map((spec) => (
                  <li key={spec.key} className="flex justify-between">
                    <span className="text-muted-foreground">{spec.key}</span>
                    <span className="font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Packaging Sizes</h2>
              <div className="flex flex-wrap gap-3">
                {product.packaging.map((pkg) => (
                  <div key={pkg} className="flex items-center gap-2 bg-muted/50 rounded-full px-3 py-1 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{pkg}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download Specification PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Quote Request Form */}
        <div id="quote" className="mt-16 md:mt-24">
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-headline text-center">Request a Quote for {product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+254 700 000 000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (in Kgs/Litres)</Label>
                  <Input id="quantity" type="number" placeholder="e.g., 1000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea id="message" placeholder="Any specific requirements or questions?" />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" size="lg">Submit Request</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
