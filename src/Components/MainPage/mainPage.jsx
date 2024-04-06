import React from 'react'

function mainPage() {
  return (
    <>
    <div>


{/* Top 4 column for datas */}
      <div className='pt-1 grid md:grid-rows-1 md:grid-cols-4 grid-rows-2 grid-cols-2 gap-3'>

        {/* Current balance */}
        <div className='bg-[#cbd5e1]  rounded-3xl'>
          <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'>Current Balance</div>
          <div className='font-sans font-bold text-[#013567] text-4xl pl-6 pt-4'>₹10000</div>
        </div>

        {/* Total Expenses */}
        <div className='bg-[#cbd5e1]  rounded-3xl'>
        <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'>Total Expenses</div>
          <div className='font-sans font-bold text-[#013567] text-4xl pl-6 pt-4'>₹4000</div> 
        </div>

        {/* Expenses Today */}
        <div className='bg-[#cbd5e1]  rounded-3xl'>
        <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'> Total Incomes</div>
          <div className='font-sans pl-6 font-bold text-[#013567] text-4xl pt-4'>₹14000</div> 
         
        </div>

        {/* Monthly Expenses */}
        <div className='bg-[#fef3c7]  rounded-3xl'>
        <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'>  Spent today</div>
          <div className='font-sans pl-6 font-bold text-[#013567] text-4xl  pt-4 pb-3'>₹0</div> 
       
        </div>

      </div>
{/* Top 4 column end */}

    {/* Update information page */}
      <div className='grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1  gap-6 mt-4' style={{height:"490px"}}>
        
        <div className='p-1  pt-2 bg-[#f3e8ff] rounded-3xl'>Update Expenses</div>
        <div className='p-1 pt-2 bg-[#fff1f2] rounded-3xl'>Update Incomes</div>

      </div>

    </div>




    </>
    
  )
}

export default mainPage