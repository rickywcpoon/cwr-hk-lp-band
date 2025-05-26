// Google Tag Manager utility functions

// Type definitions for GTM events
interface GTMEvent {
  event: string
  [key: string]: unknown
}

// Initialize dataLayer if it doesn't exist
export const initDataLayer = () => {
  if (typeof window !== 'undefined') {
    ;(window as any).dataLayer = (window as any).dataLayer || []
  }
}

// Track page views
export const gtmPageView = (url?: string) => {
  if (typeof window !== 'undefined') {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({
      event: 'page_view',
      page_location: url || window.location.href,
      page_title: document.title,
    })
  }
}

// Track click events for CTA buttons
export const gtmTrackClick = (elementId: string, eventData?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({
      event: 'click',
      click_element_id: elementId,
      click_element_url: window.location.href,
      ...eventData,
    })
  }
}

// Track WhatsApp CTA clicks specifically
export const gtmTrackWhatsAppClick = (source: string, elementId?: string) => {
  if (typeof window !== 'undefined') {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({
      event: 'whatsapp_click',
      click_source: source,
      click_element_id: elementId || 'whatsapp-cta',
      page_location: window.location.href,
      conversion_action: 'whatsapp_contact',
    })
  }
}

// Track consultation requests
export const gtmTrackConsultation = (source: string) => {
  if (typeof window !== 'undefined') {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({
      event: 'consultation_request',
      source: source,
      page_location: window.location.href,
      conversion_action: 'consultation_request',
    })
  }
} 