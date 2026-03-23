import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Factory, Users, TrendingUp } from 'lucide-react';
import { ReactElement } from 'react';

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
  reverse?: boolean;
}

const FeatureCard = ({ icon, title, description, imageSrc, imageAlt, imageHint, reverse = false }: FeatureCardProps) => (
  <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
    <div className={`space-y-4 ${reverse ? 'md:col-start-2' : ''}`}>
      <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3">
        {icon}
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
    <div className={`relative group ${reverse ? 'md:col-start-1' : ''}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={350}
        className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
        data-ai-hint={imageHint}
      />
    </div>
  </div>
);


export default function SustainabilityPage() {
  const practicesImage = PlaceHolderImages.find((img) => img.id === 'sustainability-practices');
  const manufacturingImage = PlaceHolderImages.find((img) => img.id === 'sustainability-manufacturing');
  const communityImage = PlaceHolderImages.find((img) => img.id === 'sustainability-community');
  const impactImage = PlaceHolderImages.find((img) => img.id === 'factory-exterior');

  const features = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: 'Eco-Friendly Practices',
      description: 'We are dedicated to preserving our natural environment. Our agricultural practices focus on soil health, water conservation, and biodiversity. We utilize organic fertilizers and integrated pest management to minimize our ecological footprint and ensure the long-term health of the land we cultivate.',
      image: practicesImage,
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Green Manufacturing',
      description: 'Our factory is designed for efficiency and sustainability. We harness renewable energy sources, including biomass from sugarcane waste (bagasse), to power our operations. Our water recycling systems significantly reduce consumption, and we continuously innovate to decrease emissions and waste.',
      image: manufacturingImage,
      reverse: true,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Farmer Support Programs',
      description: "Our success is intertwined with the prosperity of our local farmers. We provide extensive support programs that include access to high-yield cane varieties, modern farming equipment, and financial services. Through workshops and continuous training, we empower farmers to increase their productivity and income.",
      image: communityImage,
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Positive Economic Impact',
      description: "Beyond our factory walls, we are a catalyst for economic growth in the region. By creating jobs, supporting local businesses, and investing in community infrastructure like schools and healthcare facilities, we are committed to building a thriving, resilient community for generations to come.",
      image: impactImage,
      reverse: true,
    }
  ];

  return (
    <div className="bg-background">
      <header className="bg-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Nurturing a Greener Tomorrow
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Our commitment to sustainability is at the core of everything we do, from the fields we farm to the communities we support.
          </p>
        </div>
      </header>
      
      <main>
        <header className="relative text-primary-foreground h-[400px]">
            <img src="/images/sustainability0.jpg" alt="Soit Sugar Factory"
                className="object-cover w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div
                className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Nurturing a Greener Tomorrow
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Our commitment to sustainability is at the core of everything we do, from the fields we farm to the
                    communities we support.
                </p>
            </div>
        </header>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 space-y-20 md:space-y-28">
                {/* Feature 1 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3">
                            <i data-lucide="sprout" className="h-8 w-8"></i>
                            Eco-Friendly Practices
                        </h2>
                        <p className="text-muted-foreground">We are dedicated to preserving our natural environment. Our
                            agricultural practices focus on soil health, water conservation, and biodiversity. We
                            utilize organic fertilizers and integrated pest management to minimize our ecological
                            footprint and ensure the long-term health of the land we cultivate.</p>
                    </div>
                    <div className="relative group">
                        <img src="/images/soit9.jpg" alt="Eco-Friendly Practices"
                            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>

                {/* Feature 2 (Reverse) */}
                <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-col-dense">
                    <div className="space-y-4 md:col-start-2">
                        <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3">
                            <i data-lucide="factory" className="h-8 w-8"></i>
                            Green Manufacturing
                        </h2>
                        <p className="text-muted-foreground">Our factory is designed for efficiency and sustainability. We
                            harness renewable energy sources, including biomass from sugarcane waste (bagasse), to power
                            our operations. Our water recycling systems significantly reduce consumption, and we
                            continuously innovate to decrease emissions and waste.</p>
                    </div>
                    <div className="relative group md:col-start-1">
                        <img src="/images/sustainability1.jpg" alt="Green Manufacturing"
                            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3">
                            <i data-lucide="users" className="h-8 w-8"></i>
                            Farmer Support Programs
                        </h2>
                        <p className="text-muted-foreground">Our success is intertwined with the prosperity of our local
                            farmers. We provide extensive support programs that include access to high-yield cane
                            varieties, modern farming equipment, and financial services. Through workshops and
                            continuous training, we empower farmers to increase their productivity and income.</p>
                    </div>
                    <div className="relative group">
                        <img src="/images/sustainability2.jpg" alt="Farmer Support Programs"
                            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>

                {/* Feature 4 (Reverse) */}
                <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-col-dense">
                    <div className="space-y-4 md:col-start-2">
                        <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3">
                            <i data-lucide="trending-up" className="h-8 w-8"></i>
                            Positive Economic Impact
                        </h2>
                        <p className="text-muted-foreground">Beyond our factory walls, we are a catalyst for economic growth
                            in the region. By creating jobs, supporting local businesses, and investing in community
                            infrastructure like schools and healthcare facilities, we are committed to building a
                            thriving, resilient community for generations to come.</p>
                    </div>
                    <div className="relative group md:col-start-1">
                        <img src="/images/sustainability3.jpg" alt="Positive Economic Impact"
                            className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
}
