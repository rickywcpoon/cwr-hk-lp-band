"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

interface LooseVsRightFitProps {
  whatsappLink: string
}

export default function LooseVsRightFit({ whatsappLink }: LooseVsRightFitProps) {
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const sectionOffset = window.innerHeight * 0.5 // Start effect when section is halfway visible
      
      // Gentle upward movement that starts after hero section
      if (scrollY > sectionOffset) {
        setParallaxOffset(-(scrollY - sectionOffset) * 0.05)
      } else {
        setParallaxOffset(0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-20 bg-casal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Left on desktop, Top on mobile */}
          <div className="order-1 lg:order-1">
            <div className="relative shadow-2xl overflow-hidden">
              <Image
                src="/loose-vs-good-fitting.webp"
                alt="鬆弛錶帶對比緊密貼合錶帶"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-100 ease-out"
                style={{
                  transform: `translate3d(0, ${parallaxOffset}px, 0)`,
                  willChange: 'transform'
                }}
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                quality={85}
                fetchPriority="high"
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>

          {/* Content - Right on desktop, Bottom on mobile */}
          <div className="order-2 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-lighter mb-6 leading-tight">
              告別錶帶「虛位」<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-casal-lighter to-casal-light block">
                重現無縫的佩戴體驗
                </span>
              </h2>

              <div className="space-y-6 text-lg text-neutral-lighter leading-relaxed">
                <p className="font-medium text-xl text-neutral-lighter">
                錶帶的「虛位」不僅是影響美觀的小瑕疵，更是佩戴體驗與腕錶安全的大敵。我們專注解決錶帶「虛位」問題，恢復應有緊緻，讓腕錶穩固貼合。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 