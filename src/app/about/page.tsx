import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Target, Users, Factory, MapPin, User, Link as LinkIcon, Handshake, Eye, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const coreValues = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Quality',
    description: 'We are committed to producing the highest quality sugar through rigorous standards and continuous improvement.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Integrity',
    description: 'We conduct our business with the utmost integrity, ensuring transparency and ethical practices in all our dealings.',
  },
  {
    icon: <Handshake className="h-8 w-8" />,
    title: 'Community',
    description: 'We believe in empowering our local communities by fostering economic growth and creating sustainable livelihoods.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Partnership',
    description: 'We build lasting and mutually beneficial relationships with our farmers, suppliers, and customers.',
  },
]

export default function AboutPage() {
  const historyImage = PlaceHolderImages.find((img) => img.id === 'about-history');
  const missionImage = PlaceHolderImages.find((img) => img.id === 'about-sourcing');

  return (
    <div className="bg-background">
      <header className="relative text-primary-foreground h-[400px]">
        <Image
          src="/about1.jpg"
          alt="Soit Sugar Factory"
          fill
          className="object-cover"
          data-ai-hint="sugar factory"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            About Soit Sugar Company
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Pioneering a sustainable and prosperous future for Kenya's sugar industry through quality, innovation, and community empowerment.
          </p>
        </div>
      </header>
      
      <main>
        <section className="py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3">
                <Factory className="h-8 w-8" />
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Soit Sugar Company is a pioneering Kenyan sugar project located in the Transmara region, near Angata Barikoi in Narok County. Founded by visionary businessman Bernard K. Soi, our new state-of-the-art factory is nearing completion and is set to revitalize the region's sugar industry. 
              </p>
              <p className="text-muted-foreground">
                With an initial planned milling capacity of 138 tonnes per day, we are poised to serve dedicated farmers in surrounding counties. Soit Sugar Company is proudly associated with other successful ventures, including the West Valley Sugar Factory, sharing a commitment to quality, community, and progress.
              </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span>Led by <span className='font-semibold'>Bernard K. Soi</span></span>
                </div>
                 <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Located in <span className='font-semibold'>Transmara, Narok County</span></span>
                </div>
                 <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-primary" />
                  <span>Associated with <span className='font-semibold'>West Valley Sugar</span></span>
                </div>
              </div>
            </div>
            {historyImage && (
              <Image
                src={historyImage.imageUrl}
                alt={historyImage.description}
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint={historyImage.imageHint}
              />
            )}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {missionImage && (
              <Image
                src={missionImage.imageUrl}
                alt={missionImage.description}
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover order-last md:order-first"
                data-ai-hint={missionImage.imageHint}
              />
            )}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8" />
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg">
                  To be a leading producer of high-quality sugar and associated products, utilizing sustainable practices that empower our partner farmers, enrich our communities, and deliver exceptional value to our customers.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold font-headline text-primary flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8" />
                  Our Vision
                </h2>
                <p className="text-muted-foreground text-lg">
                  To be a catalyst for economic growth and a benchmark for sustainability in the African sugar industry, creating a sweet and prosperous future for all our stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our values are the bedrock of our company culture and guide every aspect of our operations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value) => (
                <Card
                  key={value.title}
                  className="text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                      {value.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
