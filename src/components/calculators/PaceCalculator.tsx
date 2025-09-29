import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'

export default function PaceCalculator() {
  const [mode, setMode] = useState<'pace' | 'time' | 'distance'>('pace')
  const [time, setTime] = useState('') // in minutes
  const [distance, setDistance] = useState('') // in km
  const [pace, setPace] = useState('') // min per km
  const [result, setResult] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const now = new Date()
    setLastUpdated(now.toLocaleString())
  }, [])

  const handleModeSwitch = (newMode: 'pace' | 'time' | 'distance') => {
    setMode(newMode)
    setResult(null)
    setTime('')
    setDistance('')
    setPace('')
  }

  const calculate = () => {
    const t = parseFloat(time)
    const d = parseFloat(distance)
    const p = parseFloat(pace)

    if (mode === 'pace') {
      if (!t || !d || d <= 0) return setResult(null)
      const paceValue = t / d
      setResult(`${paceValue.toFixed(2)} min/km`)
    } else if (mode === 'time') {
      if (!p || !d || d <= 0) return setResult(null)
      const timeValue = p * d
      setResult(`${timeValue.toFixed(2)} minutes`)
    } else if (mode === 'distance') {
      if (!p || !t || p <= 0) return setResult(null)
      const distanceValue = t / p
      setResult(`${distanceValue.toFixed(2)} km`)
    }
  }

  const handleReset = () => {
    setTime('')
    setDistance('')
    setPace('')
    setResult(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">Pace Calculator</CardTitle>
        <CardDescription className="text-center font-satoshi">
          Estimate your pace, time, or distance for various activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">

          {/* Mode toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={mode === 'pace' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${mode === 'pace' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => handleModeSwitch('pace')}
              >
                Pace
              </Button>
              <Button
                variant={mode === 'time' ? 'default' : 'outline'}
                className={`rounded-l-none px-4 py-2 ${mode === 'time' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => handleModeSwitch('time')}
              >
                Time
              </Button>
              <Button
                variant={mode === 'distance' ? 'default' : 'outline'}
                className={`rounded-l-none px-4 py-2 ${mode === 'distance' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => handleModeSwitch('distance')}
              >
                Distance
              </Button>
            </div>
          </div>

          {/* Dynamic inputs */}
          {mode === 'pace' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Time (minutes)</label>
                <Input
                  type="number"
                  placeholder="Enter time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Distance (km)</label>
                <Input
                  type="number"
                  placeholder="Enter distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
              </div>
            </>
          )}

          {mode === 'time' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Pace (min/km)</label>
                <Input
                  type="number"
                  placeholder="Enter pace"
                  value={pace}
                  onChange={(e) => setPace(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Distance (km)</label>
                <Input
                  type="number"
                  placeholder="Enter distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
              </div>
            </>
          )}

          {mode === 'distance' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Pace (min/km)</label>
                <Input
                  type="number"
                  placeholder="Enter pace"
                  value={pace}
                  onChange={(e) => setPace(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time (minutes)</label>
                <Input
                  type="number"
                  placeholder="Enter time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={calculate}>
              Calculate
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {/* Result */}
          {result && (
            <div className="mt-6 p-4 bg-muted rounded-md text-center">
              <h3 className="text-xl font-bold mb-2 font-satoshi">Result</h3>
              <p className="text-2xl font-bold">{result}</p>
            </div>
          )}

          <div className="text-xs text-muted-foreground text-center mt-4">
            <p>Last updated: {lastUpdated}</p>
            <p className="mt-1 text-center font-satoshi">Based on standard pace calculations</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}