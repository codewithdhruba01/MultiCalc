import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      newErrors.price = "Please enter valid product price";
      valid = false;
    }

    if (!tax || parseFloat(tax) < 0) {
      newErrors.tax = "Please enter valid tax percentage";
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
    <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 pt-24 pb-20" data-aos="fade-up">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Sales Tax Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate total price including tax easily
        </p>
      </div>

      <div className="bg-white dark:bg-[#020817] border border-gray-200 dark:border-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg">

        {/* Price */}
        <div className="mb-4">
          <label className="text-gray-800 dark:text-gray-300">Product Price *</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] text-gray-900 dark:text-white border ${
              errors.price ? "border-red-600" : "border-gray-300 dark:border-gray-800"
            }`}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        {/* Tax */}
        <div className="mb-4">
          <label className="text-gray-800 dark:text-gray-300">Tax Percentage (%) *</label>
          <input
            type="number"
            placeholder="Enter tax"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
            className={`w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] text-gray-900 dark:text-white border ${
              errors.tax ? "border-red-600" : "border-gray-300 dark:border-gray-800"
            }`}
          />
          {errors.tax && <p className="text-red-500 text-sm">{errors.tax}</p>}
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="text-gray-800 dark:text-gray-300">Quantity (optional)</label>
          <input
            type="number"
            placeholder="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-[#020817] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={handleCalculate}
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex justify-center items-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Calculate"
            )}
          </button>

          <button
            onClick={handleReset}
            className="flex-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-md"
          >
            Reset
          </button>
        </div>

        {/* Result */}
        {total !== null && !loading && (
          <div className="mt-6 text-center bg-gray-100 dark:bg-[#0f172a] p-3 rounded-md border border-gray-300 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Total Price After Tax:
            </p>
            <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
              ₹ {total}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesTaxCalculator;
