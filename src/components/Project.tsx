import { listProjects } from "../data"
import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
      <section id="projects" className="project mt-12 py-2">
        <h2 className="text-center text-xl font-bold">Projects</h2>
        <p className="text-lg font-medium/loose text-center opacity-60">Check out my latest projects</p>
        <div className="flex justify-center">
        <div className="project-box mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {listProjects.map(project => (
                <ProjectCard
                key={project.id}
                title={project.name}
                description={project.description}
                tools={project.tools}
                imageUrl={project.image}
                websiteLink={project.webLink}
                sourceCodeLink={project.codeLink}
                />
            ))}
        </div>
        </div>
      </section>
  )
}

export default Project