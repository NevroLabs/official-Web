import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-3.5rem)] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-grid-cyan-500/[0.05]"></div>
      <div className="container z-10 flex flex-col items-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-b from-primary from-40% to-white bg-clip-text text-transparent">
            Innovating
          </span> the Future of Technology
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          We build cutting-edge software solutions that power progress. From sleek web apps to robust mobile experiences, your vision is our command.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild>
            <a href="#services">
              Explore Our Services <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
             <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
