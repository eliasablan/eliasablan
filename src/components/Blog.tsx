import PostItem from './PostItem'
import { getPosts } from '@/sanity/queries'

const Blog = async () => {
  const posts = await getPosts()

  return (
    <div className="py-8 md:pt-12">
      <div className="flex items-center pb-3 text-xl font-medium">
        <h2 className="inline align-middle">Blog</h2>
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