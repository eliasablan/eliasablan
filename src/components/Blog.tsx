import PostItem from './PostItem'
import { getPosts } from '@/sanity/queries'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const Blog = async () => {
  const posts = await getPosts()

  return (
    <div className="py-8 md:pt-12">
      <div className="flex items-center pb-3 text-xl font-medium">
        <h2 className="inline align-middle">Blog</h2>
        <Link
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'ml-3 h-6 rounded-xl px-2'
          )}
          href="/tags"
        >
          <span>tags</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1 h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      <div className="w-full text-sm">
        {posts && posts.length > 0 ? (
          posts.map((post) => <PostItem key={post._id} post={post} />)
        ) : (
          <h1>No posts right now</h1>
        )}
      </div>
    </div>
  )
}

export default Blog
