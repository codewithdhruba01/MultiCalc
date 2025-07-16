import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Calculator, Percent, Calendar, CreditCard, Ruler, BarChart3, Globe, ArrowRight } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const calculatorCategories = [
    {
      title: 'Basic Calculators',
      description: 'Standard and scientific calculators for everyday use',
      icon: <Calculator className="h-12 w-12 text-white" />,
      link: '/basic-calculators',
      calculators: ['Basic Calculator', 'Scientific Calculator', 'Percentage Calculator'],
      gradient: 'from-blue-500 to-indigo-600',
      hoverEffect: 'hover:shadow-blue-200 dark:hover:shadow-blue-900'
    },
    {
      title: 'Financial Calculators',
      description: 'Tools for financial planning and calculations',
      icon: <CreditCard className="h-12 w-12 text-white" />,
      link: '/financial-calculators',
      calculators: ['Loan Calculator', 'Currency Converter', 'Price to Weight Calculator'],
      gradient: 'from-emerald-500 to-teal-600',
      hoverEffect: 'hover:shadow-emerald-200 dark:hover:shadow-emerald-900'
    },
    {
      title: 'Health Calculators',
      description: 'Calculate health metrics and statistics',
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      link: '/health-calculators',
      calculators: ['BMI Calculator', 'Pregnancy Calculator', 'Period Calculator'],
      gradient: 'from-rose-500 to-pink-600',
      hoverEffect: 'hover:shadow-rose-200 dark:hover:shadow-rose-900'
    },
    {
      title: 'Math Calculators',
      description: 'Advanced mathematical tools and converters',
      icon: <Percent className="h-12 w-12 text-white" />,
      link: '/math-calculators',
      calculators: ['Unit Converter', 'Age Calculator'],
      gradient: 'from-amber-500 to-orange-600',
      hoverEffect: 'hover:shadow-amber-200 dark:hover:shadow-amber-900'
    }
  ]

  const featuredCalculators = [
    {
      title: 'Age Calculator',
      description: 'Calculate your exact age in years, months, days, hours, minutes, and seconds',
      icon: <Calendar className="h-10 w-10 text-primary" />,
      link: '/age-calculator',
      featured: true
    }
  ]

  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl" data-aos="fade-up">
            Multi Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8" data-aos="fade-up">
            Your one-stop solution for all calculation needs. Simple, fast, and accurate.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            <Link
              to="/basic-calculators"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-lg font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Featured Calculator */}
        <section className="mb-16" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Calculator</h2>
          <div className="max-w-xl mx-auto">
            <Link to={featuredCalculators[0].link}>
              <Card className="transition-all hover:shadow-lg border-primary/30">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full">
                    {featuredCalculators[0].icon}
                  </div>
                  <CardTitle className="text-2xl">{featuredCalculators[0].title}</CardTitle>
                  <CardDescription className="text-lg">{featuredCalculators[0].description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-md font-medium text-primary-foreground hover:bg-primary/90">
                    Try Now
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">Calculator Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculatorCategories.map((category, index) => (
              <Link to={category.link} key={index}>
                <Card
                  className={`h-full transition-all hover:shadow-xl ${category.hoverEffect} transform hover:-translate-y-1 duration-300`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`bg-gradient-to-br ${category.gradient} rounded-t-lg p-6 text-center`}>
                    <div className="mx-auto mb-2 bg-white/20 p-4 rounded-full inline-block">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="space-y-2">
                      {category.calculators.map((calc, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                          <span>{calc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Why Choose Our Calculators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-6 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-white/90">Simple, intuitive interface designed for quick calculations without any hassle.</p>
            </div>

            <div className="group text-center p-6 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Categories</h3>
              <p className="text-white/90">From basic math to finance, health, and conversions — we've got all your calculation needs covered.</p>
            </div>

            <div className="group text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Ruler className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-white/90">Precise calculations you can rely on for personal, educational, or professional use.</p>
            </div>
          </div>
        </section>

     {/* CTA Section */}
        <section
  className="relative mb-16 rounded-xl overflow-hidden bg-gradient-to-br from-rose-500 to-pink-600 text-white text-center py-20 px-6 shadow-lg"
  data-aos="zoom-in"
>
  <div className="max-w-4xl mx-auto">
    <h2
      className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
      style={{ letterSpacing: '-0.02em' }}
    >
      Build. Customize.<br className="hidden md:inline" />Deploy Quickly.
    </h2>
    <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
      Start With <span className="text-white/70">Multicalculator Today</span>
    </p>
    <Link
  to="/basic-calculators"
  className="group relative inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
>
  <span
    className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base cursor-pointer transition-all duration-300 ease-in-out group-hover:ml-2 group-hover:shadow-md group-hover:shadow-rose-300"
  >
    <Globe className="w-6 h-6 animate-spin-slow" />
    Start Now
  </span>
  <span
    className="bg-gray-100 group-hover:bg-gray-200 p-2 rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:shadow"
  >
    <ArrowRight className="w-4 h-4 text-rose-500 transition-transform duration-300 group-hover:translate-x-0.5" />
  </span>
</Link>

  </div>

  {/* Optional Decorative Shape */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M1024,0 L0,1024 L1024,1024 Z"
        fill="white"
        fillOpacity="0.2"
      />
    </svg>
  </div>
</section>

        {/* Testimonial Section */}
        <section className="mb-16">
  <h2
    className="text-3xl font-bold mb-12 text-center"
    data-aos="fade-up"
  >
    What Our Users Say
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        quote: "This site helped me plan my budget effortlessly. Highly recommend!",
        name: "Ravi Sharma",
        company: "FinEdge Solutions",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        quote: "The calculators are fast and super accurate. Love the clean design.",
        name: "Anjali Mehra",
        company: "MathGenius",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        quote: "No clutter, no ads, just smooth tools that work every time.",
        name: "Soham Roy",
        company: "QuickCalc Co.",
        image: "https://randomuser.me/api/portraits/men/54.jpg"
      }
    ].map((testimonial, i) => (
      <div
        key={i}
        className="group relative p-6 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay={i * 150}
      >
        <svg
          className="absolute top-4 left-4 w-8 h-8 text-primary opacity-20 group-hover:opacity-40 transition-opacity"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.17 6A5.995 5.995 0 002 12c0 3.31 2.69 6 6 6h2v-2H8c-2.21 0-4-1.79-4-4s1.79-4 4-4h1V6H7.17zm9 0A5.995 5.995 0 0011 12c0 3.31 2.69 6 6 6h2v-2h-2c-2.21 0-4-1.79-4-4s1.79-4 4-4h1V6h-1.83z" />
        </svg>
        <p className="text-muted-foreground italic mb-6 mt-4">
          “{testimonial.quote}”
        </p>
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <h4 className="font-bold text-primary">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  </Container>
    </div>
  )
}