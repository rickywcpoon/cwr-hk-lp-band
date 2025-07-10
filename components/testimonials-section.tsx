"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import TestimonialsModal from "./testimonials-modal"

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "對我的潛水者錶帶的修復工作非常出色。它看起來又像新的一樣，而且周轉時間令人印象深刻。",
    name: "Ryan Lai",
    title: "Rolex Submariner Watch Band Restoration",
    avatar: "/testimonials/testimonial-ryan-lai.webp",
  },
  {
    id: 2,
    rating: 5,
    quote: "我對修復我的古董卡地亞錶帶持懷疑態度，但結果超出了我的預期。對細節的關注令人驚嘆。",
    name: "Edith C.",
    title: "Yellow Gold Watch Band Scratch Removal and Tightening",
    avatar: "/testimonials/testimonial-edith-c.webp",
  },
  {
    id: 3,
    rating: 5,
    quote: "The repair on my husband's President watch band was outstanding. It looks brand new.",
    name: "Sarah Miller",
    title: "President Watch Band Full Restoration",
    avatar: "/testimonials/testimonial-sarah-miller.webp",
  },
]

export default function TestimonialsSection() {
  // Initialize modal state to false (closed)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6 text-neutral-darkest">錶友口碑・信心之選</h2>
        </div>
        <div className="flex flex-col items-center mb-12">
          {/* Google Reviews Pill */}
          <div className="mb-6 inline-flex items-center gap-2 bg-white text-neutral-darker px-4 py-2 rounded-full shadow-md">
            <Image src="/google-bubble.webp" alt="Google logo" width={24} height={24} loading="lazy" />
            <span className="font-semibold">500+ 5</span>
            <span className="text-yellow-500 text-xl">⭐</span>
            <span className="font-semibold">Reviews</span>
          </div>

          {/* New Cantonese Text */}
          <p className="text-xl md:text-2xl font-semibold text-center text-gray-800 max-w-2xl">
            全港唯一累積超過500條<br />Google五星正評的手錶維修專門店
          </p>
        </div>

        <p className="text-center text-neutral-dark max-w-xl mx-auto mb-10 text-md">
          真實體驗，修復後的喜悅與安心
        </p>

        <div className="flex flex-col items-center">
          <div className="relative w-full">
            {/* Subtle gradient background effect */}
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-20 blur-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #722F37 -0.55%, #A55567 22.86%, #5A1F28 48.36%, #722F37 73.33%, #A55567 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid grid-cols-1 gap-6 mx-auto md:grid-cols-3 lg:gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex flex-col overflow-hidden shadow-md group animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="testimonial-card flex flex-col justify-between flex-1 p-6 bg-gradient-to-br from-white to-gray-50 lg:py-8 lg:px-7 rounded-lg border border-gray-200 transition-all duration-300 group-hover:shadow-lg">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-burgundy text-burgundy" />
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-700">"{testimonial.quote}"</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover object-center"
                          loading="lazy"
                          sizes="48px"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900">{testimonial.name}</p>
                        <p className="mt-0.5 text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 text-lg font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-burgundy-light">
            全球超過30000位滿意客戶
          </p>
        </div>
      </div>

      {/* Modal component with proper conditional rendering */}
      <TestimonialsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
