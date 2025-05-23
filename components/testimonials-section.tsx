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
    name: "詹姆斯·威爾遜",
    title: "勞力士收藏家",
    avatar: "/professional-man-portrait.png",
  },
  {
    id: 2,
    rating: 5,
    quote: "我對修復我的古董卡地亞錶帶持懷疑態度，但結果超出了我的預期。對細節的關注令人驚嘆。",
    name: "陳曉芳",
    title: "手錶愛好者",
    avatar: "/professional-woman-portrait.png",
  },
  {
    id: 3,
    rating: 5,
    quote: "我的皇家橡樹錶帶有明顯的刮痕，我以為是永久性的。修復後，它看起來就像剛從專賣店出來一樣。",
    name: "麥可·湯普森",
    title: "奢華時計收藏家",
    avatar: "/placeholder.svg?key=uk635",
  },
]

export default function TestimonialsSection() {
  // Initialize modal state to false (closed)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-burgundy-light">
              全球超過500位滿意客戶
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-gray-900">客戶評價</h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-burgundy-light border-b-2 border-burgundy pb-1 font-medium transition-all hover:border-burgundy-light"
            >
              查看所有評價
              <svg
                className="ml-2 w-4 h-4 text-burgundy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="relative mt-10 md:mt-16 md:order-2 w-full">
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
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex flex-col overflow-hidden shadow-md group">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-gradient-to-br from-white to-gray-50 lg:py-8 lg:px-7 rounded-lg border border-gray-200 transition-all duration-300 group-hover:shadow-lg">
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
                      <div className="relative h-11 w-11 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
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
        </div>
      </div>

      {/* Modal component with proper conditional rendering */}
      <TestimonialsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
