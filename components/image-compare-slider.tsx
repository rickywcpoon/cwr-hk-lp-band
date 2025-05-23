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
    label: "歐米茄超霸",
    before: "/comparison/pair1-before.webp",
    after: "/comparison/pair1-after.webp",
    altPrefix: "歐米茄超霸修復",
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
          className="relative w-full overflow-hidden shadow-2xl rounded-lg bg-black z-10 
                      transition-all duration-500 
                      hover:shadow-[0_10px_40px_-15px_rgba(114,47,55,0.5)]"
        >
          <ReactCompareSlider
            itemOne={
              <div className="flex items-center justify-center bg-black">
                <ReactCompareSliderImage
                  src={selectedPair.before}
                  alt={`${selectedPair.altPrefix} 修復前`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                    maxHeight: "60vh",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
            }
            itemTwo={
              <div className="flex items-center justify-center bg-black">
                <ReactCompareSliderImage
                  src={selectedPair.after}
                  alt={`${selectedPair.altPrefix} 修復後`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                    maxHeight: "60vh",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
            }
            style={{
              height: "auto",
              maxHeight: "60vh",
              width: "100%",
              aspectRatio: "1/1",
            }}
            className="rounded-lg"
            position={50}
            portrait={false}
          />
        </div>
      </div>

      {/* Selected Pair Label */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold">{selectedPair.label}</h3>
        <p className="text-gray-400">拖動滑塊比較修復效果</p>
      </div>

      {/* Thumbnail Selectors */}
      <div className="flex justify-center space-x-3 sm:space-x-4">
        {imagePairs.map((pair, index) => (
          <button
            key={pair.id}
            onClick={() => setSelectedIndex(index)}
            className={`relative overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy transition-all duration-200 ease-in-out ${
              selectedIndex === index
                ? "opacity-100 ring-2 ring-burgundy ring-offset-2 scale-105" // Active style
                : "opacity-60 hover:opacity-100" // Inactive style
            }`}
            aria-label={`選擇 ${pair.label} 對比`}
          >
            <Image
              src={index === 0 ? pair.after : "/placeholder.svg?key=kbe7k"}
              alt={`${pair.label} 縮略圖`}
              width={96}
              height={80}
              className="w-20 h-16 sm:w-24 sm:h-20 object-cover"
              sizes="(max-width: 640px) 80px, 96px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageCompareSlider
