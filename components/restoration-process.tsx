"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const restorationSteps = [
  {
    id: 1,
    title: "結構加固",
    titleChinese: "增強結構，更換每一格的內柱芯",
    description: "我們通過更換每個鏈節中的內部柱芯來加強結構，確保錶帶恢復原有的穩定性和耐用性。",
    descriptionChinese: "我們通過更換每個鏈節中的內部柱芯來加強結構，確保錶帶恢復原有的穩定性和耐用性。",
    image: "/placeholder.svg?key=step1",
  },
  {
    id: 2,
    title: "錶帶緊固",
    titleChinese: "拉緊錶帶，還原近乎全新狀態",
    description: "我們精心拉緊手錶帶，使其恢復到接近全新的狀態，消除鬆動並恢復適當的貼合感和手感。",
    descriptionChinese: "我們精心拉緊手錶帶，使其恢復到接近全新的狀態，消除鬆動並恢復適當的貼合感和手感。",
    image: "/placeholder.svg?key=step2",
  },
  {
    id: 3,
    title: "精密激光修復",
    titleChinese: "鋼或18K金雷射修補崩，重新塑造外型",
    description: "使用先進的激光焊接技術，我們修復鋼或18K金錶帶上的損壞區域，精確地將外觀重塑為原始形態。",
    descriptionChinese: "使用先進的激光焊接技術，我們修復鋼或18K金錶帶上的損壞區域，精確地將外觀重塑為原始形態。",
    image: "/placeholder.svg?key=step3",
  },
  {
    id: 4,
    title: "刮痕去除與拋光",
    titleChinese: "去除花痕，還原原廠打磨及拋光",
    description: "我們精細地去除刮痕並恢復原廠的拋光處理，使錶帶恢復原有的光澤和亮度。",
    descriptionChinese: "我們精細地去除刮痕並恢復原廠的拋光處理，使錶帶恢復原有的光澤和亮度。",
    image: "/placeholder.svg?key=step4",
  },
]

export default function RestorationProcess() {
  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => {
    setActiveStep((prev) => (prev === restorationSteps.length - 1 ? 0 : prev + 1))
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? restorationSteps.length - 1 : prev - 1))
  }

  const currentStep = restorationSteps[activeStep]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
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
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index ? "bg-burgundy w-6" : "bg-gray-300"
              }`}
              aria-label={`前往步驟 ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Combined Content Card - Image and Text in one visual group */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Image Section with 3:2 aspect ratio */}
        <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
          <div className="absolute top-4 left-4 z-10 bg-burgundy text-white font-bold px-4 py-2 rounded-md">
            步驟 {activeStep + 1}/{restorationSteps.length}
          </div>

          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={currentStep.image || "/placeholder.svg"}
              alt={currentStep.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevStep}
              className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full transition-colors shadow-sm"
              aria-label="上一步"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextStep}
              className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full transition-colors shadow-sm"
              aria-label="下一步"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Text Section */}
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="p-8"
        >
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{currentStep.title}</h3>
          <p className="text-burgundy mb-6">{currentStep.titleChinese}</p>
          <p className="text-gray-700 mb-6">{currentStep.description}</p>
          <p className="text-gray-500 text-sm">{currentStep.descriptionChinese}</p>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-burgundy transition-all duration-500"
                style={{ width: `${((activeStep + 1) / restorationSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
