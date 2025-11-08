import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import styled from 'styled-components';

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

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
      <Container>
        <div className="flex justify-center">
          <div className="flex items-center justify-between w-full md:w-auto gap-4 bg-card/70 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-border/40">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg px-3 py-1 rounded-full"
              onClick={closeMenu}
            >
              <img
                src="/images/logo.svg"
                alt="MultiCalc Logo"
                className="h-10 w-auto"
              />
              <span>MultiCalc</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 relative">
              {[
                { to: '/', label: 'Home' },
                { to: '/basic-calculators', label: 'Math' },
                { to: '/financial-calculators', label: 'Financial' },
                { to: '/health-calculators', label: 'Health' },
                { to: '/advance-calculators', label: 'Advance' },
                { to: '/marks-calculators', label: 'Marks' },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-full text-sm font-medium transition ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/70 hover:text-foreground'
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
                  Others{' '}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Stylish Dropdown */}
                <StyledDropdown isOpen={isDropdownOpen}>
                  {[
                    { to: '/currency-converter', label: 'Currency Converter' },
                    { to: '/age-calculator', label: 'Age Calculator' },
                    { to: '/salary-calculator', label: 'Salary Calculator' },
                    { to: '/split-calculator', label: 'Split Calculator' },
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

            {/* Right Side */}
            <div className="flex items-center gap-2 pl-2">
              <ThemeToggle />
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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
          ></div>

          <div
            className={`relative bg-card w-full h-auto shadow-xl p-6 flex flex-col rounded-b-2xl transform transition-transform duration-300 ease-in-out ${
              showPanel ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/"
                className="flex items-center gap-2 font-bold text-lg"
                onClick={closeMenu}
              >
                <img src="/images/logo.svg" alt="Logo" className="h-10 w-auto" />
                <span>MultiCalc</span>
              </Link>
              <button onClick={closeMenu}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/basic-calculators', label: 'Math Calculators' },
                { to: '/financial-calculators', label: 'Financial Calculators' },
                { to: '/health-calculators', label: 'Health Calculators' },
                { to: '/advance-calculators', label: 'Advance Calculators' },
                { to: '/marks-calculators', label: 'Marks Calculator' },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/70 hover:text-foreground'
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
                      isMobileDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {[
                    { to: '/currency-converter', label: 'Currency Converter' },
                    { to: '/age-calculator', label: 'Age Calculator' },
                    { to: '/salary-calculator', label: 'Salary Calculator' },
                    { to: '/split-calculator', label: 'Split Calculator' },
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

const StyledDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: -50px;
  margin-top: 20px;
  width: 210px;
  background-color: var(--card, #0d1117);
  border-radius: 14px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

  .dropdown-item {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 15px;
    padding: 12px 18px;
    color: #d0d7de;
    text-decoration: none;
    transition: all 0.25s ease;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: rgba(56, 139, 253, 0.1);
      color: #58a6ff;
      transform: translateX(5px);
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 6px;
      height: 70%;
      width: 4px;
      background: #2f81f7;
      border-radius: 6px;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  /* 🌞 Light mode styling */
  [data-theme='light'] & {
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

    .dropdown-item {
      color: #333;

      &:hover {
        background-color: #f2f4f7;
        color: #0070f3;
        transform: translateX(5px);
      }

      &::before {
        background: #0070f3;
      }
    }
  }
`;

