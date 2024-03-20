import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './LayoutComponents/sideBarAndHeader'
// import HomePage from './Components/homePage'
import Footer from './LayoutComponents/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {

  
  return (
    <>
   <div className="flex min-h-screen">
        <div className="w-full mt-0  text-white fixed p-0.5 " >
          <Sidebar />
        </div>
        <div className=" flex-grow mt-16 p-3 lg:ml-64  overflow-y-auto">
          <Outlet />
        </div>   
    </div>
    
    <Footer/>
    </>
  )
}

export default Layout