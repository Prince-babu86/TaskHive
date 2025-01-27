import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between p-5'>
        <div className="nav-left flex items-center gap-3">
          <img className='h-[50px] w-[50px]' src="https://i.pinimg.com/736x/9d/79/71/9d79719cabcbd3c17040071a66f07aa4.jpg" alt="" />
          <h1 className='text-[27px] font-semibold'>TaskHive</h1>
        </div>
        <div className="nav-right">

        <div className="nav-icon flex items-center gap-5">
        <div className="nav-icon flex items-center justify-center h-[45px] w-[45px]  rounded-full border-[1px] ">
        <i className="fa-solid fa-arrow-turn-up text-[20px] flex items-center justify-center"></i>
          </div>
          <div className="nav-icon flex items-center justify-center h-[45px] w-[45px]  rounded-full border-[1px] ">
          <i className="fa-solid fa-ellipsis-vertical text-[20px] flex items-center justify-center"></i>
          </div>
          </div>
         
        </div>
      </nav>
    </div>
  )
}

export default Navbar