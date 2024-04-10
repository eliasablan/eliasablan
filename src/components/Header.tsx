'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ModeToggle } from '@/components/ThemeToggler'
import { cn } from '@/lib/utils'
import { Settings } from '../../sanity.types'
import DynamicSanityIcon from './DynamicSanityIcon'

interface HeaderProps {
  items?: Settings['urls']
}

const Header = ({ items }: HeaderProps) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-20 flex w-full items-center justify-center bg-gradient-to-b from-background via-background"
    >
      {/* Desktop */}
      <div className="m-auto hidden w-full max-w-2xl md:flex">
        <div className="sticky top-[30px] flex w-full overflow-auto rounded-[12px] px-4 pb-2 pt-4 text-sm">
          {/* Menu */}
          <div className="my-2 flex flex-col space-y-2 px-2 text-base md:my-0 md:flex-row md:space-y-0 md:px-0 md:text-sm">
            <Link
              href="/"
              className={cn(
                'flex w-full items-center rounded-lg px-[8px] py-[6px] capitalize transition-all duration-150 ease-in-out hover:bg-secondary md:py-[3px]',
                pathname === '/' && 'bg-secondary'
              )}
            >
              <span className="hidden">Go home</span>
              <div className="flex items-center justify-center md:h-5 md:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
              </div>
            </Link>
            {items?.map((link) => (
              <div className="px-1" key={link._key}>
                <Link
                  href={link.url || '/'}
                  className={cn(
                    'flex w-full items-center rounded-lg px-[8px] py-[6px] capitalize transition-all duration-150 ease-in-out hover:bg-secondary md:py-[3px]',
                    pathname === link.url && 'bg-secondary'
                  )}
                >
                  {link.icon && (
                    <div className="flex h-5 w-5 items-center justify-center">
                      <DynamicSanityIcon icon={link.icon} />
                    </div>
                  )}
                  <span>{link.text}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* RRSS */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              className="text-lg hover:opacity-80"
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
              className="text-lg hover:opacity-80"
              target="_blank"
              href="https://twitter.com/eliasablan"
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
                  d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </Link>
            <Link
              className="text-lg hover:opacity-80"
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
              className="text-lg hover:opacity-80"
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
              className="text-lg hover:opacity-80"
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
        </div>
      </div>

      {/* Mobile */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-center md:hidden"
      >
        <Drawer open={open} onOpenChange={setOpen} nested>
          <DrawerTrigger
            className="m-5 w-full"
            onClick={() => setOpen(true)}
            asChild
          >
            <Button
              size="lg"
              className="w-full border-2 py-5"
              variant="secondary"
            >
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
          <DrawerContent className="fixed left-0 right-0 flex flex-col md:hidden">
            {/* Navigation */}
            <div className="mx-auto w-full max-w-md flex-1 p-4">
              <DrawerClose asChild>
                <Link
                  href="/"
                  className={cn(
                    'my-4 flex w-full items-center rounded-lg p-4 font-extrabold capitalize transition-all duration-150 ease-in-out hover:bg-secondary',
                    pathname === '/' && 'bg-secondary'
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
                  <span>Home</span>
                </Link>
              </DrawerClose>
              {items?.map((link) => (
                <DrawerClose key={link._key} asChild>
                  <Link
                    href={link.url || '/'}
                    className={cn(
                      'my-4 flex w-full items-center rounded-lg p-4 font-extrabold capitalize transition-all duration-150 ease-in-out hover:bg-secondary',
                      pathname === link.url && 'bg-secondary'
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
            <div className="bg-secondary p-4 text-secondary-foreground">
              <div className="mx-auto flex max-w-md justify-between px-4">
                <ModeToggle align="start" className="rounded-full" />
                <div className="flex items-center gap-4">
                  <Link
                    className="text-lg opacity-50 hover:opacity-80"
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
                    className="text-lg opacity-50 hover:opacity-80"
                    target="_blank"
                    href="https://twitter.com/eliasablan"
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
                        d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    className="text-lg opacity-50 hover:opacity-80"
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
                    className="text-lg opacity-50 hover:opacity-80"
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
                    className="text-lg opacity-50 hover:opacity-80"
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
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </motion.div>
    </motion.div>
  )
}

export default Header
