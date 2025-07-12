import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PercentageCalculator() {
  // Basic percentage calculation
  const [percentValue, setPercentValue] = useState<string>('')
  const [ofValue, setOfValue] = useState<string>('')
  const [percentResult, setPercentResult] = useState<number | null>(null)
  
  useEffect(() => {
      AOS.init({ duration: 800, once: true })
    }, [])

  // Percentage change calculation
  const [fromValue, setFromValue] = useState<string>('')
  const [toValue, setToValue] = useState<string>('')
  const [changeResult, setChangeResult] = useState<{
    percentageChange: number;
    absoluteChange: number;
  } | null>(null)
  
  // Percentage of a total calculation
  const [partValue, setPartValue] = useState<string>('')
  const [totalValue, setTotalValue] = useState<string>('')
  const [totalResult, setTotalResult] = useState<number | null>(null)

  const calculatePercentage = () => {
    if (!percentValue || !ofValue) return
    
    const percent = parseFloat(percentValue)
    const value = parseFloat(ofValue)
    
    if (isNaN(percent) || isNaN(value)) return
    
    const result = (percent / 100) * value
    setPercentResult(parseFloat(result.toFixed(2)))
  }

  const calculatePercentageChange = () => {
    if (!fromValue || !toValue) return
    
    const from = parseFloat(fromValue)
    const to = parseFloat(toValue)
    
    if (isNaN(from) || isNaN(to)) return
    
    const absoluteChange = to - from
    const percentageChange = (absoluteChange / Math.abs(from)) * 100
    
    setChangeResult({
      percentageChange: parseFloat(percentageChange.toFixed(2)),
      absoluteChange: parseFloat(absoluteChange.toFixed(2))
    })
  }

  const calculatePercentageOfTotal = () => {
    if (!partValue || !totalValue) return
    
    const part = parseFloat(partValue)
    const total = parseFloat(totalValue)
    
    if (isNaN(part) || isNaN(total) || total === 0) return
    
    const result = (part / total) * 100
    setTotalResult(parseFloat(result.toFixed(2)))
  }

  const resetBasic = () => {
    setPercentValue('')
    setOfValue('')
    setPercentResult(null)
  }

  const resetChange = () => {
    setFromValue('')
    setToValue('')
    setChangeResult(null)
  }

  const resetTotal = () => {
    setPartValue('')
    setTotalValue('')
    setTotalResult(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center">Percentage Calculator</CardTitle>
        <CardDescription className="text-center">
          Calculate percentages in different ways
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="change">% Change</TabsTrigger>
            <TabsTrigger value="total">% of Total</TabsTrigger>
          </TabsList>
          
          <TabsContent className="space-y-4">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="percentValue" className="block text-sm font-medium mb-1">
                    Percentage (%)
                  </label>
                  <Input
                    id="percentValue"
                    type="number"
                    placeholder="e.g. 15"
                    value={percentValue}
                    onChange={(e) => setPercentValue(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="ofValue" className="block text-sm font-medium mb-1">
                    of Value
                  </label>
                  <Input
                    id="ofValue"
                    type="number"
                    placeholder="e.g. 200"
                    value={ofValue}
                    onChange={(e) => setOfValue(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={calculatePercentage} disabled={!percentValue || !ofValue}>
                  Calculate
                </Button>
                <Button variant="outline" onClick={resetBasic}>
                  Reset
                </Button>
              </div>
              
              {percentResult !== null && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-medium mb-2">Result</h3>
                  <p className="text-center text-2xl font-bold">
                    {percentValue}% of {ofValue} = {percentResult}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent className="space-y-4">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="fromValue" className="block text-sm font-medium mb-1">
                    From Value
                  </label>
                  <Input
                    id="fromValue"
                    type="number"
                    placeholder="e.g. 100"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="toValue" className="block text-sm font-medium mb-1">
                    To Value
                  </label>
                  <Input
                    id="toValue"
                    type="number"
                    placeholder="e.g. 150"
                    value={toValue}
                    onChange={(e) => setToValue(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={calculatePercentageChange} disabled={!fromValue || !toValue}>
                  Calculate
                </Button>
                <Button variant="outline" onClick={resetChange}>
                  Reset
                </Button>
              </div>
              
              {changeResult !== null && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-medium mb-2">Result</h3>
                  <div className="space-y-2">
                    <p className="text-center text-2xl font-bold">
                      {changeResult.percentageChange}%
                    </p>
                    <p className="text-center">
                      Absolute change: {changeResult.absoluteChange}
                    </p>
                    <p className="text-center text-sm text-muted-foreground">
                      {fromValue} to {toValue} is a {changeResult.percentageChange > 0 ? 'increase' : 'decrease'} of {Math.abs(changeResult.percentageChange)}%
                    </p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent className="space-y-4">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="partValue" className="block text-sm font-medium mb-1">
                    Part Value
                  </label>
                  <Input
                    id="partValue"
                    type="number"
                    placeholder="e.g. 25"
                    value={partValue}
                    onChange={(e) => setPartValue(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="totalValue" className="block text-sm font-medium mb-1">
                    Total Value
                  </label>
                  <Input
                    id="totalValue"
                    type="number"
                    placeholder="e.g. 100"
                    value={totalValue}
                    onChange={(e) => setTotalValue(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={calculatePercentageOfTotal} disabled={!partValue || !totalValue}>
                  Calculate
                </Button>
                <Button variant="outline" onClick={resetTotal}>
                  Reset
                </Button>
              </div>
              
              {totalResult !== null && (
                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-medium mb-2">Result</h3>
                  <p className="text-center text-2xl font-bold">
                    {totalResult}%
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    {partValue} is {totalResult}% of {totalValue}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}