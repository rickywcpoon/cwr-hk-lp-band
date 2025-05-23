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
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      {/* Header */}
      <header
        className={`absolute inset-x-0 top-0 z-50 py-8 xl:py-12 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
              <Link
                href="/"
                className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-burgundy"
              >
                <div className="relative h-10 w-10 mr-3">
                  <Image src="/placeholder.svg?key=1xwnp" alt="Classic Watch Repair logo" width={40} height={40} />
                </div>
                <span className="text-xl font-bold text-white self-center">Classic Watch Repair</span>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-burgundy focus:ring-offset-black"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <Link
                href="#services"
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white hover:text-burgundy-light focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-burgundy focus:ring-offset-black"
              >
                服務項目
              </Link>

              <Link
                href={whatsappLink}
                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-normal leading-7 transition-all duration-200 border-2 rounded-full text-white border-burgundy focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-burgundy hover:bg-burgundy hover:text-white focus:ring-offset-black"
              >
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image src="/images/hero.webp" alt="豪華手錶錶帶系列" fill className="object-cover brightness-50" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
              專業手錶錶帶修復服務
            </h1>
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-sans font-normal text-5xl sm:text-7xl">恢復您的</span>
              <br />
              <span className="font-serif italic font-normal text-6xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy">
                奢華時計
              </span>
            </p>
            <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
              我們專注於修復和維修來自世界頂級製錶商的手錶錶帶，通過專業工藝將您的奢華時計恢復至昔日輝煌。
            </p>
            <p className="mt-8 font-sans text-xl font-normal text-white">
              優質服務起價{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-burgundy-light">
                $325美元
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={whatsappLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-gradient-to-r from-burgundy to-burgundy-light sm:text-lg text-white hover:shadow-lg hover:from-burgundy-light hover:to-burgundy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy focus:ring-offset-black"
              >
                獲取免費報價
              </Link>

              <Link
                href="#restoration-process"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-burgundy hover:bg-gradient-to-r hover:from-burgundy hover:to-burgundy-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy hover:text-white sm:text-lg focus:ring-offset-black"
              >
                <Play className="w-5 h-5 mr-2" />
                觀看修復過程
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
