import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../ui/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../ui/Card';
import { Input } from '../ui/Input';

const freqOptions = [
  { label: 'Annually', value: 'annual', n: 1 },
  { label: 'Semi-Annually', value: 'semi', n: 2 },
  { label: 'Quarterly', value: 'quarter', n: 4 },
  { label: 'Monthly', value: 'monthly', n: 12 },
  { label: 'Daily (365)', value: 'daily', n: 365 },
];

const FDCaclculator: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [tenureValue, setTenureValue] = useState<string>('');
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');
  const [freq, setFreq] = useState<string>('annual');

  const [errors, setErrors] = useState({
    principal: '',
    rate: '',
    tenure: '',
  });

  const [maturity, setMaturity] = useState<number | null>(null);
  const [interestEarned, setInterestEarned] = useState<number | null>(null);
  const [loading, setLoading] = useState(false); // 👈 new loading state added

  const handleCalculate = () => {
    const newErrors = { principal: '', rate: '', tenure: '' };
    let valid = true;

    const p = parseFloat(principal);
    if (!principal || isNaN(p) || p <= 0) {
      newErrors.principal = 'Please enter a valid principal amount';
      valid = false;
    }

    const rPercent = parseFloat(rate);
    if (!rate || isNaN(rPercent) || rPercent <= 0) {
      newErrors.rate = 'Please enter a valid annual rate (%)';
      valid = false;
    }

    const tenureRaw = parseFloat(tenureValue);
    if (!tenureValue || isNaN(tenureRaw) || tenureRaw <= 0) {
      newErrors.tenure = 'Please enter a valid tenure';
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    setLoading(true); // 👈 start loading

    setTimeout(() => {
      // Convert tenure to years
      const t = tenureUnit === 'years' ? tenureRaw : tenureRaw / 12;
      const option = freqOptions.find((o) => o.value === freq);
      const n = option ? option.n : 1;
      const r = rPercent / 100;

      const A = p * Math.pow(1 + r / n, n * t);
      const interest = A - p;

      setMaturity(parseFloat(A.toFixed(2)));
      setInterestEarned(parseFloat(interest.toFixed(2)));
      setLoading(false); // 👈 stop loading after calculation
    }, 1000); // 1 second delay for realistic effect
  };

  const handleReset = () => {
    setPrincipal('');
    setRate('');
    setTenureValue('');
    setTenureUnit('years');
    setFreq('annual');
    setErrors({ principal: '', rate: '', tenure: '' });
    setMaturity(null);
    setInterestEarned(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          Fixed Deposit Calculator
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Calculate maturity amount and interest earned with compound interest
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Inputs */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Principal Amount <span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            placeholder="Enter principal (e.g. 10000)"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className={errors.principal ? 'border-red-500 focus-visible:ring-red-500' : ''}
          />
          {errors.principal && (
            <p className="text-red-500 text-sm mt-1">{errors.principal}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Annual Rate (%) <span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            placeholder="e.g. 6.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className={errors.rate ? 'border-red-500 focus-visible:ring-red-500' : ''}
          />
          {errors.rate && (
            <p className="text-red-500 text-sm mt-1">{errors.rate}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Tenure <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="Enter tenure"
              value={tenureValue}
              onChange={(e) => setTenureValue(e.target.value)}
              className={errors.tenure ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {errors.tenure && (
              <p className="text-red-500 text-sm mt-1">{errors.tenure}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Unit
            </label>
            <select
              value={tenureUnit}
              onChange={(e) =>
                setTenureUnit(e.target.value === 'months' ? 'months' : 'years')
              }
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Compounding Frequency
          </label>
          <select
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {freqOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
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
        {!loading && maturity !== null && interestEarned !== null && (
          <div className="mt-6 p-4 bg-muted rounded-md transition-all duration-500">
            <h3 className="text-lg font-medium mb-4">Deposit Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Principal Amount:</span>
                <span className="font-bold">
                  ₹ {parseFloat(principal).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest Earned:</span>
                <span className="font-bold">
                  ₹ {interestEarned.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Maturity Amount:</span>
                <span className="font-bold text-green-600 dark:text-green-400">
                  ₹ {maturity.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FDCaclculator;
