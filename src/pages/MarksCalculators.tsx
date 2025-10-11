import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

  // Dynamic SEO Data
  const getPageSEO = () => {
    switch (activeTab) {
      case 'cgpa':
        return {
          title: 'YGPA to CGPA Converter | MultiCalc',
          description:
            'Easily convert your Yearly Grade Point Average (YGPA) to Cumulative Grade Point Average (CGPA) with our accurate online YGPA to CGPA Converter.',
          keywords:
            'ygpa to cgpa, cgpa converter, grade calculator, university grade converter, online marks calculator, multicalc',
          canonical: 'https://multicalc.site/ygpa-to-cgpa',
        };
      case 'total':
        return {
          title: 'YGPA to Total Marks Calculator | MultiCalc',
          description:
            'Convert your YGPA into total marks and percentage in just seconds. A simple and accurate YGPA to Total Marks Calculator for students.',
          keywords:
            'ygpa to total marks, marks percentage calculator, cgpa to marks converter, student marks calculator, ygpa calculator',
          canonical: 'https://multicalc.site/ygpa-to-total-marks',
        };
      default:
        return {
          title: 'Marks Calculators | MultiCalc',
          description:
            'Effortlessly convert your YGPA to CGPA or total marks using our easy online marks calculators — accurate and student-friendly tools.',
          keywords:
            'marks calculator, ygpa to cgpa, cgpa to marks, total marks calculator, percentage calculator, multicalc',
          canonical: 'https://multicalc.site/marks-calculators',
        };
    }
  };

  const seo = getPageSEO();

  // --- Calculation Logic ---
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

  // YGPA to Total Marks
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
    <div className="py-20 md:py-15">
      {/* Dynamic SEO Meta Tags */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />

        {/* Social Share (Open Graph + Twitter) */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:site_name" content="MultiCalc" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://multicalc.site/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Container>
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4 font-synonym">
            Marks Calculators
          </h1>
          <p className="text-muted-foreground text-center font-satoshi mb-8">
            Effortlessly convert your (YGPA) to CGPA or calculate <br /> your
            total marks and percentage in just a few clicks.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeTab === 'cgpa' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${
                  activeTab === 'cgpa'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveTab('cgpa')}
              >
                YGPA to CGPA
              </Button>
              <Button
                variant={activeTab === 'total' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeTab === 'total'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveTab('total')}
              >
                YGPA to Total Marks
              </Button>
            </div>
          </div>
        </div>

        {/* --- Tab: YGPA to CGPA --- */}
        {activeTab === 'cgpa' && (
          <div
            className="max-w-md mx-auto border rounded-lg p-6 mt-6"
            data-aos="fade-up"
          >
            <h2 className="text-lg text-center font-bold font-synonym mb-2">
              YGPA to CGPA Converter
            </h2>
            <p className="text-muted-foreground text-center font-satoshi mb-4 text-sm">
              Convert your Yearly Grade Point Average to <br /> Cumulative Grade
              Point Average.
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
            {error && <div className="text-red-600 text-sm mb-3">{error}</div>}
            <div className="flex gap-2">
              <Button onClick={handleConvertCgpa}>Convert</Button>
              <Button variant="secondary" onClick={handleResetCgpa}>
                Reset
              </Button>
            </div>
          </div>
        )}

        {/* --- Tab: YGPA to Total Marks --- */}
        {activeTab === 'total' && (
          <div
            className="max-w-md mx-auto border rounded-lg p-6 mt-6"
            data-aos="fade-up"
          >
            <h2 className="text-lg font-bold mb-2 font-synonym text-center">
              YGPA to Total Marks
            </h2>
            <p className="text-muted-foreground mb-4 text-sm text-center font-satoshi">
              Convert your YGPA into total marks and percentage.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label
                  htmlFor="ygpa2"
                  className="block text-sm font-medium mb-1"
                >
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
                <label
                  htmlFor="subjects"
                  className="block text-sm font-medium mb-1"
                >
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
                <label
                  htmlFor="percentage"
                  className="block text-sm font-medium mb-1"
                >
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
                <label
                  htmlFor="totalMarks"
                  className="block text-sm font-medium mb-1"
                >
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
            {error && <div className="text-red-600 text-sm mb-3">{error}</div>}
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
