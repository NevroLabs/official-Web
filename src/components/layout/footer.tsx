import { Bot, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Bot className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} EtherealTech Innovations. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
