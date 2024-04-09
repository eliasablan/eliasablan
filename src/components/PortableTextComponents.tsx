import Image from 'next/image'
import { urlFor } from '@/sanity/utils'
import { getImageDimensions } from '@sanity/asset-utils'
import { ImageAsset } from '@sanity/types'
import { PortableTextReactComponents } from 'next-sanity'

const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: ImageAsset }) => (
      <Image
        className="mb-8 rounded-lg"
        alt={value.alt as string}
        src={urlFor(value).width(700).url()}
        width={getImageDimensions(value).width}
        height={getImageDimensions(value).height}
      />
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="mb-10 text-6xl">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-10 text-5xl">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-9 text-4xl">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mb-9 text-3xl">{children}</h4>
    ),
    h5: ({ children }: { children?: React.ReactNode }) => (
      <h5 className="mb-8 text-2xl">{children}</h5>
    ),
    h6: ({ children }: { children?: React.ReactNode }) => (
      <h6 className="mb-8 text-xl">{children}</h6>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-3 border-l-2 border-l-primary pl-2">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-8">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-8 list-inside list-disc">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-8 list-inside list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="mb-6">{children}</li>
    ),
    checkmarks: ({ children }: { children?: React.ReactNode }) => (
      <li className="mb-6">✅{children}</li>
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
          className="underline underline-offset-4 hover:font-semibold"
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
          className="mb-8 rounded-lg"
          alt={value.alt as string}
          src={urlFor(value).width(700).url()}
          width={getImageDimensions(value).width}
          height={getImageDimensions(value).height}
        />
      ),
    },
    block: {
      h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="mb-8 text-5xl">{children}</h1>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="mb-8 text-4xl">{children}</h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="mb-7 text-3xl">{children}</h3>
      ),
      h4: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="mb-7 text-2xl">{children}</h4>
      ),
      h5: ({ children }: { children?: React.ReactNode }) => (
        <h5 className="mb-6 text-xl">{children}</h5>
      ),
      h6: ({ children }: { children?: React.ReactNode }) => (
        <h6 className="mb-6 text-lg">{children}</h6>
      ),
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="my-3 border-l-2 border-l-primary pl-2">
          {children}
        </blockquote>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="mb-8">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="mb-8 list-inside list-disc opacity-80">
          {children}
        </ul>
      ),
      number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="mb-8 list-inside list-decimal opacity-80">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <li className="leading-8">{children}</li>
      ),
      checkmarks: ({ children }: { children?: React.ReactNode }) => (
        <li className="leading-8">✅{children}</li>
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
            className="underline underline-offset-4 hover:font-semibold"
          >
            {children}
          </a>
        )
      },
    },
  }

export default PortableTextComponents
