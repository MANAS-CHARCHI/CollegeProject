import React, { useContext } from "react"
import axios from "axios"
import { useState } from "react";


const BASE_URL="http://localhost:3000/api/v1/";

const GlobalContext=React.createContext()

export const GlobalProvider=({children})=>{

    const [incomes, setIncomes]=useState([])
    const [expenses, setExpenses]=useState([])
    const [error, setError]=useState(null)

    const totalIncome=()=>{
      let totalIncome=0
      incomes.forEach((income)=>{
        totalIncome=totalIncome+income.amount
        
      })
      return totalIncome
    }
    const totalExpence=()=>{
      let totalExpence=0
      expenses.forEach((expence)=>{
        totalExpence=totalExpence+expence.amount
      })

      return totalExpence
    }
    const currentBalance=()=>{
      let currentBalanceIs=0
      let totalIncomeIs=totalIncome()
      let totalExpenceIs=totalExpence()
      currentBalanceIs=totalIncomeIs-totalExpenceIs
      return currentBalanceIs
    }

    // console.log("total", totalIncome())

    const addIncome = async (income) => {
        try {
          const response = await axios.post(`${BASE_URL}add-income`, income);
          // Handle successful response, if needed
          console.log("Income added successfully:", response.data);
        } catch (err) {
          // Handle error
          setError(err.response.data.message);
        }
      };
      const addExpence=async (expence)=>{
        try {
          const response = await axios.post(`${BASE_URL}add-expence`, expence);
          // Handle successful response, if needed
          console.log("Expence added successfully:", response.data);
        } catch (err) {
          // Handle error
          setError(err.response.data.message);
        }
      }
      const getExpences = async () => {
        const response = await axios.get(`${BASE_URL}get-expence`);
        setExpenses(response.data)
        // console.log(response.data)
      } 
      const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`);
        setIncomes(response.data)
        // console.log(response.data)
      }
      const deleteExpence=async (id)=>{
        const res=await axios.delete(`${BASE_URL}delete-expence/${id}`)
        window.location.reload();
     }
     const deleteIncome=async (id)=>{
        const res=await axios.delete(`${BASE_URL}delete-Income/${id}`)
        window.location.reload();
     }

    return(
        <GlobalContext.Provider value={{addIncome, incomes, getIncomes, deleteIncome, 
        totalIncome, addExpence, getExpences, deleteExpence, expenses, totalExpence, currentBalance }}>  
            {children}
        </GlobalContext.Provider>
    )
}

export const  useGlobalContext=()=>{
    return useContext(GlobalContext)
}