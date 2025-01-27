import React, { useState } from 'react'
import "../Stylesheets/Register.css"
import { Link , useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
     const [form, setform] = useState({
            email:"",
            password:"",
        })
    const navigate = useNavigate()
        const handleOnchange = (event) => {
            let {name , value} = event.target
            setform({...form ,[name]:value})
        }
    
        const handleOnSubmit = async (e) =>{                     
            e.preventDefault()
          if(form.email.length > 5 && form.password.length > 5){
           let response = await axios.post('/user/Login/' , form)
           .then((response)=>{
           console.log(response.data)
           navigate("/")
           }).catch((err)=>{
           navigate("/Login")
            console.log(err.message)
           })
            setform({
                email:"",
                password:""
            })
          
          }
        }
    
  return (
   <div className='h-[100vh] w-full  p-4'>
           <i className="fa-solid fa-arrow-left absolute text-[25px] top-[2.5%] left-[5%]"></i>
           <div className='create-ac-box mt-8   flex items-start flex-col'>
               <h4 className='text-[34px] font-semibold'>Login your </h4>
               <h4 className='text-[34px] font-semibold'>Account</h4>
           </div>
           <div className='mt-10'>
               <form onSubmit={handleOnSubmit} action="" className='form flex items-start flex-col'>
               
                   <div className="item">
                   <i className="fa-regular fa-envelope"></i>
                       <input minLength={6} value={form.email} onChange={handleOnchange} type="text" name='email' placeholder='Email' />
                   </div>
   
                   <div className="item">
                   <i className="fa-solid fa-lock"></i>
                       <input minLength={6} value={form.password} onChange={handleOnchange} type="password" name='password' placeholder='Password' />
                       <i className="fa-regular fa-eye absolute right-7"></i>
                   </div>
                   <button>Login</button>
                   <h4 className='text-[14px] mx-auto text-[#333] font-semibold'>Not have a account ? <Link to={`/Register`} className='text-blue-800'>Register</Link></h4>
               </form>
           </div>
       </div>
  )
}

export default Login