import { Suspense } from 'react'
import Presentation from '@/components/Presentation'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Tags from '@/components/Tags'
import type { Metadata } from 'next'

import { getHome } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/utils'
import { Locale } from '../../lib/i18n-config'

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

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <main className="relative m-auto max-w-2xl">
      <div className="grid md:grid-cols-1">
        <div className="divide-y px-5 pb-12 md:pb-0">
          <Suspense fallback={null}>
            <Presentation lang={lang} />
          </Suspense>
          <Suspense fallback={null}>
            <Projects lang={lang} />
          </Suspense>
          <Suspense fallback={null}>
            <Blog lang={lang} />
          </Suspense>
          <Suspense fallback={null}>
            <Tags lang={lang} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
