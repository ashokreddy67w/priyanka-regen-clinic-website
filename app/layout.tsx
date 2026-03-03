import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Dr. Priyanka's Dermatology & Cosmetology Clinic | KPHB, Hyderabad",
  description:
    'Specialist-led clinical dermatology, advanced hair restoration, and results-driven cosmetology in KPHB Phase 1, Kukatpally, Hyderabad. MBBS, MD Dermatology. 4.9★ rated with 870+ reviews.',
  keywords: [
    'dermatologist Hyderabad',
    'dermatology clinic KPHB',
    'skin specialist Kukatpally',
    'hair transplant Hyderabad',
    'cosmetology clinic Hyderabad',
  ],
  openGraph: {
    title: "Dr. Priyanka's Dermatology & Cosmetology Clinic",
    description: 'Expert dermatology care in KPHB, Hyderabad. 4.9★ · 870+ reviews.',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}