"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

const WhatsappChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const whatsappUrl = "https://wa.me/85260616572" // HK country code + number
  const autoOpenTimerRef = useRef<NodeJS.Timeout | null>(null)
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null) // Use this for recursive timeout

  // Define the full text content
  const fullText = `Welcome to Classic Watch Repair. Simply REPLY HERE for a quick quotation! Thank you.\n\n歡迎來到Classic Watch Repair時計工房。你只需在此簡單回覆便可獲取報價！謝謝。`

  // Auto-open timer effect
  useEffect(() => {
    if (!isOpen && !hasInteracted) {
      autoOpenTimerRef.current = setTimeout(() => {
        setIsOpen(true)
      }, 30000)
    }
    return () => {
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current)
      }
    }
  }, [isOpen, hasInteracted])

  // Typewriter animation effect
  useEffect(() => {
    const cleanupAnimation = () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
      setIsAnimating(false)
    }

    if (isOpen) {
      setIsAnimating(true)
      let index = 0
      const targetDuration = 1500
      const intervalDuration = Math.max(10, targetDuration / (fullText.length || 1))

      const typeCharacter = () => {
        // Use substring to build the text state, ensures correct length
        setDisplayedText(fullText.substring(0, index + 1))

        const isLastChar = index >= fullText.length - 1

        if (isLastChar) {
          setIsAnimating(false) // Stop animation state
        } else {
          index++ // Increment index for the next character
          animationTimeoutRef.current = setTimeout(typeCharacter, intervalDuration)
        }
      }

      // Start the typing process after a tiny delay to ensure state reset propagates
      setDisplayedText("") // Reset here, just before starting
      animationTimeoutRef.current = setTimeout(typeCharacter, 10) // Start typing slightly delayed
    } else {
      cleanupAnimation()
      setDisplayedText("")
    }

    return cleanupAnimation
  }, [isOpen, fullText])

  const handleInteraction = () => {
    setHasInteracted(true)
    if (autoOpenTimerRef.current) {
      clearTimeout(autoOpenTimerRef.current)
    }
  }

  const toggleWidget = () => {
    setIsOpen(!isOpen)
    handleInteraction()
  }

  const closeWidget = () => {
    setIsOpen(false)
    handleInteraction()
  }

  const handleChatNow = () => {
    // Track GTM click event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: 'whatsapp_click',
        click_source: 'widget_chat_now',
        click_element_id: 'cta-widget-chat-now',
        page_location: window.location.href,
        conversion_action: 'whatsapp_contact',
      })
    }
    window.open(whatsappUrl, "_blank")
    closeWidget()
  }

  return (
    <>
      {/* Sticky Icon Button */}
      <button
        onClick={toggleWidget}
        className="fixed bottom-5 right-5 z-[9998] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_15px_-3px_rgba(25,25,25,0.3),_0_4px_6px_-4px_rgba(25,25,25,0.3)] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl border-[2px] border-white"
        aria-label="Open WhatsApp Chat"
      >
        <FaWhatsapp className="h-8 w-8" />
        {/* Red Notification Dot */}
        <span className="absolute -right-1 -top-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
        </span>
      </button>

      {/* Chat Widget Popup */}
      {isOpen && (
        <div
          className="fixed bottom-[80px] right-5 z-[9999] flex w-[350px] flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-xl"
          style={{ maxHeight: "calc(100vh - 100px)" }}
        >
          {/* Header */}
          <div className="flex flex-shrink-0 items-center justify-between bg-gray-900 p-4 text-white">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Image src="/cwr-whatsapp-logo.webp" alt="CWR Logo" width={40} height={40} className="rounded-full" loading="lazy" />
              <div>
                <div className="font-semibold">Barry@CWR</div>
                <div className="text-xs text-gray-200">Typically replies within a day</div>
              </div>
            </div>
            <button onClick={closeWidget} aria-label="Close chat widget">
              <IoClose className="h-5 w-5 text-gray-300 hover:text-white" />
            </button>
          </div>

          {/* Body with Chat Bubble & Background */}
          <div
            className="flex-grow overflow-y-auto p-4"
            style={{
              backgroundColor: "#E5DDD5",
              backgroundImage: "url(/whatsapp-bubble-background.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Bubble with updated border and animated text logic */}
            <div className="mb-4 max-w-[85%] rounded-lg border border-gray-700 bg-white p-3 shadow-sm">
              <p className="whitespace-pre-wrap text-sm text-gray-800">
                {displayedText}
                {/* Blinking cursor simulation - uses isAnimating state */}
                {isAnimating && <span className="animate-pulse">|</span>}
              </p>
              {/* Tiny timestamp imitation - appears when not animating */}
              {!isAnimating && isOpen && displayedText.length > 0 && (
                <div className="mt-1 text-right text-[10px] text-gray-400">2:14</div>
              )}
            </div>
          </div>

          {/* Footer Button */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 p-4">
            <button
              id="cta-widget-chat-now"
              onClick={handleChatNow}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-3 text-center font-medium text-white shadow-md transition hover:scale-[1.02] hover:bg-[#128C7E]"
            >
              <FaWhatsapp className="h-5 w-5" />
              Chat Now
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsappChatWidget
