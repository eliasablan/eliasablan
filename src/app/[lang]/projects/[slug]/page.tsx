import React from 'react'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'

import { getProjectData, getProjects } from '@/lib/sanity/queries'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlFor } from '@/lib/sanity/utils'
import { cn } from '@/lib/utils'

import PortableTextComponents from '@/components/PortableTextComponents'
import DynamicSanityIcon from '@/components/DynamicSanityIcon'
import { badgeVariants } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Locale } from '../../../../lib/i18n-config'

export const generateMetadata = async ({ params }: ProjectProps) => {
  const project = await getProjectData(params.slug)
  const title = project?.name
  const description = project?.short_description
  const og_image = project?.og_image
    ? urlFor(project?.og_image).url()
    : undefined

  return {
    title,
    description,
    openGraph: {
      images: [og_image],
    },
  }
}

interface ProjectProps {
  params: {
    lang: Locale
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.map((project) => ({
    slug: project?.slug?.current,
  }))
}

const project = async ({ params }: ProjectProps) => {
  const { slug, lang } = params
  const project = await getProjectData(slug)

  return (
    <main className="relative mx-auto w-full max-w-2xl">
      <article className="px-6 pb-28 pt-8 md:mt-6 md:pt-16">
        <div className="mx-auto mb-10 block max-w-sm text-center">
          {project?.logo && (
            <Image
              className={cn(
                'mx-auto h-12 w-auto drop-shadow-xl',
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
              className="mx-auto hidden h-12 w-auto drop-shadow-xl dark:block"
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
          <h1 className="my-4 text-center text-3xl font-extrabold">
            {project?.name}
          </h1>
          <div className="mx-auto py-3 leading-loose">
            {project?.tags && (
              <div className="flex flex-wrap items-baseline justify-center gap-4 py-6">
                {project.tags.map((tag) => {
                  return (
                    <Link
                      key={tag._id}
                      href={`/${lang}/tags/${tag.slug?.current}`}
                      className={cn(
                        badgeVariants({ variant: 'outline' }),
                        'border-2 hover:border-2 hover:border-dashed hover:border-primary'
                      )}
                    >
                      {tag.name}
                    </Link>
                  )
                })}
              </div>
            )}
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
      </article>
    </main>
  )
}

export default project
