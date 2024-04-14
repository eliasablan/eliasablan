import ProjectSquare from './ProjectSquare'
import { getProjects } from '@/sanity/queries'

interface ProjectsProps {
  tag?: string
}

const Projects = async ({ tag }: ProjectsProps) => {
  const projects = await getProjects(tag)

  return (
    <div className="py-8 md:pt-12">
      <h2 className="text-xl font-medium">Projects</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {projects && projects.length > 0 ? (
          projects.map((project) => {
            console.log({ project })
            return <ProjectSquare key={project._id} project={project} />
          })
        ) : (
          <h1>No projects right now</h1>
        )}
      </div>
    </div>
  )
}

export default Projects
