import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'

// Mock exchange rates (in a real app, you would fetch these from an API)
const mockExchangeRates = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.78,
  JPY: 149.5,
  CAD: 1.35,
  AUD: 1.51,
  INR: 85.53,
  CNY: 7.19,
  BRL: 5.05,
  ZAR: 18.33
}

type Currency = keyof typeof mockExchangeRates

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('')
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD')
  const [toCurrency, setToCurrency] = useState<Currency>('EUR')
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    // Set the last updated date
    const now = new Date()
    setLastUpdated(now.toLocaleString())
  }, [])

  const convertCurrency = () => {
    if (!amount) return
    
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount)) return
    
    // Convert to USD first (base currency)
    const amountInUSD = numAmount / mockExchangeRates[fromCurrency]
    
    // Then convert from USD to target currency
    const result = amountInUSD * mockExchangeRates[toCurrency]
    
    setConvertedAmount(parseFloat(result.toFixed(2)))
  }

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setConvertedAmount(null)
  }

  const handleReset = () => {
    setAmount('')
    setFromCurrency('USD')
    setToCurrency('EUR')
    setConvertedAmount(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Currency Converter</CardTitle>
        <CardDescription className="text-center">
          Convert between different currencies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium mb-1">
              Amount
            </label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fromCurrency" className="block text-sm font-medium mb-1">
                From
              </label>
              <select
                id="fromCurrency"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value as Currency)}
              >
                {Object.keys(mockExchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="toCurrency" className="block text-sm font-medium mb-1">
                To
              </label>
              <select
                id="toCurrency"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value as Currency)}
              >
                {Object.keys(mockExchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex justify-center my-2">
            <Button variant="ghost" size="icon" onClick={handleSwap} aria-label="Swap currencies">
              ⇄
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={convertCurrency} disabled={!amount}>
              Convert
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>
          
          {convertedAmount !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="text-lg font-medium mb-2 text-center">Conversion Result</h3>
              <div className="text-center">
                <p className="text-2xl font-bold">
                  {parseFloat(amount).toFixed(2)} {fromCurrency} = {convertedAmount} {toCurrency}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Exchange rate: 1 {fromCurrency} = {(mockExchangeRates[toCurrency] / mockExchangeRates[fromCurrency]).toFixed(4)} {toCurrency}
                </p>
              </div>
            </div>
          )}
          
          <div className="text-xs text-muted-foreground text-center mt-4">
            <p>Last updated: {lastUpdated}</p>
            <p className="mt-1">Note: These are demo exchange rates and not real-time values.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}