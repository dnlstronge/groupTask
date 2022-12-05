//imports

import { Link } from 'react-router-dom'


// styles + assets
import Temple from '../assets/temple.svg'
import './Navbar.css'


export default function Navbar() {
  return (
    <div>
        <ul>
            <li className="logo"></li>
            <img src={Temple} alt="logo"/>
            <span>groupTask</span>

            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><button className="btn">Logout</button></li>
        </ul>
    </div>
  )
}
