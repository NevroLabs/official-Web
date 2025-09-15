'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeXml, Server, Smartphone, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/use-scroll-animation';

const services = [
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'We build responsive, high-performance web applications tailored to your business needs, from marketing sites to complex enterprise platforms.',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL'],
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Engage your users on the go with beautiful and intuitive native mobile applications for both iOS and Android platforms.',
    tech: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase'],
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: 'Software Development',
    description: 'Our custom software solutions are designed to optimize your operations, powered by robust architecture and scalable backends.',
    tech: ['Python', 'Go', 'Docker', 'Kubernetes', 'AWS/GCP'],
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
];

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="mb-20 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-4 flex justify-center"
          >
            <Badge 
              variant="outline" 
              className="border-primary/50 bg-primary/10 text-primary px-4 py-2"
            >
              Our Expertise
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Crafting Digital{' '}
            <span className="gradient-text">Excellence</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground lg:text-xl"
          >
            We transform complex challenges into elegant, future-proof solutions
            that drive innovation and growth for your business.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group"
            >
              <Card className="relative flex flex-col h-full overflow-hidden border-2 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Content */}
                <CardHeader className="relative items-center text-center pb-6">
                  <motion.div
                    className="mb-4 rounded-2xl bg-primary/10 p-4 ring-8 ring-primary/5 transition-all duration-500 group-hover:ring-primary/20 group-hover:scale-110"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <CardTitle className="font-display text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base leading-relaxed mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative flex flex-grow flex-col justify-end pt-0">
                  <div className="mb-6 flex flex-wrap justify-center gap-2">
                    {service.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-muted/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Learn More Arrow */}
                  <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm">Learn More</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
