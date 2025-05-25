"use client"

import React from "react"
import Image from "next/image"

// Define the logo filenames
const logoFiles = Array.from({ length: 10 }, (_, i) => `${i + 1}.webp`)

const logos = logoFiles.map((filename, index) => ({
  src: `/brands/${filename}`,
  alt: `Brand Logo ${index + 1}`, // Generic alt text
}))

// Define desired dimensions (adjust as needed)
const logoWidth = 150
// const logoHeight = 50; // Height can be auto based on aspect ratio

// Duplicate the logos array for seamless looping animation
// const duplicatedLogos = Array.from({ length: 10 }).flatMap(() => logos); // Repeat 10 times
const duplicatedLogos = [...logos, ...logos] // Use only two copies for standard CSS marquee

export function ServiceBrands() {
  return (
    <section id="service-brands" className="bg-neutral-lighter overflow-hidden py-8 md:py-10 lg:py-12 text-neutral-darkest">
      <div className="flex items-center">
        <div
          className="flex shrink-0 animate-loop-horizontally items-center"
          style={{ transform: "translateZ(0)" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.src}-${index}`} className="mx-7 flex-shrink-0 md:mx-10">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logoWidth} // Use the defined width variable
                height={60} // Keep a fixed height or adjust based on design needs
                className="h-auto" // Let height adjust automatically based on width and aspect ratio
                style={{ objectFit: "contain", width: `${logoWidth}px` }} // Ensure width is applied and aspect ratio is maintained
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Export as default for backward compatibility
export default ServiceBrands
