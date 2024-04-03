import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { cn } from '@/lib/utils'
import '../globals.css'

import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Elias Ablan',
    default: 'Elias Ablan | Web and Technology',
  },
  description:
    "I'm a web developer. I build apps and talk about web and tech.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}/`),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          // font
          'text-primary font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable,
          // scrollbar
          'scrollbar'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster richColors expand closeButton />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
