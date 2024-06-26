import React from 'react'
import Charts from '../Charts/Charts'

function Analytics() {
  
  return (

   <div>
    <div className='grid grid-cols-1  grid-rows-6 md:grid-rows-2  md:grid-cols-2 gap-3' style={{height:"630px"}}>
        <div className=' bg-[#efe9e9] rounded-3xl text-lg text-center font-sans font-bold text-[#013567] pt-2'> 
          <div className='' >Daily Transaction Analysis</div>
        </div>
      <div className=' bg-[#efe9e9] rounded-3xl text-lg text-center row-span-3 pr-1 font-sans font-bold text-[#013567] pt-2'>
          <div>Last Transaction Details</div>
      </div>
      <div className=' bg-[#f2fbfc] rounded-3xl text-lg text-center row-span-3 md:row-start-2 font-sans font-bold row-start-2 text-[#013567] pt-2'>
          <div>Monthly Transaction Analysis</div>
          <div><Charts/></div>
      </div>

      
    </div>
   </div>
  )
}

export default Analytics