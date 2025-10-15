import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../ui/Card';
import { Input } from '../ui/Input';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PriceToWeightConverter() {
  const [pricePerKg, setPricePerKg] = useState<string>('');
  const [quantityKg, setQuantityKg] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<string>('');
  const [mode, setMode] = useState<'spend' | 'weight'>('spend');
  const [amountYouHave, setAmountYouHave] = useState<string>('');
  const [weightInput, setWeightInput] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'g'>('kg');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const qty = parseFloat(quantityKg);
    const price = parseFloat(totalPrice);

    if (!isNaN(qty) && !isNaN(price) && qty > 0) {
      const calculatedPricePerKg = price / qty;
      setPricePerKg(calculatedPricePerKg.toFixed(2));
    }
  }, [quantityKg, totalPrice]);

  const handleConvert = () => {
    const price = parseFloat(pricePerKg);
    if (isNaN(price) || price <= 0) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      let conversionResult = '';

      if (mode === 'spend') {
        const amount = parseFloat(amountYouHave);
        if (isNaN(amount)) {
          setLoading(false);
          return;
        }
        const weightGrams = (amount / price) * 1000;
        conversionResult = `${weightGrams.toFixed(2)} grams (${(weightGrams / 1000).toFixed(2)} kg)`;
      } else {
        let weight = parseFloat(weightInput);
        if (isNaN(weight)) {
          setLoading(false);
          return;
        }
        if (weightUnit === 'g') {
          weight = weight / 1000;
        }
        const totalCost = weight * price;
        conversionResult = `₹ ${totalCost.toFixed(2)}`;
      }

      setResult(conversionResult);
      setLoading(false);
    }, 1200);
  };

  const handleReset = () => {
    setPricePerKg('');
    setQuantityKg('');
    setTotalPrice('');
    setAmountYouHave('');
    setWeightInput('');
    setResult(null);
    setMode('spend');
    setWeightUnit('kg');
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          Price to Weight Converter
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Find how much weight you can buy for your budget or how much money is needed for a given weight.
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
            <Button
              onClick={handleConvert}
              disabled={
                loading ||
                !pricePerKg ||
                (mode === 'spend' ? !amountYouHave : !weightInput)
              }
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                  Converting...
                </div>
              ) : (
                'Convert'
              )}
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {/* Result / Loader */}
          {loading ? (
            <div className="mt-6 flex flex-col items-center justify-center text-muted-foreground">
              <div className="h-6 w-6 border-2 border-t-transparent border-primary rounded-full animate-spin mb-2"></div>
              <p className="text-sm animate-pulse">Calculating conversion, please wait...</p>
            </div>
          ) : (
            result && (
              <div className="mt-6 p-4 bg-muted rounded-md text-center">
                <h3 className="text-lg font-medium mb-2">Conversion Result</h3>
                <p className="text-2xl font-bold">{result}</p>
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
