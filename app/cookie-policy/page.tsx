import { Cookie, Settings, BarChart, Target, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <Cookie className="w-16 h-16 mx-auto mb-6 text-[#00D4FF]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-[#00D4FF]" />
                What Are Cookies?
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit a website. They help websites
                remember information about your visit, such as your preferred language and other settings, which can
                make your next visit easier and the site more useful to you.
              </p>
              <p className="text-[#333333] leading-relaxed">
                We use cookies and similar technologies (such as web beacons, pixels, and local storage) to enhance your
                experience on our website and provide our services effectively.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Types of Cookies We Use</h2>

              {/* Essential Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-[#00D4FF]" />
                  Essential Cookies
                </h3>
                <p className="text-[#333333] leading-relaxed mb-3">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="list-disc list-inside text-[#333333] space-y-1">
                  <li>Session management and security</li>
                  <li>Form submission and data processing</li>
                  <li>Load balancing and performance optimization</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3 flex items-center">
                  <BarChart className="w-5 h-5 mr-2 text-[#00D4FF]" />
                  Analytics Cookies
                </h3>
                <p className="text-[#333333] leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously.
                </p>
                <ul className="list-disc list-inside text-[#333333] space-y-1">
                  <li>Google Analytics for website traffic analysis</li>
                  <li>Page views, bounce rates, and user behavior</li>
                  <li>Popular content and navigation patterns</li>
                  <li>Device and browser information</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-[#00D4FF]" />
                  Marketing Cookies
                </h3>
                <p className="text-[#333333] leading-relaxed mb-3">
                  These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing
                  campaigns.
                </p>
                <ul className="list-disc list-inside text-[#333333] space-y-1">
                  <li>Facebook Pixel for ad targeting and conversion tracking</li>
                  <li>Google Ads conversion tracking</li>
                  <li>LinkedIn Insight Tag for professional targeting</li>
                  <li>Retargeting and remarketing campaigns</li>
                </ul>
              </div>

              {/* Functional Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-[#00D4FF]" />
                  Functional Cookies
                </h3>
                <p className="text-[#333333] leading-relaxed mb-3">
                  These cookies enable enhanced functionality and personalization to improve your experience.
                </p>
                <ul className="list-disc list-inside text-[#333333] space-y-1">
                  <li>Language and region preferences</li>
                  <li>Chat widget functionality</li>
                  <li>Form auto-fill and saved preferences</li>
                  <li>Customized content display</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Third-Party Cookies</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                We work with trusted third-party service providers who may set cookies on our website:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Google Services</h4>
                  <ul className="text-sm text-[#333333] space-y-1">
                    <li>• Google Analytics</li>
                    <li>• Google Ads</li>
                    <li>• Google Tag Manager</li>
                  </ul>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Social Media</h4>
                  <ul className="text-sm text-[#333333] space-y-1">
                    <li>• Facebook Pixel</li>
                    <li>• LinkedIn Insight Tag</li>
                    <li>• Twitter Analytics</li>
                  </ul>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Communication</h4>
                  <ul className="text-sm text-[#333333] space-y-1">
                    <li>• Live chat widgets</li>
                    <li>• Email marketing tools</li>
                    <li>• Customer support platforms</li>
                  </ul>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Performance</h4>
                  <ul className="text-sm text-[#333333] space-y-1">
                    <li>• Content delivery networks</li>
                    <li>• Website optimization tools</li>
                    <li>• Security services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Managing Your Cookie Preferences</h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Browser Settings</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>View and delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when you close your browser</li>
                <li>Receive notifications when cookies are set</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Browser-Specific Instructions</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Chrome</h4>
                  <p className="text-sm text-[#333333]">
                    Settings → Privacy and Security → Cookies and other site data
                  </p>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Firefox</h4>
                  <p className="text-sm text-[#333333]">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Safari</h4>
                  <p className="text-sm text-[#333333]">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2">Edge</h4>
                  <p className="text-sm text-[#333333]">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Opt-Out Links</h3>
              <p className="text-[#333333] leading-relaxed mb-4">You can also opt out of specific tracking services:</p>
              <ul className="list-disc list-inside text-[#333333] space-y-2">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D4FF] hover:underline"
                  >
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/settings?tab=ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D4FF] hover:underline"
                  >
                    Facebook Ad Preferences
                  </a>
                </li>
                <li>
                  <a
                    href="http://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D4FF] hover:underline"
                  >
                    Network Advertising Initiative
                  </a>
                </li>
                <li>
                  <a
                    href="http://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D4FF] hover:underline"
                  >
                    Digital Advertising Alliance
                  </a>
                </li>
              </ul>
            </div>

            {/* Impact of Disabling */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Impact of Disabling Cookies</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Please note that disabling cookies may affect your experience on our website:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Some features may not function properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized content and recommendations may not be available</li>
                <li>We may not be able to remember your preferences</li>
                <li>Analytics and improvement efforts may be limited</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Contact Us</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-[#F6F9FC] p-6 rounded-lg">
                <p className="text-[#333333] mb-2">
                  <strong>Adverzo Media LLC</strong>
                </p>
                <p className="text-[#333333] mb-2">30 N Gould St Ste R, Sheridan, WY 82801 USA</p>
                <p className="text-[#333333] mb-2">
                  Email:{" "}
                  <a href="mailto:privacy@adverzomedia.com" className="text-[#00D4FF] hover:underline">
                    privacy@adverzomedia.com
                  </a>
                </p>
                <p className="text-[#333333]">
                  Phone:{" "}
                  <a href="tel:+13074001232" className="text-[#00D4FF] hover:underline">
                    +1 (307) 400-1232
                  </a>
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Updates to This Policy</h2>
              <p className="text-[#333333] leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                updated policy on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
