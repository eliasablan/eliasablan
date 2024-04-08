import React from 'react'
import { getHome } from '@/sanity/queries'
import { PortableText } from '@portabletext/react'
import { HomePortableTextComponents } from '@/components/PortableTextComponents'

const Presentation = async () => {
  const home_data = await getHome()

  return (
    <div className="pt-8 md:pt-20">
      <PortableText
        value={home_data?.overview || []}
        components={HomePortableTextComponents}
      />
    </div>
  )
}

export default Presentation
