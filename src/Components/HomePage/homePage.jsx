import React from "react";
import welcomeImage from "../Images/welcomepageimage.png"
const homePage=()=>{

    return(
        <><div className="">
        <div className="grid grid-cols-2 grid-rows-6  md:grid-cols-3 md:grid-rows-3   gap-3 pt-4">

            {/* Welcome the user with users own name */}
                <div
                    style={{ 
                            backgroundImage: `url(${welcomeImage})`,
                            backgroundSize: 'contain',
                            backgroundPosition:'right',
                            backgroundRepeat: 'no-repeat',
                            color: '#013567', // Text color
                            height:'200px',
                            // width:'300px',
                            textAlign: 'left', // Center align text
                            padding: '20px',
                            borderRadius: '20px'
                        }} 
                    className="bg-[#f2c6bd] border border-[#dda49c] col-span-2 md:col-span-2 p-20  rounded-3xl " >
                    <div className="text-2xl font-sans">Welcome</div>
                    <div className="text-5xl font-sans font-bold ">Manas Charchi</div>
                    <div className="rounded-3xl text-[rgb(245,227,227)] bg-[#f5a998] w-28 mt-8 ml-4 text-center p-2.5 text-sm">Odisha, IN</div>
                </div>

            {/* Inbox data */}

                <div className="bg-[#fcf0e3] rounded-3xl pt-2 text-center md:row-start-1 md:col-start-3 row-start-8 col-span-2  ">
                    <div className="text-xl font-sans font-bold text-[#013567]">Notifications</div>
                </div>
            
            {/* Expance variation graph */}

                <div className="bg-[#eff6ff] md:row-span-2 md:col-span-1 row-span-2 rounded-3xl pt-2 col-span-2 text-center">
                <div className="text-xl font-sans text-[#013567] font-bold">Expenses Variations</div>
                </div>

            {/* Net Income Bar graph */}

                <div className="bg-[#eff6ff] md:row-span-2 md:col-span-1 row-span-2 rounded-3xl pt-2 col-span-2 text-center">
                <div className="text-xl font-sans font-bold text-[#013567]">Net Income</div>
                </div>
            
            {/* Expences Total */}

                <div className="bg-[#eff6ff]  rounded-3xl md:row-start-2 md:col-start-3 row-start-2 p-7 text-left ">
                <div className="text-xl font-sans font-bold text-[#013567]">Expenses</div>
                </div>
            
            {/* Incomes Total */}

                <div className="bg-[#eff6ff] rounded-3xl md:row-start-3 md:col-start-3 col-start-2 row-start-2 p-7 text-left">
                <div className="text-xl font-sans font-bold text-[#013567]">Incomes</div>
                </div>
            
        </div>
        </div>
        </>
    )
}
export default homePage