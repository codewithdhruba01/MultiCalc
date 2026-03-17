import { Link } from 'react-router-dom';
import {
  Calculator,
  Percent,
  CreditCard,
  BarChart3,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CalculatorCategoriesSection() {
  const calculatorCategories = [
    {
      title: 'Math Calculators',
      description: 'Standard and scientific calculators for everyday use',
      icon: <Calculator className="h-8 w-8 text-white" />,
      link: '/basic-calculators',
      calculators: [
        'Basic Calculator',
        'Scientific Calculator',
        'Percentage Calculator',
      ],
      bg: '#1040C0',
      text: 'text-white',
    },
    {
      title: 'Financial Calculators',
      description: 'Tools for financial planning and calculations',
      icon: <CreditCard className="h-8 w-8 text-white" />,
      link: '/financial-calculators',
      calculators: [
        'Loan Calculator',
        'FD Calculator',
        'NPV Calculator',
        'Price to Weight Calculator',
        'ROI Calculator',
      ],
      bg: '#D02020',
      text: 'text-white',
    },
    {
      title: 'Health Calculators',
      description: 'Calculate health metrics and statistics',
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      link: '/health-calculators',
      calculators: [
        'BMI Calculator',
        'Pregnancy Calculator',
        'Period Calculator',
        'Protein Calculator',
        'BMR Calculator',
      ],
      bg: '#121212',
      text: 'text-white',
    },
    {
      title: 'Advance Calculators',
      description: 'Advanced mathematical tools and converters',
      icon: <Percent className="h-8 w-8 text-black" />,
      link: '/advance-calculators',
      calculators: ['Unit Converter', 'Pace Calculator'],
      bg: '#F0C020',
      text: 'text-black',
    },
  ];

  return (
    <section className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-outfit font-bold uppercase tracking-widest text-xs">
              Navigate
            </p>
            <h2
              className="mt-3 font-outfit font-black uppercase tracking-tighter leading-[0.95] text-4xl sm:text-6xl"
              data-aos="zoom-in"
            >
              Calculator categories
            </h2>
          </div>
          <p className="max-w-xl font-outfit font-medium text-base sm:text-lg leading-relaxed">
            Jump straight into what you need. Each category is a bold block—like a Bauhaus poster grid.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {calculatorCategories.map((category, index) => (
            <Link to={category.link} key={index} className="bauhaus-focus-ring">
              <motion.div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative h-full border-4 border-black shadow-[8px_8px_0px_0px_black] transition duration-200 ease-out hover:-translate-y-1"
                style={{ background: category.bg }}
                whileHover={{ translateY: -6 }}
              >
                {/* Corner decoration */}
                <div className="absolute -right-2 -top-2 h-4 w-4 border-2 border-black bg-white rotate-45" />

                <div className="p-6">
                  <div className="inline-flex items-center justify-center border-4 border-black bg-white/10 shadow-[4px_4px_0px_0px_black] h-14 w-14">
                    {category.icon}
                  </div>

                  <h3 className={`mt-5 font-outfit font-black uppercase tracking-tight text-xl ${category.text}`}>
                    {category.title}
                  </h3>
                  <p className={`mt-2 font-outfit font-medium text-sm leading-relaxed ${category.text} opacity-90`}>
                    {category.description}
                  </p>

                  <div className="mt-6 border-t-4 border-black pt-4">
                    <ul className={`space-y-2 font-outfit font-bold uppercase tracking-wide text-xs ${category.text}`}>
                      {category.calculators.map((calc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="inline-block h-2 w-2 rounded-full bg-white border-2 border-black group-hover:scale-110 transition duration-200" />
                          <span className="truncate">{calc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
