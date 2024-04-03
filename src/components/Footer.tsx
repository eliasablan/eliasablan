'use client'
import { motion } from 'framer-motion'
import { ModeToggle } from '@/components/ThemeToggler'

const Footer = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mx-auto hidden w-full max-w-2xl justify-center border-t-[1px] py-6 md:flex"
    >
      <ModeToggle align="center" className="rounded-full border-0" />
    </motion.div>
  )
}

export default Footer
