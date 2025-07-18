import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Calculator, Menu, X } from 'lucide-react'
import { Container } from '../ui/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
            <Calculator className="h-6 w-6" />
            <span>MultiCalc</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
              end
            >
              Home
            </NavLink>

            <NavLink 
              to="/basic-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
            >
              Basic
            </NavLink>

            <NavLink 
              to="/financial-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
            >
              Financial
            </NavLink>

            <NavLink 
              to="/health-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
            >
              Health
            </NavLink>

            <NavLink 
              to="/math-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
            >
              Math
            </NavLink>

            <NavLink 
              to="/age-calculator" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
            >
              Age Calculator
            </NavLink>
            <NavLink 
              to="/marks-calculators"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
            >
              Marks Calculator
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Smooth Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100 max-h-[1000px]' : 'scale-y-0 opacity-0 max-h-0'
        } border-t border-border/40`}
      >
        <Container>
          <nav className="flex flex-col py-4 space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
              }
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/basic-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
              }
              onClick={closeMenu}
            >
              Basic Calculators
            </NavLink>
            <NavLink 
              to="/financial-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
              }
              onClick={closeMenu}
            >
              Financial Calculators
            </NavLink>
            <NavLink 
              to="/health-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
              }
              onClick={closeMenu}
            >
              Health Calculators
            </NavLink>
            <NavLink 
              to="/math-calculators" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
              }
              onClick={closeMenu}
            >
              Math Calculators
            </NavLink>
            <NavLink 
              to="/age-calculator" 
              className={({ isActive }) =>
                isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
              }
              onClick={closeMenu}
            >
              Age Calculator
            </NavLink>
            <NavLink 
              to="/marks-calculators"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
              }
              onClick={closeMenu}
            >
              Marks Calculator
            </NavLink>
          </nav>
        </Container>
      </div>
    </header>
  )
}