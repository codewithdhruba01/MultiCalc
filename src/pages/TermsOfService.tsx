import { Container } from '@/components/ui/Container'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import { FileText, AlertTriangle, Scale, Shield, Ban, Globe, Clock } from 'lucide-react'

export default function TermsOfService() {
  useEffect(() => {
      // Scroll to top when page loads
      window.scrollTo(0, 0)
  
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: true,
      })
    }, [])
  return (
    <div className="py-20 md:py-15">
      <Container>
        <div className="max-w-4xl mx-auto"
        
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none" data-aos="fade-up">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" data-aos="fade-up">Introduction</h2>
                <p className="font-xl" data-aos="fade-up">
                  Welcome to MultiCalc. These Terms of Service ("Terms") govern your access to and use of our website, including any content, functionality, and services offered on or through our website.
                </p>
                <p className="font-xl" data-aos="fade-up">
                  Please read these Terms carefully before using our website. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our website.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" data-aos="fade-up">Use of Our Website</h2>
                <h3 className="text-lg font-semibold mt-4 mb-2" data-aos="fade-up">Eligibility</h3>
                <p className="font-xl" data-aos="fade-up">
                  You must be at least 13 years old to use our website. By using our website, you represent and warrant that you meet this requirement.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2" data-aos="fade-up">License</h3>
                <p className="font-xl" data-aos="fade-up">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our website for your personal, non-commercial use.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Ban className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Prohibited Activities</h2>
                <p className="font-xl" data-aos="fade-up">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1" data-aos="fade-up">
                  <li>Using the website for any illegal purpose or in violation of any local, state, national, or international law</li>
                  <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the website</li>
                  <li>Using the website in a manner that could disable, overburden, damage, or impair the site</li>
                  <li>Attempting to impersonate another user or person</li>
                  <li>Using any robot, spider, or other automatic device, process, or means to access the website for any purpose</li>
                  <li>Introducing any viruses, Trojan horses, worms, logic bombs, or other harmful material</li>
                  <li>Collecting or tracking the personal information of others</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" data-aos="fade-up">Disclaimer of Warranties</h2>
                <p className="font-xl" data-aos="fade-up">
                  THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER MULTICALC NOR ANY PERSON ASSOCIATED WITH MULTICALC MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE.
                </p>
                <p className="mt-2" data-aos="fade-up">
                  WITHOUT LIMITING THE FOREGOING, NEITHER MULTICALC NOR ANYONE ASSOCIATED WITH MULTICALC REPRESENTS OR WARRANTS THAT THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" data-aos="fade-up">Limitation of Liability</h2>
                <p className="font-xl" data-aos="fade-up">
                  TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL MULTICALC, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" data-aos="fade-up">Indemnification</h2>
                <p className="font-xl" data-aos="fade-up">
                  You agree to defend, indemnify, and hold harmless MultiCalc, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the website.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" data-aos="fade-up">Changes to These Terms</h2>
                <p className="font-xl" data-aos="fade-up">
                  We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the website thereafter. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" data-aos="fade-up">Contact Us</h2>
                <p className="font-xl" data-aos="fade-up">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2" data-aos="fade-up">
                  <strong>Email:</strong> terms@multicalc.example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}