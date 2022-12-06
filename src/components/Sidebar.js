import { NavLink } from 'react-router-dom'


// styles & images


import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Avatar/username to be added later */}
          <p>Hello user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/"></NavLink>
              <img src={DashboardIcon} alt="dashboard icon"/>
              <span>Dashboard</span>
            </li>
            <li>
              <NavLink to="/create"></NavLink>
              <img src={AddIcon} alt="add project icon"/>
              <span>New project</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
