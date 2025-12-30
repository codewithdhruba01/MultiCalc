import {
  Calculator,
  Calendar,
  Ruler,
} from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="mb-16">
      <h2
        className="text-3xl font-synonym font-bold mb-5 text-center"
        data-aos="fade-up"
      >
        Why Choose Our Calculators?
      </h2>

      <p
        className="text-xl text-gray-500 font-supreme max-w-3xl mx-auto mb-12 text-center"
        data-aos="fade-up"
      >
        Explore a wide range of smart calculators tailored for math,
        finance, health, and advanced needs—all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div
          className="group bg-gradient-to-br from-blue-800 to-indigo-500 text-white
             rounded-2xl border-[2px] border-black dark:border-white
             shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff]
             p-8 transition-all duration-500
             hover:-translate-y-2 hover:-translate-x-2
             hover:shadow-[10px_10px_0px_#000] dark:hover:shadow-[10px_10px_0px_#fff]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-white/30 dark:bg-black/20 border border-white/40 dark:border-white/30 rounded-xl w-14 h-14 flex items-center justify-center mb-4 shadow-[3px_3px_0px_rgba(0,0,0,0.4)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.2)]">
            <Calculator className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2 font-outfit">
            Easy to Use
          </h3>
          <p className="text-white/90 font-satoshi text-sm leading-relaxed">
            Simple, intuitive interface designed for quick calculations
            without any hassle.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="group bg-gradient-to-br from-pink-800 to-rose-500 text-white
             rounded-2xl border-[2px] border-black dark:border-white
             shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff]
             p-8 transition-all duration-500
             hover:-translate-y-2 hover:-translate-x-2
             hover:shadow-[10px_10px_0px_#000] dark:hover:shadow-[10px_10px_0px_#fff]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-white/30 dark:bg-black/20 border border-white/40 dark:border-white/30 rounded-xl w-14 h-14 flex items-center justify-center mb-4 shadow-[3px_3px_0px_rgba(0,0,0,0.4)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.2)]">
            <Calendar className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2 font-outfit">
            Multiple Categories
          </h3>
          <p className="text-white/90 font-satoshi text-sm leading-relaxed">
            From basic math to finance, health, and conversions — we've got
            all your calculation needs covered.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="group bg-gradient-to-br from-green-800 to-emerald-500 text-white
             rounded-2xl border-[2px] border-black dark:border-white
             shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff]
             p-8 transition-all duration-500
             hover:-translate-y-2 hover:-translate-x-2
             hover:shadow-[10px_10px_0px_#000] dark:hover:shadow-[10px_10px_0px_#fff]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-white/30 dark:bg-black/20 border border-white/40 dark:border-white/30 rounded-xl w-14 h-14 flex items-center justify-center mb-4 shadow-[3px_3px_0px_rgba(0,0,0,0.4)] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.2)]">
            <Ruler className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2 font-outfit">
            Accurate Results
          </h3>
          <p className="text-white/90 font-satoshi text-sm leading-relaxed">
            Precise calculations you can rely on for personal, educational,
            or professional use.
          </p>
        </div>
      </div>
    </section>
  );
}
