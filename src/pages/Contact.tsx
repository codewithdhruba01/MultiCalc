import { useState } from 'react'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'

export default function Contact() {
    useEffect(() => {
      // Scroll to top when page loads
      window.scrollTo(0, 0)
  
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: true,
      })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div className="py-8 md:py-12">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center" data-aos="fade-up">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or need assistance? We're here to help. Reach out to our team using the contact information below or fill out the form.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-aos="fade-up">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full mb-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-1">For general inquiries:</p>
                  <a href="mailto:info@multicalc.example.com" className="text-primary hover:underline">
                    info@multicalc.example.com
                  </a>
                  <p className="text-muted-foreground mt-2 mb-1">For support:</p>
                  <a href="mailto:support@multicalc.example.com" className="text-primary hover:underline">
                    support@multicalc.example.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full mb-4">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-1">Customer Service:</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                  <p className="text-muted-foreground mt-2 mb-1">Technical Support:</p>
                  <a href="tel:+1234567891" className="text-primary hover:underline">
                    +1 (234) 567-891
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-1">Our Office:</p>
                  <address className="not-italic text-center">
                    Subhasnagar
                    4th bye lane<br />
                    Dumdum, 700065<br />
                    Kolkata, India
                  </address>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-12" data-aos="fade-up">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4">
                    <Check className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Thank you for contacting us. We've received your message and will respond shortly.
                  </p>
                  <Button 
                    className="mt-6" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Please provide details about your inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          
          <div className="bg-muted rounded-lg p-6" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Are all calculators free to use?</h3>
                <p className="text-muted-foreground">
                  Yes, all calculators on our website are completely free to use with no hidden charges or subscription fees.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do I need to create an account?</h3>
                <p className="text-muted-foreground">
                  No, you don't need to create an account to use our calculators. Simply visit the website and start calculating.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How accurate are the calculators?</h3>
                <p className="text-muted-foreground">
                  Our calculators are designed to provide accurate results based on standard mathematical formulas and industry practices.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I suggest a new calculator?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We welcome suggestions for new calculators. Please use the contact form above to send us your ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}