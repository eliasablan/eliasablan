import React from 'react'
import Contact from '@/components/Contact'
import { Locale, i18n } from '../../../lib/i18n-config'

export const metadata = {
  title: 'Contact Form',
  description:
    'Leave an email and message in my inbox to get in touch with me.',
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
      <Contact lang={lang} />
    </main>
  )
}
