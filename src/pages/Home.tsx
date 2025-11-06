import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from '@/components/ui/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import {
  Calculator,
  Percent,
  Calendar,
  CreditCard,
  Ruler,
  BarChart3,
  Globe,
  ArrowRight,
  ArrowBigRight,
  Star,
  Quote,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Rotating Words
  const words = ['effective', 'powerful', 'fast', 'simple', 'reliable'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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

  const testimonials = [
    {
      id: 1,
      name: 'Abhishek Rajput',
      role: 'Software Engineer',
      image: '/testimoni/img1.jpeg',
      rating: 4,
      comment:
        'This website is good in terms of functionality. The only thing you can improve is the theme. Other than this you can give more theme options to the user. Overall the experience is good and smooth.',
    },
    {
      id: 2,
      name: 'Jaanvi Chouhan',
      role: 'CSE Student',
      image: '/testimoni/img2.jpeg',
      rating: 5,
      comment:
        'MultiCalc is really impressive! I found it very useful, and I love the clean and simple design it makes everything easy to use. Having so many calculators in one place is super convenient.',
    },
    {
      id: 3,
      name: 'Sanskruti D',
      role: 'BE Student',
      image: '/testimoni/img3.jpeg',
      rating: 5,
      comment:
        'I was very impressed with the MultiCal website. It offers a truly comprehensive suite of tools, The site is incredibly fast and responsive, making it a great resource for quick and efficient calculations. Highly recommended!',
    },
    {
      id: 4,
      name: 'Janani M',
      role: 'SDE @Zoho',
      image: '/testimoni/img4.jpeg',
      rating: 5,
      comment:
        'I have used the Multicalc platform. It is very smooth to use. It had wide range of calculators. Interesting to explore all in one place. With a Sleek UI and smooth UX MultiCalc is built very well.',
    },

    {
      id: 6,
      name: 'Priyadharshini S',
      role: 'SDE @Zoho',
      image: '/testimoni/img6.jpeg',
      rating: 5,
      comment:
        'I went through your Multicalc project, its really amazing in terms of both UI and functionality. the whole project is excellent, Kudos to the team for such a wonderful project.',
    },
    {
      id: 7,
      name: 'Aishika Biswas',
      role: 'Developer @Mekyek',
      image: '/testimoni/img7.jpeg',
      rating: 5,
      comment:
        'MultiCalc calculator site is s full package, for someone who needs every calculation at one place, this your place! The UI is simple and easy to use. Kudos to the team for such a wonderful project.',
    },
    {
      id: 8,
      name: 'Archana B',
      role: 'MTS @Zoho',
      image: '/testimoni/img12.jpeg',
      rating: 5,
      comment:
        'I like the way it have many calculations which includes health calcs too. This is a great work dhrubaraj! Congratulations. ',
    },
  ];

  return (
    <div className="py-8 md:py-12">
      <Container>
        <section className="mb-20 mt-20 text-center">
          <button className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full text-sm mb-10 font-supreme">
            <span className="animate-blink">🟢 </span>
            Now it is time to calculate →
          </button>

          {/* Title */}
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

          {/* Subtitle */}
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

            {/* Learn More Button */}
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

        {/* Featured Calculator */}
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

        {/* Calculator Categories */}
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
          {/* Spacer */}
          <div className="flex-grow"></div>
        </div>
      </Link>
    ))}
  </div>
</section>

        {/* Features Section */}
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
    Explore a wide range of smart calculators tailored for math, finance, health,
    and advanced needs—all in one place.
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
      <h3 className="text-lg font-bold mb-2 font-outfit">Easy to Use</h3>
      <p className="text-white/90 font-satoshi text-sm leading-relaxed">
        Simple, intuitive interface designed for quick calculations without any hassle.
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
      <h3 className="text-lg font-bold mb-2 font-outfit">Multiple Categories</h3>
      <p className="text-white/90 font-satoshi text-sm leading-relaxed">
        From basic math to finance, health, and conversions — we've got all your calculation needs covered.
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
      <h3 className="text-lg font-bold mb-2 font-outfit">Accurate Results</h3>
      <p className="text-white/90 font-satoshi text-sm leading-relaxed">
        Precise calculations you can rely on for personal, educational, or professional use.
      </p>
    </div>
  </div>
</section>


        {/* CTA Section */}
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
              <span className="text-white/80 font-satoshi">Multical</span>{' '}
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

        {/* Testimonial Section */}
        <section className={`py-20 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-excon font-bold mb-8 text-center">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-500 font-supreme max-w-3xl mx-auto mb-6">
                Here's what our happy user have to say about their experience.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-aos="fade-up"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={` 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Background Quote */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-16 h-16" />
                  </div>

                  {/* Profile */}
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4
                        className={`text-lg font-outfit font-bold 'text-white' : 'text-gray-900'}`}
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-sm font-supreme text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-poppins text-sm relative z-10">
                    "{testimonial.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-1 flex justify-center" data-aos="zoom-in">
          <Card className="max-w-md w-full text-center border border-indigo-300 dark:border-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-synonym font-bold">
                Share Your Experience
              </CardTitle>
              <CardDescription className="text-sm font-satoshi text-gray-600 dark:text-gray-400">
                We’d love to feature your story! Send us your testimonial.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:pati.dhrubaraj@outlook.com?subject=My%20MultiCalc%20Testimonial&body=Hi%20MultiCalc%20Team%2C%0D%0A%0D%0AHere%20is%20my%20testimonial%3A%0D%0A"
                className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-800 hover:shadow-lg transition"
              >
                Write Testimonial
              </a>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}