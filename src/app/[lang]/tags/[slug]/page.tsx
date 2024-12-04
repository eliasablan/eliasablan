import React from 'react'
import Blog from '@/components/Blog'

import { getTagData, getTags } from '@/lib/sanity/queries'
import Projects from '@/components/Projects'
import { Locale } from '../../../../lib/i18n-config'

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
    lang: Locale
  }
}

export async function generateStaticParams({ params }: TagProps) {
  const tags = await getTags(params.lang)

  return tags.map((tag) => ({
    slug: tag?.slug?.current,
  }))
}

const tag = async ({ params }: TagProps) => {
  const { lang, slug } = params
  const tag = await getTagData(slug)
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-12">
      <div className="py-8 md:pt-12">
        <h2 className="text-xl font-medium">{tag?.name}</h2>
        <Projects lang={lang} tag={slug} />
        <Blog lang={lang} tag={slug} />
      </div>
    </main>
  )
}

export default tag
