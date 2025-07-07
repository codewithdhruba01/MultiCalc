import { useState } from 'react'
import { Button } from '../ui/Button'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'

export default function AgeCalculator() {
   useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0)
    
        // Initialize AOS
        AOS.init({
          duration: 800,
          once: true,
        })
      }, [])
  const [birthDate, setBirthDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
  } | null>(null)

  const calculateAge = () => {
    if (!birthDate) return
    
    const birth = new Date(birthDate)
    const end = toDate ? new Date(toDate) : new Date()
    
    if (birth > end) {
      alert('Birth date cannot be in the future!')
      return
    }
    
    let years = end.getFullYear() - birth.getFullYear()
    let months = end.getMonth() - birth.getMonth()
    let days = end.getDate() - birth.getDate()
    
    // Adjust for negative days
    if (days < 0) {
      months--
      // Get the last day of the previous month
      const lastDayOfMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate()
      days += lastDayOfMonth
    }
    
    // Adjust for negative months
    if (months < 0) {
      years--
      months += 12
    }
    
    // Calculate total days
    const diffTime = Math.abs(end.getTime() - birth.getTime())
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    setAge({
      years,
      months,
      days,
      totalDays
    })
  }

  const handleReset = () => {
    setBirthDate('')
    setToDate(new Date().toISOString().split('T')[0])
    setAge(null)
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center">Age Calculator</CardTitle>
        <CardDescription className="text-center">
          Calculate your exact age in years, months, and days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium mb-1">
              Date of Birth
            </label>
            <input
              id="birthDate"
              type="date"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div>
            <label htmlFor="toDate" className="block text-sm font-medium mb-1">
              Calculate Age At (optional)
            </label>
            <input
              id="toDate"
              type="date"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={calculateAge} disabled={!birthDate}>
              Calculate
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>
          
          {age !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="text-lg font-medium mb-2">Age Result</h3>
              <div className="space-y-2">
                <p className="text-center text-2xl font-bold">
                  {age.years} years, {age.months} months, {age.days} days
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-background p-2 rounded-md text-center">
                    <p className="text-sm text-muted-foreground">Total months</p>
                    <p className="font-bold">{age.years * 12 + age.months}</p>
                  </div>
                  <div className="bg-background p-2 rounded-md text-center">
                    <p className="text-sm text-muted-foreground">Total days</p>
                    <p className="font-bold">{age.totalDays}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  From {formatDate(birthDate)} to {formatDate(toDate)}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}