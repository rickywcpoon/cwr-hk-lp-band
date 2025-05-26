"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function GTMPageView() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize dataLayer if it doesn't exist
      ;(window as any).dataLayer = (window as any).dataLayer || []
      
      // Track page view
      ;(window as any).dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_path: pathname,
        page_title: document.title,
        page_search: window.location.search,
      })
    }
  }, [pathname])

  return null
} 