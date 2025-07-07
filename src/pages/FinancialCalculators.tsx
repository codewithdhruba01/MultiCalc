import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import LoanCalculator from '@/components/calculators/LoanCalculator'
import CurrencyConverter from '@/components/calculators/CurrencyConverter'
import { Button } from '@/components/ui/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function FinancialCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<'loan' | 'currency'>('loan')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    AOS.init({ duration: 700, once: true })
  }, [])

  return (
    <div className="py-8 md:py-12" data-aos="fade-up">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Financial Calculators</h1>
          <p className="text-muted-foreground text-center mb-8">
            Tools for financial planning, loans, and currency conversions
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'loan' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${activeCalculator === 'loan' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActiveCalculator('loan')}
              >
                Loan Calculator
              </Button>
              <Button
                variant={activeCalculator === 'currency' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${activeCalculator === 'currency' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActiveCalculator('currency')}
              >
                Currency Converter
              </Button>
            </div>
          </div>
          
          <div className="transition-all duration-300">
            {activeCalculator === 'loan' && <LoanCalculator />}
            {activeCalculator === 'currency' && <CurrencyConverter />}
          </div>
        </div>
      </Container>
    </div>
  )
}
