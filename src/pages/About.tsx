import { Container } from '@/components/ui/Container'
import { Calculator, Code, Lightbulb, Zap } from 'lucide-react'

export default function About() {
  return (
    <div className="py-8 md:py-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">About MultiCalc</h1>
          <p className="text-muted-foreground text-center mb-8">
            Learn more about our calculator website and its features
          </p>
          
          <div className="space-y-8">
            <section className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Our Mission
              </h2>
              <p className="mb-4">
                MultiCalc was created with a simple mission: to provide a comprehensive suite of calculators that are easy to use, accurate, and accessible to everyone. We believe that calculation tools should be straightforward and reliable, whether you're a student, professional, or just someone who needs to crunch some numbers.
              </p>
              <p>
                Our goal is to continually expand our collection of calculators to cover more areas and provide even more value to our users. We're committed to maintaining a clean, intuitive interface that makes finding and using the right calculator a breeze.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Multiple Calculator Types
                  </h3>
                  <p className="text-muted-foreground">
                    From basic arithmetic to scientific calculations, financial planning tools, health metrics, and unit conversions - we've got you covered with a wide range of calculators.
                  </p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                    Dark/Light Mode
                  </h3>
                  <p className="text-muted-foreground">
                    Work comfortably in any lighting condition with our customizable theme options. Switch between dark and light modes with a single click.
                  </p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    Modern Design
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy a clean, responsive interface that works seamlessly on desktops, tablets, and mobile devices. Our modern design prioritizes usability and clarity.
                  </p>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-primary" />
                    Accurate Results
                  </h3>
                  <p className="text-muted-foreground">
                    Trust in precise calculations for all your needs. Our calculators are designed to provide accurate results you can rely on.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">How to Use</h2>
              <ol className="list-decimal list-inside space-y-3">
                <li className="text-lg">
                  <span className="font-medium">Choose a calculator category</span>
                  <p className="mt-1 text-muted-foreground ml-6">
                    Navigate to the appropriate category from the main menu or homepage.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-medium">Select a specific calculator</span>
                  <p className="mt-1 text-muted-foreground ml-6">
                    Click on the calculator you need or use the tabs to switch between different calculators in the same category.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-medium">Enter your values</span>
                  <p className="mt-1 text-muted-foreground ml-6">
                    Fill in the required fields with your data. Our interface will guide you on what information is needed.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-medium">Get your results</span>
                  <p className="mt-1 text-muted-foreground ml-6">
                    Click the calculate button to see your results instantly. Many calculators provide additional information and context for your results.
                  </p>
                </li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Feedback</h2>
              <p className="mb-4">
                We're constantly working to improve MultiCalc and add new features. If you have suggestions, encounter any issues, or want to request a new calculator type, we'd love to hear from you!
              </p>
              <p className="text-muted-foreground">
                Contact us at <a href="mailto:feedback@multicalc.example.com" className="text-primary hover:underline">feedback@multicalc.example.com</a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}