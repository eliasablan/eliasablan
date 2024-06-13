import { getDictionary } from '@/lib/dictionary'
import { Locale } from '../lib/i18n-config'
import ProjectSquare from './ProjectSquare'
import { getProjects } from '@/lib/sanity/queries'

interface ProjectsProps {
  tag?: string
  lang: Locale
}

const Projects = async ({ tag, lang }: ProjectsProps) => {
  const projects = await getProjects({ tag, lang })
  const dictionary = await getDictionary(lang)

  return (
    <div className="py-8 md:pt-12">
      <h2 className="text-xl font-medium">{dictionary.projects.title}</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {projects && projects.length > 0 ? (
          projects.map((project) => {
            return (
              <ProjectSquare
                key={project._id}
                project={project}
                lang={lang}
              />
            )
          })
        ) : (
          <h1>{dictionary.projects.noProjects}</h1>
        )}
      </div>
    </div>
  )
}

export default Projects
