import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../ui/Card';

export default function PregnancyCalculator() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [method, setMethod] = useState<string>('lastPeriod');
  const [mainDate, setMainDate] = useState<string>('');
  const [calcDate, setCalcDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [ultrasoundWeeks, setUltrasoundWeeks] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [embryoAge, setEmbryoAge] = useState<string>('3');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{
    dueDate: string;
    conceptionDate: string;
    gestationWeeks: number;
    gestationDays: number;
    months: number;
    trimester: string;
    percentComplete: number;
    babySize: string;
    babyWeight: string;
    milestones: { label: string; date: string }[];
  } | null>(null);

  const babySizeData: Record<number, { size: string; weight: string }> = {
    23: { size: '11.4 inches (28.9 cm)', weight: '1.1 pounds (501 grams)' },
    24: { size: '11.8 inches (30 cm)', weight: '1.3 pounds (600 grams)' },
    25: { size: '13.6 inches (34.6 cm)', weight: '1.5 pounds (700 grams)' },
  };

  const calculatePregnancy = () => {
    if (!mainDate) return;
    setLoading(true);

    setTimeout(() => {
      const referenceDate = calcDate ? new Date(calcDate) : new Date();
      let dueDate: Date;
      let conceptionDate: Date;
      let lmpAdjusted: Date | null = null;

      if (method === 'lastPeriod') {
        const lmp = new Date(mainDate);
        const cycleAdj = parseInt(cycleLength, 10) - 28;
        lmpAdjusted = new Date(lmp);
        lmpAdjusted.setDate(lmpAdjusted.getDate() + cycleAdj);
        dueDate = new Date(lmpAdjusted);
        dueDate.setDate(dueDate.getDate() + 280);
        conceptionDate = new Date(lmpAdjusted);
        conceptionDate.setDate(conceptionDate.getDate() + 14);
      } else if (method === 'dueDate') {
        dueDate = new Date(mainDate);
        conceptionDate = new Date(dueDate);
        conceptionDate.setDate(dueDate.getDate() - 266);
      } else if (method === 'conception') {
        conceptionDate = new Date(mainDate);
        dueDate = new Date(conceptionDate);
        dueDate.setDate(conceptionDate.getDate() + 266);
      } else if (method === 'ivf') {
        const transferDate = new Date(mainDate);
        const embryoAgeDays = parseInt(embryoAge || '3', 10);
        const lmpDate = new Date(transferDate);
        lmpDate.setDate(lmpDate.getDate() - (14 - embryoAgeDays));
        dueDate = new Date(lmpDate);
        dueDate.setDate(dueDate.getDate() + 280);
        conceptionDate = new Date(lmpDate);
        conceptionDate.setDate(conceptionDate.getDate() + 14);
      } else if (method === 'ultrasound') {
        if (!ultrasoundWeeks) {
          alert('Please enter gestational age at ultrasound');
          setLoading(false);
          return;
        }
        const ultrasoundDate = new Date(mainDate);
        const weeks = parseInt(ultrasoundWeeks, 10);
        const lmp = new Date(ultrasoundDate);
        lmp.setDate(lmp.getDate() - weeks * 7);
        dueDate = new Date(lmp);
        dueDate.setDate(dueDate.getDate() + 280);
        conceptionDate = new Date(lmp);
        conceptionDate.setDate(conceptionDate.getDate() + 14);
      } else {
        alert('Unknown method');
        setLoading(false);
        return;
      }

      const pregnancyStart = new Date(dueDate);
      pregnancyStart.setDate(dueDate.getDate() - 280);

      const diffTime = referenceDate.getTime() - pregnancyStart.getTime();
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const gestationWeeks = Math.floor(totalDays / 7);
      const gestationDays = totalDays % 7;
      const months = +(totalDays / 30.44).toFixed(1);
      const trimester =
        gestationWeeks < 13
          ? 'First'
          : gestationWeeks < 28
            ? 'Second'
            : 'Third';
      const percentComplete = +((totalDays / 280) * 100).toFixed(1);

      const babyData = babySizeData[gestationWeeks] || {
        size: 'N/A',
        weight: 'N/A',
      };

      const milestones = [
        {
          label: 'End of First Trimester',
          date: formatDate(
            new Date(
              pregnancyStart.getTime() + 13 * 7 * 24 * 60 * 60 * 1000
            ).toISOString()
          ),
        },
        {
          label: 'End of Second Trimester',
          date: formatDate(
            new Date(
              pregnancyStart.getTime() + 27 * 7 * 24 * 60 * 60 * 1000
            ).toISOString()
          ),
        },
        {
          label: 'Start of Third Trimester',
          date: formatDate(
            new Date(
              pregnancyStart.getTime() + 28 * 7 * 24 * 60 * 60 * 1000
            ).toISOString()
          ),
        },
      ];

      setResult({
        dueDate: dueDate.toISOString().split('T')[0],
        conceptionDate: conceptionDate.toISOString().split('T')[0],
        gestationWeeks,
        gestationDays,
        months,
        trimester,
        percentComplete,
        babySize: babyData.size,
        babyWeight: babyData.weight,
        milestones,
      });

      setLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setMainDate('');
    setUltrasoundWeeks('');
    setCycleLength('28');
    setEmbryoAge('3');
    setCalcDate(new Date().toISOString().split('T')[0]);
    setResult(null);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getLabel = () => {
    switch (method) {
      case 'lastPeriod':
        return 'Last Menstrual Period (LMP)';
      case 'dueDate':
        return 'Estimated Due Date';
      case 'ultrasound':
        return 'Ultrasound Date';
      case 'conception':
        return 'Conception Date';
      case 'ivf':
        return 'IVF Transfer Date';
      default:
        return '';
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          Pregnancy Calculator
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Estimate your due date and milestones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* INPUT FIELDS */}
          <div>
            <label htmlFor="method" className="block text-sm font-medium mb-1">
              Calculate Based On
            </label>
            <select
              id="method"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="dueDate">Due Date</option>
              <option value="lastPeriod">Last Period</option>
              <option value="ultrasound">Ultrasound</option>
              <option value="conception">Conception Date</option>
              <option value="ivf">IVF Transfer Date</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="mainDate"
              className="block text-sm font-medium mb-1"
            >
              {getLabel()}
            </label>
            <input
              id="mainDate"
              type="date"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={mainDate}
              onChange={(e) => setMainDate(e.target.value)}
            />
          </div>

          {method === 'lastPeriod' && (
            <div>
              <label
                htmlFor="cycleLength"
                className="block text-sm font-medium mb-1"
              >
                Average Length of Your Cycles (days)
              </label>
              <input
                id="cycleLength"
                type="number"
                min="20"
                max="45"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
              />
            </div>
          )}

          {method === 'ultrasound' && (
            <div>
              <label
                htmlFor="ultrasoundWeeks"
                className="block text-sm font-medium mb-1"
              >
                Gestational Age at Ultrasound (weeks)
              </label>
              <input
                id="ultrasoundWeeks"
                type="number"
                min="1"
                max="40"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={ultrasoundWeeks}
                onChange={(e) => setUltrasoundWeeks(e.target.value)}
              />
            </div>
          )}

          {method === 'ivf' && (
            <div>
              <label
                htmlFor="embryoAge"
                className="block text-sm font-medium mb-1"
              >
                Embryo Age (in days)
              </label>
              <input
                id="embryoAge"
                type="number"
                min="1"
                max="10"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={embryoAge}
                onChange={(e) => setEmbryoAge(e.target.value)}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="calcDate"
              className="block text-sm font-medium mb-1"
            >
              Calculate At Date (optional)
            </label>
            <input
              id="calcDate"
              type="date"
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={calcDate}
              onChange={(e) => setCalcDate(e.target.value)}
            />
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={calculatePregnancy}
              disabled={!mainDate || loading}
            >
              {loading ? 'Calculating...' : 'Calculate'}
            </Button>
            <Button variant="outline" onClick={handleReset} disabled={loading}>
              Reset
            </Button>
          </div>

          {/* LOADING SPINNER */}
          {loading && (
            <div className="flex justify-center mt-6">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}

          {/* RESULT */}
          {result && !loading && (
            <div className="mt-6 p-4 bg-muted rounded-md space-y-3">
              <h3 className="text-lg font-synonym font-bold">
                Pregnancy Result
              </h3>
              <p className="text-xl font-bold mb-3">
                Week #{result.gestationWeeks} ({result.gestationWeeks} weeks{' '}
                {result.gestationDays} days)
              </p>
              <p className="font-satoshi">
                About {result.months} months pregnant
              </p>
              <p className="font-satoshi">
                Trimester: <strong>{result.trimester}</strong>
              </p>
              <p className="font-satoshi">
                Due Date: <strong>{formatDate(result.dueDate)}</strong>
              </p>
              <p className="font-satoshi">
                Conception Date: {formatDate(result.conceptionDate)}
              </p>
              {method === 'ivf' && (
                <p className="font-satoshi">
                  IVF Transfer Date: {formatDate(mainDate)} (Embryo Age:{' '}
                  {embryoAge} days)
                </p>
              )}
              <p className="font-satoshi">
                Baby size: {result.babySize}, weight: {result.babyWeight}
              </p>
              <p className="font-synonym font-bold">
                {result.percentComplete}% completed
              </p>
              <div>
                <h4 className="mt-3 font-synonym font-bold">
                  Important Milestones:
                </h4>
                <ul className="list-disc list-inside space-y-1 font-satoshi">
                  {result.milestones.map((m, i) => (
                    <li key={i}>
                      {m.label}: {m.date}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
