import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Logo } from './Logo';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <a href="/index" className="flex items-center gap-2" aria-label="Soit Sugar Home Page">
                        <i data-lucide="leaf" className="h-7 w-7 text-primary"></i>
                        <span className="text-xl font-bold text-foreground">Soit Sugar</span>
                    </a>
                    <p className="text-sm text-muted-foreground">
                        Sweetening lives, sustainably. We are a leading sugarcane processing factory in Kenya, committed
                        to quality and community.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/about"
                                className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="/products"
                                className="text-muted-foreground hover:text-primary transition-colors">Our Products</a></li>
                        <li><a href="/sustainability"
                                className="text-muted-foreground hover:text-primary transition-colors">Sustainability</a>
                        </li>
                        <li><a href="/farmers"
                                className="text-muted-foreground hover:text-primary transition-colors">Our Farmers</a></li>
                        <li><a href="/news"
                                className="text-muted-foreground hover:text-primary transition-colors">News</a></li>
                        <li><a href="/careers"
                                className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                        <li><a href="/contact"
                                className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Contact Us</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <i data-lucide="map-pin" className="h-4 w-4 mt-1 shrink-0 text-primary"></i>
                            <span className="text-muted-foreground">Soit Sugar Factory, Soit, Kenya</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i data-lucide="phone" className="h-4 w-4 mt-1 shrink-0 text-primary"></i>
                            <a href="tel:+254123456789"
                                className="text-muted-foreground hover:text-primary transition-colors">+254 123 456 789</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <i data-lucide="mail" className="h-4 w-4 mt-1 shrink-0 text-primary"></i>
                            <a href="mailto:info@soitsugar.co.ke"
                                className="text-muted-foreground hover:text-primary transition-colors">info@soitsugar.co.ke</a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Newsletter</h4>
                    <p className="text-sm text-muted-foreground">Stay updated with our latest news and offers.</p>
                    <form className="flex gap-2">
                        <input type="email" placeholder="Your email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Email for newsletter" />
                        <button type="submit"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="h-px w-full bg-border my-8"></div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                <p>&copy; 2024 Soit Sugar Company. All rights reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
