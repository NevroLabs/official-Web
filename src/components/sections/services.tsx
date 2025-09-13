import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeXml, Server, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'We build responsive, high-performance web applications tailored to your business needs, from marketing sites to complex enterprise platforms.',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL'],
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Engage your users on the go with beautiful and intuitive native mobile applications for both iOS and Android platforms.',
    tech: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase'],
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: 'Software Development',
    description: 'Our custom software solutions are designed to optimize your operations, powered by robust architecture and scalable backends.',
    tech: ['Python', 'Go', 'Docker', 'Kubernetes', 'AWS/GCP'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We transform complex challenges into elegant, future-proof solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="font-headline text-2xl pt-4">{service.title}</CardTitle>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-end">
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {service.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
