import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import BasicCalculator from '@/components/calculators/BasicCalculator';
import ScientificCalculator from '@/components/calculators/ScientificCalculator';
import PercentageCalculator from '@/components/calculators/PercentageCalculator';
import { Button } from '@/components/ui/Button';

export default function BasicCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<
    'basic' | 'scientific' | 'percentage'
  >('basic');

  // Dynamic SEO data based on selected calculator
  const getPageSEO = () => {
    switch (activeCalculator) {
      case 'basic':
        return {
          title: 'Basic Calculator | MultiCalc',
          description:
            'Perform quick and accurate arithmetic operations using our free Basic Calculator. Perfect for everyday math calculations.',
          keywords:
            'basic calculator, simple calculator, math calculator, addition subtraction, online calculator',
          canonical: 'https://multicalc.site/basic-calculator',
        };
      case 'scientific':
        return {
          title: 'Scientific Calculator | MultiCalc',
          description:
            'Advanced Scientific Calculator for trigonometry, logarithms, exponents, and more. Ideal for students and professionals.',
          keywords:
            'scientific calculator, trigonometry calculator, logarithm calculator, sin cos tan calculator, advanced math tools',
          canonical: 'https://multicalc.site/scientific-calculator',
        };
      case 'percentage':
        return {
          title: 'Percentage Calculator | MultiCalc',
          description:
            'Quickly calculate percentages, percentage increases, and discounts with our easy-to-use Percentage Calculator.',
          keywords:
            'percentage calculator, percent increase, percent decrease, discount calculator, percentage finder',
          canonical: 'https://multicalc.site/percentage-calculator',
        };
      default:
        return {
          title: 'Math Calculators | MultiCalc',
          description:
            'All essential math calculators in one place — Basic, Scientific, and Percentage calculators for quick and accurate results.',
          keywords:
            'math calculator, online calculator, simple calculator, scientific, percentage calculator, multicalc',
          canonical: 'https://multicalc.site/math-calculators',
        };
    }
  };

  const seo = getPageSEO();

  return (
    <div className="py-20 md:py-15" data-aos="fade-up">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />

        {/* Social Share (Open Graph + Twitter) */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:site_name" content="MultiCalc" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://multicalc.site/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-5 text-center font-synonym">
            Math Calculators
          </h1>
          <p className="text-muted-foreground text-center font-satoshi mb-8">
            Standard calculators for everyday calculations and <br />{' '}
            mathematical operations
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'basic' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${
                  activeCalculator === 'basic'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('basic')}
              >
                Basic
              </Button>

              <Button
                variant={
                  activeCalculator === 'scientific' ? 'default' : 'outline'
                }
                className={`rounded-none border-l-0 border-r-0 px-4 py-2 ${
                  activeCalculator === 'scientific'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('scientific')}
              >
                Scientific
              </Button>

              <Button
                variant={
                  activeCalculator === 'percentage' ? 'default' : 'outline'
                }
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeCalculator === 'percentage'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('percentage')}
              >
                Percentage
              </Button>
            </div>
          </div>

          {/* Render Selected Calculator */}
          <div className="transition-all duration-300">
            {activeCalculator === 'basic' && <BasicCalculator />}
            {activeCalculator === 'scientific' && <ScientificCalculator />}
            {activeCalculator === 'percentage' && <PercentageCalculator />}
          </div>
        </div>
      </Container>
    </div>
  );
}
