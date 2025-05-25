"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface ScrollHandlerProps {
  whatsappLink: string
}

export default function ScrollHandler({ whatsappLink }: ScrollHandlerProps) {
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
                <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CWR</span>
                </div>
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
              className="font-inter text-base font-normal transition-all duration-200 rounded text-white hover:text-burgundy-light focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-burgundy focus:ring-offset-black"
            >
              服務項目
            </Link>

            <Link
              href={whatsappLink}
              className="inline-flex items-center justify-center px-5 py-2 font-inter text-base font-normal leading-7 transition-all duration-200 border-2 rounded-full text-white border-burgundy focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-burgundy hover:bg-burgundy hover:text-white focus:ring-offset-black"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 