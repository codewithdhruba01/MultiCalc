import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Calculator, LayoutTemplate , Lightbulb, Zap } from 'lucide-react'

export default function About() {
  useEffect(() => {
    // Scroll to top when About page is mounted
    window.scrollTo(0, 0)

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="py-20 md:py-15">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-5xl font-excon font-bold mb-4 text-center"
            data-aos="fade-up"
          >
            About MultiCalc
          </h1>
          <p
            className="text-muted-foreground text-center mb-8 font-satoshi"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Learn more about our calculator website and its features
          </p>

          <div className="space-y-8">
            <section
              className="bg-muted p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center font-synonym">
                <Calculator className="h-6 w-6 mr-2 text-[#0181b4]" />
                Our Mission
              </h2>
              <p className="mb-4 font-satoshi ">
                MultiCalc was created with a simple mission: to provide a comprehensive suite of calculators that are easy to use, accurate, and accessible to everyone. We believe that calculation tools should be straightforward and reliable, whether you're a student, professional, or just someone who needs to crunch some numbers.
              </p>
              <p className=" font-satoshi ">
                Our goal is to continually expand our collection of calculators to cover more areas and provide even more value to our users. We're committed to maintaining a clean, intuitive interface that makes finding and using the right calculator a breeze.
              </p>
            </section>

            <section data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl font-bold mb-4 font-synonym">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="text-xl font-bold mb-3 flex items-center font-synonym">
                    <Zap className="h-6 w-6 mr-1 text-[#10af0b]" />
                    Multiple Calculator Types
                  </h3>
                  <p className="text-muted-foreground font-satoshi">
                    From basic arithmetic to scientific calculations, financial planning tools, health metrics, and unit conversions - we've got you covered with a wide range of calculators.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg" data-aos="fade-up" data-aos-delay="500">
                  <h3 className="text-xl font-bold mb-3 flex items-center font-synonym">
                    <Lightbulb className="h-6 w-6 mr-1 text-zinc-800 md:text-xl dark:text-zinc-200" />
                    Dark/Light Mode
                  </h3>
                  <p className="text-muted-foreground font-satoshi">
                    Work comfortably in any lighting condition with our customizable theme options. Switch between dark and light modes with a single click.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg" data-aos="fade-up" data-aos-delay="600">
                  <h3 className="text-xl font-bold mb-3 flex items-center font-synonym">
                    <LayoutTemplate className="h-6 w-6 mr-1 text-[#db6707]" />
                    Modern Design
                  </h3>
                  <p className="text-muted-foreground font-satoshi">
                    Enjoy a clean, responsive interface that works seamlessly on desktops, tablets, and mobile devices. Our modern design prioritizes usability and clarity.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg" data-aos="fade-up" data-aos-delay="700">
                  <h3 className="text-xl font-bold mb-3 flex items-center font-synonym">
                    <Calculator className="h-6 w-6 mr-1 text-[#018ec5]" />
                    Accurate Results
                  </h3>
                  <p className="text-muted-foreground font-satoshi">
                    Trust in precise calculations for all your needs. Our calculators are designed to provide accurate results you can rely on.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="bg-muted p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h2 className="text-2xl font-bold mb-4 font-synonym">How to Use</h2>
              <ol className="list-decimal list-inside space-y-3">
                <li className="text-lg">
                  <span className="font-medium font-outfit">Choose a calculator category</span>
                  <p className="mt-1 text-muted-foreground ml-6 font-satoshi">
                    Navigate to the appropriate category from the main menu or homepage.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-medium font-outfit">Select a specific calculator</span>
                  <p className="mt-1 text-muted-foreground ml-6 font-satoshi">
                    Click on the calculator you need or use the tabs to switch between different calculators in the same category.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-medium font-outfit">Enter your values</span>
                  <p className="mt-1 text-muted-foreground ml-6 font-satoshi">
                    Fill in the required fields with your data. Our interface will guide you on what information is needed.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-medium font-outfit">Get your results</span>
                  <p className="mt-1 text-muted-foreground ml-6 font-satoshi">
                    Click the calculate button to see your results instantly. Many calculators provide additional information and context for your results.
                  </p>
                </li>
              </ol>
            </section>

            <section data-aos="fade-up" data-aos-delay="900">
              <h2 className="text-2xl font-medium mb-4 font-excon">Feedback</h2>
              <p className="mb-4 font-satoshi text-muted-foreground">
                We're constantly working to improve MultiCalc and add new features. If you have suggestions, encounter any issues, or want to request a new calculator type, we'd love to hear from you!
              </p>
              <p className="text-muted-foreground">
                Contact us at{' '}
                <a href="contact" className="text-primary hover:underline">
                  Contact us
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}