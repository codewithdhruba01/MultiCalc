import { useEffect } from 'react';
import { Container } from '../ui/Container';
import { Github, Twitter, Globe } from 'lucide-react';
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
    <footer className="bg-[#111111] text-white pt-20 pb-10 select-none font-satoshi">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-16">
          {/* Top Left: Logo & Socials */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity">
              <img
                src="/images/logo.svg"
                alt="MultiCalc logo"
                className="h-9 w-9 border-2 border-black bg-white"
                loading="lazy"
              />
              <span className="font-outfit font-black uppercase tracking-wide">MultiCalc</span>
            </Link>
            <p className="text-gray-400 font-medium text-sm mb-10 max-w-sm">
              Your one-stop solution for all calculation needs. <br className="hidden sm:block" /> Simple, fast, and accurate.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/codewithdhruba"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/codewithdhruba01/MultiCalc"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://codewithdhruba.in/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Top Right: PRODUCT */}
          <div className="col-span-1">
            <h3 className="text-[#F0C020] font-black uppercase tracking-wider mb-6 text-sm font-outfit">
              Calculators
            </h3>
            <ul className="space-y-4 text-sm font-bold text-white">
              <li className="flex items-center gap-2">
                <Link to="/basic-calculators" className="hover:text-gray-300 transition-colors">
                  Math Calculators
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to="/financial-calculators" className="hover:text-gray-300 transition-colors">
                  Financial Calculators
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to="/health-calculators" className="hover:text-gray-300 transition-colors">
                  Health Calculators
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to="/marks-calculators" className="hover:text-gray-300 transition-colors">
                  Marks Calculator
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to="/advance-calculators" className="hover:text-gray-300 transition-colors">
                  Advance Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Right: COMPANY */}
          <div className="col-span-1">
            <h3 className="text-[#F0C020] font-black uppercase tracking-wider mb-6 text-sm font-outfit">
              More Tools
            </h3>
            <ul className="space-y-4 text-sm font-bold text-white">
              <li>
                <Link to="/SalesTax-Calculator" className="hover:text-gray-300 transition-colors">
                  Sales Tax Calculator
                </Link>
              </li>
              <li>
                <Link to="/data-converter" className="hover:text-gray-300 transition-colors">
                  Data Converter
                </Link>
              </li>
              <li>
                <Link to="/split-calculator" className="hover:text-gray-300 transition-colors">
                  Split Calculator
                </Link>
              </li>
              <li>
                <Link to="/salary-calculator" className="hover:text-gray-300 transition-colors">
                  Salary Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Left: RESOURCES */}
          <div className="col-span-1">
            <h3 className="text-[#F0C020] font-black uppercase tracking-wider mb-6 text-sm font-outfit">
              Resources
            </h3>
            <ul className="space-y-4 text-sm font-bold text-white">
              <li>
                <Link to="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap.xml" className="hover:text-gray-300 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Left: LEGAL */}
          <div className="col-span-1">
            <h3 className="text-[#F0C020] font-black uppercase tracking-wider mb-6 text-sm font-outfit">
              Legal
            </h3>
            <ul className="space-y-4 text-sm font-bold text-white">
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-gray-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-gray-400">
          <p>&copy; {currentYear} MultiCalc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
