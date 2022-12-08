import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'

// styles

import styles from './Create.css'

const categories = [
  { value: 'development', label: 'Development'},
  { value: 'design', label: 'Design'},
  { value: 'sales', label: 'Sales'},
  { value: 'margeting', label: 'Marketing'},
]




export default function Create() {
  const { documents } = useCollection('users')
  const [ users, setUsers] = useState([])

  // form fields:
  const [name, setName ] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory ] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  
  // maps users from documents (useEffect)

  useEffect(() => {
    if(documents) {
      const options = documents.map(user => {
        return {value: user, label: user.displayName }
      })
      setUsers(options)
    }
  }, [documents])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, details, dueDate, category.value, assignedUsers)
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
        <Select 
          onChange={(option) => setCategory(option)}
          options={categories}
        />
      </label>
      <label>
        <span>Assign to:</span>
        <Select
          onChange={(option) => setAssignedUsers(option)} 
          options={users} 
          isMulti
          />
      </label>
      
      <button className="btn">Add project</button>
    </form>
    </div>
  )
}
