import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Optimize fonts with subsetting and display strategies
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: '錶帶魔術師 Michael Young | Classic Watch Repair HK - 專業錶帶修復',
  description: '香港專業錶帶修復服務。「錶帶魔術師」Michael Young 憑20年經驗，激光焊接技術修復Rolex、Patek Philippe等名錶錶帶。重拾原廠氣派，經典再現。',
  keywords: '錶帶修復, 手錶維修, Rolex錶帶, 香港錶帶修復, 錶帶魔術師, Michael Young, Classic Watch Repair',
  authors: [{ name: 'Classic Watch Repair HK' }],
  generator: 'CUSP Growth',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '錶帶魔術師 Michael Young | Classic Watch Repair',
    description: '20年經驗，激光焊接技術，修復各大名錶錶帶。重拾原廠氣派，經典再現。',
    locale: 'zh_HK',
    type: 'website',
    url: 'https://main.d3lpkejux2a402.amplifyapp.com',
    siteName: 'Classic Watch Repair HK',
    images: [
      {
        url: 'https://main.d3lpkejux2a402.amplifyapp.com/cwr-logo.png',
        width: 288,
        height: 77,
        alt: 'Classic Watch Repair Logo',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-HK" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta property="og:image" content="https://main.d3lpkejux2a402.amplifyapp.com/cwr-logo.png" />
        <meta property="og:image:width" content="288" />
        <meta property="og:image:height" content="77" />
        <meta property="og:image:type" content="image/png" />
        <link rel="preload" href="/images/hero.webp" as="image" />
        <link rel="preconnect" href="https://wa.me" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}
