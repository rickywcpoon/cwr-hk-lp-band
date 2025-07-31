"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useIsMobile } from "./ui/use-mobile"

interface LooseVsRightFitProps {
  whatsappLink: string
}

export default function LooseVsRightFit({ whatsappLink }: LooseVsRightFitProps) {
  const isMobile = useIsMobile()

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
                className="w-full h-auto object-cover"
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
                {/* Show images on all devices for now */}
                <div className="my-6 animate-on-scroll">
                  <Image
                    src="/ap-band-before-after.webp"
                    alt="AP bracelet full restoration example"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    sizes="100vw"
                    quality={85}
                    loading="lazy"
                    unoptimized={true}
                  />
                </div>
                <div className="my-6 animate-on-scroll">
                  <Image
                    src="/rolex-bracelet-full-restore.webp"
                    alt="Rolex bracelet full restoration example"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    sizes="100vw"
                    quality={85}
                    loading="lazy"
                    unoptimized={true}
                  />
                </div>
                    <p className="text-base text-neutral-lighter mt-4">
                      我們精通各大品牌設計靈魂: Rolex, Audemars Piguet, Patek Phillipe, Cartier, Vacheron Constantin 維修及修復各種金屬錶帶，包括不鏽鋼、金鋼和18K金等不同物料。
                      即使已經鬆掉、變形、 甚至斷開，都可以原條修復。翻新時，除了會逐格增強結構和拉緊，經打磨後的錶帶亦會回復到開箱時的狀態。
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 