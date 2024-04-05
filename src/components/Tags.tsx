import { getTags } from '@/sanity/queries'
import Link from 'next/link'
import { badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const Tags = async () => {
  const tags = await getTags()

  return (
    <div className="py-8 md:pt-12">
      <div className="flex items-center pb-3 text-xl font-medium">
        <h2 className="inline align-middle">Tags</h2>
      </div>
      <div className="w-full text-sm">
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap items-baseline justify-center gap-8 py-6 md:justify-start">
            {tags.map((tag) => (
              <Link
                key={tag?.slug?.current}
                href={`/tags/${tag?.slug?.current}`}
                className={cn(
                  badgeVariants({ variant: 'secondary' }),
                  'border-2 hover:border-2 hover:border-dashed hover:border-primary'
                )}
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        ) : (
          <h1>No posts right now</h1>
        )}
      </div>
    </div>
  )
}

export default Tags
