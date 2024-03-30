'use client'
import { NextStudio } from 'next-sanity/studio'
import sanityConfig from '../../../../../sanity.config'

const Admin = () => {
  return <NextStudio config={sanityConfig} />
}

export default Admin
