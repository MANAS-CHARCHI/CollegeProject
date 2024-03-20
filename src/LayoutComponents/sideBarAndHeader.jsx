import React, { useState } from 'react';

import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';


const SideBarAndHeader = () => {

  // const { open, toggleOpen } = useOpen();

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`overflow-hidden rounded-xl antialiashed min-h-screen relative lg:flex `} x-data={`{ open: ${open} }`}>
      <nav
        className={`absolute flex flex-col inset-0 duration-300 ease-in lg:transform-none lg:opacity-100 transform ${open ? 'translate-x-0' : '-translate-x-full '} lg:relative z-10 w-72 bg-[#ece7e7] text-black h-screen p-3`}
      >
        
  {/* Sidebar top section */}

        <div className=' flex justify-between  border bg-[#a59191] rounded-lg p-1'>
          <div className=' block font-bold  text-2xl sm:text-3xl p-2'>sidebar</div>
          <button
            className='p-3 focus:outline-none focus:bg-indigo-200 hover:bg-indigo-50 rounded-md lg:hidden'
            onClick={toggleOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
    
    {/* Sidebar top section */}

        <div className='mt-5 gap-3 border-1 bg-white rounded-2xl shadow-xl p-2'>

              <NavLink to='/' className={({isActive}) =>`mt-1 group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>


                  <h2 className='font-medium font-sans  '>Home Page</h2>
              </NavLink>
          
          
              <NavLink to='/mainpage' className={({isActive}) =>`group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"} duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>

                <h2 className='font-medium font-sans'>Main Page</h2>
                

              </NavLink>
         
              <NavLink to='/analytics' className={({isActive}) =>`group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"} duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>

                    <h2 className='font-medium font-sans   '>Analytics</h2>
              </NavLink>
         
              <NavLink to='/aboutus' className={({isActive}) =>`group relative flex items-center gap-2 mb-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>

                  <h2 className='font-medium font-sans  '>About us</h2>
              </NavLink>
          
              <NavLink to='/setting' className={({isActive}) =>`group relative flex items-center gap-2 mb-1 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                </svg>

                <h2 className='font-medium font-sans  '>Settings</h2>
              </NavLink>
      </div>
    {/* Notification bar :(responsive)  */}

        
        <div className='mt-3 gap-3 border-1 bg-white rounded-lg shadow-xl p-2'>

        <NavLink to='/updateReceive' className={({isActive}) =>`group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

            <h2 className='font-medium font-sans  '>Receive updates</h2>
        </NavLink>

    <NavLink to='/feedbackUs' className={({isActive}) =>`group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
    </svg>



      <h2 className='font-medium font-sans   '>Feedback</h2>
    </NavLink>

    <NavLink to='/contactUs' className={({isActive}) =>`group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>



      <h2 className='font-medium font-sans   '>Contact Us</h2>
    </NavLink>
    </div>
    {/* End Notification bar :(responsive)  */}

    {/* Login Signin bar */}

    <div className='mt-3 gap-3 border-1 duration-0  bg-white rounded-lg b-0 shadow-xl p-2 text-red-800'>

        <NavLink to='/logIn' className={({isActive}) =>`group relative flex items-center mb-0 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color duration-500 ease-in-out hover:bg-red-700 hover:text-white rounded-r-xl`}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>


            <h2 className='font-medium font-sans  '>Log out</h2>
        </NavLink>

    

    </div>
    {/* End Login Signin bar */}


  </nav>

  {/* Top Bar (responsive: done) */}
      <div className='relative z-0 w-full lg:flex-grow'>
        <header className='flex bg-gray-700 text-white flex-grow items-center'>
          <button
            className='p-3 focus:outline-none focus:bg-gray-600 hover:bg-gray-600 rounded-md lg:hidden'
            onClick={toggleOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className=' text-2xl flex flex-between sm:text-3xl p-3'>BeanCounter</span>
          
        </header>
        
      </div>

  {/* End Top Bar (responsive: done) */}
    
    </div>
  );
};

export default SideBarAndHeader;
