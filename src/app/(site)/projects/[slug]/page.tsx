import React from 'react'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'

import { getProjectData } from '@/sanity/queries'
import { urlFor } from '@/sanity/utils'
import { cn } from '@/lib/utils'

import PortableTextComponents from '@/components/PortableTextComponents'
import DynamicSanityIcon from '@/components/DynamicSanityIcon'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Project } from '../../../../../sanity.types'

export const generateMetadata = async ({ params }: ProjectProps) => {
  const data = await getProjectData(params.slug)
  const title = data.name
  const description = data.short_description

  return {
    title,
    description,
    openGraph: {
      images: [],
    },
  }
}

interface ProjectProps {
  params: {
    slug: string
  }
}

const project = async ({ params }: ProjectProps) => {
  const data: Project = await getProjectData(params.slug)

  return (
    <main className="relative mx-auto w-full max-w-2xl">
      <article className="px-6 pb-28 pt-8 md:mt-6 md:pt-16">
        <div className="mx-auto mb-10 block max-w-sm text-center">
          <Image
            className="mx-auto mb-4 drop-shadow-xl"
            width={60}
            height={60}
            src={data.logo ? urlFor(data.logo).url() : ''}
            alt={data.logo?.alt ?? ''}
          />
          <h1 className="mb-4 text-3xl font-extrabold">{data.name}</h1>
          <div className="mx-auto py-3 leading-loose">
            {data.tech_tools &&
              data.tech_tools.map((tool: string) => (
                <Badge key={tool} className="mx-2" variant="outline">
                  {tool}
                </Badge>
              ))}
          </div>
          <div className="mx-auto py-3">
            {data.urls &&
              data.urls.map((url) => (
                <Link
                  key={url._key}
                  className={cn(
                    buttonVariants({ variant: 'secondary', size: 'lg' }),
                    'my-1 w-full'
                  )}
                  href={url.url as string}
                  target="_blank"
                >
                  {url.icon && (
                    <DynamicSanityIcon
                      icon={url.icon}
                      className="mr-2 h-5 w-5"
                    />
                  )}
                  {url.text}
                </Link>
              ))}
          </div>
        </div>
        <PortableText
          value={data.description || []}
          components={PortableTextComponents}
        />
      </article>
    </main>
  )
}

export default project
