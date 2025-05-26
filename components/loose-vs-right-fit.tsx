import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

interface LooseVsRightFitProps {
  whatsappLink: string
}

export default function LooseVsRightFit({ whatsappLink }: LooseVsRightFitProps) {
  return (
    <section className="py-20 bg-casal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Left on desktop, Top on mobile */}
          <div className="order-1 lg:order-1">
            <div className="relative overflow-hidden shadow-2xl">
              <Image
                src="/loose-vs-good-fitting.webp"
                alt="鬆弛錶帶對比緊密貼合錶帶"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>

          {/* Content - Right on desktop, Bottom on mobile */}
          <div className="order-2 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-lighter mb-6 leading-tight">
                錶帶「虛位」不再？<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-casal-lighter to-casal-light block">
                  重拾原廠貼合感。
                </span>
              </h2>

              <div className="space-y-6 text-lg text-neutral-lighter leading-relaxed">
                <p className="font-medium text-xl text-neutral-lighter">
                  錶帶鬆垮（「吊吊揈」），影響佩戴，更可能暗藏安全隱憂。我們專注解決錶帶「虛位」問題，恢復應有緊緻，讓腕錶穩固貼合。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 