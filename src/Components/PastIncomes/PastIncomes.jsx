import React, { useEffect } from 'react'
import { useState } from 'react';
import { useGlobalContext } from '../../globalContext/globalContext'
import IncomeItems from '../IncomeItems/IncomeItems';



function PastIncomes() {
    
    const {addIncome, incomes, getIncomes, deleteIncome}=useGlobalContext()

    useEffect(()=>{getIncomes()},[])

    const [inputState, setInputState]=useState({
      title:'',
      amount:'',
      date:'',
      catagory:'',
      description:''
    })
    


  return (
    <div>
        <div>
            {incomes.map((income)=>{
                const {_id, title, amount, date, catagory, description}=income;
                return <IncomeItems
                        key={_id}
                        id={_id}
                        title={title}
                        description={description}
                        amount={amount}
                        date={date}
                        catagory={catagory}
                        indicatorColor="var(--color-green)"
                        deleteItem={deleteIncome}
                />
            })}
        </div>
    </div>
  )
}

export default PastIncomes