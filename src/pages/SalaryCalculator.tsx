import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SalaryCalculator() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);
  const [basic, setBasic] = useState('');
  const [hra, setHra] = useState('');
  const [da, setDa] = useState('');
  const [otherAllowance, setOtherAllowance] = useState('');
  const [tax, setTax] = useState('');
  const [pf, setPf] = useState('');
  const [insurance, setInsurance] = useState('');
  const [grossSalary, setGrossSalary] = useState('');
  const [deductions, setDeductions] = useState('');
  const [netSalary, setNetSalary] = useState('');

  // Calculate Net Salary
  const calculateSalary = () => {
    const basicSalary = parseFloat(basic) || 0;
    const hraAmt = ((parseFloat(hra) || 0) / 100) * basicSalary;
    const daAmt = ((parseFloat(da) || 0) / 100) * basicSalary;
    const otherAmt = ((parseFloat(otherAllowance) || 0) / 100) * basicSalary;

    const gross = basicSalary + hraAmt + daAmt + otherAmt;

    const taxAmt = ((parseFloat(tax) || 0) / 100) * gross;
    const pfAmt = ((parseFloat(pf) || 0) / 100) * gross;
    const insuranceAmt = ((parseFloat(insurance) || 0) / 100) * gross;

    const totalDeductions = taxAmt + pfAmt + insuranceAmt;
    const net = gross - totalDeductions;

    setGrossSalary(gross.toFixed(2));
    setDeductions(totalDeductions.toFixed(2));
    setNetSalary(net.toFixed(2));
  };

  // Reset form
  const resetForm = () => {
    setBasic('');
    setHra('');
    setDa('');
    setOtherAllowance('');
    setTax('');
    setPf('');
    setInsurance('');
    setGrossSalary('');
    setDeductions('');
    setNetSalary('');
  };

  return (
    <div className="container mx-auto py-20 md:py-15" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-2 font-excon">
        Salary Calculator
      </h2>
      <p className="text-center text-muted-foreground mb-10 font-satoshi">
        Calculate your net salary after allowances and deductions
      </p>

      <Card className="max-w-md mx-auto py-5 md:py-5 ">
        <CardContent className="space-y-4">
          {/* Basic Salary */}
          <div>
            <label className="block mb-1 font-outfit">
              Basic Salary<span className="text-red-600">*</span>
            </label>
            <Input
              type="number"
              placeholder="Enter basic salary"
              value={basic}
              onChange={(e) => setBasic(e.target.value)}
            />
          </div>

          {/* Allowances */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block mb-1 font-outfit">HRA %</label>
              <Input
                type="number"
                placeholder="e.g. 20"
                value={hra}
                onChange={(e) => setHra(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-outfit">DA %</label>
              <Input
                type="number"
                placeholder="e.g. 10"
                value={da}
                onChange={(e) => setDa(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-outfit">Other %</label>
              <Input
                type="number"
                placeholder="e.g. 5"
                value={otherAllowance}
                onChange={(e) => setOtherAllowance(e.target.value)}
              />
            </div>
          </div>

          {/* Deductions */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block mb-1 font-outfit">Tax %</label>
              <Input
                type="number"
                placeholder="e.g. 5"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-outfit">PF %</label>
              <Input
                type="number"
                placeholder="e.g. 12"
                value={pf}
                onChange={(e) => setPf(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-outfit">Insurance %</label>
              <Input
                type="number"
                placeholder="e.g. 2"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
          </div>

          {/* Salary Breakdown */}
          {netSalary && (
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-semibold mb-2 font-synonym">
                Salary Breakdown
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span className="font-satoshi">Gross Salary:</span>
                  <span className="font-medium">₹ {grossSalary}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-satoshi">Total Deductions:</span>
                  <span className="font-medium text-red-500">
                    ₹ {deductions}
                  </span>
                </li>
                <li className="flex justify-between text-lg font-bold font-synonym">
                  <span>Net Salary:</span>
                  <span className="text-green-600">₹ {netSalary}</span>
                </li>
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between space-x-2 mt-4">
            <Button onClick={calculateSalary} className="flex-1">
              Calculate
            </Button>
            <Button variant="secondary" onClick={resetForm} className="flex-1">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
