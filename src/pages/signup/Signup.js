import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.css'



export default function Signup() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ displayName, setDisplayName ] = useState('')
  const [ thumbnail, setThumbnail ] = useState(null)
  const [ thumbnailError, setThumbnailError ] = useState(null)
  const { signup, isPending, error} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)

  }


  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0] 
    console.log(selected)

    if (!selected) {
      setThumbnailError('please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('selected file must be an image')
      return
    }
    if (selected.size > 100000) {
      setThumbnailError('image file must be less than 100kb')
      return
    }
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          required 
          type="display name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input
          required 
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
