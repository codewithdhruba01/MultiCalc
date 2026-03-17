import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full select-none border-b-4 border-black bg-[#F0F0F0]">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 font-bold text-lg"
          >
            <img
              src="/images/logo.svg"
              alt="MultiCalc logo"
              className="h-9 w-9 border-2 border-black bg-white"
              loading="lazy"
            />

            <span className="font-outfit font-black uppercase tracking-wide">
              MultiCalc
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 relative border-4 border-black bg-white px-3 py-2 shadow-[4px_4px_0px_0px_black]">
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
                  `px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide font-outfit transition ${isActive
                    ? "bg-[#F0C020] text-black border-2 border-black"
                    : "text-black hover:bg-[#E0E0E0]"
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
                className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide font-outfit transition text-black hover:bg-[#E0E0E0]"
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
                  { to: "/Data-Converter", label: "Data Converter" },

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
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link to="/basic-calculators" className="hidden md:inline-flex bauhaus-focus-ring">
              <span className="inline-flex items-center rounded-none border-4 border-black bg-[#D02020] px-5 py-2 font-outfit font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_black] transition duration-200 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Get started
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_black]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden select-none">
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            onClick={closeMenu}
          ></div>

          <div
            className={`relative bg-[#F0F0F0] border-b-4 border-black w-full h-auto shadow-[8px_8px_0px_0px_black] p-6 flex flex-col rounded-none transform transition-transform duration-300 ease-in-out ${showPanel ? "translate-y-0" : "-translate-y-full"
              }`}
          >
            <div className="flex items-center justify-between mb-6">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-2 font-bold text-lg">
                <img
                  src="/images/logo.svg"
                  alt="MultiCalc logo"
                  className="h-9 w-9 border-2 border-black bg-white"
                  loading="lazy"
                />

                <span className="font-outfit font-black uppercase tracking-wide">MultiCalc</span>
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
                    `block px-4 py-3 rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_black] text-sm font-black uppercase tracking-wide font-outfit transition ${isActive ? "bg-[#F0C020] text-black" : "text-black hover:bg-[#E0E0E0]"
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
                  className="flex items-center justify-between px-4 py-3 rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_black] text-sm font-black uppercase tracking-wide font-outfit transition text-black hover:bg-[#E0E0E0]"
                >
                  Others
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {[
                    { to: "/currency-converter", label: "Currency Converter" },
                    { to: "/age-calculator", label: "Age Calculator" },
                    { to: "/salary-calculator", label: "Salary Calculator" },
                    { to: "/split-calculator", label: "Split Calculator" },
                    { to: "/SalesTax-Calculator", label: "Sales Tax Calculator" },
                    { to: "/Data-Converter", label: "Data Converter" },
                  ].map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMenu}
                      className="block px-4 py-3 mt-3 rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_black] text-sm font-bold uppercase tracking-wide font-outfit text-black hover:bg-[#E0E0E0] transition"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>

            <Link to="/basic-calculators" onClick={closeMenu} className="mt-6 bauhaus-focus-ring">
              <span className="inline-flex w-full items-center justify-center rounded-none border-4 border-black bg-[#D02020] px-6 py-3 font-outfit font-black uppercase tracking-wider text-white shadow-[6px_6px_0px_0px_black] transition duration-200 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Get started
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
