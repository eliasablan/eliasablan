import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { cn } from '@/lib/utils'
import './globals.css'

import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { i18n, type Locale } from '../../../i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

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
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          // font
          'font-sans text-primary antialiased',
          GeistSans.variable,
          GeistMono.variable,
          // scrollbar
          'scrollbar scrollbar-thumb-accent hover:scrollbar-thumb-accent-foreground'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={params.lang} />
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
