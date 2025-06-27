import { Container } from '@/components/ui/Container'
import { Shield, Clock, User, FileText, Lock, Eye, Database, Globe } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="py-8 md:py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Introduction</h2>
                <p>
                  Welcome to MultiCalc We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the website.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect via the website includes:
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Personal Data</h3>
                <p>
                  While using our calculator services, we do not require you to provide us with personally identifiable information. Our calculators function without the need for user accounts or personal data collection.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Usage Data</h3>
                <p>
                  We may collect anonymous usage data, including information about how you use our website, which calculators you access, and general interaction patterns. This data is used solely to improve our services and user experience.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Cookies and Tracking Technologies</h3>
                <p>
                  We may use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
                <p>
                  We may use the information we collect from you for the following purposes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>To provide and maintain our website</li>
                  <li>To improve our website functionality and user experience</li>
                  <li>To analyze usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To comply with applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Disclosure of Your Information</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your information to outside parties. However, we may disclose information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights or property</li>
                  <li>To prevent or investigate possible wrongdoing in connection with the website</li>
                  <li>To protect the personal safety of users of the website or the public</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
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