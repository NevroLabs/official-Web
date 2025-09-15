'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, TrendingUp, Users, Zap } from 'lucide-react';
import { useScrollAnimation, staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/hooks/use-scroll-animation';

const timelineData = [
  {
    year: '2018',
    title: 'The Spark',
    description: 'EtherealTech Innovations was founded by a group of passionate developers with a shared vision for a better digital future.',
    icon: <Zap className="h-5 w-5" />,
  },
  {
    year: '2020',
    title: 'First Major Project',
    description: 'Landed our first enterprise client, delivering a scalable e-commerce platform that handled millions of users.',
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    year: '2022',
    title: 'Expanding Horizons',
    description: 'Opened our mobile development division, launching several successful apps on the App Store and Google Play.',
    icon: <Users className="h-5 w-5" />,
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Began integrating generative AI into our workflow, offering clients smarter, more efficient development cycles.',
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    year: 'Future',
    title: 'The Next Frontier',
    description: 'Pioneering new solutions in decentralized applications and the spatial web, shaping the next wave of digital interaction.',
    icon: <Zap className="h-5 w-5" />,
  },
];

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
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
              Our Journey
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Crafting Stories of{' '}
            <span className="gradient-text">Innovation</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground lg:text-xl"
          >
            From humble beginnings to industry leadership, our journey reflects 
            our commitment to pushing the boundaries of digital innovation.
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <div className="md:flex md:items-center md:justify-center">
                  {/* Content Card - positioned on alternating sides */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 
                      ? 'md:mr-auto md:pr-8' 
                      : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 bg-background/80 backdrop-blur-sm border-2 hover:border-primary/30">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <div className="text-primary">
                              {item.icon}
                            </div>
                          </div>
                          <div>
                            <Badge 
                              variant="outline" 
                              className="text-primary font-bold border-primary/30 bg-primary/5"
                            >
                              {item.year}
                            </Badge>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot - always centered */}
                  <div className="absolute left-1/2 top-8 md:top-1/2 z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-full h-full bg-primary/30 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { label: 'Years of Experience', value: '6+' },
            { label: 'Projects Completed', value: '100+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Team Members', value: '25+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="group"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
