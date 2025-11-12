import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      className="min-h-[70vh] flex flex-col justify-center items-center px-4 pt-24 pb-20" // 👈 Added top & bottom padding
      data-aos="fade-up"
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center font-synonym mb-3">
          Bill Split Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 font-satoshi">
          Split your total bill among friends or family easily
        </p>
      </div>

      <div className="bg-white dark:bg-[#020817] border border-gray-200 dark:border-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg transition-colors">
        {/* Total Bill */}
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300 mb-1">
            Total Bill Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter total bill"
            value={totalBill}
            onChange={(e) => setTotalBill(e.target.value)}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-[#020817] border transition-colors ${
              errors.bill
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-gray-800 focus:ring-blue-500'
            }`}
          />
          {errors.bill && (
            <p className="text-red-500 text-sm mt-1">{errors.bill}</p>
          )}
        </div>

        {/* Extra Charges */}
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300 mb-1">
            Extra Charges (Optional)
          </label>
          <input
            type="number"
            placeholder="e.g. 50"
            value={extraCharges}
            onChange={(e) => setExtraCharges(e.target.value)}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-[#020817] border border-gray-300 dark:border-gray-700 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Total People */}
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-gray-300 mb-1">
            Total People <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter number of people"
            value={totalPeople}
            onChange={(e) => setTotalPeople(e.target.value)}
            className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-[#020817] border transition-colors ${
              errors.people
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-gray-800 focus:ring-blue-500'
            }`}
          />
          {errors.people && (
            <p className="text-red-500 text-sm mt-1">{errors.people}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={handleCalculate}
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition flex justify-center items-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Calculate'
            )}
          </button>
          <button
            onClick={handleReset}
            disabled={loading}
            className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-md transition"
          >
            Reset
          </button>
        </div>

        {/* Result */}
        {perPerson !== null && !loading && (
          <div className="mt-6 text-center bg-gray-100 dark:bg-[#0f172a] p-3 rounded-md border border-gray-300 dark:border-gray-700 transition-colors">
            <p className="text-gray-800 dark:text-gray-300 font-poppins">
              Per Person Distribute Amount:
            </p>
            <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
              ₹ {perPerson}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillSplitCalculator;
