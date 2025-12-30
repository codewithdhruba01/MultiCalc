import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default function FeaturedCalculatorSection() {
  const featuredCalculators = [
    {
      title: 'Age Calculator',
      description:
        'Calculate your exact age in years, months, days, hours, minutes, and seconds',
      icon: <Calendar className="h-10 w-10 text-primary" />,
      link: '/age-calculator',
      featured: true,
    },
  ];

  return (
    <section className="mb-16" data-aos="zoom-in">
      <h2 className="text-3xl font-synonym font-bold mb-8 text-center">
        Featured Calculator
      </h2>
      <div className="max-w-xl mx-auto">
        <Card className="transition-all hover:shadow-lg border-primary/30">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full">
              {featuredCalculators[0].icon}
            </div>
            <CardTitle className="text-2xl font-synonym">
              {featuredCalculators[0].title}
            </CardTitle>
            <CardDescription className="text-base font-satoshi">
              {featuredCalculators[0].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to={featuredCalculators[0].link}>
              <button className="bg-indigo-500 text-white font-bold px-6 py-2 rounded-md shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_black] dark:hover:shadow-[1px_1px_0px_black] transition-all duration-200">
                Try Now
              </button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
