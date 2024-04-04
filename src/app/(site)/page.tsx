import Presentation from '@/components/Presentation'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative m-auto max-w-2xl">
      <div className="grid md:grid-cols-1">
        <div className="divide-y px-5 pb-12 md:pb-0">
          <Presentation />
          <Projects />
          <Blog />
          <Contact />
        </div>
      </div>
    </main>
  )
}
