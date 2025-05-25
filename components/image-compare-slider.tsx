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

// Data structure for the image pairs
const imagePairs = [
  {
    id: "pair1",
    label: "手錶錶帶修復效果",
    before: "/image-compare-slider-before.webp",
    after: "/image-compare-slider-after.webp",
    altPrefix: "錶帶修復",
  },
  {
    id: "pair2",
    label: "百達翡麗鸚鵡螺",
    before: "/placeholder.svg?key=zh628",
    after: "/placeholder.svg?key=xkm3u",
    altPrefix: "百達翡麗鸚鵡螺修復",
  },
  {
    id: "pair3",
    label: "愛彼皇家橡樹",
    before: "/placeholder.svg?key=s9h5n",
    after: "/placeholder.svg?key=xkm3u",
    altPrefix: "愛彼皇家橡樹修復",
  },
  {
    id: "pair4",
    label: "卡地亞山度士",
    before: "/placeholder.svg?key=s9h5n",
    after: "/placeholder.svg?key=xkm3u",
    altPrefix: "卡地亞山度士修復",
  },
  {
    id: "pair5",
    label: "歐米茄超霸",
    before: "/placeholder.svg?key=s9h5n",
    after: "/placeholder.svg?key=xkm3u",
    altPrefix: "歐米茄超霸修復",
  },
]

// Combined Gallery and Slider logic into one component for simplicity in JSX adaptation
export function ImageCompareSlider() {
  const [selectedIndex, setSelectedIndex] = useState(0) // Start with the first pair

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

      {/* Thumbnail Selectors and Label will be removed from here */}
    </div>
  )
}

export default ImageCompareSlider
