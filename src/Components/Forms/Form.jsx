import React from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react';
import { useGlobalContext } from '../../globalContext/globalContext'
import swal from 'sweetalert2';
import styled from 'styled-components'

import 'react-datepicker/dist/react-datepicker.css'

function Form() {

      const {addIncome}=useGlobalContext()
    const [inputState, setInputState]=useState({
      title:'',
      amount:'',
      date:'',
      catagory:'',
      description:''
    })
    const {title, amount, date, catagory, description}=inputState;

    const handleInput=name=>e=>{
      setInputState({...inputState, [name]:e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const result = await swal.fire({
        title: "Are U Sure ?",
        text: "Add it !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Add it .",
        cancelButtonText: "Cancel it ."
      });
    
      if (result.isConfirmed) {
        await swal.fire("Added", "Added Successfully", "success");
        addIncome(inputState);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (result.dismiss === swal.DismissReason.cancel) {
        await swal.fire("Cancelled", "Not added, Try Again :)", "error");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    };
    
  return (
    <FormStyled onSubmit={handleSubmit}>
    <div>
      <input 
          type='text'
          value={title}
          name={'title'}
          required
          placeholder={'Income Type'}
          onChange={handleInput('title')}
          className='w-80 ring-1 ml-2 ring-gray-300  rounded-md px-3 py-2 mt-2  outline-none focus:ring-2 focus:ring-teal-300'
          
        /><br/>
         <input 
              type='number'
              value={amount}
              name={'amount'}
              required
              placeholder={'Income Amount'}
              onChange={handleInput('amount')}
              className=' w-80 ring-1 ml-2 ring-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'

              
          />
          <div className='input-control'>
              <DatePicker
                id='date' 
                placeholderText='Enter A Date'
                selected={inputState.date}
                // selected={date}
                dateFormat="dd/MM/yyyy"
                required
               
                onChange={(date)=>{
                  setInputState({...inputState, date: date})}
                }
                className=' w-80 ring-1 ml-2 ring-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'

            /></div>
             <div className="selects input-control">
                <select required value={catagory} name='catagory' id='catagory' onChange={handleInput('catagory')} className='w-80 ring-1 ml-2 ring-gray-300 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'>
                  <option value="" disabled >Select Option</option>
                  <option value="salary">Salary</option>
                  <option value="freelancing">Freelancing</option>
                  <option value="investments">Investments</option>
                  <option value="stocks">Stocks</option>
                  <option value="bankTransfer">Bank Transfer</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <textarea
                 name='description'
                  value={description} 
                  required
                  placeholder='Add a reference' 
                  id='description' cols={30} rows={2}
                   onChange={handleInput('description')}
                   className='ring-1 ring-gray-300  w-full h-20 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                   ></textarea><br></br>
              </div>
              <div className="flex  justify-center items-center mt-10">
                
                <button type='submit'  className='ml-2 flex flex-row  bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm mb-8'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3">
                      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>

                   Add Income</button>
              </div>
             
    </div>
    </FormStyled>
  )
}
const FormStyled=styled.form`



`;

export default Form;