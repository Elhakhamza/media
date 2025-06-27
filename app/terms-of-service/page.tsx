import { FileText, Scale, AlertTriangle, CreditCard, Shield, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 text-[#00D4FF]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            These terms govern your use of our services and establish the legal framework for our business relationship.
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
                <FileText className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Agreement to Terms
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Adverzo Media
                LLC ("Company," "we," "our," or "us") regarding your use of our website, services, and products.
              </p>
              <p className="text-[#333333] leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
                Terms, please do not use our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Our Services
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Adverzo Media provides digital marketing services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Paid advertising campaign management</li>
                <li>Creative design and development services</li>
                <li>Landing page creation and optimization</li>
                <li>Video production and marketing</li>
                <li>Website design and development</li>
                <li>Agency account solutions and management</li>
                <li>Marketing strategy and consultation</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">User Responsibilities</h2>
              <p className="text-[#333333] leading-relaxed mb-4">By using our services, you agree to:</p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not engage in fraudulent or deceptive practices</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Payment Terms
              </h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Fees and Billing</h3>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Service fees are as agreed upon in your service agreement</li>
                <li>Payment is due according to the terms specified in your contract</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Ad Spend and Budget Management</h3>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Client is responsible for all advertising spend on platforms</li>
                <li>We manage budgets according to agreed-upon parameters</li>
                <li>Budget changes require written approval</li>
                <li>Platform fees are separate from our service fees</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Our Property</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics,
                logos, and software, are owned by Adverzo Media and protected by intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Client Content</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                You retain ownership of content you provide to us. By using our services, you grant us a license to use,
                modify, and distribute your content as necessary to provide our services.
              </p>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Work Product</h3>
              <p className="text-[#333333] leading-relaxed mb-6">
                Creative work, campaigns, and materials developed specifically for your account become your property
                upon full payment, unless otherwise agreed in writing.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Limitation of Liability
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">To the maximum extent permitted by law:</p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>Our liability is limited to the amount paid for services in the preceding 12 months</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We do not guarantee specific results from marketing campaigns</li>
                <li>Platform policy changes and account suspensions are beyond our control</li>
                <li>You acknowledge that digital marketing involves inherent risks</li>
              </ul>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Warranties and Disclaimers
              </h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Our Warranties</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                We warrant that we will provide services with professional skill and care in accordance with industry
                standards.
              </p>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Disclaimers</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Except as expressly stated, our services are provided "as is" without warranties of any kind. We
                disclaim all warranties, express or implied, including but not limited to warranties of merchantability
                and fitness for a particular purpose.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Termination</h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Termination by Either Party</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Either party may terminate the service agreement with 30 days written notice, unless otherwise specified
                in your contract.
              </p>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Immediate Termination</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                We may terminate services immediately if you breach these Terms, engage in fraudulent activity, or fail
                to pay fees when due.
              </p>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Effect of Termination</h3>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>All outstanding fees become immediately due</li>
                <li>We will provide final reporting and account access for 30 days</li>
                <li>Confidentiality obligations survive termination</li>
                <li>You remain responsible for any ongoing ad spend</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Governing Law and Disputes</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                These Terms are governed by the laws of Wyoming, United States. Any disputes will be resolved through
                binding arbitration in Wyoming, except for claims that may be brought in small claims court.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Contact Information</h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-[#F6F9FC] p-6 rounded-lg">
                <p className="text-[#333333] mb-2">
                  <strong>Adverzo Media LLC</strong>
                </p>
                <p className="text-[#333333] mb-2">30 N Gould St Ste R, Sheridan, WY 82801 USA</p>
                <p className="text-[#333333] mb-2">
                  Email:{" "}
                  <a href="mailto:legal@adverzomedia.com" className="text-[#00D4FF] hover:underline">
                    legal@adverzomedia.com
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

            {/* Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Changes to Terms</h2>
              <p className="text-[#333333] leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by email
                or by posting a notice on our website. Your continued use of our services after such changes constitutes
                acceptance of the new Terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
