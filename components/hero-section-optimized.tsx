import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import ScrollHandler from "./scroll-handler"

interface HeroSectionProps {
  whatsappLink: string
}

export default function HeroSectionOptimized({ whatsappLink }: HeroSectionProps) {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      {/* Header with scroll handling - client component */}
      <ScrollHandler whatsappLink={whatsappLink} />

      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero.webp" 
          alt="豪華手錶錶帶系列" 
          fill 
          sizes="100vw"
          className="object-cover brightness-50" 
          priority 
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h1 className="font-inter text-base font-normal tracking-tight text-white text-opacity-70">
              專業手錶錶帶修復服務
            </h1>
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-inter font-normal text-5xl sm:text-7xl">恢復您的</span>
              <br />
              <span className="font-playfair italic font-normal text-6xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy">
                奢華時計
              </span>
            </p>
            <p className="mt-12 font-inter text-base font-normal leading-7 text-white text-opacity-70">
              我們專注於修復和維修來自世界頂級製錶商的手錶錶帶，通過專業工藝將您的奢華時計恢復至昔日輝煌。
            </p>
            <p className="mt-8 font-inter text-xl font-normal text-white">
              優質服務起價{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-burgundy-light">
                $325美元
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center mt-5 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={whatsappLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 font-inter text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-gradient-to-r from-burgundy to-burgundy-light sm:text-lg text-white hover:shadow-lg hover:from-burgundy-light hover:to-burgundy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy focus:ring-offset-black"
              >
                獲取免費報價
              </Link>

              <Link
                href="#restoration-process"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 font-inter text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-burgundy hover:bg-gradient-to-r hover:from-burgundy hover:to-burgundy-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy hover:text-white sm:text-lg focus:ring-offset-black"
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