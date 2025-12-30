import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from '@/components/ui/Container';
import Hero from '@/components/sections/home/Hero';
import FeaturedCalculatorSection from '@/components/sections/home/FeaturedCalculatorSection';
import Categories from '@/components/sections/home/Categories';
import Features from '@/components/sections/home/Features';
import CTA from '@/components/sections/home/CTA';
import Testimonials from '@/components/sections/home/Testimonials';
import ShareExperienceSection from '@/components/sections/home/ShareExperienceSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // COPY PROTECTION — RIGHT-CLICK ENABLED
  useEffect(() => {
    const blockEvent = (e: any) => e.preventDefault();

    // Disable copy, cut, paste
    document.addEventListener('copy', blockEvent);
    document.addEventListener('cut', blockEvent);
    document.addEventListener('paste', blockEvent);

    // Disable keyboard shortcuts
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'v', 'x', 'a', 's', 'p'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', disableKeys);

    return () => {
      document.removeEventListener('copy', blockEvent);
      document.removeEventListener('cut', blockEvent);
      document.removeEventListener('paste', blockEvent);
      document.removeEventListener('keydown', disableKeys);
    };
  }, []);
  // END PROTECTION

  return (
    <div className="py-8 md:py-12 select-none">
      <Container>
        <Hero />
        <FeaturedCalculatorSection />
        <Categories />
        <Features />
        <CTA />
        <Testimonials />
        <ShareExperienceSection />
      </Container>
    </div>
  );
}
