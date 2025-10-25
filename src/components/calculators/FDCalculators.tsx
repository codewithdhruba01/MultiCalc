import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  const [rate, setRate] = useState<string>(''); // percent per annum
  const [tenureValue, setTenureValue] = useState<string>(''); // numeric
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');
  const [freq, setFreq] = useState<string>('annual');

  const [errors, setErrors] = useState({
    principal: '',
    rate: '',
    tenure: '',
  });

  const [maturity, setMaturity] = useState<number | null>(null);
  const [interestEarned, setInterestEarned] = useState<number | null>(null);

  // Calculates maturity using A = P * (1 + r/n)^(n*t)
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
    if (!valid) return; // don't proceed if invalid

    // Convert tenure to years
    const t = tenureUnit === 'years' ? tenureRaw : tenureRaw / 12;

    // find n from freq
    const option = freqOptions.find((o) => o.value === freq);
    const n = option ? option.n : 1;

    const r = rPercent / 100; // decimal

    // Compound interest formula
    const A = p * Math.pow(1 + r / n, n * t);
    const interest = A - p;

    setMaturity(parseFloat(A.toFixed(2)));
    setInterestEarned(parseFloat(interest.toFixed(2)));
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
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-2"
      data-aos="zoom-in"
    >
      <div className="w-full max-w-lg bg-white dark:bg-[#020817] border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-lg transition-colors">
        {/* Principal */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-white font-synonym mb-3">
            Fixed Deposit Calculator
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-satoshi">
            Calculate maturity amount and interest earned with compound
            interest
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300 mb-1">
            Principal Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="0"
            step="any"
            placeholder="Enter principal (e.g. 10000)"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-[#020817] border transition-colors ${
              errors.principal
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-gray-800 focus:ring-blue-500'
            }`}
          />
          {errors.principal && (
            <p className="text-red-500 text-sm mt-1">{errors.principal}</p>
          )}
        </div>

        {/* Rate */}
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300 mb-1">
            Annual Rate (%) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="0"
            step="any"
            placeholder="e.g. 6.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-[#020817] border transition-colors ${
              errors.rate
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-gray-800 focus:ring-blue-500'
            }`}
          />
          {errors.rate && (
            <p className="text-red-500 text-sm mt-1">{errors.rate}</p>
          )}
        </div>

        {/* Tenure and Unit */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <label className="block text-gray-800 dark:text-gray-300 mb-1">
              Tenure <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="0"
              step="any"
              placeholder="Enter tenure"
              value={tenureValue}
              onChange={(e) => setTenureValue(e.target.value)}
              className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-[#020817] border transition-colors ${
                errors.tenure
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-800 focus:ring-blue-500'
              }`}
            />
            {errors.tenure && (
              <p className="text-red-500 text-sm mt-1">{errors.tenure}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-300 mb-1">
              Unit
            </label>
            <select
              value={tenureUnit}
              onChange={(e) =>
                setTenureUnit(e.target.value === 'months' ? 'months' : 'years')
              }
              className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>

        {/* Frequency */}
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300 mb-1">
            Compounding Frequency
          </label>
          <select
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {freqOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCalculate}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-md transition"
          >
            Reset
          </button>
        </div>

        {/* Result */}
        {maturity !== null && interestEarned !== null && (
          <div className="mt-6 bg-gray-100 dark:bg-[#0f172a] border border-gray-300 dark:border-gray-700 rounded-md p-4 transition-colors">
            <p className="text-gray-800 dark:text-gray-300">Maturity Amount</p>
            <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
              ₹ {maturity.toLocaleString()}
            </p>

            <div className="mt-2">
              <p className="text-gray-800 dark:text-gray-300">
                Total Interest Earned
              </p>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                ₹ {interestEarned.toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FDCaclculator;
