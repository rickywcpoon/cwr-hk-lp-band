"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

const restorationSteps = [
  {
    id: 1,
    title: "結構加固",
    titleChinese: "增強結構，更換每一格的內柱芯",
    description: "我們通過更換每個鏈節中的內部柱芯來加強結構，確保錶帶恢復原有的穩定性和耐用性。",
    image: "/process/step-1.webp",
  },
  {
    id: 2,
    title: "錶帶緊固",
    titleChinese: "拉緊錶帶，還原近乎全新狀態",
    description: "我們精心拉緊手錶帶，使其恢復到接近全新的狀態，消除鬆動並恢復適當的貼合感和手感。",
    image: "/process/step-2.webp",
  },
  {
    id: 3,
    title: "精密激光修復",
    titleChinese: "鋼或18K金雷射修補崩，重新塑造外型",
    description: "使用先進的激光焊接技術，我們修復鋼或18K金錶帶上的損壞區域，精確地將外觀重塑為原始形態。",
    image: "/process/step-3.webp",
  },
  {
    id: 4,
    title: "刮痕去除與拋光",
    titleChinese: "去除花痕，還原原廠打磨及拋光",
    description: "我們精細地去除刮痕並恢復原廠的拋光處理，使錶帶恢復原有的光澤和亮度。",
    image: "/process/step-4.webp",
  },
]

export default function RestorationProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [imagesPreloaded, setImagesPreloaded] = useState(false)

  // Preload all step images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = restorationSteps.map((step) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image()
          img.onload = resolve
          img.onerror = reject
          img.src = step.image
        })
      })

      try {
        await Promise.all(imagePromises)
        setImagesPreloaded(true)
      } catch (error) {
        console.warn('Some process step images failed to preload:', error)
        setImagesPreloaded(true) // Continue anyway
      }
    }

    preloadImages()
  }, [])

  const nextStep = () => {
    setActiveStep((prev) => (prev === restorationSteps.length - 1 ? 0 : prev + 1))
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? restorationSteps.length - 1 : prev - 1))
  }

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextStep()
    } else if (isRightSwipe) {
      prevStep()
    }
  }

  const currentStep = restorationSteps[activeStep]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">我們的精細修復過程</h2>
        <p className="text-xl text-gray-500 mb-2">金屬錶帶修復過程</p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          每條手錶錶帶都經過全面的修復過程，結合傳統工藝與現代技術，以達到卓越的效果。
        </p>
      </div>

      {/* Process Steps Indicators */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2">
          {restorationSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => imagesPreloaded && setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index ? "bg-burgundy w-6" : "bg-gray-300"
              } ${!imagesPreloaded ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              aria-label={`前往步驟 ${index + 1}`}
              disabled={!imagesPreloaded}
            />
          ))}
        </div>
      </div>

      {/* Hidden preload images for instant switching */}
      <div className="hidden">
        {restorationSteps.map((step, index) => (
          index !== activeStep && (
            <Image
              key={`preload-${step.id}`}
              src={step.image}
              alt={`Preload ${step.title}`}
              width={1}
              height={1}
              loading="eager"
              quality={75}
            />
          )
        ))}
      </div>

      {/* Combined Content Card - Image and Text in one visual group */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden scale-in card-hover-glow">
        {/* Image Section with 3:2 aspect ratio */}
        <div 
          className="relative w-full" 
          style={{ aspectRatio: "3/2" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-4 left-4 z-10 bg-burgundy text-white font-bold px-4 py-2 rounded-md">
            步驟 {activeStep + 1}/{restorationSteps.length}
          </div>

          <div
            key={currentStep.id}
            className="absolute inset-0 process-step"
            style={{ 
              opacity: 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <Image
              src={currentStep.image || "/placeholder.svg"}
              alt={currentStep.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading={activeStep === 0 ? "eager" : "lazy"}
              quality={75}
              priority={activeStep === 0}
              fetchPriority={activeStep === 0 ? "high" : "low"}
            />
          </div>

          {/* Loading indicator for image preloading */}
          {!imagesPreloaded && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-white/90 rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-burgundy border-t-transparent"></div>
                  <span className="text-sm text-gray-700">載入中...</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevStep}
              className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full transition-colors shadow-sm disabled:opacity-50"
              aria-label="上一步"
              disabled={!imagesPreloaded}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextStep}
              className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full transition-colors shadow-sm disabled:opacity-50"
              aria-label="下一步"
              disabled={!imagesPreloaded}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div
          key={currentStep.id}
          className="p-8"
          style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.5s ease-in-out'
          }}
        >
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{currentStep.title}</h3>
          <p className="text-burgundy mb-6">{currentStep.titleChinese}</p>
          <p className="text-gray-700 mb-6">{currentStep.description}</p>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-burgundy transition-all duration-500"
                style={{ width: `${((activeStep + 1) / restorationSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
