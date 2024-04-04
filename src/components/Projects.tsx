import { getProjects } from '@/sanity/queries'
import ProjectSquare from './ProjectSquare'

const Projects = async () => {
  const projects = await getProjects()

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
