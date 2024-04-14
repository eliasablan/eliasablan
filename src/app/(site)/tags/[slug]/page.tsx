import React from 'react'
import Blog from '@/components/Blog'

import { getTagData, getTags } from '@/sanity/queries'
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

export async function generateStaticParams() {
  const tags = await getTags()

  return tags.map((tag) => ({
    slug: tag?.slug?.current,
  }))
}

const tag = async ({ params }: TagProps) => {
  const tag = await getTagData(params.slug)
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-12 md:pb-0 md:pt-7">
      <div className="py-8 md:pt-12">
        <h2 className="text-xl font-medium"># {tag?.name}</h2>
        <Projects tag={params.slug} />
        <Blog tag={params.slug} />
      </div>
    </main>
  )
}

export default tag
