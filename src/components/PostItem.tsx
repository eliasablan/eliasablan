import Link from 'next/link'
import React from 'react'
import { DateJSX } from './Date'
import { Post } from '../../sanity.types'

interface PostItemProps {
  post: Post
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div>
      <Link href={`/blog/${post.slug}`} prefetch>
        <article className="hover:border-foreground flex w-full justify-between border-b border-dashed py-3 font-medium md:py-[8px]">
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