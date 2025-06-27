import type { Metadata } from "next"
import FAQsPageClient from "./FAQsPageClient"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Performance Marketing & Digital Advertising | Adverzo Media",
  description:
    "Get answers to common questions about performance marketing, Google Ads management, Facebook advertising, pricing, and our digital marketing services. Expert insights from Adverzo Media.",
  keywords: [
    "performance marketing FAQ",
    "Google Ads questions",
    "Facebook advertising help",
    "digital marketing pricing",
    "marketing agency questions",
  ],
  openGraph: {
    title: "Frequently Asked Questions - Performance Marketing & Digital Advertising | Adverzo Media",
    description:
      "Get answers to common questions about performance marketing, Google Ads management, Facebook advertising, pricing, and our digital marketing services. Expert insights from Adverzo Media.",
    url: "https://adverzomedia.com/faqs",
  },
}

export default function FAQsPage() {
  return (
    <>
      <Header />
      <FAQsPageClient />
      <Footer />
    </>
  )
}
