// General math functions
export function add(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b
}

export function multiply(a: number, b: number): number {
  return a * b
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Division by zero')
  return a / b
}

export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent)
}

export function squareRoot(value: number): number {
  if (value < 0) throw new Error('Cannot calculate square root of negative number')
  return Math.sqrt(value)
}

export function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) throw new Error('Factorial only defined for non-negative integers')
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

// Financial functions
export function calculateLoanPayment(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12
  const totalPayments = years * 12
  
  if (monthlyRate === 0) return principal / totalPayments
  
  const x = Math.pow(1 + monthlyRate, totalPayments)
  return (principal * x * monthlyRate) / (x - 1)
}

export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  compoundsPerYear: number
): number {
  const rate = annualRate / 100
  return principal * Math.pow(1 + rate / compoundsPerYear, compoundsPerYear * years)
}

// Health functions
export function calculateBMI(weight: number, height: number, isMetric: boolean): number {
  if (isMetric) {
    // weight in kg, height in cm
    const heightInMeters = height / 100
    return weight / (heightInMeters * heightInMeters)
  } else {
    // weight in lbs, height in inches
    return (weight * 703) / (height * height)
  }
}

export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal weight'
  if (bmi < 30) return 'Overweight'
  if (bmi < 35) return 'Obesity (Class 1)'
  if (bmi < 40) return 'Obesity (Class 2)'
  return 'Extreme Obesity (Class 3)'
}

// Date and time functions
export function calculateAge(birthDate: Date, currentDate: Date = new Date()): {
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
} {
  let years = currentDate.getFullYear() - birthDate.getFullYear()
  let months = currentDate.getMonth() - birthDate.getMonth()
  let days = currentDate.getDate() - birthDate.getDate()
  let hours = currentDate.getHours() - birthDate.getHours()
  let minutes = currentDate.getMinutes() - birthDate.getMinutes()
  let seconds = currentDate.getSeconds() - birthDate.getSeconds()
  
  // Adjust for negative seconds
  if (seconds < 0) {
    minutes--
    seconds += 60
  }
  
  // Adjust for negative minutes
  if (minutes < 0) {
    hours--
    minutes += 60
  }
  
  // Adjust for negative hours
  if (hours < 0) {
    days--
    hours += 24
  }
  
  // Adjust for negative days
  if (days < 0) {
    months--
    // Get the last day of the previous month
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate()
    days += lastDayOfMonth
  }
  
  // Adjust for negative months
  if (months < 0) {
    years--
    months += 12
  }
  
  // Calculate total values
  const diffTime = Math.abs(currentDate.getTime() - birthDate.getTime())
  const totalSeconds = Math.floor(diffTime / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)
  
  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds
  }
}