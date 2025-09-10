import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { ArrowLeftRight } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function CurrencyCalculator() {
    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.init({ duration: 800, once: true })
      }, [])
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("INR")
  const [amount, setAmount] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY

  const currencyList = [
    { code: "USD", name: "United States Dollar" },
    { code: "INR", name: "Indian Rupee" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "ZAR", name: "South African Rand" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "DKK", name: "Danish Krone" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "KRW", name: "South Korean Won" },
    { code: "TRY", name: "Turkish Lira" },
  ]

  // Convert function
  const convertCurrency = async () => {
    if (!amount) return
    setLoading(true)
    try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`)
      const data = await res.json()

      if (data && data.conversion_rates) {
        const rate = data.conversion_rates[toCurrency]
        const converted = parseFloat(amount) * rate
        setResult(converted.toFixed(2))
      } else {
        setResult("Error: Unable to fetch rates")
      }
    } catch (error) {
      setResult("Error fetching data")
    } finally {
      setLoading(false)
    }
  }

  const swapCurrency = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setResult("")
  }

  const resetForm = () => {
    setAmount("")
    setResult("")
    setFromCurrency("USD")
    setToCurrency("INR")
  }

  return (
    <div className="container mx-auto py-20 md:py-15" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-2 font-excon">Currency Calculator</h2>
      <p className="text-center text-muted-foreground mb-8 font-satoshi">
        Convert between different currencies in real-time
      </p>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center mb-1 font-synonym font-bold">Currency Converter</CardTitle>
          <CardDescription className="text-center font-satoshi">Live exchange rates powered by Exchangerate API</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* From Currency */}
          <div>
            <label className="block mb-1 font-medium">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-2 rounded-md bg-background border"
            >
              {currencyList.map((cur) => (
                <option key={cur.code} value={cur.code}>
                  {cur.code} - {cur.name}
                </option>
              ))}
            </select>
          </div>

          {/* To Currency */}
          <div>
            <label className="block mb-1 font-medium">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-2 rounded-md bg-background border"
            >
              {currencyList.map((cur) => (
                <option key={cur.code} value={cur.code}>
                  {cur.code} - {cur.name}
                </option>
              ))}
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Result */}
          <div>
            <label className="block mb-1 font-medium">Result</label>
            <Input type="text" value={result} readOnly placeholder="Converted value" />
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-2">
            <Button onClick={convertCurrency} className="flex-1" disabled={loading}>
              {loading ? "Converting..." : "Convert"}
            </Button>
            <Button variant="outline" onClick={swapCurrency} className="flex-1">
              <ArrowLeftRight className="mr-2 h-4 w-4" /> Swap
            </Button>
            <Button variant="secondary" onClick={resetForm} className="flex-1">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
