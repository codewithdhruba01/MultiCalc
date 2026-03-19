import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="relative border-b-4 border-black bg-[#F0C020] text-black overflow-hidden"
    >
      {/* Decorative shapes (50% opacity) */}
      <div className="pointer-events-none absolute -left-20 -top-16 h-64 w-64 rounded-full bg-white/50 border-4 border-black" />
      <div className="pointer-events-none absolute -right-24 -bottom-20 h-72 w-72 bg-[#1040C0]/50 border-4 border-black rotate-45" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="relative border-4 border-black bg-[#F0F0F0] shadow-[8px_8px_0px_0px_black] p-8 sm:p-12">
          <div className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[#D02020] border-2 border-black" />

          <div className="flex items-end justify-between gap-8 flex-wrap" data-aos="zoom-in">
            <div className="max-w-2xl">
              <p className="font-outfit font-bold uppercase tracking-widest text-xs">
                Final call
              </p>
              <h2 className="mt-4 font-outfit font-black uppercase tracking-tighter leading-[0.9] text-4xl sm:text-6xl">
                Solve. Simplify.
                <br />
                Succeed.
              </h2>
              <p className="mt-5 font-outfit font-medium text-base sm:text-lg leading-relaxed">
                Start with hassle-free calculations today—fast, direct, and built for focus.
              </p>
            </div>

            <Link to="/basic-calculators" className="bauhaus-focus-ring">
              <span className="inline-flex items-center gap-3 border-4 border-black bg-[#D02020] px-7 py-4 font-outfit font-bold uppercase tracking-wider text-white shadow-[6px_6px_0px_0px_black] transition duration-200 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Start now
                <ArrowRight className="h-6 w-6" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
