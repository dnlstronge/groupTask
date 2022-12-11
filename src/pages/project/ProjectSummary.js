import Avatar from '../../components/Avatar'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useHistory } from 'react'


export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore('projects')
  const { user } = useAuthContext()
  const history = useHistory()

  const handleClick = (e) => {
    deleteDocument(project.id)
    

  }

  return (
    <div>
        <div className="project-summary">
            <h2 className="page-title">{project.name}</h2>
            <p>Created by: {project.createdBy.displayName}</p>
            <p className="due-date">Project due by: {project.dueDate.toDate().toDateString()}</p>
            <p className="details">
            {project.details}
            </p>
            <h4>Project is assigned to:</h4>
            <div className="assigned-users">
              {project.assignedUsersList.map(user => (
                <div key={user.id}>
                <Avatar src={user.photoURL}/>
                </div>
            ))}
            </div>
        </div>
        {user.uid === project.createdBy.id && (
            <button className="btn" onClick={handleClick}>Mark as complete</button>
            )}
    </div>
  )
}
