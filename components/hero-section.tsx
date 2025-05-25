"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface HeroSectionProps {
  whatsappLink: string
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
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
    <div className="relative pt-48 pb-12 bg-casal-darker xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      {/* Header */}
      <header
        className={`absolute inset-x-0 top-0 z-50 py-3 xl:py-4 transition-all duration-300 ${
          isScrolled ? "bg-casal-darker/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-casal-darker focus:ring-casal"
            >
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

      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image src="/hero-band-restoration.webp" alt="專業手錶錶帶修復服務" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(15, 37, 35, 0.8) 0%, rgba(15, 37, 35, 0.4) 60%, transparent 70%)'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-[60%]">
            <h1 className="font-sans font-normal text-3xl sm:text-6xl lg:text-8xl tracking-tighter text-neutral-lighter">
              手錶錶帶失色？<br />
              <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-casal-lighter via-casal-light to-casal-lighter">
                重拾原廠氣派，<br />
                經典再現。
              </span>
            </h1>
            <p className="mt-6 font-sans text-base font-normal leading-7 text-neutral-lightest sm:text-lg sm:leading-8">
              「鬆、花、崩凹」不再。專業修復，延續手錶不凡價值。
            </p>
            <p className="mt-8 font-sans text-xs font-normal leading-5 text-neutral-lightest text-opacity-90 sm:text-sm">
              專為頂級名錶而設・尊重原裝・激光焊接・精密打磨
            </p>
            

            <div className="flex flex-col sm:flex-row items-start mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={whatsappLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 font-sans text-base font-semibold transition-all duration-200 rounded-md sm:leading-8 bg-neutral-lightest text-neutral-darker hover:bg-neutral-light border-2 border-neutral-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-casal focus:ring-offset-casal-darker"
              >
                立即WhatsApp諮詢
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
