import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Classic Watch Repair HK',
  description: 'Restore your luxury watch to its original glory with our expert repair services.',
  generator: 'CUSP Growth',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
