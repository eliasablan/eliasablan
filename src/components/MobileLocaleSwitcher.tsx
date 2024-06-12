'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ReactCountryFlag from 'react-country-flag'

import { i18n } from '../lib/i18n-config'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DrawerClose } from '@/components/ui/drawer'

const locales: { [key: string]: { flag: string; label: string } } = {
  en: { flag: '🇬🇧', label: 'English' },
  de: { flag: '🇩🇪', label: 'Deutsch' },
  cs: { flag: '🇨🇿', label: 'Čeština' },
  es: { flag: '🇪🇸', label: 'Español' },
  fr: { flag: '🇫🇷', label: 'Français' },
  it: { flag: '🇮🇹', label: 'Italiano' },
  pt: { flag: '🇵🇹', label: 'Português' },
}
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
            countryCode={
              (pathname.split('/')[1] === 'en' && 'gb') ||
              (pathname.split('/')[1] === 'cs' && 'cz') ||
              pathname.split('/')[1]
            }
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
                className="grid cursor-pointer grid-cols-2 px-4 py-6 text-lg font-bold capitalize hover:bg-accent"
                href={redirectPathName(locale)}
              >
                <ReactCountryFlag
                  style={{
                    fontSize: '2em',
                  }}
                  countryCode={
                    (locale === 'en' && 'gb') ||
                    (locale === 'cs' && 'cz') ||
                    locale
                  }
                  svg
                />
                <span>{`${locales[locale].label}`}</span>
              </Link>
            </DropdownMenuItem>
          </DrawerClose>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
