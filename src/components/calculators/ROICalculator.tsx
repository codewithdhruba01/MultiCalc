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

export default function ROICalculator() {
  const [investment, setInvestment] = useState<string>('');
  const [totalReturn, setTotalReturn] = useState<string>('');
  const [investmentTime, setInvestmentTime] = useState<string>('');
  const [result, setResult] = useState<{
    gain: number;
    roi: number;
    annualizedROI: number;
    time: number;
  } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const now = new Date();
    setLastUpdated(now.toLocaleString());
  }, []);

  const calculateROI = () => {
    const investmentAmount = parseFloat(investment);
    const returnAmount = parseFloat(totalReturn);
    const time = parseFloat(investmentTime);

    if (
      isNaN(investmentAmount) ||
      isNaN(returnAmount) ||
      isNaN(time) ||
      investmentAmount === 0 ||
      returnAmount <= investmentAmount ||
      time === 0
    ) {
      setResult(null);
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const gain = returnAmount - investmentAmount;
      const roi = (gain / investmentAmount) * 100;
      const annualizedROI =
        (Math.pow(returnAmount / investmentAmount, 1 / time) - 1) * 100;

      setResult({
        gain: parseFloat(gain.toFixed(2)),
        roi: parseFloat(roi.toFixed(2)),
        annualizedROI: parseFloat(annualizedROI.toFixed(2)),
        time,
      });

      setLoading(false);
    }, 1200);
  };

  const handleReset = () => {
    setInvestment('');
    setTotalReturn('');
    setInvestmentTime('');
    setResult(null);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          ROI Calculator
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Calculate Return on Investment and Annualized ROI from total return
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="investment"
              className="block text-sm font-medium mb-2"
            >
              Investment Amount
            </label>
            <Input
              id="investment"
              type="number"
              placeholder="e.g., 10000"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="totalReturn"
              className="block text-sm font-medium mb-2"
            >
              Total Return Amount
            </label>
            <Input
              id="totalReturn"
              type="number"
              placeholder="e.g., 13000"
              value={totalReturn}
              onChange={(e) => setTotalReturn(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="investmentTime"
              className="block text-sm font-medium mb-2"
            >
              Investment Time (Years)
            </label>
            <Input
              id="investmentTime"
              type="number"
              placeholder="e.g., 2 or 2.5"
              value={investmentTime}
              onChange={(e) => setInvestmentTime(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={calculateROI}
              disabled={
                loading || !investment || !totalReturn || !investmentTime
              }
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                  Calculating...
                </div>
              ) : (
                'Calculate'
              )}
            </Button>

            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {loading ? (
            <div className="mt-6 text-center text-sm text-muted-foreground animate-pulse">
              Please wait while we calculate your ROI...
            </div>
          ) : (
            result && (
              <div className="mt-6 p-4 bg-muted rounded-md text-center">
                <h3 className="text-2xl font-bold font-synonym mb-2">
                  ROI Result
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Investment Gain:</strong> {result.gain.toFixed(2)}
                  </li>
                  <li>
                    <strong>ROI:</strong> {result.roi}%
                  </li>
                  <li>
                    <strong>Annualized ROI:</strong> {result.annualizedROI}%
                  </li>
                  <li>
                    <strong>Investment Length:</strong> {result.time} year(s)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Annualized ROI helps compare returns across different
                  durations.
                </p>
              </div>
            )
          )}

          <div className="text-xs text-muted-foreground text-center mt-4">
            <p>Last updated: {lastUpdated}</p>
            <p className="mt-1">
              Note: Return must be greater than investment for ROI calculation.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
