import { Link } from 'react-router-dom';
import { ArrowBigRight } from 'lucide-react';
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
    <section className="mb-20 mt-20 text-center">
      <button className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full text-sm mb-10 font-supreme">
        <span className="animate-blink">🟢 </span>
        Now it is time to calculate →
      </button>

      <h1
        className="text-5xl md:text-7xl font-excon font-bold mb-5"
        data-aos="fade-up"
      >
        Your all-in-one <br /> calculator platform
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="block italic font-light font-serif text-gray-500 dark:text-gray-500"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </h1>

      <p
        className="text-lg text-gray-600 dark:text-gray-400 mb-9 max-w-2xl mx-auto font-satoshi"
        data-aos="fade-up"
      >
        All your calculations in one place. From basic math to <br />{' '}
        complex formulas, your one-stop calculator hub. <br />{' '}
        <span className=" text-xl text-gray-900 dark:text-gray-300 font-outfit">
          20+ calculator are available.
        </span>
      </p>

      <div
        className="flex flex-wrap gap-4 mb-9 justify-center"
        data-aos="zoom-in"
      >
        <Link to="/basic-calculators">
          <button className="relative flex items-center px-6 py-3 overflow-hidden font-poppins font-medium transition-all bg-indigo-500 rounded-md group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </button>
        </Link>

        <Link to="/about">
          <button className="flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Learn More
            <ArrowBigRight className="w-5 h-5" />
          </button>
        </Link>
      </div>

      {/* Trusted Users */}
      <div
        className="flex items-center justify-center gap-3 mt-8"
        data-aos="zoom-in"
      >
        <div className="flex -space-x-3">
          {[
            '/testimoni/img10.jpeg',
            '/testimoni/img11.jpeg',
            '/testimoni/img8.jpeg',
            '/testimoni/img1.jpeg',
            '/testimoni/img3.jpeg',
            '/testimoni/img2.jpeg',
            '/testimoni/img5.jpeg',
          ].map((src, index) => (
            <img
              key={index}
              className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900
                         transition-transform transform-gpu ease-in-out duration-500
                         hover:scale-125 hover:z-20 hover:shadow-lg cursor-pointer"
              src={src}
              alt={`User ${index + 1}`}
            />
          ))}
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
          Trusted by 100+ users
        </span>
      </div>
    </section>
  );
}
