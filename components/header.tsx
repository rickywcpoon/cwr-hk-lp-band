"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const whatsappLink = "https://wa.me/85260616572"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-3">
              <Image src="/placeholder.svg?key=1xwnp" alt="經典手錶維修標誌" width={40} height={40} />
            </div>
            <span className="text-xl font-bold text-gray-900">經典手錶維修</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-burgundy transition-colors">
              服務項目
            </Link>
            <Link href="#" className="text-gray-700 hover:text-burgundy transition-colors">
              品牌
            </Link>
            <Link href="#" className="text-gray-700 hover:text-burgundy transition-colors">
              作品集
            </Link>
            <Link href="#" className="text-gray-700 hover:text-burgundy transition-colors">
              客戶評價
            </Link>
            <Link
              href={whatsappLink}
              className="bg-burgundy hover:bg-burgundy-light text-white font-medium px-5 py-2 rounded-md inline-flex items-center transition-colors duration-300"
            >
              聯絡我們
              <MessageCircle className="ml-2 h-4 w-4" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-gray-800 hover:text-burgundy transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                服務項目
              </Link>
              <Link
                href="#"
                className="text-gray-800 hover:text-burgundy transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                品牌
              </Link>
              <Link
                href="#"
                className="text-gray-800 hover:text-burgundy transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                作品集
              </Link>
              <Link
                href="#"
                className="text-gray-800 hover:text-burgundy transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                客戶評價
              </Link>
              <Link
                href={whatsappLink}
                className="bg-burgundy hover:bg-burgundy-light text-white font-medium px-5 py-2 rounded-md inline-flex items-center justify-center transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                聯絡我們
                <MessageCircle className="ml-2 h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
