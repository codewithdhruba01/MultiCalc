import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Send,
  Mail,
  Clock3,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Check,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const endpoint = `https://formspree.io/f/${formId}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok)
        throw new Error('Something went wrong. Please try again.');

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = [
    {
      question: 'Are all calculators free to use',
      answer:
        'Yes, all calculators on our website are completely free to use with no hidden charges or subscription fees.',
    },
    {
      question: 'How accurate are the calculators?',
      answer:
        'Our calculators are designed to provide accurate results based on standard mathematical formulas and industry practices.',
    },
    {
      question: 'Do i need to create an account?',
      answer:
        "No, you don't need to create an account to use our calculators. Simply visit the website and start calculating.",
    },
    {
      question: 'Can i suggest a new calculator?',
      answer:
        'Absolutely! We welcome suggestions for new calculators. Please use the contact form above to send us your ideas.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-24 border-b-4 border-black">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-4xl sm:text-6xl font-outfit font-black uppercase tracking-tighter leading-[0.95] text-center mb-5">
            Contact Us
          </h1>
          <p className="text-center text-muted-foreground mb-14 max-w-3xl mx-auto font-outfit font-medium">
            Have questions, feedback, or need assistance we're here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Contact Info */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-outfit font-black uppercase tracking-wide mb-3">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground mb-8 font-outfit font-medium leading-relaxed">
                Reach out to our team using the contact information below or
                fill out the form. I'd love to hear from you. I typically
                respond within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border-4 border-black bg-white shadow-[6px_6px_0px_0px_black]">
                  <Mail className="text-black w-5 h-5" />
                  <div>
                    <p className="text-xs font-outfit font-black uppercase tracking-widest">Email</p>
                    <p className="text-sm font-outfit font-medium text-black">
                      pati.dhrubaraj@outlook.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-4 border-black bg-white shadow-[6px_6px_0px_0px_black]">
                  <Clock3 className="text-black w-5 h-5" />
                  <div>
                    <p className="text-xs font-outfit font-black uppercase tracking-widest">Response time</p>
                    <p className="text-sm font-outfit font-medium text-black">
                      Within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border-4 border-black bg-white shadow-[6px_6px_0px_0px_black]">
                  <MapPin className="text-black w-5 h-5" />
                  <div>
                    <p className="text-xs font-outfit font-black uppercase tracking-widest">Location</p>
                    <p className="text-sm font-outfit font-medium text-black">
                      Kolkata, West Bengal
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-xs font-outfit font-black uppercase tracking-widest mb-3">
                  Connect
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/codewithdhruba01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-4 border-black bg-white text-black shadow-[4px_4px_0px_0px_black] hover:bg-muted transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/dhrubaraj-pati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-4 border-black bg-[#1040C0] text-white shadow-[4px_4px_0px_0px_black] hover:opacity-90 transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/codewithdhruba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-4 border-black bg-[#F0C020] text-black shadow-[4px_4px_0px_0px_black] hover:opacity-90 transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div data-aos="fade-up">
              <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_black] p-6">
                <h3 className="text-xl font-outfit font-black uppercase tracking-wide mb-6">
                  Send a message
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-6">
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full inline-block mb-4">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-muted-foreground">
                      Thank you! I’ll get back to you soon.
                    </p>
                    <Button
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-1"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Your message here"
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full rounded-none border-4 border-black bg-white px-3 py-2 text-sm font-outfit font-medium shadow-[4px_4px_0px_0px_black] focus-visible:outline-none bauhaus-focus-ring"
                        required
                      ></textarea>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-primary text-primary-foreground"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <span className="flex items-center text-white">
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16" data-aos="fade-up">
            <h2 className="text-2xl font-outfit font-black uppercase tracking-wide text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_black] p-4 transition duration-200 ease-out hover:-translate-y-1"
                >
                  <button
                    className="w-full flex items-center justify-between text-left font-outfit font-black uppercase tracking-wide text-sm"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  >
                    {faq.question}
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openFAQ === index && (
                      <motion.p
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="mt-3 text-muted-foreground font-satoshi text-sm overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
