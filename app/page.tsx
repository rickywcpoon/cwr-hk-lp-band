import Link from "next/link"
import { ChevronRight, Clock, Shield, PenToolIcon as Tool, Award, MessageCircle } from "lucide-react"
import WhatsappWidgetLoader from "@/components/whatsapp-widget-loader"
import HeroSection from "@/components/hero-section"
import BrandCarousel from "@/components/brand-carousel"
import ImageCompareSlider from "@/components/image-compare-slider"
import ServiceCard from "@/components/service-card"
import PricingTable from "@/components/pricing-table"
import RestorationProcess from "@/components/restoration-process"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  const whatsappLink = "https://wa.me/85260616572"

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection whatsappLink={whatsappLink} />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">我們的專業服務</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">我們提供專為奢華手錶錶帶量身定制的全面修復和維修服務。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Tool className="h-10 w-10" />}
              title="錶節修復"
              description="緊固鬆弛的錶節，恢復手錶錶帶的原有貼合感和手感。"
            />
            <ServiceCard
              icon={<Clock className="h-10 w-10" />}
              title="刮痕去除與拋光"
              description="專業拋光去除刮痕，恢復手錶錶帶的原有光澤。"
            />
            <ServiceCard
              icon={<Shield className="h-10 w-10" />}
              title="結構修復"
              description="專業修復損壞的錶扣、斷裂的錶節和其他結構問題。"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href={whatsappLink}
              className="bg-gradient-to-r from-burgundy to-burgundy-light hover:from-burgundy-light hover:to-burgundy text-white font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              通過WhatsApp諮詢
              <MessageCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Restoration Process Section */}
      <section id="restoration-process" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-100 opacity-80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RestorationProcess />

          <div className="mt-12 text-center">
            <Link
              href={whatsappLink}
              className="bg-gradient-to-r from-burgundy to-burgundy-light hover:from-burgundy-light hover:to-burgundy text-white font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              討論您的修復需求
              <MessageCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Classic Watch Repair</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">我們結合傳統工藝與現代技術，提供卓越的修復效果。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg border border-gray-700 text-center">
              <Award className="h-12 w-12 text-burgundy-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">認證專業技術</h3>
              <p className="text-gray-300">擁有多年奢華手錶修復經驗的專業技師。</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg border border-gray-700 text-center">
              <Clock className="h-12 w-12 text-burgundy-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">快速周轉</h3>
              <p className="text-gray-300">高效服務，不犧牲品質和細節關注。</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg border border-gray-700 text-center">
              <Tool className="h-12 w-12 text-burgundy-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">專業工具</h3>
              <p className="text-gray-300">使用品牌專用設備進行精確和正宗的修復。</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg border border-gray-700 text-center">
              <Shield className="h-12 w-12 text-burgundy-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">滿意保證</h3>
              <p className="text-gray-300">我們以全面的服務保證支持我們的工作。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">修復前後對比</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">見證我們的修復服務為奢華手錶錶帶帶來的顯著變化。</p>
          </div>

          <div className="max-w-4xl mx-auto pb-8">
            <ImageCompareSlider />
          </div>

          <div className="mt-12 text-center">
            <Link
              href={whatsappLink}
              className="bg-gradient-to-r from-burgundy to-burgundy-light hover:from-burgundy-light hover:to-burgundy text-white font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              修復您的手錶錶帶
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Subtle Gradient Transition - DARKER GRADIENT */}
      <div className="transition-gradient">
        <div className="h-40 bg-gradient-to-b from-white via-gray-100 to-gray-200 relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-burgundy transform rotate-45"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full border border-burgundy-light transform -rotate-12"></div>
            <div className="absolute bottom-1/4 left-2/3 w-16 h-16 rounded-full border border-burgundy transform rotate-30"></div>
          </div>

          {/* Subtle radial gradient spots */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-radial-burgundy opacity-[0.04] blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-radial-burgundy opacity-[0.03] blur-3xl transform translate-y-1/2"></div>
        </div>
      </div>

      {/* Brands Section - MOVED HERE - DARKER BACKGROUND */}
      <section className="py-16 bg-gray-200">
        <BrandCarousel />
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">修復價格</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我們的奢華手錶錶帶修復服務價格透明。價格根據材質、型號和狀況而有所不同。
            </p>
          </div>

          <PricingTable />

          <div className="mt-12 text-center">
            <Link
              href={whatsappLink}
              className="bg-gradient-to-r from-burgundy to-burgundy-light hover:from-burgundy-light hover:to-burgundy text-white font-medium px-8 py-4 rounded-md inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              獲取定制報價
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-lg shadow-lg text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">準備好修復您的手錶錶帶了嗎？</h2>
            <p className="text-xl text-gray-300 mb-8">
              立即聯繫我們獲取免費諮詢和報價。我們的專家已準備好幫助您恢復奢華手錶錶帶的生命力。
            </p>
            <Link
              href={whatsappLink}
              className="bg-gradient-to-r from-burgundy to-burgundy-light hover:from-burgundy-light hover:to-burgundy text-white font-bold px-10 py-5 rounded-md inline-flex items-center justify-center text-lg transition-all duration-300 hover:shadow-lg"
            >
              通過WhatsApp聯繫我們
              <MessageCircle className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-gray-100 to-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900">Classic Watch Repair</h3>
              <p className="text-gray-600 mt-2">奢華手錶錶帶修復專家</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <Link href="#services" className="text-gray-700 hover:text-burgundy transition-colors">
                服務項目
              </Link>
              <Link href="#" className="text-gray-700 hover:text-burgundy transition-colors">
                關於我們
              </Link>
              <Link href="#" className="text-gray-700 hover:text-burgundy transition-colors">
                隱私政策
              </Link>
              <Link href="#" className="text-gray-700 hover:text-burgundy transition-colors">
                服務條款
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Classic Watch Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsappWidgetLoader />
    </div>
  )
}
