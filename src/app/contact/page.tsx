import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            We're here to help. Whether you have a question about our products or want to request a quote, we'd love to hear from you.
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>By Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monday - Friday, 9am - 5pm</p>
                <a href="tel:+254123456789" className="text-lg font-semibold text-primary hover:underline">
                  +254 123 456 789
                </a>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>By Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We'll respond within 24 hours</p>
                <a href="mailto:info@soitsugar.co.ke" className="text-lg font-semibold text-primary hover:underline">
                  info@soitsugar.co.ke
                </a>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Via WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For quick questions &amp; support</p>
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline">
                  Click to Chat
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div id="quote">
              <h2 className="text-3xl font-bold font-headline mb-6">Send an Inquiry</h2>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., Bulk Order Quote" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Please provide details about your inquiry..." />
                </div>
                <div className="flex justify-start">
                  <Button type="submit" size="lg">Send Message</Button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold font-headline mb-6">Our Location</h2>
              <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                {/* Embedded Google Map would go here. Using a placeholder. */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.659103986912!2d35.85805557496466!3d-0.4218909995574841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a5301824a7b57%3A0x95c372255531d275!2sSoit%20Sugar%20Company%20Limited!5e0!3m2!1sen!2ske!4v1720542301842!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Soit Sugar Company Location"
                ></iframe>
              </div>
              <p className="text-muted-foreground mt-4">Soit Sugar Company Limited, Soit, Kenya</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
