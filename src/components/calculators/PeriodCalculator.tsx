import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'

export default function PeriodCalculator() {
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const [lastPeriod, setLastPeriod] = useState<string>('')
  const [periodLength, setPeriodLength] = useState<string>('5')
  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<{
    nextStart: string
    nextEnd: string
    ovulation: string
    fertileStart: string
    fertileEnd: string
    nextPeriods: { start: string; end: string }[]
  } | null>(null)

  const calculatePeriod = () => {
    if (!lastPeriod) return
    setLoading(true)
    setResult(null)

    setTimeout(() => {
      const cycleLength = 28
      const lastDate = new Date(lastPeriod)
      const periodLen = parseInt(periodLength, 10)

      const nextStart = new Date(lastDate)
      nextStart.setDate(nextStart.getDate() + cycleLength)

      const nextEnd = new Date(nextStart)
      nextEnd.setDate(nextEnd.getDate() + periodLen - 1)

      const ovulation = new Date(lastDate)
      ovulation.setDate(ovulation.getDate() + 14)

      const fertileStart = new Date(ovulation)
      fertileStart.setDate(fertileStart.getDate() - 4)

      const fertileEnd = new Date(ovulation)
      fertileEnd.setDate(fertileEnd.getDate() + 1)

      const nextPeriods = Array.from({ length: 3 }, (_, i) => {
        const start = new Date(nextStart)
        start.setDate(start.getDate() + cycleLength * i)
        const end = new Date(start)
        end.setDate(end.getDate() + periodLen - 1)
        return {
          start: start.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
        }
      })

      setResult({
        nextStart: nextStart.toISOString().split('T')[0],
        nextEnd: nextEnd.toISOString().split('T')[0],
        ovulation: ovulation.toISOString().split('T')[0],
        fertileStart: fertileStart.toISOString().split('T')[0],
        fertileEnd: fertileEnd.toISOString().split('T')[0],
        nextPeriods,
      })
      setLoading(false)
    }, 1200)
  }

  const handleReset = () => {
    setLastPeriod('')
    setPeriodLength('5')
    setResult(null)
    setLoading(false)
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          Period Calculator
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Estimate your next period and ovulation date
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="lastPeriod" className="block text-sm font-medium mb-1">
              Last Period Start Date
            </label>
            <input
              id="lastPeriod"
              type="date"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="periodLength" className="block text-sm font-medium mb-1">
              Period Length (days)
            </label>
            <input
              id="periodLength"
              type="number"
              min="1"
              max="10"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={periodLength}
              onChange={(e) => setPeriodLength(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={calculatePeriod} disabled={!lastPeriod || loading}>
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
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

          {loading && (
            <div className="flex justify-center mt-4">
              <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {result && !loading && (
            <div className="mt-6 p-4 bg-muted rounded-md space-y-3">
              <h3 className="text-lg font-bold font-synonym">Your Cycle Details</h3>
              <p className="font-satoshi">
                <strong>Next Period:</strong> {formatDate(result.nextStart)} to{' '}
                {formatDate(result.nextEnd)}
              </p>
              <p className="font-satoshi">
                <strong>Ovulation Date:</strong> {formatDate(result.ovulation)}
              </p>
              <p className="font-satoshi">
                <strong>Fertile Window:</strong> {formatDate(result.fertileStart)} to{' '}
                {formatDate(result.fertileEnd)}
              </p>
              <div>
                <h4 className="mt-3 font-synonym font-bold mb-2">Upcoming Periods:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {result.nextPeriods.map((p, i) => (
                    <li key={i}>
                      {formatDate(p.start)} to {formatDate(p.end)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
