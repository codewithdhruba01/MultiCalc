import { useState, useEffect } from 'react';
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

  return (
    <div className="py-20 md:py-15" data-aos="fade-up">
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
