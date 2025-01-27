import React, { useContext } from 'react'
import "./Menubar.css"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext, { DataContext } from '../Context/AuthContext'
const Menubar = () => {

let {isLoggedin , setisLoggedin} = useContext(DataContext)

const navigate = useNavigate()

const navigation = () =>{
  if(isLoggedin){
    navigate("/Profile")
  }else{
    navigate("/Login")
  }
}
 
  return (
    <div>
        <menu>
            <div className="m-item">
            <i className="fa-solid fa-boxes-stacked"></i>
            </div>

            <Link to={`/`} id='m-item-task' className="m-item bg-black text-white py-4 px-6 gap-3 rounded-4xl">
            <i className="fa-solid fa-check text-white"></i>
            <h4>Task</h4>
            </Link>

            <div className="m-item">
            <i className="fa-solid fa-chart-simple"></i>
            </div>

            <div onClick={navigation} className="m-item">
           <img className='h-[35px] w-[35px] rounded-full object-cover' src="https://www.w3schools.com/w3images/avatar2.png " alt="" />
            </div>

        </menu>
    </div>
  )
}

export default Menubar