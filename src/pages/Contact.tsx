import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import {
  Send, Mail, Phone, MapPin, Github,
  Linkedin, Twitter, Check, ChevronDown
} from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({ duration: 800, once: true })
  }, [])

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
    const endpoint = `https://formspree.io/f/${formId}`

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      })

      if (!response.ok) throw new Error('Something went wrong. Please try again.')

      setIsSubmitted(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqData = [
    {
      question: 'Are all calculators free to use',
      answer: 'Yes, all calculators on our website are completely free to use with no hidden charges or subscription fees.'
    },
    {
      question: 'How accurate are the calculators?',
      answer: 'Our calculators are designed to provide accurate results based on standard mathematical formulas and industry practices.'
    },
    {
      question: 'Do i need to create an account?',
      answer: "No, you don't need to create an account to use our calculators. Simply visit the website and start calculating."
    },
    {
      question: 'Can i suggest a new calculator?',
      answer: "Absolutely! We welcome suggestions for new calculators. Please use the contact form above to send us your ideas."
    }
  ]

  return (
    <div className="py-20 md:py-15">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-5xl font-excon font-bold text-center mb-5">Contact Us</h1>
          <p className="text-center text-muted-foreground mb-20 max-w-3xl mx-auto font-satoshi">
           Have questions, feedback, or need assistance we're here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Contact Info */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-poppins font-bold mb-3">Let's Start a Conversation</h2>
              <p className="text-muted-foreground mb-8 font-satoshi">
                 Reach out to our team using the contact information below or fill out the form. I'd love to hear from you. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#f3f2f2] dark:bg-[#11161f]">
                  <Mail className="text-blue-600 w-5 h-5" />
                  <div>
                    <p className="text-sm font-excon">Email</p>
                    <p className="text-sm font-sans text-[#1f1f1f] dark:text-[#ffffff]">pati.dhrubaraj@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#f3f2f2] dark:bg-[#11161f]">
                  <Phone className="text-purple-600 w-5 h-5" />
                  <div>
                    <p className="text-sm font-excon">Phone</p>
                    <p className="text-sm font-sans text-[#1f1f1f] dark:text-[#ffffff]">+91 9064644809</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#f3f2f2] dark:bg-[#11161f]">
                  <MapPin className="text-green-600 w-5 h-5" />
                  <div>
                    <p className="text-sm font-excon">Location</p>
                    <p className="text-sm font-sans text-[#1f1f1f] dark:text-[#ffffff]">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-2">Connect With Me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/codewithdhruba01" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-[#ffffff] bg-[#2c2c2c] hover:bg-[#1d1d1d] transition">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/dhrubaraj-pati" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-[#d3d3d3] bg-[#296af5] hover:bg-[#223c83] transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/codewithdhruba" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-[#fff] bg-[#28aaf5] hover:bg-[#235985] transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div data-aos="fade-up">
              <div className="rounded-xl bg-[#f3f2f2] dark:bg-[#11161f] p-6">
                <h3 className="text-xl font-bold mb-6">Send me a message</h3>

                {isSubmitted ? (
                  <div className="text-center py-6">
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full inline-block mb-4">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thank you! I’ll get back to you soon.</p>
                    <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input id="name" name="name" placeholder="Your Name" value={formState.name} onChange={handleChange} required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input id="email" name="email" type="email" placeholder="Email Address" value={formState.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input id="subject" name="subject" placeholder="Subject of your message" value={formState.subject} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message 
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Your message here"
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      ></textarea>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition"
                    >
                      {isSubmitting ? 'Sending...' : (
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
            <h2 className="text-2xl font-synonym font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {faqData.map((faq, index) => (
                <div key={index} className="rounded-md border border-muted p-4">
                  <button
                    className="w-full flex items-center justify-between text-left font-outfit text-base"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    {faq.question}
                    <ChevronDown className={`transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFAQ === index && (
                    <p className="mt-3 text-muted-foreground font-satoshi text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}