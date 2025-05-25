"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-1" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Centered Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-[77px] w-auto">
              <Image 
                src="/cwr-logo.png" 
                alt="Classic Watch Repair Logo" 
                width={288}
                height={77}
                className="h-[77px] w-auto object-contain"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
