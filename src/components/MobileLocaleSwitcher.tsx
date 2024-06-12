'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ReactCountryFlag from 'react-country-flag'

import { i18n, flagsAndLabels } from '../lib/i18n-config'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DrawerClose } from '@/components/ui/drawer'

interface MobileLocaleSwitcherProps {
  align?: 'start' | 'center' | 'end'
  variant?:
    | 'default'
    | 'outline'
    | 'ghost'
    | 'link'
    | 'destructive'
    | 'secondary'
  className?: string
}

export default function MobileLocaleSwitcher({
  align = 'end',
  variant = 'outline',
  className,
}: MobileLocaleSwitcherProps) {
  const pathname = usePathname()

  const redirectPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} className={className}>
          <ReactCountryFlag
            style={{
              fontSize: '2em',
            }}
            countryCode={flagsAndLabels[pathname.split('/')[1]].flag}
            svg
          />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="justify-end"
        sideOffset={8}
        align={align}
      >
        {i18n.locales.map((locale) => (
          <DrawerClose key={locale} asChild>
            <DropdownMenuItem key={locale} asChild>
              <Link
                className="flex cursor-pointer justify-start gap-4 px-4 py-6 text-lg capitalize hover:bg-accent"
                href={redirectPathName(locale)}
              >
                <ReactCountryFlag
                  style={{
                    fontSize: '2em',
                  }}
                  countryCode={flagsAndLabels[locale].flag}
                  svg
                />
                <span>{`${flagsAndLabels[locale].label}`}</span>
              </Link>
            </DropdownMenuItem>
          </DrawerClose>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
