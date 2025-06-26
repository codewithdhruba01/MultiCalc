import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Calculator, Menu, X, Calendar } from 'lucide-react'
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
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Age Calculator
              </span>
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"
              }
            >
              About
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40">
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
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Age Calculator
                </span>
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}