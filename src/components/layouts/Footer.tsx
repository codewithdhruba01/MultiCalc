import { useEffect } from 'react';
import { Container } from '../ui/Container';
import { Github, Coffee, Twitter, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // COPY PROTECTION (text selection disable + copy/cut/paste block)
  useEffect(() => {
    const blockEvent = (e: any) => e.preventDefault();

    // Disable selection
    document.addEventListener("selectstart", blockEvent);

    // Disable copy/cut/paste
    document.addEventListener("copy", blockEvent);
    document.addEventListener("cut", blockEvent);
    document.addEventListener("paste", blockEvent);

    // Disable keyboard shortcuts
    const disableKeys = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("selectstart", blockEvent);
      document.removeEventListener("copy", blockEvent);
      document.removeEventListener("cut", blockEvent);
      document.removeEventListener("paste", blockEvent);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return (
    <footer className="border-t border-border/70 bg-background py-8 select-none">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <img src="/images/logo.svg" alt="Logo" className="h-11 w-auto" />
              <span>MultiCalc</span>
            </Link>
            <p className="text-base text-muted-foreground font-satoshi">
              Your one-stop solution for all calculation needs. Simple, fast,
              and accurate.
            </p>
          </div>

          {/* Calculator Links */}
          <div>
            <h3 className="mb-3 text-lg font-bold">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/basic-calculators"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Math Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/financial-calculators"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/health-calculators"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Health Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/advance-calculators"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Advance Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/SalesTax-Calculator"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sales Tax Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/marks-calculators"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Marks Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/split-calculator"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Split Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/salary-calculator"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Salary Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-3 text-lg font-bold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap.xml"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="mb-3 text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/codewithdhruba"
                className="text-muted-foreground hover:text-[#1DA1F2]"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/codewithdhruba01/MultiCalc"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://codewithdhruba.vercel.app/"
                className="text-muted-foreground hover:text-[#25b608]"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-6 text-center">
          <p className="text-sm text-muted-foreground font-satoshi">
            &copy; {currentYear} MultiCalc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center font-satoshi justify-center mt-2">
            Design & Developed by{' '}
            <Coffee className="w-4 h-4 mx-1 text-[#04afee]" />
            <a
              href="https://codewithdhruba.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-white hover:none active:no-underline transition-colors font-satoshi"
            >
              Dhrubaraj Pati
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
