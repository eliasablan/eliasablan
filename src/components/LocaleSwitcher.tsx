'use client'

import React from 'react'
import Link from 'next/link'
import ReactCountryFlag from 'react-country-flag'
import { usePathname } from 'next/navigation'

import { i18n, flagsAndLabels } from '../lib/i18n-config'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function LocaleSwitcher() {
  const pathname = usePathname()

  const redirectPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="item-center flex h-full px-2 py-1">
            <ReactCountryFlag
              className="my-1"
              countryCode={flagsAndLabels[i18n.defaultLocale].flag}
              svg
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-none" asChild>
            <ul className="flex flex-col">
              {i18n.locales.map((locale) => (
                <li key={locale}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex w-32 items-center gap-2 p-4 text-sm capitalize hover:bg-accent"
                      href={redirectPathName(locale)}
                    >
                      <ReactCountryFlag
                        countryCode={flagsAndLabels[locale].flag}
                        svg
                      />
                      <span>{`${flagsAndLabels[locale].label}`}</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
