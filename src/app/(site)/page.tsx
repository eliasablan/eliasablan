import Presentation from '@/components/Presentation'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Tags from '@/components/Tags'

export default function Home() {
  return (
    <main className="relative m-auto max-w-2xl">
      <div className="grid md:grid-cols-1">
        <div className="divide-y px-5 pb-12 md:pb-0">
          <Presentation />
          <Projects />
          <Blog />
          <Tags />
        </div>
      </div>
    </main>
  )
}
