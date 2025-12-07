import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowLeftRight } from 'lucide-react';

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
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-synonym font-bold text-gray-900 dark:text-white mb-3">
          Data Unit Converter
        </h1>
        <p className="text-gray-600 font-satoshi dark:text-gray-400">
          Easily convert between KB, MB, GB, and TB <br />with accurate results in both Metric and Binary formats.
        </p>
      </div>

      <div className="bg-white dark:bg-[#020817] border border-gray-200 dark:border-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg">
        {/* ---------- TABS ---------- */}
        <div className="flex mb-6 bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-2 font-medium ${
              activeTab === 'calculator'
                ? 'bg-blue-600 text-white'
                : 'bg-transparent text-gray-700 dark:text-gray-300'
            }`}
          >
            Calculator
          </button>

          <button
            onClick={() => setActiveTab('amortization')}
            className={`flex-1 py-2 font-medium ${
              activeTab === 'amortization'
                ? 'bg-blue-600 text-white'
                : 'bg-transparent text-gray-700 dark:text-gray-300'
            }`}
          >
            Amortization
          </button>
        </div>

        {/* ---------- CALCULATOR TAB ---------- */}
        {activeTab === 'calculator' && (
          <>
            {/* VALUE */}
            <div className="mb-4">
              <label className="text-gray-800 dark:text-gray-300">
                Enter Value *
              </label>
              <input
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] text-gray-900 dark:text-white border ${
                  error
                    ? 'border-red-600'
                    : 'border-gray-300 dark:border-gray-800'
                }`}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            {/* UNITS */}
            <div className="flex items-center justify-between gap-4">
              {/* FROM */}
              <div className="flex-1">
                <label className="text-gray-800 dark:text-gray-300">From</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value as Unit)}
                  className="mt-1 w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800"
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
                className="p-2 mt-5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-full shadow transition"
              >
                <ArrowLeftRight className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>

              {/* TO */}
              <div className="flex-1">
                <label className="text-gray-800 dark:text-gray-300">To</label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value as Unit)}
                  className="mt-1 w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800"
                >
                  <option value="KB">KB</option>
                  <option value="MB">MB</option>
                  <option value="GB">GB</option>
                  <option value="TB">TB</option>
                </select>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-2 mt-6">
              <button
                onClick={handleCalculate}
                disabled={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex justify-center items-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Convert'
                )}
              </button>

              <button
                onClick={handleReset}
                className="flex-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-md"
              >
                Reset
              </button>
            </div>

            {/* RESULTS */}
            {(metricResult !== null || binaryResult !== null) && !loading && (
              <div className="mt-6 space-y-3">
                {metricResult !== null && (
                  <div className="bg-gray-100 dark:bg-[#0f172a] p-3 rounded-md border border-gray-300 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Metric Result (1000-based):
                    </p>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {metricResult} {toUnit}
                    </p>
                  </div>
                )}

                {binaryResult !== null && (
                  <div className="bg-gray-100 dark:bg-[#0f172a] p-3 rounded-md border border-gray-300 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Binary Result (1024-based):
                    </p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                      {binaryResult} {toUnit}
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* ---------- AMORTIZATION TAB (TABLE) ---------- */}
        {activeTab === 'amortization' && (
          <div className="max-h-[400px] overflow-y-auto">
            {history.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                No conversion history yet.
              </p>
            )}

            {history.length > 0 && (
              <table className="w-full text-left border-collapse mt-4">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
                    <th className="p-2 border border-gray-300 dark:border-gray-600">
                      From → To
                    </th>
                    <th className="p-2 border border-gray-300 dark:border-gray-600">
                      Binary
                    </th>
                    <th className="p-2 border border-gray-300 dark:border-gray-600">
                      Metric
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {history.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t border-gray-300 dark:border-gray-700"
                    >
                      <td className="p-2 border border-gray-300 dark:border-gray-700">
                        {item.input} {item.from} → {item.to}
                      </td>

                      <td className="p-2 border border-gray-300 dark:border-gray-700 text-blue-500 dark:text-blue-400">
                        {item.binary} {item.to}
                      </td>

                      <td className="p-2 border border-gray-300 dark:border-gray-700 text-green-500 dark:text-green-400">
                        {item.metric} {item.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataUnitConverter;
