"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  whatsappLink: string
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      if (scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Subtle parallax effect - very gentle movement
      setParallaxOffset(scrollY * 0.1)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Ensure hero text animations trigger properly
    const heroTextElements = document.querySelectorAll('.hero-text-reveal')
    
    // Fallback: if animations don't work after 2 seconds, show text immediately
    const fallbackTimer = setTimeout(() => {
      heroTextElements.forEach(element => {
        if (window.getComputedStyle(element).opacity === '0') {
          element.classList.add('no-animation')
        }
      })
    }, 2000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(fallbackTimer)
    }
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
                  quality={90}
                />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Background Image with Gradient Overlay - CRITICAL LCP OPTIMIZATION */}
      <div className="absolute inset-0 hero-bg">
        <Image
          src="/hero-band-restoration.webp"
          alt="Watch band restoration background"
          fill
          className="object-cover transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: 'transform'
          }}
          priority={true}
          fetchPriority="high"
          quality={90}
          sizes="100vw"
          loading="eager"
          unoptimized={true}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(15, 37, 35, 0.8) 0%, rgba(15, 37, 35, 0.4) 60%, transparent 70%)'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-[%]">
            <h1 className="font-sans font-normal text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-neutral-lighter">
              {/* Line 1: Always on its own line */}
              <span className="block">
                錶帶「吊吊揈」？
              </span>
              {/* Line 2: Always on its own line */}
              <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-casal-lighter via-casal-light to-casal-lighter gradient-text-animate block mt-3">
                是時候重拾緊緻！
              </span>
            </h1>
            <p className="hero-text-reveal hero-text-reveal-3 mt-6 font-sans text-base font-normal leading-7 text-neutral-lightest sm:text-lg sm:leading-8">
              {/* Mobile version: 4 lines */}
              <span className="block sm:hidden">
                專為名錶「虛位」及各種<br />佩戴痕跡而設的修復方案，<br />告別鬆動，迎接原廠級<br />貼合感與精緻外觀。
              </span>
              {/* Desktop version: 3 lines */}
              <span className="hidden sm:block">
                專為名錶「虛位」及各種佩戴痕跡而設的修復方案，<br />告別鬆動，迎接原廠級貼合感<br />與精緻外觀。
              </span>
            </p>

            <div className="hero-text-reveal hero-text-reveal-4 flex flex-col sm:flex-row items-start mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={whatsappLink}
                id="cta-hero-whatsapp"
                className="btn-pulse w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 font-sans text-base font-semibold transition-all duration-200 rounded-md sm:leading-8 bg-cream-lighter text-neutral-darker hover:bg-cream-light border-2 border-neutral-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-casal focus:ring-offset-casal-darker"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    ;(window as any).dataLayer.push({
                      event: 'whatsapp_click',
                      click_source: 'hero_section',
                      click_element_id: 'cta-hero-whatsapp',
                      page_location: window.location.href,
                      conversion_action: 'whatsapp_contact',
                    })
                  }
                }}
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
