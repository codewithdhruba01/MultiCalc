import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Shield, Clock, User, FileText, Lock, Eye, Database, Globe } from 'lucide-react'

export default function PrivacyPolicy() {
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
        <div className="max-w-4xl mx-auto">
          <div
            className="mb-8 text-center"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Introduction</h2>
                <p>
                  Welcome to MultiCalc. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with the terms, please do not access the website.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
                <p>We may collect information about you in a variety of ways:</p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Personal Data</h3>
                <p>
                  While using our calculator services, we do not require you to provide personally identifiable information. Our calculators function without user accounts or personal data collection.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Usage Data</h3>
                <p>
                  We may collect anonymous usage data about how you use our website, which calculators you access, and interaction patterns. This data is used solely to improve our services.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Cookies and Tracking</h3>
                <p>
                  We may use cookies and similar tracking technologies. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>To provide and maintain our website</li>
                  <li>To improve website functionality and user experience</li>
                  <li>To analyze usage patterns and trends</li>
                  <li>To detect and address technical issues</li>
                  <li>To comply with applicable laws</li>
                </ul>
              </div>
            </div>

            {/* Disclosure */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Disclosure of Your Information</h2>
                <p>We do not sell or trade your information. We may disclose information only in the following cases:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights or property</li>
                  <li>To prevent or investigate wrongdoing</li>
                  <li>To protect user safety</li>
                </ul>
              </div>
            </div>

            {/* Security */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your information. However, no method is 100% secure, and we cannot guarantee its absolute security.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe your child has provided us with information, please contact us.
                </p>
              </div>
            </div>

            {/* Changes */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p>If you have any questions, contact us at:</p>
                <p className="mt-2">
                  <strong>Email:</strong> privacy@multicalc.example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
