import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, LogIn } from 'lucide-react'
import { Container } from '../ui/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'

// Clerk imports
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => {
    setShowPanel(false)
    setTimeout(() => setIsMenuOpen(false), 300)
  }

  useEffect(() => {
    if (isMenuOpen) {
      const timer = setTimeout(() => setShowPanel(true), 100) 
      return () => clearTimeout(timer)
    } else {
      setShowPanel(false)
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
      <Container>
        <div className="flex justify-center">
          {/* Capsule Navbar */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4 bg-card/70 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-border/40">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 font-bold text-lg px-3 py-1 rounded-full" 
              onClick={closeMenu}
            >
              <img 
                src="/logo/MultiCalc.png" 
                alt="MultiCalc Logo" 
                className="h-10 w-auto"
              />
              <span>MultiCalc</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/basic-calculators", label: "Basic" },
                { to: "/financial-calculators", label: "Financial" },
                { to: "/health-calculators", label: "Health" },
                { to: "/math-calculators", label: "Math" },
                { to: "/age-calculator", label: "Age" },
                { to: "/marks-calculators", label: "Marks" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-full text-sm font-medium transition ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2 pl-2">
              <ThemeToggle />

              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <LogIn className="h-4 w-4" />
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
                className="md:hidden rounded-full"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay (fade only) */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          ></div>

          <div
            className={`relative bg-card w-full h-auto shadow-xl p-6 flex flex-col rounded-b-2xl transform transition-transform duration-300 ease-in-out ${
              showPanel ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* Logo & Close Button */}
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center gap-2 font-bold text-lg" onClick={closeMenu}>
                <img 
                src="/logo/MultiCalc.png" 
                alt="Logo" 
                className="h-10 w-auto"
              />
                <span>MultiCalc</span>
              </Link>
              <button onClick={closeMenu}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/basic-calculators", label: "Basic Calculators" },
                { to: "/financial-calculators", label: "Financial Calculators" },
                { to: "/health-calculators", label: "Health Calculators" },
                { to: "/math-calculators", label: "Math Calculators" },
                { to: "/age-calculator", label: "Age Calculator" },
                { to: "/marks-calculators", label: "Marks Calculator" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Auth Buttons Bottom */}
            <div className="mt-6 flex gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="default" className="w-full">Sign in</Button>
                </SignInButton>
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">Sign Up</Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}