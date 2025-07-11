import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card'
import { Input } from '../ui/Input'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PriceToWeightConverter() {
  const [pricePerKg, setPricePerKg] = useState<string>('')
  const [amountYouHave, setAmountYouHave] = useState<string>('')
  const [weightInGrams, setWeightInGrams] = useState<number | null>(null)

  // New fields
  const [quantityKg, setQuantityKg] = useState<string>('')
  const [totalPrice, setTotalPrice] = useState<string>('')

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
    const amount = parseFloat(amountYouHave)

    if (isNaN(price) || isNaN(amount) || price <= 0) return

    const weight = (amount / price) * 1000
    setWeightInGrams(parseFloat(weight.toFixed(2)))
  }

  const handleReset = () => {
    setPricePerKg('')
    setAmountYouHave('')
    setQuantityKg('')
    setTotalPrice('')
    setWeightInGrams(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center">Price to Weight Converter</CardTitle>
        <CardDescription className="text-center">
          This tool helps you find out how many grams of product you can get for a specific amount of money.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">

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

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={handleConvert} disabled={!pricePerKg || !amountYouHave}>
              Convert
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {weightInGrams !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md text-center">
              <h3 className="text-lg font-medium mb-2">Conversion Result</h3>
              <p className="text-2xl font-bold">
                {weightInGrams} grams
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
