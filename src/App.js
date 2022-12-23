import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';


// styles

import './App.css'

// pages & comps

import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers';
 
function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        {user && <Sidebar />}
        <div className="container">
          <Navbar />

          <Routes>
            <Route exact path='/'>
              {!user && <Navigate to="/login" />}
              {user && <Dashboard />}
            </Route>
            <Route path='/create'>
              {!user && <Navigate to="/login" />}
              {user && <Create />}
            </Route>
            <Route path='/projects/:id'>
              {!user && <Navigate to="/login" />}
              {user && <Project />}
            </Route>
            <Route path='/login'>
              {user && <Navigate to='/' />}
              {!user && <Login />}
            </Route>
            <Route path='/signup'>
              {user && <Navigate to='/' />}
              {!user && <Signup />}
            </Route>
          </Routes>
        </div>
        {user && <OnlineUsers />}
      </BrowserRouter>
      )}
   </div>
  );
}

export default App
