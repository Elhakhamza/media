"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const pathname = usePathname()

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

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderVisible ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white shadow-md"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#0A2540] flex items-center space-x-1">
         <span itemProp="name">Adverzo</span>
         <span className="text-[#00D4FF]">Media</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          <Link
            href="/"
            className={`transition-colors ${
              isActive("/") ? "text-[#00D4FF] font-semibold" : "text-[#333333] hover:text-[#00D4FF]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`transition-colors ${
              isActive("/about-us") ? "text-[#00D4FF] font-semibold" : "text-[#333333] hover:text-[#00D4FF]"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`transition-colors ${
              isActive("/services") ? "text-[#00D4FF] font-semibold" : "text-[#333333] hover:text-[#00D4FF]"
            }`}
          >
            Services
          </Link>
          <Link
            href="/faqs"
            className={`transition-colors ${
              isActive("/faqs") ? "text-[#00D4FF] font-semibold" : "text-[#333333] hover:text-[#00D4FF]"
            }`}
          >
            FAQs
          </Link>
        </nav>
        {pathname === "/" ? (
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white"
            aria-label="Contact Adverzo Media for free consultation"
          >
            Contact Us
          </Button>
        ) : (
          <Link href="/#contact">
            <Button className="bg-[#00D4FF] hover:bg-[#00B8E6] text-white">Contact Us</Button>
          </Link>
        )}
      </div>
    </header>
  )
}
