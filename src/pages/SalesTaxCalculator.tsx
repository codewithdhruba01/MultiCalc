import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/Card';

const SalesTaxCalculator: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const [price, setPrice] = useState<string>('');
  const [tax, setTax] = useState<string>('');
  const [qty, setQty] = useState<string>('1');

  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    price: '',
    tax: '',
  });

  const handleCalculate = () => {
    let newErrors = { price: '', tax: '' };
    let valid = true;

    if (!price || parseFloat(price) <= 0) {
      newErrors.price = 'Please enter valid product price';
      valid = false;
    }

    if (!tax || parseFloat(tax) < 0) {
      newErrors.tax = 'Please enter valid tax percentage';
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    setLoading(true);

    setTimeout(() => {
      const p = parseFloat(price);
      const t = parseFloat(tax);
      const q = parseInt(qty) || 1;

      const taxValue = (p * t) / 100;
      const finalPrice = (p + taxValue) * q;

      setTotal(parseFloat(finalPrice.toFixed(2)));
      setLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setPrice('');
    setTax('');
    setQty('1');
    setTotal(null);
    setErrors({ price: '', tax: '' });
    setLoading(false);
  };

  return (
    <div
      className="min-h-[70vh] flex flex-col justify-center items-center px-4 pt-24 pb-20"
      data-aos="fade-up"
    >
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center font-synonym font-bold mb-3">
            Sales Tax Calculator
          </CardTitle>
          <CardDescription className="text-center font-satoshi">
            Calculate total price including tax easily
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Price <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={errors.price ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price}</p>
            )}
          </div>

          {/* Tax */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Tax Percentage (%) <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="Enter tax"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
              className={errors.tax ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {errors.tax && <p className="text-red-500 text-sm mt-1">{errors.tax}</p>}
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Quantity (optional)
            </label>
            <Input
              type="number"
              placeholder="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button onClick={handleCalculate} disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                  Calculating...
                </div>
              ) : (
                'Calculate'
              )}
            </Button>
            <Button variant="outline" onClick={handleReset} disabled={loading}>
              Reset
            </Button>
          </div>

          {/* Result */}
          {total !== null && !loading && (
            <div className="mt-6 text-center bg-muted p-3 rounded-md transition-colors">
              <p className="font-medium mb-1">Total Price After Tax:</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                ₹ {total}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesTaxCalculator;
