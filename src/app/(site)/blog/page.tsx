import React from 'react'
import Blog from '@/components/Blog'

export const metadata = {
  title: 'Blog',
  description:
    "I'm a software developer with 5+ years of experience. I share my knowledge and insights on web development, technology, and design on his blog.",
}

export default function page() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <Blog />
    </main>
  )
}
