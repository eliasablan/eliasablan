import React from 'react'
import { PortableText } from '@portabletext/react'
import PortableTextComponents from '@/components/PortableTextComponents'
import { DateJSX } from '@/components/Date'
import { getPostData } from '@/sanity/queries'
import { urlFor } from '@/sanity/utils'

interface PostProps {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: PostProps) => {
  const data = await getPostData(params.slug)
  const title = data.title
  const description = data.description
  const og_image = data.og_image ? urlFor(data.og_image).url() : undefined

  return {
    title,
    description,
    openGraph: {
      images: [og_image],
    },
  }
}

const blogPost = async ({ params }: PostProps) => {
  const data = await getPostData(params.slug)

  return (
    <main className="relative mx-auto w-full max-w-2xl">
      <article className="px-6 pb-28 pt-8 md:mt-6 md:pt-16">
        <div className="mb-10 block text-center">
          <p className="text-sm text-muted-foreground">
            <DateJSX dateString={data._createdAt} />
          </p>
          <h1 className="text-3xl font-extrabold">{data.title}</h1>
        </div>
        <PortableText
          value={data.content || []}
          components={PortableTextComponents}
        />
      </article>
    </main>
  )
}

export default blogPost
