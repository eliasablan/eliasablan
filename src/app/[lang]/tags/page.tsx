import React from 'react'
import Tags from '@/components/Tags'
import { Locale, i18n } from '../../../lib/i18n-config'

export const metadata = {
  title: 'Tags',
  description:
    "I'm a software developer with 5+ years of experience. I share my knowledge and insights on web development, technology, and design on his blog.",
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function page({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <Tags lang={lang} />
    </main>
  )
}
