import Link from 'next/link'
import React from 'react'
import { DateJSX } from './Date'
import { Locale } from '../lib/i18n-config'
import { GetPostsQueryResult } from '../../sanity.types'

interface PostItemProps {
  post: GetPostsQueryResult[0]
  lang: Locale
}

const PostItem = ({ post, lang }: PostItemProps) => {
  return (
    <div>
      <Link href={`/${lang}/blog/${post.slug}`} prefetch>
        <article className="flex w-full justify-between border-b border-dashed py-3 font-medium hover:border-foreground md:py-[8px]">
          <h2 className="line-clamp-1 w-full">
            <span>{post.title}</span>
          </h2>
          <div className="min-w-24 text-right font-normal opacity-40">
            <DateJSX dateString={post._createdAt} />
          </div>
        </article>
      </Link>
    </div>
  )
}

export default PostItem
