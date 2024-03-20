import React, { useState, useEffect, useRef } from 'react';

import Sidebar from './LayoutComponents/sideBarAndHeader'
// import HomePage from './Components/homePage'
import Footer from './LayoutComponents/Footer'
import Header from './LayoutComponents/Header'
import { Outlet } from 'react-router-dom'


function Layout() {

  
  return (
    <>
   
    <div className='fixed t-0 w-full'>
        <Header/>
    </div>

    <div className="flex min-h-screen">
        <div className="w-64 mt-16  text-white fixed left-0 " >
          <Sidebar />
        </div>
        <div className=" flex-grow mt-16 p-3 lg:ml-64  overflow-y-auto">
          <Outlet />
        </div>   
    </div>
    
    <Footer/>
    
    



  {/*
    <Sidebar/> 
    <Outlet/>
    <Footer/> 
  */} 
   {/* <HomePage/> */}
   
    </>
  )
}

export default Layout