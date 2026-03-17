import {
  Calculator,
  Calendar,
  Ruler,
} from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="border-b-4 border-black bg-[#D02020] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-outfit font-bold uppercase tracking-widest text-xs text-white/90">
              Benefits
            </p>
            <h2
              className="mt-3 font-outfit font-black uppercase tracking-tighter leading-[0.95] text-4xl sm:text-6xl"
              data-aos="fade-up"
            >
              Why choose our calculators?
            </h2>
          </div>
          <p
            className="max-w-xl font-outfit font-medium text-base sm:text-lg leading-relaxed text-white/90"
            data-aos="fade-up"
          >
            Smart tools for math, finance, health, and advanced needs—built for speed and clarity.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'Easy to use',
              body: 'Simple, intuitive interface designed for quick calculations without any hassle.',
              icon: <Calculator className="h-7 w-7 text-black" />,
              deco: '#F0C020',
            },
            {
              title: 'Multiple categories',
              body: "From basic math to finance, health, and conversions—we've got you covered.",
              icon: <Calendar className="h-7 w-7 text-black" />,
              deco: '#1040C0',
            },
            {
              title: 'Accurate results',
              body: 'Precise calculations you can rely on for personal, educational, or professional use.',
              icon: <Ruler className="h-7 w-7 text-black" />,
              deco: '#121212',
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="relative border-4 border-black bg-white text-black shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 transition duration-200 ease-out hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 100}
            >
              {/* Corner decoration */}
              <div
                className="absolute -right-2 -top-2 h-5 w-5 border-2 border-black"
                style={{
                  background: card.deco,
                  transform: i === 2 ? 'rotate(45deg)' : undefined,
                  borderRadius: i === 0 ? '9999px' : undefined,
                }}
              />

              <div className="h-14 w-14 border-4 border-black bg-[#F0C020] shadow-[4px_4px_0px_0px_black] grid place-items-center">
                {card.icon}
              </div>
              <h3 className="mt-6 font-outfit font-black uppercase tracking-tight text-xl">
                {card.title}
              </h3>
              <p className="mt-2 font-outfit font-medium text-sm leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
