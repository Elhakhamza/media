"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function FAQsPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqCategories = [
    {
      category: "Getting Started",
      icon: HelpCircle,
      faqs: [
        {
          question: "How do I get started with Adverzo Media's marketing services?",
          answer:
            "Getting started is simple! Book a free 30-minute strategy consultation with our performance marketing experts. We'll analyze your current digital marketing efforts, identify growth opportunities, audit your existing campaigns, and create a customized action plan to achieve your specific business goals and KPIs. During this call, we'll also discuss which services are best suited for your business and provide a detailed proposal.",
        },
        {
          question: "What information do you need from me to get started?",
          answer:
            "To provide the best service, we'll need access to your current advertising accounts (Google Ads, Facebook, etc.), website analytics, information about your target audience, business goals, current marketing budget, and any previous campaign data. Don't worry if you don't have all of this - we can help you set up tracking and gather the necessary information as part of our onboarding process.",
        },
        {
          question: "How long does it take to see results from your marketing campaigns?",
          answer:
            "While every business is different, most clients start seeing initial improvements within 2-4 weeks of campaign launch. Significant results typically become apparent within 6-8 weeks as we gather data and optimize campaigns. However, the timeline can vary based on factors like industry competition, budget size, and campaign complexity. We provide weekly reports so you can track progress from day one.",
        },
        {
          question: "Do you work with businesses in my industry?",
          answer:
            "We work with businesses across a wide range of industries including e-commerce, SaaS, healthcare, finance, real estate, professional services, and more. Our data-driven approach and platform expertise allow us to adapt our strategies to virtually any industry. During our initial consultation, we'll discuss your specific industry challenges and share relevant case studies from similar businesses.",
        },
      ],
    },
    {
      category: "Services & Pricing",
      icon: MessageCircle,
      faqs: [
        {
          question: "What digital advertising platforms do you specialize in?",
          answer:
            "We specialize in all major advertising platforms including Google Ads (Search, Display, Shopping, YouTube), Meta advertising (Facebook & Instagram), TikTok Ads, Snapchat Advertising, Microsoft Bing Ads, Taboola native advertising, and Outbrain content promotion. Our multi-platform expertise ensures maximum reach and optimal performance across all relevant digital channels for your business.",
        },
        {
          question: "What are your digital marketing service pricing and packages?",
          answer:
            "Our performance marketing pricing is customized based on your specific business needs, advertising budget, and growth goals. We offer flexible service packages starting from $2,500/month for small businesses to comprehensive enterprise-level solutions. Pricing typically includes management fees plus your advertising spend. Contact us for a personalized quote and free strategy consultation tailored to your requirements.",
        },
        {
          question: "Do you require long-term contracts?",
          answer:
            "We offer both month-to-month and longer-term contract options. While we don't require long-term commitments, we recommend at least a 3-month engagement to allow sufficient time for campaign optimization and meaningful results. Many clients choose longer terms to take advantage of our volume discounts and ensure consistent campaign performance. We're confident in our results and believe our performance will speak for itself.",
        },
        {
          question: "What's included in your monthly management fee?",
          answer:
            "Our monthly management fee includes campaign setup and optimization, keyword research and management, ad copy creation and testing, landing page recommendations, bid management, conversion tracking setup, monthly performance reports, dedicated account manager, and ongoing strategy consultations. The specific services included depend on your chosen package, but we always provide transparent reporting and proactive campaign management.",
        },
      ],
    },
    {
      category: "Campaign Management",
      icon: Phone,
      faqs: [
        {
          question: "How do you measure and report campaign performance?",
          answer:
            "We use advanced analytics and tracking to measure key performance indicators (KPIs) including ROAS, cost per acquisition, conversion rates, click-through rates, and lifetime customer value. You'll receive detailed monthly reports with insights and recommendations, plus access to a real-time dashboard. We also provide weekly check-ins and are always available to discuss performance and strategy adjustments.",
        },
        {
          question: "Can you work with my existing marketing team?",
          answer:
            "We frequently collaborate with in-house marketing teams, other agencies, and freelancers. We can work as an extension of your team, focusing on paid advertising while you handle other marketing activities, or we can take a more comprehensive approach. We're flexible and will adapt our working style to complement your existing team structure and processes.",
        },
        {
          question: "What happens if my ad account gets suspended or disabled?",
          answer:
            "Account suspensions can happen due to policy violations or platform algorithm changes. If this occurs, we immediately work on account recovery through proper appeals processes, policy compliance reviews, and direct communication with platform representatives. We also offer enterprise-level ad account solutions that provide additional stability and support. Our experience with account recovery has a high success rate.",
        },
        {
          question: "How often do you optimize and adjust campaigns?",
          answer:
            "We monitor campaigns daily and make optimizations as needed based on performance data. Minor adjustments like bid changes and budget reallocations happen continuously, while larger strategic changes are implemented weekly or bi-weekly after sufficient data analysis. We believe in data-driven optimization rather than making changes too frequently, which can disrupt campaign learning phases.",
        },
      ],
    },
    {
      category: "Results & ROI",
      icon: Mail,
      faqs: [
        {
          question: "What kind of ROI can I expect from your services?",
          answer:
            "While results vary by industry and business model, our clients typically see an average 300% improvement in ROAS within the first 3-6 months. Many clients achieve 4:1 to 8:1 return on ad spend, meaning they generate $4-8 in revenue for every $1 spent on advertising. However, we set realistic expectations based on your specific industry, competition, and business model during our initial consultation.",
        },
        {
          question: "Do you guarantee specific results or performance metrics?",
          answer:
            "While we can't guarantee specific results due to the variable nature of digital advertising (market conditions, competition, platform changes), we do guarantee our commitment to continuous optimization and transparent reporting. We work on a performance-focused model and have a 98% client retention rate, which speaks to our ability to deliver consistent value and results for our clients.",
        },
        {
          question: "How do you handle underperforming campaigns?",
          answer:
            "When campaigns underperform, we immediately conduct a comprehensive analysis to identify issues, whether they're related to targeting, creative, landing pages, or market conditions. We then implement strategic adjustments, which may include audience refinement, creative testing, landing page optimization, or budget reallocation. If significant changes are needed, we'll discuss strategy pivots with you before implementation.",
        },
        {
          question: "Can you help improve my website's conversion rate?",
          answer:
            "Yes! Conversion rate optimization (CRO) is a crucial part of our service. We analyze your website and landing pages, identify conversion barriers, and provide recommendations for improvements. Our design team can create high-converting landing pages, and we conduct A/B tests to optimize conversion rates. Many clients see 20-50% improvements in conversion rates through our CRO efforts.",
        },
      ],
    },
    {
      category: "Technical & Support",
      icon: HelpCircle,
      faqs: [
        {
          question: "What tracking and analytics tools do you use?",
          answer:
            "We use a comprehensive suite of tracking and analytics tools including Google Analytics 4, Google Tag Manager, Facebook Pixel, platform-native analytics, call tracking software, and advanced attribution modeling tools. We also integrate with CRM systems and e-commerce platforms to provide complete visibility into the customer journey from first click to final purchase and beyond.",
        },
        {
          question: "How do you handle data privacy and compliance?",
          answer:
            "We take data privacy seriously and ensure all campaigns comply with GDPR, CCPA, and other relevant regulations. We implement proper consent management, use privacy-compliant tracking methods, and stay updated on platform policy changes. Our team is trained on privacy best practices, and we can help you implement necessary compliance measures for your business.",
        },
        {
          question: "What support and communication can I expect?",
          answer:
            "Each client is assigned a dedicated account manager who serves as your primary point of contact. You'll have direct access via email and phone, plus scheduled monthly strategy calls. We also provide emergency support for urgent issues. Our team is responsive and typically responds to inquiries within 4-6 hours during business days. We believe in proactive communication and will reach out with important updates or opportunities.",
        },
        {
          question: "Do you provide training for my team?",
          answer:
            "Yes, we offer training sessions for your internal team on campaign management, analytics interpretation, and digital marketing best practices. This can be particularly valuable if you want to eventually bring some marketing activities in-house or simply want your team to better understand the strategies we're implementing. Training can be customized to your team's skill level and specific needs.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get answers to common questions about our performance marketing services, pricing, campaign management, and
            more. Can't find what you're looking for? Contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white px-8 py-3">
                Ask a Question
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#00D4FF] rounded-full flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A2540]">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex
                  return (
                    <Card key={faqIndex} className="overflow-hidden">
                      <CardContent className="p-0">
                        <button
                          className="w-full py-6 px-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                          aria-expanded={openFaq === globalIndex}
                          aria-controls={`faq-answer-${globalIndex}`}
                        >
                          <span className="text-lg font-semibold text-[#0A2540] pr-4">{faq.question}</span>
                          {openFaq === globalIndex ? (
                            <ChevronUp className="w-5 h-5 text-[#00D4FF] flex-shrink-0" aria-hidden="true" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#00D4FF] flex-shrink-0" aria-hidden="true" />
                          )}
                        </button>
                        {openFaq === globalIndex && (
                          <div id={`faq-answer-${globalIndex}`} className="px-6 pb-6">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Still Have Questions?</h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Our team is here to help! Choose the best way to get in touch with us for personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Call Us</h3>
                <p className="text-[#666666] mb-4">Speak directly with our experts</p>
                <a href="tel:+13074001232" className="text-[#00D4FF] hover:underline font-semibold">
                  +1 (307) 400-1232
                </a>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Email Us</h3>
                <p className="text-[#666666] mb-4">Get detailed answers via email</p>
                <a href="mailto:contact@adverzomedia.com" className="text-[#00D4FF] hover:underline font-semibold">
                  contact@adverzomedia.com
                </a>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Free Consultation</h3>
                <p className="text-[#666666] mb-4">Book a strategy session</p>
                <Link href="/#contact">
                  <Button className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white">Schedule Call</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Popular Resources</h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Explore these helpful resources to learn more about our services and digital marketing best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Service Overview</h3>
                <p className="text-[#666666] mb-4 text-sm">Complete guide to our digital marketing services</p>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">About Our Team</h3>
                <p className="text-[#666666] mb-4 text-sm">Meet the experts behind your success</p>
                <Link href="/about-us">
                  <Button
                    variant="outline"
                    className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white"
                  >
                    Meet the Team
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Privacy Policy</h3>
                <p className="text-[#666666] mb-4 text-sm">How we protect and handle your data</p>
                <Link href="/privacy-policy">
                  <Button
                    variant="outline"
                    className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white"
                  >
                    Read Policy
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Terms of Service</h3>
                <p className="text-[#666666] mb-4 text-sm">Our service terms and conditions</p>
                <Link href="/terms-of-service">
                  <Button
                    variant="outline"
                    className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white"
                  >
                    View Terms
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let questions hold you back from achieving your marketing goals. Let's discuss your specific needs and
            create a custom strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white px-8 py-3">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 bg-transparent"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
