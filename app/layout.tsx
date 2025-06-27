import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#00D4FF",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://adverzomedia.com"),
  title: {
    default: "Adverzo Media - Performance Marketing Agency | Achieve 10X Growth",
    template: "%s | Adverzo Media",
  },
  description:
    "Leading performance marketing agency specializing in Google Ads, Facebook Ads, TikTok marketing & conversion optimization. Achieve 10X growth with data-driven strategies. Free consultation available.",
  keywords: [
    "performance marketing",
    "digital marketing agency",
    "Google Ads management",
    "Facebook advertising",
    "TikTok marketing",
    "paid advertising",
    "PPC management",
    "conversion optimization",
    "ROAS optimization",
    "media buying",
    "landing page design",
    "creative services",
    "marketing automation",
    "growth marketing",
    "advertising agency Wyoming",
    "Sheridan marketing agency",
  ],
  authors: [{ name: "Adverzo Media LLC" }],
  creator: "Adverzo Media LLC",
  publisher: "Adverzo Media LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adverzomedia.com",
    siteName: "Adverzo Media",
    title: "Adverzo Media - Performance Marketing Agency | Achieve 10X Growth",
    description:
      "Leading performance marketing agency specializing in Google Ads, Facebook Ads, TikTok marketing & conversion optimization. Achieve 10X growth with data-driven strategies.",
    images: [
      {
        url: "/images/adverzo-office-new.webp",
        width: 1200,
        height: 630,
        alt: "Adverzo Media Office - Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adverzo Media - Performance Marketing Agency | Achieve 10X Growth",
    description:
      "Leading performance marketing agency specializing in Google Ads, Facebook Ads, TikTok marketing & conversion optimization. Achieve 10X growth with data-driven strategies.",
    images: ["/images/adverzo-office-new.webp"],
    creator: "@adverzomedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://adverzomedia.com",
  },
  category: "Digital Marketing",
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Adverzo Media LLC",
  alternateName: "Adverzo Media",
  url: "https://adverzomedia.com",
  logo: "https://adverzomedia.com/logo.png",
  description:
    "Leading performance marketing agency specializing in Google Ads, Facebook Ads, TikTok marketing & conversion optimization.",
  foundingDate: "2020",
  founders: [
    {
      "@type": "Person",
      name: "Adverzo Media Team",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-307-400-1232",
    contactType: "customer service",
    email: "contact@adverzomedia.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/adverzomedia",
    "https://www.linkedin.com/company/adverzomedia",
    "https://twitter.com/adverzomedia",
  ],
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
          description: "Professional Google Ads campaign management and optimization services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Facebook Advertising",
          description: "Meta (Facebook & Instagram) advertising campaign management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TikTok Marketing",
          description: "TikTok advertising and content marketing services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Design",
          description: "High-converting landing page design and development",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00D4FF" />
        <meta name="msapplication-TileColor" content="#00D4FF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
