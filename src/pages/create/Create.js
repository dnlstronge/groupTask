import { useState } from 'react'


// styles

import styles from './Create.css'


export default function Create() {
  const [name, setName ] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory ] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])



  return (
    <div className='create-form'>
    <h2 className="page-title">Create a new project</h2>
    <form>

    </form>
    </div>
  )
}
