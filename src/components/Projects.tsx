import { Project } from '../../sanity.types'
import ProjectSquare from './ProjectSquare'
import { getProjects, getProjectsByTag } from '@/sanity/queries'

interface ProjectsProps extends Project {
  tag?: string | null
}

const Projects = async ({ tag = null }: ProjectsProps) => {
  let projects = null
  if (tag) {
    projects = await getProjectsByTag(tag)
  } else {
    projects = await getProjects()
  }

  return (
    <div className="py-8 md:pt-12">
      <h2 className="text-xl font-medium">Projects</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <ProjectSquare key={project.slug?.current} project={project} />
          ))
        ) : (
          <h1>No projects right now</h1>
        )}
      </div>
    </div>
  )
}

export default Projects
