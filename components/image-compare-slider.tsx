"use client"

import { useState } from "react"
import Image from "next/image"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"
import { useIsMobile } from "./ui/use-mobile"

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useIsMobile()

  const selectedPair = imagePairs[selectedIndex]

  const carouselImages = [
    { src: "/rolex-before-after-1.webp", alt: "Rolex錶帶修復前後對比 1" },
    { src: "/rolex-before-after-2.webp", alt: "Rolex錶帶修復前後對比 2" },
    { src: "/vc-bracelet-restored-sample.webp", alt: "VC錶帶修復樣本" }
  ]

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

      {/* Rolex Before/After Images - Responsive Grid or Carousel */}
      {isMobile ? (
        <div className="w-full mt-8 mb-4">
          <Carousel 
            opts={{ 
              loop: true,
              align: "start"
            }}
            className="w-full"
            setApi={(api) => {
              if (api) {
                api.on("select", () => {
                  setCurrentSlide(api.selectedScrollSnap())
                })
              }
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%]">
                  <div className="p-1">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={900}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                      sizes="85vw"
                      quality={90}
                      loading="lazy"
                      unoptimized={true}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {carouselImages.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-burgundy' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4 w-full mt-8 mb-4">
          <div className="flex-1">
            <Image
              src="/rolex-before-after-1.webp"
              alt="Rolex錶帶修復前後對比 1"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
              loading="lazy"
              unoptimized={true}
            />
          </div>
          <div className="flex-1">
            <Image
              src="/rolex-before-after-2.webp"
              alt="Rolex錶帶修復前後對比 2"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
              loading="lazy"
              unoptimized={true}
            />
          </div>
          <div className="flex-1">
            <Image
              src="/vc-bracelet-restored-sample.webp"
              alt="VC錶帶修復樣本"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
              loading="lazy"
              unoptimized={true}
            />
          </div>
        </div>
      )}

      {/* Thumbnail Selectors and Label will be removed from here */}
    </div>
  )
}

export default ImageCompareSlider
