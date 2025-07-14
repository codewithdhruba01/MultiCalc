import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function YgpaToCgpaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState<'cgpa' | 'total'>('cgpa');

  // YGPA to CGPA states
  const [ygpa, setYgpa] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleConvertCgpa = () => {
    const value = parseFloat(ygpa);
    if (isNaN(value) || value < 0 || value > 10) {
      setError('Please enter a valid YGPA between 0 and 10.');
      setCgpa('');
      return;
    }
    const converted = value * 0.95;
    setCgpa(converted.toFixed(2));
    setError(null);
  };

  const handleResetCgpa = () => {
    setYgpa('');
    setCgpa('');
    setError(null);
  };

  // YGPA to Total Marks states
  const [ygpa2, setYgpa2] = useState('');
  const [subjects, setSubjects] = useState('');
  const [percentage, setPercentage] = useState('');
  const [totalMarks, setTotalMarks] = useState('');

  const handleConvertTotal = () => {
    const ygpaVal = parseFloat(ygpa2);
    const subjVal = parseInt(subjects);

    if (isNaN(ygpaVal) || ygpaVal < 0 || ygpaVal > 10) {
      setError('Please enter a valid YGPA between 0 and 10.');
      setPercentage('');
      setTotalMarks('');
      return;
    }
    if (isNaN(subjVal) || subjVal <= 0) {
      setError('Please enter a valid number of subjects.');
      setPercentage('');
      setTotalMarks('');
      return;
    }

    const perc = ygpaVal * 9.5;
    const total = perc * subjVal;

    setPercentage(perc.toFixed(2));
    setTotalMarks(total.toFixed(2));
    setError(null);
  };

  const handleResetTotal = () => {
    setYgpa2('');
    setSubjects('');
    setPercentage('');
    setTotalMarks('');
    setError(null);
  };

  return (
    <div className="py-8 md:py-12">
      <Container>
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold mb-2">Marks Calculators</h1>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Convert YGPA to CGPA or Total Marks easily
          </p>
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeTab === 'cgpa' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${
                  activeTab === 'cgpa' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setActiveTab('cgpa')}
              >
                YGPA to CGPA
              </Button>
              <Button
                variant={activeTab === 'total' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeTab === 'total' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setActiveTab('total')}
              >
                YGPA to Total Marks
              </Button>
            </div>
          </div>
        </div>

        {activeTab === 'cgpa' && (
          <div
            className="max-w-md mx-auto border rounded-lg p-6 mt-6"
            data-aos="fade-up"
          >
            <h2 className="text-lg font-semibold mb-1">YGPA to CGPA Converter</h2>
            <p className="text-muted-foreground mb-4 text-sm">
              Convert your Yearly Grade Point Average to Cumulative Grade Point Average.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label htmlFor="ygpa" className="block text-sm font-medium mb-1">
                  YGPA
                </label>
                <Input
                  id="ygpa"
                  name="ygpa"
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  placeholder="Enter YGPA"
                  value={ygpa}
                  onChange={(e) => setYgpa(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="cgpa" className="block text-sm font-medium mb-1">
                  CGPA
                </label>
                <Input
                  id="cgpa"
                  name="cgpa"
                  placeholder="Converted CGPA"
                  value={cgpa}
                  readOnly
                />
              </div>
            </div>
            {error && (
              <div className="text-red-600 text-sm mb-3">{error}</div>
            )}
            <div className="flex gap-2">
              <Button onClick={handleConvertCgpa}>Convert</Button>
              <Button variant="secondary" onClick={handleResetCgpa}>
                Reset
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'total' && (
          <div
            className="max-w-md mx-auto border rounded-lg p-6 mt-6"
            data-aos="fade-up"
          >
            <h2 className="text-lg font-semibold mb-1">YGPA to Total Marks</h2>
            <p className="text-muted-foreground mb-4 text-sm">
              Convert your YGPA into total marks and percentage.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label htmlFor="ygpa2" className="block text-sm font-medium mb-1">
                  YGPA
                </label>
                <Input
                  id="ygpa2"
                  name="ygpa2"
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  placeholder="Enter YGPA"
                  value={ygpa2}
                  onChange={(e) => setYgpa2(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="subjects" className="block text-sm font-medium mb-1">
                  Total Subjects
                </label>
                <Input
                  id="subjects"
                  name="subjects"
                  type="number"
                  min="1"
                  placeholder="Enter total number of subjects"
                  value={subjects}
                  onChange={(e) => setSubjects(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="percentage" className="block text-sm font-medium mb-1">
                  Percentage (%)
                </label>
                <Input
                  id="percentage"
                  name="percentage"
                  placeholder="Calculated Percentage"
                  value={percentage}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="totalMarks" className="block text-sm font-medium mb-1">
                  Total Marks
                </label>
                <Input
                  id="totalMarks"
                  name="totalMarks"
                  placeholder="Calculated Total Marks"
                  value={totalMarks}
                  readOnly
                />
              </div>
            </div>
            {error && (
              <div className="text-red-600 text-sm mb-3">{error}</div>
            )}
            <div className="flex gap-2">
              <Button onClick={handleConvertTotal}>Convert</Button>
              <Button variant="secondary" onClick={handleResetTotal}>
                Reset
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
