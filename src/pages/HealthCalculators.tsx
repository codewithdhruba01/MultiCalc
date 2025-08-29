import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import BMICalculator from '@/components/calculators/BMICalculator'
import PregnancyCalculator from '@/components/calculators/PregnancyCalculator'
import PeriodCalculator from '@/components/calculators/PeriodCalculator'
import ProteinCalculator from '@/components/calculators/ProteinCalculator'

export default function HealthCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<'bmi' | 'pregnancy' | 'period' | 'protein'>('bmi')

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="py-20 md:py-15" data-aos="fade-up">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center font-synonym">Health Calculators</h1>
          <p className="text-muted-foreground text-center font-satoshi mb-8">
            Tools for calculating health metrics and statistics
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'bmi' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${
                  activeCalculator === 'bmi' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setActiveCalculator('bmi')}
              >
                BMI
              </Button>
              <Button
                variant={activeCalculator === 'pregnancy' ? 'default' : 'outline'}
                className={`rounded-none border-l-0 border-r-0 px-4 py-2 ${
                  activeCalculator === 'pregnancy' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setActiveCalculator('pregnancy')}
              >
                Pregnancy
              </Button>
              <Button
                variant={activeCalculator === 'period' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeCalculator === 'period' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setActiveCalculator('period')}
              >
                Period
              </Button>
              <Button
                variant={activeCalculator === 'protein' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeCalculator === 'protein' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setActiveCalculator('protein')}
              >
                Protein
              </Button>
            </div>
          </div>

          {/* Render Selected Calculator */}
          <div className="transition-all duration-300">
            {activeCalculator === 'bmi' && <BMICalculator />}
            {activeCalculator === 'pregnancy' && <PregnancyCalculator />}
            {activeCalculator === 'period' && <PeriodCalculator />}
            {activeCalculator === 'protein' && <ProteinCalculator />}
          </div>
        </div>
      </Container>
    </div>
  )
}