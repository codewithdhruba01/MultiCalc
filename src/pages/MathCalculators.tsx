import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import UnitConverter from '@/components/calculators/UnitConverter'
import AgeCalculator from '@/components/calculators/AgeCalculator'
import { Button } from '@/components/ui/Button'

export default function MathCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<'unit' | 'age'>('unit')

  return (
    <div className="py-20 md:py-15">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Math Calculators</h1>
          <p className="text-muted-foreground text-center mb-8">
            Advanced mathematical tools and converters
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