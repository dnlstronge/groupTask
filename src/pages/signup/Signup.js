import { useState } from 'react'

// styles
import styles from './Signup.css'



export default function Signup() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ displayName, setDisplayName ] = useState('')
  const [ thumbnail, setThumbnail ] = useState(null)

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0] //because returns an array of files
    console.log(selected)
  }

  return (
    <form className="auth-form">
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input
          required 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}>
        </input>
      </label>
      <label>
        <span>password:</span>
        <input
          required 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}>
        </input>
      </label>
      <label>
        <span>display name:</span>
        <input
          required 
          type="display name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}>
        </input>
      </label>
      <label>
        <span> profile thumbnail:</span>
        <input
          required 
          type="file"
          onChange={handleFileChange}>
        </input>
      </label>
      <button className="btn">Sign up</button>

    </form>
  )
}
