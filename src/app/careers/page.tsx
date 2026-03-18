import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Briefcase, Building, MapPin, Clock } from 'lucide-react';

const jobOpenings = [
    {
        title: 'Agricultural Extension Officer',
        department: 'Farmer Relations',
        location: 'Transmara, Kenya',
        type: 'Full-time',
        description: 'Responsible for training and supporting our partner farmers. Requires a degree in Agriculture and 3+ years of experience.'
    },
    {
        title: 'Quality Assurance Technician',
        department: 'Laboratory',
        location: 'Soit Factory, Narok',
        type: 'Full-time',
        description: 'Conduct tests to ensure our products meet the highest quality standards. Diploma in Food Science or related field required.'
    },
    {
        title: 'Mechanical Engineer',
        department: 'Factory Operations',
        location: 'Soit Factory, Narok',
        type: 'Full-time',
        description: 'Oversee the maintenance and optimization of factory machinery. Degree in Mechanical Engineering and 5+ years in a manufacturing environment.'
    },
    {
        title: 'Supply Chain Coordinator',
        department: 'Logistics',
        location: 'Nairobi Office',
        type: 'Full-time',
        description: 'Manage the end-to-end supply chain from farm to customer. Experience in logistics and supply chain management is essential.'
    }
];

const companyValues = [
    'Integrity',
    'Innovation',
    'Community',
    'Quality',
    'Sustainability',
    'Teamwork'
]

export default function CareersPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'careers-hero');
    const cultureImage = PlaceHolderImages.find(img => img.id === 'careers-culture');

  return (
    <div className="bg-background">
      <header className="relative bg-primary/80 text-primary-foreground py-20 md:py-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Join Our Team
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Become a part of a dynamic company dedicated to quality, innovation, and making a positive impact in our community.
          </p>
        </div>
      </header>
      
      <main>
        <section className="py-16 md:py-24">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold font-headline text-primary">
                        Grow With Us
                    </h2>
                    <p className="text-muted-foreground">
                        At Soit Sugar, we believe our people are our greatest asset. We are committed to fostering a workplace culture that is inclusive, challenging, and rewarding. We provide opportunities for professional growth and encourage our team to innovate and take initiative.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {companyValues.map(value => (
                            <div key={value} className="bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">{value}</div>
                        ))}
                    </div>
                </div>
                {cultureImage && (
                    <Image
                        src={cultureImage.imageUrl}
                        alt={cultureImage.description}
                        width={500}
                        height={350}
                        className="rounded-lg shadow-lg object-cover"
                        data-ai-hint={cultureImage.imageHint}
                    />
                )}
            </div>
        </section>

        <section id="openings" className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Current Openings
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Find your next career opportunity at Soit Sugar Company. If you don't see a suitable role, feel free to send us a speculative application.
                    </p>
                </div>

                 <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {jobOpenings.map((job, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="hover:no-underline">
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="h-4 w-4" />
                                            <span>{job.department}</span>
                                        </div>
                                         <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                               <div className="space-y-4 pt-2">
                                 <p className="text-muted-foreground">{job.description}</p>
                                 <Button>Apply Now</Button>
                               </div>
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                 </div>
                 
                 <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Don't see a role that fits? Send your CV to our careers team.</p>
                     <Button variant="outline" size="lg" asChild>
                        <a href="mailto:careers@soitsugar.co.ke">Submit Speculative Application</a>
                    </Button>
                 </div>
            </div>
        </section>
      </main>
    </div>
  );
}
