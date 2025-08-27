import { useState } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('')
  const [interestRate, setInterestRate] = useState<string>('')
  const [loanTerm, setLoanTerm] = useState<string>('')
  const [termUnit, setTermUnit] = useState<'years' | 'months'>('years')
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    amortizationSchedule: Array<{
      month: number;
      payment: number;
      principal: number;
      interest: number;
      balance: number;
    }>;
  } | null>(null)

  const calculateLoan = () => {
    if (!loanAmount || !interestRate || !loanTerm) return
    
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12 
    const numberOfPayments = termUnit === 'years' 
      ? parseInt(loanTerm) * 12 
      : parseInt(loanTerm)
    
    if (rate === 0) {
      const monthlyPayment = principal / numberOfPayments
      
      const amortizationSchedule = []
      let remainingBalance = principal
      
      for (let month = 1; month <= numberOfPayments; month++) {
        const principalPayment = monthlyPayment
        const interestPayment = 0
        remainingBalance -= principalPayment
        
        amortizationSchedule.push({
          month,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, remainingBalance)
        })
      }
      
      setResult({
        monthlyPayment,
        totalPayment: principal,
        totalInterest: 0,
        amortizationSchedule
      })
      
      return
    }
    
    const x = Math.pow(1 + rate, numberOfPayments)
    const monthlyPayment = (principal * x * rate) / (x - 1)
    
    const amortizationSchedule = []
    let remainingBalance = principal
    let totalInterest = 0
    
    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = remainingBalance * rate
      const principalPayment = monthlyPayment - interestPayment
      remainingBalance -= principalPayment
      totalInterest += interestPayment
      
      amortizationSchedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance)
      })
    }
    
    setResult({
      monthlyPayment,
      totalPayment: monthlyPayment * numberOfPayments,
      totalInterest,
      amortizationSchedule
    })
  }

  const handleReset = () => {
    setLoanAmount('')
    setInterestRate('')
    setLoanTerm('')
    setTermUnit('years')
    setResult(null)
  }

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">Loan Calculator</CardTitle>
        <CardDescription className="text-center font-satoshi">
          Calculate loan payments and generate amortization schedule
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calculator">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="schedule">Amortization</TabsTrigger>
          </TabsList>
          
          <TabsContent className="space-y-4">
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium mb-1">
                Loan Amount
              </label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="e.g. 10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="interestRate" className="block text-sm font-medium mb-1">
                Annual Interest Rate (%)
              </label>
              <Input
                id="interestRate"
                type="number"
                placeholder="e.g. 5.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="loanTerm" className="block text-sm font-medium mb-1">
                  Loan Term
                </label>
                <Input
                  id="loanTerm"
                  type="number"
                  placeholder="e.g. 5"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="termUnit" className="block text-sm font-medium mb-1">
                  Term Unit
                </label>
                <select
                  id="termUnit"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={termUnit}
                  onChange={(e) => setTermUnit(e.target.value as 'years' | 'months')}
                >
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={calculateLoan} 
                disabled={!loanAmount || !interestRate || !loanTerm}
              >
                Calculate
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </div>
            
            {result !== null && (
              <div className="mt-6 p-4 bg-muted rounded-md">
                <h3 className="text-lg font-medium mb-4">Loan Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monthly Payment:</span>
                    <span className="font-bold">{formatCurrency(result.monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Payment:</span>
                    <span className="font-bold">{formatCurrency(result.totalPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest:</span>
                    <span className="font-bold">{formatCurrency(result.totalInterest)}</span>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent>
            {result ? (
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 bg-background">
                    <tr className="border-b">
                      <th className="p-2 text-left">Month</th>
                      <th className="p-2 text-right">Payment</th>
                      <th className="p-2 text-right">Principal</th>
                      <th className="p-2 text-right">Interest</th>
                      <th className="p-2 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.amortizationSchedule.map((row) => (
                      <tr key={row.month} className="border-b border-border/40">
                        <td className="p-2">{row.month}</td>
                        <td className="p-2 text-right">{formatCurrency(row.payment)}</td>
                        <td className="p-2 text-right">{formatCurrency(row.principal)}</td>
                        <td className="p-2 text-right">{formatCurrency(row.interest)}</td>
                        <td className="p-2 text-right">{formatCurrency(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                Calculate a loan to see the amortization schedule
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}