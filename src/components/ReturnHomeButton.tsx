'use client'
import React from 'react'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export const ReturnHomeButton = () => {
  const pathname = usePathname()
  return (
    <Link
      href={`/${pathname.slice(1, 3)}`}
      className={buttonVariants({ variant: 'outline' })}
    >
      Return Home
    </Link>
  )
}
