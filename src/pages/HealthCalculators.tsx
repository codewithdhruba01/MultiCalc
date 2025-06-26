import { Container } from '@/components/ui/Container'
import BMICalculator from '@/components/calculators/BMICalculator'

export default function HealthCalculators() {
  return (
    <div className="py-8 md:py-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Health Calculators</h1>
          <p className="text-muted-foreground text-center mb-8">
            Tools for calculating health metrics and statistics
          </p>
          
          <BMICalculator />
          
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-bold mb-4">About BMI Calculator</h2>
            <p className="mb-4">
              Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. It is a simple and widely used method for estimating a person's body fat.
            </p>
            <p className="mb-4">
              BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters (kg/m²). In the imperial system, the formula is weight in pounds divided by height in inches squared, multiplied by 703.
            </p>
            <h3 className="text-lg font-semibold mb-2">BMI Categories:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Underweight: BMI less than 18.5</li>
              <li>Normal weight: BMI 18.5 to 24.9</li>
              <li>Overweight: BMI 25 to 29.9</li>
              <li>Obesity (Class 1): BMI 30 to 34.9</li>
              <li>Obesity (Class 2): BMI 35 to 39.9</li>
              <li>Extreme Obesity (Class 3): BMI 40 or greater</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Note: BMI is a general guideline and may not accurately reflect body fat levels for athletes, elderly individuals, or pregnant women. Consult a healthcare professional for a comprehensive health assessment.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}