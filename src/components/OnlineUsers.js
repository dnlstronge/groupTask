import { useCollection } from '../hooks/useCollection'

//comps

import Avatar from './Avatar'

//styles
import './OnlineUsers.css'



export default function OnlineUsers() {
  const { error, documents } = useCollection('users')

  return (
    <div className="user-list">
        <h2>All Users</h2>
        {error && <div className="error">{error}</div>}
        {documents && documents.map( user => (
          <div key={user.id}>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL}/>
          </div>
        ))}
    </div>
  )
}
