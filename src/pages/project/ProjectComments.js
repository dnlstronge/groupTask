import { useState } from "react"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from '../../hooks/useAuthContext'



export default function ProjectComments() {
    const [newcomment, setNewComment] = useState('')
  return (
    <div className="project-comments">
    <h4>Project Comments</h4>
    <form className="add-comments">
        <label>
            <span>Add new comment:</span>
            <textarea
              required
              onChange{}>

            </textarea>
        </label>
    </form> 

    </div>
  )
}
