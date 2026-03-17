import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  // Rotating Words
  const words = ['effective', 'powerful', 'fast', 'simple', 'reliable'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="flex justify-center">
          {/* Center: Type + CTAs */}
          <div className="relative w-full max-w-12xl border-4 border-black bg-[#F0F0F0] shadow-[8px_8px_0px_0px_black] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#D02020] border-2 border-black" />
              <div className="h-3 w-3 bg-[#F0C020] border-2 border-black" />
              <div className="h-3 w-3 rounded-full bg-[#1040C0] border-2 border-black" />
              <span className="ml-2 text-xs font-bold tracking-widest uppercase">
                MultiCalc / Bauhaus Edition
              </span>
            </div>

            <h1
              className="mt-8 font-outfit font-black uppercase tracking-tighter leading-[0.9] text-[2.75rem] sm:text-6xl lg:text-8xl"
              data-aos="fade-up"
            >
              Your all-in-one
              <br />
              calculator platform
              <span className="block mt-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-flex items-center gap-3"
                  >
                    <span className="inline-block h-4 w-4 bg-black" />
                    <span className="text-[#D02020]">{words[index]}</span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl font-outfit font-medium text-base sm:text-lg leading-relaxed"
              data-aos="fade-up"
            >
              All your calculations in one place—from basic math to complex formulas.
              <span className="block mt-2 font-bold uppercase tracking-wider">
                20+ calculators available.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4" data-aos="zoom-in">
              <Link to="/basic-calculators" className="bauhaus-focus-ring">
                <span className="inline-flex items-center gap-3 rounded-none border-4 border-black bg-[#D02020] px-6 py-3 font-outfit font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_black] transition duration-200 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                  Get started
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>

              <Link to="/about" className="bauhaus-focus-ring">
                <span className="inline-flex items-center gap-3 rounded-none border-4 border-black bg-white px-6 py-3 font-outfit font-bold uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_black] transition duration-200 ease-out hover:bg-[#E0E0E0] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                  Learn more
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>

            {/* Trusted Users */}
            <div className="mt-10 flex flex-wrap items-center gap-4" data-aos="zoom-in">
              <div className="flex -space-x-3">
                {[
                  '/testimoni/img10.jpeg',
                  '/testimoni/img11.jpeg',
                  '/testimoni/img8.jpeg',
                  '/testimoni/img1.jpeg',
                  '/testimoni/img3.jpeg',
                  '/testimoni/img2.jpeg',
                  '/testimoni/img5.jpeg',
                ].map((src, i) => (
                  <img
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-black bg-white grayscale transition duration-200 ease-out hover:grayscale-0"
                    src={src}
                    alt={`User ${i + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
              <span className="text-sm font-bold uppercase tracking-wider">
                Trusted by 100+ users
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
