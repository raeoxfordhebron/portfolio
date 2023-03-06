import projects from "../json/projects.json"
import { ProjectsContainer, ProjectCard, ProjectLink, ProjectImage, ProjectLinkContainer } from "../styled-components/Projects"

export default function Projects (props) {
 return   <ProjectsContainer>
        {
            projects.map((project) => {
               return <ProjectCard key={project.name}>
                    <h3>{project.name}</h3>
                    <ProjectImage src={project.image}/>
                    <p>{project.description}</p>
                    <ProjectLinkContainer>
                    <ProjectLink href={project.github} target="_blank" rel="noreferrer noopener">Github</ProjectLink>
                    <ProjectLink href={project.live} target="_blank" rel="noreferrer noopener">Live Site</ProjectLink>
                    </ProjectLinkContainer>
                </ProjectCard>
            })
        }
    </ProjectsContainer>
}