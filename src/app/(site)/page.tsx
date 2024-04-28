import { Suspense } from 'react'
import Presentation from '@/components/Presentation'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Tags from '@/components/Tags'
import type { Metadata } from 'next'

import { getHome } from '@/sanity/queries'
import { urlFor } from '@/sanity/utils'

export async function generateMetadata() {
  const data = await getHome()
  const title = data?.title
  const description = data?.seo_description
  const og_image = data?.og_image
    ? urlFor(data?.og_image).url()
    : undefined

  let metadata: Metadata = {}
  if (title) metadata.title = title
  if (description) metadata.description = description
  if (og_image) metadata.openGraph = { images: [og_image] }
  return metadata
}

export default function Home() {
  return (
    <main className="relative m-auto max-w-2xl">
      <div className="grid md:grid-cols-1">
        <div className="divide-y px-5 pb-12 md:pb-0">
          <Suspense fallback={null}>
            <Presentation />
          </Suspense>
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
          <Suspense fallback={null}>
            <Blog />
          </Suspense>
          <Suspense fallback={null}>
            <Tags />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
