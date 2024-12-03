import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/utils'
import { getImageDimensions } from '@sanity/asset-utils'
import { ImageAsset } from '@sanity/types'
import { PortableTextReactComponents } from 'next-sanity'

const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: ImageAsset }) => (
      <Image
        className="mb-6 rounded-lg"
        alt={value.alt as string}
        src={urlFor(value).width(700).url()}
        width={getImageDimensions(value).width}
        height={getImageDimensions(value).height}
      />
    ),
    youtube: ({
      value,
    }: {
      value: { url: string; title?: string; caption?: string }
    }) => {
      // Extract video ID from YouTube URL
      const getYouTubeID = (url: string) => {
        const regExp =
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url.match(regExp)
        return match && match[2].length === 11 ? match[2] : null
      }

      const videoId = getYouTubeID(value.url)

      if (!videoId) return null

      return (
        <div className="my-6">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={value.title || 'YouTube Video'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {value.caption && (
            <p className="mt-2 text-center text-sm text-gray-600">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="mb-6 text-4xl">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 text-2xl">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-2 text-xl">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mb-6 text-4xl">{children}</h4>
    ),
    h5: ({ children }: { children?: React.ReactNode }) => (
      <h5 className="mb-4 text-2xl">{children}</h5>
    ),
    h6: ({ children }: { children?: React.ReactNode }) => (
      <h6 className="mb-2 text-xl">{children}</h6>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-2 border-l-2 border-l-primary pl-2">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-6 list-inside list-disc opacity-80">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-6 list-inside list-decimal opacity-80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-6">{children}</li>
    ),
    checkmarks: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-6">✅{children}</li>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode
      value?: { href: string }
    }) => {
      const rel = !value?.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <a
          href={value?.href}
          rel={rel}
          className="underline underline-offset-4 hover:font-semibold hover:decoration-dashed"
        >
          {children}
        </a>
      )
    },
  },
}

export const HomePortableTextComponents: Partial<PortableTextReactComponents> =
  {
    types: {
      image: ({ value }: { value: ImageAsset }) => (
        <Image
          className="mb-6 rounded-lg"
          alt={value.alt as string}
          src={urlFor(value).width(700).url()}
          width={getImageDimensions(value).width}
          height={getImageDimensions(value).height}
        />
      ),
    },
    block: {
      h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="mb-6 text-4xl">{children}</h1>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="mb-4 text-2xl">{children}</h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="mb-2 text-xl">{children}</h3>
      ),
      h4: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="mb-6 text-4xl">{children}</h4>
      ),
      h5: ({ children }: { children?: React.ReactNode }) => (
        <h5 className="mb-4 text-2xl">{children}</h5>
      ),
      h6: ({ children }: { children?: React.ReactNode }) => (
        <h6 className="mb-2 text-xl">{children}</h6>
      ),
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="my-2 border-l-2 border-l-primary pl-2">
          {children}
        </blockquote>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="mb-4">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="mb-6 list-inside list-disc opacity-80">
          {children}
        </ul>
      ),
      number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="mb-6 list-inside list-decimal opacity-80">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <li className="leading-6">{children}</li>
      ),
      checkmarks: ({ children }: { children?: React.ReactNode }) => (
        <li className="leading-6">✅{children}</li>
      ),
    },
    marks: {
      link: ({
        children,
        value,
      }: {
        children?: React.ReactNode
        value?: { href: string }
      }) => {
        const rel = !value?.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined
        return (
          <a
            href={value?.href}
            rel={rel}
            className="underline underline-offset-4 hover:font-semibold hover:decoration-dashed"
          >
            {children}
          </a>
        )
      },
    },
  }

export default PortableTextComponents
