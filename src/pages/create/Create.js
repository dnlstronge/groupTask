import { useState } from 'react'


// styles

import styles from './Create.css'


export default function Create() {
  const [name, setName ] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory ] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, details, dueDate)
  }

  return (
    <div className='create-form'>
    <h2 className="page-title">Create a new project</h2>
    <form onSubmit={handleSubmit}>
     <label>
      <span>Project Name:</span>
      <input 
        required
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
     </label>
     <label>
      <span>Details:</span>
      <textarea 
        required
        type="text"
        onChange={(e) => setDetails(e.target.value)}
        value={details}
      ></textarea>
     </label>
     <label>
      <span>Set due date:</span>
      <input 
        required
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
        value={dueDate}
      />
      </label>
      <label>
        <span>Project category:</span>
        {/* Category selection here */}
      </label>
      <label>
        <span>Assign to:</span>
        {/* user selection here */}
      </label>
      
      <button className="btn">Add project</button>
    </form>
    </div>
  )
}
