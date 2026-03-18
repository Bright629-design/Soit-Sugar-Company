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
      <header className="bg-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            News & Updates
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Stay informed about the latest developments, stories, and announcements from Soit Sugar Company.
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl leading-snug">
                    <Link href={`/news/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                    </Link>
                  </CardTitle>
                   <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={`/news/${article.slug}`}>
                      Read More <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
