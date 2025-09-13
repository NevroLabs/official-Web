import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import TechVisualizer from '@/components/sections/tech-visualizer';
import Team from '@/components/sections/team';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <TechVisualizer />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
