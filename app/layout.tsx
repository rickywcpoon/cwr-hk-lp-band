import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// Optimize fonts with subsetting and display strategies
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cwr-band.cuspgrowth.com'),
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
    siteName: 'Classic Watch Repair HK',
    images: [
      {
        url: '/cwr-whatsapp-logo.webp',
        width: 512,
        height: 512,
        alt: 'Classic Watch Repair WhatsApp Logo',
        type: 'image/webp',
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
        {/* IMMEDIATE: Start hero image download before anything else */}
        <link rel="preload" href="/hero-band-restoration.webp" as="image" type="image/webp" fetchPriority="high" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta property="og:image" content="/cwr-whatsapp-logo.webp" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/webp" />
        {/* Critical resource preloading for LCP optimization */}
        <link rel="preload" href="/cwr-logo.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preload" href="/cwr-whatsapp-logo.webp" as="image" type="image/webp" fetchPriority="high" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for hero section - LCP optimization */
            .gradient-text-animate { background-size: 200% 200%; animation: gradient 3s ease infinite; }
            @keyframes gradient { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
            .parallax-slow { will-change: transform; transform: translateZ(0); }
            .btn-pulse { animation: pulse 2s infinite; }
            @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.02); } }
            /* Ensure hero background loads immediately */
            .hero-bg { content-visibility: auto; contain-intrinsic-size: 100vw 100vh; }
          `
        }} />
        
        {/* External connections - optimized for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        
        {/* Prefetch critical resources */}
        <link rel="prefetch" href="/loose-vs-good-fitting.webp" />
        <link rel="prefetch" href="/michael-young.webp" />
      </head>
      <body className="font-inter">
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNMHG6DQ');
            `,
          }}
        />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNMHG6DQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
}
