import { ReturnHomeButton } from '@/components/ReturnHomeButton'

export default function NotFound() {
  return (
    <>
      <div
        style={{ height: '90vh' }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <h1 className="text-xl">404 | Page Not Found</h1>
        <p className="py-5">Could not find requested resource</p>
        <div className="block py-3">
          <ReturnHomeButton />
        </div>
      </div>
    </>
  )
}
