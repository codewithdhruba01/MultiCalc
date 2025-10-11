import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // added for SEO
import { Container } from '@/components/ui/Container';
import LoanCalculator from '@/components/calculators/LoanCalculator';
import NPVCalculator from '@/components/calculators/NPVCalculator';
import PriceToWeightConverter from '@/components/calculators/PriceToWeightConverter';
import ROICalculator from '@/components/calculators/ROICalculator';
import { Button } from '@/components/ui/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FinancialCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<
    'loan' | 'npv' | 'priceToWeight' | 'roi'
  >('loan');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init({ duration: 700, once: true });
  }, []);

  // Dynamic SEO: change title/meta per selected calculator
  const getPageSEO = () => {
    switch (activeCalculator) {
      case 'loan':
        return {
          title: 'Loan Calculator | MultiCalc',
          description:
            'Easily calculate your EMI and total interest using our free online Loan Calculator. Perfect for home, car, and personal loans.',
          keywords:
            'loan calculator, emi calculator, home loan calculator, car loan, personal loan, interest calculator, finance tools',
          canonical: 'https://multicalc.site/loan-calculator',
        };
      case 'npv':
        return {
          title: 'NPV Calculator | MultiCalc',
          description:
            'Calculate Net Present Value (NPV) for investments and business decisions instantly with our easy-to-use NPV Calculator.',
          keywords:
            'npv calculator, net present value, investment calculator, finance calculator, discounted cash flow',
          canonical: 'https://multicalc.site/npv-calculator',
        };
      case 'priceToWeight':
        return {
          title: 'Price to Weight Converter | MultiCalc',
          description:
            'Compare prices by weight with our Price-to-Weight Converter. Ideal for grocery, retail, and product cost comparisons.',
          keywords:
            'price per kg calculator, price to weight, cost per gram calculator, unit price converter',
          canonical: 'https://multicalc.site/price-to-weight-calculator',
        };
      case 'roi':
        return {
          title: 'ROI Calculator | MultiCalc',
          description:
            'Find your Return on Investment (ROI) quickly with our free online ROI Calculator. Perfect for investors and business owners.',
          keywords:
            'roi calculator, return on investment, profit percentage calculator, business investment calculator',
          canonical: 'https://multicalc.site/roi-calculator',
        };
      default:
        return {
          title: 'Financial Calculators | MultiCalc',
          description:
            'All financial tools in one place — Loan, ROI, NPV, and Price-to-Weight Calculators for smarter financial decisions.',
          keywords:
            'financial calculators, online tools, finance, loan, roi, npv, calculator site',
          canonical: 'https://multicalc.site/financial-calculators',
        };
    }
  };

  const seo = getPageSEO();

  return (
    <div className="py-20 md:py-15" data-aos="fade-up">
      {/* SEO Tags */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />

        {/* Social share (Open Graph) */}
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
          <h1 className="text-4xl font-bold mb-4 text-center font-synonym">
            Financial Calculators
          </h1>
          <p className="text-muted-foreground text-center font-satoshi mb-8">
            Tools for financial planning, loans, and currency conversions
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'loan' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${
                  activeCalculator === 'loan'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('loan')}
              >
                Loan
              </Button>

              <Button
                variant={activeCalculator === 'npv' ? 'default' : 'outline'}
                className={`rounded-l-none rounded-r-none px-4 py-2 ${
                  activeCalculator === 'npv'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('npv')}
              >
                NPV
              </Button>

              <Button
                variant={
                  activeCalculator === 'priceToWeight' ? 'default' : 'outline'
                }
                className={`rounded-none border-l-0 border-r-0 px-4 py-2 ${
                  activeCalculator === 'priceToWeight'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('priceToWeight')}
              >
                Weight
              </Button>

              <Button
                variant={activeCalculator === 'roi' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeCalculator === 'roi'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('roi')}
              >
                ROI
              </Button>
            </div>
          </div>

          {/* Render Selected Calculator */}
          <div className="transition-all duration-300">
            {activeCalculator === 'loan' && <LoanCalculator />}
            {activeCalculator === 'npv' && <NPVCalculator />}
            {activeCalculator === 'priceToWeight' && <PriceToWeightConverter />}
            {activeCalculator === 'roi' && <ROICalculator />}
          </div>
        </div>
      </Container>
    </div>
  );
}
