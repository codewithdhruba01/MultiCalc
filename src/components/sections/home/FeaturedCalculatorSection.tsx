import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function FeaturedCalculatorSection() {
  const featuredCalculators = [
    {
      title: 'Age Calculator',
      description:
        'Calculate your exact age in years, months, days, hours, minutes, and seconds',
      icon: <Calendar className="h-10 w-10 text-black" />,
      link: '/age-calculator',
      featured: true,
    },
  ];

  return (
    <section className="border-b-4 border-black bg-[#F0C020]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24" data-aos="zoom-in">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-outfit font-bold uppercase tracking-widest text-xs">
              Spotlight
            </p>
            <h2 className="mt-3 font-outfit font-black uppercase tracking-tighter leading-[0.95] text-4xl sm:text-6xl">
              Featured calculator
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-[#D02020] border-2 border-black" />
            <div className="h-4 w-4 bg-white border-2 border-black rotate-45" />
            <div className="h-4 w-4 bg-[#1040C0] border-2 border-black bauhaus-triangle" />
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <div className="relative border-4 border-black bg-white shadow-[8px_8px_0px_0px_black] p-6 sm:p-8">
            {/* Corner decoration */}
            <div className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[#D02020] border-2 border-black" />

            <div className="flex items-start gap-5">
              <div className="shrink-0 grid place-items-center h-16 w-16 rounded-full bg-[#F0C020] border-4 border-black shadow-[4px_4px_0px_0px_black]">
                {featuredCalculators[0].icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-outfit font-black uppercase tracking-tight text-2xl">
                  {featuredCalculators[0].title}
                </h3>
                <p className="mt-2 font-outfit font-medium leading-relaxed text-base">
                  {featuredCalculators[0].description}
                </p>
                <div className="mt-6">
                  <Link to={featuredCalculators[0].link} className="bauhaus-focus-ring">
                    <span className="inline-flex items-center gap-3 border-4 border-black bg-[#1040C0] px-6 py-3 font-outfit font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_black] transition duration-200 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                      Try now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
