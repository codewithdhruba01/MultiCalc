import { Container } from '../ui/Container'
import { Calculator, Github, Heart, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <Calculator className="h-6 w-6" />
              <span>MultiCalc</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop solution for all calculation needs. Simple, fast, and accurate.
            </p>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-medium">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/basic-calculators" className="text-muted-foreground hover:text-foreground">
                  Basic Calculators
                </Link>
              </li>
              <li>
                <Link to="/financial-calculators" className="text-muted-foreground hover:text-foreground">
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link to="/health-calculators" className="text-muted-foreground hover:text-foreground">
                  Health Calculators
                </Link>
              </li>
              <li>
                <Link to="/math-calculators" className="text-muted-foreground hover:text-foreground">
                  Math Calculators
                </Link>
              </li>
              <li>
                <Link to="/age-calculator" className="text-muted-foreground hover:text-foreground flex items-center">
                  
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link to="/marks-calculators" className="text-muted-foreground hover:text-foreground flex items-center">
                  
                  Marks Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-medium">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/codewithdhruba" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com/codewithdhruba01/MultiCalc" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Dhrubaraj Pati. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for Dhrubaraj Pati
          </p>
        </div>
      </Container>
    </footer>
  )
}