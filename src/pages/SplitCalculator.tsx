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

const BillSplitCalculator: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const [totalBill, setTotalBill] = useState<string>('');
  const [extraCharges, setExtraCharges] = useState<string>('');
  const [totalPeople, setTotalPeople] = useState<string>('');
  const [perPerson, setPerPerson] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    bill: '',
    people: '',
  });

  const handleCalculate = () => {
    let newErrors = { bill: '', people: '' };
    let isValid = true;

    if (!totalBill || parseFloat(totalBill) <= 0) {
      newErrors.bill = 'Please enter a valid total bill amount';
      isValid = false;
    }

    if (!totalPeople || parseInt(totalPeople) <= 0) {
      newErrors.people = 'Please enter total number of people';
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    setLoading(true);
    setPerPerson(null);

    setTimeout(() => {
      const bill = parseFloat(totalBill);
      const extra = parseFloat(extraCharges) || 0;
      const people = parseInt(totalPeople);

      const totalAmount = bill + extra;
      const perHead = totalAmount / people;
      setPerPerson(parseFloat(perHead.toFixed(2)));
      setLoading(false);
    }, 700); // small delay for smooth effect
  };

  const handleReset = () => {
    setTotalBill('');
    setExtraCharges('');
    setTotalPeople('');
    setPerPerson(null);
    setErrors({ bill: '', people: '' });
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
            Bill Split Calculator
          </CardTitle>
          <CardDescription className="text-center font-satoshi">
            Split your total bill among friends or family easily
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Total Bill */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Total Bill Amount <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="Enter total bill"
              value={totalBill}
              onChange={(e) => setTotalBill(e.target.value)}
              className={errors.bill ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {errors.bill && (
              <p className="text-red-500 text-sm mt-1">{errors.bill}</p>
            )}
          </div>

          {/* Extra Charges */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Extra Charges (Optional)
            </label>
            <Input
              type="number"
              placeholder="e.g. 50"
              value={extraCharges}
              onChange={(e) => setExtraCharges(e.target.value)}
            />
          </div>

          {/* Total People */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Total People <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="Enter number of people"
              value={totalPeople}
              onChange={(e) => setTotalPeople(e.target.value)}
              className={errors.people ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {errors.people && (
              <p className="text-red-500 text-sm mt-1">{errors.people}</p>
            )}
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
          {perPerson !== null && !loading && (
            <div className="mt-6 text-center bg-muted p-3 rounded-md transition-colors">
              <p className="font-medium mb-1">Per Person Distribute Amount:</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                ₹ {perPerson}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BillSplitCalculator;
