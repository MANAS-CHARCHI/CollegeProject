import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'

const SideBarAndHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`antialiashed min-h-screen relative lg:flex`} x-data={`{ open: ${open} }`}>
      <nav
        className={`absolute inset-0 duration-300 ease-in lg:transform-none lg:opacity-100 transform ${open ? 'translate-x-0' : '-translate-x-full '} lg:relative z-10 w-72 bg-[#ece7e7] text-black h-screen p-3`}
      >
        <div className='flex justify-between'>
          <div className='font-bold text-2xl sm:text-3xl p-2'>sidebar</div>
          <button
            className='p-2 focus:outline-none focus:bg-indigo-300 hover:bg-indigo-200 rounded-md lg:hidden'
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
        <div className='mt-10 gap-3 border-1 bg-white rounded-lg shadow-md p-2'>
          
              <NavLink to='/' className={({isActive}) =>`mt-1 group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-inherit"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg>


                  <h2 className='font-medium font-sans  '>Home Page</h2>
              </NavLink>
          
          
              <NavLink to='/mainpage' className={({isActive}) =>`group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                  </svg>
                  <h2 className='font-medium font-sans  '>Main Page</h2>
              </NavLink>
         
              <NavLink to='/analytics' className={({isActive}) =>`group relative flex items-center mb-2 gap-2 px-4 py-2.5  font-semibold text-bodydark1 transition-color ${isActive ? "bg-[#323131] text-white rounded-r-xl" : "text-bodydark1"}duration-500 ease-in-out hover:bg-[#323131] hover:text-gray-100 rounded-r-xl`}>

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
      </nav>
      <div className='relative z-0 lg:flex-grow'>
        <header className='flex bg-gray-700 text-white items-center'>
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
          <span className='block text-2xl sm:text-3xl p-3'>BeanCounter</span>
        </header>
      </div>
    </div>
  );
};

export default SideBarAndHeader;
