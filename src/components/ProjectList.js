


// styles
import './ProjectList.css'



export default function ProjectList({ projects }) {
  return (
    <div>
        {projects.length === 0 && <p>There are no current projects</p>}
        {projects.map(project => (
            <div key={project.id}>{project.name}</div>
        ))}
    </div>
  )
}
