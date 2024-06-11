import React from 'react'
import { PortableText } from '@portabletext/react'
import { HomePortableTextComponents } from '@/components/PortableTextComponents'
import { getHome } from '@/sanity/queries'
import { Locale } from '../../i18n-config'

const Presentation = async ({ lang }: { lang: Locale }) => {
  console.log({ lang })
  const data = await getHome()
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
