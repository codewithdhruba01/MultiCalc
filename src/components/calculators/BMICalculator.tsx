import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Unit = 'metric' | 'imperial'

export default function BMICalculator() {
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [unit, setUnit] = useState<Unit>('metric')
  const [bmi, setBmi] = useState<number | null>(null)
  const [status, setStatus] = useState<string>('')

  useEffect(() => {
    AOS.init({ duration: 700, once: true })
  }, [])

  const calculateBMI = () => {
    if (!height || !weight) return

    let bmiValue: number

    if (unit === 'metric') {
      const heightInMeters = parseFloat(height) / 100
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters)
    } else {
      bmiValue = 703 * parseFloat(weight) / (parseFloat(height) * parseFloat(height))
    }

    setBmi(parseFloat(bmiValue.toFixed(1)))
    setStatus(getBMIStatus(bmiValue))
  }

  const getBMIStatus = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight'
    if (bmi < 25) return 'Normal weight'
    if (bmi < 30) return 'Overweight'
    if (bmi < 35) return 'Obesity (Class 1)'
    if (bmi < 40) return 'Obesity (Class 2)'
    return 'Extreme Obesity (Class 3)'
  }

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Underweight':
        return 'text-blue-500'
      case 'Normal weight':
        return 'text-green-500'
      case 'Overweight':
        return 'text-yellow-500'
      case 'Obesity (Class 1)':
        return 'text-orange-500'
      case 'Obesity (Class 2)':
      case 'Extreme Obesity (Class 3)':
        return 'text-red-500'
      default:
        return ''
    }
  }

  const handleReset = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setStatus('')
  }

  const handleUnitChange = (value: Unit) => {
    setUnit(value)
    setHeight('')
    setWeight('')
    setBmi(null)
    setStatus('')
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="fade-up">
      <CardHeader>
        <CardTitle className="text-center">BMI Calculator</CardTitle>
        <CardDescription className="text-center">
          Calculate your Body Mass Index
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Unit Switch Buttons */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              variant={unit === 'metric' ? 'default' : 'outline'}
              className={`rounded-l-md rounded-r-none px-4 py-2 ${unit === 'metric' ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => handleUnitChange('metric')}
            >
              Metric
            </Button>
            <Button
              variant={unit === 'imperial' ? 'default' : 'outline'}
              className={`rounded-r-md rounded-l-none px-4 py-2 ${unit === 'imperial' ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => handleUnitChange('imperial')}
            >
              Imperial
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="height" className="block text-sm font-medium mb-1">
              Height {unit === 'metric' ? '(cm)' : '(inches)'}
            </label>
            <Input
              id="height"
              type="number"
              placeholder={unit === 'metric' ? 'Height in centimeters' : 'Height in inches'}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium mb-1">
              Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
            </label>
            <Input
              id="weight"
              type="number"
              placeholder={unit === 'metric' ? 'Weight in kilograms' : 'Weight in pounds'}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={calculateBMI} disabled={!height || !weight}>
              Calculate
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {bmi !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="text-lg font-medium mb-2">Your Result</h3>
              <div className="flex justify-between items-center">
                <span>BMI:</span>
                <span className="font-bold text-xl">{bmi}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Status:</span>
                <span className={`font-bold ${getStatusColor(status)}`}>{status}</span>
              </div>
            </div>
          )}

          <div className="mt-6 text-sm text-muted-foreground">
            <h4 className="font-medium mb-2">BMI Categories:</h4>
            <ul className="space-y-1">
              <li>Underweight: &lt; 18.5</li>
              <li>Normal weight: 18.5 - 24.9</li>
              <li>Overweight: 25 - 29.9</li>
              <li>Obesity (Class 1): 30 - 34.9</li>
              <li>Obesity (Class 2): 35 - 39.9</li>
              <li>Extreme Obesity (Class 3): ≥ 40</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
