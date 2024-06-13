import React from 'react'
import { PortableText } from '@portabletext/react'
import { HomePortableTextComponents } from '@/components/PortableTextComponents'
import { getHome } from '@/lib/sanity/queries'
import { Locale } from '../lib/i18n-config'

const Presentation = async ({ lang }: { lang: Locale }) => {
  console.log({ lang })
  const data = await getHome(lang)
  console.log({ data })
  return (
    <div className="pt-8 md:pt-20">
      <PortableText
        value={data?.overview || []}
        components={HomePortableTextComponents}
      />
    </div>
  )
}

export default Presentation
