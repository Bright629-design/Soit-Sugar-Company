import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      

      <main>
        <header className="bg-primary/80 text-primary-foreground py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">
                    Get in Touch
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    We're here to help. Whether you have a question about our products or want to request a quote, we'd
                    love to hear from you.
                </p>
            </div>
        </header>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                                <i data-lucide="phone" className="h-8 w-8 text-primary"></i>
                            </div>
                            <h3 className="font-semibold tracking-tight text-xl">By Phone</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Monday - Friday, 9am - 5pm</p>
                            <a href="tel:+254123456789" className="text-lg font-semibold text-primary hover:underline">
                                +254 123 456 789
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                                <i data-lucide="mail" className="h-8 w-8 text-primary"></i>
                            </div>
                            <h3 className="font-semibold tracking-tight text-xl">By Email</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">We'll respond within 24 hours</p>
                            <a href="mailto:info@soitsugar.co.ke"
                                className="text-lg font-semibold text-primary hover:underline">
                                info@soitsugar.co.ke
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
                                <i data-lucide="message-circle" className="h-8 w-8 text-primary"></i>
                            </div>
                            <h3 className="font-semibold tracking-tight text-xl">Via WhatsApp</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">For quick questions & support</p>
                            <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer"
                                className="text-lg font-semibold text-primary hover:underline">
                                Click to Chat
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div id="quote">
                        <h2 className="text-3xl font-bold font-headline mb-6">Send an Inquiry</h2>
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full
                                        Name</label>
                                    <input id="name" placeholder="John Doe"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email
                                        Address</label>
                                    <input id="email" type="email" placeholder="john.doe@example.com"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone
                                    Number</label>
                                <input id="phone" type="tel" placeholder="+254 700 000 000"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                                <input id="subject" placeholder="e.g., Bulk Order Quote"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <textarea id="message" rows={5}
                                    placeholder="Please provide details about your inquiry..."
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                            </div>
                            <div className="flex justify-start">
                                <button type="submit"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-6">Our Location</h2>
                        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.659103986912!2d35.85805557496466!3d-0.4218909995574841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a5301824a7b57%3A0x95c372255531d275!2sSoit%20Sugar%20Company%20Limited!5e0!3m2!1sen!2ske!4v1720542301842!5m2!1sen!2ske"
                                width="100%" height="100%" style={{ border: "0" }} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Soit Sugar Company Location"></iframe>
                        </div>
                        <p className="text-muted-foreground mt-4">Soit Sugar Company Limited, Soit, Kenya</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
