import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import UnitConverter from '@/components/calculators/UnitConverter'
import AgeCalculator from '@/components/calculators/AgeCalculator'
import { Button } from '@/components/ui/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MathCalculators() {
  useEffect(() => {
      window.scrollTo(0, 0);
      AOS.init({ duration: 800, once: true });
    }, []);
  const [activeCalculator, setActiveCalculator] = useState<'unit' | 'age'>('unit')

  return (
    <div className="py-20 md:py-15" data-aos="fade-up">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center font-synonym">Advance Calculators</h1>
          <p className="text-muted-foreground text-center font-satoshi mb-8">
            Advanced calculation tools and converters
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'unit' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${activeCalculator === 'unit' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActiveCalculator('unit')}
              >
                Unit Converter
              </Button>
              <Button
                variant={activeCalculator === 'age' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${activeCalculator === 'age' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActiveCalculator('age')}
              >
                Age Calculator
              </Button>
            </div>
          </div>
          
          <div className="transition-all duration-300">
            {activeCalculator === 'unit' && <UnitConverter />}
            {activeCalculator === 'age' && <AgeCalculator />}
          </div>
        </div>
      </Container>
    </div>
  )
}