import React from 'react'
import {Route , Routes} from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Profilepage from './Pages/ProfilePage'
import Menubar from './Components/Menubar'

import Create from './Pages/Create'
import ViewTask from './Pages/ViewTask'
import AuthContext from './Context/AuthContext'

const App = () => {
  return (
    <AuthContext>
      <div>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/TaskView/:id' element={<ViewTask/>}/>
        <Route path='/Profile' element={<Profilepage/>}/>
      </Routes>
    </div>
    </AuthContext>
  )
}

export default App