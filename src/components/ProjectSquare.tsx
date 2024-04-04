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

import { urlFor } from '@/sanity/utils'
import { getImageDimensions } from '@sanity/asset-utils'

import { Project } from '../../sanity.types'

interface ProjectSquareProps {
  project: Project
}

const ProjectSquare = ({ project }: ProjectSquareProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={`/projects/${project.slug?.current}`}>
          <Card
            className={cn(
              'bg-radius hover:bg-accent flex min-w-[120px] flex-col rounded-lg border px-4 py-2'
            )}
          >
            <div className="py-3">
              {project.logo && (
                <Image
                  className="h-10 w-auto drop-shadow-xl"
                  width={
                    project.logo?.asset
                      ? getImageDimensions(project.logo.asset).width
                      : undefined
                  }
                  height={
                    project.logo?.asset
                      ? getImageDimensions(project.logo.asset).height
                      : undefined
                  }
                  src={urlFor(project.logo).url()}
                  alt={project.logo?.alt || 'Project Logo'}
                />
              )}
            </div>
            <div className="pb-1">
              <div className="mt-1 flex items-center gap-[6px]">
                <h3 className="line-clamp-1 text-base font-medium">
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
      <HoverCardContent>
        <h3 className="mb-2 text-base font-medium">{project.name}</h3>
        <p className="mb-2 font-mono text-xs font-semibold">
          <div
            className={cn(
              'mr-2 inline-block h-[8px] w-[8px] rounded-full',
              project.status === 'development' && 'bg-blue-500',
              project.status === 'completed' && 'bg-yellow-500',
              project.status === 'deployed' && 'bg-green-500'
            )}
          ></div>
          {project.status &&
            project.status.charAt(0).toUpperCase() +
              project.status.slice(1)}
        </p>
        <div className="mb-2">
          {project.tech_tools?.map((tool, index) => (
            <Badge key={index} variant="secondary" className="mr-0.5">
              {tool}
            </Badge>
          ))}
        </div>
        <p className="text-sm">{project.short_description}</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export default ProjectSquare
