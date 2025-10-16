import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'

export default function BMRCalculator() {
  const [unit, setUnit] = useState<'metric' | 'us'>('metric')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [weight, setWeight] = useState('')
  const [heightCm, setHeightCm] = useState('')
  const [heightFt, setHeightFt] = useState('')
  const [heightIn, setHeightIn] = useState('')
  const [bmr, setBMR] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const now = new Date()
    setLastUpdated(now.toLocaleString())
  }, [])

  const handleUnitSwitch = (newUnit: 'metric' | 'us') => {
    setUnit(newUnit)
    setBMR(null)
    setWeight('')
    setHeightCm('')
    setHeightFt('')
    setHeightIn('')
  }

  const calculateBMR = () => {
    setLoading(true)
    setBMR(null)

    setTimeout(() => {
      const parsedAge = parseInt(age)
      const parsedWeight = parseFloat(weight)
      let heightInCm = 0

      if (unit === 'metric') {
        heightInCm = parseFloat(heightCm)
      } else {
        const ft = parseInt(heightFt) || 0
        const inch = parseInt(heightIn) || 0
        heightInCm = (ft * 30.48) + (inch * 2.54)
      }

      const weightInKg = unit === 'us' ? parsedWeight / 2.20462 : parsedWeight

      if (
        isNaN(parsedAge) || isNaN(weightInKg) || isNaN(heightInCm) ||
        parsedAge <= 0 || weightInKg <= 0 || heightInCm <= 0
      ) {
        setBMR(null)
        setLoading(false)
        return
      }

      const base =
        (10 * weightInKg) + (6.25 * heightInCm) - (5 * parsedAge)

      const finalBMR = gender === 'male' ? base + 5 : base - 161
      setBMR(parseFloat(finalBMR.toFixed(2)))
      setLoading(false)
    }, 1200) // delay for loading spinner
  }

  const handleReset = () => {
    setAge('')
    setWeight('')
    setHeightCm('')
    setHeightFt('')
    setHeightIn('')
    setGender('male')
    setBMR(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">BMR Calculator</CardTitle>
        <CardDescription className="text-center font-satoshi">
          Calculate your Basal Metabolic Rate (calories/day)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">

          {/* Unit toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={unit === 'metric' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${unit === 'metric' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => handleUnitSwitch('metric')}
              >
                Metric Units
              </Button>
              <Button
                variant={unit === 'us' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${unit === 'us' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => handleUnitSwitch('us')}
              >
                US Units
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <Input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Weight ({unit === 'us' ? 'lbs' : 'kg'})
            </label>
            <Input
              type="number"
              placeholder={`Enter weight in ${unit === 'us' ? 'lbs' : 'kg'}`}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          {unit === 'metric' ? (
            <div>
              <label className="block text-sm font-medium mb-1">Height (cm)</label>
              <Input
                type="number"
                placeholder="Enter height in cm"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Height (ft)</label>
                <Input
                  type="number"
                  placeholder="Feet"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Height (in)</label>
                <Input
                  type="number"
                  placeholder="Inches"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={calculateBMR} disabled={!age || !weight || loading}>
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Calculating...</span>
                </div>
              ) : (
                'Calculate'
              )}
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {/* Loading spinner animation */}
          {loading && (
            <div className="flex justify-center mt-6">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {!loading && bmr !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md text-center">
              <h3 className="text-xl font-bold mb-2 font-satoshi">Your BMR</h3>
              <p className="text-2xl font-bold">{bmr} kcal/day</p>
              <p className="text-xs text-muted-foreground mt-2 font-satoshi">
                This is the number of calories your body needs at rest.
              </p>
            </div>
          )}

          <div className="text-xs text-muted-foreground text-center mt-4">
            <p>Last updated: {lastUpdated}</p>
            <p className="mt-1 text-center font-satoshi">Based on Mifflin-St Jeor Equation</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
