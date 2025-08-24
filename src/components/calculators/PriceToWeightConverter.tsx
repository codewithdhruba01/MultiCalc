import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PriceToWeightConverter() {
  const [pricePerKg, setPricePerKg] = useState<string>('')
  const [quantityKg, setQuantityKg] = useState<string>('')
  const [totalPrice, setTotalPrice] = useState<string>('')

  // Mode: Spend Amount or Weight
  const [mode, setMode] = useState<'spend' | 'weight'>('spend')

  // Inputs
  const [amountYouHave, setAmountYouHave] = useState<string>('')
  const [weightInput, setWeightInput] = useState<string>('')  
  const [weightUnit, setWeightUnit] = useState<'kg' | 'g'>('kg')  // 👈 New: weight unit

  // Result
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  // Auto-calculate price per kg
  useEffect(() => {
    const qty = parseFloat(quantityKg)
    const price = parseFloat(totalPrice)

    if (!isNaN(qty) && !isNaN(price) && qty > 0) {
      const calculatedPricePerKg = price / qty
      setPricePerKg(calculatedPricePerKg.toFixed(2))
    }
  }, [quantityKg, totalPrice])

  const handleConvert = () => {
    const price = parseFloat(pricePerKg)

    if (isNaN(price) || price <= 0) return

    if (mode === 'spend') {
      const amount = parseFloat(amountYouHave)
      if (isNaN(amount)) return
      const weightGrams = (amount / price) * 1000
      setResult(`${weightGrams.toFixed(2)} grams (${(weightGrams / 1000).toFixed(2)} kg)`)
    } else {
      let weight = parseFloat(weightInput)
      if (isNaN(weight)) return

      // Convert grams → kg
      if (weightUnit === 'g') {
        weight = weight / 1000
      }

      const totalCost = weight * price
      setResult(`₹ ${totalCost.toFixed(2)}`)
    }
  }

  const handleReset = () => {
    setPricePerKg('')
    setQuantityKg('')
    setTotalPrice('')
    setAmountYouHave('')
    setWeightInput('')
    setResult(null)
    setMode('spend')
    setWeightUnit('kg')
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center">Price to Weight Converter</CardTitle>
        <CardDescription className="text-center">
          This tool helps you find out either how much product (in weight) you can buy for a given spend amount, or how much money is needed for a given weight.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">

          {/* Quantity & Total Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="quantityKg" className="block text-sm font-medium mb-1">
                Quantity (kg)
              </label>
              <Input
                id="quantityKg"
                type="number"
                placeholder="Enter quantity in kg"
                value={quantityKg}
                onChange={(e) => setQuantityKg(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="totalPrice" className="block text-sm font-medium mb-1">
                Total Price
              </label>
              <Input
                id="totalPrice"
                type="number"
                placeholder="Enter total price"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Price per Kg */}
          <div>
            <label htmlFor="pricePerKg" className="block text-sm font-medium mb-1">
              Price per Kg
            </label>
            <Input
              id="pricePerKg"
              type="number"
              placeholder="Enter Price 1 Kg"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(e.target.value)}
            />
          </div>

          {/* Mode Selector */}
          <div>
            <label htmlFor="mode" className="block text-sm font-medium mb-1">
              Select Mode
            </label>
            <select
              id="mode"
              className="w-full rounded-md border px-3 py-2 bg-background"
              value={mode}
              onChange={(e) => setMode(e.target.value as 'spend' | 'weight')}
            >
              <option value="spend">Spend Amount</option>
              <option value="weight">Weight</option>
            </select>
          </div>

          {/* Conditional Input */}
          {mode === 'spend' ? (
            <div>
              <label htmlFor="amountYouHave" className="block text-sm font-medium mb-1">
                Enter Spend Amount
              </label>
              <Input
                id="amountYouHave"
                type="number"
                placeholder="How much money do you have to spend"
                value={amountYouHave}
                onChange={(e) => setAmountYouHave(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="weightInput" className="block text-sm font-medium mb-1">
                Enter Weight
              </label>
              <div className="flex gap-2">
                <Input
                  id="weightInput"
                  type="number"
                  placeholder="Enter weight"
                  value={weightInput}
                  onChange={(e) => setWeightInput(e.target.value)}
                />
                <select
                  className="rounded-md border px-2 py-1 bg-background"
                  value={weightUnit}
                  onChange={(e) => setWeightUnit(e.target.value as 'kg' | 'g')}
                >
                  <option value="kg">Kg</option>
                  <option value="g">Grams</option>
                </select>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={handleConvert} disabled={!pricePerKg || (mode === 'spend' ? !amountYouHave : !weightInput)}>
              Convert
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {/* Result */}
          {result !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md text-center">
              <h3 className="text-lg font-medium mb-2">Conversion Result</h3>
              <p className="text-2xl font-bold">{result}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}