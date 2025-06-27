"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
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
                <Link href="/services#paid-advertising" className="hover:text-[#00D4FF] transition-colors">
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link href="/services#paid-advertising" className="hover:text-[#00D4FF] transition-colors">
                  Facebook & Instagram Ads
                </Link>
              </li>
              <li>
                <Link href="/services#paid-advertising" className="hover:text-[#00D4FF] transition-colors">
                  TikTok Marketing
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#00D4FF] transition-colors">
                  Free Strategy Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about-us" className="hover:text-[#00D4FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00D4FF] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#00D4FF] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#00D4FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#00D4FF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-[#00D4FF] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-[#00D4FF] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#00D4FF] transition-colors">
                  Refund Policy
                </Link>
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
              <Link href="/privacy-policy" className="hover:text-[#00D4FF] transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#00D4FF] transition-colors">
                Terms
              </Link>
              <Link href="/cookie-policy" className="hover:text-[#00D4FF] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
