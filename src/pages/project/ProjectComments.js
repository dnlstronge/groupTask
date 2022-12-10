import { useState } from "react"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from '../../hooks/useAuthContext'



export default function ProjectComments() {
    const [newcomment, setNewComment] = useState('')
  return (
    <div className="project-comments">
    <h4>Project Comments</h4>
    <form className="add-comment" onSubmit={handlesubmit}>
        <label>
            <span>Add new comment:</span>
            <textarea
              required
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}>

            </textarea>
        </label>
        <button className="btn">Add comment</button>
    </form> 

    </div>
  )
}
