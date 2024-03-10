import React from 'react'
import Header from './Components/sideBarAndHeader'
import HomePage from './Components/homePage'
// import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
   <HomePage/>
    </>
  )
}

export default Layout