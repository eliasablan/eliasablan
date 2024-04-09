import React from 'react'
import { PortableText } from '@portabletext/react'
import { HomePortableTextComponents } from '@/components/PortableTextComponents'
import { GetHomeQueryResult } from '../../sanity.types'

const Presentation = ({ data }: { data: GetHomeQueryResult }) => {
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
