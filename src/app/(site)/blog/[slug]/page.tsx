import React from 'react'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import PortableTextComponents from '@/components/PortableTextComponents'
import { DateJSX } from '@/components/Date'
import { getPostData, getPosts } from '@/sanity/queries'
import { urlFor } from '@/sanity/utils'
import { cn } from '@/lib/utils'
import { badgeVariants } from '@/components/ui/badge'

interface PostProps {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: PostProps) => {
  const post = await getPostData(params.slug)
  const title = post?.title
  const description = post?.description
  const og_image = post?.og_image
    ? urlFor(post?.og_image).url()
    : undefined

  return {
    title,
    description,
    openGraph: {
      images: [og_image],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post?.slug,
  }))
}

const blogPost = async ({ params }: PostProps) => {
  const post = await getPostData(params.slug)

  return (
    <main className="relative mx-auto w-full max-w-2xl">
      <article className="px-6 pb-28 pt-8 md:mt-6 md:pt-16">
        <div className="mb-10 block text-center">
          <p className="text-sm text-muted-foreground">
            <DateJSX dateString={post?._createdAt || ''} />
          </p>
          <h1 className="text-3xl font-extrabold">{post?.title}</h1>
        </div>
        <PortableText
          value={post?.content || []}
          components={PortableTextComponents}
        />
        <div className="w-full text-sm">
          {post?.tags && (
            <div className="flex flex-wrap items-baseline justify-center gap-8 py-6 md:justify-start">
              {post.tags.map((tag) => {
                return (
                  <Link
                    // @ts-expect-error
                    key={tag?.slug?.current}
                    // @ts-expect-error
                    href={`/tags/${tag?.slug?.current}`}
                    className={cn(
                      badgeVariants({ variant: 'secondary' }),
                      'border-2 hover:border-2 hover:border-dashed hover:border-primary'
                    )}
                  >
                    #
                    {
                      // @ts-expect-error
                      tag?.slug?.current
                    }
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </article>
    </main>
  )
}

export default blogPost
