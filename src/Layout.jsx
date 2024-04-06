import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './LayoutComponents/sideBarAndHeader'
// import HomePage from './Components/homePage'
import Footer from './LayoutComponents/Footer'
import Topbar from './LayoutComponents/Topbar';
import { Outlet } from 'react-router-dom'


function Layout() {

  
  return (
    <>
    <div className='bg-[#dfddd9]'>
    <Topbar/>
   <div className="flex min-h-screen ">
        <div className=" mt-0 text-white fixed" > 
          <Sidebar />
        </div>
        <div className=" flex-grow mt-16 p-3 lg:ml-72  overflow-y-auto">
          <Outlet />
        </div>   
    </div>
    
    <Footer/>
    </div>
    </>
  )
}

export default Layout