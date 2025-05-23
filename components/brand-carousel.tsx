"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"

const brands = [
  {
    id: 1,
    name: "勞力士",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-hRYUPhBMsmNsFxFD0JX0lOlIePXZgu.webp",
  },
  {
    id: 2,
    name: "卡地亞",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-o4U6AQahrdqDqZSW6bPeRezVrRlzxL.webp",
  },
  {
    id: 3,
    name: "歐米茄",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-Idor0fAAdaL5p7bC5UF8VujIGSs4ch.webp",
  },
  {
    id: 4,
    name: "百達翡麗",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-lsryfDjU8TyNxKJBC4dDVqAR8OG0eV.webp",
  },
  {
    id: 5,
    name: "愛彼",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-a8XMhIxhFwWYX7PdEfIU73GhI3FPIL.webp",
  },
  {
    id: 6,
    name: "浪琴",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-v7qCHYLHvGBWikG6VuREJXn71uSCvk.webp",
  },
  {
    id: 7,
    name: "理查德·米勒",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-b115MUwPd2uUvQc7XghFNxJ82CWTLy.webp",
  },
  {
    id: 8,
    name: "江詩丹頓",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-GAc23T4FwE9O4BIlGWlrcisoJZHO0C.webp",
  },
  {
    id: 9,
    name: "百年靈",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-u2TjDD85flv9GRriXZlNEH3RFtl75C.webp",
  },
  {
    id: 10,
    name: "豪雅",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-Gz2QJrrgAHPootNLNARU0zX4XmQEbM.webp",
  },
]

// Define logo dimensions
const logoWidth = 180

export default function BrandCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Clone the content for seamless scrolling
    const content = scrollContainer.innerHTML
    scrollContainer.innerHTML = content + content

    // Set up the animation
    const scrollWidth = scrollContainer.scrollWidth / 2
    let animationId: number
    let startTime: number

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate the scroll position based on time
      // Complete one loop every 30 seconds (adjust for speed)
      const scrollPos = ((elapsed / 30000) * scrollWidth) % scrollWidth

      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${scrollPos}px)`
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="bg-gray-200 py-12 md:py-16 lg:py-20">
      <div className="container mb-8 w-full max-w-4xl px-[5%] md:mb-10 lg:mb-12 mx-auto">
        <h2 className="text-center text-2xl leading-[1.2] font-bold md:text-3xl md:leading-[1.2] text-gray-900">
          頂級品牌用戶的信賴之選
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          我們專注於修復和維修來自世界頂級製錶商的手錶錶帶。
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center">
          <div
            ref={scrollRef}
            className="flex shrink-0 items-center"
            style={{ transform: "translateX(0)", willChange: "transform" }}
          >
            {brands.map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="mx-7 flex-shrink-0 md:mx-10">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} 標誌`}
                  width={logoWidth}
                  height={60}
                  className="h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ objectFit: "contain", width: `${logoWidth}px` }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
