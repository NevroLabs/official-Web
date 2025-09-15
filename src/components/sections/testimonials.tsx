
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote:
  "NevroLabs delivered beyond our wildest expectations. Their team's expertise in web development is second to none. The final product was not only beautiful but also incredibly performant.",
    name: 'Jane Doe',
    title: 'CEO, Innovate Inc.',
    logoId: 'client-logo-1',
  },
  {
    quote:
      "The mobile app they developed for us has a 5-star rating and has significantly boosted user engagement. Their process was transparent, collaborative, and highly efficient.",
    name: 'John Smith',
    title: 'CTO, MobileFirst',
    logoId: 'client-logo-2',
  },
  {
    quote:
  "Working with NevroLabs was a game-changer. They built a custom software solution that streamlined our entire workflow, saving us thousands of hours.",
    name: 'Emily White',
    title: 'COO, DataDriven Corp.',
    logoId: 'client-logo-3',
  },
  {
    quote:
      "Their attention to UI/UX detail is remarkable. Our new website is not just a tool, it's a piece of art that our customers love to interact with. A truly professional and talented team.",
    name: 'Michael Brown',
    title: 'Founder, Creative Solutions',
    logoId: 'client-logo-4',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear what our clients have to say about our partnership.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const logo = PlaceHolderImages.find((img) => img.id === testimonial.logoId);
              return(
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <blockquote className="text-lg italic text-foreground">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="mt-6">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                        {logo && (
                            <div className="relative mt-6 h-12 w-32">
                                <Image
                                src={logo.imageUrl}
                                alt={`${testimonial.title} logo`}
                                fill
                                className="object-contain"
                                data-ai-hint={logo.imageHint}
                                />
                            </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
