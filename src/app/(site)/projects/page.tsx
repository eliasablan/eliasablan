import React from 'react'
import Projects from '@/components/Projects'

export const metadata = {
  title: 'Projects',
  description:
    "I'm a software developer with 5+ years of experience. My portfolio showcases my work on a variety of projects, including websites, web applications, and mobile apps.",
}

export default function page() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <Projects />
    </main>
  )
}
