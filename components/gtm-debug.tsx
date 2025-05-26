"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    gtmTest: {
      testClick: () => void
      showDataLayer: () => void
    }
  }
}

// Debug component to help test GTM implementation
// Add this temporarily to your page to see dataLayer events in console
export default function GTMDebug() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Log initial dataLayer state
      console.log('GTM Debug: Initial dataLayer:', (window as any).dataLayer)
      
      // Monitor dataLayer pushes
      const originalPush = (window as any).dataLayer?.push
      if (originalPush) {
        ;(window as any).dataLayer.push = function(...args: any[]) {
          console.log('GTM Debug: dataLayer.push called with:', args)
          return originalPush.apply(this, args)
        }
      }
      
      // Test function to manually trigger events
      window.gtmTest = {
        testClick: () => {
          ;(window as any).dataLayer = (window as any).dataLayer || []
          ;(window as any).dataLayer.push({
            event: 'test_click',
            test_data: 'manual_test',
            timestamp: new Date().toISOString(),
          })
          console.log('GTM Debug: Test click event sent')
        },
        showDataLayer: () => {
          console.log('GTM Debug: Current dataLayer:', (window as any).dataLayer)
        }
      }
      
      console.log('GTM Debug: Debug functions available as window.gtmTest')
      console.log('GTM Debug: Use window.gtmTest.testClick() to test')
      console.log('GTM Debug: Use window.gtmTest.showDataLayer() to view current state')
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white p-2 text-xs rounded z-50 opacity-50">
      GTM Debug Active (Check Console)
    </div>
  )
} 