export type Theme = 'light' | 'dark'

export interface CalculatorResult {
  value: number | string
  formatted: string
  error?: string
}

export interface CalculatorHistoryItem {
  input: string
  result: string
  timestamp: number
}

export interface BMIResult {
  bmi: number
  category: string
  color: string
}

export interface LoanResult {
  monthlyPayment: number
  totalPayment: number
  totalInterest: number
  amortizationSchedule: AmortizationItem[]
}

export interface AmortizationItem {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

export interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  totalMonths: number
  totalWeeks: number
  totalHours: number
  totalMinutes?: number
  totalSeconds?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export interface ConversionResult {
  fromValue: number
  fromUnit: string
  toValue: number
  toUnit: string
  formula: string
}

export type CalculatorType = 
  | 'basic'
  | 'scientific'
  | 'percentage'
  | 'bmi'
  | 'loan'
  | 'currency'
  | 'unit'
  | 'age'
  | 'detailed_age'