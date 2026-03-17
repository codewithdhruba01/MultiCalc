import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Calculator,
  LayoutTemplate,
  Lightbulb,
  Zap,
  Mail,
  MessageCircle,
} from 'lucide-react';

export default function About() {
  /* CONTENT PROTECTION — Right-click ENABLED */
  useEffect(() => {
    const blockEvent = (e: any) => e.preventDefault();

    // disable copy / cut / paste
    document.addEventListener('copy', blockEvent);
    document.addEventListener('cut', blockEvent);
    document.addEventListener('paste', blockEvent);

    // disable keyboard shortcuts (Ctrl+C/V/X/A/S/P)
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'v', 'x', 'a', 's', 'p'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', disableKeys);

    return () => {
      document.removeEventListener('copy', blockEvent);
      document.removeEventListener('cut', blockEvent);
      document.removeEventListener('paste', blockEvent);
      document.removeEventListener('keydown', disableKeys);
    };
  }, []);
  /* END PROTECTION */

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="py-12 sm:py-16 lg:py-24 select-none border-b-4 border-black">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl sm:text-6xl font-outfit font-black uppercase tracking-tighter leading-[0.95] mb-4 text-center"
            data-aos="fade-up"
          >
            About MultiCalc
          </h1>
          <p
            className="text-muted-foreground text-center mb-10 font-outfit font-medium"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Learn more about our calculator website and its features
          </p>

          <div className="space-y-8">
            {/* --- Mission Section --- */}
            <section
              className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_black]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-black uppercase tracking-wide mb-4 flex items-center font-outfit">
                <Calculator className="h-6 w-6 mr-2 text-black" />
                Our Mission
              </h2>
              <p className="mb-4 font-outfit font-medium leading-relaxed">
                MultiCalc was created with a simple mission: to provide a
                comprehensive suite of calculators that are easy to use,
                accurate, and accessible to everyone. We believe that
                calculation tools should be straightforward and reliable,
                whether you're a student, professional, or just someone who
                needs to crunch some numbers.
              </p>
              <p className="font-outfit font-medium leading-relaxed">
                Our goal is to continually expand our collection of calculators
                to cover more areas and provide even more value to our users.
                We're committed to maintaining a clean, intuitive interface that
                makes finding and using the right calculator a breeze.
              </p>
            </section>

            {/* --- Features Section --- */}
            <section data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl font-black uppercase tracking-wide mb-4 font-outfit">
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_black]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h3 className="text-xl font-black uppercase tracking-wide mb-3 flex items-center font-outfit">
                    <Zap className="h-6 w-6 mr-2 text-black" />
                    Multiple Calculator Types
                  </h3>
                  <p className="text-muted-foreground font-outfit font-medium leading-relaxed">
                    From basic arithmetic to scientific calculations, financial
                    planning tools, health metrics, and unit conversions - we've
                    got you covered with a wide range of calculators.
                  </p>
                </div>

                <div
                  className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_black]"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h3 className="text-xl font-black uppercase tracking-wide mb-3 flex items-center font-outfit">
                    <Lightbulb className="h-6 w-6 mr-2 text-black" />
                    Dark/Light Mode
                  </h3>
                  <p className="text-muted-foreground font-outfit font-medium leading-relaxed">
                    Work comfortably in any lighting condition with our
                    customizable theme options. Switch between dark and light
                    modes with a single click.
                  </p>
                </div>

                <div
                  className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_black]"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h3 className="text-xl font-black uppercase tracking-wide mb-3 flex items-center font-outfit">
                    <LayoutTemplate className="h-6 w-6 mr-2 text-black" />
                    Modern Design
                  </h3>
                  <p className="text-muted-foreground font-outfit font-medium leading-relaxed">
                    Enjoy a clean, responsive interface that works seamlessly on
                    desktops, tablets, and mobile devices. Our modern design
                    prioritizes usability and clarity.
                  </p>
                </div>

                <div
                  className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_black]"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <h3 className="text-xl font-black uppercase tracking-wide mb-3 flex items-center font-outfit">
                    <Calculator className="h-6 w-6 mr-2 text-black" />
                    Accurate Results
                  </h3>
                  <p className="text-muted-foreground font-outfit font-medium leading-relaxed">
                    Trust in precise calculations for all your needs. Our
                    calculators are designed to provide accurate results you can
                    rely on.
                  </p>
                </div>
              </div>
            </section>

            {/* --- How to Use Section --- */}
            <section
              className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_black]"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h2 className="text-2xl font-black uppercase tracking-wide mb-4 font-outfit">
                How to Use
              </h2>
              <ol className="list-decimal list-inside space-y-3">
                <li className="text-lg">
                  <span className="font-black uppercase tracking-wide font-outfit">
                    Choose a calculator category
                  </span>
                  <p className="mt-1 text-muted-foreground ml-6 font-outfit font-medium leading-relaxed">
                    Navigate to the appropriate category from the main menu or
                    homepage.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-black uppercase tracking-wide font-outfit">
                    Select a specific calculator
                  </span>
                  <p className="mt-1 text-muted-foreground ml-6 font-outfit font-medium leading-relaxed">
                    Click on the calculator you need or use the tabs to switch
                    between different calculators in the same category.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-black uppercase tracking-wide font-outfit">
                    Enter your values
                  </span>
                  <p className="mt-1 text-muted-foreground ml-6 font-outfit font-medium leading-relaxed">
                    Fill in the required fields with your data. Our interface
                    will guide you on what information is needed.
                  </p>
                </li>
                <li className="text-lg">
                  <span className="font-black uppercase tracking-wide font-outfit">
                    Get your results
                  </span>
                  <p className="mt-1 text-muted-foreground ml-6 font-outfit font-medium leading-relaxed">
                    Click the calculate button to see your results instantly.
                    Many calculators provide additional information and context
                    for your results.
                  </p>
                </li>
              </ol>
            </section>

            {/* --- Get in Touch Section --- */}
            <section
              className="bg-[#F0C020] p-8 border-4 border-black text-center shadow-[8px_8px_0px_0px_black]"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-3 font-outfit">
                Get in Touch
              </h2>
              <p className="text-black/80 mb-6 font-outfit font-medium leading-relaxed max-w-xl mx-auto">
                Have questions, suggestions, or want to contribute ? We’d love
                to hear from you! MultiCalc is always evolving with your
                feedback. Your input helps us build better tools for everyone.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="mailto:pati.dhrubaraj@outlook.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border-4 border-black bg-[#D02020] text-white shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition font-outfit font-black uppercase tracking-wider"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-4 border-black bg-white text-black shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition font-outfit font-black uppercase tracking-wider hover:bg-muted"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact
                </a>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
