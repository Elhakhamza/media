import { RefreshCw, CreditCard, Clock, AlertCircle, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <RefreshCw className="w-16 h-16 mx-auto mb-6 text-[#00D4FF]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our commitment to client satisfaction includes a clear and fair refund policy for our services.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <RefreshCw className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Refund Policy Overview
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                At Adverzo Media LLC, we are committed to delivering exceptional digital marketing services. This refund
                policy outlines the circumstances under which refunds may be provided and the process for requesting
                them.
              </p>
              <p className="text-[#333333] leading-relaxed">
                Please read this policy carefully before engaging our services, as it forms part of your service
                agreement with us.
              </p>
            </div>

            {/* Service Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Refund Eligibility by Service Type</h2>

              {/* Management Services */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-[#00D4FF]" />
                  Monthly Management Services
                </h3>
                <div className="bg-[#F6F9FC] p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-[#0A2540] mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Eligible for Refund
                  </h4>
                  <ul className="list-disc list-inside text-[#333333] space-y-1">
                    <li>Services not delivered as specified in the agreement</li>
                    <li>Failure to provide agreed-upon deliverables within 30 days</li>
                    <li>Cancellation within the first 7 days of service commencement</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0A2540] mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                    Not Eligible for Refund
                  </h4>
                  <ul className="list-disc list-inside text-[#333333] space-y-1">
                    <li>Services already performed and delivered</li>
                    <li>Cancellation after 30 days of service delivery</li>
                    <li>Dissatisfaction with campaign performance (results not guaranteed)</li>
                    <li>Changes in business priorities or budget constraints</li>
                  </ul>
                </div>
              </div>

              {/* One-time Services */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3">One-Time Project Services</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  For one-time services such as website design, landing page creation, or creative development:
                </p>
                <ul className="list-disc list-inside text-[#333333] mb-4 space-y-2">
                  <li>
                    <strong>Before Work Begins:</strong> Full refund available within 48 hours of payment
                  </li>
                  <li>
                    <strong>During Development:</strong> Partial refund based on work completed
                  </li>
                  <li>
                    <strong>After Delivery:</strong> No refund once final deliverables are provided and approved
                  </li>
                  <li>
                    <strong>Revision Period:</strong> Unlimited revisions within agreed scope for 14 days
                  </li>
                </ul>
              </div>

              {/* Setup Fees */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Setup and Onboarding Fees</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  Setup fees are generally non-refundable once onboarding activities have commenced, including:
                </p>
                <ul className="list-disc list-inside text-[#333333] space-y-1">
                  <li>Account setup and configuration</li>
                  <li>Initial strategy development</li>
                  <li>Platform integrations and tracking setup</li>
                  <li>Team onboarding and training sessions</li>
                </ul>
              </div>
            </div>

            {/* Ad Spend Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Advertising Spend Policy</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">Important Notice</h3>
                <p className="text-[#333333] leading-relaxed">
                  Advertising spend (money spent on platforms like Google, Facebook, etc.) is separate from our service
                  fees and is <strong>never refundable</strong>. This spend goes directly to the advertising platforms
                  and is outside our control.
                </p>
              </div>
              <ul className="list-disc list-inside text-[#333333] space-y-2">
                <li>Ad spend is billed directly by platforms or through your provided payment methods</li>
                <li>We manage budgets according to your approved strategy</li>
                <li>Platform refund policies apply to advertising spend (not our policies)</li>
                <li>We are not responsible for platform policy changes or account issues</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-[#00D4FF]" />
                Refund Request Process
              </h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">How to Request a Refund</h3>
              <ol className="list-decimal list-inside text-[#333333] mb-6 space-y-2">
                <li>
                  Contact us in writing at{" "}
                  <a href="mailto:billing@adverzomedia.com" className="text-[#00D4FF] hover:underline">
                    billing@adverzomedia.com
                  </a>
                </li>
                <li>Include your account details and reason for the refund request</li>
                <li>Provide any supporting documentation or evidence</li>
                <li>Allow up to 5 business days for initial review and response</li>
              </ol>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Review Process</h3>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>We will review your request within 5 business days</li>
                <li>Additional information may be requested during review</li>
                <li>You will receive a written decision with explanation</li>
                <li>Approved refunds are processed within 7-10 business days</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Refund Methods</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                Approved refunds will be processed using the same payment method used for the original transaction:
              </p>
              <ul className="list-disc list-inside text-[#333333] space-y-1">
                <li>Credit card refunds: 3-5 business days</li>
                <li>Bank transfers: 5-7 business days</li>
                <li>PayPal: 1-3 business days</li>
                <li>Check payments: 10-14 business days</li>
              </ul>
            </div>

            {/* Partial Refunds */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Partial Refunds</h2>
              <p className="text-[#333333] leading-relaxed mb-4">In some cases, partial refunds may be appropriate:</p>
              <ul className="list-disc list-inside text-[#333333] mb-6 space-y-2">
                <li>
                  <strong>Prorated Services:</strong> Based on unused portion of monthly services
                </li>
                <li>
                  <strong>Incomplete Projects:</strong> Refund for work not yet performed
                </li>
                <li>
                  <strong>Service Downgrades:</strong> Difference between service levels
                </li>
                <li>
                  <strong>Early Termination:</strong> Unused prepaid services (case-by-case basis)
                </li>
              </ul>
            </div>

            {/* Exceptions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Exceptions and Special Circumstances</h2>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Force Majeure</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                In cases of events beyond our control (natural disasters, platform shutdowns, etc.), we will work with
                clients to find fair solutions, which may include service credits or partial refunds.
              </p>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Platform Policy Changes</h3>
              <p className="text-[#333333] leading-relaxed mb-4">
                If advertising platforms change policies that significantly impact agreed-upon services, we will discuss
                alternative solutions or potential refunds on a case-by-case basis.
              </p>

              <h3 className="text-xl font-semibold text-[#0A2540] mb-3">Account Suspensions</h3>
              <p className="text-[#333333] leading-relaxed mb-6">
                We are not responsible for client account suspensions by advertising platforms. However, we will assist
                with appeals and may provide partial service credits for unused management time.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Dispute Resolution</h2>
              <p className="text-[#333333] leading-relaxed mb-4">If you disagree with a refund decision:</p>
              <ol className="list-decimal list-inside text-[#333333] mb-6 space-y-2">
                <li>Request escalation to senior management within 30 days</li>
                <li>Provide additional evidence or clarification</li>
                <li>Participate in good faith discussions to resolve the matter</li>
                <li>Consider mediation if direct resolution is not possible</li>
              </ol>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Contact Information</h2>
              <p className="text-[#333333] leading-relaxed mb-4">For refund requests or questions about this policy:</p>
              <div className="bg-[#F6F9FC] p-6 rounded-lg">
                <p className="text-[#333333] mb-2">
                  <strong>Billing Department</strong>
                </p>
                <p className="text-[#333333] mb-2">Adverzo Media LLC</p>
                <p className="text-[#333333] mb-2">30 N Gould St Ste R, Sheridan, WY 82801 USA</p>
                <p className="text-[#333333] mb-2">
                  Email:{" "}
                  <a href="mailto:billing@adverzomedia.com" className="text-[#00D4FF] hover:underline">
                    billing@adverzomedia.com
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

            {/* Policy Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Policy Updates</h2>
              <p className="text-[#333333] leading-relaxed">
                This refund policy may be updated from time to time. Material changes will be communicated to existing
                clients via email. The updated policy will apply to services purchased after the effective date of the
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
