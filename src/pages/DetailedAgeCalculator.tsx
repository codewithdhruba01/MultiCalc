import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Clock, CalendarHeart, HeartPulse, Bed, HeartHandshake, Cake, Calendar, Hourglass } from 'lucide-react'

export default function DetailedAgeCalculator() {
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({ duration: 800, once: true })
  }, [])

  const [birthDate, setBirthDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [liveUpdate, setLiveUpdate] = useState<boolean>(false)
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
  } | null>(null)

  const calculateAge = (updateLive = false) => {
    if (!birthDate) return
    const birth = new Date(birthDate)
    const end = updateLive ? new Date() : toDate ? new Date(toDate) : new Date()

    if (birth > end) {
      alert('Birth date cannot be in the future!')
      return
    }

    let years = end.getFullYear() - birth.getFullYear()
    let months = end.getMonth() - birth.getMonth()
    let days = end.getDate() - birth.getDate()
    let hours = end.getHours() - birth.getHours()
    let minutes = end.getMinutes() - birth.getMinutes()
    let seconds = end.getSeconds() - birth.getSeconds()

    if (seconds < 0) { minutes--; seconds += 60 }
    if (minutes < 0) { hours--; minutes += 60 }
    if (hours < 0) { days--; hours += 24 }
    if (days < 0) {
      months--
      const lastDayOfMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate()
      days += lastDayOfMonth
    }
    if (months < 0) { years--; months += 12 }

    const diffTime = Math.abs(end.getTime() - birth.getTime())
    const totalSeconds = Math.floor(diffTime / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)

    setAge({
      years, months, days, hours, minutes, seconds,
      totalDays, totalHours, totalMinutes, totalSeconds
    })
  }

  const toggleLiveUpdate = () => setLiveUpdate(prev => !prev)

  const handleReset = () => {
    setBirthDate('')
    setToDate(new Date().toISOString().split('T')[0])
    setAge(null)
    setLiveUpdate(false)
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getDaysUntilNextBirthday = (): number | null => {
    if (!birthDate) return null
    const today = new Date()
    const dob = new Date(birthDate)

    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
    if (
      today.getMonth() > dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate())
    ) {
      nextBirthday.setFullYear(today.getFullYear() + 1)
    }

    const diffTime = nextBirthday.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const getNextBirthdayWeekday = (): string | null => {
    if (!birthDate) return null
    const today = new Date()
    const dob = new Date(birthDate)

    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
    if (
      today.getMonth() > dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate())
    ) {
      nextBirthday.setFullYear(today.getFullYear() + 1)
    }

    return nextBirthday.toLocaleDateString('en-US', { weekday: 'long' })
  }

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null
    if (liveUpdate && birthDate) {
      calculateAge(true)
      intervalId = setInterval(() => calculateAge(true), 1000)
    } else if (intervalId) {
      clearInterval(intervalId)
    }
    return () => { if (intervalId) clearInterval(intervalId) }
  }, [liveUpdate, birthDate])

  return (
    <div className="py-20 md:py-15" data-aos="zoom-in">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center font-synonym">Detailed Age Calculator</h1>
          <p className="text-muted-foreground text-center mb-8 font-satoshi">
            Calculate your exact age in years, months, days, hours, minutes, and seconds
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center font-synonym font-bold mb-3">Enter Your Birth Details</CardTitle>
              <CardDescription className="text-center font-satoshi">
                Enter your date of birth to calculate your precise age
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
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className={liveUpdate ? 'opacity-50 pointer-events-none' : ''}>
                  <label htmlFor="toDate" className="block text-sm font-medium mb-1">
                    Calculate Age At (optional)
                  </label>
                  <input
                    id="toDate"
                    type="date"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    disabled={liveUpdate}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="liveUpdate"
                    checked={liveUpdate}
                    onChange={toggleLiveUpdate}
                    className="h-4 w-4 rounded border-gray-300 text-primary"
                  />
                  <label htmlFor="liveUpdate" className="text-sm font-medium font-satoshi">
                    Live update (real-time age calculation)
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button onClick={() => calculateAge(false)} disabled={!birthDate || liveUpdate}>
                    Calculate
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {age && (
            <div className="space-y-6">
              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="text-center font-bold flex items-center justify-center font-synonym">
                    <Calendar className="mr-2 h-6 w-6 text-[#057988]" />
                    Primary Age Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold mb-4">
                      {age.years} years, {age.months} months, {age.days} days
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Years</p>
                        <p className="text-2xl font-bold">{age.years}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Months</p>
                        <p className="text-2xl font-bold">{age.months}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Days</p>
                        <p className="text-2xl font-bold">{age.days}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      From {formatDate(birthDate)} {liveUpdate ? 'to now' : `to ${formatDate(toDate)}`}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center flex items-center justify-center font-outfit font-bold">
                    <Clock className="mr-2 h-6 w-6 text-[#c06905]" />
                    Time Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="text-xl font-bold">{age.hours}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Minutes</p>
                      <p className="text-xl font-bold">{age.minutes}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Seconds</p>
                      <p className="text-xl font-bold">{age.seconds}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center flex items-center justify-center font-outfit font-bold">
                    <Hourglass className="mr-2 h-6 w-6 text-[#01a517]" />
                    Total Time Lived
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Total Days</p>
                      <p className="text-xl font-bold">{age.totalDays.toLocaleString()}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Total Hours</p>
                      <p className="text-xl font-bold">{age.totalHours.toLocaleString()}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Total Minutes</p>
                      <p className="text-xl font-bold">{age.totalMinutes.toLocaleString()}</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Total Seconds</p>
                      <p className="text-xl font-bold">{age.totalSeconds.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-muted rounded-lg">
                    <h3 className="text-xl font-bold font-sans mb-2">Fun Facts</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Cake className="text-gray-500 w-5 h-5 flex-shrink-0" />
                        <span>Your next birthday is in <strong>{getDaysUntilNextBirthday()} days</strong> on a <strong>{getNextBirthdayWeekday()}</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CalendarHeart className="text-green-500 w-5 h-5 flex-shrink-0" />
                        <span>You have lived through approximately {Math.floor(age.totalDays / 7).toLocaleString()} weeks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HeartHandshake className="text-pink-500 w-5 h-5 flex-shrink-0" />
                        <span>Your heart has beaten approximately {Math.floor(age.totalMinutes * 80).toLocaleString()} times (assuming average 80 beats per minute).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HeartPulse className="text-red-600 w-5 h-5 flex-shrink-0" />
                        <span>You have taken approximately {Math.floor(age.totalMinutes * 16).toLocaleString()} breaths (assuming average 16 breaths per minute).</span>
                      </li>
                      {age.years >= 8 && (
                        <li className="flex items-start gap-2">
                          <Bed className="text-blue-500 w-5 h-5 flex-shrink-0" />
                          <span>You have slept for approximately {Math.floor(age.totalHours / 3).toLocaleString()} hours (assuming 8 hours of sleep per day).</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}