import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AuthContext, { DataContext } from '../Context/AuthContext'

const Tasks = () => {
    const navigate = useNavigate()
    const handletaskview = (id) => {
        navigate(`/TaskView/${id}`)
    }

    const {Tasks} = useContext(DataContext)
    let {isLoggedin , setisLoggedin} = useContext(DataContext)
    const navigation = () => {
        if(isLoggedin){
            navigate("/create")
        }else{
            navigate("/Login")
        }
    }

    
  

  return (
    <div className='p-5 flex flex-col gap-5 h-[34.5rem] w-full  overflow-y-auto relative'>
        <div onClick={navigation} className='flex items-center justify-center fixed bg-pink-300 p-4 rounded-2xl right-6 bottom-[80px]'>
        <i className="fa-solid fa-plus text-[25px]"></i>
        </div>
        {Tasks.map((elem , id)=>{
            return  <div key={id} onClick={(()=>{handletaskview(elem._id)})}  to={`/TaskView`} className={`task border-[2px] w-full py-3 px-2 rounded-2xl `}>
            <div className='flex items-center justify-between'>
                <h1 className='text-[18px]'>{elem.title}</h1>
                <svg aria-label="More options" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </div>
            <h5 className='text-[12px] mt-1 text-slate-800'>{elem.description}</h5>
            <div className='flex items-center gap-3 mt-2'>
                <button className='py-1 px-3 bg-red-300 rounded-4xl border-none text-[10.8px] '>{elem.priority}</button>
                <button className='py-1 px-3 bg-blue-400 rounded-4xl border-none text-[10.8px] '>{elem.status}</button>
            </div>
            <div className='flex items-center justify-between mt-2 mx-2'>
                <div className='flex items-center gap-3 mt-1'>
                <i class="fa-regular fa-calendar-days"></i>
                <h4 className='text-[13px]'>{elem.startDate}</h4>
               
                </div>

                <div className='flex items-center'>
                    <form action="" className='flex items-center'>
                        <h4 className='text-[12px]'>Mark as Complete</h4>
                        <input className='' type="checkbox" />
                    </form>
                </div>
            </div>
        </div>
        })}
    </div>
  )
}

export default Tasks