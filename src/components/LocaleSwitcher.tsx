'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '../lib/i18n-config'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const locales: { [key: string]: { flag: string; label: string } } = {
  en: { flag: '🇬🇧', label: 'English' },
  de: { flag: '🇩🇪', label: 'Deutsch' },
  cs: { flag: '🇨🇿', label: 'Čeština' },
  es: { flag: '🇪🇸', label: 'Español' },
  fr: { flag: '🇫🇷', label: 'Français' },
  it: { flag: '🇮🇹', label: 'Italiano' },
  pt: { flag: '🇵🇹', label: 'Português' },
}

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
          <NavigationMenuTrigger className="h-full px-2 py-1">
            <span className="mt-1">
              {locales[pathname.split('/')[1]].flag}
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-none" asChild>
            <ul className="flex flex-col">
              {i18n.locales.map((locale) => (
                <li key={locale}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="line-clamp-1 flex w-full gap-2 text-nowrap px-3 py-2 text-sm font-medium capitalize hover:bg-accent"
                      href={redirectPathName(locale)}
                    >
                      <span>{`${locales[locale].flag}`}</span>
                      <span>{`${locales[locale].label}`}</span>
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
