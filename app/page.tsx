"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Lightbulb,
  Wand2,
  Settings,
  Rocket,
} from "lucide-react"

export default function AdverzoMediaWebsite() {
  const [activeTab, setActiveTab] = useState("design-development")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY < 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const partners = [
    { name: "Google Ads", logo: "/images/google.png" },
    { name: "Meta Facebook Instagram Ads", logo: "/images/meta.png" },
    { name: "TikTok Advertising", logo: "/images/tiktok.png" },
    { name: "Snapchat Ads", logo: "/images/snapchat.png" },
    { name: "Microsoft Bing Ads", logo: "/images/bing.png" },
    { name: "Taboola Native Advertising", logo: "/images/taboola.png" },
    { name: "Outbrain Content Marketing", logo: "/images/outbrain.png" },
  ]

  const services = {
    "paid-advertising": [
      {
        platform: "Meta Advertising",
        logo: "/images/meta.png",
        description:
          "From Facebook to Instagram, we leverage the vast social ecosystem to reach your desired audience with pinpoint accuracy and maximize your return on ad spend (ROAS).",
      },
      {
        platform: "Google Ads Management",
        logo: "/images/google.png",
        description:
          "Dominate search results without draining your budget. We master the trifecta of success: exceptional ads, high-converting web pages, and strategic bid management for maximum ROI.",
      },
      {
        platform: "TikTok Marketing",
        logo: "/images/tiktok.png",
        description:
          "As a leading TikTok marketing agency, we help you create native, engaging content that captures attention and drives conversions on the world's fastest-growing social platform.",
      },
      {
        platform: "Snapchat Advertising",
        logo: "/images/snapchat.png",
        description:
          "Cut through the noise with Snapchat's unique AR features. We create visually striking, immersive ad experiences that resonate with a highly engaged younger demographic.",
      },
    ],
    "design-development": [
      {
        title: "Professional Graphic Design",
        image: "/images/graphic-design.png",
        description:
          "Our creative team has meticulously crafted thousands of high-performance visuals for digital marketing campaigns. Professional graphic design is a standard inclusion in all our marketing contracts.",
      },
      {
        title: "High-Converting Landing Pages",
        image: "/images/landing-pages.png",
        description:
          "Creating landing pages may be easy, but crafting ones that actually convert visitors into customers is a true art mastered to perfection by our conversion optimization experts.",
      },
      {
        title: "Video Content Creation",
        image: "/images/video-creations.png",
        description:
          "Video marketing is a powerful tool for driving conversions across all platforms. Our video production team can create effective promotional videos tailored to your brand and audience.",
      },
      {
        title: "Website Design & Development",
        image: "/images/website-development.png",
        description:
          "Our expert web development team can give your website a complete makeover, enhancing its beauty, usability, and page speed to supercharge your conversion rates and SEO rankings.",
      },
    ],
    "agency-accounts": [
      {
        platform: "Meta Business Manager",
        logo: "/images/meta-new.png",
        description:
          "Enhance your Facebook and Instagram advertising efforts through our Enterprise-Level Ad Account service, specifically designed for businesses facing disabled Facebook ad accounts or policy issues.",
      },
      {
        platform: "TikTok Ads Manager",
        logo: "/images/tiktok-new.png",
        description:
          "Supercharge your TikTok advertising campaigns with our Enterprise-Level Ad Account service, expertly crafted for businesses dealing with disabled TikTok ad accounts or compliance challenges.",
      },
      {
        platform: "Snapchat Ads Manager",
        logo: "/images/snapchat-new.png",
        description:
          "Amplify your Snapchat advertising efforts with our Enterprise-Level Ad Account service, professionally designed for businesses dealing with disabled Snapchat accounts or policy violations.",
      },
      {
        platform: "Google Ads Account",
        logo: "/images/google-new.png",
        description:
          "Elevate your Google advertising strategy with our Enterprise-Level Ad Account service, specifically tailored for businesses coping with suspended Google Ads accounts or policy issues.",
      },
      {
        platform: "Taboola Campaign Manager",
        logo: "/images/taboola-new.png",
        description:
          "Boost your native advertising strategy with our Enterprise-Level Taboola Account service, professionally customized for businesses dealing with disabled Taboola advertising accounts.",
      },
      {
        platform: "Outbrain Amplify",
        logo: "/images/outbrain-new.png",
        description:
          "Enhance your content marketing strategy with our Enterprise-Level Outbrain Account service, expertly designed for businesses addressing disabled Outbrain advertising accounts.",
      },
      {
        platform: "Microsoft Advertising",
        logo: "/images/bing-new.png",
        description:
          "Maximize your premium search traffic potential with our Enterprise-Level Bing Ads Account service, specifically designed for businesses handling disabled Microsoft Advertising accounts.",
      },
    ],
  }

  const processSteps = [
    {
      title: "Strategic Planning & Analysis",
      icon: Lightbulb,
      description:
        "Comprehensive market research, competitor analysis, and strategic planning for optimal campaign performance",
    },
    {
      title: "Creative Design & Development",
      icon: Wand2,
      description:
        "Professional creative asset development including ad copy, graphics, videos, and landing page optimization",
    },
    {
      title: "Campaign Execution & Monitoring",
      icon: Settings,
      description:
        "Expert campaign launch, real-time performance monitoring, and continuous optimization for maximum ROI",
    },
    {
      title: "Scale & Performance Optimization",
      icon: Rocket,
      description:
        "Data-driven growth optimization, advanced scaling strategies, and long-term performance enhancement",
    },
  ]

  const faqs = [
    {
      question: "Why do I need performance marketing for my business growth?",
      answer:
        "Performance marketing ensures you only pay for measurable results like clicks, conversions, or sales, making your marketing budget more efficient and ROI-driven. It provides clear attribution, detailed analytics, and helps scale successful campaigns while eliminating wasteful ad spend on underperforming channels.",
    },
    {
      question: "What digital advertising platforms do you specialize in?",
      answer:
        "We specialize in Google Ads (Search, Display, Shopping, YouTube), Meta advertising (Facebook & Instagram), TikTok Ads, Snapchat Advertising, Microsoft Bing Ads, Taboola native advertising, and Outbrain content promotion. Our multi-platform expertise ensures maximum reach and optimal performance across all relevant digital channels.",
    },
    {
      question: "What are your digital marketing service pricing and packages?",
      answer:
        "Our performance marketing pricing is customized based on your specific business needs, advertising budget, and growth goals. We offer flexible service packages starting from $2,500/month for small businesses to comprehensive enterprise-level solutions. Contact us for a personalized quote and free strategy consultation.",
    },
    {
      question: "Why choose Adverzo Media as your performance marketing agency?",
      answer:
        "We combine advanced data-driven strategies with creative excellence, have proven track records across multiple industries, provide transparent reporting and analytics, and focus exclusively on delivering measurable ROI and ROAS improvements. Our team stays ahead of platform algorithm changes and industry trends to ensure optimal campaign performance.",
    },
    {
      question: "How do I get started with Adverzo Media's marketing services?",
      answer:
        "Simply book a free 30-minute strategy consultation with our performance marketing experts. We'll analyze your current digital marketing efforts, identify growth opportunities, audit your existing campaigns, and create a customized action plan to achieve your specific business goals and KPIs.",
    },
    {
      question: "Do you provide white-label agency solutions and enterprise accounts?",
      answer:
        "Yes, we offer comprehensive white-label solutions for marketing agencies looking to expand their service offerings. Our white-label program includes dedicated account management, branded reporting and analytics, enterprise-level ad accounts, and full technical support for your clients' campaigns.",
    },
  ]

  const testimonials = [
    {
      name: "Jessica Bloom",
      handle: "@jessica_bloom",
      company: "Bloom Co.",
      quote:
        "Adverzo Media has been a complete game-changer for our business growth. Their strategic approach to Google Ads management doubled our ROAS in just 3 months while significantly reducing our cost per acquisition.",
    },
    {
      name: "Mark Chen",
      handle: "@markchen",
      company: "TechFront Solutions",
      quote:
        "The Adverzo team is incredibly responsive and data-driven in their approach. We finally have complete clarity on our marketing spend and are seeing real, measurable results. I highly recommend their performance marketing services!",
    },
    {
      name: "Sarah Parker",
      handle: "@sarahp",
      company: "Lifestyle Living Brand",
      quote:
        "If you're looking for a reliable, results-oriented media buying team that actually delivers on their promises, look no further. Adverzo Media exceeded all our expectations and transformed our digital presence.",
    },
    {
      name: "David Rodriguez",
      handle: "@davidr",
      company: "Growth Labs Inc",
      quote:
        "Professional, knowledgeable, and consistently results-driven. Adverzo Media completely transformed our digital marketing strategy and delivered exceptional ROI that exceeded our initial projections by 300%.",
    },
  ]

  // Structured data for services
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Google Ads Management",
        description: "Professional Google Ads campaign management and optimization services",
        provider: {
          "@type": "Organization",
          name: "Adverzo Media LLC",
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Facebook Advertising",
        description: "Meta (Facebook & Instagram) advertising campaign management",
        provider: {
          "@type": "Organization",
          name: "Adverzo Media LLC",
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "TikTok Marketing",
        description: "TikTok advertising and content marketing services",
        provider: {
          "@type": "Organization",
          name: "Adverzo Media LLC",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <div className="min-h-screen bg-[#F6F9FC]">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderVisible ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white shadow-md"}`}
          role="banner"
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
           <div className="text-2xl font-bold text-[#0A2540] flex items-center space-x-1">
            <span itemProp="name">Adverzo</span>
            <span className="text-[#00D4FF]">BY TECH</span>
           </div>
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#333333] hover:text-[#00D4FF] transition-colors"
                aria-label="Navigate to home section"
              >
                Home
              </button>
              <a href="/about-us" className="text-[#333333] hover:text-[#00D4FF] transition-colors">
                About
              </a>
              <a href="/services" className="text-[#333333] hover:text-[#00D4FF] transition-colors">
                Services
              </a>
              <a href="/faqs" className="text-[#333333] hover:text-[#00D4FF] transition-colors">
                FAQ
              </a>
            </nav>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white"
              aria-label="Contact Adverzo Media for free consultation"
            >
              Contact Us
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 px-4" role="main">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
                ACHIEVE 10X GROWTH WITH DATA-DRIVEN PERFORMANCE MARKETING
              </h1>
              <p className="text-xl text-[#333333] mb-8 leading-relaxed">
                Growing your business is complex. Our mission is to simplify performance advertising, making it
                predictable, profitable, and scalable. We turn ad spend into real revenue through expert campaign
                management and conversion optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white px-8 py-3"
                  onClick={() => scrollToSection("contact")}
                  aria-label="Get started with free marketing consultation"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white px-8 py-3"
                  onClick={() => scrollToSection("contact")}
                  aria-label="Book a free strategy call"
                >
                  Book a Call
                </Button>
              </div>

              {/* Animated Platform Icons */}
              <div className="relative max-w-2xl mx-auto">
                <div className="flex justify-center items-center space-x-8 mb-8">
                  <div className="animate-pulse">
                    <img
                      src="/images/meta.png"
                      alt="Meta Facebook Instagram advertising platform"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="animate-bounce">
                    <img src="/images/google.png" alt="Google Ads search advertising platform" className="w-12 h-12" />
                  </div>
                  <div className="animate-pulse">
                    <img
                      src="/images/tiktok.png"
                      alt="TikTok social media advertising platform"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="animate-bounce">
                    <img src="/images/snapchat.png" alt="Snapchat AR advertising platform" className="w-12 h-12" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-[#0A2540] text-white px-6 py-2 rounded-full font-semibold">
                    Adverzo Media - Performance Marketing Experts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 px-4 bg-white" aria-labelledby="partners-heading">
          <div className="container mx-auto">
            <h2 id="partners-heading" className="text-3xl font-bold text-center text-[#0A2540] mb-12">
              Trusted by Industry-Leading Advertising Platforms
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} advertising platform partner`}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4" aria-labelledby="about-heading">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="about-heading" className="text-4xl font-bold text-[#0A2540] mb-6">
                Hi, we're Adverzo Media - Your Performance Marketing Partners
              </h2>
              <p className="text-xl text-[#333333] mb-12 leading-relaxed">
                We are a team of passionate digital marketers, data scientists, and conversion optimization experts. We
                combine creative advertising strategies with powerful analytics and machine learning to deliver an
                exceptional return on your advertising spend (ROAS) and sustainable business growth.
              </p>
              <div className="mt-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/adverzo-office-new.webp"
                    alt="Adverzo Media modern office with branded blue wall featuring 'ACHIEVE 10X GROWTH' message and professional workstations for digital marketing team"
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-4xl font-bold text-[#0A2540] mb-4">
                Our Core Digital Marketing Services
              </h2>
              <p className="text-xl text-[#333333]">
                Discover your full growth potential through our exceptional performance marketing services and
                conversion optimization expertise.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center mb-8" role="tablist" aria-label="Service categories">
                <div className="bg-[#F6F9FC] rounded-lg p-1">
                  <button
                    className={`px-6 py-3 rounded-md transition-all ${
                      activeTab === "paid-advertising" ? "bg-[#00D4FF] text-white" : "text-[#333333] hover:bg-white"
                    }`}
                    onClick={() => setActiveTab("paid-advertising")}
                    role="tab"
                    aria-selected={activeTab === "paid-advertising"}
                    aria-controls="paid-advertising-panel"
                  >
                    Paid Advertising Management
                  </button>
                  <button
                    className={`px-6 py-3 rounded-md transition-all ${
                      activeTab === "design-development" ? "bg-[#00D4FF] text-white" : "text-[#333333] hover:bg-white"
                    }`}
                    onClick={() => setActiveTab("design-development")}
                    role="tab"
                    aria-selected={activeTab === "design-development"}
                    aria-controls="design-development-panel"
                  >
                    Design & Development Services
                  </button>
                  <button
                    className={`px-6 py-3 rounded-md transition-all ${
                      activeTab === "agency-accounts" ? "bg-[#00D4FF] text-white" : "text-[#333333] hover:bg-white"
                    }`}
                    onClick={() => setActiveTab("agency-accounts")}
                    role="tab"
                    aria-selected={activeTab === "agency-accounts"}
                    aria-controls="agency-accounts-panel"
                  >
                    Enterprise Account Solutions
                  </button>
                </div>
              </div>

              {activeTab === "paid-advertising" && (
                <div id="paid-advertising-panel" role="tabpanel" aria-labelledby="paid-advertising-tab">
                  <div className="grid md:grid-cols-2 gap-10">
                    {services["paid-advertising"].map((service, index) => (
                      <article
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex flex-col items-start">
                          <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img
                              src={service.logo || "/placeholder.svg"}
                              alt={`${service.platform} advertising management services`}
                              className="w-12 h-12 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{service.platform}</h3>
                          <p className="text-[#666666] leading-relaxed text-base">{service.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "design-development" && (
                <div id="design-development-panel" role="tabpanel" aria-labelledby="design-development-tab">
                  <div className="grid md:grid-cols-2 gap-10">
                    {services["design-development"].map((service, index) => (
                      <article
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex flex-col items-start">
                          <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img
                              src={service.image || "/placeholder.svg"}
                              alt={`${service.title} creative services`}
                              className="w-12 h-12 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{service.title}</h3>
                          <p className="text-[#666666] leading-relaxed text-base">{service.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "agency-accounts" && (
                <div id="agency-accounts-panel" role="tabpanel" aria-labelledby="agency-accounts-tab">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services["agency-accounts"].map((service, index) => (
                      <article
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex flex-col items-start">
                          <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img
                              src={service.logo || "/placeholder.svg"}
                              alt={`${service.platform} enterprise account solutions`}
                              className="w-12 h-12 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{service.platform}</h3>
                          <p className="text-[#666666] leading-relaxed text-base">{service.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4" aria-labelledby="process-heading">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 id="process-heading" className="text-4xl font-bold text-[#0A2540] mb-4">
                Our Proven Performance Marketing Process
              </h2>
              <p className="text-xl text-[#333333]">
                We ensure a seamless journey from strategy to success, aligning every step with your unique business
                goals and KPIs.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#00D4FF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{step.title}</h3>
                    <p className="text-[#333333]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-white" aria-labelledby="faq-heading">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-4xl font-bold text-[#0A2540] mb-4">
                Frequently Asked Questions About Performance Marketing
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full py-6 flex justify-between items-center text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg font-semibold text-[#0A2540] pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#00D4FF] flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#00D4FF] flex-shrink-0" aria-hidden="true" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div id={`faq-answer-${index}`} className="pb-6">
                      <p className="text-[#333333] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4" aria-labelledby="testimonials-heading">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 id="testimonials-heading" className="text-4xl font-bold text-[#0A2540] mb-4">
                What Our Performance Marketing Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#00D4FF] rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0A2540]">{testimonial.name}</div>
                        <div className="text-sm text-[#333333]">
                          {testimonial.handle} | {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-[#333333] leading-relaxed">"{testimonial.quote}"</blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-white" aria-labelledby="contact-heading">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Lead Magnet */}
              <div>
                <h2 id="contact-heading" className="text-3xl font-bold text-[#0A2540] mb-4">
                  Claim Your Free 30-Minute Performance Marketing Strategy Session
                </h2>
                <p className="text-lg text-[#333333] mb-8">Be quick! Free consultation spots are almost booked.</p>

                <div className="space-y-4" itemScope itemType="https://schema.org/Organization">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#00D4FF] mr-3" aria-hidden="true" />
                    <a
                      href="mailto:contact@adverzomedia.com"
                      className="text-[#333333] hover:text-[#00D4FF]"
                      itemProp="email"
                    >
                      contact@adverzomedia.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#00D4FF] mr-3" aria-hidden="true" />
                    <a href="tel:+13074001232" className="text-[#333333] hover:text-[#00D4FF]" itemProp="telephone">
                      +1 (307) 400-1232
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#00D4FF] mr-3 mt-1" aria-hidden="true" />
                    <address
                      className="text-[#333333] not-italic"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <span itemProp="streetAddress">30 N Gould St Ste R</span>,
                      <span itemProp="addressLocality">Sheridan</span>,<span itemProp="addressRegion">WY</span>
                      <span itemProp="postalCode">82801</span>
                      <span itemProp="addressCountry">USA</span>
                    </address>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-2">Request a Free Marketing Quote Today!</h3>
                <p className="text-[#333333] mb-6">
                  Start your request online and we'll find you a customized solution.
                </p>

                <form className="space-y-4" aria-label="Contact form for marketing consultation">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required aria-required="true" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required aria-required="true" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required aria-required="true" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required aria-required="true" />
                  </div>
                  <div>
                    <Label htmlFor="services">Marketing Services Needed *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paid-advertising">Paid Advertising Management</SelectItem>
                        <SelectItem value="creative-services">Creative & Design Services</SelectItem>
                        <SelectItem value="full-management">Full Marketing Management</SelectItem>
                        <SelectItem value="consultation">Strategy Consultation</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message & Goals</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your business goals and current marketing challenges..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#00D4FF] hover:bg-[#00B8E6] text-white py-3">
                    Get Free Marketing Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0A2540] text-white py-12 px-4" role="contentinfo">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div itemScope itemType="https://schema.org/Organization">
                <div className="text-2xl font-bold mb-4" itemProp="name">
                  Adverzo Media
                </div>
                <p className="text-gray-300 mb-4" itemProp="description">
                  Data-driven performance marketing agency that turns ad spend into real revenue through expert campaign
                  management and conversion optimization.
                </p>
                <div className="flex space-x-4">
                <a href="mailto:contact@adverzomedia.com" aria-label="Email Adverzo Media">
                 <Mail className="w-5 h-5 text-[#00D4FF]" />
                </a>
                <a href="tel:+13074001232" aria-label="Call Adverzo Media">
                 <Phone className="w-5 h-5 text-[#00D4FF]" />
                </a>
                <a
                 href="https://www.google.com/maps?q=30+N+Gould+St+Ste+R,+Sheridan,+WY+82801"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Adverzo Media address on map"
                >
                 <MapPin className="w-5 h-5 text-[#00D4FF]" />
                </a>
               </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Marketing Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-[#00D4FF] transition-colors"
                    >
                      Google Ads Management
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-[#00D4FF] transition-colors"
                    >
                      Facebook & Instagram Ads
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-[#00D4FF] transition-colors"
                    >
                      TikTok Marketing
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="hover:text-[#00D4FF] transition-colors"
                    >
                      Free Strategy Session
                    </button>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="https://www.adverzomedia.com/about-us" className="hover:text-[#00D4FF] transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.adverzomedia.com/services" className="hover:text-[#00D4FF] transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.adverzomedia.com/faqs" className="hover:text-[#00D4FF] transition-colors">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="hover:text-[#00D4FF] transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="/privacy-policy" className="hover:text-[#00D4FF] transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="hover:text-[#00D4FF] transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/cookie-policy" className="hover:text-[#00D4FF] transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="/refund-policy" className="hover:text-[#00D4FF] transition-colors">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  Copyright © 2025 Adverzo Media LLC. All Rights Reserved.
                </div>
                <div className="flex space-x-6 text-sm text-gray-300">
                  <a href="/privacy-policy" className="hover:text-[#00D4FF] transition-colors">
                    Privacy
                  </a>
                  <a href="/terms-of-service" className="hover:text-[#00D4FF] transition-colors">
                    Terms
                  </a>
                  <a href="/cookie-policy" className="hover:text-[#00D4FF] transition-colors">
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Chat Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="fixed bottom-6 right-6 bg-[#00D4FF] hover:bg-[#00B8E6] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Contact us for free marketing consultation"
        >
          <MessageCircle className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
