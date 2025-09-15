
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-border/50 bg-background/80 shadow-lg backdrop-blur-xl'
          : 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="mr-8 flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Bot className="h-7 w-7 text-primary" />
              </motion.div>
              <span className="font-bold font-display text-xl">
                EtherealTech
              </span>
            </Link>
          </motion.div>
          
          <nav className="hidden gap-8 text-sm md:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="group relative font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              className="hidden md:inline-flex group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105" 
              asChild
            >
              <a href="#contact" className="relative z-10">
                Get a Quote
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </a>
            </Button>
          </motion.div>
          
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="icon" className="md:hidden border-2 hover:bg-muted/50 transition-all">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="glass w-[300px] border-l border-border/50"
            >
              <div className="flex flex-col gap-8 pt-8">
                <div className="flex items-center justify-between">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2"
                    onClick={() => setSheetOpen(false)}
                  >
                    <Bot className="h-6 w-6 text-primary" />
                    <span className="font-bold font-display text-lg">EtherealTech</span>
                  </Link>
                </div>
                
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setSheetOpen(false)}
                        className="group flex items-center text-lg font-medium text-foreground/80 transition-all hover:text-foreground hover:translate-x-2"
                      >
                        <span className="h-px w-6 bg-primary/50 transition-all group-hover:w-8 group-hover:bg-primary mr-3"></span>
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg" 
                    asChild
                    onClick={() => setSheetOpen(false)}
                  >
                    <a href="#contact">Get a Quote</a>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
