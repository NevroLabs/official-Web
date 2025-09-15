
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

const teamMembers = [
  { name: 'Savindu Madusanka', role: 'Lead Mobile Application & Full Stack Developer', expertise: 'Frontend, Backend, Mobile', imageId: 'team-member-1' },
  { name: 'Janitha Gamage', role: 'Project Manager', expertise: 'Frontend, Backend, Project Management', imageId: 'team-member-2' },
  { name: 'Kenji Tanaka', role: 'Head of Mobile', expertise: 'Mobile', imageId: 'team-member-4' },
  { name: 'Aria Vance', role: 'Senior UX/UI Designer', expertise: 'Design', imageId: 'team-member-5' },
  { name: 'Leo Maxwell', role: 'Cloud & DevOps Lead', expertise: 'Backend', imageId: 'team-member-6' },
  { name: 'Samira Khan', role: 'Project Manager', expertise: 'Design', imageId: 'team-member-3' },
].map(member => ({
  ...member,
  // Normalize expertise into an array of trimmed, title-cased tokens for easier filtering and rendering
  expertiseList: member.expertise
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
}));

const expertiseFilters = ['All', 'AI', 'Frontend', 'Backend', 'Mobile', 'Design', 'Project Management'];

export default function Team() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredMembers =
    activeFilter === 'All'
      ? teamMembers
      : teamMembers.filter((member) =>
          member.expertiseList.some(
            (e) => e.toLowerCase() === activeFilter.toLowerCase()
          )
        );

  return (
    <section id="team" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Meet the Innovators
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The brilliant minds turning your ambitious ideas into reality.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {expertiseFilters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'transition-all',
                activeFilter === filter && 'bg-primary text-primary-foreground hover:bg-primary/90'
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => {
            const image = PlaceHolderImages.find((img) => img.id === member.imageId);
            return (
              <Card key={member.name} className="group overflow-hidden text-center transition-all duration-300 hover:!border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <p className="mt-1 text-primary">{member.role}</p>
                   <div className="mt-4 flex flex-wrap justify-center gap-2">
                     {member.expertiseList.map((e) => (
                       <Badge key={e} variant="outline" className="border-accent text-accent">{e}</Badge>
                     ))}
                   </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
