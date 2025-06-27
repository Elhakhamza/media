import { Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-[#00D4FF]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Introduction
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Adverzo Media LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                adverzomedia.com or use our services.
              </p>
              <p className="text-[#333333] leading-relaxed">
                By using our website or services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Personal Information</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Business information (company name, industry, website)</li>
                <li>Marketing preferences and communication history</li>
                <li>Payment and billing information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Automatically Collected Information</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-[#00D4FF]" />
                How We Use Your Information
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about our services</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                </li>
                <li>
                  <strong>Consent:</strong> When you have given explicit consent to share your information
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Data Security
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-[#333333] leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Your Rights and Choices</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request access to your personal information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
              </ul>
              <p className="text-[#333333] leading-relaxed">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@adverzomedia.com" className="text-[#00D4FF] hover:underline">
                  privacy@adverzomedia.com
                </a>
                .
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Cookies and Tracking</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can
                control cookie settings through your browser preferences. For more information, please see our{" "}
                <Link href="/cookie-policy" className="text-[#00D4FF] hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Contact Us</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
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
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Policy Updates</h2>
              <p className="text-[#333333] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date. We encourage you to review this policy
                periodically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
