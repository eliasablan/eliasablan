import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import { urlFor } from '@/lib/sanity/utils'
import { getImageDimensions } from '@sanity/asset-utils'
import { Locale } from '../lib/i18n-config'
import { GetProjectsQueryResult } from '../../sanity.types'

interface ProjectSquareProps {
  lang?: Locale
  project: GetProjectsQueryResult[0]
}

const ProjectSquare = ({ lang, project }: ProjectSquareProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={`/${lang}/projects/${project.slug}`}>
          <Card
            className={cn(
              'bg-radius flex min-w-[120px] flex-col rounded-lg border px-4 py-2 hover:bg-accent'
            )}
          >
            <div className="py-3">
              {project.logo && (
                <Image
                  className={cn(
                    'h-10 w-auto drop-shadow-xl',
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
              {project.dark_logo && (
                <Image
                  className="hidden h-10 w-auto drop-shadow-xl dark:block"
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
            </div>
            <div className="pb-1">
              <div className="mt-1 flex items-center gap-[6px]">
                <h3 className="line-clamp-1 text-lg font-semibold">
                  {project.name}
                </h3>
              </div>
              <p className="line-clamp-3 text-sm opacity-70">
                {project.short_description}
              </p>
            </div>
          </Card>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="bg-secondary text-secondary-foreground">
        <h3 className="mb-2 text-center text-lg font-semibold">
          {project.name}
        </h3>
        <p className="mb-4 text-balance text-center text-sm">
          {project.short_description}
        </p>
        <div className="text-balance text-center">
          {project.tags?.map((tag: any) => (
            <Badge key={tag._id} className="mr-1 mt-1">
              {tag.name}
            </Badge>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default ProjectSquare
