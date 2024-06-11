import PostItem from './PostItem'
import { getPosts, getPostsByTag } from '@/sanity/queries'
import { Locale } from '../lib/i18n-config'

interface PostsProps {
  tag?: string | null
  lang: Locale
}

const Blog = async ({ tag = null, lang }: PostsProps) => {
  let posts = null
  if (tag) {
    posts = await getPostsByTag(tag)
  } else {
    posts = await getPosts()
  }

  return (
    <div className="py-8 md:pt-12">
      <div className="flex items-center pb-3 text-xl font-medium">
        <h2 className="inline align-middle">Blog</h2>
      </div>
      <div className="w-full text-sm">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <PostItem key={post._id} post={post} lang={lang} />
          ))
        ) : (
          <h1>No posts right now</h1>
        )}
      </div>
    </div>
  )
}

export default Blog
