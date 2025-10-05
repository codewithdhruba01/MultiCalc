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

export default function NPVCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<string>('');
  const [cashFlows, setCashFlows] = useState<string>('');
  const [discountRate, setDiscountRate] = useState<string>('');
  const [npv, setNPV] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    setLastUpdated(now.toLocaleString());
  }, []);

  const calculateNPV = () => {
    const investment = parseFloat(initialInvestment);
    const rate = parseFloat(discountRate) / 100;
    const flows = cashFlows
      .split(',')
      .map((f) => parseFloat(f.trim()))
      .filter((f) => !isNaN(f));

    if (isNaN(investment) || isNaN(rate) || flows.length === 0) {
      setNPV(null);
      return;
    }

    const npvValue = flows.reduce((acc, flow, i) => {
      return acc + flow / Math.pow(1 + rate, i + 1);
    }, -investment);

    setNPV(parseFloat(npvValue.toFixed(2)));
  };

  const handleReset = () => {
    setInitialInvestment('');
    setCashFlows('');
    setDiscountRate('');
    setNPV(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          NPV Calculator
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Calculate Net Present Value of an investment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="initialInvestment"
              className="block text-sm font-medium mb-2"
            >
              Initial Investment
            </label>
            <Input
              id="initialInvestment"
              type="number"
              placeholder="Enter initial investment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="cashFlows"
              className="block text-sm font-medium mb-2"
            >
              Cash Flows (comma-separated)
            </label>
            <Input
              id="cashFlows"
              type="text"
              placeholder="e.g: 1000, 1500, 2000"
              value={cashFlows}
              onChange={(e) => setCashFlows(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="discountRate"
              className="block text-sm font-medium mb-2"
            >
              Discount Rate (%)
            </label>
            <Input
              id="discountRate"
              type="number"
              placeholder="e.g: 10"
              value={discountRate}
              onChange={(e) => setDiscountRate(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={calculateNPV}
              disabled={!initialInvestment || !cashFlows || !discountRate}
            >
              Calculate
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {npv !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="text-xl font-bold mb-2 text-center font-synonym">
                NPV Result
              </h3>
              <p className="text-center text-2xl font-bold">
                {npv} currency units
              </p>
              <p className="text-sm text-muted-foreground text-center font-satoshi mt-2">
                A positive NPV indicates a profitable investment.
              </p>
            </div>
          )}

          <div className="text-xs text-muted-foreground text-center mt-4">
            <p className="font-satoshi">Last updated: {lastUpdated}</p>
            <p className="mt-1 font-satoshi">
              Note: This tool assumes consistent time periods and cash flow
              intervals.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
