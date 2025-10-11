import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import UnitConverter from '@/components/calculators/UnitConverter';
import PaceCalculator from '@/components/calculators/PaceCalculator';
import { Button } from '@/components/ui/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AdvanceCalculators() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeCalculator, setActiveCalculator] = useState<'unit' | 'pace'>(
    'unit'
  );

  // Dynamic SEO based on active tab
  const getPageSEO = () => {
    switch (activeCalculator) {
      case 'unit':
        return {
          title: 'Unit Converter | MultiCalc',
          description:
            'Convert between different units of measurement instantly with our free Unit Converter. Supports length, weight, temperature, and more.',
          keywords:
            'unit converter, measurement converter, length converter, weight converter, temperature converter, online unit calculator',
          canonical: 'https://multicalc.site/unit-converter',
        };
      case 'pace':
        return {
          title: 'Pace Calculator | MultiCalc',
          description:
            'Calculate your running pace, speed, and estimated finish times with our advanced Pace Calculator — ideal for athletes and fitness lovers.',
          keywords:
            'pace calculator, running pace, speed calculator, marathon pace, jogging time calculator, fitness calculator',
          canonical: 'https://multicalc.site/pace-calculator',
        };
      default:
        return {
          title: 'Advanced Calculators | MultiCalc',
          description:
            'Explore advanced tools like Unit Converter and Pace Calculator to make complex conversions and fitness calculations easier.',
          keywords:
            'advanced calculators, unit converter, pace calculator, online calculator, multicalc tools',
          canonical: 'https://multicalc.site/advanced-calculators',
        };
    }
  };

  const seo = getPageSEO();

  return (
    <div className="py-20 md:py-15" data-aos="fade-up">
      {/* Dynamic SEO Meta Tags */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />

        {/* Social (Open Graph + Twitter) */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:site_name" content="MultiCalc" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://multicalc.site/preview.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center font-synonym">
            Advance Calculators
          </h1>
          <p className="text-muted-foreground text-center font-satoshi mb-8">
            Advanced calculation tools and converters
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'unit' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${
                  activeCalculator === 'unit'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('unit')}
              >
                Unit Converter
              </Button>
              <Button
                variant={activeCalculator === 'pace' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeCalculator === 'pace'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('pace')}
              >
                Pace Calculator
              </Button>
            </div>
          </div>

          {/* Render Selected Calculator */}
          <div className="transition-all duration-300">
            {activeCalculator === 'unit' && <UnitConverter />}
            {activeCalculator === 'pace' && <PaceCalculator />}
          </div>
        </div>
      </Container>
    </div>
  );
}
