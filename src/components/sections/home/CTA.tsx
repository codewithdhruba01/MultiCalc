import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="relative mb-16 rounded-xl overflow-hidden pattern-bg text-white text-center py-20 px-6 shadow-lg"
      data-aos="zoom-in"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-excon font-bold tracking-tight mb-4"
          style={{ letterSpacing: '-0.02em' }}
        >
          Solve, Simplify, <br className="hidden md:inline" />
          Succeed
        </h2>
        <p className="text-base font-satoshi md:text-base mb-4 text-white/90 leading-relaxed">
          Start With hassle-free{' '}
          <span className="text-white/80 font-satoshi">Calculate</span>{' '}
          Today.
        </p>
        <Link
          to="/basic-calculators"
          className="group relative inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <span className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base cursor-pointer transition-all duration-300 ease-in-out group-hover:ml-2 group-hover:shadow-md group-hover:shadow-rose-300">
            <Globe className="mr-2 h-5 w-5 animate-spin-slow" />
            Start Now
          </span>
          <span className="bg-gray-100 group-hover:bg-gray-200 p-2 rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:shadow">
            <ArrowRight className="w-4 h-4 text-rose-500 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
