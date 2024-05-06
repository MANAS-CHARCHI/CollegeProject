import React from 'react';
import { useGlobalContext } from '../../globalContext/globalContext';

function incomeForm() {
    const {addIncome}=useGlobalContext()
  return (
    <div className='bg-red-800'>Incomes
      <div>jnkjuyg </div>
      <div>what to write is here</div>
    </div>
    
  )
}

export default incomeForm