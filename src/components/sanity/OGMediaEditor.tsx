import React from 'react'
import { MediaEditor } from '@catherineriver/sanity-plugin-generate-ogimage'
import OGImageEditor from '@/components/sanity/OGImageEditor'

export function OGMediaEditor(props: any) {
  return (
    <MediaEditor {...props} darkMode={false} layouts={[OGImageEditor]} />
  )
}

export function OGMediaIcon() {
  return <div>🎨</div>
}
