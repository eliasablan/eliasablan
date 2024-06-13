import PostItem from './PostItem'
import { getPosts } from '@/lib/sanity/queries'
import { Locale } from '../lib/i18n-config'
import { getDictionary } from '@/lib/dictionary'

interface PostsProps {
  tag?: string
  lang: Locale
}

const Blog = async ({ tag, lang }: PostsProps) => {
  const posts = await getPosts({ tag, lang })
  const dictionary = await getDictionary(lang)

  return (
    <div className="py-8 md:pt-12">
      <div className="flex items-center pb-3 text-xl font-medium">
        <h2 className="inline align-middle">{dictionary.blog.title}</h2>
      </div>
      <div className="w-full text-sm">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <PostItem key={post._id} post={post} lang={lang} />
          ))
        ) : (
          <h1>{dictionary.blog.noPosts}</h1>
        )}
      </div>
    </div>
  )
}

export default Blog
