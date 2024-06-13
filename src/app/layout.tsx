import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

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
  return <html>{children}</html>
}
