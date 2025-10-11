import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import BMICalculator from '@/components/calculators/BMICalculator';
import PregnancyCalculator from '@/components/calculators/PregnancyCalculator';
import PeriodCalculator from '@/components/calculators/PeriodCalculator';
import ProteinCalculator from '@/components/calculators/ProteinCalculator';
import BMRCalculator from '@/components/calculators/BMRCalculator';

export default function HealthCalculators() {
  const [activeCalculator, setActiveCalculator] = useState<
    'bmi' | 'pregnancy' | 'period' | 'protein' | 'bmr'
  >('bmi');

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  // Dynamic SEO content based on active calculator
  const seoContent = {
    bmi: {
      title: 'BMI Calculator | Check Your Body Mass Index Online',
      description:
        'Use our free BMI Calculator to easily calculate your Body Mass Index. Track your health and fitness goals accurately.',
      keywords:
        'BMI calculator, body mass index, health calculator, fitness calculator, weight management',
    },
    pregnancy: {
      title: 'Pregnancy Calculator | Estimate Your Due Date',
      description:
        'Calculate your due date and pregnancy progress instantly with our easy-to-use Pregnancy Calculator.',
      keywords:
        'pregnancy calculator, due date calculator, maternity tools, health calculators',
    },
    period: {
      title: 'Period Calculator | Track Your Menstrual Cycle',
      description:
        'Track your menstrual cycle and predict your next period date with our smart Period Calculator.',
      keywords:
        'period calculator, menstrual tracker, ovulation tracker, women health tools',
    },
    protein: {
      title: 'Protein Intake Calculator | Daily Protein Needs',
      description:
        'Find out how much protein you need daily based on your body weight and fitness goals with our Protein Calculator.',
      keywords:
        'protein calculator, nutrition calculator, diet calculator, fitness tools',
    },
    bmr: {
      title: 'BMR Calculator | Basal Metabolic Rate Calculator',
      description:
        'Estimate your Basal Metabolic Rate (BMR) to understand your daily calorie needs and manage your fitness goals.',
      keywords:
        'BMR calculator, calorie calculator, metabolism calculator, health tools',
    },
  };

  const { title, description, keywords } = seoContent[activeCalculator];

  return (
    <div className="py-20 md:py-15" data-aos="fade-up">
      {/* Dynamic Meta Tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://yourdomain.com/health-calculators/${activeCalculator}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/health-calculators/${activeCalculator}`} />
        <meta property="og:site_name" content="Your Website Name" />
      </Helmet>

      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center font-synonym">
            Health Calculators
          </h1>
          <p className="text-muted-foreground text-center font-satoshi mb-8">
            Tools for calculating health metrics and statistics
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={activeCalculator === 'bmi' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${
                  activeCalculator === 'bmi'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('bmi')}
              >
                BMI
              </Button>
              <Button
                variant={
                  activeCalculator === 'pregnancy' ? 'default' : 'outline'
                }
                className={`rounded-none border-l-0 border-r-0 px-4 py-2 ${
                  activeCalculator === 'pregnancy'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('pregnancy')}
              >
                Pregnancy
              </Button>
              <Button
                variant={activeCalculator === 'period' ? 'default' : 'outline'}
                className={`rounded-l-none rounded-r-none px-4 py-2 ${
                  activeCalculator === 'period'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('period')}
              >
                Period
              </Button>
              <Button
                variant={activeCalculator === 'protein' ? 'default' : 'outline'}
                className={`rounded-l-none rounded-r-none px-4 py-2 ${
                  activeCalculator === 'protein'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('protein')}
              >
                Protein
              </Button>
              <Button
                variant={activeCalculator === 'bmr' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${
                  activeCalculator === 'bmr'
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                onClick={() => setActiveCalculator('bmr')}
              >
                BMR
              </Button>
            </div>
          </div>

          {/* Render Selected Calculator */}
          <div className="transition-all duration-300">
            {activeCalculator === 'bmi' && <BMICalculator />}
            {activeCalculator === 'pregnancy' && <PregnancyCalculator />}
            {activeCalculator === 'period' && <PeriodCalculator />}
            {activeCalculator === 'protein' && <ProteinCalculator />}
            {activeCalculator === 'bmr' && <BMRCalculator />}
          </div>
        </div>
      </Container>
    </div>
  );
}
