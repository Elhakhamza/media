import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Globe, Shield, Lightbulb, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Adverzo Media - Performance Marketing Agency Team & Mission",
  description:
    "Learn about Adverzo Media's mission, values, and expert team. We're passionate digital marketers and data scientists dedicated to delivering exceptional ROI through performance marketing.",
  keywords: [
    "about adverzo media",
    "performance marketing team",
    "digital marketing agency",
    "company mission",
    "marketing experts",
  ],
  openGraph: {
    title: "About Adverzo Media - Performance Marketing Agency Team & Mission",
    description:
      "Learn about Adverzo Media's mission, values, and expert team. We're passionate digital marketers and data scientists dedicated to delivering exceptional ROI through performance marketing.",
    url: "https://adverzomedia.com/about-us",
  },
}

export default function AboutUsPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven Approach",
      description:
        "We focus exclusively on measurable outcomes and ROI. Every strategy, campaign, and optimization is designed to deliver tangible business results for our clients.",
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description:
        "Complete transparency in reporting, pricing, and communication. We believe in building long-term partnerships based on trust and honest performance metrics.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Expertise",
      description:
        "Staying ahead of industry trends, platform updates, and emerging technologies to ensure our clients always have a competitive advantage in their markets.",
    },
    {
      icon: Heart,
      title: "Client Success First",
      description:
        "Your success is our success. We're genuinely invested in helping your business grow and achieve its goals through strategic performance marketing.",
    },
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      expertise: "Performance Marketing Strategy",
      experience: "8+ years",
      description:
        "Former Google Ads specialist with expertise in scaling campaigns from $10K to $1M+ monthly ad spend.",
      achievements: ["Google Ads Certified", "Facebook Blueprint Certified", "Scaled 200+ campaigns"],
    },
    {
      name: "Michael Chen",
      role: "Head of Paid Advertising",
      expertise: "Multi-Platform Campaign Management",
      experience: "6+ years",
      description: "Expert in Google Ads, Facebook, TikTok, and emerging platforms with focus on ROAS optimization.",
      achievements: ["Meta Certified", "TikTok Marketing Partner", "Average 300% ROAS improvement"],
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      expertise: "Conversion-Focused Design",
      experience: "7+ years",
      description: "Specializes in high-converting landing pages, ad creatives, and user experience optimization.",
      achievements: ["Adobe Certified Expert", "UX/UI Specialist", "1000+ landing pages created"],
    },
    {
      name: "David Kim",
      role: "Data Analytics Manager",
      expertise: "Performance Analytics & Optimization",
      experience: "5+ years",
      description: "Data scientist focused on campaign optimization, attribution modeling, and predictive analytics.",
      achievements: ["Google Analytics Certified", "Data Science Masters", "Advanced Attribution Modeling"],
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Adverzo Media was established with a mission to simplify performance marketing for growing businesses.",
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description: "Reached our first major milestone by helping 100+ businesses achieve their growth goals.",
    },
    {
      year: "2022",
      title: "$50M+ Ad Spend Managed",
      description: "Successfully managed over $50 million in advertising spend across all platforms.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Recognized as a top performance marketing agency with multiple industry awards and certifications.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded services globally while maintaining our commitment to personalized client success.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Meet the Team Behind Your Success</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're a passionate team of digital marketers, data scientists, and creative professionals dedicated to
            transforming your advertising spend into measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white px-8 py-3">
                Work With Us
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 bg-transparent"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Our Story</h2>
              <p className="text-xl text-[#333333] leading-relaxed">
                Founded in 2020, Adverzo Media was born from a simple observation: most businesses struggle with digital
                advertising because it's complex, time-consuming, and often unpredictable. We set out to change that.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">The Challenge We Saw</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Small and medium businesses were wasting thousands of dollars on ineffective advertising campaigns.
                  They lacked the expertise, time, and resources to navigate the complex world of digital marketing
                  platforms.
                </p>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Solution</h3>
                <p className="text-[#666666] leading-relaxed">
                  We created a data-driven approach that combines advanced analytics with creative excellence. Our team
                  handles the complexity while you focus on running your business, knowing your marketing is in expert
                  hands.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/adverzo-office-new.webp"
                  alt="Adverzo Media team working in modern office environment"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Mission</h3>
                <p className="text-[#666666] leading-relaxed">
                  To democratize performance marketing by making advanced advertising strategies accessible to
                  businesses of all sizes. We believe every business deserves expert-level marketing that drives real,
                  measurable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Vision</h3>
                <p className="text-[#666666] leading-relaxed">
                  To become the world's most trusted performance marketing partner, known for delivering exceptional ROI
                  and transforming businesses through data-driven advertising strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Our Core Values</h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{value.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Our team combines decades of experience in digital marketing, data science, and creative design to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-1">{member.name}</h3>
                    <p className="text-[#00D4FF] font-semibold mb-1">{member.role}</p>
                    <p className="text-sm text-[#666666]">{member.experience} Experience</p>
                  </div>
                  <p className="text-[#666666] leading-relaxed mb-4 text-sm">{member.description}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-[#333333]">
                        <Award className="w-3 h-3 text-[#00D4FF] mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Our Journey</h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              From startup to industry leader, here are the key milestones that have shaped Adverzo Media's growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-[#00D4FF] rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{milestone.title}</h3>
                    <p className="text-[#666666] leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#0A2540] text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These numbers represent real businesses we've helped grow and the measurable impact of our performance
              marketing strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D4FF] mb-2">500+</div>
              <div className="text-lg text-gray-300">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D4FF] mb-2">$100M+</div>
              <div className="text-lg text-gray-300">Ad Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D4FF] mb-2">350%</div>
              <div className="text-lg text-gray-300">Average ROAS Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00D4FF] mb-2">98%</div>
              <div className="text-lg text-gray-300">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-[#333333] mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Adverzo Media to manage their performance marketing and drive real
            growth.
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
                className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white px-8 py-3 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
