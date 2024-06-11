import React from 'react'
import Projects from '@/components/Projects'
import { Locale } from '../../../lib/i18n-config'

export const metadata = {
  title: 'Projects',
  description:
    "I'm a software developer with 5+ years of experience. My portfolio showcases my work on a variety of projects, including websites, web applications, and mobile apps.",
}

export default function page({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <Projects lang={lang} />
    </main>
  )
}
