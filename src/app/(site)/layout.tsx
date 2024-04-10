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
import { getSettings } from '@/sanity/queries'

export const metadata: Metadata = {
  title: {
    template: '%s | Elias Ablan',
    default: 'Elias Ablan | Web and Technology',
  },
  description:
    "I'm a web developer. I build apps and talk about web and tech.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}/`),
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await getSettings()
  return (
    <html lang="en">
      <body
        className={cn(
          // font
          'font-sans text-primary antialiased',
          GeistSans.variable,
          GeistMono.variable,
          // scrollbar
          'scrollbar scrollbar-thumb-accent'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header items={settings.urls} />
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
