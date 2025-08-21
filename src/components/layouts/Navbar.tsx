import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Calculator, Menu, X, LogIn } from 'lucide-react'
import { Container } from '../ui/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'

// Clerk imports
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'

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
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
            <Calculator className="h-6 w-6" />
            <span>MultiCalc</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}>
              Home
            </NavLink>
            <NavLink to="/basic-calculators" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}>
              Basic
            </NavLink>
            <NavLink to="/financial-calculators" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}>
              Financial
            </NavLink>
            <NavLink to="/health-calculators" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}>
              Health
            </NavLink>
            <NavLink to="/math-calculators" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}>
              Math
            </NavLink>
            <NavLink to="/age-calculator" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}>
              Age Calculator
            </NavLink>
            <NavLink to="/marks-calculators" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}>
              Marks Calculator
            </NavLink>
          </nav>

          {/* Right Side (Theme + Auth + Mobile Menu Button) */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Clerk Auth */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="icon">
                  <LogIn  className="h-4 w-4" />
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu Button */}
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

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100 max-h-[1000px]' : 'scale-y-0 opacity-0 max-h-0'
        } border-t border-border/40`}
      >
        <Container>
          <nav className="flex flex-col py-4 space-y-2">
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"}>
              Home
            </NavLink>
            <NavLink to="/basic-calculators" onClick={closeMenu} className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"}>
              Basic Calculators
            </NavLink>
            <NavLink to="/financial-calculators" onClick={closeMenu} className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"}>
              Financial Calculators
            </NavLink>
            <NavLink to="/health-calculators" onClick={closeMenu} className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"}>
              Health Calculators
            </NavLink>
            <NavLink to="/math-calculators" onClick={closeMenu} className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"}>
              Math Calculators
            </NavLink>
            <NavLink to="/age-calculator" onClick={closeMenu} className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"}>
              Age Calculator
            </NavLink>
            <NavLink to="/marks-calculators" onClick={closeMenu} className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground/70 hover:text-foreground py-2"}>
              Marks Calculator
            </NavLink>

            {/* Mobile Clerk Auth */}
            <div className="flex gap-2 pt-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <SignUpButton mode="modal">
                  <Button variant="default" size="sm" className="w-full">Sign in</Button>
                </SignUpButton>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="default" size="sm" className="w-full">Sign Up</Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}
