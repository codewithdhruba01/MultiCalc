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
    document.addEventListener('selectstart', blockEvent);

    // Disable copy/cut/paste
    document.addEventListener('copy', blockEvent);
    document.addEventListener('cut', blockEvent);
    document.addEventListener('paste', blockEvent);

    // Disable keyboard shortcuts
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'v', 'x', 'a'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', disableKeys);

    return () => {
      document.removeEventListener('selectstart', blockEvent);
      document.removeEventListener('copy', blockEvent);
      document.removeEventListener('cut', blockEvent);
      document.removeEventListener('paste', blockEvent);
      document.removeEventListener('keydown', disableKeys);
    };
  }, []);

  return (
    <footer className="border-t-4 border-black bg-[#121212] text-white py-10 select-none">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <img
                src="/images/logo.svg"
                alt="MultiCalc logo"
                className="h-10 w-10 border-2 border-black bg-white"
                loading="lazy"
              />
              <span className="font-outfit font-black uppercase tracking-wide">MultiCalc</span>
            </Link>
            <p className="text-base text-white/80 font-outfit font-medium leading-relaxed">
              Your one-stop solution for all calculation needs. Simple, fast,
              and accurate.
            </p>
          </div>

          {/* Calculator Links */}
          <div>
            <h3 className="mb-3 text-lg font-black uppercase tracking-wide font-outfit">
              Calculators
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/basic-calculators"
                  className="text-white/80 hover:text-white"
                >
                  Math Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/financial-calculators"
                  className="text-white/80 hover:text-white"
                >
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/health-calculators"
                  className="text-white/80 hover:text-white"
                >
                  Health Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/advance-calculators"
                  className="text-white/80 hover:text-white"
                >
                  Advance Calculators
                </Link>
              </li>
              <li>
                <Link
                  to="/SalesTax-Calculator"
                  className="text-white/80 hover:text-white"
                >
                  Sales Tax Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/marks-calculators"
                  className="text-white/80 hover:text-white"
                >
                  Marks Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/split-calculator"
                  className="text-white/80 hover:text-white"
                >
                  Split Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/salary-calculator"
                  className="text-white/80 hover:text-white"
                >
                  Salary Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-3 text-lg font-black uppercase tracking-wide font-outfit">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/80 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-white/80 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap.xml"
                  className="text-white/80 hover:text-white"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="mb-3 text-lg font-black uppercase tracking-wide font-outfit">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/codewithdhruba"
                className="text-white/70 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/codewithdhruba01/MultiCalc"
                className="text-white/70 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://codewithdhruba.vercel.app/"
                className="text-white/70 hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t-4 border-black pt-6 text-center">
          <p className="text-sm text-white/70 font-outfit font-medium">
            &copy; {currentYear} MultiCalc. All rights reserved.
          </p>
          <p className="text-sm text-white/70 flex items-center font-outfit font-medium justify-center mt-2">
            Design & Developed by{' '}
            <Coffee className="w-4 h-4 mx-1 text-[#04afee]" />
            <a
              href="https://codewithdhruba.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline underline-offset-4 transition-colors font-outfit font-bold"
            >
              Dhrubaraj Pati
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
