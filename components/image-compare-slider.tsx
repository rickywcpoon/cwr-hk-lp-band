"use client"

import { useState } from "react"
import Image from "next/image"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

/**
 * Image Compare Slider Component
 *
 * This component displays a before/after image comparison slider with thumbnail navigation
 * to switch between different image pairs.
 */

// Data structure for the image pairs - AP pair as default
const imagePairs = [
  {
    id: "ap-pair",
    label: "愛彼皇家橡樹修復",
    before: "/image-compare-slider-before-ap.webp",
    after: "/image-compare-slider-after-ap.webp",
    altPrefix: "愛彼皇家橡樹",
    thumbnail: "/image-compare-slider-after-ap.webp", // Use 'after' image as thumbnail
  },
  {
    id: "rolex-pair",
    label: "勞力士錶帶修復",
    before: "/image-compare-slider-before.webp",
    after: "/image-compare-slider-after.webp",
    altPrefix: "勞力士錶帶",
    thumbnail: "/image-compare-slider-after.webp", // Use 'after' image as thumbnail
  },
]

export function ImageCompareSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0) // Start with AP pair (index 0)

  const selectedPair = imagePairs[selectedIndex]

  return (
    <div className="flex flex-col items-center w-full">
      {/* The Slider Component with Underglow Effect */}
      <div className="relative w-full mb-8 group">
        {/* Underglow Effect */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] h-12 bg-burgundy/20 blur-xl rounded-full"></div>

        {/* Main Slider with Shadow */}
        <div
          className="relative w-full overflow-hidden shadow-2xl rounded-lg z-10 
                      transition-all duration-500 
                      hover:shadow-[0_10px_40px_-15px_rgba(114,47,55,0.5)]"
        >
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={selectedPair.before}
                alt={`${selectedPair.altPrefix} 修復前`}
                width={1024}
                height={1024}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                  maxHeight: "60vh",
                  display: "block",
                }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={selectedPair.after}
                alt={`${selectedPair.altPrefix} 修復後`}
                width={1024}
                height={1024}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                  maxHeight: "60vh",
                  display: "block",
                }}
              />
            }
            style={{
              height: "auto",
              maxHeight: "60vh",
              width: "100%",
              aspectRatio: "3 / 2",
            }}
            className="rounded-lg"
            position={50}
            portrait={false}
          />
        </div>
      </div>

      {/* Current Image Label */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-neutral-lighter">
          {selectedPair.label}
        </h3>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-4 justify-center">
        {imagePairs.map((pair, index) => (
          <button
            key={pair.id}
            onClick={() => setSelectedIndex(index)}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 ${
              selectedIndex === index
                ? 'ring-4 ring-burgundy shadow-lg scale-105'
                : 'ring-2 ring-gray-300 hover:ring-burgundy/50 opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={pair.thumbnail}
              alt={`${pair.altPrefix} 縮圖`}
              width={120}
              height={80}
              className="w-24 sm:w-28 md:w-32 h-16 sm:h-18 md:h-20 object-cover"
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
              quality={85}
              loading="lazy"
              unoptimized={true}
            />
            
            {/* Overlay with label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-white text-xs font-medium p-2 leading-tight">
                {pair.label}
              </span>
            </div>
            
            {/* Selected indicator */}
            {selectedIndex === index && (
              <div className="absolute top-2 right-2 w-3 h-3 bg-burgundy rounded-full border-2 border-white shadow-sm"></div>
            )}
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center text-sm text-neutral-light">
        <p>點擊上方縮圖切換不同修復案例，拖動滑桿查看修復前後對比</p>
      </div>
    </div>
  )
}

export default ImageCompareSlider
