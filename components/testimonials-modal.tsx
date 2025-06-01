"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { DialogFooter, DialogClose } from "@/components/ui/dialog"

interface TestimonialsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TestimonialsModal({ isOpen, onClose }: TestimonialsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      // Restore scrolling when modal is closed
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // If modal is not open, don't render anything
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-modal-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="w-[90%] max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl relative overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="關閉視窗"
        >
          <X className="h-6 w-6 text-gray-700" />
        </button>

        <div className="p-6 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">客戶評價</h2>

          <div className="w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-reviews-grid_converted-8A6NDRkJ2aDgENQWx4RkltvYnsefQA.webp"
              alt="經典手錶維修的Google評價"
              width={1000}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">加入我們的滿意客戶行列，體驗我們的優質手錶錶帶修復服務。</p>
            <DialogFooter className="mt-6 sm:mt-8">
              <DialogClose asChild>
                <button
                  type="button"
                  className="mt-4 bg-cream-lighter text-neutral-darker hover:bg-cream-light border-2 border-neutral-darker font-medium px-6 py-2 rounded-md inline-flex items-center justify-center transition-colors duration-300 w-full sm:w-auto"
                >
                  關閉評價
                </button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </div>
    </div>
  )
}
