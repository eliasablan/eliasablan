'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ModeToggle } from '@/components/ThemeToggler'
import { cn } from '@/lib/utils'
import { Settings } from '../../sanity.types'
import DynamicSanityIcon from './DynamicSanityIcon'
import { getSettings } from '@/lib/sanity/queries'
import LocaleSwitcher from './LocaleSwitcher'
import MobileLocaleSwitcher from './MobileLocaleSwitcher'
import { Locale } from '@/lib/i18n-config'
import { useDictionary } from './dictionary-provider'

const Header = () => {
  const [items, setItems] = useState<Settings['urls']>([])
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [lang, setLang] = useState<Locale>(
    usePathname().split('/')[1] as Locale
  )
  const dictionary = useDictionary()

  useEffect(() => {
    getSettings(lang).then((result) => {
      setItems(result?.urls || [])
      setMounted(true)
    })
  }, [])
  useEffect(() => {
    getSettings(pathname.split('/')[1] as Locale).then((result) => {
      setItems(result?.urls || [])
      setMounted(true)
    })
  }, [pathname])

  useEffect(() => {
    setLang(pathname.split('/')[1] as Locale)
  }, [pathname])

  if (!mounted) return null

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed z-20 hidden w-full bg-gradient-to-b from-background via-background py-2 align-middle md:block"
      >
        {/* Desktop */}
        <div className="m-auto hidden w-full max-w-2xl items-center gap-2 px-2 md:flex">
          {/* Menu */}
          <nav className="flex gap-1 text-sm">
            <Link
              href={`/${lang ? lang : pathname.slice(1, 3)}`}
              className={cn(
                'h-auto rounded-xl px-3 py-1.5 capitalize transition-all duration-150 ease-in-out hover:bg-secondary',
                (pathname.slice(-3) === '/en' ||
                  pathname.slice(-3) === '/es') &&
                  'bg-secondary'
              )}
            >
              <span className="hidden">Go home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
                  fill="true"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
            </Link>
            {items?.map((link) => (
              <Link
                key={link._key}
                href={`/${lang ? lang : pathname.slice(1, 3)}/${link.url!}`}
                className={cn(
                  'flex w-full items-center rounded-xl px-[8px] py-[6px] capitalize transition-all duration-150 ease-in-out hover:bg-secondary md:py-[3px]',
                  pathname.slice(4) === link.url && 'bg-secondary'
                )}
              >
                <span>{link.text}</span>
              </Link>
            ))}
          </nav>

          {/* RRSS */}
          <div className="ml-auto flex gap-2">
            <Link
              className="text-lg hover:text-destructive"
              target="_blank"
              href="mailto:eliasgui32@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="224 56 128 144 32 56"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <path
                  d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <line
                  x1="110.5"
                  y1="128"
                  x2="34.5"
                  y2="197.7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="221.5"
                  y1="197.7"
                  x2="145.5"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
            </Link>
            <Link
              className="text-lg hover:text-destructive"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=584242728990&text=Hola!"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </svg>
            </Link>
            <Link
              className="text-lg hover:text-destructive"
              target="_blank"
              href="https://instagram.com/eliasablan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="128"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="16"
                ></circle>
                <rect
                  x="36"
                  y="36"
                  width="184"
                  height="184"
                  rx="48"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></rect>
                <circle cx="180" cy="76" r="12"></circle>
              </svg>
            </Link>
            <Link
              className="text-lg hover:text-destructive"
              target="_blank"
              href="https://linkedin.com/in/eliasablan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <rect
                  x="36"
                  y="36"
                  width="184"
                  height="184"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></rect>
                <line
                  x1="120"
                  y1="112"
                  x2="120"
                  y2="176"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="88"
                  y1="112"
                  x2="88"
                  y2="176"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M120,140a28,28,0,0,1,56,0v36"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <circle cx="88" cy="80" r="12"></circle>
              </svg>
            </Link>
            <Link
              className="text-lg hover:text-destructive"
              target="_blank"
              href="https://github.com/eliasablan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M84,240a23.9,23.9,0,0,0,24-24V168"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M172,240a23.9,23.9,0,0,1-24-24V168"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </Link>
          </div>
          <LocaleSwitcher />
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-center md:hidden"
      >
        <Drawer open={open} onOpenChange={setOpen} nested>
          <DrawerTrigger
            className="z-20 m-5"
            onClick={() => setOpen(true)}
            asChild
          >
            <Button size="lg" variant="secondary">
              <div className="flex h-auto items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="mr-2"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    points="48 160 128 80 208 160"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></polyline>
                </svg>
                Menu
              </div>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="p-4 pb-8">
            {/* Navigation */}
            <DrawerHeader className="mx-auto my-4 grid w-full max-w-md">
              <DrawerTitle>{dictionary.header.mobileTitle}</DrawerTitle>
            </DrawerHeader>
            <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-4 px-4">
              <DrawerClose asChild>
                <Link
                  href="/"
                  className={cn(
                    'flex w-full items-center justify-center rounded-lg border p-4 py-8 capitalize transition-all duration-150 ease-in-out hover:bg-secondary',
                    (pathname.slice(-3) === '/en' ||
                      pathname.slice(-3) === '/es') &&
                      'bg-secondary'
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
                      fill="true"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                  <span>{dictionary.header.home}</span>
                </Link>
              </DrawerClose>
              {items?.map((link) => (
                <DrawerClose key={link._key} asChild>
                  <Link
                    href={`/${lang}/${link.url!}`}
                    className={cn(
                      'flex w-full items-center justify-center rounded-lg border p-4 py-8 capitalize transition-all duration-150 ease-in-out hover:bg-secondary',
                      pathname.slice(4) === link.url && 'bg-secondary'
                    )}
                  >
                    {link.icon && (
                      <div className="mr-4 flex h-5 w-5 items-center justify-center">
                        <DynamicSanityIcon icon={link.icon} />
                      </div>
                    )}
                    <span>{link.text}</span>
                  </Link>
                </DrawerClose>
              ))}
            </div>
            {/* RRSS */}
            <DrawerFooter className="mx-auto grid w-full max-w-md grid-cols-4 gap-4 px-4">
              <Link
                className="flex w-full items-center justify-center rounded-lg border p-4 py-8 capitalize transition-all duration-150 ease-in-out hover:bg-secondary"
                target="_blank"
                href="mailto:eliasgui32@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    points="224 56 128 144 32 56"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></polyline>
                  <path
                    d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <line
                    x1="110.5"
                    y1="128"
                    x2="34.5"
                    y2="197.7"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="221.5"
                    y1="197.7"
                    x2="145.5"
                    y2="128"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                </svg>
              </Link>
              <Link
                className="flex w-full items-center justify-center rounded-lg border p-4 py-8 capitalize transition-all duration-150 ease-in-out hover:bg-secondary"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=584242728990&text=Hola!"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  />
                </svg>
              </Link>
              <Link
                className="flex w-full items-center justify-center rounded-lg border p-4 py-8 capitalize transition-all duration-150 ease-in-out hover:bg-secondary"
                target="_blank"
                href="https://linkedin.com/in/eliasablan"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <rect
                    x="36"
                    y="36"
                    width="184"
                    height="184"
                    rx="8"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></rect>
                  <line
                    x1="120"
                    y1="112"
                    x2="120"
                    y2="176"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="88"
                    y1="112"
                    x2="88"
                    y2="176"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <path
                    d="M120,140a28,28,0,0,1,56,0v36"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <circle cx="88" cy="80" r="12"></circle>
                </svg>
              </Link>
              <Link
                className="flex w-full items-center justify-center rounded-lg border p-4 py-8 capitalize transition-all duration-150 ease-in-out hover:bg-secondary"
                target="_blank"
                href="https://github.com/eliasablan"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path
                    d="M84,240a23.9,23.9,0,0,0,24-24V168"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M172,240a23.9,23.9,0,0,1-24-24V168"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                </svg>
              </Link>
              <MobileLocaleSwitcher
                align="end"
                className="col-span-2 h-20 w-full gap-8"
              />
              <ModeToggle
                align="start"
                className="col-span-2 h-20"
                size="default"
              />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </motion.div>
    </>
  )
}

export default Header
