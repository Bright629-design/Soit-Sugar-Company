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
        <header className="relative bg-primary/80 text-primary-foreground py-20 md:py-32 overflow-hidden">
            <img src="/images/careers1.jpg" alt="A diverse team of professionals working together"
                className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
            <div className="container mx-auto px-4 relative text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Join Our Team
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Become a part of a dynamic company dedicated to quality, innovation, and making a positive impact in
                    our community.
                </p>
            </div>
        </header>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold font-headline text-primary">
                        Grow With Us
                    </h2>
                    <p className="text-muted-foreground">
                        At Soit Sugar, we believe our people are our greatest asset. We are committed to fostering a
                        workplace culture that is inclusive, challenging, and rewarding. We provide opportunities for
                        professional growth and encourage our team to innovate and take initiative.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <div className="bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">Integrity</div>
                        <div className="bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">Innovation</div>
                        <div className="bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">Community</div>
                        <div className="bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">Quality</div>
                        <div className="bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">Sustainability</div>
                        <div className="bg-muted/50 rounded-full px-4 py-2 text-sm font-medium">Teamwork</div>
                    </div>
                </div>
                <img src="/images/careers2.jpg" alt="Employees collaborating in a modern office"
                    className="rounded-lg shadow-lg object-cover w-full h-auto" />
            </div>
        </section>

        <section id="openings" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Current Openings
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Find your next career opportunity at Soit Sugar Company. If you don't see a suitable role, feel
                        free to send us a speculative application.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {/* Job 1 */}
                    <div className="border rounded-lg p-4">
                        <button
                            className="flex w-full items-center justify-between text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
                            onClick={(e) => { const el = e.currentTarget; el.nextElementSibling?.classList.toggle('hidden'); el.querySelector('svg')?.classList.toggle('rotate-180'); }}>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Agricultural Extension Officer</h3>
                                <div
                                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="briefcase" className="h-4 w-4"></i>
                                        <span>Farmer Relations</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="map-pin" className="h-4 w-4"></i>
                                        <span>Transmara, Kenya</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="clock" className="h-4 w-4"></i>
                                        <span>Full-time</span>
                                    </div>
                                </div>
                            </div>
                            <i data-lucide="chevron-down"
                                className="h-4 w-4 shrink-0 transition-transform duration-200"></i>
                        </button>
                        <div className="hidden pt-4 text-sm text-muted-foreground">
                            <div className="space-y-4 pt-2">
                                <p>Responsible for training and supporting our partner farmers. Requires a degree in
                                    Agriculture and 3+ years of experience.</p>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Apply
                                    Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Job 2 */}
                    <div className="border rounded-lg p-4">
                        <button
                            className="flex w-full items-center justify-between text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
                            onClick={(e) => { const el = e.currentTarget; el.nextElementSibling?.classList.toggle('hidden'); el.querySelector('svg')?.classList.toggle('rotate-180'); }}>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Quality Assurance Technician</h3>
                                <div
                                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="briefcase" className="h-4 w-4"></i>
                                        <span>Laboratory</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="map-pin" className="h-4 w-4"></i>
                                        <span>Soit Factory, Narok</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="clock" className="h-4 w-4"></i>
                                        <span>Full-time</span>
                                    </div>
                                </div>
                            </div>
                            <i data-lucide="chevron-down"
                                className="h-4 w-4 shrink-0 transition-transform duration-200"></i>
                        </button>
                        <div className="hidden pt-4 text-sm text-muted-foreground">
                            <div className="space-y-4 pt-2">
                                <p>Conduct tests to ensure our products meet the highest quality standards. Diploma in
                                    Food Science or related field required.</p>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Apply
                                    Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Job 3 */}
                    <div className="border rounded-lg p-4">
                        <button
                            className="flex w-full items-center justify-between text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
                            onClick={(e) => { const el = e.currentTarget; el.nextElementSibling?.classList.toggle('hidden'); el.querySelector('svg')?.classList.toggle('rotate-180'); }}>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Mechanical Engineer</h3>
                                <div
                                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="briefcase" className="h-4 w-4"></i>
                                        <span>Factory Operations</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="map-pin" className="h-4 w-4"></i>
                                        <span>Soit Factory, Narok</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="clock" className="h-4 w-4"></i>
                                        <span>Full-time</span>
                                    </div>
                                </div>
                            </div>
                            <i data-lucide="chevron-down"
                                className="h-4 w-4 shrink-0 transition-transform duration-200"></i>
                        </button>
                        <div className="hidden pt-4 text-sm text-muted-foreground">
                            <div className="space-y-4 pt-2">
                                <p>Oversee the maintenance and optimization of factory machinery. Degree in Mechanical
                                    Engineering and 5+ years in a manufacturing environment.</p>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Apply
                                    Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Job 4 */}
                    <div className="border rounded-lg p-4">
                        <button
                            className="flex w-full items-center justify-between text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
                            onClick={(e) => { const el = e.currentTarget; el.nextElementSibling?.classList.toggle('hidden'); el.querySelector('svg')?.classList.toggle('rotate-180'); }}>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Supply Chain Coordinator</h3>
                                <div
                                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="briefcase" className="h-4 w-4"></i>
                                        <span>Logistics</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="map-pin" className="h-4 w-4"></i>
                                        <span>Nairobi Office</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i data-lucide="clock" className="h-4 w-4"></i>
                                        <span>Full-time</span>
                                    </div>
                                </div>
                            </div>
                            <i data-lucide="chevron-down"
                                className="h-4 w-4 shrink-0 transition-transform duration-200"></i>
                        </button>
                        <div className="hidden pt-4 text-sm text-muted-foreground">
                            <div className="space-y-4 pt-2">
                                <p>Manage the end-to-end supply chain from farm to customer. Experience in logistics and
                                    supply chain management is essential.</p>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Apply
                                    Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Don't see a role that fits? Send your CV to our careers team.
                    </p>
                    <a href="mailto:careers@soitsugar.co.ke"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                        Submit Speculative Application
                    </a>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
}
