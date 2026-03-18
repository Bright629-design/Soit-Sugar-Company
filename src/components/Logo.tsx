import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2', className)}
      aria-label="Soit Sugar Home Page"
    >
      <Leaf className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold text-foreground">Soit Sugar</span>
    </Link>
  );
}
