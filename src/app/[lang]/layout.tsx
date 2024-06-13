import React from 'react'
import { Toaster } from '@/components/ui/sonner'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { cn } from '@/lib/utils'

import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { i18n, type Locale } from '@/lib/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import DictionaryProvider from '@/components/dictionary-provider'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  params: { lang },
  children,
}: Readonly<{
  params: { lang: Locale }
  children: React.ReactNode
}>) {
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body
        className={cn(
          // font
          'font-sans text-sm text-primary antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <DictionaryProvider dictionary={dictionary}>
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
        </DictionaryProvider>
      </body>
    </html>
  )
}
