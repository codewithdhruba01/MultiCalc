import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import BasicCalculator from '@/components/calculators/BasicCalculator'
import ScientificCalculator from '@/components/calculators/ScientificCalculator'
import PercentageCalculator from '@/components/calculators/PercentageCalculator'
import { Button } from '@/components/ui/Button'

export default function BasicCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<'basic' | 'scientific' | 'percentage'>('basic')

  return (
    <div className="py-8 md:py-12" data-aos="fade-up">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Basic Calculators</h1>
          <p className="text-muted-foreground text-center mb-8">
            Standard calculators for everyday calculations and mathematical operations
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'basic' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${activeCalculator === 'basic' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActiveCalculator('basic')}
              >
                Basic
              </Button>
              <Button
                variant={activeCalculator === 'scientific' ? 'default' : 'outline'}
                className={`rounded-none border-l-0 border-r-0 px-4 py-2 ${activeCalculator === 'scientific' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActiveCalculator('scientific')}
              >
                Scientific
              </Button>
              <Button
                variant={activeCalculator === 'percentage' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${activeCalculator === 'percentage' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActiveCalculator('percentage')}
              >
                Percentage
              </Button>
            </div>
          </div>
          
          <div className="transition-all duration-300">
            {activeCalculator === 'basic' && <BasicCalculator />}
            {activeCalculator === 'scientific' && <ScientificCalculator />}
            {activeCalculator === 'percentage' && <PercentageCalculator />}
          </div>
        </div>
      </Container>
    </div>
  )
}