import React, { useState } from 'react'
import { useGlobalContext } from '../../globalContext/globalContext'
import DatePicker from 'react-datepicker'

// import "react-datepicker/dist/react-datepicker.css"
import Form from '../Forms/Form'
import PastIncomes from '../PastIncomes/PastIncomes'
import ExpenceForm from '../Forms/ExpenceForm'
import PastExpence from '../PastIncomes/pastExpences'

function mainPage() {
  const {addIncome, incomes, getIncomes, deleteIncome, totalIncome ,totalExpence, currentBalance}=useGlobalContext()
  return (
    <>
    <div>

    
{/* Top 4 column for datas */}
      <div className='pt-1 grid md:grid-rows-1 md:grid-cols-4 grid-rows-2 grid-cols-2 gap-3'>

        {/* Current balance */}
        <div className='bg-[#cbd5e1]  rounded-3xl'>
          <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'>Current Balance</div>
          <div className='font-sans font-bold text-[#013567] text-4xl pl-6 pt-4'>₹<span>{currentBalance()}</span></div>
        </div>

        {/* Total Expenses */}
        <div className='bg-[#cbd5e1]  rounded-3xl'>
        <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'>Total Expenses</div>
          <div className='font-sans font-bold text-[#013567] text-4xl pl-6 pt-4'>₹<span>{totalExpence()}</span></div> 
        </div>

        {/* Expenses Today */}
        <div className='bg-[#cbd5e1]  rounded-3xl'>
        <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'> Total Incomes</div>
          <div className='font-sans pl-6 font-bold text-[#013567] text-4xl pt-4'>₹<span>{totalIncome()}</span></div> 
         
        </div>

        {/* Monthly Expenses */}
        <div className='bg-[#fef3c7]  rounded-3xl'>
        <div className='pt-4 pl-6 font-sans font-bold text-[#013567] text-2xl'>  Spent today</div>
          <div className='font-sans pl-6 font-bold text-[#013567] text-4xl  pt-4 pb-3'>₹0</div> 
       
        </div>

      </div>
{/* Top 4 column end */}

    {/* Update information page */}
      <div className='grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1  gap-6 mt-4 h-700px ' >
        
    <div className='p-1  pt-2 bg-[#fff] rounded-3xl' >
          <div className='m-3 mt-2 text-center font-lg font-sans font-bold text-[#2f6392] text-2xl'>Update Income</div>
          <Form/>
          <PastIncomes/>
      </div>
        <div className='p-1 pt-2 bg-[#fff1f2] rounded-3xl'>
        <div className='m-3 mt-2 text-center font-lg font-sans font-bold text-[#2f6392] text-2xl'>Update Expence</div>

          <ExpenceForm/>
          <PastExpence/>

          </div>
        </div>
</div>
   

    </>
    
  )
}

export default mainPage