import { getTags } from '@/lib/sanity/queries'
import Link from 'next/link'
import { badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Locale } from '../lib/i18n-config'
import { getDictionary } from '@/lib/dictionary'

const Tags = async ({ lang }: { lang: Locale }) => {
  const tags = await getTags()
  const dictionary = await getDictionary(lang)

  return (
    <div className="py-8 md:pt-12">
      <div className="flex items-center pb-3 text-xl font-medium">
        <h2 className="inline align-middle">{dictionary.tags.title}</h2>
      </div>
      <div className="w-full text-sm">
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap items-baseline justify-center gap-8 py-6 md:justify-start">
            {tags.map((tag) => (
              <Link
                key={tag?.slug?.current}
                href={`/${lang}/tags/${tag?.slug?.current}`}
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
          <h1>{dictionary.tags.noTags}</h1>
        )}
      </div>
    </div>
  )
}

export default Tags
