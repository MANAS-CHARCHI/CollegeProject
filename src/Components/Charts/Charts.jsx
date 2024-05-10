import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../../globalContext/globalContext'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)


function Charts() {

    const dateFormat=(dateis)=>{

        const parsedDate = new Date(dateis);

        // Get the day, month, and year from the parsed date
        const day = parsedDate.getDate();
        const month = parsedDate.toLocaleString('default', { month: 'long' });
        const year = parsedDate.getFullYear();
    

        // Construct the formatted date string
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate
    }
    


    const {incomes, expenses}=useGlobalContext()
   
    const data={
        labels: incomes.map((income)=>{
            const {date}=income
            return dateFormat(date)
        }),
        datasets:[
            {
                label:'income',
                data:[
                    ...incomes.map((income)=>{
                        const {amount}=income
                        return amount
                    })
                ],
                backgroundColor: "green",
                tension:.29
            },
            {
                label:'expence',
                data:[
                    ...expenses.map((expence)=>{
                        const {amount}=expence
                        return amount
                    })
                ],
                backgroundColor: "red",
                tension:.29
            }

        ]
    }


  return (
    <div>
        <Line data={data}/>
        
    </div>
  )
}

export default Charts