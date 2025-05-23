"use client"

import dynamic from "next/dynamic"

// Dynamically import WhatsappChatWidget, disable SSR as it interacts with browser APIs
const WhatsappChatWidget = dynamic(() => import("./WhatsappChatWidget"), { ssr: false })

export default function WhatsappWidgetLoader() {
  return <WhatsappChatWidget />
}
