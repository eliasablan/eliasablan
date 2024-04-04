import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
        <h1 className="text-xl">404 | Page Not Found</h1>
        <p className="py-5">Could not find requested resource</p>
        <div className="block py-3">
          <Link
            href="/"
            className={buttonVariants({ variant: 'outline' })}
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  )
}
