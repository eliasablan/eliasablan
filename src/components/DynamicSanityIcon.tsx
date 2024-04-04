import * as FaIcons from 'react-icons/fa' // Font Awesome Icons
import * as SIcons from 'react-icons/si' // Simple Icons
import * as FIcons from 'react-icons/fi' // Feather Icons
import * as HIcons from 'react-icons/hi' // Hero Icons
import * as MdIcons from 'react-icons/md' // Material Design Icons

import { IconPicker } from '../../sanity.types'
import { IconType } from 'react-icons'

const renderer = ({ name, provider }: IconPicker) => {
  if (!name) return null
  if (provider == 'fa')
    return (FaIcons as { [key: string]: IconType })[name] // Font Awesome Icons
  if (provider == 'si')
    return (SIcons as { [key: string]: IconType })[name] // Simple Icons
  if (provider == 'fi')
    return (FIcons as { [key: string]: IconType })[name] // Feather Icons
  if (provider == 'hi')
    return (HIcons as { [key: string]: IconType })[name] // Hero Icons
  if (provider == 'mdi')
    return (MdIcons as { [key: string]: IconType })[name] // Material Design Icons
}

const DynamicSanityIcon = ({
  icon,
  className,
}: {
  icon: IconPicker
  className: string
}) => {
  if (!icon) return null

  let Icon = renderer(icon)
  if (!Icon) return null
  return <Icon className={className} />
}

export default DynamicSanityIcon
