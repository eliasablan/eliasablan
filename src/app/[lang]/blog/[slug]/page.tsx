import React from 'react'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import PortableTextComponents from '@/components/PortableTextComponents'
import { LongDateJSX } from '@/components/Date'
import { getPostData, getPosts } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/utils'
import { cn } from '@/lib/utils'
import { badgeVariants } from '@/components/ui/badge'
import { Locale } from '../../../../lib/i18n-config'

interface PostProps {
  params: {
    lang: Locale
    slug: string
  }
}

export const generateMetadata = async ({ params }: PostProps) => {
  const post = await getPostData(params.slug)
  const title = post?.seo?.title
  const description = post?.seo?.description
  const og_image = post?.seo?.og_image
    ? urlFor(post?.seo?.og_image).url()
    : undefined

  return {
    title,
    description,
    openGraph: {
      images: [og_image],
    },
  }
}

export async function generateStaticParams({ params }: PostProps) {
  const posts = await getPosts({ lang: params.lang })

  return posts.map((post) => ({
    slug: post?.slug,
  }))
}

const blogPost = async ({ params }: PostProps) => {
  const { lang, slug } = params
  const post = await getPostData(slug)

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-12">
      <article className="px-6 py-12">
        <div className="mx-auto mb-10 block max-w-sm text-center">
          <p className="text-sm text-muted-foreground">
            <LongDateJSX dateString={post?._createdAt || ''} lang={lang} />
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
                    key={tag?.slug?.current}
                    href={`/${lang}/tags/${tag?.slug?.current}`}
                    className={cn(
                      badgeVariants({ variant: 'secondary' }),
                      'border-2 hover:border-2 hover:border-dashed hover:border-primary'
                    )}
                  >
                    {tag?.slug?.current}
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
