'use client'

import * as React from 'react'
import { Moon, Sun, Settings } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ModeToggleProps {
  align?: 'start' | 'center' | 'end'
  size?: 'default' | 'icon' | 'sm' | 'lg'
  variant?:
    | 'default'
    | 'outline'
    | 'ghost'
    | 'link'
    | 'destructive'
    | 'secondary'
  className?: string
}

export function ModeToggle({
  align = 'end',
  size = 'icon',
  variant = 'outline',
  className,
}: ModeToggleProps) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="justify-end"
        sideOffset={8}
        align={align}
      >
        <DropdownMenuItem
          className="group flex justify-start gap-4 px-6 py-8"
          onClick={() => setTheme('light')}
        >
          <Sun className="delay-250 h-5 w-5 transition-all group-hover:rotate-90" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="group flex justify-start gap-4 px-6 py-8"
          onClick={() => setTheme('dark')}
        >
          <Moon className="delay-250 h-5 w-5 transition-all group-hover:rotate-90" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="group flex justify-start gap-4 px-6 py-8"
          onClick={() => setTheme('system')}
        >
          <Settings className="delay-250 h-5 w-5 transition-all group-hover:rotate-90" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
