"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("paid-advertising")

  const services = {
    "paid-advertising": [
      {
        platform: "Meta Advertising",
        logo: "/images/meta.png",
        description:
          "From Facebook to Instagram, we leverage the vast social ecosystem to reach your desired audience with pinpoint accuracy and maximize your return on ad spend (ROAS).",
        features: [
          "Advanced audience targeting and lookalike audiences",
          "Creative testing and optimization",
          "Conversion tracking and attribution",
          "Dynamic product ads and catalog management",
          "Instagram Stories and Reels advertising",
          "Detailed performance reporting and insights",
        ],
        benefits: [
          "Reach 2.9+ billion active users",
          "Advanced targeting capabilities",
          "Multiple ad formats and placements",
          "Powerful retargeting options",
        ],
      },
      {
        platform: "Google Ads Management",
        logo: "/images/google.png",
        description:
          "Dominate search results without draining your budget. We master the trifecta of success: exceptional ads, high-converting web pages, and strategic bid management for maximum ROI.",
        features: [
          "Search, Display, and Shopping campaigns",
          "YouTube advertising and video campaigns",
          "Smart bidding and automated optimization",
          "Keyword research and competitive analysis",
          "Landing page optimization",
          "Conversion tracking and attribution modeling",
        ],
        benefits: [
          "Capture high-intent search traffic",
          "Immediate visibility in search results",
          "Precise budget control and optimization",
          "Comprehensive campaign performance data",
        ],
      },
      {
        platform: "TikTok Marketing",
        logo: "/images/tiktok.png",
        description:
          "As a leading TikTok marketing agency, we help you create native, engaging content that captures attention and drives conversions on the world's fastest-growing social platform.",
        features: [
          "In-feed ads and branded content",
          "Spark Ads and TopView campaigns",
          "Hashtag challenges and brand takeovers",
          "TikTok Pixel implementation and tracking",
          "Creative production and optimization",
          "Influencer collaboration management",
        ],
        benefits: [
          "Access to 1+ billion active users",
          "High engagement rates and viral potential",
          "Younger demographic targeting",
          "Native content integration",
        ],
      },
      {
        platform: "Snapchat Advertising",
        logo: "/images/snapchat.png",
        description:
          "Cut through the noise with Snapchat's unique AR features. We create visually striking, immersive ad experiences that resonate with a highly engaged younger demographic.",
        features: [
          "Snap Ads and Story Ads",
          "AR Lens and Filter campaigns",
          "Dynamic Product Ads",
          "Pixel implementation and conversion tracking",
          "Audience targeting and lookalike creation",
          "Creative optimization and testing",
        ],
        benefits: [
          "Reach 375+ million daily active users",
          "Innovative AR advertising formats",
          "High engagement with Gen Z audience",
          "Premium brand safety environment",
        ],
      },
    ],
    "design-development": [
      {
        title: "Professional Graphic Design",
        image: "/images/graphic-design.png",
        description:
          "Our creative team has meticulously crafted thousands of high-performance visuals for digital marketing campaigns. Professional graphic design is a standard inclusion in all our marketing contracts.",
        features: [
          "Custom ad creatives for all platforms",
          "Brand identity and logo design",
          "Social media graphics and templates",
          "Display advertising banners",
          "Infographics and data visualizations",
          "Print marketing materials",
        ],
        benefits: [
          "Consistent brand messaging",
          "Higher click-through rates",
          "Professional brand image",
          "Unlimited revisions included",
        ],
      },
      {
        title: "High-Converting Landing Pages",
        image: "/images/landing-pages.png",
        description:
          "Creating landing pages may be easy, but crafting ones that actually convert visitors into customers is a true art mastered to perfection by our conversion optimization experts.",
        features: [
          "Mobile-responsive design",
          "A/B testing and optimization",
          "Fast loading speed optimization",
          "Conversion tracking implementation",
          "Lead capture form optimization",
          "SEO-friendly structure",
        ],
        benefits: [
          "Higher conversion rates",
          "Better Quality Scores",
          "Improved user experience",
          "Detailed performance analytics",
        ],
      },
      {
        title: "Video Content Creation",
        image: "/images/video-creations.png",
        description:
          "Video marketing is a powerful tool for driving conversions across all platforms. Our video production team can create effective promotional videos tailored to your brand and audience.",
        features: [
          "Promotional and explainer videos",
          "Social media video content",
          "Product demonstration videos",
          "Testimonial and case study videos",
          "Animated graphics and motion design",
          "Video editing and post-production",
        ],
        benefits: [
          "Higher engagement rates",
          "Better storytelling capabilities",
          "Increased brand awareness",
          "Multi-platform compatibility",
        ],
      },
      {
        title: "Website Design & Development",
        image: "/images/website-development.png",
        description:
          "Our expert web development team can give your website a complete makeover, enhancing its beauty, usability, and page speed to supercharge your conversion rates and SEO rankings.",
        features: [
          "Responsive web design",
          "E-commerce development",
          "Content management systems",
          "SEO optimization",
          "Performance optimization",
          "Security implementation",
        ],
        benefits: [
          "Improved user experience",
          "Better search engine rankings",
          "Higher conversion rates",
          "Mobile-friendly design",
        ],
      },
    ],
    "agency-accounts": [
      {
        platform: "Meta Business Manager",
        logo: "/images/meta-new.png",
        description:
          "Enhance your Facebook and Instagram advertising efforts through our Enterprise-Level Ad Account service, specifically designed for businesses facing disabled Facebook ad accounts or policy issues.",
        features: [
          "Enterprise-level ad account access",
          "Policy compliance assistance",
          "Account recovery services",
          "Advanced targeting capabilities",
          "Priority support access",
          "Dedicated account management",
        ],
        benefits: [
          "Avoid account suspension issues",
          "Higher spending limits",
          "Priority platform support",
          "Enhanced account stability",
        ],
      },
      {
        platform: "TikTok Ads Manager",
        logo: "/images/tiktok-new.png",
        description:
          "Supercharge your TikTok advertising campaigns with our Enterprise-Level Ad Account service, expertly crafted for businesses dealing with disabled TikTok ad accounts or compliance challenges.",
        features: [
          "Enterprise ad account setup",
          "Compliance monitoring",
          "Account restoration services",
          "Advanced campaign features",
          "Dedicated support channel",
          "Performance optimization tools",
        ],
        benefits: [
          "Stable advertising platform",
          "Advanced campaign options",
          "Professional account management",
          "Reduced policy violations",
        ],
      },
      {
        platform: "Google Ads Account",
        logo: "/images/google-new.png",
        description:
          "Elevate your Google advertising strategy with our Enterprise-Level Ad Account service, specifically tailored for businesses coping with suspended Google Ads accounts or policy issues.",
        features: [
          "MCC (Manager) account access",
          "Policy violation resolution",
          "Account suspension recovery",
          "Advanced bidding strategies",
          "Priority Google support",
          "Enhanced reporting capabilities",
        ],
        benefits: [
          "Professional account structure",
          "Better account health",
          "Advanced optimization features",
          "Dedicated Google support",
        ],
      },
      {
        platform: "Snapchat Ads Manager",
        logo: "/images/snapchat-new.png",
        description:
          "Amplify your Snapchat advertising efforts with our Enterprise-Level Ad Account service, professionally designed for businesses dealing with disabled Snapchat accounts or policy violations.",
        features: [
          "Enterprise account setup",
          "Policy compliance guidance",
          "Account recovery assistance",
          "Advanced AR capabilities",
          "Dedicated support access",
          "Performance monitoring tools",
        ],
        benefits: [
          "Stable advertising environment",
          "Access to premium features",
          "Professional account management",
          "Enhanced creative capabilities",
        ],
      },
    ],
  }

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses starting their digital marketing journey",
      features: [
        "1-2 advertising platforms",
        "Basic campaign setup and management",
        "Monthly performance reports",
        "Email support",
        "Landing page optimization",
        "Basic creative design",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing businesses looking to scale their marketing efforts",
      features: [
        "3-4 advertising platforms",
        "Advanced campaign optimization",
        "Bi-weekly performance reports",
        "Phone and email support",
        "A/B testing and optimization",
        "Custom creative design",
        "Conversion tracking setup",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large businesses with complex needs",
      features: [
        "All advertising platforms",
        "Dedicated account manager",
        "Weekly performance reports",
        "Priority support",
        "Advanced analytics and insights",
        "Custom integrations",
        "White-label solutions available",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-[#00D4FF]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Digital Marketing Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive performance marketing solutions designed to achieve 10X growth for your business through
            data-driven strategies and expert campaign management.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-xl text-[#333333]">
              Discover your full growth potential through our exceptional performance marketing services and conversion
              optimization expertise.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-[#F6F9FC] rounded-lg p-1">
                <button
                  className={`px-6 py-3 rounded-md transition-all ${
                    activeTab === "paid-advertising" ? "bg-[#00D4FF] text-white" : "text-[#333333] hover:bg-white"
                  }`}
                  onClick={() => setActiveTab("paid-advertising")}
                >
                  Paid Advertising Management
                </button>
                <button
                  className={`px-6 py-3 rounded-md transition-all ${
                    activeTab === "design-development" ? "bg-[#00D4FF] text-white" : "text-[#333333] hover:bg-white"
                  }`}
                  onClick={() => setActiveTab("design-development")}
                >
                  Design & Development Services
                </button>
                <button
                  className={`px-6 py-3 rounded-md transition-all ${
                    activeTab === "agency-accounts" ? "bg-[#00D4FF] text-white" : "text-[#333333] hover:bg-white"
                  }`}
                  onClick={() => setActiveTab("agency-accounts")}
                >
                  Enterprise Account Solutions
                </button>
              </div>
            </div>

            {/* Service Details */}
            <div className="space-y-8">
              {services[activeTab as keyof typeof services].map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                          <img
                            src={("logo" in service ? service.logo : service.image) || "/placeholder.svg"}
                            alt={`${"platform" in service ? service.platform : service.title} service`}
                            className="w-12 h-12 object-contain mr-4"
                          />
                          <h3 className="text-2xl font-bold text-[#0A2540]">
                            {"platform" in service ? service.platform : service.title}
                          </h3>
                        </div>
                        <p className="text-[#666666] leading-relaxed mb-6">{service.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-[#00D4FF] mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-[#666666] text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#0A2540] mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Star className="w-4 h-4 text-[#00D4FF] mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-[#666666] text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-1">
                        <div className="bg-[#F6F9FC] p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-[#0A2540] mb-4">Get Started Today</h4>
                          <p className="text-[#666666] mb-4 text-sm">
                            Ready to transform your digital marketing with this service?
                          </p>
                          <Link href="/#contact">
                            <Button className="w-full bg-[#00D4FF] hover:bg-[#00B8E6] text-white">
                              Get Free Consultation
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-4">Transparent Pricing Plans</h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include dedicated account management and
              transparent reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular ? "border-2 border-[#00D4FF] shadow-lg" : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#00D4FF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-[#00D4FF] mb-2">
                      {plan.price}
                      <span className="text-lg text-[#666666] font-normal">{plan.period}</span>
                    </div>
                    <p className="text-[#666666]">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#00D4FF] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-[#666666]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-[#00D4FF] hover:bg-[#00B8E6] text-white"
                          : "bg-transparent border-2 border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white"
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Adverzo Media to manage their performance marketing and drive real
            growth. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white px-8 py-3">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/about-us">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 bg-transparent"
              >
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
