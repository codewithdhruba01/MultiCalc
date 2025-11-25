import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { StyledDropdown } from "@/components/ui/Dropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setShowPanel(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  useEffect(() => {
    if (isMenuOpen) {
      const timer = setTimeout(() => setShowPanel(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShowPanel(false);
    }
  }, [isMenuOpen]);

  /* COPY PROTECTION (Right-click Enabled) */
  useEffect(() => {
    const blockEvent = (e: any) => e.preventDefault();

    // Disable copy, cut, paste
    document.addEventListener("copy", blockEvent);
    document.addEventListener("cut", blockEvent);
    document.addEventListener("paste", blockEvent);

    // Disable keyboard shortcuts (Ctrl+C, Ctrl+V, Ctrl+A, etc.)
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ["c", "v", "x", "a", "s", "p"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("copy", blockEvent);
      document.removeEventListener("cut", blockEvent);
      document.removeEventListener("paste", blockEvent);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);
  /* END COPY PROTECTION */

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center select-none">
      <Container>
        <div className="flex justify-center">
          <div className="flex items-center justify-between w-full md:w-auto gap-4 bg-card/70 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-border/40">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 font-bold text-lg px-3 py-1 rounded-full"
            >
              <img src="/images/logo.svg" alt="MultiCalc Logo" className="h-10 w-auto" />
              <span>MultiCalc</span>
            </Link>

            {/* Desktop Navigation */}
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
                      isActive ? "bg-primary/10 text-primary" : "text-foreground/70 hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Others Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition text-foreground/70 hover:text-foreground"
                >
                  Others
                  <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <StyledDropdown isOpen={isDropdownOpen}>
                  {[
                    { to: "/currency-converter", label: "Currency Converter" },
                    { to: "/age-calculator", label: "Age Calculator" },
                    { to: "/salary-calculator", label: "Salary Calculator" },
                    { to: "/split-calculator", label: "Split Calculator" },
                    { to: "/SalesTax-Calculator", label: "Sales Tax Calculator" },
                  ].map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsDropdownOpen(false)}
                      className="dropdown-item"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </StyledDropdown>
              </div>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-2 pl-2">
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden select-none">
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
            <div className="flex items-center justify-between mb-6">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-2 font-bold text-lg">
                <img src="/images/logo.svg" alt="Logo" className="h-10 w-auto" />
                <span>MultiCalc</span>
              </Link>

              <button onClick={closeMenu}>
                <X className="h-6 w-6" />
              </button>
            </div>

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
                      isActive ? "bg-primary/10 text-primary" : "text-foreground/70 hover:text-foreground"
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
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isMobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
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
                    { to: "/split-calculator", label: "Split Calculator" },
                    { to: "/SalesTax-Calculator", label: "Sales Tax Calculator" },
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
          </div>
        </div>
      )}
    </header>
  );
}
