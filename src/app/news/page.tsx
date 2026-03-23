import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, MoveRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Soit Sugar Factory Nears Completion, Promises Economic Boost for Narok County',
    date: 'October 26, 2024',
    excerpt: 'The highly anticipated Soit Sugar Factory is on track to begin operations by year-end, a project that promises to create hundreds of jobs and boost the local economy...',
    slug: 'factory-nears-completion',
  },
  {
    id: 2,
    title: 'New Farmer Support Program Launched to Increase Sugarcane Yields',
    date: 'October 15, 2024',
    excerpt: 'Soit Sugar Company today launched a comprehensive support program for its partner farmers, offering training, quality inputs, and financial services...',
    slug: 'farmer-support-program',
  },
  {
    id: 3,
    title: 'Sustainability at its Core: Soit Sugar Invests in Green Energy',
    date: 'September 30, 2024',
    excerpt: 'In a major step towards environmental sustainability, the company announced its plans to power the factory using bagasse, a byproduct of sugarcane processing...',
    slug: 'investment-in-green-energy',
  },
    {
    id: 4,
    title: 'Community First: Soit Sugar Funds New School Block',
    date: 'September 12, 2024',
    excerpt: 'As part of its corporate social responsibility, Soit Sugar has funded the construction of a new classroom block at a local primary school...',
    slug: 'community-school-funding',
  },
  {
    id: 5,
    title: 'Record Harvest Expected as Farmers Embrace Modern Techniques',
    date: 'August 28, 2024',
    excerpt: 'Local farmers partnered with Soit Sugar are anticipating a record harvest this season, thanks to the adoption of modern agricultural practices...',
    slug: 'record-harvest-expected',
  },
  {
    id: 6,
    title: 'Soit Sugar to Participate in Annual Agribusiness Expo',
    date: 'August 05, 2024',
    excerpt: 'The company will be showcasing its products and farmer partnership models at the upcoming national agribusiness expo in Nairobi...',
    slug: 'agribusiness-expo-participation',
  },
];

export default function NewsPage() {
  return (
    <div className="bg-background">
      

      <main>
        <header className="bg-primary/80 text-primary-foreground py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    News & Updates
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Stay informed about the latest developments, stories, and announcements from Soit Sugar Company.
                </p>
            </div>
        </header>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Article 1 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold leading-none tracking-tight font-headline text-xl leading-snug">
                                <a href="#" className="hover:text-primary transition-colors">
                                    Soit Sugar Factory Nears Completion, Promises Economic Boost for Narok County
                                </a>
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <i data-lucide="calendar" className="h-4 w-4"></i>
                                <span>October 26, 2024</span>
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-grow">
                            <p className="text-muted-foreground text-sm">The highly anticipated Soit Sugar Factory is on
                                track to begin operations by year-end, a project that promises to create hundreds of
                                jobs and boost the local economy...</p>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <a href="#"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto">
                                Read More <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                            </a>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold leading-none tracking-tight font-headline text-xl leading-snug">
                                <a href="#" className="hover:text-primary transition-colors">
                                    New Farmer Support Program Launched to Increase Sugarcane Yields
                                </a>
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <i data-lucide="calendar" className="h-4 w-4"></i>
                                <span>October 15, 2024</span>
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-grow">
                            <p className="text-muted-foreground text-sm">Soit Sugar Company today launched a comprehensive
                                support program for its partner farmers, offering training, quality inputs, and
                                financial services...</p>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <a href="#"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto">
                                Read More <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                            </a>
                        </div>
                    </div>

                    {/* Article 3 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold leading-none tracking-tight font-headline text-xl leading-snug">
                                <a href="#" className="hover:text-primary transition-colors">
                                    Sustainability at its Core: Soit Sugar Invests in Green Energy
                                </a>
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <i data-lucide="calendar" className="h-4 w-4"></i>
                                <span>September 30, 2024</span>
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-grow">
                            <p className="text-muted-foreground text-sm">In a major step towards environmental
                                sustainability, the company announced its plans to power the factory using bagasse, a
                                byproduct of sugarcane processing...</p>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <a href="#"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto">
                                Read More <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                            </a>
                        </div>
                    </div>

                    {/* Article 4 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold leading-none tracking-tight font-headline text-xl leading-snug">
                                <a href="#" className="hover:text-primary transition-colors">
                                    Community First: Soit Sugar Funds New School Block
                                </a>
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <i data-lucide="calendar" className="h-4 w-4"></i>
                                <span>September 12, 2024</span>
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-grow">
                            <p className="text-muted-foreground text-sm">As part of its corporate social responsibility,
                                Soit Sugar has funded the construction of a new classroom block at a local primary
                                school...</p>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <a href="#"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto">
                                Read More <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                            </a>
                        </div>
                    </div>

                    {/* Article 5 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold leading-none tracking-tight font-headline text-xl leading-snug">
                                <a href="#" className="hover:text-primary transition-colors">
                                    Record Harvest Expected as Farmers Embrace Modern Techniques
                                </a>
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <i data-lucide="calendar" className="h-4 w-4"></i>
                                <span>August 28, 2024</span>
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-grow">
                            <p className="text-muted-foreground text-sm">Local farmers partnered with Soit Sugar are
                                anticipating a record harvest this season, thanks to the adoption of modern agricultural
                                practices...</p>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <a href="#"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto">
                                Read More <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                            </a>
                        </div>
                    </div>

                    {/* Article 6 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="font-semibold leading-none tracking-tight font-headline text-xl leading-snug">
                                <a href="#" className="hover:text-primary transition-colors">
                                    Soit Sugar to Participate in Annual Agribusiness Expo
                                </a>
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <i data-lucide="calendar" className="h-4 w-4"></i>
                                <span>August 05, 2024</span>
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex-grow">
                            <p className="text-muted-foreground text-sm">The company will be showcasing its products and
                                farmer partnership models at the upcoming national agribusiness expo in Nairobi...</p>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <a href="#"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto">
                                Read More <i data-lucide="move-right" className="ml-2 h-4 w-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
}
