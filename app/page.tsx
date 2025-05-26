"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Shield, PenToolIcon as Tool, Award, MessageCircle, MessageSquareText } from "lucide-react"
import WhatsappWidgetLoader from "@/components/whatsapp-widget-loader"
import HeroSection from "@/components/hero-section"
import LooseVsRightFit from "@/components/loose-vs-right-fit"
import BrandCarousel from "@/components/brand-carousel"
import ImageCompareSlider from "@/components/image-compare-slider"
import PricingTable from "@/components/pricing-table"
import RestorationProcess from "@/components/restoration-process"
import TestimonialsSection from "@/components/testimonials-section"
import ScrollAnimationWrapper from "@/components/scroll-animation-wrapper"
import AnimationObserver from "@/components/animation-observer"
import GTMPageView from "@/components/gtm-page-view"


export default function Home() {
  const whatsappLink = "https://wa.me/85260616572"

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection whatsappLink={whatsappLink} />

      {/* Loose vs Right Fit Section */}
      <LooseVsRightFit whatsappLink={whatsappLink} />

      

      {/* Restoration Process Section */}
      <section id="restoration-process" className="py-20 bg-neutral-lighter relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-lighter via-neutral-lighter to-neutral-light opacity-80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RestorationProcess />

          <div className="mt-12 text-center">
            <Link
              href={whatsappLink}
              id="cta-restoration-process"
              className="bg-neutral-lightest text-neutral-darker hover:bg-neutral-light border-2 border-neutral-darker font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                  ;(window as any).dataLayer.push({
                    event: 'whatsapp_click',
                    click_source: 'restoration_process',
                    click_element_id: 'cta-restoration-process',
                    page_location: window.location.href,
                    conversion_action: 'whatsapp_contact',
                  })
                }
              }}
            >
              諮詢我的專屬方案
              <MessageCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - USP Section */}
      <section className="py-20 bg-neutral-darkest text-neutral-lighter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-neutral-lighter">為何放心將手錶交給我們？</h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ScrollAnimationWrapper delay={1} className="card-hover-glow bg-gradient-to-br from-neutral-darker to-neutral-dark p-8 rounded-lg shadow-lg border border-neutral-dark text-center">
              <Shield className="h-12 w-12 text-casal-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-lighter">守護原裝・杜絕耗損</h3>
              <p className="text-neutral-light text-sm">堅持無損技術，激光焊接，保留原有線條，確保價值。</p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={2} className="card-hover-glow bg-gradient-to-br from-neutral-darker to-neutral-dark p-8 rounded-lg shadow-lg border border-neutral-dark text-center">
              <Tool className="h-12 w-12 text-casal-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-lighter">頂尖工藝・專注細節</h3>
              <p className="text-neutral-light text-sm">經驗技師處理「千年積」花痕、鬆脫錶帶，還原精密度。</p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={3} className="card-hover-glow bg-gradient-to-br from-neutral-darker to-neutral-dark p-8 rounded-lg shadow-lg border border-neutral-dark text-center">
              <Award className="h-12 w-12 text-casal-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-lighter">重拾完美・信心保證</h3>
              <p className="text-neutral-light text-sm">目標「回復開箱狀態」。滿意保證，佩戴重拾自信。</p>
            </ScrollAnimationWrapper>
          </div>

          {/* Michael Young Hero Card */}
          <ScrollAnimationWrapper animationClass="scale-in" className="michael-card bg-gradient-to-br from-casal-darker to-neutral-darker p-8 rounded-lg shadow-xl border border-casal-dark">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Portrait */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src="/michael-young.webp"
                    alt="Michael Young - 錶帶魔術師"
                    width={160}
                    height={160}
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-casal-light shadow-lg"
                    loading="lazy"
                    sizes="(max-width: 1024px) 128px, 160px"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-casal-light/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <MessageSquareText className="h-8 w-8 text-casal-light mr-3" />
                  <h3 className="text-2xl font-bold text-neutral-lighter">「錶帶魔術師」</h3>
                </div>
                <h4 className="text-lg font-semibold text-casal-light mb-3">Michael Young</h4>
                <p className="text-neutral-light leading-relaxed">
                  這別名來自手錶收藏家圈子，是不同客人對 Classic Watch Repair 創辦人Michael Young 修復舊金屬錶帶工藝的一個讚譽和肯定。憑藉多年專業經驗，他能讓看似無法挽救的錶帶重獲新生。
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-neutral-lightest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-neutral-darkest">真實案例・「錶」然一新</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto text-sm">
            左右滑動，見證「飽經風霜」到「完美如初」的蛻變
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClass="scale-in" className="max-w-4xl mx-auto pb-8">
            <ImageCompareSlider />
            <p className="text-center text-neutral-dark mt-4 text-sm">細節執著，完美追求</p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-12 text-center">
            <Link
              href={whatsappLink}
              className="btn-pulse bg-neutral-lightest text-neutral-darker hover:bg-neutral-light border-2 border-neutral-darker font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              讓我的手錶也煥然一新
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Brands Section - ServiceBrands style */}
      <section className="py-16 bg-neutral-lighter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4 text-neutral-darkest">頂級名錶・信心修復</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
            精通各大品牌錶帶修復
            </p>
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper animationClass="slide-in-left">
          <BrandCarousel />
        </ScrollAnimationWrapper>
      </section>

      {/* Pricing Section - ServiceProcess style */}
      <section className="py-20 bg-cocoa-bean-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-neutral-lighter">明智投資・遠勝天價更換</h2>
            <p className="text-neutral-light max-w-3xl mx-auto">
            原廠換帶極昂貴，且未必能修復「鬆」等問題。專業修復費用更合理，針對性解決花痕、崩凹、鬆弛
            </p>
            <p className="text-neutral-light max-w-3xl mx-auto mt-4">
            錶帶狀況各異，依材質、損耗及複雜性提供個人化報價
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClass="scale-in">
            <PricingTable />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-12 text-center">
            <Link
              href={whatsappLink}
              id="cta-usp-whatsapp"
              className="btn-pulse bg-neutral-lightest text-neutral-darker hover:bg-neutral-light border-2 border-neutral-darker font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                  ;(window as any).dataLayer.push({
                    event: 'whatsapp_click',
                    click_source: 'usp_section',
                    click_element_id: 'cta-usp-whatsapp',
                    page_location: window.location.href,
                    conversion_action: 'whatsapp_contact',
                  })
                }
              }}
            >
              免費初步評估
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="text-neutral-light max-w-2xl mx-auto mt-4 text-sm">
            請放心，我們會在詳細檢查並與您確認修復方案及費用後，才會開始任何工作。絕無隱藏收費。
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-28 relative bg-cover bg-center bg-neutral-darkest">
        <Image
          src="/central-workshop-vibe.webp"
          alt="Classic Watch Repair Workshop"
          fill
          className="object-cover"
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimationWrapper animationClass="scale-in" className="max-w-4xl mx-auto text-center text-neutral-lightest">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-lightest">手錶值得擁有重「新」</h2>
            <p className="text-xl text-neutral-lightest mb-8">
            鬆弛、刮痕、損傷？專業修復，回復完美，重拾價值
            </p>
            <Link
              href={whatsappLink}
              id="cta-final-whatsapp"
              className="btn-pulse animate-gentle-bounce bg-neutral-lightest text-neutral-darker hover:bg-neutral-light border-2 border-neutral-darker font-bold px-10 py-5 rounded-md inline-flex items-center justify-center text-lg transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                  ;(window as any).dataLayer.push({
                    event: 'whatsapp_click',
                    click_source: 'final_cta',
                    click_element_id: 'cta-final-whatsapp',
                    page_location: window.location.href,
                    conversion_action: 'whatsapp_contact',
                  })
                }
              }}
            >
             預約免費初步評估
              <MessageCircle className="ml-2 h-6 w-6" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-casal-darker border-t border-casal-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mt-8 pt-8 border-casal-dark text-left text-neutral-light">
            <p>© {new Date().getFullYear()} Classic Watch Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsappWidgetLoader />
      
      {/* Animation Observer */}
      <AnimationObserver />
      
      {/* GTM Page View Tracking */}
      <GTMPageView />
    </div>
  )
}
