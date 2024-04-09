import React from 'react'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'

import { getProjectData } from '@/sanity/queries'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlFor } from '@/sanity/utils'
import { cn } from '@/lib/utils'

import PortableTextComponents from '@/components/PortableTextComponents'
import DynamicSanityIcon from '@/components/DynamicSanityIcon'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { badgeVariants } from '@/components/ui/badge'

export const generateMetadata = async ({ params }: ProjectProps) => {
  const project = await getProjectData(params.slug)
  const title = project?.name
  const description = project?.short_description

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
  const project = await getProjectData(params.slug)

  return (
    <main className="relative mx-auto w-full max-w-2xl">
      <article className="px-6 pb-28 pt-8 md:mt-6 md:pt-16">
        <div className="mx-auto mb-10 block max-w-sm text-center">
          {project?.logo && (
            <Image
              className={cn(
                'mx-auto h-10 w-auto drop-shadow-xl',
                project.dark_logo && 'dark:hidden'
              )}
              width={
                project.logo.asset
                  ? getImageDimensions(project.logo.asset).width
                  : undefined
              }
              height={
                project.logo.asset
                  ? getImageDimensions(project.logo.asset).height
                  : undefined
              }
              src={urlFor(project.logo).url()}
              alt={project.logo.alt || 'Project Logo'}
            />
          )}
          {project?.dark_logo && (
            <Image
              className="mx-auto hidden h-10 w-auto drop-shadow-xl dark:block"
              width={
                project.dark_logo.asset
                  ? getImageDimensions(project.dark_logo.asset).width
                  : undefined
              }
              height={
                project.dark_logo.asset
                  ? getImageDimensions(project.dark_logo.asset).height
                  : undefined
              }
              src={urlFor(project.dark_logo).url()}
              alt={project.dark_logo.alt || 'Project Logo'}
            />
          )}
          <h1 className="mb-4 text-3xl font-extrabold">{project?.name}</h1>
          <div className="mx-auto py-3 leading-loose">
            {project?.tech_tools &&
              project?.tech_tools.map((tool) => (
                <Badge key={tool} className="mx-2" variant="outline">
                  {tool}
                </Badge>
              ))}
          </div>
          <div className="mx-auto py-3">
            {project?.urls &&
              project?.urls.map((url) => (
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
          value={project?.description || []}
          components={PortableTextComponents}
        />

        <div className="w-full text-sm">
          {project?.tags && (
            <div className="flex flex-wrap items-baseline justify-center gap-8 py-6 md:justify-start">
              {project.tags.map((tag) => {
                return (
                  <Link
                    key={tag?.slug?.current}
                    href={`/tags/${tag?.slug?.current}`}
                    className={cn(
                      badgeVariants({ variant: 'secondary' }),
                      'border-2 hover:border-2 hover:border-dashed hover:border-primary'
                    )}
                  >
                    #{tag?.slug?.current}
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

export default project
