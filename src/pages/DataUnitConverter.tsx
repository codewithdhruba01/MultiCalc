import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/Card';

type Unit = 'KB' | 'MB' | 'GB' | 'TB';

const DataUnitConverter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState<'calculator' | 'amortization'>(
    'calculator'
  );

  const [value, setValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<Unit>('GB');
  const [toUnit, setToUnit] = useState<Unit>('MB');

  const [metricResult, setMetricResult] = useState<number | null>(null);
  const [binaryResult, setBinaryResult] = useState<number | null>(null);

  const [history, setHistory] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const metricFactors: Record<Unit, number> = {
    KB: 1000,
    MB: 1000 ** 2,
    GB: 1000 ** 3,
    TB: 1000 ** 4,
  };

  const binaryFactors: Record<Unit, number> = {
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
  };

  const handleCalculate = () => {
    setError('');
    setMetricResult(null);
    setBinaryResult(null);

    if (!value || parseFloat(value) < 0) {
      setError('Please enter a valid non-negative value');
      return;
    }

    const input = parseFloat(value);
    setLoading(true);

    setTimeout(() => {
      const metricBytes = input * metricFactors[fromUnit];
      const metricConverted = metricBytes / metricFactors[toUnit];

      const binaryBytes = input * binaryFactors[fromUnit];
      const binaryConverted = binaryBytes / binaryFactors[toUnit];

      const metric = parseFloat(metricConverted.toFixed(6));
      const binary = parseFloat(binaryConverted.toFixed(6));

      setMetricResult(metric);
      setBinaryResult(binary);

      setHistory((prev) => [
        {
          id: prev.length + 1,
          input,
          from: fromUnit,
          to: toUnit,
          metric,
          binary,
        },
        ...prev,
      ]);

      setLoading(false);
    }, 600);
  };

  const handleReset = () => {
    setValue('');
    setFromUnit('GB');
    setToUnit('MB');
    setMetricResult(null);
    setBinaryResult(null);
    setError('');
    setLoading(false);
  };

  
  const handleSwap = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  return (
    <div
      className="min-h-[70vh] flex flex-col justify-center items-center px-4 pt-24 pb-20"
      data-aos="fade-up"
    >
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center font-synonym font-bold mb-3">
            Data Unit Converter
          </CardTitle>
          <CardDescription className="text-center font-satoshi">
            Easily convert between KB, MB, GB, and TB <br />with accurate results in both Metric and Binary formats.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="calculator"
            value={activeTab}
            onValueChange={(val) => setActiveTab(val as 'calculator' | 'amortization')}
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="amortization">History</TabsTrigger>
            </TabsList>

            {/* ---------- CALCULATOR TAB ---------- */}
            <TabsContent value="calculator" className="space-y-4">
              {/* VALUE */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Enter Value <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  placeholder="Enter value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className={error ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              {/* UNITS */}
              <div className="flex items-center justify-between gap-4">
                {/* FROM */}
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">From</label>
                  <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value as Unit)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="KB">KB</option>
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                    <option value="TB">TB</option>
                  </select>
                </div>

                {/* SWAP BUTTON */}
                <button
                  onClick={handleSwap}
                  className="p-2 mt-6 bg-muted hover:bg-muted/80 rounded-full transition"
                >
                  <ArrowLeftRight className="w-5 h-5" />
                </button>

                {/* TO */}
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">To</label>
                  <select
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value as Unit)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="KB">KB</option>
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                    <option value="TB">TB</option>
                  </select>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button onClick={handleCalculate} disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                      Calculating...
                    </div>
                  ) : (
                    'Convert'
                  )}
                </Button>
                <Button variant="outline" onClick={handleReset} disabled={loading}>
                  Reset
                </Button>
              </div>

              {/* RESULTS */}
              {(metricResult !== null || binaryResult !== null) && !loading && (
                <div className="mt-6 space-y-3">
                  {metricResult !== null && (
                    <div className="p-3 bg-muted rounded-md transition-all duration-500">
                      <p className="font-medium mb-1">
                        Metric Result (1000-based):
                      </p>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {metricResult} {toUnit}
                      </p>
                    </div>
                  )}

                  {binaryResult !== null && (
                    <div className="p-3 bg-muted rounded-md transition-all duration-500">
                      <p className="font-medium mb-1">
                        Binary Result (1024-based):
                      </p>
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        {binaryResult} {toUnit}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>

            {/* ---------- HISTORY TAB (TABLE) ---------- */}
            <TabsContent value="amortization">
              <div className="max-h-[400px] overflow-y-auto">
                {history.length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No conversion history yet.
                  </p>
                )}

                {history.length > 0 && (
                  <table className="w-full text-left border-collapse mt-2">
                    <thead className="sticky top-0 bg-background z-10">
                      <tr className="border-b border-border text-foreground">
                        <th className="p-2 font-medium">From → To</th>
                        <th className="p-2 font-medium">Binary</th>
                        <th className="p-2 font-medium">Metric</th>
                      </tr>
                    </thead>

                    <tbody>
                      {history.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-border/40"
                        >
                          <td className="p-2">
                            {item.input} {item.from} → {item.to}
                          </td>

                          <td className="p-2 font-medium text-green-600 dark:text-green-400">
                            {item.binary} {item.to}
                          </td>

                          <td className="p-2 font-medium text-blue-600 dark:text-blue-400">
                            {item.metric} {item.to}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
               </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataUnitConverter;
