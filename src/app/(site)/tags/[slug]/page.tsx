import React from 'react'
import Blog from '@/components/Blog'

import { getTagData } from '@/sanity/queries'
import Projects from '@/components/Projects'

export const generateMetadata = async ({ params }: TagProps) => {
  const tag = await getTagData(params.slug)
  const name = tag?.name

  return {
    title: name,
    description: name,
    openGraph: {
      images: [],
    },
  }
}

interface TagProps {
  params: {
    slug: string
  }
}

const tag = async ({ params }: TagProps) => {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <div className="py-8 md:pt-12">
        <h2 className="text-xl font-medium underline decoration-dashed">
          Tag: #{params.slug}
        </h2>
        <Projects tag={params.slug} />
        <Blog tag={params.slug} />
      </div>
    </main>
  )
}

export default tag
