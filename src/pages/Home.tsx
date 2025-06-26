import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Calculator, Percent, Calendar, CreditCard, Ruler, BarChart3 } from 'lucide-react'

export default function Home() {
  const calculatorCategories = [
    {
      title: 'Basic Calculators',
      description: 'Standard and scientific calculators for everyday use',
      icon: <Calculator className="h-12 w-12 text-primary" />,
      link: '/basic-calculators',
      calculators: ['Basic Calculator', 'Scientific Calculator', 'Percentage Calculator']
    },
    {
      title: 'Financial Calculators',
      description: 'Tools for financial planning and calculations',
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      link: '/financial-calculators',
      calculators: ['Loan Calculator', 'Currency Converter']
    },
    {
      title: 'Health Calculators',
      description: 'Calculate health metrics and statistics',
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      link: '/health-calculators',
      calculators: ['BMI Calculator']
    },
    {
      title: 'Math Calculators',
      description: 'Advanced mathematical tools and converters',
      icon: <Percent className="h-12 w-12 text-primary" />,
      link: '/math-calculators',
      calculators: ['Unit Converter', 'Age Calculator']
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
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
            Multi-Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your one-stop solution for all calculation needs. Simple, fast, and accurate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
        <section className="mb-16">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Calculator Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculatorCategories.map((category, index) => (
              <Link to={category.link} key={index}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      {category.icon}
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {category.calculators.map((calc, i) => (
                        <li key={i}>{calc}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Calculators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                Simple, intuitive interface designed for quick calculations without any hassle.
              </p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Ruler className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accurate Results</h3>
              <p className="text-muted-foreground">
                Precise calculations you can rely on for personal, educational, or professional use.
              </p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Categories</h3>
              <p className="text-muted-foreground">
                From basic math to finance, health, and conversions - we've got all your calculation needs covered.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Calculate?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore our range of calculators and simplify your calculations today. No sign-up required!
          </p>
          <Link 
            to="/basic-calculators" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90"
          >
            Start Calculating Now
          </Link>
        </section>
      </Container>
    </div>
  )
}