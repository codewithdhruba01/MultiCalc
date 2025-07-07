import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Calculator, Percent, Calendar, CreditCard, Ruler, BarChart3 } from 'lucide-react'

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
      calculators: ['Loan Calculator', 'Currency Converter'],
      gradient: 'from-emerald-500 to-teal-600',
      hoverEffect: 'hover:shadow-emerald-200 dark:hover:shadow-emerald-900'
    },
    {
      title: 'Health Calculators',
      description: 'Calculate health metrics and statistics',
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      link: '/health-calculators',
      calculators: ['BMI Calculator'],
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
          <h1
            className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Multi Calculator
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
          >
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
            {/* Feature 1 */}
            <div
              className="group text-center p-6 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-white/90">
                Simple, intuitive interface designed for quick calculations without any hassle.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="group text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Ruler className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-white/90">
                Precise calculations you can rely on for personal, educational, or professional use.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="group text-center p-6 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Categories</h3>
              <p className="text-white/90">
                From basic math to finance, health, and conversions — we've got all your calculation needs covered.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-8 bg-muted rounded-lg" data-aos="zoom-in">
          <h2 className="text-2xl font-bold mb-4">Ready to Calculate?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore our range of calculators and simplify your calculations today. No sign-up required!
          </p>
          <Link
            to="/basic-calculators"
            className="inline-flex items-center justify-center px-8 py-3 font-bold border border-[#2563EB] text-[#3B82F6] rounded-lg hover:bg-[#2563EB] hover:text-white transition-all duration-300"
          >
            Start Calculating Now
          </Link>
        </section>
      </Container>
    </div>
  )
}