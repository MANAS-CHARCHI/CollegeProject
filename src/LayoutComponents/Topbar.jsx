import React from 'react'

function Topbar() {
  return (
        <div className=' fixed z-0 w-full lg:flex-grow'>
            <header className='flex bg-gray-700 text-white  items-center'>          
                <span className=' text-3xl flex flex-between ml-8 p-2.5'>BeanCounter</span>        
            </header>
        </div> 
  )
}

export default Topbar