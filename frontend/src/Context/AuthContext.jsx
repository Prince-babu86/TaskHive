import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'

export const DataContext = createContext()

export const AuthContext = ({children}) => {
    const [isLoggedin, setisLoggedin] = useState(false)
    const [Tasks, setTasks] = useState([])
    const [userdata, setuserdata] = useState({
      name:"",
      email:""
    })

    useEffect(() => {
      let response =  axios.get("/Api")
      .then((response)=>{
        setisLoggedin(response.data)
      }).catch((err)=>{
        console.log(err.message)
      })
    }, [])

    useEffect(() => {
        let response =  axios.get("/Api/data/")
        .then((response)=>{
         setTasks(response.data.Tasks)
         setuserdata({
          name:response.data.name,
          email:response.data.email
         })
        }).catch((err)=>{
          console.log(err.message)
        })
      }, [])
    
    
  return (
  <DataContext.Provider value={{isLoggedin , setisLoggedin , Tasks , userdata , setuserdata , setTasks}}>
    {children}
  </DataContext.Provider>
  )
}

export default AuthContext