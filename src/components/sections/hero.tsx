'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/hooks/use-scroll-animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div 
        className="container z-10 flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          className="mb-6 flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Cutting-edge Technology Solutions</span>
          <Zap className="h-4 w-4 text-yellow-500" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-5xl"
        >
          <span className="inline-block">
            <span className="gradient-text">Innovating</span>
          </span>{' '}
          <br className="hidden sm:block" />
          the Future of{' '}
          <span className="relative">
            <span className="relative z-10">Technology</span>
            <motion.span
              className="absolute -inset-2 -z-10 bg-primary/20 blur-xl"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl lg:max-w-3xl"
        >
          We build cutting-edge software solutions that power progress. From sleek web apps to robust mobile experiences, your vision is our command.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:mt-10"
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-primary text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
            asChild
          >
            <a href="#services" className="flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass border-2 hover:bg-muted/50 transition-all hover:scale-105"
            asChild
          >
             <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>

        {/* Stats or social proof */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-3 gap-6 text-center sm:mt-16 sm:gap-8 md:gap-12"
        >
          <div>
            <div className="text-xl font-bold text-primary sm:text-2xl">100+</div>
            <div className="text-xs text-muted-foreground sm:text-sm">Projects Delivered</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary sm:text-2xl">50+</div>
            <div className="text-xs text-muted-foreground sm:text-sm">Happy Clients</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary sm:text-2xl">24/7</div>
            <div className="text-xs text-muted-foreground sm:text-sm">Support</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-6 w-4 rounded-full border-2 border-muted-foreground/50">
          <motion.div
            className="mx-auto mt-1 h-1 w-1 rounded-full bg-muted-foreground/50"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
