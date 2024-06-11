import React from 'react'
import Blog from '@/components/Blog'
import { Locale } from '../../../lib/i18n-config'

export const metadata = {
  title: 'Blog',
  description:
    "I'm a software developer with 5+ years of experience. I share my knowledge and insights on web development, technology, and design on his blog.",
}

export default function page({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <Blog lang={lang} />
    </main>
  )
}
