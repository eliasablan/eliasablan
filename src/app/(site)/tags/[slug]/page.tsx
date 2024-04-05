import React from 'react'

import { getTagData } from '@/sanity/queries'

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
  const tag = await getTagData(params.slug)

  return (
    <main className="relative mx-auto w-full max-w-2xl">
      <article className="px-6 pb-28 pt-8 md:mt-6 md:pt-16">
        <div className="mx-auto mb-10 block max-w-sm text-center">
          {tag?.name}
        </div>
      </article>
    </main>
  )
}

export default tag
