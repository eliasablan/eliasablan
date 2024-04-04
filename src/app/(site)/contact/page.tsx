import React from 'react'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Contact Form',
  description:
    'Leave an email and message in my inbox to get in touch with me.',
}

export default function page() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <Contact />
    </main>
  )
}
