import React, { useEffect } from 'react'
import { useState } from 'react';
import { useGlobalContext } from '../../globalContext/globalContext'
import ExpenceItems from '../IncomeItems/ExpenceItems'



function PastExpence() {
    
    const {addExpence, getExpences, deleteExpence, expenses}=useGlobalContext()

    useEffect(()=>{getExpences()},[])

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
            {expenses.map((expence)=>{
                const {_id, title, amount, date, catagory, description}=expence;
                return <ExpenceItems
                        key={_id}
                        id={_id}
                        title={title}
                        description={description}
                        amount={amount}
                        date={date}
                        catagory={catagory}
                        indicatorColor="var(--color-green)"
                        deleteItem={deleteExpence}
                />
            })}
        </div>
    </div>
  )
}

export default PastExpence