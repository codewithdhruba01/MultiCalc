import { Link } from 'react-router-dom';
import {
  Calculator,
  Percent,
  CreditCard,
  BarChart3,
} from 'lucide-react';

export default function CalculatorCategoriesSection() {
  const calculatorCategories = [
    {
      title: 'Math Calculators',
      description: 'Standard and scientific calculators for everyday use',
      icon: <Calculator className="h-12 w-12 text-white" />,
      link: '/basic-calculators',
      calculators: [
        'Basic Calculator',
        'Scientific Calculator',
        'Percentage Calculator',
      ],
      gradient: 'from-blue-500 to-indigo-600',
      hoverEffect: 'hover:shadow-blue-200 dark:hover:shadow-blue-900',
    },
    {
      title: 'Financial Calculators',
      description: 'Tools for financial planning and calculations',
      icon: <CreditCard className="h-12 w-12 text-white" />,
      link: '/financial-calculators',
      calculators: [
        'Loan Calculator',
        'FD Calculator',
        'NPV Calculator',
        'Price to Weight Calculator',
        'ROI Calculator',
      ],
      gradient: 'from-emerald-500 to-teal-600',
      hoverEffect: 'hover:shadow-emerald-200 dark:hover:shadow-emerald-900',
    },
    {
      title: 'Health Calculators',
      description: 'Calculate health metrics and statistics',
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      link: '/health-calculators',
      calculators: [
        'BMI Calculator',
        'Pregnancy Calculator',
        'Period Calculator',
        'Protein Calculator',
        'BMR Calculator',
      ],
      gradient: 'from-rose-500 to-pink-600',
      hoverEffect: 'hover:shadow-rose-200 dark:hover:shadow-rose-900',
    },
    {
      title: 'Advance Calculators',
      description: 'Advanced mathematical tools and converters',
      icon: <Percent className="h-12 w-12 text-white" />,
      link: '/math-calculators',
      calculators: ['Unit Converter', 'Pace Calculator'],
      gradient: 'from-amber-500 to-orange-600',
      hoverEffect: 'hover:shadow-amber-200 dark:hover:shadow-amber-900',
    },
  ];

  return (
    <section className="mb-16">
      <h2
        className="text-3xl font-synonym font-bold mb-10 text-center"
        data-aos="zoom-in"
      >
        Calculator Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {calculatorCategories.map((category, index) => (
          <Link to={category.link} key={index}>
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`
        relative flex flex-col justify-between h-full p-6 rounded-2xl
        bg-gradient-to-br ${category.gradient}
        border-[3px] border-black dark:border-white
        shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#fff]
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100
        hover:-translate-y-2 hover:-translate-x-2
        hover:shadow-[12px_12px_0px_#000] dark:hover:shadow-[12px_12px_0px_#fff]
        hover:scale-[1.02]
        ytext-white cursor-pointer
      `}
            >
              {/* Top Section */}
              <div className="flex flex-col items-center text-white text-center mb-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150">
                <div className="p-4 bg-white/30 dark:bg-black/20 rounded-full mb-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 group-hover:rotate-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight font-synonym ">
                  {category.title}
                </h3>
                <p className="text-sm opacity-80 font-satoshi mt-1 text-center">
                  {category.description}
                </p>
              </div>

              {/* Bottom Section - Calculators List */}
              <ul className="text-white mt-auto space-y-2 text-sm font-semibold list-disc list-inside">
                {category.calculators.map((calc, i) => (
                  <li
                    key={i}
                    className="pl-10 marker:text-violet-700 dark:marker:text-white"
                  >
                    {calc}
                  </li>
                ))}
              </ul>
              <div className="flex-grow"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
