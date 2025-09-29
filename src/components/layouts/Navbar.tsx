import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, LogIn, ChevronDown } from 'lucide-react'
import { Container } from '../ui/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'

// Clerk imports
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // desktop dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false) // mobile dropdown

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
            <nav className="hidden md:flex items-center gap-2 relative">
              {[
                { to: "/", label: "Home" },
                { to: "/basic-calculators", label: "Math" },
                { to: "/financial-calculators", label: "Financial" },
                { to: "/health-calculators", label: "Health" },
                { to: "/advance-calculators", label: "Advance" },
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

              {/* Others Dropdown (Desktop) */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition text-foreground/70 hover:text-foreground"
                >
                  Others <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-card rounded-xl shadow-lg border border-border/40 overflow-hidden transition-all duration-300 ease-in-out ${
                    isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {[
                    { to: "/currency-converter", label: "Currency Converter" },
                    { to: "/age-calculator", label: "Age Calculator" },
                    { to: "/salary-calculator", label: "Salary Calculator" },
                  ].map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
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
                { to: "/basic-calculators", label: "Math Calculators" },
                { to: "/financial-calculators", label: "Financial Calculators" },
                { to: "/health-calculators", label: "Health Calculators" },
                { to: "/advance-calculators", label: "Advance Calculators" },
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

              {/* Mobile Others Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition text-foreground/70 hover:text-foreground"
                >
                  Others
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {[
                    { to: "/currency-converter", label: "Currency Converter" },
                    { to: "/age-calculator", label: "Age Calculator" },
                    { to: "/salary-calculator", label: "Salary Calculator" },
                  ].map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMenu}
                      className="block px-6 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
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
